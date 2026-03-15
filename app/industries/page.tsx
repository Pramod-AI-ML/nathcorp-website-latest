"use client"

import { useRef, useState, useMemo } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ClientLogosCarousel from "@/components/client-logos-carousel"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ArrowRight, CheckCircle, Building2, Zap, Shield, Globe, Cpu, X, Activity, FileText, ArrowUpRight } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"
import ContactFormModal from "@/components/contact-form-modal"

// --- 1. Industry Data Integrated with full Source Content ---
const industries = [
  {
    id: "technology",
    name: "Technology",
    description: "Structured digital reset and operational realignment for corporate leaders.",
    color: "from-blue-600 to-blue-400",
    theme: "blue",
    challenges: [
      "Separating deeply integrated digital infrastructures",
      "Ensuring data integrity during large-scale migrations",
      "Establishing independent digital identity management",
    ],
    solutions: [
      "Meticulously planned infrastructure carve-outs",
      "Automated disentanglement of shared IT systems",
      "Advanced security protocol implementation",
    ],
    caseStudy: {
      client: "Western Digital (SanDisk)",
      title: "Western Digital Demerger Success: Streamlined Operational Separation and Optimization",
      focus: "Complete separation of integrated IT systems without operational disruption, creating two fully autonomous IT environments for Western Digital and SanDisk.",
      challenge: "Western Digital needed to separate its flash memory business (SanDisk) into an independent public company, requiring comprehensive digital transformation to ensure business continuity while creating two fully autonomous IT environments.",
      solution: "Implemented a carefully orchestrated phased separation strategy with comprehensive IT infrastructure assessment, identity system carve-out, data migration automation, network segmentation, and security framework implementation.",
      results: "Successfully created two autonomous companies with zero business disruption, 100% data integrity, enhanced security posture, and enabled successful IPO of the separated entity.",
      metrics: [
        { label: "Business Disruption", value: "Zero", detail: "100% operational continuity maintained throughout separation" },
        { label: "Data Integrity", value: "100%", detail: "Complete data migration with zero data loss" },
        { label: "Timeline", value: "18 Mo", detail: "Phased execution with 25+ specialists" },
        { label: "IPO Success", value: "Enabled", detail: "Successful public offering of separated entity" },
      ],
      fullCaseStudy: {
        overview: "Western Digital is a global leader in data storage solutions, with a strategic decision to separate its flash memory business (SanDisk) into an independent public company. This required a comprehensive digital transformation approach to ensure business continuity while creating two fully autonomous IT environments.",
        keyProblems: [
          "Complete separation of integrated IT systems without operational disruption",
          "Maintaining data integrity across complex enterprise applications",
          "Ensuring security compliance during the transition period",
          "Creating independent identity and access management systems",
          "Establishing separate network infrastructures for both entities",
          "Managing complex data dependencies and application integrations",
          "Ensuring zero business disruption during the separation process",
          "Supporting the successful public offering of the separated entity"
        ],
        solutionDetails: [
          "Comprehensive IT Infrastructure Assessment: Conducted detailed analysis of all systems, applications, and data dependencies with complex integration mapping",
          "Phased Separation Strategy: Implemented carefully orchestrated timeline with specific milestones, deliverables, and rollback procedures for business continuity",
          "Identity System Carve-out: Created independent Active Directory environments with proper access controls and role-based access control (RBAC)",
          "Data Migration Automation: Developed automated tools for secure data transfer with integrity checks and comprehensive validation processes",
          "Network Segmentation: Established separate network infrastructures with security boundaries and isolation strategies",
          "Application Independence: Ensured all business-critical applications could operate independently with testing and validation frameworks",
          "Security Framework Implementation: Deployed comprehensive security measures, monitoring, and threat detection systems for both organizations"
        ],
        technologies: ["Active Directory", "Azure Cloud Services", "Enterprise Security Tools", "Data Migration Platforms", "Network Infrastructure", "Identity Management Systems", "Automation Tools", "Compliance Frameworks"],
        objectives: [
          "Create two fully autonomous IT environments for Western Digital and SanDisk",
          "Maintain 100% business continuity throughout the separation process",
          "Ensure data integrity and security during the transition",
          "Establish independent identity and access management systems",
          "Support the successful public offering of the separated entity"
        ],
        results: [
          "Two Autonomous Companies: Successfully created independent IT environments for both Western Digital and the new SanDisk entity",
          "Zero Business Disruption: Maintained 100% operational continuity throughout the separation process",
          "Enhanced Security Posture: Implemented stronger security controls and monitoring for both organizations",
          "Streamlined Operations: Optimized IT processes and reduced operational complexity",
          "Successful IPO Support: Enabled the successful public offering of the separated entity",
          "Complete Data Integrity: Achieved 100% data migration with zero data loss",
          "Independent Operations: Both companies now operate with fully autonomous IT systems",
          "Regulatory Compliance: Ensured all separation activities met regulatory requirements"
        ],
        standoutElements: [
          "Zero Business Disruption: Achieved complete separation without any operational downtime or business impact",
          "Complex System Separation: Successfully separated highly integrated enterprise systems and applications",
          "Data Integrity Excellence: Maintained 100% data integrity throughout the migration process",
          "Regulatory Compliance: Ensured all separation activities met strict regulatory requirements",
          "Automated Migration: Developed sophisticated automation tools for secure data transfer and validation",
          "Security Enhancement: Implemented stronger security controls and monitoring for both organizations"
        ],
        testimonial: "The demerger project was executed flawlessly with zero business disruption. NathCorp's expertise in complex system separation and their meticulous planning ensured we could successfully separate our flash business while maintaining full operational continuity.",
        teamSize: "25+ specialists",
        timeline: "18 months",
        industry: "Technology / Data Storage"
      }
    }
  },
  {
    id: "aviation",
    name: "Aviation",
    description: "Modernizing commercial flight operations through secure, cloud-integrated ecosystems.",
    color: "from-sky-600 to-sky-400",
    theme: "sky",
    challenges: [
      "Heavy, inefficient paper-based manual distribution",
      "Inconsistent and time-consuming crew communication",
      "Regulatory compliance and FAA audit risks",
    ],
    solutions: [
      "Electronic Flight Bag (EFB) implementation",
      "Cockpit (CID) and Personal (PID) Device ecosystems",
      "Centralized device and application management",
    ],
    caseStudy: {
      client: "Hawaiian Airlines",
      title: "Implementation of Electronic Flight Bag at Hawaiian Airlines",
      focus: "Modernizing flight operations by implementing a secure, scalable, and fully digital Electronic Flight Bag (EFB) ecosystem to replace paper-based manuals and streamline crew communication.",
      challenge: "Hawaiian Airlines faced significant operational challenges with heavy paper-based manuals (~10lbs per FA, 80lbs per flight), inefficient crew communication via phone calls, no mechanism to confirm manual updates, and FAA compliance risks with manual distribution.",
      solution: "Deployed comprehensive CID (Cockpit Information Display) and PID (Personal Information Device) ecosystems with secure cloud integration, automated content delivery via NCSync, centralized device management through Intune, and real-time crew communication tools.",
      results: "Reduced aircraft weight by ~120 lbs per flight improving fuel efficiency, eliminated printing costs, automated manual distribution, enhanced regulatory compliance, and improved crew communication with real-time coordination capabilities.",
      metrics: [
        { label: "Weight Reduction", value: "120 lbs", detail: "Per flight through digital transformation" },
        { label: "Fuel Efficiency", value: "Annual", detail: "Savings through weight reduction" },
        { label: "Compliance", value: "Real-time", detail: "Automated audit trails and tracking" },
        { label: "Timeline", value: "12 Mo", detail: "Phased deployment with 15+ specialists" },
      ],
      fullCaseStudy: {
        overview: "Hawaiian Airlines, Inc. is a leading commercial U.S. airline headquartered in Honolulu and a subsidiary of the Alaska Air Group. As the largest operator of commercial flights to and from the state of Hawaii, it ranks as the tenth largest airline in the United States by passenger volume.",
        keyProblems: [
          "Heavy, paper-based manual set – approx. 10lbs per FA, average 8 FAs per flight = 80lbs of added weight per flight",
          "No mechanism to confirm ALL FAs update manuals and read bulletins",
          "Updates are distributed on paper with high printing and distribution costs",
          "FAA inspectors can spot-check at any time for current manual sets",
          "Crew communication conducted via phone calls or manual processes, often inconsistent and time-consuming",
          "Uncertainty about whether the right person was contacted during crew coordination",
          "Lack of confirmation that messages were received and understood",
          "During delays or re-crewing situations, poor communication led to unnecessary costs"
        ],
        solutionDetails: [
          "CID (Cockpit Information Display): Secure cloud-based system with encrypted communications, remote device management, and flight-ready integration with aircraft systems",
          "PID (Personal Information Device): Purpose-built tablets with NCSync for content delivery, LastPass for credential management, and Intune for security compliance",
          "Automated Content Delivery: Real-time manual distribution via SharePoint and Rackspace with secure sync capabilities ensuring latest operational content",
          "Enterprise Security Framework: Microsoft Entra AD integration with Certificate Authority, DirectAccess for secure remote access, and encrypted HTTPS communications",
          "Device Management: Centralized control through Intune for policy enforcement, remote updates, and security compliance across all tablets",
          "Communication Integration: Skype for Business implementation with compliance monitoring for regulatory-compliant crew communication",
          "Monitoring & Analytics: EFB Monitor for real-time device health tracking, update status, and usage analytics with remote troubleshooting capabilities"
        ],
        technologies: ["Microsoft Entra AD", "Intune", "NCSync", "SharePoint", "Rackspace", "LIDO", "OpsTablet", "EFB Monitor", "LastPass", "Skype for Business", "DirectAccess", "Certificate Authority"],
        objectives: [
          "Modernize Hawaiian Airlines' flight operations with secure, scalable EFB ecosystem",
          "Replace paper-based manuals with digital tablets to reduce weight and improve efficiency",
          "Streamline crew communication and enhance regulatory compliance",
          "Implement centralized device management with real-time content delivery",
          "Integrate cloud-based infrastructure for future scalability and operational control"
        ],
        results: [
          "Weight Reduction: Replaced paper manuals with digital tablets, reducing aircraft weight by ~120 lbs per flight and improving fuel efficiency",
          "Digital Content Access: Pilots access up-to-date digital content without carrying heavy paper manuals with searchable, prioritized interfaces",
          "Automated Distribution: Seamless delivery of manuals, bulletins, and updates ensuring timely and consistent access to latest operational content",
          "Compliance Enhancement: Enabled confirmation tracking for bulletins and manuals, improving audit readiness and regulatory compliance",
          "Unified Platform: Both pilots and cabin crew using the same electronic manual application (PIDs and CIDs) for consistency",
          "Cost Elimination: Eliminated printing and distribution costs, resulting in significant long-term operational savings",
          "Training Digitization: Online training modules reduced classroom scheduling pressure and improved training flexibility",
          "Remote Management: Centralized device and app management enabling remote updates, security enforcement, and policy compliance",
          "Enhanced Security: Strengthened data security with encrypted communications, identity verification, and secure access controls",
          "Real-time Communication: Integrated email and messaging tools reducing reliance on manual or paper-based crew coordination methods"
        ],
        standoutElements: [
          "Significant Fuel & Cost Savings: ~120 lbs weight reduction per flight leading to measurable fuel efficiency improvements across the entire fleet",
          "End-to-End Digitalization: Unified tablets for both flight attendants (CID) and pilots (PID) creating streamlined, paperless operational model",
          "Enterprise-Grade Security: Integrated Microsoft Intune, Entra AD, and Certificate Authority for identity, access, and device compliance ensuring FAA compliance",
          "Seamless Content Management: Auto-sync of manuals, bulletins, and flight data using NCSync, eliminating manual tracking and ensuring timely delivery",
          "Real-Time Device Monitoring: EFB Monitor providing live insights into device health, update status, and usage with remote support capabilities",
          "Future-Ready Architecture: Cloud-integrated infrastructure positioned for scalability with real-time dashboards and secure remote access"
        ],
        testimonial: "The EFB implementation has transformed our flight operations completely. The weight savings alone have delivered significant fuel cost reductions, while the digital content management has eliminated our manual tracking headaches and improved our FAA compliance posture dramatically.",
        teamSize: "15+ aviation specialists",
        timeline: "12 months",
        industry: "Aviation / Commercial Airlines"
      }
    }
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    color: "from-amber-600 to-amber-400",
    theme: "amber",
    description: "Protecting brand integrity with decentralized, real-time authentication systems.",
    challenges: ["Infiltration of counterfeit safety products", "Multi-site global manufacturing synchronization", "Lack of decentralized authentication methods"],
    solutions: ["Encrypted QR label generation at factory level", "Azure-hosted validation backend", "Public verification portal integration"],
    caseStudy: {
      client: "3M",
      title: "3M SafeGuard – AntiCounterfeiting System for N95 Masks",
      focus: "Comprehensive anti-counterfeiting solution protecting user safety, brand integrity, and supply chain compliance through real-time authentication technology.",
      challenge: "Increasing counterfeit infiltration of popular 3M N95 masks threatening user safety, brand integrity, and compliance, with absence of reliable decentralized authentication method at point of use and need for scalable architecture supporting multi-site global manufacturing.",
      solution: "Implemented hybrid architecture with factory-level desktop app generating encrypted QR labels, Windows Service & SSIS pipeline for data aggregation, Azure-hosted backend for validation, and public verification portal (safeguard.3m.com) for user-initiated authentication.",
      results: "Enabled real-time authenticity checks at multiple supply chain stages, significant supply-chain traceability uplift, centralized validation with local printing autonomy, and strengthened trust among distributors and regulators.",
      metrics: [
        { label: "Product Launch", value: "2017", detail: "Ongoing support since launch" },
        { label: "Seized Fakes", value: "10M+", detail: "Prevented during COVID-19 crisis" },
        { label: "Multi-site", value: "Global", detail: "Manufacturing support" },
        { label: "Team", value: "15+", detail: "Security specialists deployed" },
      ],
      fullCaseStudy: {
        overview: "3M SafeGuard represents a comprehensive anti-counterfeiting solution launched in 2017 to protect the integrity of 3M N95 masks. The system combines factory-level encryption, cloud-based validation, and public verification portals to ensure product authenticity and prevent counterfeit infiltration across global supply chains.",
        keyProblems: [
          "Increasing counterfeit infiltration of popular 3M N95 masks threatening user safety, brand integrity, and compliance",
          "Absence of a reliable, decentralized authentication method at point of use",
          "Need for scalable architecture supporting multi-site global manufacturing",
          "Public health risk from counterfeit masks that often failed basic filtration tests",
          "Supply chain exploitation with illicit distributors peddling fake masks through unauthorized channels",
          "Operational disruption and cost from seizures and recalls of fake PPE forcing hospitals to halt usage",
          "Regulatory and reputation risk from counterfeiting waves prompting lawsuits and enforcement actions",
          "Over 10 million fake 3M N95 masks seized in the U.S. during early 2021 COVID-19 crisis"
        ],
        solutionDetails: [
          "Factory-level Desktop App: Generated encrypted QR labels with LOT and secure AUTH codes with data stored locally in SQL Express",
          "Windows Service & SSIS Pipeline: Encrypted, aggregated, and transferred label information to Azure Blob storage for centralized processing",
          "Azure-hosted Backend: Decrypted, validated, and stored authentication data in Azure Table Storage with scalable cloud infrastructure",
          "Public Verification Portal: safeguard.3m.com enabled user-initiated authentication for immediate product verification",
          "Multi-site Encryption: Site-specific key pairs and Azure AD integration ensured high-level security across global manufacturing locations",
          "Hybrid Architecture: Stateful desktop apps at factories combined with stateless Azure verification backend for optimal performance",
          "Secure QR Labels: LOT + AUTH code embedded in encrypted payload providing tamper-proof authentication method"
        ],
        technologies: ["Azure Cloud Services", "SQL Server Express", "Windows Services", "SSIS Pipeline", "Azure Blob Storage", "Azure Table Storage", "Azure AD", "QR Code Generation", "Encryption"],
        objectives: [
          "Enable instant code-based verification of product authenticity",
          "Prevent counterfeit masks from entering supply chains",
          "Centralize validation data for transparency and audits",
          "Maintain robust, scalable operations across multiple production sites"
        ],
        results: [
          "Real-time Authentication: Enabled instant authenticity checks at multiple supply chain stages with immediate verification",
          "Supply Chain Protection: Significant traceability uplift and counterfeit interception preventing fake products from reaching consumers",
          "Operational Efficiency: Centralized validation while maintaining local printing autonomy across manufacturing sites",
          "Stakeholder Trust: Strengthened confidence among distributors and regulators through transparent authentication system",
          "Cost Reduction: Significant reduction in losses related to counterfeit distribution and recall expenses",
          "Process Optimization: Faster, simpler validation workflow reducing dependency on manual authentication checks",
          "System Integration: Amplified value of existing manufacturing systems with digital label technology",
          "COVID-19 Impact: Proved invaluable during pandemic crisis enabling hospitals to verify mask authenticity immediately"
        ],
        standoutElements: [
          "Hybrid Architecture: Innovative combination of stateful desktop apps at factories with stateless Azure verification backend",
          "Advanced Encryption: Site-specific key pairs with Azure AD integration providing enterprise-grade security",
          "Secure QR Technology: LOT + AUTH code embedded in encrypted payload creating tamper-proof authentication method",
          "Scalable Infrastructure: Centralized but flexible architecture supporting multiple factory rollouts globally",
          "COVID-19 Readiness: System proved critical during pandemic preventing counterfeit penetration and protecting frontline workers",
          "Public Health Impact: Prevented healthcare facilities from unknowingly using counterfeit masks that failed filtration tests"
        ],
        testimonial: "SafeGuard has been instrumental in protecting our brand integrity and ensuring customer safety. The system's ability to provide instant authentication has saved us millions in counterfeit-related losses while maintaining trust in our products during critical times.",
        teamSize: "15+ security specialists",
        timeline: "Product Launch: 2017, Ongoing Support",
        industry: "Manufacturing / Healthcare / Safety Products"
      }
    }
  },
  {
    id: "digital",
    name: "Digital",
    color: "from-emerald-600 to-emerald-400",
    theme: "emerald",
    description: "Orchestrating complex infrastructure migrations for global digital ecosystems.",
    challenges: ["Maintaining 24x7 global availability", "Complex hybrid infrastructure (Linux/Windows)", "Seamless transitions during ownership changes"],
    solutions: ["Resilient DevOps pipeline management", "Fault-tolerant SQL data synchronization", "Legacy component modernization"],
    caseStudy: {
      client: "OCLC (CloudLibrary)",
      title: "CloudLibrary – Powering a Global Digital Library Ecosystem",
      focus: "15+ years of vendor loyalty and operational consistency through parent company transitions, supporting nearly 500 libraries across 20 countries serving millions of users.",
      challenge: "Managing large-scale cloud-based eBook lending platform with complex hybrid infrastructure, supporting seamless multi-platform deployment, and orchestrating infrastructure transitions during ownership changes from 3M to Bibliotheca to OCLC without disrupting live services.",
      solution: "Implemented integrated DevOps and Azure cloud architecture managing Reaktor Nodes, Linux services, and Windows batch processes with SQL performance tuning, legacy component modernization, and enterprise-grade infrastructure monitoring.",
      results: "Achieved 15+ years of uninterrupted live service with zero critical outages during transitions, optimized cloud utilization, resolved performance issues across deployment zones, and earned Platinum in 2025 Modern Library Awards.",
      metrics: [
        { label: "Service Duration", value: "15+ Yrs", detail: "Uninterrupted live service" },
        { label: "Global Reach", value: "20+", detail: "Countries with 500 libraries" },
        { label: "Recognition", value: "Platinum", detail: "2025 Modern Library Awards" },
        { label: "Team Size", value: "20+", detail: "Cloud specialists deployed" },
      ],
      fullCaseStudy: {
        overview: "CloudLibrary has emerged as one of the world's most widely adopted digital library platforms, serving nearly 500 libraries across 20 countries with millions of users in over 50 languages. NathCorp has been instrumental in its success through continuous DevOps excellence since 2010.",
        keyProblems: [
          "Managing large-scale cloud-based eBook lending platform with complex, hybrid infrastructure (Linux, Windows, Reaktor-based services)",
          "Supporting seamless multi-platform deployment across geographies and libraries with millions of users",
          "Orchestrating infrastructure transitions during ownership changes—from 3M to Bibliotheca to OCLC—without disrupting live services",
          "Ensuring high availability, continuous performance optimization, and infrastructure modernization while avoiding costly downtime",
          "Scaling to support millions of simultaneous eBook lends across global user base",
          "Legacy workload optimization requiring SQL/Node performance improvements",
          "Managing complex content delivery for 9,800+ periodical titles from 80+ countries in 60 languages"
        ],
        solutionDetails: [
          "Integrated DevOps Architecture: Implemented Azure cloud architecture managing multiple application layers including Reaktor Nodes, Linux services, and Windows batch processes",
          "Zero-Downtime Migrations: Executed seamless transitions across 3M → Bibliotheca → OCLC ownership changes without service interruptions",
          "Performance Optimization: SQL performance tuning and fault-tolerant data synchronization across global deployments",
          "Enterprise Monitoring: Delivered proactive alerting and auto-remediation pipelines with real-time telemetry",
          "Legacy Modernization: Standardized deployment, configuration, and access control protocols across multiple environments",
          "Cross-Platform Support: Expertise in managing hybrid legacy + modern cloud stacks with customized Reaktor integration",
          "WorldCat Integration: Extended visibility and discoverability of digital library collections globally"
        ],
        technologies: ["Azure Cloud Services", "DevOps Pipelines", "SQL Server", "Monitoring Systems", "Reaktor Services", "CI/CD Tools"],
        objectives: [
          "Guarantee 24x7 operations and monitoring through resilient DevOps pipelines",
          "Execute zero-downtime migrations between infrastructure stacks and organizational handovers",
          "Maintain robust, scalable, and secure platform through Azure-based architecture and multi-environment DevOps",
          "Optimize legacy workloads and improve SQL/Node performance across global deployments"
        ],
        results: [
          "Uninterrupted Service: 15+ years of live service with zero critical outages during three corporate transitions",
          "Global Scale: Deployed across 20+ countries and nearly 500 library systems serving millions of users",
          "Content Diversity: Supports millions of eBooks, audiobooks, magazines, and streaming content in 50+ languages",
          "Industry Recognition: Winner of 2025 Modern Library Platinum Award for excellence in digital library services",
          "Operational Efficiency: Significant reduction in support overhead and platform fragility through modern DevOps practices",
          "Performance Enhancement: Resolved SQL and Reaktor-related performance issues across deployment zones",
          "Cost Optimization: Optimized cloud utilization and reduced maintenance effort through automation",
          "Integration Success: WorldCat integration increasing digital discoverability for libraries worldwide"
        ],
        standoutElements: [
          "Continuity Excellence: Vendor loyalty and operational consistency through three corporate handovers—exceptional example of long-term partnership",
          "Hybrid Infrastructure Mastery: Expertise in managing legacy + modern cloud stacks with customized Reaktor integration under single DevOps umbrella",
          "Global Impact: One of world's most widely adopted digital library platforms with 9,800+ periodical titles from 80+ countries",
          "Award-Winning Platform: 2025 Modern Library Platinum Award recognition for user satisfaction and industry excellence",
          "Proactive Operations: Real-time alerting and telemetry-backed fault resolution ensuring continuous availability",
          "Cross-Platform Excellence: Azure, Windows, Linux, and third-party module support under unified DevOps framework"
        ],
        testimonial: "NathCorp's DevOps excellence has been the foundation of CloudLibrary's global success. Their ability to maintain service continuity through multiple ownership changes while scaling our platform to serve millions of users worldwide is truly remarkable.",
        teamSize: "20+ cloud specialists",
        timeline: "Ongoing 15+ years (2010 – Present)",
        industry: "Digital Library / Media Services"
      }
    }
  },
  {
    id: "automotive",
    name: "Automotive",
    color: "from-red-600 to-red-400",
    theme: "red",
    description: "Strengthening security posture and streamlining operations for federation motor clubs.",
    challenges: ["Aging directory and authentication systems", "Heightened compliance risks at end-of-support", "Manual update overhead and troubleshooting"],
    solutions: ["Phased core infrastructure rollout", "Modern authentication controls", "Automation of routine patches"],
    caseStudy: {
      client: "AAA (American Automobile Association)",
      title: "Active Directory Services Excellence",
      focus: "Comprehensive Active Directory management focusing on directory hygiene, service reliability, and security compliance for thousands of employees and members across multiple regions.",
      challenge: "AAA faced high volume AD-related support tickets causing delays, legacy manual patching practices increasing vulnerabilities, resource constraints diverting IT staff from strategic projects, and lack of 24x7 support coverage resulting in prolonged resolution windows.",
      solution: "Implemented standardized AD operations with automated monthly patching via WSUS and PowerShell, daily health checks with real-time monitoring, VIP support tracks, Exchange integration, and 24x7 follow-the-sun support model.",
      results: "Achieved 45% reduction in AD-related ticket resolution time, 100% patch compliance across all domain controllers, enhanced security posture, proactive issue resolution preventing major outages, and improved user satisfaction.",
      metrics: [
        { label: "Resolution Time", value: "-45%", detail: "AD-related ticket resolution speedup" },
        { label: "Patch Compliance", value: "100%", detail: "Across all domain controllers" },
        { label: "Support Coverage", value: "24x7", detail: "Follow-the-sun support model" },
        { label: "Service Duration", value: "7+ Years", detail: "Ongoing continuous support" },
      ],
      fullCaseStudy: {
        overview: "AAA, a leading automotive and travel services organization, operates a complex IT environment supporting thousands of employees and members across multiple regions. To maintain operational excellence and AD service continuity, AAA implemented a dedicated Active Directory Services project focusing on directory hygiene, service reliability, and security compliance.",
        keyProblems: [
          "High volume of AD-related support tickets caused delays in account provisioning, access issues, and group management",
          "Manual patching and inconsistent health checks increased vulnerability to downtime and security threats",
          "Resource constraints diverted IT staff from strategic projects, slowing innovation",
          "Exchange dependencies required precise coordination to avoid service disruptions",
          "Delays in resolving issues for VIPs, executives, and higher management including CEOs",
          "Absence of daily monitoring or structured health check processes",
          "Increased exposure due to unpatched or misconfigured servers leading to vulnerabilities",
          "Lack of 24x7 support coverage, especially during weekends, resulting in prolonged issue resolution windows"
        ],
        solutionDetails: [
          "Active Directory Management: Implemented standardized user onboarding/offboarding workflows with group-based access control and automated membership management",
          "Monthly Server Patching: Developed structured AD patch management using WSUS and PowerShell automation with regression testing in isolated environments",
          "Daily Health Checks: Scripted automated monitoring for DC replication, DNS status, sysvol with real-time reports and SIEM integration",
          "Exchange Management: Handled mailbox provisioning, shared mailbox delegation, DL sync, and coordinated transport rule changes",
          "VIP User Support: Created dedicated support track with couple-minute response times and SLA-based ServiceNow routing for escalated visibility",
          "24x7 Support Enablement: Transitioned to follow-the-sun support model with weekend and off-hour shifts for critical incident handling",
          "Server Vulnerability Management: Introduced proactive scanning tools with hardening baselines and integrated patch compliance reporting"
        ],
        technologies: ["Active Directory", "Exchange Online", "WSUS", "PowerShell", "ServiceNow", "SIEM Tools", "Vulnerability Scanning", "Automated Monitoring"],
        objectives: [
          "Streamline and standardize Active Directory operations including user lifecycle management and group policy administration",
          "Automate and enforce monthly patching cycles to mitigate vulnerabilities",
          "Provide daily health checks to ensure proactive detection of anomalies",
          "Improve customer experience by accelerating resolution time for AD-related incidents",
          "Support Exchange operations such as mailbox provisioning, address book sync, and service integration"
        ],
        results: [
          "Resolution Improvement: 45% reduction in AD-related ticket resolution time through standardized workflows and automation",
          "Security Enhancement: 100% patch compliance across all domain controllers with automated verification and reporting",
          "Proactive Monitoring: Daily health reports preventing major outages through early anomaly detection",
          "User Satisfaction: Improved satisfaction from faster access provisioning and issue resolution",
          "VIP Support Excellence: Reduced VIP escalation response time to couple of minutes with dedicated support track",
          "Operational Efficiency: Self-healing scripts minimized manual interventions and administrative overhead",
          "Exchange Integration: Seamless coordination between AD and Exchange ensuring end-user continuity",
          "24x7 Availability: Round-the-clock coverage through follow-the-sun support model eliminating weekend delays"
        ],
        standoutElements: [
          "Automation-Driven Patching: Monthly patching with automated compliance verification reduced risk and admin overhead significantly",
          "Self-Healing Scripts: Health checks linked with auto-remediation scripts minimized manual interventions and improved reliability",
          "Seamless Exchange Integration: Tight coordination between AD and Exchange ensured end-user continuity and operational stability",
          "Hybrid AD Environment: Maintained users' information updated in Hybrid AD environment ensuring consistency across platforms",
          "User-Centric Support: Standardized knowledge and incident response accelerated user satisfaction and reduced backlog",
          "7+ Years of Excellence: Delivering unwavering, high-caliber support distinguished by consistency, precision, and operational excellence"
        ],
        testimonial: "The AD Services framework deployed has significantly enhanced our AD stability and operational efficiency. What used to take hours is now resolved in minutes, allowing us to focus more on innovation.",
        teamSize: "12+ AD specialists",
        timeline: "7+ years ongoing",
        industry: "Automotive / Travel Services"
      }
    }
  },
  {
    id: "media",
    name: "Media",
    color: "from-purple-600 to-purple-400",
    theme: "purple",
    description: "Achieving operational excellence through robust AD and Exchange online management.",
    challenges: ["High volume of account provisioning tickets", "Inconsistent health checks and manual patching", "Lack of 24x7 global support coverage"],
    solutions: ["Follow-the-sun support model", "SLA-backed incident workflows via ServiceNow", "Scripted automated health monitoring"],
    caseStudy: {
      client: "Universal Music Group (UMG)",
      title: "Active Directory Services Excellence",
      focus: "Comprehensive Active Directory management focusing on directory hygiene, service reliability, and security compliance for a global leader in music-based entertainment.",
      challenge: "UMG faced high volume AD-related support tickets causing delays, legacy manual patching practices increasing vulnerabilities, resource constraints diverting IT staff from strategic projects, and lack of 24x7 support coverage resulting in prolonged resolution windows.",
      solution: "Implemented standardized AD operations with automated monthly patching via WSUS and PowerShell, daily health checks with real-time monitoring, VIP support tracks, Exchange integration, and 24x7 follow-the-sun support model.",
      results: "Achieved 42% reduction in AD-related ticket resolution time, 100% patch compliance across all domain controllers, enhanced security posture, proactive issue resolution preventing major outages, and improved user satisfaction.",
      metrics: [
        { label: "Resolution Time", value: "-42%", detail: "AD-related ticket resolution speedup" },
        { label: "Patch Compliance", value: "100%", detail: "Across all domain controllers" },
        { label: "Support Coverage", value: "24x7", detail: "Follow-the-sun support model" },
        { label: "Service Duration", value: "7+ Years", detail: "Ongoing continuous support" },
      ],
      fullCaseStudy: {
        overview: "UMG, a global leader in music-based entertainment, operates a vast and complex IT environment supporting thousands of users across multiple regions. To maintain operational excellence and AD service continuity, UMG implemented a dedicated Active Directory Services project focusing on directory hygiene, service reliability, and security compliance.",
        keyProblems: [
          "High volume of AD-related support tickets caused delays in account provisioning, access issues, and group management",
          "Manual patching and inconsistent health checks increased vulnerability to downtime and security threats",
          "Resource constraints diverted IT staff from strategic projects, slowing innovation",
          "Exchange dependencies required precise coordination to avoid service disruptions",
          "Delays in resolving issues for VIPs, executives, and higher management including CEOs",
          "Absence of daily monitoring or structured health check processes",
          "Increased exposure due to unpatched or misconfigured servers leading to vulnerabilities",
          "Lack of 24x7 support coverage, especially during weekends, resulting in prolonged issue resolution windows"
        ],
        solutionDetails: [
          "Active Directory Management: Implemented standardized user onboarding/offboarding workflows with group-based access control and automated membership management",
          "Monthly Server Patching: Developed structured AD patch management using WSUS and PowerShell automation with regression testing in isolated environments",
          "Daily Health Checks: Scripted automated monitoring for DC replication, DNS status, sysvol with real-time reports and SIEM integration",
          "Exchange Management: Handled mailbox provisioning, shared mailbox delegation, DL sync, and coordinated transport rule changes with messaging teams",
          "VIP User Support: Created dedicated support track with couple-minute response times and SLA-based ServiceNow routing for escalated visibility",
          "24x7 Support Enablement: Transitioned to follow-the-sun support model with weekend and off-hour shifts for critical incident handling",
          "Server Vulnerability Management: Introduced proactive scanning tools with hardening baselines and integrated patch compliance reporting"
        ],
        technologies: ["Active Directory", "Exchange Online", "WSUS", "PowerShell", "ServiceNow", "SIEM Tools", "Vulnerability Scanning", "Automated Monitoring"],
        objectives: [
          "Streamline and standardize Active Directory operations including user lifecycle management and group policy administration",
          "Automate and enforce monthly patching cycles to mitigate vulnerabilities",
          "Provide daily health checks to ensure proactive detection of anomalies",
          "Improve customer experience by accelerating resolution time for AD-related incidents",
          "Support Exchange operations such as mailbox provisioning, address book sync, and service integration"
        ],
        results: [
          "Resolution Improvement: 42% reduction in AD-related ticket resolution time through standardized workflows and automation",
          "Security Enhancement: 100% patch compliance across all domain controllers with automated verification and reporting",
          "Proactive Monitoring: Daily health reports preventing major outages through early anomaly detection",
          "User Satisfaction: Improved satisfaction from faster access provisioning and issue resolution",
          "VIP Support Excellence: Reduced VIP escalation response time to couple of minutes with dedicated support track",
          "Operational Efficiency: Self-healing scripts minimized manual interventions and administrative overhead",
          "Exchange Integration: Seamless coordination between AD and Exchange ensuring end-user continuity",
          "24x7 Availability: Round-the-clock coverage through follow-the-sun support model eliminating weekend delays"
        ],
        standoutElements: [
          "Automation-Driven Patching: Monthly patching with automated compliance verification reduced risk and admin overhead significantly",
          "Self-Healing Scripts: Health checks linked with auto-remediation scripts minimized manual interventions and improved reliability",
          "Seamless Exchange Integration: Tight coordination between AD and Exchange ensured end-user continuity and operational stability",
          "Hybrid AD Environment: Maintained users' information updated in Hybrid AD environment ensuring consistency across platforms",
          "User-Centric Support: Standardized knowledge and incident response accelerated user satisfaction and reduced backlog",
          "7+ Years of Excellence: Delivering unwavering, high-caliber support distinguished by consistency, precision, and operational excellence"
        ],
        testimonial: "The AD Services framework deployed has significantly enhanced our AD stability and operational efficiency. What used to take hours is now resolved in minutes, allowing us to focus more on innovation.",
        teamSize: "18+ AD specialists",
        timeline: "7+ years ongoing",
        industry: "Media & Entertainment"
      }
    }
  }
];

// --- 2. Functional Side-Sheet Modal Component ---
const CaseStudyModal = ({ caseStudy, isOpen, onClose }: { caseStudy: any; isOpen: boolean; onClose: () => void }) => {
  if (!caseStudy) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[98vw] h-[95vh] p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl bg-white focus:outline-none [&>button]:hidden">
        <DialogTitle className="sr-only">
          {caseStudy.title} - {caseStudy.client} Case Study
        </DialogTitle>
        <div className="flex h-full flex-col md:flex-row overflow-hidden relative">
          
          {/* Premium Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-50 group p-3 bg-white shadow-lg hover:shadow-xl rounded-full transition-all duration-300 border border-slate-200 hover:border-slate-300"
          >
            <X className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
          </button>

          {/* Left: Branding & Metrics (Fixed on Desktop) */}
          <div className="w-full md:w-[38%] bg-slate-950 p-10 md:p-14 text-white flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-10 border border-blue-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                <span>Impact Verified</span>
              </div>
              
              <h2 className="text-3xl font-bold leading-tight mb-4 tracking-tight">{caseStudy.client}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">{caseStudy.focus}</p>
              
              <div className="grid grid-cols-1 gap-8">
                {caseStudy.metrics.map((m: any, i: number) => (
                  <div key={i} className="group border-l-2 border-slate-800 pl-6 hover:border-blue-500 transition-all duration-500">
                    <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors tabular-nums">{m.value}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">{m.label}</div>
                    <div className="text-xs text-slate-400 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-900">
               <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">Core Infrastructure & Tools</p>
               <div className="flex flex-wrap gap-2.5">
                 {caseStudy.fullCaseStudy?.technologies.map((t: string, i: number) => (
                   <span key={i} className="px-4 py-2 bg-slate-900/50 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold hover:bg-blue-600/10 hover:border-blue-500/50 transition-all cursor-default">
                     {t}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          {/* Right: Narrative Detail (Scrollable) */}
          <div className="flex-1 bg-white overflow-y-auto p-10 md:p-20 custom-scrollbar scroll-smooth">
            <div className="max-w-2xl mx-auto">
              
              {/* Executive Summary Section */}
              <section className="mb-20">
                <div className="flex items-center space-x-3 mb-6">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">Executive Summary</h3>
                </div>
                <p className="text-lg text-slate-800 leading-relaxed font-semibold mb-8">
                  {caseStudy.title}
                </p>
                <div className="bg-slate-50 p-8 rounded-[2rem] border-l-8 border-blue-500 mb-8">
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {caseStudy.fullCaseStudy?.overview}
                  </p>
                  {caseStudy.fullCaseStudy?.industry && (
                    <div className="flex items-center text-sm text-slate-500">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="font-semibold">Industry:</span>
                      <span className="ml-2">{caseStudy.fullCaseStudy.industry}</span>
                      {caseStudy.fullCaseStudy?.timeline && (
                        <>
                          <span className="mx-3">•</span>
                          <span className="font-semibold">Timeline:</span>
                          <span className="ml-2">{caseStudy.fullCaseStudy.timeline}</span>
                        </>
                      )}
                      {caseStudy.fullCaseStudy?.teamSize && (
                        <>
                          <span className="mx-3">•</span>
                          <span className="font-semibold">Team:</span>
                          <span className="ml-2">{caseStudy.fullCaseStudy.teamSize}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Objectives Section */}
                {caseStudy.fullCaseStudy?.objectives && (
                  <div className="mb-10">
                    <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Key Objectives
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {caseStudy.fullCaseStudy.objectives.map((obj: string, i: number) => (
                        <div key={i} className="flex items-start text-slate-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Problem/Solution Bento */}
              <div className="space-y-20">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-8 flex items-center border-b border-slate-100 pb-4">
                    <Activity className="mr-3 h-5 w-5 text-red-500" /> Critical Challenges
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.fullCaseStudy?.keyProblems.map((p: string, i: number) => (
                      <div key={i} className="flex items-start text-slate-600 text-sm p-6 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all group">
                        <span className="h-2 w-2 rounded-full bg-red-400 mt-2 mr-6 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="leading-relaxed text-base">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-8 flex items-center border-b border-slate-100 pb-4">
                    <Zap className="mr-3 h-5 w-5 text-yellow-500" /> Strategic Solutions
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.fullCaseStudy?.solutionDetails.map((s: string, i: number) => (
                      <div key={i} className="flex items-start text-slate-700 text-sm bg-blue-50/30 p-6 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors group">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-5 shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                        <span className="leading-relaxed font-medium text-base">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                {caseStudy.fullCaseStudy?.results && (
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-8 flex items-center border-b border-slate-100 pb-4">
                      <Globe className="mr-3 h-5 w-5 text-green-500" /> Results & Improvements
                    </h3>
                    <div className="grid grid-cols-1 gap-4 mb-20">
                      {caseStudy.fullCaseStudy.results.map((result: string, i: number) => (
                        <div key={i} className="flex items-start text-slate-700 text-sm bg-green-50/30 p-6 rounded-2xl border border-green-100 hover:bg-green-50 transition-colors group">
                          <Shield className="h-5 w-5 text-green-600 mr-5 shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                          <span className="leading-relaxed font-medium text-base">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Standout Elements */}
                {caseStudy.fullCaseStudy?.standoutElements && (
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-8 flex items-center border-b border-slate-100 pb-4">
                      <Cpu className="mr-3 h-5 w-5 text-purple-500" /> Standout Elements
                    </h3>
                    <div className="grid grid-cols-1 gap-4 mb-20">
                      {caseStudy.fullCaseStudy.standoutElements.map((element: string, i: number) => (
                        <div key={i} className="flex items-start text-slate-700 text-sm bg-purple-50/30 p-6 rounded-2xl border border-purple-100 hover:bg-purple-50 transition-colors group">
                          <span className="h-2 w-2 rounded-full bg-purple-500 mt-2 mr-6 shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="leading-relaxed font-medium text-base">{element}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* End of content sections */}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// --- 3. Main Industries Page Component ---
export default function IndustriesPage() {
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Industries We Serve - Specialized Sector Solutions"
        description="NathCorp delivers precision digital transformation for Aviation, Technology, Manufacturing, and more."
      />

      <main className="min-h-screen bg-[#FBFBFC]">
        <Navbar />
        <PageHeader 
          title="Industries We Serve" 
          subtitle="Precision engineering for the world's most critical sectors." 
          backgroundImage="/images/industries-hero.png" 
        />
        <ClientLogosCarousel />

        <section className="py-24" ref={contentRef}>
          <div className="container mx-auto px-4">
            <Tabs defaultValue="technology" className="w-full">
              
              {/* Modern Navigation Switcher */}
              <div className="flex justify-start lg:justify-center mb-20 overflow-x-auto no-scrollbar pb-4">
                <TabsList className="bg-white p-1.5 rounded-[1.5rem] shadow-sm border border-slate-100 h-auto flex-nowrap space-x-1">
                  {industries.map((ind) => (
                    <TabsTrigger
                      key={ind.id}
                      value={ind.id}
                      className="rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wider data-[state=active]:bg-slate-950 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-500"
                    >
                      {ind.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {industries.map((industry) => (
                <TabsContent key={industry.id} value={industry.id} className="focus-visible:outline-none">
                  <div className="space-y-32">
                    
                    {/* Bento Industry Layout with Blockchain Background */}
                    <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                      {/* Blockchain image as full section background */}
                      <Image 
                        src="/images/Futuristic Blockchain Animation.png" 
                        alt="Blockchain Technology Background" 
                        fill 
                        className="object-cover object-center" 
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
                      
                      {/* Content over background */}
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 p-12 lg:p-20">
                        <div className="lg:col-span-7 flex flex-col justify-center">
                          <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.7 }}
                          >
                            <span className={`text-[11px] font-black tracking-[0.4em] uppercase mb-6 text-blue-400 inline-flex items-center`}>
                              <div className="w-10 h-[1px] bg-blue-400 mr-4" />
                              Sector Expertise
                            </span>
                            <h3 className="text-4xl lg:text-5xl font-bold mb-10 text-white tracking-tight leading-tight">
                              {industry.description}
                            </h3>
                          </motion.div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Critical Pain Points</h4>
                              <ul className="space-y-4">
                                {industry.challenges.map((c, i) => (
                                  <li key={i} className="flex items-start text-slate-200 text-base font-medium leading-relaxed group">
                                    <Shield className="h-5 w-5 text-red-400 mr-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" /> {c}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-6">
                              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Nathcorp Edge</h4>
                              <ul className="space-y-4">
                                {industry.solutions.map((s, i) => (
                                  <li key={i} className="flex items-start text-white text-base font-bold leading-relaxed group">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" /> {s}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col justify-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8 border border-white/20">
                            <p className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-300">Infrastructure Spotlight</p>
                            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                              {industry.name} Lifecycle Management
                            </h3>
                            <p className="text-white/90 text-base leading-relaxed">
                              Advanced technology infrastructure with secure, scalable solutions built for the future of digital transformation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Featured Impact Card (Bento Case Study) */}
                    <div className="relative pt-20 border-t border-slate-100">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4 inline-flex items-center">
                                <Activity className="w-4 h-4 mr-3" /> Case Study Showcase
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                                Proven Outcomes with {industry.caseStudy.client}
                            </h2>
                        </div>
                        <p className="text-slate-500 text-lg font-medium max-w-lg">
                            Real-world verification of our digital transformation methodologies.
                        </p>
                      </div>

                      <Card className="bg-white rounded-[3.5rem] border-none shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
                        <CardContent className="p-0 flex flex-col lg:flex-row min-h-[500px]">
                          
                          <div className={`lg:w-[30%] bg-gradient-to-br ${industry.color} p-12 md:p-16 text-white flex flex-col justify-between relative`}>
                            <div className="space-y-12">
                              {industry.caseStudy.metrics.map((m, i) => (
                                <div key={i} className="relative z-10">
                                  <div className="text-3xl font-bold mb-2 tracking-tight tabular-nums">{m.value}</div>
                                  <div className="text-xs uppercase font-bold tracking-wide text-white/60">{m.label}</div>
                                </div>
                              ))}
                            </div>
                            {/* Abstract Design Element */}
                            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                                <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="100" cy="0" r="80" fill="white" /></svg>
                            </div>
                          </div>

                          <div className="lg:w-[70%] p-12 md:p-20 bg-white flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                {industry.caseStudy.title}
                            </h3>
                            <p className="text-slate-600 mb-12 text-lg leading-relaxed font-medium">
                                {industry.caseStudy.challenge}
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <Button 
                                    onClick={() => setSelectedCaseStudy(industry.caseStudy)} 
                                    className="bg-slate-950 hover:bg-slate-800 text-white rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 h-auto text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto whitespace-nowrap"
                                >
                                    Deep Dive Analysis <ArrowRight className="ml-2 sm:ml-3 md:ml-4 h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                                <span className="hidden md:block h-12 w-px bg-slate-200" />
                                {/* Removed industry.caseStudy.industry as it does not exist */}
                            </div>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Global Performance Section */}
        <section className="py-32 bg-slate-950 relative overflow-hidden" ref={statsRef}>
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                className="text-3xl md:text-4xl font-bold text-white mb-20 tracking-tight"
            >
                Unwavering Operational Excellence
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
              {[
                { val: "15+", label: "Fortune 500 Partners", color: "text-blue-500", icon: Globe },
                { val: "99.9%", label: "Uptime Verified", color: "text-emerald-500", icon: Activity },
                { val: "50%", label: "Average OpEx Gain", color: "text-yellow-500", icon: ArrowUpRight },
                { val: "18+", label: "Years of Trust", color: "text-purple-500", icon: CheckCircle },
              ].map((stat, i) => (
                <div key={i} className="group bg-white/[0.03] p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-white/[0.08] hover:bg-white/[0.06] transition-all hover:-translate-y-2 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-center items-center text-center">
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 ${stat.color} tracking-tight tabular-nums`}>{stat.val}</div>
                  <div className="text-xs sm:text-sm md:text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 sm:mb-5 md:mb-6 px-2 leading-tight">{stat.label}</div>
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto text-slate-700 group-hover:text-slate-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#FBFBFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-[3rem] overflow-hidden shadow-xl">
                {/* Background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 opacity-[0.02]" 
                     style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                
                {/* Content */}
                <div className="relative z-10 text-center p-12 md:p-16">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xs font-bold tracking-wider uppercase mb-4 text-blue-400 inline-flex items-center">
                      <div className="w-6 h-[1px] bg-blue-400 mr-3" />
                      Ready to Transform
                      <div className="w-6 h-[1px] bg-blue-400 ml-3" />
                    </span>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                      Engineered For Your Success
                    </h2>
                    
                    <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium">
                      Deploy industry-specific methodologies designed by specialists for high-consequence environments.
                    </p>
                    
                    {/* Quick trust indicators */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm text-slate-400">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Fortune 500 Trusted</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>99.9% Uptime</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span>18+ Years Experience</span>
                      </div>
                    </div>

                    <ContactFormModal
                      triggerText="Get Started"
                      triggerClassName="bg-white text-slate-900 hover:bg-blue-50 rounded-full px-8 py-4 h-auto text-sm font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 inline-flex items-center space-x-2"
                      serviceName="Strategic Industry Audit"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Immersive Case Study Sheet */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <CaseStudyModal
              caseStudy={selectedCaseStudy}
              isOpen={!!selectedCaseStudy}
              onClose={() => setSelectedCaseStudy(null)}
            />
          )}
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}