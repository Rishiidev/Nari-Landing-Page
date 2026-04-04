import React, { useState, useEffect } from 'react';
import { 
  Shield, Lock, Smartphone, Heart, Download, Trash2, 
  ChevronRight, Activity, Calendar, Star, ArrowRight, 
  ChevronDown, ChevronUp, Github, Fingerprint, Database, EyeOff, Sparkles
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// --- Components ---
function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-nari-border/50 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-between items-center text-left focus:outline-none group">
        <span className="font-medium text-lg text-nari-text group-hover:text-nari-primary transition-colors">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-nari-primary shrink-0 ml-4 bg-nari-primary/10 p-2 rounded-full"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div 
        initial={false} 
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} 
        className="overflow-hidden"
      >
        <p className="pt-4 text-nari-text-muted leading-relaxed pr-8">{answer}</p>
      </motion.div>
    </div>
  );
}

function AppMockup() {
  return (
    <motion.div 
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[320px] mx-auto bg-[#FDFBF9] rounded-[3rem] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-[8px] border-white overflow-hidden"
    >
      {/* Glass reflection */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/60 to-transparent z-10 pointer-events-none rounded-t-[2.5rem]"></div>

      {/* Status Bar Mock */}
      <div className="flex justify-between items-center mb-8 px-2 relative z-20">
        <span className="text-[11px] font-semibold text-stone-800 tracking-wider">9:41</span>
        <div className="flex space-x-1.5 items-center">
          <div className="w-4 h-2.5 bg-stone-800 rounded-[3px] opacity-80"></div>
          <div className="w-3 h-3 bg-stone-800 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-20">
        <div>
          <h2 className="font-serif text-3xl text-stone-800 tracking-tight">Nari</h2>
          <p className="text-xs text-stone-500 font-medium mt-1">Nothing logged today</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-nari-primary border border-stone-100">
          <Calendar size={18} />
        </div>
      </div>

      {/* Current Status Card */}
      <div className="bg-white rounded-[2rem] p-6 mb-6 shadow-sm border border-stone-100 relative z-20">
        <h3 className="text-2xl font-serif text-stone-800 mb-6">No logs yet</h3>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-wider text-nari-primary uppercase mb-1">Next Period</p>
            <p className="text-base font-medium text-stone-800">Apr 3, 2026</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-serif text-nari-primary leading-none">0</span>
            <span className="block text-[9px] font-bold text-nari-primary uppercase tracking-wider mt-1">Days Away</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 mb-8 relative z-20">
        <button className="flex-1 bg-nari-primary text-white py-4 rounded-[1.5rem] text-sm font-medium shadow-md shadow-nari-primary/20 hover:scale-[1.02] transition-transform">
          End Period
        </button>
        <button className="flex-1 bg-white text-stone-800 py-4 rounded-[1.5rem] text-sm font-medium shadow-sm border border-stone-100 hover:scale-[1.02] transition-transform">
          Log Data
        </button>
      </div>

      {/* Cycle Overview Ring Mock */}
      <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-stone-100 flex flex-col items-center justify-center aspect-square relative z-20">
        <p className="absolute top-5 left-5 text-xs font-semibold text-stone-800">Overview</p>
        <p className="absolute top-5 right-5 text-[10px] font-bold text-nari-primary uppercase tracking-wider bg-nari-primary/10 px-2 py-1 rounded-full">Day 2</p>
        
        {/* SVG Ring */}
        <div className="relative w-40 h-40 mt-4">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-sm">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#F5F5F5" strokeWidth="10" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#C05C4F" strokeWidth="10" strokeDasharray="25 251" strokeLinecap="round" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#A7C7E7" strokeWidth="10" strokeDasharray="60 251" strokeDashoffset="-30" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-serif text-stone-800">2</span>
            <span className="text-[9px] font-bold tracking-wider text-nari-primary uppercase mt-1">Menstrual</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-stone-800 font-sans selection:bg-nari-primary/20 overflow-x-hidden">
      
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/70 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-medium tracking-tight text-stone-900">Nari</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 bg-white/50 px-6 py-2 rounded-full border border-stone-200/50">
            <a href="#features" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">How it Works</a>
            <a href="#privacy" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#faq" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden sm:flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
              <Github size={18} className="mr-2" />
              Star on GitHub
            </a>
            <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-nari-primary transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300">
              Open App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-b from-nari-primary/10 via-nari-primary/5 to-transparent blur-3xl -z-10 rounded-full opacity-70"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-200 shadow-sm mb-8">
              <Sparkles size={14} className="text-nari-primary" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-stone-600">100% Open Source & Local</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-serif leading-[1.05] mb-6 text-stone-900 tracking-tight">
              Your cycle.<br />
              <span className="text-nari-primary italic pr-4">Your data.</span><br />
              Your device.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-500 mb-10 leading-relaxed max-w-lg">
              The anti-data-broker period tracker. No accounts, no ads, no cloud sync. Just a beautiful, fast interface that keeps your health data strictly on your phone.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-nari-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#A84B3E] transition-all shadow-lg shadow-nari-primary/30 flex items-center justify-center group hover:-translate-y-1">
                Start Tracking Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-stone-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-stone-50 transition-all shadow-sm border border-stone-200 flex items-center justify-center hover:-translate-y-1">
                View Source Code
              </button>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-10 flex items-center space-x-4 text-sm text-stone-400 font-medium">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#FAF9F7] bg-stone-${200 + (i*100)}`}></div>
                ))}
              </div>
              <p>Trusted by 10,000+ privacy advocates</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative lg:ml-auto w-full max-w-md perspective-1000"
            initial={{ opacity: 0, rotateY: 15, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <AppMockup />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-5xl font-serif mb-6 text-stone-900 tracking-tight">Designed for paranoia.<br/>Built for peace of mind.</h2>
            <p className="text-xl text-stone-500 max-w-2xl">Traditional health apps sell your data. Nari physically cannot. We replaced the cloud with your device's local storage.</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            
            {/* Large Card 1 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-stone-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-nari-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-nari-primary/10 transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-800 mb-6">
                  <Database size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-3 text-stone-900">Your device is the server.</h3>
                  <p className="text-stone-500 text-lg max-w-md">Data is written directly to your browser's IndexedDB. It never touches the internet. It works in airplane mode.</p>
                </div>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div variants={fadeUp} className="md:col-span-1 bg-stone-900 text-white rounded-[2.5rem] p-10 border border-stone-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center text-nari-primary mb-6">
                  <EyeOff size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Zero Trackers</h3>
                  <p className="text-stone-400">No Google Analytics. No Facebook Pixel. Absolute silence.</p>
                </div>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div variants={fadeUp} className="md:col-span-1 bg-white rounded-[2.5rem] p-10 border border-stone-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-nari-primary/10 rounded-2xl flex items-center justify-center text-nari-primary mb-6">
                  <Fingerprint size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-3">Biometric Lock</h3>
                  <p className="text-stone-500">Secure your local data with FaceID or TouchID via WebAuthn.</p>
                </div>
              </div>
            </motion.div>

            {/* Large Card 2 */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-[#F2EDE4] rounded-[2.5rem] p-10 border border-stone-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              {/* Decorative floating tags */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-mono text-sm text-stone-600 transform rotate-3">export.json</div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-mono text-sm text-stone-600 transform -rotate-2 -translate-x-4">cycle_data.csv</div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-stone-800 mb-6 shadow-sm">
                  <Download size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-3 text-stone-900">Export in seconds.</h3>
                  <p className="text-stone-600 text-lg max-w-md">Don't want to use Nari anymore? Export your entire history to JSON or CSV with one click. No hostage situations.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* How it Works Section - Animated Journey */}
      <section id="how-it-works" className="py-32 px-6 bg-white relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-5xl font-serif mb-6 text-stone-900 tracking-tight">Frictionless by design.</h2>
            <p className="text-xl text-stone-500">Because we don't need your email, you can start tracking in literally 3 seconds.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Animated Connecting Line */}
            <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-stone-100">
              <motion.div 
                className="h-full bg-nari-primary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>

            {[
              { icon: Smartphone, title: "1. Open the App", desc: "No sign-ups, no onboarding carousels. Just open the URL." },
              { icon: Heart, title: "2. Log Instantly", desc: "Tap to log your period, symptoms, and mood. Done in seconds." },
              { icon: Activity, title: "3. Get Insights", desc: "View cycle history and predictions, calculated locally." }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="text-center relative z-10">
                <div className="w-36 h-36 mx-auto bg-white rounded-full flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-stone-100 mb-8 group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-24 h-24 rounded-full bg-[#FAF9F7] flex items-center justify-center group-hover:bg-nari-primary/5 transition-colors">
                    <step.icon className="text-nari-primary" size={36} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-4 text-stone-900">{step.title}</h3>
                <p className="text-stone-500 text-lg px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-[#FAF9F7]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-serif mb-6 text-stone-900 tracking-tight">Loved by privacy advocates</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Finally, a period tracker that doesn't feel like it's harvesting my data. The design is beautiful and calming.", author: "Sarah M." },
              { quote: "Clean, minimal, and exactly what I needed. The local-first approach gives me complete peace of mind.", author: "Elena R." },
              { quote: "No pink tax, no ads, no accounts. Just a beautiful app that respects my privacy. Highly recommend.", author: "Jessica T." }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex space-x-1 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-nari-primary fill-nari-primary" />)}
                </div>
                <p className="text-lg text-stone-700 mb-8 leading-relaxed font-medium">"{testimonial.quote}"</p>
                <p className="text-stone-400 font-medium tracking-wide uppercase text-xs">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-6 text-stone-900 tracking-tight">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2">
            <FAQItem 
              question="Where is my data stored?" 
              answer="Strictly on your device. Nari uses your browser's local storage (IndexedDB) to save your data. We do not have servers, and your data never leaves your phone or computer." 
            />
            <FAQItem 
              question="Can I use Nari across multiple devices?" 
              answer="Currently, Nari is entirely local to the device you use it on. This is by design to ensure maximum privacy. We are exploring secure, end-to-end encrypted sync options for the future." 
            />
            <FAQItem 
              question="How do I backup my data?" 
              answer="You can export your data as a JSON or CSV file at any time from the Privacy settings. We recommend doing this periodically so you have a backup in case you lose your device." 
            />
            <FAQItem 
              question="Is Nari really free?" 
              answer="Yes, Nari is completely free to use. There are no ads, no hidden tracking, and no premium subscriptions. We believe privacy should not be a luxury." 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-nari-primary/20 via-transparent to-transparent opacity-50"></div>
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">
            Take back your data.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-stone-400 mb-12 max-w-2xl mx-auto font-light">
            Join the movement towards private, local-first health tracking. No sign-up required.
          </motion.p>
          <motion.div variants={fadeUp}>
            <button className="bg-nari-primary text-white px-12 py-6 rounded-full font-medium text-xl hover:bg-[#A84B3E] transition-all shadow-[0_0_40px_-10px_rgba(192,92,79,0.5)] flex items-center justify-center mx-auto group hover:-translate-y-1">
              Start Tracking Now
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 border-t border-stone-800 text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <span className="font-serif text-2xl font-medium text-white tracking-tight">Nari</span>
          </div>
          
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors flex items-center">
              <Github size={16} className="mr-2" />
              Source Code
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 text-center md:text-left text-sm text-stone-600">
          &copy; {new Date().getFullYear()} Nari. Built for privacy.
        </div>
      </footer>
    </div>
  );
}
