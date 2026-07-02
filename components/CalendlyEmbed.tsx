import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/warriorworkflows/discovery-session";

export default function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget rounded-2xl border border-border"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
