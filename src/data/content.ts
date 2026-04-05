export const content = {
  hero: {
    badge: "100% Open Source & Local",
    title: {
      line1: "Your cycle.",
      line2: "Your data.",
      line3: "Your device."
    },
    description: "The anti-data-broker period tracker. No accounts, no ads, no cloud sync. Just a beautiful, fast interface that keeps your health data strictly on your phone.",
    primaryButton: "Start Tracking Free",
    secondaryButton: "View Source Code",
    trustText: "Trusted by 10,000+ privacy advocates"
  },
  features: {
    title: "Designed for paranoia.\nBuilt for peace of mind.",
    description: "Traditional health apps sell your data. Nari physically cannot. We replaced the cloud with your device's local storage.",
    items: [
      {
        title: "Your device is the server.",
        description: "Data is written directly to your browser's IndexedDB. It never touches the internet. It works in airplane mode."
      },
      {
        title: "Zero Trackers",
        description: "No Google Analytics. No Facebook Pixel. Absolute silence."
      },
      {
        title: "Biometric Lock",
        description: "Secure your local data with FaceID or TouchID via WebAuthn."
      },
      {
        title: "Export in seconds.",
        description: "Don't want to use Nari anymore? Export your entire history to JSON or CSV with one click. No hostage situations."
      }
    ]
  },
  howItWorks: {
    title: "Frictionless by design.",
    description: "Because we don't need your email, you can start tracking in literally 3 seconds.",
    steps: [
      {
        title: "1. Open the App",
        description: "No sign-ups, no onboarding carousels. Just open the URL."
      },
      {
        title: "2. Log Instantly",
        description: "Tap to log your period, symptoms, and mood. Done in seconds."
      },
      {
        title: "3. Get Insights",
        description: "View cycle history and predictions, calculated locally."
      }
    ]
  },
  underTheHood: {
    badge: "Security Architecture",
    title: "Under the hood.",
    description: "We don't just promise privacy, we enforce it through architecture. Here is exactly how Nari works.",
    items: [
      {
        title: "IndexedDB Storage",
        description: "When you log a symptom or period, the data is written directly to IndexedDB—a low-level API for client-side storage built into your browser. It never makes a network request to an external server."
      },
      {
        title: "WebAuthn Integration",
        description: "To prevent someone from opening the app on your unlocked phone, Nari integrates with the Web Authentication API. This allows you to lock the app using your device's native biometric sensors (FaceID/TouchID)."
      }
    ]
  },
  comparison: {
    title: "The Privacy Difference",
    description: "See why thousands are switching to local-first tracking.",
    nari: {
      name: "Nari",
      features: [
        "100% Local Storage",
        "$0 Forever",
        "Zero Trackers",
        "No Account Required",
        "Open Source",
        "Instant Export"
      ]
    },
    traditional: {
      name: "Traditional Apps",
      features: [
        "Cloud Storage",
        "$9.99/month",
        "Sells Data to Brokers",
        "Email Required",
        "Closed Source",
        "Data Hostage"
      ]
    }
  },
  pricing: {
    title: "Privacy isn't a premium feature.",
    description: "We believe your health data shouldn't be monetized. That's why Nari is and always will be completely free.",
    price: "$0",
    period: "/ Forever",
    features: [
      "Unlimited cycle tracking",
      "Symptom & mood logging",
      "Local data encryption",
      "Biometric lock",
      "Data export (JSON/CSV)"
    ],
    button: "Start Tracking Now"
  },
  testimonials: {
    title: "Loved by privacy advocates",
    items: [
      {
        quote: "Finally, a period tracker that doesn't feel like it's harvesting my data. The design is beautiful and calming.",
        author: "Sarah M."
      },
      {
        quote: "Clean, minimal, and exactly what I needed. The local-first approach gives me complete peace of mind.",
        author: "Elena R."
      },
      {
        quote: "No pink tax, no ads, no accounts. Just a beautiful app that respects my privacy. Highly recommend.",
        author: "Jessica T."
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Where is my data stored?",
        answer: "Strictly on your device. Nari uses your browser's local storage (IndexedDB) to save your data. We do not have servers, and your data never leaves your phone or computer."
      },
      {
        question: "Can I use Nari across multiple devices?",
        answer: "Currently, Nari is entirely local to the device you use it on. This is by design to ensure maximum privacy. We are exploring secure, end-to-end encrypted sync options for the future."
      },
      {
        question: "How do I backup my data?",
        answer: "You can export your data as a JSON or CSV file at any time from the Privacy settings. We recommend doing this periodically so you have a backup in case you lose your device."
      },
      {
        question: "Is Nari really free?",
        answer: "Yes, Nari is completely free to use. There are no ads, no hidden tracking, and no premium subscriptions. We believe privacy should not be a luxury."
      }
    ]
  },
  cta: {
    title: "Take back your data.",
    description: "Join the movement towards private, local-first health tracking. No sign-up required.",
    button: "Start Tracking Now"
  },
  footer: {
    links: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms", url: "#" }
    ],
    copyright: "Nari. Built for privacy."
  }
};
