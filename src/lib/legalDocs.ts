/**
 * Legal / policy page content, written as original, plain-language templates
 * for an independent authorized ISP dealer. These are starting points and
 * should be reviewed by your own legal counsel before launch.
 */
import { siteConfig } from "./site.config";

export const LEGAL_UPDATED = "July 8, 2026";
const brand = `${siteConfig.brandName} ${siteConfig.dealerLabel}`;

export type LegalBlock = string | { list: string[] };
export type LegalSection = { id: string; heading: string; body: LegalBlock[] };
export type LegalDoc = {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
};

export const legalNav: { slug: string; label: string }[] = [
  { slug: "privacy", label: "Privacy & Data Protection" },
  { slug: "do-not-sell", label: "Do Not Sell or Share My Personal Information" },
  { slug: "terms", label: "Terms of Use" },
  { slug: "disclaimer", label: "Disclaimer" },
  { slug: "cookies", label: "Cookies Policy" },
  { slug: "tcpa", label: "TCPA Policy" },
  { slug: "trademarks", label: "Trademarks" },
  { slug: "accessibility", label: "Accessibility Statement" },
  { slug: "contact", label: "Contact" },
  { slug: "marketing", label: "Marketing Policy" },
  { slug: "service-fulfillment", label: "Service Fulfillment" },
  { slug: "pci-dss", label: "PCI DSS" },
];

export const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    label: "Privacy & Data Protection",
    title: "Privacy & Data Protection",
    description: "How this authorized dealer collects, uses and protects your personal information.",
    intro:
      "Your privacy matters to us. This notice explains what information we gather when you visit this site or ask us to help you order service, why we collect it, and the choices you have.",
    sections: [
      {
        id: "who-we-are",
        heading: "Who we are",
        body: [
          `This website is operated by ${brand}, an independent authorized retailer of WOW! (WideOpenWest) services. We are a separate business from WOW! itself. When you place an order, your service agreement and billing relationship are with WOW!, and WOW! maintains its own privacy practices for the account it opens on your behalf.`,
        ],
      },
      {
        id: "what-we-collect",
        heading: "Information we collect",
        body: [
          "We only ask for what we need to check availability and help you choose a plan. That typically includes:",
          {
            list: [
              "Contact details you give us — such as your name, phone number, email and service address or ZIP code.",
              "Service preferences — the plans, speeds or bundles you tell us you're interested in.",
              "Technical data collected automatically — like your device type, browser, and general location derived from your IP address.",
              "Usage data — pages viewed and actions taken on this site, gathered through cookies and similar tools.",
            ],
          },
        ],
      },
      {
        id: "how-we-use",
        heading: "How we use your information",
        body: [
          "We use the information you provide to respond to your request, confirm what services are available at your address, prepare a quote, and — with your permission — follow up about relevant offers. We also use aggregated, de-identified analytics to understand how the site is performing and to improve it.",
        ],
      },
      {
        id: "call-recording",
        heading: "Call recording",
        body: [
          "Calls to our order line may be recorded for quality and training purposes, and we announce this at the start of the call. If you prefer not to be recorded, let the agent know.",
        ],
      },
      {
        id: "sharing",
        heading: "When we share information",
        body: [
          "To complete your order, we share the details you provide with WOW! and with trusted service partners who help us operate (for example, hosting, analytics and communications vendors). We also share limited click and device data with advertising platforms such as Google to measure and improve our advertising — under some state privacy laws this is considered “sharing.” We do not sell your personal information for money. You can opt out of this sharing at any time on our “Do Not Sell or Share My Personal Information” page, and we honor Global Privacy Control (GPC) browser signals automatically. We may also disclose information where required by law or to protect our rights.",
        ],
      },
      {
        id: "your-choices",
        heading: "Your choices and rights",
        body: [
          "You can ask us to access, correct or delete the personal information we hold about you, and you can opt out of marketing messages at any time. Depending on where you live, you may have additional rights under state privacy laws. To make a request, contact us using the details at the bottom of this page.",
        ],
      },
      {
        id: "security-retention",
        heading: "Security and retention",
        body: [
          "We use administrative, technical and physical safeguards designed to protect your information, and we keep it only as long as needed for the purposes described here or as the law requires. No method of transmission over the internet is perfectly secure, so we cannot guarantee absolute security.",
        ],
      },
      {
        id: "contact",
        heading: "Contact us",
        body: [
          `Questions about this notice or your data? Email ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`,
        ],
      },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    label: "Disclaimer",
    title: "Website Disclaimer",
    description: "Important information about this independent authorized dealer website.",
    intro:
      "Please read this disclaimer carefully. It clarifies our relationship with WOW! and the nature of the information published on this site.",
    sections: [
      {
        id: "independent",
        heading: "Independent authorized dealer",
        body: [
          `${brand} is an independent, authorized dealer of WOW! (WideOpenWest, Inc.) services. This website is not operated by WOW! and is not endorsed by or affiliated with WOW! beyond an authorized reseller arrangement. References to WOW! are for identification purposes only.`,
        ],
      },
      {
        id: "informational",
        heading: "Information only, not an offer",
        body: [
          "Content on this site is provided for general informational purposes. Plans, pricing, speeds, channel line-ups, equipment and promotions are set by WOW!, can change at any time without notice, and are subject to availability at your specific address, credit approval, applicable taxes and fees, and the terms of your WOW! service agreement. Nothing here constitutes a binding offer or a guarantee of any particular price or service.",
        ],
      },
      {
        id: "accuracy",
        heading: "Accuracy of content",
        body: [
          "We work to keep information current and correct, but we make no warranties, express or implied, about the completeness, accuracy or reliability of anything on this site. Any reliance you place on this content is at your own risk. Always confirm the final terms directly during the ordering process.",
        ],
      },
      {
        id: "external-links",
        heading: "External links",
        body: [
          "This site may link to third-party websites, including WOW!'s own pages. We do not control those sites and are not responsible for their content, policies or practices. Links are provided for convenience and do not imply endorsement.",
        ],
      },
      {
        id: "liability",
        heading: "Limitation of liability",
        body: [
          "To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of this website or your reliance on its content. Your service, once ordered, is governed exclusively by your agreement with WOW!.",
        ],
      },
    ],
  },

  cookies: {
    slug: "cookies",
    label: "Cookies Policy",
    title: "Cookies Policy",
    description: "How and why this site uses cookies and similar technologies.",
    intro:
      "This policy explains what cookies are, which ones we use, and how you can control them. By using this site, you can accept or decline non-essential cookies through our consent banner.",
    sections: [
      {
        id: "what",
        heading: "What cookies are",
        body: [
          "Cookies are small text files stored on your device when you visit a website. They help the site work properly, remember your preferences and understand how visitors use the pages so we can improve them.",
        ],
      },
      {
        id: "types",
        heading: "Types of cookies we use",
        body: [
          {
            list: [
              "Essential cookies — required for the site to function, such as remembering your cookie choice. These cannot be switched off.",
              "Analytics cookies — help us count visits and see which sections are useful, on an aggregated basis.",
              "Preference cookies — remember details like a ZIP code you entered so you don't have to type it twice.",
              "Marketing cookies — may be used to measure the performance of our advertising and show relevant messages, only where permitted.",
            ],
          },
        ],
      },
      {
        id: "manage",
        heading: "Managing your preferences",
        body: [
          "When you first visit, our banner lets you accept or decline non-essential cookies. You can also control cookies through your browser settings — most browsers let you block or delete them. Turning off certain cookies may affect how the site works.",
        ],
      },
      {
        id: "third-party",
        heading: "Third-party cookies",
        body: [
          "Some cookies may be set by third-party services we use for analytics or advertising. Those providers process data under their own policies. We encourage you to review the privacy and cookie notices of any third-party services referenced here.",
        ],
      },
    ],
  },

  tcpa: {
    slug: "tcpa",
    label: "TCPA Policy",
    title: "TCPA & Contact Consent Policy",
    description: "Your consent to be contacted, and how to opt out at any time.",
    intro:
      "We respect your communication preferences and comply with the Telephone Consumer Protection Act (TCPA) and related rules. This policy describes the consent you give when you ask us to contact you and how you can withdraw it.",
    sections: [
      {
        id: "consent",
        heading: "Your express consent",
        body: [
          `When you submit your phone number through a form on this site and check the consent box, you agree that ${brand} and its authorized service partners may call and text you at that number about WOW! services and offers — including using automatic telephone dialing systems, artificial or prerecorded voices, and SMS. This consent is not required as a condition of purchasing anything.`,
        ],
      },
      {
        id: "rates",
        heading: "Message frequency and rates",
        body: [
          "Message frequency varies based on your interactions with us. Message and data rates may apply depending on your mobile plan. We are not responsible for charges billed by your carrier.",
        ],
      },
      {
        id: "opt-out",
        heading: "How to opt out",
        body: [
          "You can withdraw consent at any time. Reply STOP to any text message to stop texts, ask a representative to place you on our internal do-not-call list, or contact us using the details below. Please allow a reasonable time for your request to take effect. Opting out of marketing contact will not affect service you have already ordered.",
        ],
      },
      {
        id: "records",
        heading: "Records and accuracy",
        body: [
          "We keep records of the consent you provide. Please give us an accurate number that belongs to you, and let us know if your number changes so we can update our records.",
        ],
      },
      {
        id: "contact",
        heading: "Contact",
        body: [`To manage your preferences, email ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`],
      },
    ],
  },

  trademarks: {
    slug: "trademarks",
    label: "Trademarks",
    title: "Trademarks Notice",
    description: "Ownership and permitted use of brand names and logos on this site.",
    intro:
      "This notice identifies the trademarks that appear on this website and explains the basis on which they are used.",
    sections: [
      {
        id: "ownership",
        heading: "Trademark ownership",
        body: [
          "WOW!, the WOW! logo, WideOpenWest and related names, marks and slogans are trademarks or registered trademarks of WideOpenWest, Inc. and/or its affiliates. All other product names, logos and brands mentioned — including YouTube TV and eero — are the property of their respective owners.",
        ],
      },
      {
        id: "use",
        heading: "How marks are used here",
        body: [
          `${brand} is an authorized dealer and uses the WOW! name and logo to identify the genuine services we help you order, consistent with our reseller arrangement and applicable nominative fair-use principles. Their use here does not imply that WOW! owns, operates or endorses this independent website.`,
        ],
      },
      {
        id: "no-affiliation",
        heading: "No implied affiliation",
        body: [
          "Reference to any third-party trademark on this site is for identification and descriptive purposes only and does not indicate sponsorship, endorsement or affiliation unless expressly stated.",
        ],
      },
      {
        id: "requests",
        heading: "Questions or concerns",
        body: [
          `If you are a rights holder with a question about how a mark appears on this site, please contact us at ${siteConfig.email} and we will respond promptly.`,
        ],
      },
    ],
  },

  marketing: {
    slug: "marketing",
    label: "Marketing Policy",
    title: "Marketing & Advertising Policy",
    description: "Our commitment to honest, transparent advertising.",
    intro:
      "We believe good marketing is clear and truthful. This policy sets out the standards we hold ourselves to when we advertise WOW! services.",
    sections: [
      {
        id: "truthful",
        heading: "Truthful and non-deceptive",
        body: [
          "Our advertising is designed to be accurate and not misleading. We describe plans, speeds and pricing as provided by WOW! and disclose material conditions — such as promotional terms, availability limits, and taxes and fees — so you can make an informed decision.",
        ],
      },
      {
        id: "pricing",
        heading: "Pricing and promotional claims",
        body: [
          "Advertised prices are typically promotional, may require specific plans or add-ons, and can change. Final pricing depends on your address, the services you choose, credit approval and applicable charges. We confirm the exact terms with you before any order is completed.",
        ],
      },
      {
        id: "disclosures",
        heading: "Clear disclosures",
        body: [
          "Where an offer has conditions, we aim to present them clearly and close to the claim they relate to. We identify ourselves as an independent authorized dealer in our advertising and on this site.",
        ],
      },
      {
        id: "channels",
        heading: "Advertising channels and consent",
        body: [
          "When we use email, phone or text marketing, we do so in line with our TCPA Policy and applicable law, and we honor opt-out requests. We follow the advertising policies of the platforms we use, including search and social advertising networks.",
        ],
      },
      {
        id: "feedback",
        heading: "Report a concern",
        body: [
          `If you believe any of our marketing is unclear or inaccurate, tell us at ${siteConfig.email}. We take such feedback seriously and will correct genuine issues.`,
        ],
      },
    ],
  },

  "service-fulfillment": {
    slug: "service-fulfillment",
    label: "Service Fulfillment",
    title: "Service Fulfillment Policy",
    description: "What happens after you order, from setup to support.",
    intro:
      "Here's how orders placed through this authorized dealer are fulfilled, and what to expect on the way to getting connected.",
    sections: [
      {
        id: "role",
        heading: "Our role",
        body: [
          `${brand} helps you compare options, check availability and submit your order for WOW! services. Provisioning, installation, equipment, billing and ongoing support are delivered by WOW! under your service agreement with them.`,
        ],
      },
      {
        id: "process",
        heading: "The ordering process",
        body: [
          {
            list: [
              "We confirm the plans and bundles available at your address.",
              "We review pricing, promotions and any equipment with you.",
              "Your order is submitted to WOW! and an account is created in your name.",
              "You choose self-installation with a shipped kit, or schedule a professional installation where applicable.",
            ],
          },
        ],
      },
      {
        id: "timing",
        heading: "Installation and timing",
        body: [
          "Self-install kits typically ship within a few business days, and many customers get online the same week. Professional installation windows depend on technician availability in your area. Exact timing is confirmed by WOW! during setup.",
        ],
      },
      {
        id: "billing",
        heading: "Billing and changes",
        body: [
          "Your monthly bill comes from WOW!, not from this dealer. Questions about charges, plan changes, upgrades or moves are handled through your WOW! account, and we're glad to point you in the right direction.",
        ],
      },
      {
        id: "cancellations",
        heading: "Guarantee and cancellations",
        body: [
          "WOW! internet plans are month-to-month with no annual contract, and eligible new services are backed by a 30-day money-back guarantee under WOW!'s terms. Refunds, returns of equipment and cancellations are processed by WOW! according to those terms.",
        ],
      },
    ],
  },

  "pci-dss": {
    slug: "pci-dss",
    label: "PCI DSS",
    title: "PCI DSS & Payment Security",
    description: "How payment information is protected.",
    intro:
      "Protecting your payment details is a priority. This statement explains our approach to payment-card security and the PCI DSS standard.",
    sections: [
      {
        id: "what",
        heading: "What PCI DSS is",
        body: [
          "The Payment Card Industry Data Security Standard (PCI DSS) is a set of security requirements created by the major card networks to protect cardholder data everywhere it is processed, stored or transmitted.",
        ],
      },
      {
        id: "how-we-handle",
        heading: "How payments are handled",
        body: [
          `${brand} does not ask for full payment-card numbers through this website's forms. When payment is needed to activate service, it is collected and processed securely by WOW! or by PCI-compliant payment processors using encryption and other safeguards.`,
        ],
      },
      {
        id: "safeguards",
        heading: "Our safeguards",
        body: [
          {
            list: [
              "Sensitive data is transmitted over encrypted (HTTPS/TLS) connections.",
              "We minimize the payment data we handle and never store full card numbers on this site.",
              "Access to any customer information is limited to those who need it to help you.",
              "We work only with reputable, compliance-minded partners for payment processing.",
            ],
          },
        ],
      },
      {
        id: "your-part",
        heading: "Your part in staying secure",
        body: [
          "Only enter payment information on secure, verified payment pages, and never share full card details by email or text. If anyone claiming to represent us asks you to do so, stop and contact us directly using the number on this site.",
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    label: "Terms of Use",
    title: "Terms of Use",
    description: "The terms that govern your use of this independent authorized dealer website.",
    intro:
      "These terms govern your use of this website. By using the site, you agree to them. Please read them alongside our Privacy and Disclosure notices.",
    sections: [
      {
        id: "who",
        heading: "Who operates this site",
        body: [
          `This website is operated by ${siteConfig.entityLegalName}, an independent authorized ${siteConfig.agreementNoun.toLowerCase()} of WOW! (WideOpenWest) services. ${siteConfig.entityLegalName} is a separate company from WOW!, is not WOW!, and does not own the WOW! trademarks. Our role is to help you order WOW! services by phone.`,
        ],
      },
      {
        id: "pricing",
        heading: "Pricing and availability are set by WOW!",
        body: [
          "All plans, speeds, equipment, promotions and pricing shown here are set by WOW!, are subject to availability at your address and to credit approval, and can change at any time without notice. Prices shown are the amounts observed on WOW!'s own pages as of the date noted on the page and exclude taxes, fees and surcharges. Nothing on this site is a binding offer; your final terms are confirmed by WOW! when you order.",
        ],
      },
      {
        id: "acceptable-use",
        heading: "Acceptable use",
        body: [
          "You agree to use this site lawfully and not to interfere with its operation, misuse its content, or attempt to gain unauthorized access. The content on this site is provided for your personal, informational use.",
        ],
      },
      {
        id: "liability",
        heading: "Disclaimers and limitation of liability",
        body: [
          "This site is provided “as is” without warranties of any kind. To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of the site or reliance on its content. Your service, once ordered, is governed exclusively by your agreement with WOW!.",
        ],
      },
      {
        id: "governing-law",
        heading: "Governing law and changes",
        body: [
          "These terms are governed by the laws of the state in which the operating entity is registered, without regard to conflict-of-law rules. We may update these terms from time to time; the version posted here is the current one.",
        ],
      },
    ],
  },

  accessibility: {
    slug: "accessibility",
    label: "Accessibility Statement",
    title: "Accessibility Statement",
    description: "Our commitment to an accessible website for everyone.",
    intro:
      "We want everyone to be able to use this site, including people who rely on assistive technologies. We aim to meet recognized accessibility standards and keep improving.",
    sections: [
      {
        id: "standard",
        heading: "Our target standard",
        body: [
          "We work toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. This includes goals such as sufficient color contrast, keyboard operability, clear focus states, descriptive links and labels, and respecting reduced-motion preferences.",
        ],
      },
      {
        id: "measures",
        heading: "What we do",
        body: [
          {
            list: [
              "Design with adequate contrast and legible text sizes.",
              "Support keyboard navigation and visible focus indicators.",
              "Honor the operating system “reduce motion” setting.",
              "Provide text alternatives for meaningful images.",
              "Review the site periodically with automated and manual checks.",
            ],
          },
        ],
      },
      {
        id: "feedback",
        heading: "Get help or report a problem",
        body: [
          `If you have trouble using any part of this site, or the phone ordering process, we want to help. Call ${siteConfig.phoneDisplay} or email ${siteConfig.email} and we will assist you and work to fix the issue.`,
        ],
      },
    ],
  },

  contact: {
    slug: "contact",
    label: "Contact",
    title: "Contact Us",
    description: "How to reach this independent authorized dealer.",
    intro:
      "Here's how to reach us. For new WOW! orders, calling is fastest. For questions about an existing WOW! account, please contact WOW! directly.",
    sections: [
      {
        id: "order-line",
        heading: "New orders (this dealer)",
        body: [
          `Call our order line at ${siteConfig.phoneDisplay}, ${siteConfig.hoursDisplay}. Trained sales agents can confirm availability at your address and place your WOW! order. You can also email ${siteConfig.email}.`,
        ],
      },
      {
        id: "entity",
        heading: "Business details",
        body: [
          {
            list: [
              `Legal entity: ${siteConfig.entityLegalName}`,
              `Registered address: ${siteConfig.entityAddress}`,
              `Email: ${siteConfig.email}`,
              `Order line: ${siteConfig.phoneDisplay}`,
              `Hours: ${siteConfig.hoursDisplay}`,
            ],
          },
        ],
      },
      {
        id: "existing",
        heading: "Existing WOW! customers",
        body: [
          `For billing, outages, account changes, moves or cancellations on an existing account, contact WOW! directly at ${siteConfig.carrierSupportDisplay} or through your WOW! account. Our line handles new orders only.`,
        ],
      },
    ],
  },

  "do-not-sell": {
    slug: "do-not-sell",
    label: "Do Not Sell or Share My Personal Information",
    title: "Do Not Sell or Share My Personal Information",
    description: "Exercise your right to opt out of the sharing of your personal information.",
    intro:
      "Some U.S. state privacy laws, including the California Privacy Rights Act (CPRA), give you the right to opt out of the “sale” or “sharing” of your personal information. This page explains how, and lets you opt out.",
    sections: [
      {
        id: "what-sharing",
        heading: "What we mean by “sharing”",
        body: [
          "When you interact with our ads and this site, limited information (such as click and device data) may be shared with advertising platforms like Google to measure and improve advertising. Under the CPRA, disclosing that data for cross-context behavioral advertising can be considered “sharing.” We do not sell your personal information for money.",
        ],
      },
      {
        id: "gpc",
        heading: "Global Privacy Control is honored automatically",
        body: [
          "If your browser or a browser extension sends a Global Privacy Control (GPC) signal, we treat it as a valid opt-out request and disable advertising cookies and sharing automatically — you don't need to do anything else.",
        ],
      },
      {
        id: "opt-out",
        heading: "Opt out on this device",
        body: [
          "Use the control below to opt out of the sharing of your personal information for advertising on this device and browser. Your choice is stored on your device; clearing your browser data may reset it.",
        ],
      },
      {
        id: "more",
        heading: "Learn more or make another request",
        body: [
          `To learn how we handle personal information, see our Privacy & Data Protection notice. To make any other privacy request, email ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`,
        ],
      },
    ],
  },
};
