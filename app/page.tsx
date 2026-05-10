import Image from "next/image";
import { BookingForm } from "./booking-form";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/19145898/pexels-photo-19145898.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "护理师为宠物修剪造型"
  },
  {
    src: "https://images.pexels.com/photos/19145888/pexels-photo-19145888.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "小狗在专业洗护台洗澡"
  },
  {
    src: "https://images.pexels.com/photos/19145882/pexels-photo-19145882.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "宠物洗护台细节"
  }
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="泡泡尾巴宠物洗护店首页">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M12 17.2c-2.2 0-4.1 1.1-5.2 2.6-.8 1.1-2.5.3-2.2-1 .7-3 3.8-5.5 7.4-5.5s6.7 2.5 7.4 5.5c.3 1.3-1.4 2.1-2.2 1-1.1-1.5-3-2.6-5.2-2.6Z" />
                <path d="M7.4 10.7c1.2 0 2.1-1.2 2.1-2.7s-.9-2.7-2.1-2.7-2.1 1.2-2.1 2.7.9 2.7 2.1 2.7ZM16.6 10.7c1.2 0 2.1-1.2 2.1-2.7s-.9-2.7-2.1-2.7-2.1 1.2-2.1 2.7.9 2.7 2.1 2.7ZM12 9.4c1.1 0 2-1.2 2-2.7S13.1 4 12 4s-2 1.2-2 2.7.9 2.7 2 2.7Z" />
              </svg>
            </span>
            <span>泡泡尾巴 Pet Spa</span>
          </a>
          <div className="nav-links" aria-label="页面区块">
            <a href="#services">服务</a>
            <a href="#prices">套餐</a>
            <a href="#process">流程</a>
            <a href="#booking">预约</a>
          </div>
          <a className="nav-cta" href="#booking" aria-label="立即预约">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M8 2v4M16 2v4M3 10h18" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
            </svg>
            预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="泡泡尾巴宠物洗护店">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="kicker">Clean coat, calm mood</p>
              <h1>把洗澡变成一次温柔的小旅行</h1>
              <p className="hero-copy">
                犬猫洗护、美容修剪、皮毛护理和敏感宠安抚服务。透明可视化洗护间，一宠一消毒，护理师全程记录状态。
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                  预约今日档期
                </a>
                <a className="ghost-button" href="#services">
                  查看服务
                </a>
              </div>
            </div>
            <div className="quick-strip" aria-label="门店亮点">
              <div className="quick-item">
                <strong>45-90 分钟</strong>
                <span>常规洗护时长</span>
              </div>
              <div className="quick-item">
                <strong>1:1 护理</strong>
                <span>不混笼、不催单</span>
              </div>
              <div className="quick-item">
                <strong>8:30pm</strong>
                <span>工作日最晚到店</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-title">
                <span>Services</span>
                <h2>从爪尖到毛尖，照顾每一种小脾气</h2>
              </div>
              <p className="section-note">
                根据品种、毛量、皮肤状态和胆量安排护理方式，减少等待、吹风和陌生环境带来的压力。
              </p>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8 3h8l1 5H7l1-5ZM7 8h10l-1 13H8L7 8Z" />
                    <path d="M10 12h4M10 16h4" />
                  </svg>
                </div>
                <h3>基础洁净洗护</h3>
                <p>温和清洁、护毛素、耳道清理、脚底毛修整、指甲护理和基础梳理。</p>
              </article>
              <article className="service-card">
                <div className="icon-box coral" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m14.5 4.5-10 10a3 3 0 0 0 4.2 4.2l10-10" />
                    <path d="m13 6 5 5M16 3l5 5" />
                  </svg>
                </div>
                <h3>造型美容修剪</h3>
                <p>圆脸、泰迪装、柴犬线条、短毛清爽造型，按生活习惯调整长度。</p>
              </article>
              <article className="service-card">
                <div className="icon-box sun" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 3c3 3 6 5.8 6 10a6 6 0 0 1-12 0c0-4.2 3-7 6-10Z" />
                    <path d="M9.5 14.5c.8 1.4 2.2 2.1 4 2" />
                  </svg>
                </div>
                <h3>皮毛调理 SPA</h3>
                <p>针对换毛、干燥、毛结和异味，使用低刺激浴液与分区吹干流程。</p>
              </article>
              <article className="service-card">
                <div className="icon-box sage" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 13c0-4 3.5-7 8-7s8 3 8 7" />
                    <path d="M6 13v3a2 2 0 0 0 2 2h1v-7H8a2 2 0 0 0-2 2ZM18 13v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
                  </svg>
                </div>
                <h3>敏感宠安抚</h3>
                <p>幼宠、老年宠、胆小宠可预约慢速洗护，降低噪音、增加休息间隔。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="gallery-band" aria-label="洗护环境">
          <div className="gallery-wrap">
            <div className="gallery-copy">
              <p className="kicker">Open care room</p>
              <h2>看得见的流程，摸得到的蓬松</h2>
              <p>洗护前先检查皮肤、毛结、耳朵和脚垫；洗护后发送护理记录、状态照片和下次建议周期。</p>
              <ul className="check-list">
                <li>独立洗护台与工具分区消毒</li>
                <li>低温分段吹干，避免过热和惊吓</li>
                <li>犬猫分时段预约，减少互相干扰</li>
              </ul>
            </div>
            <div className="gallery-images">
              {galleryImages.map((image) => (
                <Image key={image.src} src={image.src} alt={image.alt} width={1200} height={900} sizes="(max-width: 960px) 100vw, 48vw" />
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="prices">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-title">
                <span>Packages</span>
                <h2>清楚标价，到店前就知道怎么选</h2>
              </div>
              <p className="section-note">最终价格按体型、毛量和毛结程度确认，护理师会先沟通再开始服务。</p>
            </div>
            <div className="price-grid">
              <article className="price-card">
                <span className="tag">日常洁净</span>
                <h3>轻盈洗护</h3>
                <p>适合短毛、低毛结、定期清洁的宠物。</p>
                <div className="price">
                  <span>￥</span>
                  <strong>88</strong>
                  <span>起</span>
                </div>
                <ul className="price-list">
                  <li>基础沐浴与吹干</li>
                  <li>耳朵、指甲、脚底毛</li>
                  <li>护理记录一份</li>
                </ul>
                <a className="text-button" href="#booking">
                  预约这个套餐
                </a>
              </article>
              <article className="price-card featured">
                <span className="tag">人气推荐</span>
                <h3>蓬松全套</h3>
                <p>适合长毛、卷毛或需要完整整理的宠物。</p>
                <div className="price">
                  <span>￥</span>
                  <strong>168</strong>
                  <span>起</span>
                </div>
                <ul className="price-list">
                  <li>分区洗护与护毛</li>
                  <li>基础修剪与精细梳毛</li>
                  <li>香氛围脖与状态照片</li>
                </ul>
                <a className="text-button" href="#booking">
                  预约这个套餐
                </a>
              </article>
              <article className="price-card">
                <span className="tag">深度护理</span>
                <h3>皮毛 SPA</h3>
                <p>适合换毛季、干燥、异味或毛发打结护理。</p>
                <div className="price">
                  <span>￥</span>
                  <strong>238</strong>
                  <span>起</span>
                </div>
                <ul className="price-list">
                  <li>皮肤状态评估</li>
                  <li>低敏浴液与保湿护理</li>
                  <li>下次护理周期建议</li>
                </ul>
                <a className="text-button" href="#booking">
                  预约这个套餐
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-title">
                <span>Process</span>
                <h2>四步完成一次安心洗护</h2>
              </div>
              <p className="section-note">每个环节都有明确交接，适合第一次到店或对洗澡比较紧张的宠物。</p>
            </div>
            <div className="steps-grid">
              <article className="step">
                <h3>预约沟通</h3>
                <p>填写宠物品种、体重、性格和近期皮肤状况，提前安排合适护理师。</p>
              </article>
              <article className="step">
                <h3>到店评估</h3>
                <p>检查毛结、耳朵、脚垫和皮肤，确认服务项目与预计完成时间。</p>
              </article>
              <article className="step">
                <h3>洗护造型</h3>
                <p>按宠物耐受程度分段进行，吹干时控制温度和噪音。</p>
              </article>
              <article className="step">
                <h3>交接回家</h3>
                <p>发送照片、护理记录和下次建议，让日常护理更容易接上。</p>
              </article>
            </div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="section-inner">
            <div className="booking-layout">
              <aside className="contact-panel">
                <h2>预约泡泡尾巴</h2>
                <p>提交后前台会在营业时间内确认档期。急单可以直接拨打电话，我们会优先查看当天空位。</p>
                <div className="contact-list">
                  <div className="contact-item">
                    <div className="icon-box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
                      </svg>
                    </div>
                    <div>
                      <strong>电话</strong>
                      <span>021-8866-0919</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icon-box coral" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <strong>地址</strong>
                      <span>梧桐路 118 号 1 层，近公园南门</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icon-box sun" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </div>
                    <div>
                      <strong>营业时间</strong>
                      <span>周一至周日 10:00 - 20:30</span>
                    </div>
                  </div>
                </div>
              </aside>

              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 泡泡尾巴宠物洗护店</span>
          <span>一宠一消毒 · 透明洗护 · 温柔交接</span>
        </div>
      </footer>
    </>
  );
}
