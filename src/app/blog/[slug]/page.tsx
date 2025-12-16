import BlogPostClient from "@/components/pages/BlogPostClient";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }
    return {
        title: `${post.title} | GoldenGlow Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    return <BlogPostClient slug={slug} />;
}
