import {
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { styles as c } from "./styles";

export default function Home() {
  return (
    <div className={c.layout.page}>
      {/* Header */}
      <header className={c.header.wrapper}>
        <div className={c.header.container}>
          <div className={c.header.inner}>
            <div className={c.header.brand}>
              <Sparkles className="size-6 text-blue-500" />
              <span className="text-xl font-semibold font-[family-name:var(--font-orbitron)]">
                MarketAI
              </span>
            </div>

            <nav className={c.header.nav}>
              <a href="#features" className={c.header.navItem}>
                Features
              </a>
              <a href="#how-it-works" className={c.header.navItem}>
                How it Works
              </a>
              <a href="#pricing" className={c.header.navItem}>
                Pricing
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/auth">
                <button className={c.header.signButton}>Sign In</button>
              </Link>
              <Link to="/generate">
                <button className={c.header.ctaButton}>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className={c.hero.section}>
          <div className={c.hero.grid} />
          <div className={c.hero.container}>
            <div className={c.hero.content}>
              <div className={c.hero.badge}>
                <Sparkles className="size-4 text-blue-500" />
                <span className="text-zinc-400">Powered by Advanced AI</span>
              </div>

              <h1 className={c.hero.title}>
                Generate Marketing Plans That Drive Results
              </h1>

              <p className={c.hero.description}>
                Transform your business strategy with AI-powered marketing
                plans. Get data-driven insights, actionable tactics, and
                measurable outcomes in minutes.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/generate">
                  <button className={c.hero.startButton}>
                    Start Generating Free
                    <ArrowRight className="ml-2 size-4" />
                  </button>
                </Link>
              </div>

              <p className={c.hero.sub}>
                No credit card required • 3 free plans included
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className={c.socialProof.section}>
          <div className={c.socialProof.container}>
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-zinc-500">
              Trusted by Marketing Teams at
            </p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {["TechCorp", "GrowthLabs", "Innovate Inc", "Scale Co"].map(
                (company) => (
                  <div
                    key={company}
                    className="flex items-center justify-center"
                  >
                    <span className="text-lg font-semibold text-zinc-500">
                      {company}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className={c.features.section}>
          <div className={c.features.container}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl font-[family-name:var(--font-orbitron)]">
                Everything You Need to Win
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-zinc-400">
                Comprehensive marketing strategies powered by AI, tailored to
                your business goals and target audience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Strategic Positioning",
                  description:
                    "Define your unique value proposition and competitive advantage with AI-driven market analysis.",
                },
                {
                  icon: Users,
                  title: "Audience Insights",
                  description:
                    "Deep customer personas and segmentation to reach the right people with the right message.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Tactics",
                  description:
                    "Actionable channel strategies and campaign ideas designed to scale your business.",
                },
                {
                  icon: Zap,
                  title: "Quick Execution",
                  description:
                    "Get a complete marketing plan in minutes, not weeks. Start executing immediately.",
                },
                {
                  icon: Sparkles,
                  title: "AI-Powered Intelligence",
                  description:
                    "Leverage cutting-edge AI models trained on thousands of successful marketing campaigns.",
                },
                {
                  icon: CheckCircle2,
                  title: "Measurable Results",
                  description:
                    "Built-in KPIs and success metrics to track performance and optimize your strategy.",
                },
              ].map((feature) => (
                <div key={feature.title} className={c.features.card}>
                  <feature.icon className="mb-4 size-10 text-blue-500" />
                  <h3 className="mb-2 text-xl font-semibold font-[family-name:var(--font-orbitron)]">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section id="how-it-works" className={c.steps.section}>
          <div className={c.steps.container}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl font-[family-name:var(--font-orbitron)]">
                From Zero to Strategy in 3 Steps
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-zinc-400">
                Our AI guides you through a simple process to create a
                comprehensive marketing plan.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Share Your Business",
                  description:
                    "Tell us about your product, target market, and goals. Our AI analyzes your inputs to understand your unique needs.",
                },
                {
                  step: "02",
                  title: "AI Analysis",
                  description:
                    "Our advanced algorithms process market data, competitor insights, and best practices to craft your strategy.",
                },
                {
                  step: "03",
                  title: "Execute & Scale",
                  description:
                    "Receive your complete marketing plan with actionable steps, timelines, and success metrics ready to implement.",
                },
              ].map((step) => (
                <div key={step.step}>
                  <div className="mb-4 text-6xl font-bold text-blue-500/20">
                    {step.step}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold font-[family-name:var(--font-orbitron)]">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={c.cta.section}>
          <div className={c.cta.container}>
            <div className={c.cta.box}>
              <div className={c.cta.inner}>
                <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl font-[family-name:var(--font-orbitron)]">
                  Ready to Transform Your Marketing?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-zinc-400">
                  Join thousands of businesses using AI to create winning
                  marketing strategies. Start generating your first plan for
                  free today.
                </p>

                <Link to="/generate">
                  <button className={c.cta.primaryButton}>
                    Get Started Free
                    <ArrowRight className="ml-2 size-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={c.footer.wrapper}>
        <div className={c.footer.container}>
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="size-6 text-blue-500" />
                <span className="text-lg font-semibold font-[family-name:var(--font-orbitron)]">
                  MarketAI
                </span>
              </div>
              <p className="text-sm text-zinc-400">
                AI-powered marketing plans for modern businesses.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold font-[family-name:var(--font-orbitron)]">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold font-[family-name:var(--font-orbitron)]">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold font-[family-name:var(--font-orbitron)]">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
            © 2025 MarketAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
