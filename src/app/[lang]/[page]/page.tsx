import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const sections = ['cover','about','experience','education','projects','project-ai','project-data','project-web','expertise','contact'];
const content: Record<string, any> = {
  en: {
    langName: 'English', switchLabel: 'العربية', switchHref: '/ar/cover', dir: 'ltr',
    pages: {
      cover: { eyebrow: 'Engineer · Developer · Creator', title: 'PORTFOLIO', label: 'ENG. ALI MOOJID ABBAS', sub: 'Creative Technologist', body: 'Bridging engineering, data-driven automation, and AI-powered visual production.' },
      about: { eyebrow: '01 / INTRODUCTION', title: 'ABOUT ME.', label: 'Eng. Ali Moojid Abbas', body: 'Versatile Electronics Engineer and Python Developer bridging technical logic and visual storytelling. I specialize in data analysis, software automation, applied AI, and cinematic visual content.', tags: ['Python Development','Data Analysis','Generative AI','Motion Graphics','Creative Technology'] },
      experience: { eyebrow: '02 / WHAT I DO', title: 'EXPERIENCE.', label: 'Technical precision · Creative vision', body: 'I turn complex ideas into useful tools and compelling visual experiences, from the first sketch to the final delivery.', items: ['Python apps, scripts, and workflow automation','Data analysis, visualization, and reporting','Generative AI content and prompt pipelines','Video editing, motion graphics, and storytelling','Creative production and digital communication'] },
      education: { eyebrow: '03 / FOUNDATION', title: 'EDUCATION.', label: 'Learning never stops', items: [['ENGINEERING','Electronics Engineering','Systems thinking and technical problem-solving.'],['CONTINUOUS LEARNING','AI & Data Specialization','Generative AI, Python, analytics, and digital tools.'],['ONGOING','Creative Technology','Motion graphics and AI-assisted production workflows.']] },
      projects: { eyebrow: '04 / SELECTED WORK', title: 'SELECTED PROJECTS.', label: 'Ideas into impact', body: 'A selection of work across AI-powered visual production, analytics, and practical digital tools.' },
      'project-ai': { eyebrow: 'CASE STUDY / 01', title: 'AI VISUAL STUDIO.', label: 'First project', body: 'A cinematic content workflow turning concepts into storyboards, visual prompts, and polished short-form video.', tags: ['Generative AI','Storyboarding','Video Production'] },
      'project-data': { eyebrow: 'CASE STUDY / 02', title: 'DATA & INSIGHTS.', label: 'Second project', body: 'A data-focused toolkit for transforming raw social and business metrics into clear, decision-ready insights.', tags: ['Python','Analytics','Reporting'] },
      'project-web': { eyebrow: 'CASE STUDY / 03', title: 'SMART WEB TOOLS.', label: 'Third project', body: 'Practical digital products connecting intelligent APIs, automated workflows, and thoughtful interface design.', tags: ['Web Development','Automation','Applied AI'] },
      expertise: { eyebrow: '05 / CAPABILITIES', title: 'WHAT I BRING.', label: 'Engineering meets creativity', items: ['Software development with Python','Data analysis and visualization','Applied AI and generative workflows','Video editing and motion graphics','Digital storytelling and creative direction'], body: 'Capability statements are presented here; verified client testimonials can be added when available.' },
      contact: { eyebrow: '06 / CONTACT', title: 'THANK YOU.', label: "Let's build something meaningful", body: "Have an idea, a challenge, or a project in mind? Let's turn it into something remarkable.", tags: ['Email: ali.moojid@gmail.com','GitHub: engali2023'] }
    },
    nav: ['Cover','About','Experience','Education','Projects','AI Visual Studio','Data & Insights','Smart Web Tools','Expertise','Contact'], prev: 'Previous', next: 'Next', home: 'Language selection', footer: 'ENGINEERING × DATA × AI × VISUAL STORYTELLING'
  },
  ar: {
    langName: 'العربية', switchLabel: 'English', switchHref: '/en/cover', dir: 'rtl',
    pages: {
      cover: { eyebrow: 'مهندس · مطوّر · صانع محتوى', title: 'أعمالي', label: 'المهندس علي موجد عباس', sub: 'تقني إبداعي', body: 'أجمع بين الهندسة وتحليل البيانات والأتمتة وصناعة المحتوى البصري المدعوم بالذكاء الاصطناعي.' },
      about: { eyebrow: '01 / نبذة عني', title: 'من أنا؟', label: 'المهندس علي موجد عباس', body: 'مهندس إلكترونيات ومطور يجمع بين الدقة الهندسية والإبداع الرقمي. أتخصص في تطوير الحلول باستخدام Python، وتحليل البيانات، وأتمتة العمليات، وتوظيف الذكاء الاصطناعي لإنتاج محتوى بصري وسينمائي متقدم.', tags: ['تطوير Python','تحليل البيانات','الذكاء الاصطناعي','الموشن جرافيك','التقنيات الإبداعية'] },
      experience: { eyebrow: '02 / مجالات عملي', title: 'الخبرات والمهارات', label: 'دقة تقنية · رؤية إبداعية', body: 'أحوّل الأفكار المعقدة إلى أدوات عملية وتجارب بصرية مؤثرة، من التخطيط الأولي إلى التسليم النهائي.', items: ['تطوير تطبيقات وسكربتات Python وأتمتة سير العمل','تحليل البيانات وتصويرها وإعداد التقارير','إنشاء المحتوى بالذكاء الاصطناعي وتطوير البرومبتات','المونتاج والموشن جرافيك والسرد البصري','الإنتاج الإبداعي والاتصال الرقمي'] },
      education: { eyebrow: '03 / التأسيس والتعلّم', title: 'التعليم والتطوير', label: 'التعلّم رحلة مستمرة', items: [['الهندسة','هندسة الإلكترونيات','التفكير المنظومي وحل المشكلات التقنية.'],['تعلّم مستمر','الذكاء الاصطناعي وتحليل البيانات','الذكاء الاصطناعي التوليدي وPython والتحليلات.'],['تطوير مستمر','التقنيات الإبداعية','الموشن جرافيك وسير الإنتاج المدعومة بالذكاء الاصطناعي.']] },
      projects: { eyebrow: '04 / أعمال مختارة', title: 'المشاريع', label: 'من الفكرة إلى الأثر', body: 'نماذج من مجالات الإنتاج البصري بالذكاء الاصطناعي، وتحليل البيانات، وتطوير الأدوات الرقمية.' },
      'project-ai': { eyebrow: 'المشروع / 01', title: 'استوديو بصري بالذكاء الاصطناعي', label: 'المشروع الأول', body: 'سير عمل بصري سينمائي يحوّل الأفكار إلى سيناريوهات ولوحات قصصية وبرومبتات وصناعة فيديو قصير متكامل.', tags: ['ذكاء اصطناعي توليدي','ستوري بورد','إنتاج الفيديو'] },
      'project-data': { eyebrow: 'المشروع / 02', title: 'البيانات والرؤى', label: 'المشروع الثاني', body: 'أدوات تحليلية لتحويل بيانات الأداء والأعمال إلى مؤشرات واضحة تساعد على فهم النتائج واتخاذ القرارات.', tags: ['Python','تحليل البيانات','التقارير'] },
      'project-web': { eyebrow: 'المشروع / 03', title: 'أدوات ويب ذكية', label: 'المشروع الثالث', body: 'حلول رقمية عملية تجمع واجهات البرمجة الذكية وأتمتة العمليات وتصميم تجارب استخدام واضحة.', tags: ['تطوير الويب','الأتمتة','الذكاء الاصطناعي'] },
      expertise: { eyebrow: '05 / ما أقدّمه', title: 'المهارات الأساسية', label: 'الهندسة تلتقي بالإبداع', items: ['تطوير البرمجيات باستخدام Python','تحليل البيانات وتصويرها','تطبيقات الذكاء الاصطناعي التوليدي','المونتاج والموشن جرافيك','السرد البصري والإخراج الإبداعي'], body: 'يمكن إضافة شهادات وآراء العملاء الحقيقية عند توفرها.' },
      contact: { eyebrow: '06 / تواصل', title: 'شكرًا لك', label: 'لنبنِ شيئًا مميزًا معًا', body: 'هل لديك فكرة أو تحدٍ أو مشروع؟ لنحوّله معًا إلى تجربة رقمية مميزة.', tags: ['البريد: ali.moojid@gmail.com','GitHub: engali2023'] }
    },
    nav: ['الغلاف','نبذة عني','الخبرات','التعليم','المشاريع','استوديو الذكاء الاصطناعي','تحليل البيانات','أدوات الويب','المهارات','التواصل'], prev: 'السابق', next: 'التالي', home: 'اختيار اللغة', footer: 'الهندسة × البيانات × الذكاء الاصطناعي × السرد البصري'
  }
};

export function generateStaticParams() {
  return ['ar','en'].flatMap(lang => sections.map(page => ({ lang, page })));
}

export async function generateMetadata({ params }: { params: { lang: string; page: string } }) {
  const isAr = params.lang === 'ar';
  return { title: isAr ? 'المهندس علي موجد عباس | الأعمال' : 'Eng. Ali Moojid Abbas | Portfolio', description: isAr ? 'الموقع الشخصي للمهندس علي موجد عباس' : 'Personal portfolio of Eng. Ali Moojid Abbas' };
}

export default function PortfolioPage({ params }: { params: { lang: string; page: string } }) {
  if (!['ar','en'].includes(params.lang) || !sections.includes(params.page)) notFound();
  const d = content[params.lang];
  const p = d.pages[params.page];
  const idx = sections.indexOf(params.page);
  const prev = sections[(idx - 1 + sections.length) % sections.length];
  const next = sections[(idx + 1) % sections.length];
  const isCover = params.page === 'cover';
  return <main className="single-page-shell" dir={d.dir}>
    <header className="page-topbar"><Link href={`/${params.lang}/cover`} className="brand-mini">ALI MOOJID ABBAS <span>·</span> {d.langName}</Link><div className="top-actions"><span>{String(idx + 1).padStart(2,'0')} / {String(sections.length).padStart(2,'0')}</span><Link href={d.switchHref}>{d.switchLabel}</Link></div></header>
    <article className={`standalone-card ${isCover || params.page === 'projects' || params.page === 'contact' ? 'standalone-red' : 'standalone-paper'} ${isCover ? 'standalone-cover' : ''}`}>
      {isCover && <div className="standalone-photo"><Image src="/images/ali-moojid.jpg" alt={d.langName === 'العربية' ? 'صورة المهندس علي موجد عباس' : 'Portrait of Eng. Ali Moojid Abbas'} fill priority sizes="(max-width: 700px) 80vw, 420px"/></div>}
      <div className="standalone-index">{p.eyebrow}</div>
      <div className="standalone-main">
        <span className="standalone-script">{p.label}</span>
        <h1>{p.title}</h1>
        {p.sub && <h2 className="standalone-subtitle">{p.sub}</h2>}
        {p.body && <p className="standalone-body">{p.body}</p>}
        {p.items && <div className="standalone-items">{p.items.map((item: any, i: number) => Array.isArray(item) ? <div className="timeline-item" key={i}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div> : <div className="skill-item" key={i}><span>✳</span>{item}</div>)}</div>}
        {p.tags && <div className="standalone-tags">{p.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div>}
        {params.page === 'projects' && <div className="project-link-list"><Link href={`/${params.lang}/project-ai`}>{d.nav[5]} ↗</Link><Link href={`/${params.lang}/project-data`}>{d.nav[6]} ↗</Link><Link href={`/${params.lang}/project-web`}>{d.nav[7]} ↗</Link></div>}
        {params.page === 'contact' && <div className="standalone-tags"><a href="mailto:ali.moojid@gmail.com">✉ {d.langName === 'العربية' ? 'راسلني بالبريد' : 'Email me'}</a><a href="https://github.com/engali2023" target="_blank" rel="noreferrer">GitHub ↗</a></div>}
      </div>
      {!isCover && <div className="standalone-watermark">AM / 2026</div>}
      {isCover && <div className="cover-footer"><span>ENG. ALI MOOJID ABBAS</span><span>{p.sub || 'Creative Technologist'}</span></div>}
    </article>
    <nav className="page-navigation"><Link href={`/${params.lang}/${prev}`}>← {d.prev}</Link><Link href={`/${params.lang}/cover`} className="nav-home">{d.home}</Link><Link href={`/${params.lang}/${next}`}>{d.next} →</Link></nav>
    <div className="page-index-links">{sections.map((s, i) => <Link key={s} href={`/${params.lang}/${s}`} aria-label={d.nav[i]} title={d.nav[i]} className={s === params.page ? 'active' : ''}>{String(i+1).padStart(2,'0')}</Link>)}</div>
    <footer className="single-footer"><span>ALI MOOJID ABBAS</span><span>{d.footer}</span></footer>
  </main>;
}
