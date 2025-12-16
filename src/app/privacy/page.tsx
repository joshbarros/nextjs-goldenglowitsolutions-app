import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | GoldenGlow IT Solutions",
    description: "Privacy Policy for GoldenGlow IT Solutions LTDA. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="section-container max-w-4xl">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                        Back to Home
                    </Link>

                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-12">Last updated: December 15, 2025</p>

                    <div className="space-y-10 text-muted-foreground">
                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                            <p className="leading-relaxed mb-4">
                                GoldenGlow IT Solutions LTDA (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
                                goldenglowitsolutions.com (the &quot;Service&quot;). This Privacy Policy explains how we collect, use,
                                disclose, and safeguard your information when you visit our website or engage our services.
                            </p>
                            <p className="leading-relaxed">
                                By using our Service, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Personal Information</h3>
                            <p className="leading-relaxed mb-4">
                                When you use our contact form, request a consultation, or engage our services, we may collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Full name and email address</li>
                                <li>Company name and job title</li>
                                <li>Phone number (if provided)</li>
                                <li>Project requirements and business information</li>
                                <li>Budget range and timeline preferences</li>
                                <li>Billing and payment information (for clients)</li>
                            </ul>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                            <p className="leading-relaxed mb-4">
                                We use Plausible Analytics, a privacy-focused analytics service that does not use cookies. We collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Page views and referral sources</li>
                                <li>Approximate geographic location (country level only)</li>
                                <li>Device type and browser information</li>
                                <li>Session duration and navigation patterns</li>
                            </ul>
                            <p className="leading-relaxed mt-4 text-sm">
                                Note: Plausible does not store IP addresses or use cookies, ensuring your browsing remains private.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                            <p className="leading-relaxed mb-4">
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To respond to your inquiries and provide customer support</li>
                                <li>To prepare and send project proposals and contracts</li>
                                <li>To communicate about ongoing projects and deliverables</li>
                                <li>To process payments and maintain billing records</li>
                                <li>To improve our website and services</li>
                                <li>To send occasional updates about our services (only with your consent)</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
                            <p className="leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share information only in these circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-foreground">With your consent:</strong> When you explicitly authorize us to share your information</li>
                                <li><strong className="text-foreground">Service providers:</strong> With trusted third parties who assist in our operations (e.g., email services, payment processors, cloud hosting)</li>
                                <li><strong className="text-foreground">Legal requirements:</strong> When required by law or to protect our legal rights</li>
                                <li><strong className="text-foreground">Business transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                            <p className="leading-relaxed mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>SSL/TLS encryption for all data transmission</li>
                                <li>Secure cloud infrastructure with access controls</li>
                                <li>Regular security assessments and updates</li>
                                <li>Limited access to personal data on a need-to-know basis</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                While we strive to protect your information, no method of transmission over the Internet is 100% secure.
                                We cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
                            <p className="leading-relaxed">
                                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
                                unless a longer retention period is required by law. For client relationships, we typically retain
                                records for 5 years after the end of our business relationship for legal and accounting purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                            <p className="leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal data:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you</li>
                                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong className="text-foreground">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                                <li><strong className="text-foreground">Portability:</strong> Request transfer of your data to another service</li>
                                <li><strong className="text-foreground">Objection:</strong> Object to processing of your personal data</li>
                                <li><strong className="text-foreground">Withdraw consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                To exercise any of these rights, please contact us using the information provided below.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Cookies</h2>
                            <p className="leading-relaxed">
                                Our website uses Plausible Analytics, which is a privacy-focused analytics tool that does not use cookies.
                                We do not use tracking cookies or similar technologies. Essential cookies may be used for website
                                functionality (such as remembering your preferences), but no personal data is collected through these.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Third-Party Links</h2>
                            <p className="leading-relaxed">
                                Our website may contain links to third-party websites (such as our social media profiles).
                                We are not responsible for the privacy practices or content of these external sites.
                                We encourage you to read the privacy policies of any linked websites you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. International Data Transfers</h2>
                            <p className="leading-relaxed">
                                As a company based in Brazil, we may transfer and process data internationally.
                                We ensure appropriate safeguards are in place for any international transfers
                                in accordance with applicable data protection laws, including the Brazilian General
                                Data Protection Law (LGPD).
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">11. Children&apos;s Privacy</h2>
                            <p className="leading-relaxed">
                                Our services are not directed to individuals under the age of 18.
                                We do not knowingly collect personal information from children.
                                If we become aware that we have collected data from a child, we will take steps to delete it.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">12. Changes to This Policy</h2>
                            <p className="leading-relaxed">
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                                with an updated revision date. We encourage you to review this policy periodically.
                                Continued use of the Service after changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
                            <p className="leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-card border border-border rounded-xl p-6">
                                <p className="mb-2">
                                    <strong className="text-foreground">GoldenGlow IT Solutions LTDA</strong>
                                </p>
                                <p className="mb-2">
                                    <strong className="text-foreground">Email:</strong>{" "}
                                    <a href="mailto:hello@goldenglowitsolutions.com" className="text-primary hover:underline">
                                        hello@goldenglowitsolutions.com
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-foreground">Website:</strong>{" "}
                                    <a href="/#contact" className="text-primary hover:underline">
                                        Contact Form
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
