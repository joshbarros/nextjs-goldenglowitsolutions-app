"use client";

import Script from "next/script";

interface AnalyticsProps {
    domain: string;
    scriptUrl?: string;
}

export function Analytics({ domain, scriptUrl = "https://plausible.io/js/script.js" }: AnalyticsProps) {
    return (
        <Script
            defer
            data-domain={domain}
            src={scriptUrl}
            strategy="afterInteractive"
        />
    );
}

// Plausible custom event tracking
// Usage: trackEvent('Contact Form Submitted', { props: { source: 'homepage' } })
declare global {
    interface Window {
        plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
    }
}

export function trackEvent(
    eventName: string,
    props?: Record<string, string | number | boolean>
) {
    if (typeof window !== "undefined" && window.plausible) {
        window.plausible(eventName, props ? { props } : undefined);
    }
}

// Pre-defined conversion events
export const TrackingEvents = {
    CONTACT_FORM_SUBMITTED: "Contact Form Submitted",
    CONTACT_FORM_STARTED: "Contact Form Started",
    CTA_CLICKED: "CTA Clicked",
    CONSULTATION_BOOKED: "Consultation Booked",
    NEWSLETTER_SIGNUP: "Newsletter Signup",
    EXTERNAL_LINK_CLICKED: "External Link Clicked",
    SOCIAL_LINK_CLICKED: "Social Link Clicked",
    PORTFOLIO_VIEWED: "Portfolio Viewed",
} as const;
