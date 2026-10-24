import Link from 'next/link';
import Image from 'next/image';
import { Aperture, ArrowUpRight, Clapperboard, Film } from 'lucide-react';

export default function LanguageHome() {
  return <main className="language-home studio-language-home">
    <div className="language-topline"><Clapperboard size={16} /> <span>PERSONAL PORTFOLIO · 2026</span><span className="topline-status">● STUDIO READY</span></div>
    <div className="language-hero">
      <div className="language-copy">
        <span className="serif-label"><Aperture size={18} /> Engineer · Developer · Creator</span>
        <h1>ALI MOOJID<br/><span>ABBAS.</span></h1>
        <p>Bridging engineering, data-driven automation, and AI-powered visual production.</p>
        <div className="language-actions">
          <Link className="language-button light" href="/en/cover">English Portfolio <ArrowUpRight size={16} /></Link>
          <Link className="language-button" href="/ar/cover" dir="rtl">النسخة العربية <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="language-photo"><Image src="/images/ali-moojid.jpg" alt="المهندس علي موجد عباس" fill priority sizes="(max-width: 700px) 80vw, 420px"/></div>
      <span className="language-stamp"><Film size={15} /> TAKE 01 · PORTFOLIO / 2026</span>
      <div className="home-film-edge" aria-hidden="true">{Array.from({length:12},(_,i)=><i key={i}/>)}</div>
    </div>
    <p className="language-note">اختر اللغة لفتح نسخة مستقلة. كل قسم له صفحة ورابط خاص به، وليس عرضًا مدموجًا.</p>
  </main>;
}
