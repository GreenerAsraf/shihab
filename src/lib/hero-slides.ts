export interface HeroSlideMetric {
  value: string;
  label: string;
  sub: string;
}

export interface HeroSlide {
  id: string;
  number: string;
  tag: string;
  shortLabel: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  caption: string;
  locationTag: string;
  practiceCategory: string;
  metrics: HeroSlideMetric[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "court-practice",
    number: "01",
    shortLabel: "Court Advocacy",
    tag: "APPRENTICE LAWYER • JUDGE'S COURT, CHITTAGONG",
    titlePrefix: "Clarity in Law.",
    titleHighlight: "Confidence",
    titleSuffix: "in Every Decision.",
    description:
      "Apprentice Lawyer actively practicing at Chittagong District & Sessions Judge's Court. Delivering thorough case research, precise statutory pleadings, and dedicated client-centered trial advocacy.",
    image: "/picture/shihab-1.webp",
    alt: "Apprentice Lawyer Shihab Uddin at Courthouse in Chittagong",
    badge: "Court Practice",
    caption: "Chambers of Shihab Uddin",
    locationTag: "Judge's Court, Chittagong",
    practiceCategory: "Court Litigation & Trial Defense",
    metrics: [
      {
        value: "Judge's Court",
        label: "Court Practice",
        sub: "District & Sessions, Ctg",
      },
      {
        value: "LL.B. (Southern)",
        label: "Academic Degree",
        sub: "Bachelor of Laws",
      },
      {
        value: "Govt. City College",
        label: "College Alumnus",
        sub: "Chittagong Legacy",
      },
    ],
    primaryCta: {
      label: "Schedule a Consultation",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore Practice Areas",
      href: "#practice-areas",
    },
  },
  {
    id: "criminal-defense",
    number: "02",
    shortLabel: "Bail & Defense",
    tag: "CRIMINAL JURISPRUDENCE & DEFENSE MATTERS",
    titlePrefix: "Uncompromising Defense.",
    titleHighlight: "Liberty",
    titleSuffix: "Protected by Law.",
    description:
      "Formulating urgent regular and anticipatory bail petitions under CrPC Sections 496, 497 & 498. Rigorous statutory analysis, police remand defense, and criminal revision proceedings in Chittagong.",
    image: "/picture/shihab-2.webp",
    alt: "Shihab Uddin - Criminal Defense & Bail Practice in Chittagong",
    badge: "Bail Jurisprudence",
    caption: "Magistrate & Sessions Defense",
    locationTag: "Sessions Court, Chittagong",
    practiceCategory: "CrPC 497 / 498 Defense",
    metrics: [
      {
        value: "CrPC 497 / 498",
        label: "Urgent Petitions",
        sub: "Regular & Anticipatory Bail",
      },
      {
        value: "Sessions Court",
        label: "Trial Defense",
        sub: "Statutory Fact Research",
      },
      {
        value: "Urgent Filing",
        label: "Chamber Response",
        sub: "Custody & Remand Hearings",
      },
    ],
    primaryCta: {
      label: "Urgent Bail Consultation",
      href: "#contact",
    },
    secondaryCta: {
      label: "Criminal Defense Scope",
      href: "#practice-areas",
    },
  },
  {
    id: "civil-property",
    number: "03",
    shortLabel: "Land Disputes",
    tag: "CIVIL LITIGATION & PROPERTY RIGHTS",
    titlePrefix: "Guarding Land Rights.",
    titleHighlight: "Precision",
    titleSuffix: "in Title & Partition.",
    description:
      "Handling ancestral property disputes, land title declaration suits, partition among co-sharers, and ad-interim injunction petitions under the Specific Relief Act with meticulous khatian scrutiny.",
    image: "/picture/shihab-3.webp",
    alt: "Shihab Uddin - Civil Litigation & Land Disputes in Chittagong",
    badge: "Property Rights",
    caption: "Civil Court Advocacy",
    locationTag: "Civil Court, Chittagong",
    practiceCategory: "Civil Litigation & Injunctions",
    metrics: [
      {
        value: "Partition Suits",
        label: "Ancestral Property",
        sub: "Co-Sharer Division",
      },
      {
        value: "Injunctions",
        label: "Specific Relief",
        sub: "Ad-Interim Court Protection",
      },
      {
        value: "Title Vetting",
        label: "Khatian Scrutiny",
        sub: "CS / SA / RS / BS Records",
      },
    ],
    primaryCta: {
      label: "Consult on Property Matter",
      href: "#contact",
    },
    secondaryCta: {
      label: "Our 3-Stage Approach",
      href: "#approach",
    },
  },
  {
    id: "commercial-contracts",
    number: "04",
    shortLabel: "Commercial Law",
    tag: "COMMERCIAL RECOVERY & NI ACT 138",
    titlePrefix: "Commercial Resolution.",
    titleHighlight: "Statutory",
    titleSuffix: "Notice & Cheque Recovery.",
    description:
      "Drafting precision statutory 30-day demand notices and filing criminal complaints under Section 138 of the Negotiable Instruments Act. Protecting commercial contracts, deeds, and business recovery.",
    image: "/picture/shihab-4.webp",
    alt: "Shihab Uddin - Commercial Agreements & Cheque Recovery",
    badge: "Corporate & Deeds",
    caption: "Commercial Accountability",
    locationTag: "Chambers Practice",
    practiceCategory: "NI Act 138 & Legal Drafting",
    metrics: [
      {
        value: "NI Act 138",
        label: "Statutory Notices",
        sub: "30-Day Mandatory Notice",
      },
      {
        value: "Commercial Deeds",
        label: "Legal Drafting",
        sub: "Enforceable Agreements",
      },
      {
        value: "Debt Recovery",
        label: "Settlement Strategy",
        sub: "Structured Compromise",
      },
    ],
    primaryCta: {
      label: "Discuss Cheque / Contract",
      href: "#contact",
    },
    secondaryCta: {
      label: "Representative Matters",
      href: "#experience",
    },
  },
  {
    id: "academic-ethics",
    number: "05",
    shortLabel: "Ethics & Integrity",
    tag: "ACADEMIC DISTINCTION & ETHICAL ADVOCACY",
    titlePrefix: "Rooted in Knowledge.",
    titleHighlight: "Committed",
    titleSuffix: "to Courtroom Integrity.",
    description:
      "Southern University Bangladesh LL.B. graduate and Govt. City College alumnus. Dedicated to ethical trial advocacy, deep statutory research in Bangladesh case law, and accessible client counsel.",
    image: "/picture/shihab-5.webp",
    alt: "Shihab Uddin - Legal Scholarship and Court Practice",
    badge: "Academic Legacy",
    caption: "Southern University • City College",
    locationTag: "Apprentice Lawyer",
    practiceCategory: "Ethics & Legal Scholarship",
    metrics: [
      {
        value: "LL.B. (Hons)",
        label: "Southern University",
        sub: "Jurisprudence & Statute",
      },
      {
        value: "Govt. City College",
        label: "Chittagong Alumnus",
        sub: "Distinguished Academic Roots",
      },
      {
        value: "100% Ethics",
        label: "Chamber Standard",
        sub: "Dedicated Client Advocacy",
      },
    ],
    primaryCta: {
      label: "Connect with Shihab Uddin",
      href: "#contact",
    },
    secondaryCta: {
      label: "Read Attorney Profile",
      href: "#about",
    },
  },
];
