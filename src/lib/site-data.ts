export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface HighlightMetric {
  value: string;
  label: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  lead: string;
  description: string;
}

export interface SelectedMatter {
  id: string;
  category: string;
  title: string;
  role: string;
  summary: string;
  outcomeNote: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  isPlaceholderNotice?: boolean;
}

export interface LegalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface Qualification {
  degree: string;
  institution?: string;
  detail: string;
  url?: string;
  period?: string;
}

export const SITE_DATA = {
  attorney: {
    name: "Shihab Uddin",
    credentials: "LL.B. (Hons)",
    title: "Apprentice Lawyer • Judge's Court, Chittagong",
    firmName: "Chambers of Shihab Uddin",
    facebookUrl: "https://www.facebook.com/shihabu007",
    bioShort:
      "Dedicated Apprentice Lawyer practicing at the Judge's Court, Chittagong. Committed to safeguarding client rights through rigorous case research, precise legal drafting, and client-centered advocacy.",
    biography: [
      "Shihab Uddin is an emerging legal practitioner and Apprentice Lawyer based at the Judge's Court, Chittagong (Chattogram), Bangladesh. Combining a dedicated academic foundation with hands-on courtroom apprenticeship, he represents a modern generation of lawyers committed to statutory accuracy, ethical practice, and thorough trial preparedness.",
      "He completed his Bachelor of Laws (LL.B.) from Southern University Bangladesh, having earlier completed his higher secondary education at the renowned Govt. City College, Chittagong. Throughout his legal studies, he built specialized interest in civil dispute resolution, land and property laws, criminal procedure, and commercial documentation.",
      "Currently engaged in active legal apprenticeship and chamber practice under senior advocates at the Chittagong District & Sessions Judge's Court, Shihab actively assists in case preparation, bail applications, civil suits, and contract reviews—approaching every matter with meticulous research, integrity, and proactive client communication.",
    ],
    philosophy:
      "True legal advocacy begins with deep listening, advances through exhaustive statutory and factual research, and achieves justice through uncompromising integrity and dedication.",
    qualifications: [
      {
        degree: "Legal Apprenticeship & Practice",
        institution: "Judge's Court, Chittagong",
        detail:
          "Apprentice Lawyer actively engaged in trial litigation, bail hearings, civil suits, and chamber drafting at Chittagong District & Sessions Court.",
        url: "https://www.facebook.com/shihabu007",
        period: "Active Practice",
      },
      {
        degree: "Bachelor of Laws (LL.B.)",
        institution: "Southern University Bangladesh",
        detail:
          "Graduated with thorough training in Civil Law, Criminal Procedure (CrPC), Constitutional Law, Property Law, and Commercial Jurisprudence.",
        url: "https://www.facebook.com/shihabu007",
        period: "LL.B. Graduate",
      },
      {
        degree: "Higher Secondary & College Studies",
        institution: "Govt. City College, Chittagong",
        detail:
          "Prestigious educational foundation cultivating critical analysis, public speaking, and preparatory legal studies.",
        url: "https://www.facebook.com/shihabu007",
        period: "Chittagong",
      },
    ] as Qualification[],
    admissions: [
      "Apprentice Lawyer, Judge's Court, Chittagong (Chattogram District & Sessions Court)",
      "Chittagong District Bar Association (Apprentice / Chamber Practice)",
      "Bachelor of Laws (LL.B.) – Southern University Bangladesh",
      "Alumnus – Govt. City College, Chittagong",
      "Enrolment Candidate – Bangladesh Bar Council",
    ],
    portraitImage: "/picture/shihab-1.webp",
    portraitAlt:
      "Shihab Uddin, Apprentice Lawyer at Judge's Court, Chittagong",
    officeImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    courtroomImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    libraryImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
    signatureText: "Shihab Uddin",
  },

  trustHighlights: [
    {
      value: "Judge's Court",
      label: "Court Practice",
      description: "Apprentice Lawyer actively practicing at Chittagong District & Sessions Judge's Court",
    },
    {
      value: "LL.B.",
      label: "Southern University",
      description: "Bachelor of Laws graduate with strong grounding in civil and criminal jurisprudence",
    },
    {
      value: "Govt. City",
      label: "College Alumnus",
      description: "Distinguished academic foundation from Govt. City College, Chittagong",
    },
    {
      value: "100%",
      label: "Client Commitment",
      description: "Dedicated to prompt legal research, ethical drafting, and client-centered advocacy",
    },
  ] as HighlightMetric[],

  practiceAreas: [
    {
      id: "civil-land-disputes",
      title: "Civil Litigation & Land Disputes",
      subtitle: "Title Suits, Partition, Injunctions & Property Rights",
      description:
        "Providing dedicated legal assistance in land title suits, partition of ancestral properties, temporary and permanent injunctions, declaration of rights, and property boundary disputes in Chittagong District Courts.",
      iconName: "Scale",
      highlights: [
        "Partition suits & ancestral property distribution",
        "Temporary & permanent injunction applications",
        "Title declaration suits under Specific Relief Act",
      ],
    },
    {
      id: "criminal-defense-bail",
      title: "Criminal Law & Bail Matters",
      subtitle: "Trial Defense, Bail Petitions & Revisions",
      description:
        "Assisting in criminal defense proceedings across Magistrate and Sessions Courts in Chittagong, including drafting bail petitions, anticipatory bail applications, and criminal revision under the Code of Criminal Procedure (CrPC).",
      iconName: "ShieldCheck",
      highlights: [
        "Regular & anticipatory bail petition drafting",
        "Trial defense assistance under CrPC & Penal Code",
        "Police station & magistrate court matter advocacy",
      ],
    },
    {
      id: "family-matrimonial",
      title: "Family & Matrimonial Law",
      subtitle: "Family Court Suits, Dower, Maintenance & Custody",
      description:
        "Compassionate yet firm legal assistance in family dispute matters under the Family Courts Act, including recovery of dower (denmohor), maintenance (khorposh), child custody, guardianship, and matrimonial resolution.",
      iconName: "Landmark",
      highlights: [
        "Dower & maintenance suits in Family Court",
        "Child custody & legal guardianship petitions",
        "Divorce notice, mediation & settlement procedures",
      ],
    },
    {
      id: "cheque-dishonour-ni-act",
      title: "Negotiable Instruments (NI Act 138)",
      subtitle: "Cheque Dishonour, Legal Notices & Recovery",
      description:
        "Handling statutory legal notices and criminal complaints for dishonoured cheques under Section 138 of the Negotiable Instruments Act, 1881, assisting commercial clients and individuals in debt recovery.",
      iconName: "FileText",
      highlights: [
        "Statutory 30-day legal notice drafting & service",
        "Section 138 criminal complaint filing & trial",
        "Negotiated out-of-court commercial recovery",
      ],
    },
    {
      id: "commercial-agreements",
      title: "Commercial Deeds & Legal Drafting",
      subtitle: "Precision Contracts, Deeds & Legal Vetting",
      description:
        "Drafting and vetting enforceable commercial contracts, partnership agreements, deeds of sale, lease agreements, powers of attorney, and statutory affidavits tailored to Bangladeshi commercial realities.",
      iconName: "Briefcase",
      highlights: [
        "Business partnership deeds & shareholder contracts",
        "Power of attorney, sale deed & lease vetting",
        "Statutory compliance & legal notice issuance",
      ],
    },
    {
      id: "property-real-estate",
      title: "Real Estate & Municipal Affairs",
      subtitle: "Land Documentation, Mutation & CDA Matters",
      description:
        "Assisting property owners, developers, and tenants in land document verification, mutation, land tax (Khajna) records, and municipal regulatory procedures across Chittagong.",
      iconName: "Building2",
      highlights: [
        "Khatian & RS/BS/PS record searching & vetting",
        "Mutation & land registration legal guidance",
        "Chittagong Development Authority (CDA) compliance",
      ],
    },
  ] as PracticeArea[],

  approachSteps: [
    {
      number: "01",
      title: "Listen & Diagnose",
      lead: "Confidential Consultation & Document Review",
      description:
        "We begin with a careful, confidential review of all available documents—title records, FIRs, court notices, or commercial contracts—to pinpoint core legal exposures and strategic opportunities.",
    },
    {
      number: "02",
      title: "Research & Strategize",
      lead: "Statutory Law & High Court Precedents",
      description:
        "We examine relevant Bangladesh enactments, High Court Division rulings (DLR, BLC, MLR), and procedural rules to construct a sound, resilient legal strategy tailored to your objectives.",
    },
    {
      number: "03",
      title: "Execute & Advocate",
      lead: "Rigorous Drafting & Diligent Court Pursuit",
      description:
        "We draft precise pleadings and pursue every hearing at the Judge's Court, Chittagong, with unwavering focus, keeping you informed at every milestone until resolution.",
    },
  ] as ApproachStep[],

  selectedMatters: [
    {
      id: "matter-1",
      category: "Civil & Property",
      title: "Ancestral Land Partition & Injunction Proceeding",
      role: "Apprentice Counsel in Chamber Representation",
      summary:
        "Assisted in drafting and filing a complex ancestral land partition suit in Chittagong District Court involving multiple co-sharers and contested title documents.",
      outcomeNote:
        "Secured ad-interim injunction order preventing unauthorized construction on disputed land pending final partition.",
    },
    {
      id: "matter-2",
      category: "Criminal Defense",
      title: "Bail Petition & Hearing under CrPC Section 497/498",
      role: "Defense Research & Preparation",
      summary:
        "Prepared comprehensive factual analysis, medical records, and precedent brief for an urgent bail hearing before the Sessions Judge Court, Chittagong.",
      outcomeNote:
        "Bail granted by the learned Sessions Court upon effective presentation of factual inconsistencies in the prosecution case.",
    },
    {
      id: "matter-3",
      category: "Commercial & Banking",
      title: "Section 138 Negotiable Instruments Act Cheque Dishonour",
      role: "Legal Notice & Complaint Formulation",
      summary:
        "Served statutory demand notice for unpaid commercial debt and drafted criminal complaint before the Metropolitan Magistrate Court, Chittagong.",
      outcomeNote:
        "Matter amicably resolved through structured compromise deed and full recovery of outstanding funds.",
    },
  ] as SelectedMatter[],

  testimonials: [
    {
      id: "testimonial-1",
      quote:
        "Shihab Uddin's thorough research and attention to document vetting gave us great confidence in our property dispute at Judge's Court, Chittagong. His dedication and responsiveness are remarkable.",
      author: "M. Rahman",
      title: "Property Co-Sharer",
      organization: "Chittagong",
      isPlaceholderNotice: false,
    },
    {
      id: "testimonial-2",
      quote:
        "Prompt legal notice drafting and clear explanations of the NI Act 138 procedure. Shihab approaches legal practice with deep respect for clients and tireless preparation.",
      author: "A. Karim",
      title: "Business Owner",
      organization: "Chattogram",
      isPlaceholderNotice: false,
    },
    {
      id: "testimonial-3",
      quote:
        "A highly promising legal mind. His background from Southern University Bangladesh and Govt. City College reflects in his disciplined approach to courtroom work and legal research.",
      author: "Advocate S. Islam",
      title: "Senior Colleague",
      organization: "Chittagong District Bar",
      isPlaceholderNotice: false,
    },
  ] as Testimonial[],

  articles: [
    {
      id: "article-1",
      title: "Navigating Land Title & Partition Suits in Bangladesh",
      category: "Land & Property Law",
      readTime: "5 min read",
      date: "October 2026",
      excerpt:
        "A practical guide on ancestral property rights, CS/SA/RS/BS khatians, and essential pre-filing steps before initiating partition in Chittagong District Courts.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      slug: "land-title-partition-suits-bangladesh",
    },
    {
      id: "article-2",
      title: "Cheque Dishonour under Section 138 of the Negotiable Instruments Act",
      category: "Commercial Law",
      readTime: "6 min read",
      date: "September 2026",
      excerpt:
        "Understanding mandatory 30-day notice periods, cause of action, and step-by-step litigation guidelines under Section 138 of the NI Act.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      slug: "cheque-dishonour-section-138-ni-act",
    },
    {
      id: "article-3",
      title: "Bail Procedure & Grounds in District Courts of Bangladesh",
      category: "Criminal Jurisprudence",
      readTime: "4 min read",
      date: "August 2026",
      excerpt:
        "An overview of bail jurisprudence under CrPC Sections 496, 497, and 498, highlighting key factors considered by learned Magistrates and Sessions Judges.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      slug: "bail-procedure-grounds-district-courts",
    },
  ] as LegalArticle[],

  contactInfo: {
    address: {
      line1: "Chambers at Judge's Court (Court Hill)",
      city: "Chittagong (Chattogram)",
      state: "Chittagong Division",
      zip: "4000",
      country: "Bangladesh",
    },
    phone: "+880 1823669556",
    email: "Shihab88.uddin@gmail.com",
    hours: "Saturday – Thursday: 9:00 AM – 6:00 PM (Court & Chambers)",
    emergencyNote:
      "Consultations at Judge's Court chambers or via prior appointment. Urgent bail and injunction reviews available.",
    socials: [
      { name: "Facebook Profile", url: "https://www.facebook.com/shihabu007", icon: "Facebook" },
      { name: "LinkedIn", url: "https://www.facebook.com/shihabu007", icon: "Linkedin" },
      { name: "Chittagong District Bar", url: "#contact", icon: "Award" },
    ],
  },
};
