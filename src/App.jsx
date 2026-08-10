import ResearchPage from "./ResearchPage";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Menu,
  X,
  ArrowRight,
  Cpu,
  BarChart3,
  Network,
  Radio,
  BrainCircuit,
  ShieldCheck,
  Activity,
  Database,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Hexagon,
  Radar,
} from "lucide-react";

const copy = {
  mn: {
    nav: ["Нүүр", "Шийдэл", "Архитектур", "TOGAF", "Roadmap", "Холбоо"],
    cta: "Холбогдох",
    heroBrand: "BARULAS",
    heroBrandSub: "MINING LLC",
    heroEyebrow: "SMART MINING · DIGITAL TWIN PLATFORM",
    heroTitle: "Уурхайн үйл ажиллагааны амьд дижитал ихэр",
    heroText:
      "Business process, IoT, AI analytics болон decision intelligence-ийг нэгдсэн digital twin орчинд холбож, бодит цагийн operational command center бүтээнэ.",
    heroPrimary: "Шийдлүүд харах",
    heroSecondary: "Roadmap үзэх",
    twinLabel: "MINE DIGITAL TWIN · LIVE",
    twinCoords: "N 47.92° · E 106.92° · SITE DT-01",
    stats: [
      ["2014+", "Үйл ажиллагааны туршлага"],
      ["7", "Architecture layer"],
      ["AI + IoT", "Operational intelligence"],
    ],
    problemTitle: "Дижитал системүүд байгаа ч нэгдсэн intelligence дутмаг",
    problemText:
      "ERP, CMMS, BI, IoT, Fleet Management салангид ажиллахад real-time харагдах байдал, шийдвэрийн хурд, гүйцэтгэл сулардаг.",
    problems: [
      "Системүүд салангид, өгөгдөл silo хэлбэртэй",
      "Шийдвэр гаргалт туршлагад хэт тулгуурласан",
      "Real-time operational visibility сул",
      "Data governance ба analytics maturity хангалтгүй",
    ],
    solutionTitle: "Barulas-ийн үндсэн шийдлүүд",
    solutionText:
      "Судалгаа, зөвлөх үйлчилгээ, технологийн интеграц, дата аналитик, системийн динамик загварчлалыг нэгтгэсэн шийдэл.",
    solutions: [
      ["Digital Business Process Maturity", "Process automation, workflow standardization, data integration."],
      ["Digital Decision-Making Maturity", "Dashboard-driven management, predictive analytics, KPI optimization."],
      ["Smart Mining Architecture", "IoT layer, operational systems, AI analytics, performance optimization."],
      ["System Dynamics & Simulation", "Feedback loop analysis, dynamic capability modeling, performance simulation."],
      ["AI + Operational Intelligence", "Predictive maintenance, risk monitoring, decision support system."],
      ["Research & Strategic Consulting", "Maturity assessment, roadmap, collaboration ecosystem design."],
    ],
    architectureTitle: "Smart Mining Architecture",
    architectureText:
      "Үйл ажиллагааны өгөгдлийг нэгтгэж, AI analytics болон decision intelligence-ээр performance optimization хийх 7 давхар архитектур.",
    layers: [
      "Mining operations layer",
      "Equipment & IoT layer",
      "Operational systems layer",
      "Integrated context layer",
      "AI + analytics layer",
      "Decision intelligence layer",
      "Performance optimization layer",
    ],
    roadmapTitle: "Хамтын ажиллагааны roadmap",
    roadmap: [
      "Strategic alignment",
      "Research cooperation",
      "Pilot implementation",
      "Technology transfer",
      "Localization",
      "Smart mining ecosystem",
    ],
    finalCtaTitle:
      "Уурхайн үйл ажиллагаагаа дата, AI, real-time decision intelligence дээр суурилсан шинэ түвшинд гаргая.",
    finalCtaText:
      "Barulas Mining LLC нь судалгаа, зөвлөх үйлчилгээ, технологийн интеграц болон smart mining ecosystem хөгжүүлэлтээр хамтран ажиллахад бэлэн.",
    contactTitle: "Холбоо барих",
    address: "Улаанбаатар хот, Монгол Улс",
    mapTitle: "Digital Twin Site Map",
    mapText:
      "Haul route, IoT node, equipment zone болон AI alert-ийг нэгдсэн twin гадаргуу дээр харуулсан mine command view.",
    aiTitle: "AI Predictive Analytics Center",
    aiText:
      "Forecasting, optimization болон operational intelligence — smart mining digital twin-ийн шийдвэрийн төв.",
  },
  en: {
    nav: ["Home", "Solutions", "Architecture", "TOGAF", "Roadmap", "Contact"],
    cta: "Contact us",
    heroBrand: "BARULAS",
    heroBrandSub: "MINING LLC",
    heroEyebrow: "SMART MINING · DIGITAL TWIN PLATFORM",
    heroTitle: "A living digital twin for mining operations",
    heroText:
      "We unify business process, IoT, AI analytics, and decision intelligence into one digital twin environment — a real-time operational command center.",
    heroPrimary: "Explore solutions",
    heroSecondary: "View roadmap",
    twinLabel: "MINE DIGITAL TWIN · LIVE",
    twinCoords: "N 47.92° · E 106.92° · SITE DT-01",
    stats: [
      ["2014+", "Operational experience"],
      ["7", "Architecture layers"],
      ["AI + IoT", "Operational intelligence"],
    ],
    problemTitle: "Digital systems exist — integrated intelligence does not",
    problemText:
      "When ERP, CMMS, BI, IoT, and fleet management run apart, real-time visibility, decision speed, and performance stay limited.",
    problems: [
      "Fragmented systems and data silos",
      "Experience-driven decision-making",
      "Weak real-time operational visibility",
      "Limited data governance and analytics maturity",
    ],
    solutionTitle: "Core Barulas solutions",
    solutionText:
      "An integrated approach combining research, consulting, technology integration, data analytics, and system dynamics modeling.",
    solutions: [
      ["Digital Business Process Maturity", "Process automation, workflow standardization, data integration."],
      ["Digital Decision-Making Maturity", "Dashboard-driven management, predictive analytics, KPI optimization."],
      ["Smart Mining Architecture", "IoT layer, operational systems, AI analytics, performance optimization."],
      ["System Dynamics & Simulation", "Feedback loop analysis, dynamic capability modeling, performance simulation."],
      ["AI + Operational Intelligence", "Predictive maintenance, risk monitoring, decision support system."],
      ["Research & Strategic Consulting", "Maturity assessment, roadmap, collaboration ecosystem design."],
    ],
    architectureTitle: "Mine-to-Mill Smart Mining Architecture",
    architectureText:
      "A seven-layer architecture that integrates operational data into AI analytics, decision intelligence, and performance optimization.",
    layers: [
      "Mining operations layer",
      "Equipment & IoT layer",
      "Operational systems layer",
      "Integrated context layer",
      "AI + analytics layer",
      "Decision intelligence layer",
      "Performance optimization layer",
    ],
    roadmapTitle: "Collaboration roadmap",
    roadmap: [
      "Strategic alignment",
      "Research cooperation",
      "Pilot implementation",
      "Technology transfer",
      "Localization",
      "Smart mining ecosystem",
    ],
    finalCtaTitle:
      "Move your mining operation to a new level powered by data, AI, and real-time decision intelligence.",
    finalCtaText:
      "Barulas Mining LLC is ready to collaborate on research, consulting, technology integration, and smart mining ecosystem development.",
    contactTitle: "Contact",
    address: "Ulaanbaatar, Mongolia",
    mapTitle: "Digital Twin Site Map",
    mapText:
      "Haul routes, IoT nodes, equipment zones, and AI alerts on one twin surface for mine command visibility.",
    aiTitle: "AI Predictive Analytics Center",
    aiText:
      "Forecasting, optimization, and operational intelligence — the decision core of the smart mining digital twin.",
  },
};

const icons = [Cpu, BarChart3, Network, Activity, BrainCircuit, ShieldCheck];
const navIds = ["home", "solutions", "architecture", "togaf", "roadmap", "contact"];

const tickerItems = [
  "FLEET SYNC 18/21",
  "CRUSHER LOAD 82%",
  "TWIN LATENCY 42ms",
  "AI RISK INDEX LOW",
  "IOT NODES 146 ONLINE",
  "HAUL CYCLE 18.6 MIN",
  "ORE GRADE CONF 92.4%",
  "SAFETY ALERT 1 ACTIVE",
];

export default function BarulasWebsiteHome() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("mn");
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState(() => new Date());

  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (page === "research") {
    return <ResearchPage onBack={() => setPage("home")} />;
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const clockLabel = clock.toLocaleTimeString(lang === "mn" ? "mn-MN" : "en-GB", {
    hour12: false,
  });

  return (
    <div className="twin-shell min-h-screen text-[var(--color-fog)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,11,14,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <img
              src="/BM.gif"
              alt="Barulas Mining LLC"
              className="h-11 w-11 object-cover"
              style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)" }}
            />
            <div className="text-left">
              <div className="font-display text-xl font-bold tracking-[0.18em] text-white">BARULAS</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-steel)]">
                Mining LLC · Digital Twin
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.map((item, index) => (
              <button key={item} onClick={() => scrollTo(navIds[index])} className="nav-link">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-2 border border-[var(--line)] px-3 py-1.5 text-[11px] tracking-[0.16em] text-[var(--color-steel)] lg:flex">
              <span className="live-dot" />
              {clockLabel} UTC+8
            </div>
            <LanguageSwitch lang={lang} setLang={setLang} />
            <button onClick={() => scrollTo("contact")} className="btn-primary px-5 py-2.5 text-sm">
              {t.cta}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[var(--line)] bg-[var(--color-mine-950)] px-4 py-4 md:hidden">
            <div className="mb-4 flex justify-end">
              <LanguageSwitch lang={lang} setLang={setLang} />
            </div>
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollTo(navIds[index])}
                className="block w-full py-3 text-left font-display text-lg tracking-wide text-[var(--color-fog)]"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <div className="status-rail">
        <div className="status-rail-track py-2.5 pl-4">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-2">
              <Hexagon size={11} className="text-[var(--color-twin)]" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <main>
        <section id="home" className="hero-field px-4 lg:px-8">
          <div className="twin-canvas" aria-hidden>
            <div className="twin-mesh" />
            <div className="contour" />
            <div className="contour" />
            <div className="contour" />
            <div className="scan-sweep" />
            {[12, 28, 44, 61, 77].map((left, i) => (
              <div
                key={left}
                className="data-stream"
                style={{
                  left: `${left}%`,
                  height: `${140 + i * 40}px`,
                  top: `${8 + i * 6}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
            <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                className="haul-route"
                d="M18 28 C 30 22, 42 34, 55 30 S 78 42, 84 58"
                fill="none"
                stroke="rgba(46,196,182,0.55)"
                strokeWidth="0.35"
              />
              <path
                className="haul-route"
                d="M22 62 C 38 48, 48 70, 66 56 S 80 70, 88 74"
                fill="none"
                stroke="rgba(200,121,65,0.45)"
                strokeWidth="0.3"
                style={{ animationDelay: "-1.2s" }}
              />
            </svg>
            <TwinNode left="58%" top="36%" tone="var(--color-twin)" label="PIT" />
            <TwinNode left="72%" top="48%" tone="var(--color-ore)" label="CRUSH" />
            <TwinNode left="48%" top="58%" tone="var(--color-twin)" label="FLEET" />
            <TwinNode left="80%" top="68%" tone="var(--color-signal)" label="IOT" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[min(100vh,920px)] max-w-7xl flex-col justify-center py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-3xl"
            >
              <div className="mb-6 flex flex-wrap items-end gap-x-4 gap-y-1">
                <h1 className="font-display text-6xl font-bold leading-none tracking-[0.12em] text-white md:text-8xl">
                  {t.heroBrand}
                </h1>
                <span className="pb-2 font-display text-sm font-semibold tracking-[0.35em] text-[var(--color-ore-bright)] md:text-base">
                  {t.heroBrandSub}
                </span>
              </div>

              <div className="section-kicker mb-4">{t.heroEyebrow}</div>

              <h2 className="font-display max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                {t.heroTitle}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-steel)] md:text-lg">
                {t.heroText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setPage("research")}
                  className="btn-primary px-7 py-3.5 text-sm uppercase"
                >
                  {t.heroPrimary} <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollTo("roadmap")}
                  className="btn-ghost px-7 py-3.5 text-sm uppercase"
                >
                  {t.heroSecondary}
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[var(--color-steel)]">
                <span className="inline-flex items-center gap-2">
                  <span className="live-dot" />
                  {t.twinLabel}
                </span>
                <span className="hidden h-3 w-px bg-[var(--line)] sm:block" />
                <span>{t.twinCoords}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
            {t.stats.map(([value, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="panel-frame px-6 py-5"
              >
                <span className="corner-mark tr" />
                <span className="corner-mark bl" />
                <div className="font-display text-3xl font-bold text-[var(--color-ore-bright)]">{value}</div>
                <div className="mt-2 text-sm text-[var(--color-steel)]">{label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8">
          <div className="panel-frame mx-auto max-w-7xl p-8 lg:p-12">
            <span className="corner-mark tr" />
            <span className="corner-mark bl" />
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="section-kicker mb-3">Operational Gap</div>
                <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{t.problemTitle}</h2>
                <p className="mt-4 leading-7 text-[var(--color-steel)]">{t.problemText}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.problems.map((p) => (
                  <div key={p} className="border border-[var(--line)] bg-[rgba(7,11,14,0.55)] p-5">
                    <ShieldCheck className="mb-3 text-[var(--color-ore)]" size={22} />
                    <p className="text-sm font-medium leading-6 text-[var(--color-fog)]">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SmartMineMap title={t.mapTitle} text={t.mapText} />
        <AIPredictiveCenter title={t.aiTitle} text={t.aiText} />

        <section id="solutions" className="px-4 py-20 lg:px-8">
          <SectionHeading title={t.solutionTitle} text={t.solutionText} kicker="Solutions Suite" />
          <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.solutions.map(([title, desc], i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={title}
                  whileHover={{ y: -4 }}
                  className="panel-frame group p-6 transition-colors hover:border-[var(--line-strong)]"
                >
                  <span className="corner-mark tr" />
                  <Icon className="mb-5 text-[var(--color-twin)] transition-transform group-hover:scale-110" size={30} />
                  <div className="mb-2 font-display text-xs tracking-[0.24em] text-[var(--color-steel)]">
                    MODULE 0{i + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-steel)]">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="architecture" className="px-4 py-20 lg:px-8">
          <SectionHeading title={t.architectureTitle} text={t.architectureText} kicker="Twin Stack" />
          <div className="mx-auto mt-12 max-w-5xl space-y-3">
            {t.layers.map((layer, i) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="architecture-step flex items-center gap-4 border border-[var(--line)] bg-[rgba(16,24,32,0.65)] px-4 py-4 pl-6"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] font-display text-lg font-bold text-[var(--color-twin)]">
                  {i + 1}
                </div>
                <div className="font-display text-lg font-semibold text-white">{layer}</div>
                <Layers3 className="ml-auto text-[var(--color-steel)]" size={18} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="togaf" className="px-4 py-20 lg:px-8">
          <SectionHeading
            kicker="Enterprise Framework"
            title="TOGAF Enterprise Architecture"
            text="Business, Application, Data болон Technology architecture layer дээр суурилсан smart mining enterprise architecture framework."
          />
          <div className="panel-frame mx-auto mt-12 max-w-7xl overflow-hidden">
            <span className="corner-mark tr" />
            <span className="corner-mark bl" />
            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[var(--color-steel)]">
              <span>TOGAF · Enterprise Blueprint</span>
              <span className="inline-flex items-center gap-2">
                <span className="live-dot" /> Synced
              </span>
            </div>
            <img src="/Togaf.png" alt="TOGAF Enterprise Architecture" className="h-auto w-full object-cover" />
          </div>
        </section>

        <section id="roadmap" className="px-4 py-20 lg:px-8">
          <SectionHeading title={t.roadmapTitle} text="" kicker="Engagement Path" />
          <div className="mx-auto mt-12 grid max-w-7xl gap-3 md:grid-cols-3 lg:grid-cols-6">
            {t.roadmap.map((step, i) => (
              <div
                key={step}
                className="relative border border-[rgba(200,121,65,0.25)] bg-[rgba(200,121,65,0.08)] p-5"
              >
                <div className="font-display text-3xl font-bold text-[var(--color-ore)]">0{i + 1}</div>
                <div className="mt-4 font-display text-base font-semibold leading-snug text-white">{step}</div>
                {i < t.roadmap.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--color-ore)]/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-4 py-20 lg:px-8">
          <div className="panel-frame mx-auto grid max-w-7xl gap-8 overflow-hidden lg:grid-cols-[1.2fr_0.8fr]">
            <span className="corner-mark tr" />
            <span className="corner-mark bl" />
            <div className="relative p-8 lg:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 0%, rgba(200,121,65,0.2), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(46,196,182,0.15), transparent 45%)",
                }}
              />
              <div className="relative">
                <div className="section-kicker mb-3">Partner With Us</div>
                <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{t.finalCtaTitle}</h2>
                <p className="mt-5 max-w-3xl leading-8 text-[var(--color-steel)]">{t.finalCtaText}</p>
              </div>
            </div>
            <div className="border-t border-[var(--line)] bg-[rgba(7,11,14,0.55)] p-8 lg:border-l lg:border-t-0 lg:p-10">
              <h3 className="font-display mb-6 text-2xl font-bold text-white">{t.contactTitle}</h3>
              <ContactRow icon={Phone} text="+976 5519 7901" />
              <ContactRow icon={Mail} text="info@barulas.mn" />
              <ContactRow icon={MapPin} text={t.address} />
              <button className="btn-primary mt-8 w-full px-6 py-3.5 text-sm uppercase">{t.cta}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-4 py-8 text-center text-sm text-[var(--color-steel)]">
        © {new Date().getFullYear()} Barulas Mining LLC · Smart Mining Digital Twin Platform
      </footer>
    </div>
  );
}

function TwinNode({ left, top, tone, label }) {
  return (
    <div className="twin-node" style={{ left, top, color: tone }}>
      <span className="twin-node-ring" />
      <div className="twin-node-core" />
      <div className="mt-2 whitespace-nowrap font-display text-[10px] font-bold tracking-[0.2em] text-white/80">
        {label}
      </div>
    </div>
  );
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="inline-flex items-center gap-1 border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-1">
      <Globe2 size={14} className="ml-2 text-[var(--color-steel)]" />
      {["mn", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider ${
            lang === l
              ? "bg-[var(--color-ore)] text-[var(--color-mine-950)]"
              : "text-[var(--color-steel)] hover:bg-white/5"
          }`}
        >
          {l === "mn" ? "MN" : "EN"}
        </button>
      ))}
    </div>
  );
}

function SectionHeading({ title, text, kicker }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && <div className="section-kicker mb-3">{kicker}</div>}
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 leading-8 text-[var(--color-steel)]">{text}</p>}
    </div>
  );
}

function ContactRow({ icon: Icon, text }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[var(--color-fog)]">
      <Icon size={18} className="text-[var(--color-twin)]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function DashboardMetrics({ active, setActive }) {
  const metrics = [
    { name: "Production", value: "94%", detail: "Daily target achievement", width: "94%" },
    { name: "Utilization", value: "87%", detail: "Equipment active usage", width: "87%" },
    { name: "Safety", value: "1.2", detail: "Risk index today", width: "62%" },
    { name: "Reliability", value: "98%", detail: "System availability", width: "98%" },
  ];

  const selected = metrics.find((m) => m.name === active) || metrics[0];

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {metrics.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`border p-4 text-left transition-all ${
              active === item.name
                ? "border-[rgba(200,121,65,0.55)] bg-[rgba(200,121,65,0.1)]"
                : "border-[var(--line)] bg-[rgba(255,255,255,0.03)] hover:border-[var(--line-strong)]"
            }`}
          >
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-steel)]">{item.name}</div>
            <div className="mt-2 font-display text-3xl font-bold text-[var(--color-twin)]">{item.value}</div>
            <div className="mt-4 h-1 bg-[var(--color-mine-800)]">
              <div className="meter-fill h-1 bg-[var(--color-twin)]" style={{ width: item.width }} />
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] p-4">
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-steel)]">Selected KPI</div>
        <div className="mt-1 font-display text-xl font-bold text-white">{selected.name}</div>
        <div className="mt-1 text-sm text-[var(--color-steel)]">{selected.detail}</div>
      </div>
    </>
  );
}

function SmartMineMap({ title, text }) {
  const [active, setActive] = useState("Production");
  const nodes = [
    ["Pit Zone", "ACTIVE", "18 trucks", "18%", "22%"],
    ["Crusher", "WARNING", "82% load", "56%", "34%"],
    ["Fuel Station", "NORMAL", "12.4 L/t", "30%", "62%"],
    ["Maintenance", "ACTIVE", "96% health", "74%", "66%"],
  ];

  const statusColor = {
    ACTIVE: "text-emerald-300 border-emerald-400/40",
    NORMAL: "text-[var(--color-twin)] border-[var(--line-strong)]",
    WARNING: "text-amber-300 border-amber-400/40",
  };

  const operations = [
    ["Truck Fleet", "ACTIVE", "18 / 21 units"],
    ["Crusher Load", "WARNING", "82% load"],
    ["Fuel Usage", "NORMAL", "12.4 L/t"],
    ["Equipment Health", "ACTIVE", "96% healthy"],
    ["AI Prediction", "WARNING", "Maintenance in 36h"],
    ["Live Alerts", "CRITICAL", "1 safety alert"],
  ];

  const statusStyle = {
    ACTIVE: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    NORMAL: "text-[var(--color-twin)] border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)]",
    WARNING: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    CRITICAL: "text-red-300 border-red-400/30 bg-red-400/10",
  };

  return (
    <section id="operations-map" className="px-4 py-20 lg:px-8">
      <SectionHeading title={title} text={text} kicker="Command Surface" />

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel-frame relative min-h-[520px] overflow-hidden p-6">
          <span className="corner-mark tr" />
          <span className="corner-mark bl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(46,196,182,.12),transparent_28%),radial-gradient(circle_at_78%_62%,rgba(200,121,65,.1),transparent_28%)]" />

          <svg className="absolute inset-0 h-full w-full opacity-60">
            <line x1="18%" y1="22%" x2="56%" y2="34%" className="haul-route" stroke="rgb(46 196 182)" strokeWidth="1.5" />
            <line x1="56%" y1="34%" x2="74%" y2="66%" className="haul-route" stroke="rgb(200 121 65)" strokeWidth="1.5" />
            <line x1="18%" y1="22%" x2="30%" y2="62%" className="haul-route" stroke="rgb(46 196 182)" strokeWidth="1.5" />
            <line x1="30%" y1="62%" x2="74%" y2="66%" className="haul-route" stroke="rgb(46 196 182)" strokeWidth="1.5" />
          </svg>

          <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="section-kicker">AI-powered mine control</div>
              <h3 className="font-display mt-2 text-2xl font-bold text-white">Operational Site Twin</h3>
            </div>
            <span className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-emerald-300">
              <span className="live-dot" /> LIVE MAP
            </span>
          </div>

          {nodes.map(([name, status, value, left, top]) => (
            <div key={name} className="absolute z-20" style={{ left, top }}>
              <div className={`relative ${statusColor[status].split(" ")[0]}`}>
                <span className="twin-node-ring" />
                <div className={`twin-node-core border ${statusColor[status]}`} />
              </div>
              <div className="mt-3 min-w-[140px] border border-[var(--line)] bg-[rgba(7,11,14,0.88)] p-3 backdrop-blur">
                <div className="font-display text-sm font-bold text-white">{name}</div>
                <div className="mt-1 text-xs text-[var(--color-steel)]">{value}</div>
                <div className={`mt-2 inline-flex border px-2 py-0.5 text-[10px] font-bold tracking-wider ${statusColor[status]}`}>
                  {status}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-2 sm:grid-cols-3">
            {["Haul Route", "IoT Sensors", "AI Alerts"].map((item) => (
              <div
                key={item}
                className="border border-[var(--line)] bg-[rgba(7,11,14,0.8)] px-3 py-2.5 text-xs tracking-[0.14em] uppercase text-[var(--color-steel)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="panel-frame p-6">
            <span className="corner-mark tr" />
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-steel)]">
                  Twin Telemetry Board
                </div>
                <div className="font-display text-xl font-bold text-white">Smart Mining Intelligence</div>
              </div>
              <Radio className="text-[var(--color-twin)]" />
            </div>
            <DashboardMetrics active={active} setActive={setActive} />
          </div>

          <div className="panel-frame p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-display text-lg font-bold text-white">Live Operational Signals</div>
              <span className="border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] font-bold tracking-wider text-emerald-300">
                LIVE
              </span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {operations.map(([name, status, value]) => (
                <div key={name} className="border border-[var(--line)] bg-[rgba(7,11,14,0.55)] p-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-white">{name}</div>
                    <span className={`border px-1.5 py-0.5 text-[9px] font-bold tracking-wider ${statusStyle[status]}`}>
                      {status}
                    </span>
                  </div>
                  <div className="mt-1.5 text-xs text-[var(--color-steel)]">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-[rgba(200,121,65,0.25)] bg-[rgba(200,121,65,0.08)] p-3">
              <div className="mb-2 flex items-center gap-2 text-sm text-[var(--color-ore-bright)]">
                <Database size={16} /> Integrated Data Flow
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] tracking-wider text-[var(--color-steel)]">
                {["ERP", "CMMS", "BI", "IoT", "Fleet", "AI"].map((x) => (
                  <span key={x} className="border border-[var(--line)] bg-[var(--color-mine-950)] px-2.5 py-1">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIPredictiveCenter({ title, text }) {
  const aiCards = [
    ["Ore Grade Prediction", "92.4%", "AI geological confidence", "88%"],
    ["Equipment Failure Risk", "LOW", "Next 72h prediction", "24%"],
    ["Autonomous Fleet Efficiency", "+18%", "Optimized haul cycle", "78%"],
    ["CO₂ Reduction", "-12%", "ESG sustainability target", "66%"],
  ];

  const insights = [
    "AI detected crusher overload trend in next 4h",
    "Fleet optimization can reduce idle time by 11%",
    "Predictive maintenance recommended for Truck #204",
    "Drilling efficiency increased after route adjustment",
  ];

  const bars = [48, 72, 66, 84, 58, 91, 76];

  return (
    <section id="ai-center" className="px-4 py-20 lg:px-8">
      <SectionHeading title={title} text={text} kicker="Predictive Twin Brain" />

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.85fr]">
        <div className="panel-frame p-6 lg:p-8">
          <span className="corner-mark tr" />
          <span className="corner-mark bl" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="section-kicker">AI Operations Brain</div>
              <h3 className="font-display mt-2 text-3xl font-bold text-white">Predictive Intelligence</h3>
            </div>
            <div className="inline-flex items-center gap-2 border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[var(--color-twin)]">
              <Radar size={14} /> AI ACTIVE
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aiCards.map(([cardTitle, value, desc, width]) => (
              <div key={cardTitle} className="border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-5">
                <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-steel)]">{cardTitle}</div>
                <div className="mt-3 font-display text-4xl font-bold text-[var(--color-twin)]">{value}</div>
                <div className="mt-2 text-sm text-[var(--color-steel)]">{desc}</div>
                <div className="mt-5 h-1 bg-[var(--color-mine-800)]">
                  <div className="meter-fill h-1 bg-[var(--color-twin)]" style={{ width }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-[rgba(200,121,65,0.25)] bg-[rgba(200,121,65,0.08)] p-5">
            <div className="mb-3 flex items-center gap-2 text-[var(--color-ore-bright)]">
              <BrainCircuit size={18} />
              Live AI Insight Feed
            </div>
            <div className="space-y-2">
              {insights.map((item) => (
                <div
                  key={item}
                  className="border border-[var(--line)] bg-[rgba(7,11,14,0.55)] px-3 py-2.5 text-sm text-[var(--color-fog)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel-frame p-6 lg:p-8">
          <span className="corner-mark tr" />
          <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-steel)]">Production Forecast</div>
          <h3 className="font-display mt-2 text-2xl font-bold text-white">AI Forecast Engine</h3>

          <div className="mt-8 flex h-[300px] items-end justify-between gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex flex-1 flex-col items-center"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                style={{ transformOrigin: "bottom" }}
              >
                <div
                  className="w-full bg-gradient-to-t from-[var(--color-twin-dim)] to-[var(--color-twin)]"
                  style={{ height: `${h * 2.2}px` }}
                />
                <div className="mt-3 font-display text-xs text-[var(--color-steel)]">W{i + 1}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 border border-emerald-400/25 bg-emerald-400/10 p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-emerald-300">AI Recommendation</div>
            <div className="mt-2 text-sm leading-6 text-[var(--color-fog)]">
              Increase night-shift crusher throughput by 8% to achieve projected production target.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
