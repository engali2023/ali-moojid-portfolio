import Link from 'next/link';
import Image from 'next/image';

export default function LanguageHome() {
  return <main className="language-home">
    <div className="language-topline">PERSONAL PORTFOLIO · 2026</div>
    <div className="language-hero">
      <div className="language-copy">
        <span className="serif-label">Engineer · Developer · Creator</span>
        <h1>ALI MOOJID<br/><span>ABBAS.</span></h1>
        <p>Bridging engineering, data-driven automation, and AI-powered visual production.</p>
        <div className="language-actions">
          <Link className="language-button light" href="/en/cover">English Portfolio <span>↗</span></Link>
          <Link className="language-button" href="/ar/cover" dir="rtl">النسخة العربية <span>↗</span></Link>
        </div>
      </div>
      <div className="language-photo"><Image src="/images/ali-moojid.jpg" alt="المهندس علي موجد عباس" fill priority sizes="(max-width: 700px) 80vw, 420px"/></div>
      <span className="language-stamp">PORTFOLIO / 2026</span>
    </div>
    <p className="language-note">اختر اللغة لفتح نسخة مستقلة. كل قسم له صفحة ورابط خاص به، وليس عرضًا مدموجًا.</p>
  </main>;
}
