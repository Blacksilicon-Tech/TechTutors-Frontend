export type Program = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  courses: string[];
  ectsCredits: string;
  onlineSelfStudy: string;
  portalAccessDuration: string;
  studyMaterialAndResources: string;
  mentorship: string;
  courseCompletion: string;
  professionalCertificateExam: string;
  programProfessionalCertificate: string;
  brochure: string;
  expandable?: { bullets: string[] };
};

export const programs: Program[] = [
  {
    slug: "cloud-and-cybersecurity",
    title: "Cloud and Cybersecurity",
    image: "cloud&cybersecurity.jpg",
    summary:
      "The Cloud and Cybersecurity program equips learners with the knowledge and skills to design, secure, and manage modern cloud environments using Microsoft Azure and cybersecurity best practices. It covers foundational concepts, hands-on administration, security technologies, and advanced architectural strategies to protect data, applications, and infrastructure from evolving cyber threats.",
    courses: [
      "Elements of Cloud & Cybersecurity",
      "Azure Fundamentals",
      "Cybersecurity Fundamentals",
      "Azure Administrator",
      "Azure Security Technologies",
      "Cybersecurity Architect",
    ],
    ectsCredits: "12 Credits",
    onlineSelfStudy: "324 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    brochure: "/brochures/CloudandCybersecurity.pdf",
    expandable: {
      bullets: [
        "Covers cloud computing essentials and cybersecurity fundamentals for building a solid foundation.",
        "Explains Azure services, identity management, storage, networking, and core Azure components.",
        "Introduces security frameworks, threat analysis, and best practices for safeguarding systems.",
        "Provides hands-on training in managing Azure resources, workloads, and enterprise environments.",
        "Focuses on implementing Azure security controls, compliance, and threat protection strategies.",
        "Explores advanced cybersecurity architecture for designing secure, scalable, and resilient systems.",
      ],
    },
  },
  {
    slug: "ai-developer",
    title: "AI Developer",
    image: "aidev.jpg",
    summary:
      "The AI Developer program equips learners with the technical expertise to design, build, and deploy intelligent solutions using Microsoft Azure and modern AI frameworks. It covers core AI principles, data analytics, development workflows, cloud-native data storage, and advanced AI development practices to prepare learners for real-world AI-driven projects and solutions.",
    courses: [
      "Microsoft Azure",
      "Artificial Intelligence",
      "Data and Analytics",
      "Development Workflow",
      "Cloud Native Data Storage",
      "Azure Development",
      "AI Development",
    ],
    ectsCredits: "10 Credits",
    onlineSelfStudy: "270 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    brochure: "/brochures/AIDeveloper.pdf",
    expandable: {
      bullets: [
        "Covers Microsoft Azure fundamentals, services, and integrations for AI-driven development.",
        "Introduces artificial intelligence concepts, frameworks, and machine learning models.",
        "Explains data analytics techniques for preparing, processing, and visualizing datasets.",
        "Teaches efficient development workflows and modern DevOps practices for AI solutions.",
        "Covers cloud-native data storage solutions for scalability, performance, and security.",
        "Provides hands-on training in Azure development and advanced AI solution deployment.",
      ],
    },
  },
  {
    slug: "power-platform",
    title: "Power Platform (PP)",
    image: "powerplatform.jpg",
    summary:
      "The Power Platform (PP) program equips learners with the knowledge and practical skills needed to design, build, and deploy business solutions using Microsoft Power Platform tools. It covers core fundamentals, app development, solution architecture, and functional consulting to help learners create efficient, low-code applications and automate business processes seamlessly.",
    courses: [
      "Microsoft PP Fundamentals",
      "Microsoft PP App Maker",
      "Microsoft PP Functional Consultant",
      "Microsoft PP Solution Architect",
    ],
    ectsCredits: "10 Credits",
    onlineSelfStudy: "270 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    brochure: "/brochures/PowerPlatform(PP).pdf",
    expandable: {
      bullets: [
        "Introduces Microsoft Power Platform fundamentals, tools, and core capabilities.",
        "Teaches app development using Power Apps for creating low-code business solutions.",
        "Covers automation and process optimization using Power Automate and related tools.",
        "Explains data analysis, reporting, and visualization using Power BI within the platform.",
        "Provides hands-on training for functional consulting and business solution deployment.",
        "Explores solution architecture and strategies for scaling enterprise-grade applications.",
      ],
    },
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    image: "dataengineer.jpg",
    summary:
      "The Data Engineer program equips learners with the technical expertise to design, build, and manage scalable data solutions using Microsoft Azure and modern data engineering tools. It covers core Azure services, data analytics, AI integration, and advanced engineering techniques to prepare learners for real-world data-driven projects and enterprise solutions.",
    courses: [
      "Exploring Microsoft Azure",
      "Exploring Artificial Intelligence",
      "Exploring Data and Analytics",
      "Data Analytics with Power BI",
      "Data Engineering with Azure",
      "Data Engineering with Fabric",
    ],
    ectsCredits: "12 Credits",
    onlineSelfStudy: "324 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    brochure: "/brochures/DataEngineer.pdf",
    expandable: {
      bullets: [
        "Introduces core Microsoft Azure services and infrastructure for data engineering solutions.",
        "Explores artificial intelligence integration within modern data-driven architectures.",
        "Covers data analytics principles, data processing techniques, and business insights generation.",
        "Provides hands-on training in building interactive dashboards and reports with Power BI.",
        "Teaches advanced data engineering practices using Azure pipelines, storage, and compute services.",
        "Explores Microsoft Fabric for managing, transforming, and scaling enterprise data solutions.",
      ],
    },
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    image: "dataanalyst.jpg",
    summary:
      "The Data Analyst program equips learners with the skills to collect, process, analyze, and visualize data using Microsoft Azure, Power BI, and modern analytics tools. It focuses on transforming raw data into actionable insights, building dynamic reports, and leveraging AI and Fabric for advanced data analytics and business intelligence solutions.",
    courses: [
      "Exploring Microsoft Azure",
      "Exploring Artificial Intelligence",
      "Exploring Data and Analytics",
      "Data Analytics with Power BI",
      "Data Analytics with Azure",
      "Data Analytics with Fabric",
    ],
    ectsCredits: "12 Credits",
    onlineSelfStudy: "324 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    brochure: "/brochures/DataAnalyst.pdf",
    expandable: {
      bullets: [
        "Introduces Microsoft Azure services and tools essential for modern data analytics.",
        "Explores the role of artificial intelligence in enhancing data-driven decision-making.",
        "Covers data analytics concepts, data processing techniques, and business intelligence strategies.",
        "Provides hands-on experience with Power BI to build interactive dashboards and reports.",
        "Teaches Azure-based analytics solutions for scalable, enterprise-grade data processing.",
        "Explores Microsoft Fabric for advanced data modeling, integration, and analytics workflows.",
      ],
    },
  },
];
