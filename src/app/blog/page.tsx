import BlogClient from "@/components/pages/BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | GoldenGlow IT Solutions - MVP Development Insights",
    description: "Expert insights on MVP development, startup strategy, and product building. Learn from our team of experienced developers and founders.",
};

export default function BlogPage() {
    return <BlogClient />;
}
