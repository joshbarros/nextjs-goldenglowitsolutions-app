"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent, TrackingEvents } from "./Analytics";

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; prefill?: { name?: string; email?: string } }) => void;
    };
  }
}

export function CalendlyButton({ url, children, className, prefill }: CalendlyButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        prefill,
      });

      // Track consultation booking attempt
      trackEvent(TrackingEvents.CONSULTATION_BOOKED, {
        source: "cta_button",
      });
    }
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    </>
  );
}

interface CalendlyInlineProps {
  url: string;
  className?: string;
  styles?: {
    height?: string;
    minWidth?: string;
  };
}

export function CalendlyInline({
  url,
  className,
  styles = { height: "700px", minWidth: "320px" },
}: CalendlyInlineProps) {
  useEffect(() => {
    // Track when inline calendar is viewed
    trackEvent(TrackingEvents.CONSULTATION_BOOKED, {
      source: "inline_widget",
    });
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className || ""}`}
      data-url={url}
      style={styles}
    />
  );
}

// Calendly URL for booking consultations
export const CALENDLY_URL = "https://calendly.com/goldenglowitsolutions/1-1-with-josue-barros";
