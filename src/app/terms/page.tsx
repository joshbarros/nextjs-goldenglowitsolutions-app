import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | GoldenGlow IT Solutions",
    description: "Terms of Service for GoldenGlow IT Solutions LTDA. Read the terms and conditions for using our MVP development services.",
};

export default function TermsPage() {
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

                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground mb-12">Last updated: December 15, 2025</p>

                    <div className="space-y-10 text-muted-foreground">
                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                            <p className="leading-relaxed mb-4">
                                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and
                                GoldenGlow IT Solutions LTDA (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access
                                to and use of our website goldenglowitsolutions.com (the &quot;Website&quot;) and our software
                                development services (the &quot;Services&quot;).
                            </p>
                            <p className="leading-relaxed">
                                By accessing our Website or engaging our Services, you agree to be bound by these Terms.
                                If you disagree with any part of these Terms, you may not access the Website or use our Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                            <p className="leading-relaxed mb-4">
                                GoldenGlow IT Solutions provides custom software development services, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>MVP (Minimum Viable Product) development</li>
                                <li>Web application development</li>
                                <li>Mobile application development</li>
                                <li>UI/UX design services</li>
                                <li>Technical consulting and architecture planning</li>
                                <li>Code review and optimization</li>
                                <li>Post-launch support and maintenance</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Engagement Process</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Discovery Phase</h3>
                            <p className="leading-relaxed mb-4">
                                All projects begin with a discovery phase to understand requirements, scope, and timeline.
                                For complex projects, we offer a paid discovery engagement to produce detailed specifications
                                and architecture documents.
                            </p>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Proposals and Contracts</h3>
                            <p className="leading-relaxed mb-4">
                                Following discovery, we will provide a detailed proposal outlining:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Project scope and deliverables</li>
                                <li>Technical specifications and technology stack</li>
                                <li>Timeline and milestones</li>
                                <li>Pricing and payment schedule</li>
                                <li>Terms specific to your project</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                A signed contract is required before work begins. Project-specific contracts will supersede
                                these general Terms where applicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Project Pricing</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>MVP projects typically range from $25,000 to $100,000+ USD depending on complexity</li>
                                <li>Exact pricing is determined during the proposal phase based on project scope</li>
                                <li>All prices are in USD unless otherwise specified</li>
                            </ul>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Payment Schedule</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>A deposit (typically 30-50%) is required to commence work</li>
                                <li>Remaining payments are structured according to project milestones</li>
                                <li>Final payment is due upon project completion and acceptance</li>
                                <li>Payment terms will be specified in the project contract</li>
                            </ul>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Late Payments</h3>
                            <p className="leading-relaxed">
                                Late payments may incur interest charges and may result in suspension of work until
                                payment is received. Specific late payment terms will be outlined in your project contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Client Materials</h3>
                            <p className="leading-relaxed mb-4">
                                You retain full ownership of all content, materials, logos, trademarks, and intellectual
                                property you provide for the project.
                            </p>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Project Deliverables</h3>
                            <p className="leading-relaxed mb-4">
                                Upon full payment, you receive:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Full ownership of all custom code written specifically for your project</li>
                                <li>Complete source code and documentation</li>
                                <li>Design files and assets created for your project</li>
                                <li>Perpetual license to use all deliverables</li>
                            </ul>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Third-Party Components</h3>
                            <p className="leading-relaxed mb-4">
                                Projects may include open-source libraries and third-party components. These remain
                                subject to their respective licenses. We will provide a list of all third-party
                                dependencies used in your project.
                            </p>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Portfolio Rights</h3>
                            <p className="leading-relaxed">
                                We reserve the right to display completed work in our portfolio and marketing materials
                                unless explicitly prohibited in writing in the project contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Project Timeline and Delivery</h2>
                            <p className="leading-relaxed mb-4">
                                Typical MVP projects are delivered within 8-12 weeks. Specific timelines depend on:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Project scope and complexity</li>
                                <li>Client feedback and approval cycles</li>
                                <li>Availability of required content and assets</li>
                                <li>Third-party integrations and dependencies</li>
                            </ul>
                            <p className="leading-relaxed">
                                We commit to transparent communication about progress and any timeline adjustments.
                                Delays caused by client feedback cycles or scope changes may extend the project timeline.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Revisions and Scope Changes</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Included Revisions</h3>
                            <p className="leading-relaxed mb-4">
                                Each project includes a reasonable number of revisions as specified in the project contract.
                                Revisions apply to design and feature adjustments within the original scope.
                            </p>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Scope Changes</h3>
                            <p className="leading-relaxed">
                                Significant changes to project scope or additional features beyond the original agreement
                                require a change order. Change orders will include adjusted timeline and pricing estimates
                                and must be approved in writing before implementation.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Confidentiality</h2>
                            <p className="leading-relaxed mb-4">
                                We treat all project information, business plans, and proprietary data as confidential.
                                We will not disclose your confidential information to third parties without your consent,
                                except as required by law.
                            </p>
                            <p className="leading-relaxed">
                                A separate Non-Disclosure Agreement (NDA) can be signed upon request before discussing
                                sensitive project details.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Warranty and Support</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Post-Launch Support</h3>
                            <p className="leading-relaxed mb-4">
                                All projects include a post-launch support period (typically 2-4 weeks) to address bugs
                                or issues directly related to the delivered work.
                            </p>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Extended Support</h3>
                            <p className="leading-relaxed mb-4">
                                Extended support and maintenance are available through separate retainer agreements.
                                Retainer services may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Bug fixes and technical support</li>
                                <li>Feature enhancements and updates</li>
                                <li>Security patches and dependency updates</li>
                                <li>Performance optimization</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
                            <p className="leading-relaxed mb-4">
                                To the maximum extent permitted by law:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                                <li>We are not liable for any loss of profits, data, use, goodwill, or other intangible losses</li>
                                <li>Our total liability shall not exceed the total amount paid for the specific project giving rise to the claim</li>
                            </ul>
                            <p className="leading-relaxed">
                                This limitation applies regardless of the legal theory on which the claim is based.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">11. Termination</h2>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Termination by Either Party</h3>
                            <p className="leading-relaxed mb-4">
                                Either party may terminate a project engagement with written notice. In case of termination:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Payment is due for all work completed up to the termination date</li>
                                <li>Client will receive all deliverables completed up to that point</li>
                                <li>Deposits paid are non-refundable but will be credited toward work completed</li>
                            </ul>

                            <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Termination for Breach</h3>
                            <p className="leading-relaxed">
                                We may terminate immediately if you breach these Terms or fail to make timely payments.
                                In such cases, you remain liable for all amounts due.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">12. Website Use</h2>
                            <p className="leading-relaxed mb-4">
                                When using our Website, you agree not to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the Website for any unlawful purpose</li>
                                <li>Attempt to gain unauthorized access to any systems or data</li>
                                <li>Interfere with or disrupt the Website or servers</li>
                                <li>Copy, reproduce, or distribute Website content without permission</li>
                                <li>Use automated tools to scrape or collect data from the Website</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">13. Indemnification</h2>
                            <p className="leading-relaxed">
                                You agree to indemnify and hold harmless GoldenGlow IT Solutions, its officers, directors,
                                employees, and agents from any claims, damages, losses, or expenses arising from your
                                use of our Services, your violation of these Terms, or your infringement of any
                                third-party rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">14. Governing Law and Disputes</h2>
                            <p className="leading-relaxed mb-4">
                                These Terms are governed by the laws of Brazil. Any disputes shall be resolved through:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Good-faith negotiation between the parties</li>
                                <li>Mediation, if negotiation is unsuccessful</li>
                                <li>Binding arbitration in accordance with Brazilian arbitration law</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">15. Changes to Terms</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify these Terms at any time. Changes will be posted on this page
                                with an updated revision date. Your continued use of the Website or Services after changes
                                constitutes acceptance of the updated Terms. Material changes will be communicated via email
                                to active clients.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">16. Severability</h2>
                            <p className="leading-relaxed">
                                If any provision of these Terms is found to be invalid or unenforceable, the remaining
                                provisions will continue in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">17. Contact Information</h2>
                            <p className="leading-relaxed mb-4">
                                For questions about these Terms or to discuss a potential project, please contact us:
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
