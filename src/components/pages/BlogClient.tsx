"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts, getFeaturedPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogClient = () => {
    const featuredPosts = getFeaturedPosts();
    const regularPosts = blogPosts.filter((post) => !post.featured);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-16 lg:py-24">
                    <div className="section-container">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="label-mono mb-4 block">// insights & resources</span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                The <span className="text-gradient">GoldenGlow</span> Blog
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl">
                                Expert insights on MVP development, startup strategy, and product building.
                                that users love. Learn from our team's experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <section className="pb-16">
                        <div className="section-container">
                            <h2 className="font-display text-2xl font-bold mb-8">Featured Articles</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group block rounded-2xl bg-card border border-border overflow-hidden card-hover"
                                    >
                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                                                    {post.category}
                                                </span>
                                                <span className="text-sm text-muted-foreground flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                                                        <span className="font-display font-bold text-primary text-sm">
                                                            {post.author.name[0]}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* All Posts */}
                <section className="pb-24">
                    <div className="section-container">
                        <h2 className="font-display text-2xl font-bold mb-8">All Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group block rounded-2xl bg-card border border-border overflow-hidden card-hover"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                                        </div>
                                        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>{post.author.name}</span>
                                            <span>•</span>
                                            <span>
                                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default BlogClient;
