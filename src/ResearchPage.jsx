import { motion } from "framer-motion";
import React from "react";
import {
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Activity,
  Layers3,
  ArrowRight,
  Gauge,
  Workflow,
  Radar,
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
    <div className="twin-shell min-h-screen text-[var(--color-fog)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,11,14,0.85)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8">
          <button onClick={onBack} className="flex items-center gap-3">
            <img
              src="/BM.gif"
              alt="Barulas Mining LLC"
              className="h-11 w-11 object-cover"
              style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)" }}
            />
            <div className="text-left">
              <div className="font-display text-xl font-bold tracking-[0.18em] text-white">BARULAS</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-steel)]">
                Mining LLC · Research
              </div>
            </div>
          </button>

          <button onClick={onBack} className="btn-primary px-5 py-2.5 text-sm uppercase">
            ← Нүүр рүү буцах
          </button>
        </div>
      </header>

      <section className="hero-field relative px-4 lg:px-8">
        <div className="twin-canvas" aria-hidden>
          <div className="twin-mesh" />
          <div className="contour" />
          <div className="contour" />
          <div className="scan-sweep" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-end gap-x-4 gap-y-1">
              <div className="font-display text-5xl font-bold tracking-[0.12em] text-white md:text-7xl">
                BARULAS
              </div>
              <span className="pb-1.5 font-display text-sm font-semibold tracking-[0.3em] text-[var(--color-ore-bright)]">
                RESEARCH
              </span>
            </div>

            <div className="section-kicker mb-4">
              SMART MINING · DIGITAL TWIN RESEARCH
            </div>

            <h1 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              Digital Transformation Dynamics in Mining Operations
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-steel)] md:text-lg">
              Barulas Mining LLC develops smart mining transformation solutions through
              business process modeling, decision intelligence, AI analytics, system
              dynamics, and operational performance optimization.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#framework" className="btn-primary px-7 py-3.5 text-sm uppercase">
                Explore Framework <ArrowRight size={18} />
              </a>
              <a href="#architecture" className="btn-ghost px-7 py-3.5 text-sm uppercase">
                View Architecture
              </a>
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
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map(([title, text]) => (
            <Card key={title} icon={ShieldCheck} title={title} text={text} />
          ))}
        </div>
      </section>

      <section id="framework" className="px-4 py-20 lg:px-8">
        <div className="panel-frame mx-auto max-w-7xl p-8 shadow-[var(--glow-twin)] lg:p-10">
          <span className="corner-mark tr" />
          <span className="corner-mark bl" />
          <SectionHeader
            eyebrow="Integrated Research Model"
            title="Barulas Smart Mining Transformation Framework"
            text="The framework connects digital business process maturity, digital decision-making maturity, organizational dynamic capability, and operational performance."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {framework.map(([abbr, title, text]) => (
              <div key={abbr} className="border border-[var(--line)] bg-[rgba(7,11,14,0.55)] p-5">
                <div className="mb-4 grid h-12 w-12 place-items-center border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] font-display text-lg font-bold text-[var(--color-twin)]">
                  {abbr}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-steel)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="section-kicker mb-3">System Dynamics Perspective</div>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Mining transformation behaves as a dynamic feedback system
            </h2>
            <p className="mt-5 leading-8 text-[var(--color-steel)]">
              Digital transformation is not only technology adoption. It requires feedback
              loops between operational data, decision intelligence, process integration,
              organizational capability, and performance improvement.
            </p>
          </div>

          <div className="panel-frame p-6">
            <span className="corner-mark tr" />
            {["Digital Process Integration", "Data-driven Decision Making", "Operational Intelligence", "Performance Optimization"].map(
              (item, i) => (
                <div
                  key={item}
                  className="mb-3 flex items-center gap-4 border border-[var(--line)] bg-[rgba(7,11,14,0.55)] p-4 last:mb-0"
                >
                  <div className="grid h-10 w-10 place-items-center border border-[rgba(200,121,65,0.35)] bg-[rgba(200,121,65,0.1)] font-display font-bold text-[var(--color-ore)]">
                    {i + 1}
                  </div>
                  <div className="font-display font-semibold text-white">{item}</div>
                  <Activity className="ml-auto text-[var(--color-twin)]" size={18} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="architecture" className="px-4 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Smart Mining Digital Architecture"
          title="Seven-layer operational intelligence architecture"
          text="A structured architecture for integrating mining operations, equipment, systems, data context, AI analytics, decision intelligence, and performance optimization."
        />

        <div className="mx-auto mt-10 max-w-5xl space-y-3">
          {architecture.map((layer, i) => (
            <div
              key={layer}
              className="architecture-step flex items-center gap-4 border border-[var(--line)] bg-[rgba(16,24,32,0.65)] px-4 py-4 pl-6"
            >
              <div className="grid h-11 w-11 place-items-center border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] font-display font-bold text-[var(--color-twin)]">
                {i + 1}
              </div>
              <div className="font-display font-bold text-white">{layer}</div>
              <Layers3 className="ml-auto text-[var(--color-steel)]" size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <Card
            icon={BarChart3}
            title="Quantitative Analysis"
            text="Survey, statistical modeling, maturity assessment, and operational performance measurement."
          />
          <Card
            icon={Radar}
            title="Dynamic Simulation"
            text="System dynamics simulation to understand feedback loops and transformation behavior."
          />
          <Card
            icon={BrainCircuit}
            title="Qualitative Insights"
            text="Expert insight, operational interviews, and strategic interpretation for mining transformation."
          />
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="panel-frame mx-auto max-w-7xl overflow-hidden">
          <span className="corner-mark tr" />
          <span className="corner-mark bl" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="relative p-8 lg:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 0%, rgba(200,121,65,0.18), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(46,196,182,0.12), transparent 45%)",
                }}
              />
              <div className="relative">
                <div className="section-kicker mb-3">Expected Outcomes</div>
                <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
                  Building an intelligent, connected, and sustainable mining operation
                </h2>
                <p className="mt-5 leading-8 text-[var(--color-steel)]">
                  Barulas Mining LLC positions this framework as a foundation for operational
                  intelligence, integrated systems, AI-enabled decision support, and sustainable
                  mining performance improvement.
                </p>
              </div>
            </div>

            <div className="grid gap-3 border-t border-[var(--line)] bg-[rgba(7,11,14,0.45)] p-8 lg:border-l lg:border-t-0 lg:p-10">
              {[
                "Operational Intelligence",
                "System Integration",
                "Strategic Decision Transformation",
                "Sustainable Mining Performance",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[var(--line)] bg-[rgba(16,24,32,0.7)] p-4 font-display font-bold text-white"
                >
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

        <div className="mx-auto mt-16 grid max-w-7xl gap-4">
          <ArchitectureLayer
            title="Executive Intelligence Layer"
            color="border-[var(--line-strong)] bg-[rgba(46,196,182,0.05)]"
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
            color="border-[rgba(200,121,65,0.25)] bg-[rgba(200,121,65,0.05)]"
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
            color="border-[var(--line)] bg-[rgba(255,255,255,0.03)]"
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
            color="border-[var(--line-strong)] bg-[rgba(46,196,182,0.05)]"
            items={[
              "IoT Sensors",
              "Industrial Network",
              "Real-time Data Pipeline",
              "Cloud Infrastructure",
            ]}
          />
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-4 py-8 text-center text-sm text-[var(--color-steel)]">
        © {new Date().getFullYear()} Barulas Mining LLC · Smart Mining Digital Twin Research
      </footer>
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
    <div className="relative mx-auto my-1 h-8 max-w-7xl">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[rgba(46,196,182,0.25)]" />
      <motion.div
        animate={{ y: [0, 22, 0], opacity: [0.25, 1, 0.25] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--color-twin)]"
      />
    </div>
  );
}

function ArchitectureLayer({ title, items, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`panel-frame relative overflow-hidden ${color} p-6`}
    >
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />

      <motion.div
        animate={{ y: ["-100%", "220%"] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
        className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-[rgba(46,196,182,0.08)] to-transparent"
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="live-dot"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group border border-[var(--line)] bg-[rgba(7,11,14,0.65)] p-5 transition-colors hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] font-display text-lg font-bold text-[var(--color-twin)]">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display font-bold text-white">{item}</div>
                  <div className="mt-1 text-sm text-[var(--color-steel)]">Operational intelligence node</div>
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
      <div className="section-kicker">{eyebrow}</div>
      <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-3xl leading-8 text-[var(--color-steel)]">{text}</p>
    </div>
  );
}

function Card({ icon: Icon, title, text }) {
  return (
    <div className="panel-frame p-6">
      <span className="corner-mark tr" />
      <Icon className="mb-5 text-[var(--color-twin)]" size={30} />
      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-steel)]">{text}</p>
    </div>
  );
}

function FeaturePanel({ icon: Icon, title, text, items }) {
  return (
    <div className="panel-frame p-6 lg:p-7">
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />
      <Icon className="mb-5 text-[var(--color-ore)]" size={34} />
      <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-[var(--color-steel)]">{text}</p>

      <div className="mt-6 grid gap-2 sm:grid-cols-5">
        {items.map((item) => (
          <div
            key={item}
            className="border border-[var(--line-strong)] bg-[rgba(46,196,182,0.08)] p-2.5 text-center font-display text-xs font-bold tracking-wide text-[var(--color-twin)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
