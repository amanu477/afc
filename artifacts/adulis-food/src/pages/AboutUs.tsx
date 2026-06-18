import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  Sparkles,
  Lock,
  CheckCircle2,
  Wheat,
  FlaskConical,
  Users,
  Microscope,
  Thermometer,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const focuses = [
  { icon: ShieldCheck, label: "Unchanging Quality" },
  { icon: Handshake, label: "Radical Honesty" },
  { icon: Sparkles, label: "Tradition with Integrity" },
  { icon: Lock, label: "Safety Always" },
];

const promises = [
  {
    icon: CheckCircle2,
    title: "Nothing artificial.",
    desc: "If it's not food, it's not in our products.",
  },
  {
    icon: ShieldCheck,
    title: "Quality you can count on.",
    desc: "Taste and trust, batch after batch.",
  },
  {
    icon: Handshake,
    title: "Prices that make sense.",
    desc: "Good food for everyone, not just some.",
  },
  {
    icon: Sparkles,
    title: "Honest answers.",
    desc: "Ask us anything. We will tell you the truth.",
  },
];

const rules = [
  "Nothing artificial. Ever.",
  "No hidden ingredients.",
  "No prices that make you wince.",
  "The same quality, batch after batch.",
];

export default function AboutUs() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y }}>
            <img
              src="/about-hero.webp"
              alt="Ethiopian barley field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/50" />
            <div className="absolute inset-0 bg-grain" />
          </motion.div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-5 bg-primary/20 inline-block px-4 py-1.5 rounded-full border border-primary/30"
            >
              Rooted in Ethiopia. Built on trust. Shared with the world.
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {["We", "make", "food", "you", "can", "trust."].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, type: "spring", damping: 14, stiffness: 180 }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-primary"
              >
                Every day. Every product.
              </motion.span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="w-32 h-1.5 bg-gradient-to-r from-primary to-amber-300 mx-auto mb-8 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-white/85 leading-relaxed max-w-2xl mx-auto"
            >
              Based in Ethiopia, we manufacture authentic dry foods — kolo, spices, teff, peanut butter, and traditional staples — the way they should be made: naturally, honestly, and for everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image — company building */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group relative">
                <div className="absolute inset-0 bg-primary/15 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                <img
                  src="/factory/factory-building-exterior.webp"
                  alt="Adulis Food Complex headquarters"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-primary text-white p-7 rounded-3xl shadow-[0_20px_40px_rgba(194,99,33,0.3)] z-20"
              >
                <div className="text-5xl font-display font-bold mb-1">10+</div>
                <div className="text-white/90 text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
              </motion.div>
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-[2rem]" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                We make the food we grew up loving.
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  We grew up eating real kolo, peanut, genuine shiro, spices that smelled like someone's grandmother was in the kitchen. When we started this company, we asked one question: how do we make food this good available to everyone, every day, at a fair price?
                </p>
                <p>
                  That question led us everywhere — to highland farms, to trusted suppliers, to our own facility where we could control every step. We invested in facilities that could handle traditional foods with modern hygiene. We hired people who care about quality because they care about the food.
                </p>
                <p>
                  Today, we supply homes and businesses across Ethiopia and beyond. But the mission has not changed: to make authentic, nourishing food accessible to everyone who wants it.
                </p>
              </div>

              {/* Simple rules */}
              <div className="mt-8 space-y-2">
                {rules.map((rule, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground font-medium">{rule}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/products">
                <Button size="lg" className="mt-8 rounded-full px-8 hover:-translate-y-1 transition-all group">
                  See Our Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* ── WHAT WE STAND FOR ── */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-gradient opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              To bring the true taste of Ethiopia to every table — authentically, and without compromise.
            </p>
          </motion.div>

          {/* Vision elaboration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border/40 rounded-3xl p-10 mb-14 max-w-4xl mx-auto shadow-md"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg text-center">
              <p>We want the grandmother in Addis to find our kolo and recognize her own.</p>
              <p>We want the student abroad to open our shiro and smell their mother's kitchen.</p>
              <p>We want the family on any budget to afford food that is good for them.</p>
            </div>
          </motion.div>

          {/* Focus pills */}
          <p className="text-center text-primary font-medium tracking-widest uppercase text-sm mb-8">Our Focus</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focuses.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="relative h-full border-0 group bg-card hover:-translate-y-2 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg">
                    <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon strokeWidth={1.5} className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {f.label}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-secondary" />
      </div>

      {/* ── OUR IMPACT: QUALITY ── */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Impact</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">Impact on Quality</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A real manufacturing facility designed for one purpose: making safe, consistent, delicious food.
            </p>
          </motion.div>

          {/* Two images: production floor + machinery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              className="group rounded-[2rem] overflow-hidden shadow-xl relative h-72"
            >
              <img
                src="/factory/factory-production-panorama.webp"
                alt="Adulis production floor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-white font-display font-bold text-lg">Production Floor</p>
                <p className="text-white/75 text-sm">Controlled, sanitized daily, organized by workflow.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group rounded-[2rem] overflow-hidden shadow-xl relative h-72"
            >
              <img
                src="/factory/factory-abb-mixer.webp"
                alt="Adulis modern production machinery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-white font-display font-bold text-lg">Machinery</p>
                <p className="text-white/75 text-sm">Modern roasters, grinders, and packaging equipment.</p>
              </div>
            </motion.div>
          </div>

          {/* 3 quality pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Wheat, title: "Production Area", desc: "Controlled, sanitized daily, organized by workflow. Every batch moves from raw ingredient to finished product without cross-contamination." },
              { icon: ShieldCheck, title: "Machinery", desc: "Modern roasters, grinders, and packaging equipment. Maintained daily. Calibrated for precision." },
              { icon: Users, title: "People", desc: "Trained staff who know their machines and know their food. Many of us grew up eating what we now make." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-border/40 bg-card hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                    <CardContent className="p-8 flex gap-5 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon strokeWidth={1.5} className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* ── OUR IMPACT: SAFETY ── */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Impact</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Impact on Safety
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Every peanut tested for aflatoxin. Every spice checked for purity. Every product formulated with one rule: nothing artificial, ever.
                </p>
                <p>
                  We maintain an on-site lab where we test for moisture, purity, consistency, and contaminants. If a batch does not meet our standards, it does not leave this building.
                </p>
                <p className="text-foreground font-semibold text-xl">
                  We do not outsource our quality. We own it.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 p-5 bg-primary/10 rounded-2xl border border-primary/20">
                <FlaskConical className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-foreground">On-site Laboratory</p>
                  <p className="text-muted-foreground text-sm">Clean surfaces, professional equipment, technician at work — every batch verified.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              <img
                src="/factory/lab-microscope.webp"
                alt="Adulis quality control laboratory"
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-bold text-lg">Quality Control Lab</p>
                <p className="text-white/75 text-sm">Every batch tested before it leaves this building.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* ── QUALITY CONTROL LABORATORY ── */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Science & Safety</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Our Quality Control Laboratory
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Every product leaving our facility passes through a fully equipped in-house laboratory. Our team of food scientists and quality control specialists test for moisture content, microbial safety, and nutritional consistency.
                </p>
                <p>
                  We use internationally certified instruments — from binocular microscopes for microbiological inspection to precision autoclaves for sterilization — ensuring that every batch meets Ethiopian and international food safety standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              <img
                src="/factory/team-quality-manager.webp"
                alt="Adulis quality control team"
                className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-bold text-lg">Quality Control Management</p>
                <p className="text-white/75 text-sm">Ensuring every product meets our exacting standards before it leaves the facility.</p>
              </div>
            </motion.div>
          </div>

          {/* Lab equipment cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/factory/lab-microscope.webp",
                icon: Microscope,
                title: "Magnus Theia Microscope",
                desc: "High-resolution binocular microscope used for microbiological inspection of raw materials and finished products.",
              },
              {
                image: "/factory/lab-magnetic-stirrer.webp",
                icon: FlaskConical,
                title: "Temperature Magnetic Stirrer",
                desc: "85-2A precision temperature-controlled magnetic stirrer used for chemical analysis and moisture determination testing.",
              },
              {
                image: "/factory/lab-autoclave.webp",
                icon: Wind,
                title: "Pressure Autoclave Sterilizer",
                desc: "Stainless steel autoclave sterilizes lab instruments and culture media, ensuring a contamination-free testing environment.",
              },
              {
                image: "/factory/lab-oven.webp",
                icon: Thermometer,
                title: "Cologne-Lab Drying Oven",
                desc: "Programmable laboratory oven used for moisture content analysis and drying tests on food samples.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <Card className="h-full border-border/40 bg-card overflow-hidden hover:shadow-[0_15px_30px_-10px_rgba(194,99,33,0.2)] hover:border-primary/40 transition-all duration-300">
                    <div className="relative h-44 overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-primary/90 flex items-center justify-center text-white shadow-md">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-secondary" />
      </div>

      {/* ── OUR TEAM ── */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Impact</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Our Team
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Farmers, sorters, roasters, packers, testers, drivers. Many of us grew up eating the foods we now make. We know what kolo should taste like. We know how berbere should smell. That knowledge cannot be programmed into a machine.
                </p>
                <p>
                  Every hand-sorted peanut, every checked roast, every signed-off batch carries our attention.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary rounded-2xl text-white shadow-lg">
                <p className="text-2xl font-display font-bold mb-1">We eat what we make.</p>
                <p className="text-white/85">So should you.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl group relative aspect-[4/3]">
                <div className="absolute inset-0 bg-primary/15 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                <img
                  src="/factory/team-quality-manager.webp"
                  alt="Adulis Food Complex team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[2rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* ── OUR PROMISE ── */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-gradient opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Commitment</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Our Promise</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-0 group bg-card hover:-translate-y-2 transition-all duration-500 rounded-2xl shadow-lg">
                    <CardContent className="p-8 flex flex-col items-start">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon strokeWidth={1.5} className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="absolute inset-0"
        >
          <img
            src="/factory/factory-production-floor.webp"
            alt="Adulis production floor"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-texture-gradient opacity-30 mix-blend-overlay" />
        </motion.div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-md">
              Any questions? Ask us.
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1.5 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(194,99,33,0.5)]"
            />
            <p className="text-xl text-white/90 leading-relaxed mb-12 font-medium">
              We will tell you the truth. About our ingredients, our process, our prices — everything.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-10 py-7 rounded-full bg-white text-secondary font-bold hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
