import { spawn, spawnSync } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, "docs");
const clientDir = path.join(projectRoot, "dist", "client");
const basePath = (process.env.GITHUB_PAGES_BASE_PATH || "/demoemoslime").replace(/\/$/, "");
const port = Number(process.env.STATIC_EXPORT_PORT || 4173);
const externalUrl = process.env.STATIC_EXPORT_URL;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await mkdir(path.join(outputDir, "_next", "static"), { recursive: true });
await cp(
  path.join(clientDir, "_next", "static", "css"),
  path.join(outputDir, "_next", "static", "css"),
  { recursive: true },
);

for (const asset of [
  "domestic-highspeed.jpg",
  "obc-courier.png",
  "favicon.svg",
  "file.svg",
  "globe.svg",
  "window.svg",
]) {
  await cp(path.join(clientDir, asset), path.join(outputDir, asset));
}

let server;
let pageUrl = externalUrl;

if (!pageUrl) {
  const packageManagerScript = process.env.npm_execpath;
  const command = packageManagerScript ? process.execPath : (process.platform === "win32" ? "npm.cmd" : "npm");
  const args = packageManagerScript
    ? [packageManagerScript, "start", "--", "--port", String(port)]
    : ["start", "--", "--port", String(port)];
  server = spawn(command, args, {
    cwd: projectRoot,
    env: process.env,
    detached: true,
    shell: !packageManagerScript && process.platform === "win32",
    stdio: "ignore",
  });
  server.unref();
  pageUrl = `http://127.0.0.1:${port}/`;
}

async function waitForPage(url) {
  let lastError;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw lastError || new Error("The production page did not become ready.");
}

try {
  const response = await waitForPage(pageUrl);
  let html = await response.text();

  // The homepage is content-only. Removing hydration scripts makes the export
  // independent of a running application server while preserving native links,
  // forms, the mobile details menu, and the complete visual design.
  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
    .replace(
      /(["'])\/(?:_next\/|domestic-highspeed\.jpg|obc-courier\.png|favicon\.svg|file\.svg|globe\.svg|window\.svg)/g,
      (match) => `${match[0]}${basePath}${match.slice(1)}`,
    );

  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
  await writeFile(path.join(outputDir, "404.html"), html, "utf8");
  await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");
} finally {
  if (server && !server.killed) {
    if (process.platform === "win32") {
      spawnSync("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore" });
    } else {
      try {
        process.kill(-server.pid, "SIGTERM");
      } catch {
        // The server may have already exited after a failed startup.
      }
    }
  }
}

console.log(`GitHub Pages export created in ${outputDir}`);
process.exit(0);

