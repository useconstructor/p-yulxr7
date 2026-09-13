'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Menu, X, Play, Zap, Brain, Mic, MessageSquare, Layers,
  Users, BarChart3, ChevronRight, Check, Star, ChevronDown,
  Monitor, Code, Video, ArrowRight, Sparkles, Settings,
  Mail, Twitter, Linkedin, Github, Globe
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [email, setEmail] = useState('')

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ]

  const stats = [
    { value: "15,000+", label: "creators shipped" },
    { value: "89%", label: "time saved on repetitive tasks" },
    { value: "2,400+", label: "pre built automations" },
    { value: "4.8★", label: "rating from 3,200+ reviews" },
  ]

  const bentoFeatures = [
    {
      title: "AI Workflow Builder",
      description: "Describe what you want in plain English. Our AI builds the automation for you, learning from thousands of creator workflows.",
      icon: Brain,
      size: "large",
    },
    {
      title: "Voice Control",
      description: "Say 'start streaming and send Discord notification' and watch it happen instantly.",
      icon: Mic,
      size: "medium",
    },
    {
      title: "Smart Suggestions",
      description: "StreamFlow learns your habits and proposes automations before you know you need them.",
      icon: Sparkles,
      size: "medium",
    },
    {
      title: "Context Awareness",
      description: "Remembers app state and previous actions for intelligent execution.",
      icon: Layers,
      size: "small",
    },
    {
      title: "Natural Language Setup",
      description: "No code required. Just describe your workflow.",
      icon: MessageSquare,
      size: "small",
    },
  ]

  const workflowCards = [
    {
      title: "Content Creation",
      description: "Design, render, and upload in one tap. Automate your entire post production pipeline.",
      icon: Video,
      examples: ["Batch export", "Auto watermark", "Schedule posts"],
    },
    {
      title: "Stream Management",
      description: "Scene switching, chat integration, and alerts auto sync across all platforms.",
      icon: Monitor,
      examples: ["Scene triggers", "Chat commands", "Alert coordination"],
    },
    {
      title: "Developer Tools",
      description: "API calls, database queries, and CI/CD triggers from a single button press.",
      icon: Code,
      examples: ["Deploy scripts", "Log monitoring", "Git workflows"],
    },
  ]

  const featuresList = [
    { title: "2,400+ Pre Built Templates", description: "Start automating in minutes with templates for every workflow" },
    { title: "Multi App Integration", description: "Connect OBS, Figma, Slack, VS Code, and 200+ more apps" },
    { title: "Team Sharing", description: "Share automations with your team and collaborate in real time" },
    { title: "Hardware Agnostic", description: "Works with any button device, keyboard, or touch screen" },
    { title: "Real Time Analytics", description: "See exactly how much time you're saving with detailed reports" },
    { title: "14 Day Free Trial", description: "No credit card required. Full access to all features" },
  ]

  const testimonials = [
    {
      quote: "I cut my prep time from 2 hours to 15 minutes. StreamFlow literally pays for itself.",
      name: "Maya Chen",
      role: "Twitch Streamer",
      detail: "120K followers",
      initials: "MC",
      color: "bg-pink-500",
    },
    {
      quote: "Game changing for our post production. AI suggestions catch workflows we never thought to automate.",
      name: "James Rodriguez",
      role: "Video Producer",
      detail: "Luminous Films",
      initials: "JR",
      color: "bg-blue-500",
    },
    {
      quote: "As a developer, having one deck control my entire stack—terminal, browser, Slack—is magical.",
      name: "Priya Kapoor",
      role: "Senior Engineer",
      detail: "TechCore Labs",
      initials: "PK",
      color: "bg-purple-500",
    },
  ]

  const pricingTiers = [
    {
      name: "StreamFlow",
      price: "Only $199 USD",
      period: " monthly",
      description: "Full access to all features for creators and teams",
      features: [
        "Unlimited automations",
        "2,400+ pre built templates",
        "Priority chat support",
        "Advanced AI context learning",
        "Voice control",
        "Team sharing",
        "Multi app integration",
        "Real time analytics",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
  ]

  const faqs = [
    {
      question: "What devices does StreamFlow work with?",
      answer: "StreamFlow is hardware agnostic and works with any button device, stream deck, keyboard with macro keys, touch screens, and even your phone. If it can send a signal, StreamFlow can automate it.",
    },
    {
      question: "How does the AI learn my workflows?",
      answer: "Our AI observes your patterns over time—which apps you use together, what sequences you repeat, and when you do them. It then proactively suggests automations you might not have thought of. All processing is done securely, and you control exactly what data is used.",
    },
    {
      question: "Can I share automations with my team?",
      answer: "Yes! Pro and Enterprise plans include team sharing. Create an automation once and share it with colleagues. Perfect for standardizing workflows across your organization or content team.",
    },
    {
      question: "Is there a limit to how complex my automations can be?",
      answer: "No limit on complexity. Chain together unlimited actions across multiple apps. Our users have built automations with 50+ steps that run flawlessly. The AI helps optimize long chains for reliability.",
    },
    {
      question: "What happens after the 14 day trial?",
      answer: "Your trial includes full Pro features. After 14 days, choose a plan that fits your needs. No credit card required to start, and you can export all your automations if you decide StreamFlow isn't right for you.",
    },
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setFormState('loading')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'footer_newsletter' }),
        }
      )
      if (res.ok) {
        setFormState('success')
        setEmail('')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#1A1A2E] text-[#F5F5F7] overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]/90 backdrop-blur-md border-b border-[#3A3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#00D9FF]/50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#1A1A2E]" />
              </div>
              <span className="text-xl font-bold">StreamFlow</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="#pricing" className="text-[#B0B0B0] hover:text-[#F5F5F7] transition-colors text-sm">
                Log In
              </a>
              <a href="#pricing">
                <Button className="bg-[#00D9FF] text-[#1A1A2E] hover:bg-[#00D9FF]/90 rounded-2xl px-6">
                  Start Free Trial
                </Button>
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#1A1A2E]/95 backdrop-blur-md border-b border-[#3A3A5C] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg text-[#B0B0B0] hover:text-[#00D9FF] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block pt-4 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : "0ms" }}
            >
              <Button className="w-full bg-[#00D9FF] text-[#1A1A2E] hover:bg-[#00D9FF]/90 rounded-2xl">
                Start Free Trial
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9FF]/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Powered Automation
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Workflow,{" "}
                <span className="text-[#00D9FF] glow-text">Amplified by AI</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#B0B0B0] max-w-xl">
                Control any app, automate anything, execute instantly. StreamFlow learns how you work and transforms complex multi step workflows into single tap actions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing">
                  <Button className="bg-[#00D9FF] text-[#1A1A2E] hover:bg-[#00D9FF]/90 rounded-2xl px-8 py-6 text-lg font-semibold w-full sm:w-auto glow-teal">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" className="border-[#3A3A5C] text-[#F5F5F7] hover:bg-[#252542] rounded-2xl px-8 py-6 text-lg w-full sm:w-auto">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </a>
              </div>

              <p className="text-sm text-[#B0B0B0]">
                14 day free trial • No credit card required
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden glow-teal animate-float">
                <Image
                  src="/images/hero.png"
                  alt="StreamFlow AI powered automation interface"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating suggestion cards */}
              <div className="absolute -top-4 -right-4 bg-[#252542] border border-[#3A3A5C] rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-[#00D9FF]" />
                  <span>Schedule post</span>
                </div>
              </div>

              <div className="absolute bottom-8 -left-4 bg-[#252542] border border-[#3A3A5C] rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2 text-sm">
                  <Mic className="w-4 h-4 text-[#00D9FF]" />
                  <span>Voice ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-[#252542] border-y border-[#3A3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#00D9FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#B0B0B0]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-4">
              AI Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              AI Does the Thinking
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Powered by advanced AI that learns your patterns and builds automations before you know you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large card */}
            <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#252542] to-[#1A1A2E] border-[#3A3A5C] hover:border-[#00D9FF]/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/20 transition-colors">
                  <Brain className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <CardTitle className="text-2xl text-[#F5F5F7]">{bentoFeatures[0].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#B0B0B0] text-lg">{bentoFeatures[0].description}</p>
                <div className="mt-6 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/feature.png"
                    alt="AI Workflow Builder interface"
                    width={600}
                    height={300}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medium cards */}
            {bentoFeatures.slice(1, 3).map((feature, index) => (
              <Card key={index} className="bg-[#252542] border-[#3A3A5C] hover:border-[#00D9FF]/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <CardTitle className="text-xl text-[#F5F5F7]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#B0B0B0]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Small cards */}
            {bentoFeatures.slice(3).map((feature, index) => (
              <Card key={index} className="bg-[#252542] border-[#3A3A5C] hover:border-[#00D9FF]/50 transition-all duration-300 group lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center mb-3 group-hover:bg-[#00D9FF]/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <CardTitle className="text-lg text-[#F5F5F7]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-[#B0B0B0]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Workflow Cards */}
      <section className="py-20 lg:py-32 bg-[#252542]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-4">
              Workflows
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Build Smarter, Not Harder
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
              Pre built workflow categories for every profession. Start automating in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowCards.map((card, index) => (
              <Card key={index} className="bg-gradient-to-b from-[#252542] to-[#1A1A2E] border-[#3A3A5C] hover:border-[#00D9FF]/50 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9FF] to-[#00D9FF]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-[#00D9FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/20 transition-colors">
                    <card.icon className="w-7 h-7 text-[#00D9FF]" />
                  </div>
                  <CardTitle className="text-2xl text-[#F5F5F7]">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#B0B0B0]">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="bg-[#1A1A2E] text-[#B0B0B0] border-[#3A3A5C]">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-4">
                Everything You Need
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Built for Serious Creators
              </h2>
              <p className="text-lg text-[#B0B0B0] mb-8">
                StreamFlow combines powerful automation with intuitive design. Everything you need to reclaim your time.
              </p>

              <div className="space-y-4">
                {featuresList.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#252542]/50 hover:bg-[#252542] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-[#00D9FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-[#B0B0B0]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#3A3A5C]">
                <Image
                  src="/images/stramdecl.png"
                  alt="StreamFlow deck device"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 lg:py-32 bg-[#252542]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Creators
            </h2>
            <p className="text-lg text-[#B0B0B0]">
              Join thousands of professionals who've transformed their workflow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#252542] border-[#3A3A5C] p-8 lg:p-12">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#00D9FF] fill-[#00D9FF]" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-center mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${testimonials[activeTestimonial].color} flex items-center justify-center text-white font-bold text-xl mb-4`}>
                    {testimonials[activeTestimonial].initials}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-[#B0B0B0]">{testimonials[activeTestimonial].role}</div>
                    <div className="text-sm text-[#00D9FF]">{testimonials[activeTestimonial].detail}</div>
                  </div>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeTestimonial === index
                          ? "bg-[#00D9FF] w-8"
                          : "bg-[#3A3A5C] hover:bg-[#00D9FF]/50"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-[#B0B0B0]">
              Start free for 14 days. No credit card required.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#00D9FF]/10 to-[#252542] border-[#00D9FF] glow-teal"
                    : "bg-[#252542] border-[#3A3A5C]"
                } transition-all duration-300 hover:scale-[1.02]`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#00D9FF] text-[#1A1A2E] font-semibold px-4">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-[#F5F5F7]">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-[#B0B0B0]">{tier.period}</span>
                  </div>
                  <p className="text-sm text-[#B0B0B0] mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#00D9FF] flex-shrink-0" />
                        <span className="text-sm text-[#B0B0B0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 rounded-xl py-6 ${
                      tier.highlighted
                        ? "bg-[#00D9FF] text-[#1A1A2E] hover:bg-[#00D9FF]/90"
                        : "bg-[#3A3A5C] text-[#F5F5F7] hover:bg-[#3A3A5C]/80"
                    }`}
                    onClick={() => {
                      if (tier.name === "Enterprise") {
                        document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {tier.cta}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 lg:py-32 bg-[#252542]/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#B0B0B0]">
              Everything you need to know about StreamFlow
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#3A3A5C] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-[#252542] hover:bg-[#252542]/80 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00D9FF] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-[#B0B0B0] bg-[#252542]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section id="cta" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />
            </div>

            <Badge className="bg-[#252542] text-[#00D9FF] border-[#00D9FF]/30 mb-6">
              Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Automate<br />
              <span className="text-[#00D9FF]">Your Workflow?</span>
            </h2>
            <p className="text-lg text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
              Join 15,000+ creators and developers who are saving hours every week with StreamFlow. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing">
                <Button className="bg-[#00D9FF] text-[#1A1A2E] hover:bg-[#00D9FF]/90 rounded-2xl px-8 py-6 text-lg font-semibold glow-teal">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="mailto:sales@streamflow.ai">
                <Button variant="outline" className="border-[#3A3A5C] text-[#F5F5F7] hover:bg-[#252542] rounded-2xl px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </a>
            </div>

            <p className="text-sm text-[#B0B0B0] mt-6">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer Full */}
      <footer className="py-16 border-t border-[#3A3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#00D9FF]/50 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#1A1A2E]" />
                </div>
                <span className="text-xl font-bold">StreamFlow</span>
              </div>
              <p className="text-[#B0B0B0] mb-6 max-w-sm">
                AI powered automation for content creators, developers, and professionals. Transform your workflow today.
              </p>

              {formState === 'success' ? (
                <p className="text-[#00D9FF] flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Thanks for subscribing!
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#252542] border-[#3A3A5C] text-[#F5F5F7] placeholder:text-[#B0B0B0]"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="bg-[#00D9FF] text-[#1A1A2E] hover:bg-[#00D9FF]/90 px-6"
                  >
                    {formState === 'loading' ? 'Sending...' : 'Subscribe'}
                  </Button>
                </form>
              )}
              {formState === 'error' && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://twitter.com/streamflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#252542] flex items-center justify-center text-[#B0B0B0] hover:text-[#00D9FF] hover:bg-[#252542]/80 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/streamflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#252542] flex items-center justify-center text-[#B0B0B0] hover:text-[#00D9FF] hover:bg-[#252542]/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/streamflow" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#252542] flex items-center justify-center text-[#B0B0B0] hover:text-[#00D9FF] hover:bg-[#252542]/80 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <a href="mailto:hello@streamflow.ai" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@streamflow.ai
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#3A3A5C] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#B0B0B0]">
              © 2026 StreamFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#faq" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors">Privacy Policy</a>
              <a href="#faq" className="text-[#B0B0B0] hover:text-[#00D9FF] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
