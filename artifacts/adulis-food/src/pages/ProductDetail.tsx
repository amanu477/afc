import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, ChevronRight, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { STATIC_PRODUCTS } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = STATIC_PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-3xl font-display font-bold text-foreground">Product not found</h2>
        <p className="text-muted-foreground">This product doesn't exist or may have been removed.</p>
        <Link href="/products">
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition mt-2">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
        </Link>
      </div>
    );
  }

  const currentIdx = STATIC_PRODUCTS.findIndex((p) => p.id === product.id);
  const prevProduct = STATIC_PRODUCTS[currentIdx - 1];
  const nextProduct = STATIC_PRODUCTS[currentIdx + 1];
  const imgs = product.detailImages ?? [];
  const hasSpices = product.spices && product.spices.length > 0;
  const hasBaltnaItems = product.baltnaItems && product.baltnaItems.length > 0;

  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-foreground">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{product.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                {product.badge && (
                  <Badge className="bg-primary/20 text-primary border border-primary/30 font-bold px-3 py-1">
                    {product.badge}
                  </Badge>
                )}
                <Badge variant="outline" className="text-white/60 border-white/20">
                  {product.category}
                </Badge>
              </div>

              <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-2 tracking-tight">
                {product.name}
              </h1>

              {product.subtitle && (
                <p className="text-white/60 font-medium text-lg mb-4">{product.subtitle}</p>
              )}

              <div className="flex text-primary mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-primary font-semibold italic text-lg mb-3">{product.tagline}</p>
              <p className="text-white/70 text-base leading-relaxed max-w-lg">{product.oneLiner}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  name={product.name}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + SOURCING */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl text-foreground/90 leading-relaxed border-l-4 border-primary pl-6 mb-10 font-light">
              {product.description}
            </p>

            {product.sourcingStory && (
              <div className="bg-muted/40 rounded-2xl p-8 border border-border/50">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Sourcing Story</h2>
                <p className="text-muted-foreground leading-relaxed text-base italic">
                  {product.sourcingStory}
                </p>
              </div>
            )}
          </motion.div>

          {/* LIFESTYLE PHOTO GRID */}
          {imgs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 grid gap-3"
              style={{ gridTemplateColumns: `repeat(${Math.min(imgs.length, 3)}, 1fr)` }}
            >
              {imgs.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl aspect-[4/3] shadow-md">
                  <img
                    src={src}
                    alt={`${product.name} photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* SPICES SECTION — only for Ethiopian Spices */}
      {hasSpices && (
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                Our Spices
              </h2>
              <p className="text-muted-foreground mb-10">
                Each spice is a distinct variety with its own origin, processing, and flavour profile.
              </p>

              <div className="space-y-6">
                {product.spices!.map((spice, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-background rounded-2xl border border-border/60 overflow-hidden"
                  >
                    {/* Spice Header */}
                    <div className="flex items-start gap-4 p-6 border-b border-border/40">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground">{spice.name}</h3>
                        <p className="text-sm text-primary italic mt-0.5">{spice.profile}</p>
                        {spice.culinaryRole && (
                          <p className="text-xs text-muted-foreground mt-1">{spice.culinaryRole}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/40">
                      {/* Processing Steps */}
                      <div className="p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">How It's Processed</p>
                        <ol className="space-y-2">
                          {spice.processing.map((step, j) => (
                            <li key={j} className="flex gap-3 items-start">
                              <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                                {j + 1}
                              </span>
                              <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Health Benefit */}
                      <div className="p-6 bg-muted/20">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Health Benefit</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{spice.healthBenefit}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* BALTNA ITEMS SECTION — only for Ethiopian Baltna */}
      {hasBaltnaItems && (
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                What's Inside Baltna
              </h2>
              <p className="text-muted-foreground mb-10">
                Ethiopia's original functional foods — each product a centuries-old tradition, made with no additives, no shortcuts.
              </p>

              <div className="space-y-8">
                {product.baltnaItems!.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-background rounded-2xl border border-border/60 overflow-hidden"
                  >
                    {/* Header */}
                    {item.imageUrl ? (
                      <div className="flex border-b border-border/40">
                        <div className="relative w-44 shrink-0 overflow-hidden bg-muted">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-center gap-4 p-6 flex-1">
                          <div>
                            <h3 className="font-display font-bold text-xl text-foreground">{item.name}</h3>
                            {item.subtitle && (
                              <p className="text-sm text-primary font-medium mt-0.5">{item.subtitle}</p>
                            )}
                            <p className="text-xs text-muted-foreground italic mt-1">{item.tagline}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-4 p-6 border-b border-border/40 bg-primary/5">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-foreground">{item.name}</h3>
                          {item.subtitle && (
                            <p className="text-sm text-primary font-medium mt-0.5">{item.subtitle}</p>
                          )}
                          <p className="text-xs text-muted-foreground italic mt-1">{item.tagline}</p>
                        </div>
                      </div>
                    )}

                    <div className="p-6 border-b border-border/40">
                      <p className="text-muted-foreground leading-relaxed">{item.oneLiner}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/40">
                      {/* How It's Made */}
                      {item.howItsMade.length > 0 && (
                        <div className="p-6">
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">How It's Made</p>
                          <ol className="space-y-2">
                            {item.howItsMade.map((step, j) => {
                              const [title, ...rest] = step.split(":");
                              const body = rest.join(":").trim();
                              return (
                                <li key={j} className="flex gap-3 items-start">
                                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                                    {j + 1}
                                  </span>
                                  <span className="text-sm text-muted-foreground leading-relaxed">
                                    {body ? <><strong className="text-foreground/80">{title}:</strong> {body}</> : step}
                                  </span>
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      )}

                      {/* Benefits */}
                      {item.benefits.length > 0 && (
                        <div className="p-6 bg-muted/20">
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Why It's Good for You</p>
                          <ul className="space-y-2">
                            {item.benefits.map((b, j) => (
                              <li key={j} className="flex gap-3 items-start">
                                <CheckCircle2 className="shrink-0 w-4 h-4 text-primary mt-0.5" />
                                <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Key Ingredients (Mitmita) */}
                    {item.keyIngredients && item.keyIngredients.length > 0 && (
                      <div className="p-6 border-t border-border/40">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Key Ingredients</p>
                        <ul className="space-y-2">
                          {item.keyIngredients.map((ing, j) => {
                            const [name, ...rest] = ing.split(":");
                            const desc = rest.join(":").trim();
                            return (
                              <li key={j} className="flex gap-3 items-start">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs font-bold flex items-center justify-center mt-0.5">{j + 1}</span>
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {desc ? <><strong className="text-foreground/80">{name}:</strong> {desc}</> : ing}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Traditional Use or Culinary Use */}
                    {((item.traditionalUse && item.traditionalUse.length > 0) || (item.culinaryUse && item.culinaryUse.length > 0)) && (
                      <div className="p-6 border-t border-border/40 bg-secondary/5">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                          {item.culinaryUse ? "Culinary Use" : "Traditional Use"}
                        </p>
                        <ul className="space-y-2">
                          {(item.culinaryUse ?? item.traditionalUse)!.map((use, j) => {
                            const [title, ...rest] = use.split(":");
                            const body = rest.join(":").trim();
                            return (
                              <li key={j} className="flex gap-3 items-start">
                                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {body ? <><strong className="text-foreground/80">{title}:</strong> {body}</> : use}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* HOW WE MAKE IT — hidden for spice products (no steps) */}
      {product.howItsMade.length > 0 && (
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
                How We Make It
              </h2>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-primary/20" />
                <div className="space-y-8">
                  {product.howItsMade.map((step, i) => {
                    const [title, ...rest] = step.split(":");
                    const body = rest.join(":").trim();
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-6 items-start"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30 relative z-10">
                          {i + 1}
                        </div>
                        <div className="pt-1.5">
                          {body ? (
                            <>
                              <span className="font-bold text-foreground">{title}: </span>
                              <span className="text-muted-foreground leading-relaxed">{body}</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground leading-relaxed">{step}</span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* WHY IT'S GOOD FOR YOU */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
              Why It's Good For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => {
                const [title, ...rest] = benefit.split("–");
                const body = rest.join("–").trim();
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 items-start bg-muted/30 rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      {body ? (
                        <>
                          <span className="font-semibold text-foreground text-sm">{title.trim()} – </span>
                          <span className="text-muted-foreground text-sm leading-relaxed">{body}</span>
                        </>
                      ) : (
                        <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-white/60 mb-8">
              Get in touch with our team for bulk orders, export inquiries, or product samples.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/30 hover:-translate-y-0.5 duration-200 text-base">
                <ArrowRight className="w-5 h-5" />
                Order Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <nav className="border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch divide-x divide-border/50">
            {prevProduct ? (
              <Link href={`/products/${prevProduct.id}`} className="flex-1">
                <div className="flex items-center gap-4 py-6 px-4 group hover:bg-muted/40 transition-colors">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Previous</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">{prevProduct.name}</p>
                  </div>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            <Link href="/products" className="px-8 py-6 flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/40 transition-colors">
              All Products
            </Link>

            {nextProduct ? (
              <Link href={`/products/${nextProduct.id}`} className="flex-1">
                <div className="flex items-center justify-end gap-4 py-6 px-4 group hover:bg-muted/40 transition-colors text-right">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Next</p>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">{nextProduct.name}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </nav>
    </div>
  );
}
