"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getBlogPostBySlug, getRecentPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

const BlogPostClient = ({ slug }: { slug: string }) => {
    const router = useRouter();
    const post = slug ? getBlogPostBySlug(slug) : undefined;
    const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post]);

    if (!post) {
        // Ideally this should be handled by notFound() in the server component,
        // but as a fallback client-side:
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Post not found</h1>
                    <Link href="/blog" className="text-primary hover:underline mt-4 block">Back to Blog</Link>
                </div>
            </div>
        );
    }

    const articleUrl = `https://goldenglow.dev/blog/${post.slug}`;

    return (
        <div className="min-h-screen bg-background">
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                url={articleUrl}
                publishedAt={post.publishedAt}
                authorName={post.author.name}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://goldenglow.dev" },
                    { name: "Blog", url: "https://goldenglow.dev/blog" },
                    { name: post.title, url: articleUrl },
                ]}
            />
            <Navbar />
            <main className="pt-24">
                <article className="py-12 lg:py-20">
                    <div className="section-container">
                        {/* Back Link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>

                        {/* Article Header */}
                        <header className="max-w-3xl mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pb-8 border-b border-border">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                                    <span className="font-display font-bold text-primary">
                                        {post.author.name[0]}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">{post.author.name}</p>
                                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                                </div>
                                <div className="ml-auto text-sm text-muted-foreground flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                            <div className="prose prose-invert prose-lg max-w-none">
                                <div
                                    className="
                    [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4
                    [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3
                    [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-muted-foreground [&>ul>li]:mb-2
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-muted-foreground [&>ol>li]:mb-2
                    [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-muted-foreground
                    [&>table]:w-full [&>table]:border-collapse [&>table]:mb-6
                    [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-border [&>table>thead>tr>th]:bg-card [&>table>thead>tr>th]:p-3 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold
                    [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-border [&>table>tbody>tr>td]:p-3
                    [&>strong]:text-foreground [&>strong]:font-semibold
                    [&>code]:bg-card [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                  "
                                    dangerouslySetInnerHTML={{
                                        __html: post.content
                                            .replace(/^## /gm, "<h2>")
                                            .replace(/^### /gm, "<h3>")
                                            .replace(/<h2>(.+)$/gm, "<h2>$1</h2>")
                                            .replace(/<h3>(.+)$/gm, "<h3>$1</h3>")
                                            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                                            .replace(/^- (.+)$/gm, "<li>$1</li>")
                                            .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
                                            .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
                                            .replace(/\n\n/g, "</p><p>")
                                            .replace(/\|(.+)\|/g, (match) => {
                                                const cells = match.split("|").filter(Boolean);
                                                return `<tr>${cells.map((c) => `<td>${c.trim()}</td>`).join("")}</tr>`;
                                            }),
                                    }}
                                />
                            </div>

                            {/* Sidebar */}
                            <aside className="space-y-8">
                                {/* Tags */}
                                <div className="p-6 rounded-2xl bg-card border border-border">
                                    <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <Tag className="w-4 h-4 text-primary" />
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Related Posts */}
                                {recentPosts.length > 0 && (
                                    <div className="p-6 rounded-2xl bg-card border border-border">
                                        <h3 className="font-display font-semibold text-foreground mb-4">
                                            Related Articles
                                        </h3>
                                        <div className="space-y-4">
                                            {recentPosts.slice(0, 2).map((relatedPost) => (
                                                <Link
                                                    key={relatedPost.id}
                                                    href={`/blog/${relatedPost.slug}`}
                                                    className="block group"
                                                >
                                                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        {relatedPost.readTime}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                    <h3 className="font-display font-semibold text-foreground mb-2">
                                        Ready to Build Your MVP?
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Let's discuss your project and see how we can help.
                                    </p>
                                    <Button variant="golden" size="sm" className="w-full" asChild>
                                        <Link href="/#contact">
                                            Get Started
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPostClient;
