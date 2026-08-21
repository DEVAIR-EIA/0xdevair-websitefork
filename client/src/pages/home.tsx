import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCherryBlossoms } from "@/components/ui/floating-cherry-blossoms";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Twitter, 
  Mail, 
  TrendingUp, 
  Users, 
  Handshake, 
  Code, 
  Database, 
  Server, 
  ChartBar, 
  Search, 
  Zap, 
  Bot, 
  PuzzleIcon, 
  IdCard, 
  Wallet, 
  BookOpen, 
  PieChart, 
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  Award,
  Sparkles,
  Github,
  CheckCircle2,
  FileCode2,
  Network,
  GitPullRequest,
  Lock,
  Scale,
  Activity,
  Coins
} from "lucide-react";
import brandIllustrationUrl from "@assets/edited deevair high qua_1753804626393.jpg";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setMobileMenuOpen(false);
        }
      }
    };

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleAnchorClick));

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => {
      links.forEach(link => link.removeEventListener('click', handleAnchorClick));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <FloatingCherryBlossoms />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/85 dark:bg-dark-primary/90 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-3.5">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-cherry-pink tracking-tight hover:opacity-90 transition-opacity flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-cherry-pink inline" />
              <span>@0xdevair</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-7">
              <a href="#about" className="text-sm font-medium text-text-secondary hover:text-cherry-pink transition-colors duration-200">About</a>
              <a href="#skills" className="text-sm font-medium text-text-secondary hover:text-cherry-pink transition-colors duration-200">Skills & Architecture</a>
              <a href="#projects" className="text-sm font-medium text-text-secondary hover:text-cherry-pink transition-colors duration-200">Shipped Builds</a>
              <a href="#ambassador" className="text-sm font-medium text-text-secondary hover:text-cherry-pink transition-colors duration-200">Ambassador</a>
              <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-cherry-pink transition-colors duration-200">Connect</a>
              <div className="pl-2 border-l border-border">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu and theme toggle */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-text-secondary hover:text-cherry-pink"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3 border-t border-border mt-3 animate-fade-in">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-text-secondary hover:text-cherry-pink font-medium py-1.5 transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-text-secondary hover:text-cherry-pink font-medium py-1.5 transition-colors"
              >
                Skills & Architecture
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-text-secondary hover:text-cherry-pink font-medium py-1.5 transition-colors"
              >
                Shipped Builds
              </a>
              <a 
                href="#ambassador" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-text-secondary hover:text-cherry-pink font-medium py-1.5 transition-colors"
              >
                Ambassador
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-text-secondary hover:text-cherry-pink font-medium py-1.5 transition-colors"
              >
                Connect
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-cherry-pink/15 text-cherry-pink rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-cherry-pink/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Web3Bridge Cohort XIV · Nansen Ambassador</span>
            </div>

            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
                Smart Contract Developer & <span className="text-cherry-pink">DeFAI Protocol Engineer</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-light text-text-secondary mb-4 leading-snug">
                Low-Level EVM Internals · Foundry Security Audits · Autonomous On-Chain Agents
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-text-secondary mb-7 leading-relaxed">
              Specializing in smart contract security, raw Yul/EVM opcodes, and trustless AI agent architectures (ERC-8004). Operating with an uncompromising <em>"prove it on-chain"</em> engineering philosophy across EVM, Rust, and Solana infrastructure.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="px-3.5 py-1.5 bg-dark-secondary border border-border rounded-full text-xs sm:text-sm font-medium flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-cherry-pink mr-1.5" /> Solidity & Yul Assembly
              </span>
              <span className="px-3.5 py-1.5 bg-dark-secondary border border-border rounded-full text-xs sm:text-sm font-medium flex items-center">
                <Lock className="w-3.5 h-3.5 text-cherry-pink mr-1.5" /> Foundry & Security Audits
              </span>
              <span className="px-3.5 py-1.5 bg-dark-secondary border border-border rounded-full text-xs sm:text-sm font-medium flex items-center">
                <Bot className="w-3.5 h-3.5 text-cherry-pink mr-1.5" /> Autonomous DeFAI (ERC-8004)
              </span>
              <span className="px-3.5 py-1.5 bg-dark-secondary border border-border rounded-full text-xs sm:text-sm font-medium flex items-center">
                <Cpu className="w-3.5 h-3.5 text-cherry-pink mr-1.5" /> Rust & Multi-Chain
              </span>
              <span className="px-3.5 py-1.5 bg-dark-secondary border border-border rounded-full text-xs sm:text-sm font-medium flex items-center">
                <Activity className="w-3.5 h-3.5 text-cherry-pink mr-1.5" /> Nansen Smart Money & Intel
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-cherry-pink text-white dark:text-dark-primary font-medium hover:opacity-90 px-7 py-3 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <a href="#projects">Explore Shipped Builds</a>
              </Button>
              <Button variant="outline" asChild className="border-cherry-pink text-cherry-pink hover:bg-cherry-pink hover:text-white dark:hover:text-dark-primary px-7 py-3 transition-all duration-300">
                <a href="https://github.com/thenameisdevair" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5">
                  <Github className="w-4 h-4 mr-1.5" />
                  <span>GitHub (84 Repos)</span>
                </a>
              </Button>
              <Button variant="ghost" asChild className="text-text-secondary hover:text-cherry-pink">
                <a href="https://x.com/0xdevair" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                  <span>@0xdevair</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-dark-secondary to-card p-6 lg:p-8 shadow-xl border border-border">
                <img 
                  src={brandIllustrationUrl} 
                  alt="DevAir Brand Illustration" 
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="cherry-blossom animate-float absolute -top-4 -right-4" style={{animationDelay: '1s'}}></div>
              <div className="cherry-blossom animate-float absolute -bottom-4 -left-4" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-dark-secondary/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-3">Protocol Engineering & Security Focus</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From low-level EVM opcode deconstruction to autonomous DeFAI agent orchestration, moving deliberately to primitives before abstractions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center animate-on-scroll shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-cherry-pink/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-cherry-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Audit Reps</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Confirmed vulnerability finding (F-14) on HackenProof (Lendvest), Cantina audit reps on Morpho V2 & Pendle Boros, and Cartha-vaults.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center animate-on-scroll shadow-sm hover:shadow-md transition-shadow" style={{animationDelay: '0.2s'}}>
              <div className="w-14 h-14 bg-cherry-pink/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-7 h-7 text-cherry-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autonomous DeFAI</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Shipped Aeco Sentiment Oracle (V2.5.0 live on Celo Mainnet) with ERC-8004 reputation, NanShield v2 on Base, and 25+ smart contracts.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center animate-on-scroll shadow-sm hover:shadow-md transition-shadow" style={{animationDelay: '0.4s'}}>
              <div className="w-14 h-14 bg-cherry-pink/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-cherry-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ecosystem Footprint</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Web3Bridge Cohort XIV graduate, Nansen Official Ambassador (<a href="https://nsn.ai/devair" target="_blank" rel="noopener noreferrer" className="text-cherry-pink underline">nsn.ai/devair</a>), and Ethereum.org core docs contributor (PR #18859).
              </p>
            </div>
          </div>

          <Card className="bg-card border-border shadow-sm animate-on-scroll" style={{animationDelay: '0.5s'}}>
            <CardContent className="pt-7 pb-7 px-6">
              <blockquote className="text-base sm:text-lg text-center text-text-secondary italic leading-relaxed">
                "Go to the primitive, not the abstraction. Bridging the gap between theoretical security audits and empirical on-chain execution with autonomous, trustless systems."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills & Architecture Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-3">Core Skills & Technical Architecture</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Mastery across smart contract security, autonomous AI frameworks, systems programming, and on-chain intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Smart Contract Security & EVM Architecture */}
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md animate-on-scroll">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cherry-pink/15 flex items-center justify-center text-cherry-pink">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cherry-pink">Smart Contract Security & EVM</h3>
                    <p className="text-xs text-text-secondary">Low-Level Protocol Architecture & Auditing</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Solidity & Yul Assembly:</strong> Raw EVM opcodes (50+ deconstructed: addmod, mulmod, keccak256, bitwise shifts).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Foundry PoC & Testing:</strong> Fuzzing, invariant testing, automated exploit reproduction, and DeTest verification.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Upgradeability & Standards:</strong> ERC-2535 Diamond Proxy (AppStorage vs Diamond Storage), EIP-7702, ERC-7579.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Audit Methodology:</strong> 4-stage pipeline (Threat Modeling → Multi-Agent Static Analysis → Foundry PoC → Submission).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2: Autonomous Agents & DeFAI */}
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.15s'}}>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cherry-pink/15 flex items-center justify-center text-cherry-pink">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cherry-pink">Autonomous Agents & DeFAI</h3>
                    <p className="text-xs text-text-secondary">Trustless AI & Multi-Agent On-Chain Execution</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>ERC-8004 (Trustless Agents):</strong> Decentralized agent reputation, A2A communication, AP2 standard integration.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>LangGraph & Multi-Agent Orchestration:</strong> Captain + Specialist agent architectures (AgentHansa, FistAiAgent).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>On-Chain Oracles:</strong> Autonomous sentiment oracles synthesized via Grok + Nansen Smart Money API on Celo Mainnet.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Agentic Defense & Security:</strong> Sandboxed tool executions, Model Armor prompt hardening, TEE & ZK verification.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3: Systems Programming & Multi-Chain Infra */}
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cherry-pink/15 flex items-center justify-center text-cherry-pink">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cherry-pink">Systems Programming & Multi-Chain</h3>
                    <p className="text-xs text-text-secondary">Rust, Solana, Starknet, and L2 Ecosystems</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Rust Systems:</strong> In-memory ledgers, block/transaction validation, asynchronous validator architecture (Rust School Cohort 01).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Solana Development:</strong> Token-2022 extensions, DefaultAccountState, SPV factory deployment (ReBirth).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Account Abstraction & Gasless:</strong> Starkzap SDK, AVNU Paymaster, MiniPay, XMTP V3 encrypted messaging.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Core Maintenance:</strong> Merged pull request in ethereum/ethereum-org-website repository (PR #18859).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4: On-Chain Intelligence & Quantitative Research */}
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.45s'}}>
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cherry-pink/15 flex items-center justify-center text-cherry-pink">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cherry-pink">On-Chain Intel & Protocol Math</h3>
                    <p className="text-xs text-text-secondary">Nansen Tooling, Dune SQL & DeFi Invariants</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Nansen API & CLI Tooling:</strong> 13-endpoint security CLI (NanShield v2), 8-factor risk scoring, automated intelligence reports.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>AMM & Protocol Mathematics:</strong> Balancer V2 LBP Generalized Constant Mean Market Maker (CMMM) & FixedPoint math.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Dune Analytics & SQL:</strong> Complex querying, gas war telemetry, and sybil-resistance tracking.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-cherry-pink mr-2 mt-0.5 shrink-0" />
                    <span><strong>Applied Machine Learning:</strong> CLIP ViT-B/16 linear probe architecture and dataset pipeline verification.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipped Builds & Projects Section */}
      <section id="projects" className="py-20 px-6 bg-dark-secondary/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-3">Shipped Builds & Protocol Tooling</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real, verifiable on-chain deployments, security testing frameworks, and multi-chain production tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Aeco Sentiment Oracle */}
            <Card className="bg-card border-border overflow-hidden hover:scale-[1.02] hover:border-cherry-pink/50 transition-all duration-300 shadow-sm hover:shadow-md animate-on-scroll flex flex-col justify-between">
              <div>
                <div className="h-44 gradient-cherry flex items-center justify-center border-b border-border/40 relative">
                  <Bot className="w-14 h-14 text-cherry-pink" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-cherry-pink/20 text-cherry-pink border border-cherry-pink/40 rounded-full text-[11px] font-semibold">
                    Celo Mainnet (V2.5.0)
                  </span>
                </div>
                <CardContent className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Aeco Sentiment Oracle</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Autonomous hybrid sentiment oracle posting Grok AI + Nansen Smart Money signals on-chain every 2 hours with ERC-8004 reputation and live viem reads.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Solidity</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Celo Mainnet</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">ERC-8004</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Nansen API</span>
                  </div>
                </CardContent>
              </div>
              <div className="px-6 pb-5 pt-0">
                <span className="text-xs font-mono text-text-secondary/80 truncate block">
                  0x0684191E2e8Ac149...C08D0724
                </span>
              </div>
            </Card>

            {/* Project 2: DeTest Verification Framework */}
            <Card className="bg-card border-border overflow-hidden hover:scale-[1.02] hover:border-accent-blue/50 transition-all duration-300 shadow-sm hover:shadow-md animate-on-scroll flex flex-col justify-between" style={{animationDelay: '0.15s'}}>
              <div>
                <div className="h-44 gradient-blue flex items-center justify-center border-b border-border/40 relative">
                  <ShieldCheck className="w-14 h-14 text-accent-blue" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-accent-blue/20 text-accent-blue border border-accent-blue/40 rounded-full text-[11px] font-semibold">
                    Security Tooling
                  </span>
                </div>
                <CardContent className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">DeTest Verification Framework</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Foundry test verification layer integrated with pashov's solidity-auditor. Automatically generates and executes PoCs, evaluating vulnerability reports with deterministic verdicts.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Foundry</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">PoC Runner</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Solidity Auditing</span>
                  </div>
                </CardContent>
              </div>
              <div className="px-6 pb-5 pt-0">
                <a href="https://github.com/thenameisdevair/DeTest" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent-blue hover:underline inline-flex items-center">
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </Card>

            {/* Project 3: NanShield v2 & NanCon CLI */}
            <Card className="bg-card border-border overflow-hidden hover:scale-[1.02] hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md animate-on-scroll flex flex-col justify-between" style={{animationDelay: '0.3s'}}>
              <div>
                <div className="h-44 bg-gradient-to-br from-emerald-500/15 to-transparent flex items-center justify-center border-b border-border/40 relative">
                  <Terminal className="w-14 h-14 text-emerald-500 dark:text-green-400" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 rounded-full text-[11px] font-semibold">
                    Base Mainnet Proof
                  </span>
                </div>
                <CardContent className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">NanShield v2 & NanCon CLI</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Security-gated DEX execution and token intelligence engine with 13 Nansen API endpoints, 8-factor risk scoring, automated HTML reports, and on-chain tx validation on Base.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Node.js CLI</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Nansen API</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Base Mainnet</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">pm2</span>
                  </div>
                </CardContent>
              </div>
              <div className="px-6 pb-5 pt-0">
                <span className="text-xs text-text-secondary">Nansen CLI Mac Mini Challenge Entry</span>
              </div>
            </Card>

            {/* Project 4: Call Me Yours (CMY) */}
            <Card className="bg-card border-border overflow-hidden hover:scale-[1.02] hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-md animate-on-scroll flex flex-col justify-between" style={{animationDelay: '0.45s'}}>
              <div>
                <div className="h-44 bg-gradient-to-br from-purple-500/15 to-transparent flex items-center justify-center border-b border-border/40 relative">
                  <MessageCircle className="w-14 h-14 text-purple-600 dark:text-purple-400" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/40 rounded-full text-[11px] font-semibold">
                    Live Mini App
                  </span>
                </div>
                <CardContent className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Call Me Yours (CMY)</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Web3 dating Mini App deployed on Celo Mainnet and Sepolia. Powered by XMTP V3 end-to-end encrypted chat, Supabase backend, and MiniPay mobile integration.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">XMTP V3</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">MiniPay</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Celo Mainnet</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Supabase</span>
                  </div>
                </CardContent>
              </div>
              <div className="px-6 pb-5 pt-0">
                <a href="https://call-me-yours-web-kqmg.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-purple-500 hover:underline inline-flex items-center">
                  <span>Launch Mini App</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </Card>

            {/* Project 5: Smart Contract Audits & Bug Bounties */}
            <Card className="bg-card border-border overflow-hidden hover:scale-[1.02] hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-md animate-on-scroll flex flex-col justify-between" style={{animationDelay: '0.6s'}}>
              <div>
                <div className="h-44 bg-gradient-to-br from-amber-500/15 to-transparent flex items-center justify-center border-b border-border/40 relative">
                  <Lock className="w-14 h-14 text-amber-500 dark:text-yellow-400" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 rounded-full text-[11px] font-semibold">
                    HackenProof & Cantina
                  </span>
                </div>
                <CardContent className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Protocol Security Audits</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Formal vulnerability discovery across Lendvest (confirmed Low finding F-14), Morpho V2 and Pendle Boros on Cantina, and ongoing Cartha-vaults ($30K contest).
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Lendvest (F-14)</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Morpho V2</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Pendle Boros</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Cartha Vaults</span>
                  </div>
                </CardContent>
              </div>
              <div className="px-6 pb-5 pt-0">
                <span className="text-xs text-text-secondary">PoC-backed formal submissions</span>
              </div>
            </Card>

            {/* Project 6: ReBirth & Multi-Chain Infra */}
            <Card className="bg-card border-border overflow-hidden hover:scale-[1.02] hover:border-cherry-pink/50 transition-all duration-300 shadow-sm hover:shadow-md animate-on-scroll flex flex-col justify-between" style={{animationDelay: '0.75s'}}>
              <div>
                <div className="h-44 gradient-cherry flex items-center justify-center border-b border-border/40 relative">
                  <Layers className="w-14 h-14 text-cherry-pink" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-cherry-pink/20 text-cherry-pink border border-cherry-pink/40 rounded-full text-[11px] font-semibold">
                    Solana & Starknet
                  </span>
                </div>
                <CardContent className="pt-5 pb-2">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">ReBirth & Multi-Chain Infra</h3>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    One-click SPV factory on Solana devnet using Token-2022 DefaultAccountState (dev3pack/Colosseum), and ZapInvoice gasless USDC paymaster invoicing on Starknet.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Solana Token-2022</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">Starkzap SDK</span>
                    <span className="px-2.5 py-0.5 bg-dark-secondary border border-border rounded-full text-[11px] font-medium">AVNU Paymaster</span>
                  </div>
                </CardContent>
              </div>
              <div className="px-6 pb-5 pt-0">
                <span className="text-xs text-text-secondary">Colosseum & Dev3pack entries</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ambassador & Research Publications */}
      <section id="ambassador" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cherry-pink/15 text-cherry-pink rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-cherry-pink/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Ambassador & Technical Author</span>
            </div>
            <h2 className="text-3xl font-bold mb-3">Nansen Ambassadorship & Deep Research</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Delivering on-chain market intelligence, smart money tracking, and protocol architectural deconstructions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 p-6 shadow-sm animate-on-scroll">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-cherry-pink/15 flex items-center justify-center text-cherry-pink shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Nansen Official Ambassador</h3>
                  <p className="text-xs text-cherry-pink font-mono mb-2">Referral Code: nsn.ai/devair</p>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Collaborating with Nansen on weekly smart money telemetry, token flow breakdowns, and on-chain intelligence dashboards.
                  </p>
                  <Button asChild size="sm" className="bg-cherry-pink text-white dark:text-dark-primary font-medium hover:opacity-90">
                    <a href="https://nsn.ai/devair" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                      <span>Visit Nansen Ambassador Portal</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 p-6 shadow-sm animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-cherry-pink/15 flex items-center justify-center text-cherry-pink shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Technical Publications</h3>
                  <p className="text-xs text-cherry-pink font-mono mb-2">0xdevair.medium.com</p>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    Author of structured research including <em>"Exploring 50 EVM Opcodes in Assembly"</em> and <em>"Balancer V2 LBP CMMM Mathematics Review"</em>.
                  </p>
                  <Button asChild size="sm" variant="outline" className="border-cherry-pink text-cherry-pink hover:bg-cherry-pink hover:text-white dark:hover:text-dark-primary">
                    <a href="https://0xdevair.medium.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                      <span>Read on Medium</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect & Ecosystem Section */}
      <section id="contact" className="py-20 px-6 bg-dark-secondary/30 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll">Connect Across the Ecosystem</h2>
          <p className="text-base sm:text-lg text-text-secondary mb-12 max-w-xl mx-auto animate-on-scroll" style={{animationDelay: '0.15s'}}>
            Open for smart contract audits, DeFAI protocol engineering, and on-chain research collaborations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {/* GitHub */}
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md animate-on-scroll">
              <CardContent className="pt-5 pb-5 px-3 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://github.com/thenameisdevair" target="_blank" rel="noopener noreferrer">
                    <Github className="w-7 h-7 text-foreground mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-[11px] text-text-secondary">GitHub</div>
                    <div className="text-xs font-semibold text-foreground truncate max-w-full">84 Repos</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Twitter */}
            <Card className="bg-card border-border hover:border-accent-blue/50 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-5 pb-5 px-3 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://twitter.com/0xdevair" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-7 h-7 text-accent-blue mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-[11px] text-text-secondary">X / Twitter</div>
                    <div className="text-xs font-semibold text-foreground">@0xdevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Telegram */}
            <Card className="bg-card border-border hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-5 pb-5 px-3 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://t.me/OxDevair" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-7 h-7 text-emerald-500 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-[11px] text-text-secondary">Telegram</div>
                    <div className="text-xs font-semibold text-foreground">@OxDevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Nansen */}
            <Card className="bg-card border-border hover:border-cherry-pink/50 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-5 pb-5 px-3 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://nsn.ai/devair" target="_blank" rel="noopener noreferrer">
                    <Activity className="w-7 h-7 text-cherry-pink mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-[11px] text-text-secondary">Nansen</div>
                    <div className="text-xs font-semibold text-foreground">Ambassador</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Medium */}
            <Card className="bg-card border-border hover:border-foreground/40 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <CardContent className="pt-5 pb-5 px-3 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://0xdevair.medium.com" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-7 h-7 text-foreground mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-[11px] text-text-secondary">Medium</div>
                    <div className="text-xs font-semibold text-foreground">0xdevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CoinMarketCap */}
            <Card className="bg-card border-border hover:border-accent-blue/50 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <CardContent className="pt-5 pb-5 px-3 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://coinmarketcap.com/community/profile/thenameisdevair/" target="_blank" rel="noopener noreferrer">
                    <Coins className="w-7 h-7 text-accent-blue mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-[11px] text-text-secondary">CoinMarketCap</div>
                    <div className="text-xs font-semibold text-foreground truncate max-w-full">thenameisdevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-cherry-pink/10 via-card to-accent-blue/10 border border-border shadow-md animate-on-scroll" style={{animationDelay: '0.6s'}}>
            <CardContent className="pt-8 pb-8 px-6">
              <h3 className="text-2xl font-semibold mb-3">Ready to Build or Audit?</h3>
              <p className="text-text-secondary mb-6 max-w-xl mx-auto text-sm sm:text-base">
                Whether you need smart contract security review, autonomous agent architecture, or protocol-level research, let's connect.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-cherry-pink text-white dark:text-dark-primary font-medium hover:opacity-90 px-7 py-3 transform hover:scale-105 transition-all duration-300 shadow-sm">
                  <a href="mailto:okechiemmanuel23@gmail.com" className="inline-flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    okechiemmanuel23@gmail.com
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-border text-foreground hover:bg-card px-6 py-3 transition-all duration-300">
                  <a href="https://t.me/OxDevair" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 text-emerald-500" />
                    Telegram Direct
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-dark-secondary/60 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} DevAir (@0xdevair). Smart Contract Developer & DeFAI Protocol Engineer.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-text-secondary mr-1">Theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}

