import { motion } from "framer-motion";
import React from "react";
import {
  BrainCircuit,
  BarChart3,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Activity,
  Layers3,
  ArrowRight,
  Gauge,
  Workflow,
  Radar,
  Factory,
} from "lucide-react";

export default function ResearchPage({ onBack }) {
  const challenges = [
    ["Fragmented Systems", "ERP, CMMS, BI, IoT, fleet systems are often disconnected."],
    ["Manual Workflows", "Operational processes still depend heavily on manual coordination."],
    ["Data Silos", "Data is stored separately across departments and systems."],
    ["Weak Visibility", "Real-time operational visibility remains limited."],
    ["Decision Delay", "Decision-making is still experience-driven rather than intelligence-driven."],
    ["Integration Gap", "Business processes, data, and technology are not fully integrated."],
  ];

  const framework = [
    ["DBPM", "Digital Business Process Maturity", "Process automation, workflow standardization, and data integration."],
    ["DDMM", "Digital Decision-Making Maturity", "Dashboard-driven, predictive, and evidence-based operational decisions."],
    ["ODC", "Organizational Dynamic Capability", "The ability to sense, adapt, and transform operations continuously."],
    ["OP", "Operational Performance", "Productivity, reliability, safety, cost efficiency, and sustainability."],
  ];

  const architecture = [
    "Mining Operations Layer",
    "Equipment & IoT Layer",
    "Operational Systems Layer",
    "Integrated Context Layer",
    "AI + Analytics Layer",
    "Decision Intelligence Layer",
    "Performance Optimization Layer",
  ];

  return (
    
    <div className="min-h-screen bg-slate-950 text-white">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <button onClick={onBack} className="flex items-center gap-3">
        <img
            src="/BM.jpg"
            alt="Barulas Mining LLC"
            className="h-12 w-12 rounded-xl object-cover"
        />
        <div className="text-left">
            <div className="text-lg font-bold tracking-wide">BARULAS</div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Mining LLC
            </div>
        </div>
        </button>

        <button
        onClick={onBack}
        className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-orange-400"
        >
        ← Нүүр рүү буцах
        </button>
    </div>
    </header>

      <section className="relative overflow-hidden px-4 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,.14),transparent_28%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-widest text-orange-300">
              BARULAS MINING LLC · SMART MINING RESEARCH & TRANSFORMATION
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Digital Transformation Dynamics in Mining Operations
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Barulas Mining LLC develops smart mining transformation solutions through
              business process modeling, decision intelligence, AI analytics, system
              dynamics, and operational performance optimization.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-slate-950 hover:bg-orange-400">
                Explore Framework <ArrowRight size={18} />
              </button>
              <button className="rounded-full border border-white/15 px-6 py-3 font-bold hover:bg-white/10">
                View Architecture
              </button>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Research Background"
        title="Why This Research Matters"
        text="Mining companies are investing in digital technologies, but operational transformation remains incomplete when systems, data, people, and processes are not connected into one intelligent operational ecosystem."
      />

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map(([title, text]) => (
            <Card key={title} icon={ShieldCheck} title={title} text={text} />
          ))}
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/30">
          <SectionHeader
            eyebrow="Integrated Research Model"
            title="Barulas Smart Mining Transformation Framework"
            text="The framework connects digital business process maturity, digital decision-making maturity, organizational dynamic capability, and operational performance."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {framework.map(([abbr, title, text]) => (
              <div key={abbr} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/10 text-lg font-black text-cyan-300">
                  {abbr}
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <FeaturePanel
            icon={Workflow}
            title="Digital Business Process Maturity"
            text="Standardizes and integrates mining workflows across planning, execution, monitoring, maintenance, and reporting."
            items={["Plan", "Execute", "Monitor", "Maintain", "Report"]}
          />

          <FeaturePanel
            icon={Gauge}
            title="Digital Decision-Making Maturity"
            text="Moves decisions from experience-based judgment to real-time, dashboard-driven, predictive intelligence."
            items={["Dashboard", "Prediction", "KPI Monitoring", "Risk Signal", "Decision Support"]}
          />
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-orange-300">
              System Dynamics Perspective
            </div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Mining transformation behaves as a dynamic feedback system
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Digital transformation is not only technology adoption. It requires feedback
              loops between operational data, decision intelligence, process integration,
              organizational capability, and performance improvement.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            {["Digital Process Integration", "Data-driven Decision Making", "Operational Intelligence", "Performance Optimization"].map((item, i) => (
              <div key={item} className="mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-400/10 font-black text-orange-300">
                  {i + 1}
                </div>
                <div className="font-bold">{item}</div>
                <Activity className="ml-auto text-cyan-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Smart Mining Digital Architecture"
          title="Seven-layer operational intelligence architecture"
          text="A structured architecture for integrating mining operations, equipment, systems, data context, AI analytics, decision intelligence, and performance optimization."
        />

        <div className="mx-auto mt-10 max-w-5xl space-y-4">
          {architecture.map((layer, i) => (
            <div key={layer} className="flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-400/10 font-black text-cyan-300">
                {i + 1}
              </div>
              <div className="font-bold">{layer}</div>
              <Layers3 className="ml-auto text-slate-500" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <Card icon={BarChart3} title="Quantitative Analysis" text="Survey, statistical modeling, maturity assessment, and operational performance measurement." />
          <Card icon={Radar} title="Dynamic Simulation" text="System dynamics simulation to understand feedback loops and transformation behavior." />
          <Card icon={BrainCircuit} title="Qualitative Insights" text="Expert insight, operational interviews, and strategic interpretation for mining transformation." />
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 to-cyan-500/10 p-8 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-widest text-orange-300">
                Expected Outcomes
              </div>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Building an intelligent, connected, and sustainable mining operation
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Barulas Mining LLC positions this framework as a foundation for operational
                intelligence, integrated systems, AI-enabled decision support, and sustainable
                mining performance improvement.
              </p>
            </div>

            <div className="grid gap-4">
              {["Operational Intelligence", "System Integration", "Strategic Decision Transformation", "Sustainable Mining Performance"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    
  
<section className="px-4 py-24 lg:px-8">
  <SectionHeader
    eyebrow="SMART MINING ARCHITECTURE"
    title="Integrated Digital Mining Ecosystem"
    text="Barulas Mining LLC develops interconnected operational intelligence environments integrating AI, analytics, business process modeling and industrial systems."
  />

  <div className="mx-auto mt-16 grid max-w-7xl gap-6">
    
    <ArchitectureLayer
      title="Executive Intelligence Layer"
      color="border-cyan-400/20 bg-cyan-500/5"
      items={[
        "Strategic KPI Dashboard",
        "Operational Intelligence",
        "Decision Support System",
        "Executive Analytics",
      ]}
    />
    <ArchitectureFlow />
    <ArchitectureLayer
      title="AI & Analytics Layer"
      color="border-orange-400/20 bg-orange-500/5"
      items={[
        "AI Forecasting",
        "Predictive Maintenance",
        "System Dynamics Modeling",
        "Simulation Engine",
      ]}
    />
    <ArchitectureFlow />
    <ArchitectureLayer
      title="Operational Systems Layer"
      color="border-white/10 bg-white/[0.03]"
      items={[
        "Fleet Management",
        "Crusher Operations",
        "Drill & Blast",
        "Maintenance Control",
      ]}
    />
    <ArchitectureFlow />
    <ArchitectureLayer
      title="Data Infrastructure Layer"
      color="border-cyan-400/20 bg-cyan-500/5"
      items={[
        "IoT Sensors",
        "Industrial Network",
        "Real-time Data Pipeline",
        "Cloud Infrastructure",
      ]}
    />
  </div>
</section>
</div>

 );
}

function Section({ eyebrow, title, text }) {
  return (
    <section className="px-4 py-20 text-center lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title} text={text} />
    </section>
  );
}

function ArchitectureFlow() {
  return (
    <div className="relative mx-auto my-2 h-10 max-w-7xl">
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-cyan-400/20" />
      <motion.div
        animate={{ y: [0, 28, 0], opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
      />
    </div>
  );
}

function ArchitectureLayer({ title, items, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[2rem] border ${color} p-6`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-1/2 h-[2px] w-full bg-cyan-400/20" />
      </div>
        <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-1/2 h-[2px] w-full bg-cyan-400/20" />
        </div>

        <motion.div
        animate={{
            y: ["-100%", "220%"],
        }}
        transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
        }}
        className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
        />
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-black text-white">
            {title}
          </h3>

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item}
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-950/70 p-5 shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(34,211,238,0.2)",
                      "0 0 18px rgba(34,211,238,0.8)",
                      "0 0 0px rgba(34,211,238,0.2)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.2,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-black text-cyan-300"
                >
                  {i + 1}
                </motion.div>

                <div>
                  <div className="font-bold text-white">
                    {item}
                  </div>

                  <div className="mt-1 text-sm text-slate-400">
                    Operational intelligence node
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="text-sm font-bold uppercase tracking-widest text-cyan-300">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-black md:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">{text}</p>
    </div>
  );
}

function Card({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30">
      <Icon className="mb-5 text-cyan-300" size={34} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function FeaturePanel({ icon: Icon, title, text, items }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <Icon className="mb-5 text-orange-300" size={38} />
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-5">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-center text-sm font-bold text-cyan-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
