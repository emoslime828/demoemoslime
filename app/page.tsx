const services = [
  {
    number: "01",
    eyebrow: "TIME CRITICAL",
    title: "国际紧急物流",
    copy: "从 OBC 专差到 NFO 紧急空运，为高价值、强时效货物规划最短路径。",
    image:
      "https://cdn.myxypt.com/724413ea/23/03/61839c65a4faeb21df24950c955a8a86b5b7c1aa.jpg",
    links: ["国际手提运输", "NFO", "国际时效空运"],
  },
  {
    number: "02",
    eyebrow: "DOMESTIC EXPRESS",
    title: "国内紧急物流",
    copy: "联动航空、高铁与专人交付网络，在省际之间实现快速、灵活、准时的门到门运输。",
    image: "/domestic-highspeed.jpg",
    links: ["国内手提运输", "快速空运", "高铁即时达"],
  },
  {
    number: "03",
    eyebrow: "LIFE SCIENCE",
    title: "生命科学冷链运输",
    copy: "覆盖血样、疫苗、细胞与诊断试剂，用可追溯温控守护每一份样本价值。",
    image:
      "https://cdn.myxypt.com/724413ea/23/03/72600dc363b645db295e9b7baf6a1798bad5dfd4.jpg",
    links: ["血样运输", "临床标本运输", "医药冷链运输", "诊断试剂运输", "疫苗运输"],
  },
  {
    number: "04",
    eyebrow: "ON BOARD COURIER",
    title: "OBC 手提运输",
    copy: "由专属运输专家全程随行，跨境交接清晰可见，关键节点实时同步。",
    image: "/obc-courier.png",
    links: ["国内（中国）手提运输", "国际手提运输", "冷链手提运输"],
  },
];

const stats = [
  ["20", "年高时效物流经验"],
  ["50+", "服务国家与地区"],
  ["1,000+", "全球企业客户"],
  ["24/7", "全天候响应"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="腾翼搏时首页">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-copy">
            <b>SpeedGL</b>
            <small>腾翼搏时</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          <a href="#solutions">解决方案</a>
          <a href="#network">全球网络</a>
          <a href="#about">关于我们</a>
          <a href="#contact">联系我们</a>
        </nav>

        <div className="header-actions">
          <a className="track-link" href="#tracking">订单查询</a>
          <a className="nav-cta" href="#contact">咨询方案</a>
          <details className="mobile-menu">
            <summary aria-label="打开菜单"><span></span><span></span></summary>
            <nav aria-label="移动端导航">
              <a href="#solutions">解决方案</a>
              <a href="#network">全球网络</a>
              <a href="#about">关于我们</a>
              <a href="#tracking">订单查询</a>
              <a href="#contact">联系我们</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="高速铁路紧急物流运输场景" />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow light">SPEED CHANGES YOUR FUTURE</p>
          <h1>全球关键货物<br />分秒必达</h1>
          <p className="hero-intro">
            高时效、个性化的全球物流服务。<br className="desktop-break" />
            从中国出发，连接全球每一个关键节点。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solutions">探索解决方案</a>
            <a className="button button-glass" href="#contact">联系运输顾问 <span>↗</span></a>
          </div>
        </div>
        <div className="hero-proof" aria-label="服务优势">
          <span>全球 50+ 国家与地区</span>
          <span>24 小时即时响应</span>
          <span>WHO GDP 品质体系</span>
        </div>
        <a className="scroll-cue" href="#intro" aria-label="继续浏览"><span>↓</span></a>
      </section>

      <section className="intro section" id="intro">
        <p className="eyebrow">腾翼搏时 · 始于 2006</p>
        <h2>让复杂的运输，<br />变得简单而确定。</h2>
        <p className="lead">
          面向新能源汽车、半导体与生命科学行业，我们将全球网络、专业团队与全程追踪整合为一套清晰可靠的交付体验。
        </p>
      </section>

      <section className="services" id="solutions">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">核心解决方案</p>
            <h2>为每一次关键交付，<br />选择正确的路径。</h2>
          </div>
          <a className="text-link" href="https://www.speedgl.com/product/">查看全部服务 <span>↗</span></a>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <img src={service.image} alt="" loading="lazy" />
              <div className="service-overlay" />
              <div className="service-top">
                <span>{service.number}</span>
                <span>{service.eyebrow}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <div className="service-links">
                  {service.links.map((link) => <span key={link}>{link}</span>)}
                </div>
                <a href="#contact" aria-label={`咨询${service.title}`}>了解更多 <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="network" id="network">
        <div className="network-glow network-glow-one" />
        <div className="network-glow network-glow-two" />
        <div className="network-orbit orbit-one" />
        <div className="network-orbit orbit-two" />
        <div className="network-copy">
          <p className="eyebrow light">GLOBAL NETWORK</p>
          <h2>昼夜不息，<br />全球协同。</h2>
          <p>覆盖全球 50 多个国家与地区，国内 32 个省份。无论货物在哪里，专业团队都能快速接力。</p>
          <a className="button button-light" href="https://www.speedgl.com/p/networkInternational.html">了解全球网络 <span>↗</span></a>
        </div>
        <div className="network-cities" aria-hidden="true">
          <span className="city city-shanghai">上海<i /></span>
          <span className="city city-frankfurt">法兰克福<i /></span>
          <span className="city city-singapore">新加坡<i /></span>
          <span className="city city-chicago">芝加哥<i /></span>
        </div>
      </section>

      <section className="stats section" id="about">
        <div className="section-heading centered">
          <p className="eyebrow">值得托付的专业能力</p>
          <h2>速度，是承诺。<br />专业，让承诺抵达。</h2>
        </div>
        <div className="stat-grid">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="trust-strip">
          <span>WHO GDP</span>
          <span>全程温控</span>
          <span>实时追踪</span>
          <span>专业专差</span>
          <span>全球门到门</span>
        </div>
      </section>

      <section className="tracking section" id="tracking">
        <div className="tracking-panel">
          <div>
            <p className="eyebrow light">SHIPMENT TRACKING</p>
            <h2>每一个节点，<br />都清晰可见。</h2>
          </div>
          <form className="tracking-form" action="https://www.speedgl.com/search.php" method="get">
            <label htmlFor="waybill">输入运单号或货单号</label>
            <div>
              <input id="waybill" name="wd" placeholder="例如：SGL 20260814001" autoComplete="off" />
              <button type="submit">查询订单 <span>→</span></button>
            </div>
            <small>如需紧急帮助，请联系 24 小时服务热线 021-51870916</small>
          </form>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">24 / 7 全球响应</p>
          <h2>下一次关键交付，<br />从这里开始。</h2>
          <p>告诉我们货物类型、温度与时效要求，运输顾问将为你快速制定方案。</p>
          <div className="contact-actions">
            <a className="button button-primary" href="tel:+862151870916">致电 021-51870916</a>
            <a className="button button-outline" href="https://www.speedgl.com/inquiry/">提交运输需求 <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span className="brand-copy"><b>SpeedGL</b><small>腾翼搏时</small></span>
          </a>
          <p>关键物流，不负所托。</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 上海腾翼搏时国际货运代理股份有限公司</span>
          <div><a href="https://www.speedgl.com/p/about.html">关于我们</a><a href="https://www.speedgl.com/p/contact.html">联系我们</a><a href="http://en.speedgl.com/">EN</a></div>
        </div>
      </footer>
    </main>
  );
}
