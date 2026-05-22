import React, { useMemo, useState } from "react";
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
} from "lucide-react";

const copy = {
  mn: {
    nav: ["Нүүр", "Шийдэл", "Архитектур", "TOGAF", "Roadmap", "Холбоо"],
    cta: "Холбогдох",
    heroEyebrow: "BARULAS MINING LLC · SMART MINING TRANSFORMATION",
    heroTitle: "Ухаалаг уурхайн дижитал шилжилтийн цогц шийдэл",
    heroText:
      "Уул уурхайн үйл ажиллагаанд бизнес процессын загварчлал, шийдвэр гаргалтын аналитик, AI, IoT, системийн динамик, real-time dashboard болон operational intelligence нэвтрүүлнэ.",
    heroPrimary: "Шийдлүүд харах",
    heroSecondary: "Roadmap үзэх",
    stats: [
      ["2014+", "Үйл ажиллагааны туршлага"],
      ["7", "Smart mining architecture layer"],
      ["AI + IoT", "Operational intelligence"],
    ],
    problemTitle: "Уул уурхайн дижитал системүүд байгаа ч нэгдсэн intelligence дутмаг байна",
    problemText:
      "ERP, CMMS, BI, IoT, Fleet Management зэрэг системүүд салангид ажиллах үед бодит цагийн харагдах байдал, шийдвэрийн хурд, үйл ажиллагааны гүйцэтгэл хангалтгүй болдог.",
    problems: [
      "Системүүд салангид, өгөгдөл silo хэлбэртэй",
      "Шийдвэр гаргалт туршлагад хэт тулгуурласан",
      "Real-time operational visibility сул",
      "Data governance ба analytics maturity хангалтгүй",
    ],
    solutionTitle: "Barulas-ийн үндсэн шийдлүүд",
    solutionText: "Судалгаа, зөвлөх үйлчилгээ, технологийн интеграц, дата аналитик, системийн динамик загварчлалыг нэгтгэсэн шийдэл.",
    solutions: [
      ["Digital Business Process Maturity", "Process automation, workflow standardization, data integration."],
      ["Digital Decision-Making Maturity", "Dashboard-driven management, predictive analytics, KPI optimization."],
      ["Smart Mining Architecture", "IoT layer, operational systems, AI analytics, performance optimization."],
      ["System Dynamics & Simulation", "Feedback loop analysis, dynamic capability modeling, performance simulation."],
      ["AI + Operational Intelligence", "Predictive maintenance, risk monitoring, decision support system."],
      ["Research & Strategic Consulting", "Maturity assessment, roadmap, collaboration ecosystem design."],
    ],
    architectureTitle: "Mine-to-Mill Smart Mining Architecture",
    architectureText: "Үйл ажиллагааны өгөгдлийг нэгтгэж, AI analytics болон decision intelligence-ээр дамжуулан performance optimization хийх 7 давхар архитектур.",
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
    roadmap: ["Strategic alignment", "Research cooperation", "Pilot implementation", "Technology transfer", "Localization", "Smart mining ecosystem"],
    finalCtaTitle: "Уурхайн үйл ажиллагаагаа дата, AI, real-time decision intelligence дээр суурилсан шинэ түвшинд гаргая.",
    finalCtaText: "Barulas Mining LLC нь судалгаа, зөвлөх үйлчилгээ, технологийн интеграц болон smart mining ecosystem хөгжүүлэлтээр хамтран ажиллахад бэлэн.",
    contactTitle: "Холбоо барих",
    address: "Улаанбаатар хот, Монгол Улс",
  },
  en: {
    nav: ["home", "solutions", "architecture", "togaf", "roadmap", "contact"],
    cta: "Contact us",
    heroEyebrow: "BARULAS MINING LLC · SMART MINING TRANSFORMATION",
    heroTitle: "Integrated digital transformation for smart mining operations",
    heroText:
      "We help mining operations adopt business process modeling, decision analytics, AI, IoT, system dynamics, real-time dashboards, and operational intelligence.",
    heroPrimary: "Explore solutions",
    heroSecondary: "View roadmap",
    stats: [
      ["2014+", "Operational experience"],
      ["7", "Smart mining architecture layers"],
      ["AI + IoT", "Operational intelligence"],
    ],
    problemTitle: "Mining companies have digital systems, but integrated intelligence is still missing",
    problemText:
      "When ERP, CMMS, BI, IoT, and fleet management systems operate separately, real-time visibility, decision speed, and operational performance remain limited.",
    problems: [
      "Fragmented systems and data silos",
      "Experience-driven decision-making",
      "Weak real-time operational visibility",
      "Limited data governance and analytics maturity",
    ],
    solutionTitle: "Core Barulas solutions",
    solutionText: "An integrated approach combining research, consulting, technology integration, data analytics, and system dynamics modeling.",
    solutions: [
      ["Digital Business Process Maturity", "Process automation, workflow standardization, data integration."],
      ["Digital Decision-Making Maturity", "Dashboard-driven management, predictive analytics, KPI optimization."],
      ["Smart Mining Architecture", "IoT layer, operational systems, AI analytics, performance optimization."],
      ["System Dynamics & Simulation", "Feedback loop analysis, dynamic capability modeling, performance simulation."],
      ["AI + Operational Intelligence", "Predictive maintenance, risk monitoring, decision support system."],
      ["Research & Strategic Consulting", "Maturity assessment, roadmap, collaboration ecosystem design."],
    ],
    architectureTitle: "Mine-to-Mill Smart Mining Architecture",
    architectureText: "A seven-layer architecture that integrates operational data and turns it into AI analytics, decision intelligence, and performance optimization.",
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
    roadmap: ["Strategic alignment", "Research cooperation", "Pilot implementation", "Technology transfer", "Localization", "Smart mining ecosystem"],
    finalCtaTitle: "Move your mining operation to a new level powered by data, AI, and real-time decision intelligence.",
    finalCtaText: "Barulas Mining LLC is ready to collaborate on research, consulting, technology integration, and smart mining ecosystem development.",
    contactTitle: "Contact",
    address: "Ulaanbaatar, Mongolia",
  },
};

const icons = [Cpu, BarChart3, Network, Activity, BrainCircuit, ShieldCheck];

export default function BarulasWebsiteHome() {
  const [lang, setLang] = useState("mn");
  const [open, setOpen] = useState(false);
  const t = useMemo(() => copy[lang], [lang]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,.22),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(249,115,22,.14),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            
            <img
              src="/BM.jpg"
              alt="Barulas Mining LLC"
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div className="text-left">
              <div className="text-lg font-bold tracking-wide">BARULAS</div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Mining LLC</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {t.nav.map((item, index) => (
              <button key={item} onClick={() => scrollTo(["home", "solutions", "architecture", "togaf", "roadmap", "contact"][index])} className="text-sm text-slate-300 hover:text-orange-400">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <button onClick={() => scrollTo("contact")} className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-orange-400">
              {t.cta}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
            <div className="mb-4 flex justify-end"><LanguageSwitch lang={lang} setLang={setLang} /></div>
            {t.nav.map((item, index) => (
              <button key={item} onClick={() => scrollTo(["home", "solutions", "architecture", "togaf", "roadmap", "contact"][index])} className="block w-full py-3 text-left text-slate-200">
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-orange-300">
                {t.heroEyebrow}
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("solutions")} className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-slate-950 hover:bg-orange-400">
                  {t.heroPrimary} <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollTo("roadmap")} className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  {t.heroSecondary}
                </button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {t.stats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-2xl font-black text-orange-400">{value}</div>
                    <div className="mt-1 text-sm text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <DashboardPanel />
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <h2 className="text-3xl font-black md:text-4xl">{t.problemTitle}</h2>
                <p className="mt-4 leading-7 text-slate-300">{t.problemText}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.problems.map((p) => (
                  <div key={p} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                    <ShieldCheck className="mb-4 text-orange-400" />
                    <p className="font-medium text-slate-200">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SmartMineMap />
        <AIPredictiveCenter />

        <section id="solutions" className="px-4 py-20 lg:px-8">
          <SectionHeading title={t.solutionTitle} text={t.solutionText} />
          <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.solutions.map(([title, desc], i) => {
              const Icon = icons[i];
              return (
                <motion.div key={title} whileHover={{ y: -6 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30">
                  <Icon className="mb-5 text-cyan-300" size={34} />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="architecture" className="px-4 py-20 lg:px-8">
          <SectionHeading title={t.architectureTitle} text={t.architectureText} />
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="space-y-4">
              {t.layers.map((layer, i) => (
                <div key={layer} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/15 font-black text-cyan-300">{i + 1}</div>
                  <div className="font-semibold">{layer}</div>
                  <Layers3 className="ml-auto text-slate-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="togaf" className="px-4 py-20 lg:px-8">
          <SectionHeading
            title="TOGAF Enterprise Architecture"
            text="Business, Application, Data болон Technology architecture layer-ууд дээр суурилсан smart mining enterprise architecture framework."
          />

          <div className="mx-auto mt-12 max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/60 shadow-2xl shadow-cyan-950/30">
              
              <img
                src="/Togaf.png"
                alt="TOGAF Enterprise Architecture"
                className="w-full h-auto object-cover"
              />

            </div>
          </div>
        </section>
        <section id="roadmap" className="px-4 py-20 lg:px-8">
          <SectionHeading title={t.roadmapTitle} text="" />
          <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-3 lg:grid-cols-6">
            {t.roadmap.map((step, i) => (
              <div key={step} className="rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5">
                <div className="mb-6 text-3xl font-black text-orange-400">0{i + 1}</div>
                <div className="font-bold">{step}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-4 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-500/15 to-cyan-500/10 p-8 lg:grid-cols-[1.2fr_.8fr] lg:p-12">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">{t.finalCtaTitle}</h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.finalCtaText}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <h3 className="mb-5 text-2xl font-bold">{t.contactTitle}</h3>
              <ContactRow icon={Phone} text="+976 5519 7901" />
              <ContactRow icon={Mail} text="info@barulas.mn" />
              <ContactRow icon={MapPin} text={t.address} />
              <button className="mt-6 w-full rounded-full bg-orange-500 px-6 py-3 font-semibold text-slate-950 hover:bg-orange-400">{t.cta}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Barulas Mining LLC. Smart Mining Digital Transformation.
      </footer>
    </div>
  );
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
      <Globe2 size={16} className="ml-2 text-slate-400" />
      {['mn', 'en'].map((l) => (
        <button key={l} onClick={() => setLang(l)} className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase ${lang === l ? 'bg-orange-500 text-slate-950' : 'text-slate-300 hover:bg-white/10'}`}>
          {l === 'mn' ? 'MN' : 'EN'}
        </button>
      ))}
    </div>
  );
}

function SectionHeading({ title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-black md:text-5xl">{title}</h2>
      {text && <p className="mt-4 leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function ContactRow({ icon: Icon, text }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-slate-300">
      <Icon size={20} className="text-cyan-300" />
      <span>{text}</span>
    </div>
  );
 }  
  function DashboardPanel() {
  const [active, setActive] = useState("Production");

  const metrics = [
    {
      name: "Production",
      value: "94%",
      detail: "Daily target achievement",
      width: "94%",
    },
    {
      name: "Utilization",
      value: "87%",
      detail: "Equipment active usage",
      width: "87%",
    },
    {
      name: "Safety",
      value: "1.2",
      detail: "Risk index today",
      width: "62%",
    },
    {
      name: "Reliability",
      value: "98%",
      detail: "System availability",
      width: "98%",
    },
  ];

  const operations = [
    ["Truck Fleet", "ACTIVE", "18 / 21 units"],
    ["Crusher Load", "WARNING", "82% load"],
    ["Fuel Usage", "NORMAL", "12.4 L/t"],
    ["Equipment Health", "ACTIVE", "96% healthy"],
    ["AI Prediction", "WARNING", "Maintenance in 36h"],
    ["Live Alerts", "CRITICAL", "1 safety alert"],
  ];

  const selected = metrics.find((m) => m.name === active);

  const statusStyle = {
    ACTIVE: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    NORMAL: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    WARNING: "bg-yellow-400/10 text-yellow-300 border-yellow-400/30",
    CRITICAL: "bg-red-400/10 text-red-300 border-red-400/30",
  };

  return (
    <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/40">
      <div className="rounded-[1.5rem] bg-slate-950 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">
              Interactive Operations Dashboard
            </div>
            <div className="text-2xl font-bold">
              Smart Mining Intelligence
            </div>
          </div>
          <Radio className="text-cyan-300 animate-pulse" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                active === item.name
                  ? "border-orange-400/60 bg-orange-400/10"
                  : "border-white/10 bg-white/[0.04] hover:border-cyan-300/40"
              }`}
            >
              <div className="text-sm text-slate-400">{item.name}</div>
              <div className="mt-2 text-3xl font-black text-cyan-300">
                {item.value}
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-cyan-400"
                  style={{ width: item.width }}
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
          <div className="text-sm text-slate-400">Selected KPI</div>
          <div className="mt-1 text-xl font-bold text-white">
            {selected.name}
          </div>
          <div className="mt-1 text-sm text-slate-300">
            {selected.detail}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400">
                Real-time Mining Operations Center
              </div>
              <div className="text-lg font-bold">
                Live Operational Signals
              </div>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
              LIVE
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {operations.map(([name, status, value]) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-slate-950/70 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-white">
                    {name}
                  </div>
                  <span
                    className={`rounded-full border px-2 py-1 text-[10px] font-black ${
                      statusStyle[status]
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <div className="mt-2 text-sm text-slate-400">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-4">
          <div className="mb-3 flex items-center gap-2 text-orange-300">
            <Database size={18} /> Integrated Data Flow
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {["ERP", "CMMS", "BI", "IoT", "Fleet", "AI"].map((x) => (
              <span key={x} className="rounded-full bg-slate-900 px-3 py-1">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartMineMap() {
  const nodes = [
    ["Pit Zone", "ACTIVE", "18 trucks", "top-[18%] left-[18%]"],
    ["Crusher", "WARNING", "82% load", "top-[32%] left-[56%]"],
    ["Fuel Station", "NORMAL", "12.4 L/t", "top-[58%] left-[28%]"],
    ["Maintenance", "ACTIVE", "96% health", "top-[62%] left-[72%]"],
  ];

  const statusColor = {
    ACTIVE: "border-emerald-400 bg-emerald-400/20 text-emerald-300",
    NORMAL: "border-cyan-400 bg-cyan-400/20 text-cyan-300",
    WARNING: "border-yellow-400 bg-yellow-400/20 text-yellow-300",
  };

  return (
    <section id="operations-map" className="px-4 py-20 lg:px-8">
      <SectionHeading
        title="Smart Mine Operations Map"
        text="Real-time haul routes, equipment zones, IoT sensor nodes and operational alerts for intelligent mining command center visibility."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-6 shadow-2xl shadow-cyan-950/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(249,115,22,.14),transparent_30%)]" />

          <svg className="absolute inset-0 h-full w-full opacity-60">
            <line x1="18%" y1="18%" x2="56%" y2="32%" stroke="rgb(34 211 238)" strokeWidth="2" strokeDasharray="8 8" />
            <line x1="56%" y1="32%" x2="72%" y2="62%" stroke="rgb(249 115 22)" strokeWidth="2" strokeDasharray="8 8" />
            <line x1="18%" y1="18%" x2="28%" y2="58%" stroke="rgb(34 211 238)" strokeWidth="2" strokeDasharray="8 8" />
            <line x1="28%" y1="58%" x2="72%" y2="62%" stroke="rgb(34 211 238)" strokeWidth="2" strokeDasharray="8 8" />
          </svg>

          <div className="relative z-10 mb-6 flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-widest text-cyan-300">
                AI-powered mine control layer
              </div>
              <h3 className="mt-2 text-2xl font-black">
                Operational Site View
              </h3>
            </div>

            <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-black text-emerald-300">
              LIVE MAP
            </span>
          </div>

          {nodes.map(([name, status, value, position]) => (
            <div key={name} className={`absolute z-20 ${position}`}>
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/30" />
                <div className={`relative h-5 w-5 rounded-full border-2 ${statusColor[status]}`} />
              </div>

              <div className="mt-3 min-w-[150px] rounded-2xl border border-white/10 bg-slate-900/90 p-3 backdrop-blur">
                <div className="text-sm font-bold">{name}</div>
                <div className="mt-1 text-xs text-slate-400">{value}</div>
                <div className={`mt-2 inline-flex rounded-full border px-2 py-1 text-[10px] font-black ${statusColor[status]}`}>
                  {status}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-3 sm:grid-cols-3">
            {["Haul Route", "IoT Sensors", "AI Alerts"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-slate-950/80 p-3 text-sm text-slate-300 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm text-slate-400">Live Analytics</div>
          <h3 className="mt-1 text-2xl font-black">Mine Control Signals</h3>

          <div className="mt-6 space-y-4">
            {[
              ["Truck Cycle Time", "18.6 min", "92%"],
              ["Crusher Throughput", "1,240 t/h", "82%"],
              ["Fuel Efficiency", "12.4 L/t", "74%"],
              ["Equipment Health", "96%", "96%"],
              ["AI Risk Index", "Low-Medium", "58%"],
            ].map(([label, value, width]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">{label}</div>
                  <div className="font-bold text-white">{value}</div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-cyan-400" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AIPredictiveCenter() {
  const aiCards = [
    [
      "Ore Grade Prediction",
      "92.4%",
      "AI geological confidence",
    ],
    [
      "Equipment Failure Risk",
      "LOW",
      "Next 72h prediction",
    ],
    [
      "Autonomous Fleet Efficiency",
      "+18%",
      "Optimized haul cycle",
    ],
    [
      "CO₂ Reduction",
      "-12%",
      "ESG sustainability target",
    ],
  ];

  const insights = [
    "AI detected crusher overload trend in next 4h",
    "Fleet optimization can reduce idle time by 11%",
    "Predictive maintenance recommended for Truck #204",
    "Drilling efficiency increased after route adjustment",
  ];

  return (
    <section id="ai-center" className="px-4 py-20 lg:px-8">
      <SectionHeading
        title="AI Predictive Analytics Center"
        text="Artificial intelligence driven forecasting, optimization and operational intelligence for smart mining transformation."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[1fr_.8fr]">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-6 shadow-2xl shadow-cyan-950/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-widest text-cyan-300">
                AI Operations Brain
              </div>
              <h3 className="mt-2 text-3xl font-black">
                Predictive Intelligence
              </h3>
            </div>

            <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300">
              AI ACTIVE
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aiCards.map(([title, value, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-sm text-slate-400">
                  {title}
                </div>

                <div className="mt-3 text-4xl font-black text-cyan-300">
                  {value}
                </div>

                <div className="mt-2 text-sm text-slate-300">
                  {desc}
                </div>

                <div className="mt-5 h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-cyan-400"
                    style={{
                      width:
                        value === "LOW"
                          ? "24%"
                          : value === "+18%"
                          ? "78%"
                          : "88%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5">
            <div className="mb-3 flex items-center gap-2 text-orange-300">
              <BrainCircuit size={18} />
              Live AI Insight Feed
            </div>

            <div className="space-y-3">
              {insights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm text-slate-400">
            Production Forecast
          </div>

          <h3 className="mt-2 text-2xl font-black">
            AI Forecast Engine
          </h3>

          <div className="mt-8 flex h-[320px] items-end justify-between gap-3">
            {[48, 72, 66, 84, 58, 91, 76].map((h, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 to-cyan-300"
                  style={{ height: `${h * 2.4}px` }}
                />

                <div className="mt-3 text-xs text-slate-400">
                  W{i + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <div className="text-sm text-emerald-300">
              AI Recommendation
            </div>

            <div className="mt-2 text-sm text-slate-200">
              Increase night-shift crusher throughput by 8% to
              achieve projected production target.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}