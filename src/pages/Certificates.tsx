import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Clock, Users, Star, Search, Award, Code as CodeIcon, Cloud, Shield, Database, Layers, Globe, Zap, BookOpen, XCircle, Home, ChevronDown, Filter } from "lucide-react";

// --- Data and Helper Functions ---

const tagIcons: Record<string, any> = {
  Cloud: Cloud, AWS: Cloud, GCP: Cloud, Azure: Cloud, Kubernetes: Layers, Docker: Layers,
  Security: Shield, Java: CodeIcon, Python: CodeIcon, React: CodeIcon, Node: CodeIcon,
  Data: Database, Analytics: Database, Machine: Zap, AI: Zap, Project: BookOpen,
  Management: BookOpen, Web: Globe, Frontend: Globe, Backend: Database, Mobile: Users,
  Blockchain: Layers, Linux: CodeIcon, Testing: Shield, Business: BookOpen, Marketing: Globe,
  Design: BookOpen, ERP: Layers, Game: Zap, 'C++': CodeIcon, PHP: CodeIcon, Ruby: CodeIcon,
  Go: CodeIcon, Rust: CodeIcon, Jira: BookOpen, Splunk: Database, ServiceNow: Database,
  Snowflake: Database, Databricks: Database, Salesforce: Globe, SAP: Layers, VMware: Cloud,
  Big: Database, IoT: Cloud, Unity: Zap, Unreal: Zap, Atlassian: BookOpen, ITIL: BookOpen,
  COBIT: BookOpen, Digital: Globe, Bitcoin: Layers, Ethereum: Layers, Hyperledger: Layers,
};

const getCertIcon = (tags: string[]) => {
  for (const tag of tags) { if (tagIcons[tag]) return tagIcons[tag]; }
  return Award;
};

// --- FULL CERTIFICATE DATA (100+) with `paid` property ---
const certificates = [
    // Cloud Computing
    { title: "AWS Certified Solutions Architect", provider: "Amazon Web Services", duration: "3-6 months", level: "Professional", rating: 4.8, students: "50K+", description: "Design and deploy scalable AWS solutions", link: "https://aws.amazon.com/certification/", tags: ["Cloud", "AWS", "Architecture"], paid: true },
    { title: "Google Cloud Professional Cloud Architect", provider: "Google Cloud", duration: "4-8 months", level: "Professional", rating: 4.7, students: "25K+", description: "Design and manage Google Cloud solutions", link: "https://cloud.google.com/certification/", tags: ["Cloud", "GCP", "Architecture"], paid: true },
    { title: "Microsoft Azure Fundamentals", provider: "Microsoft", duration: "1-2 months", level: "Beginner", rating: 4.6, students: "100K+", description: "Learn Azure cloud services fundamentals", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Cloud", "Azure", "Fundamentals"], paid: true },
    { title: "AWS Certified Developer", provider: "Amazon Web Services", duration: "2-4 months", level: "Professional", rating: 4.7, students: "40K+", description: "Develop applications on AWS platform", link: "https://aws.amazon.com/certification/", tags: ["AWS", "Development", "Cloud"], paid: true },
    { title: "Google Cloud Associate Cloud Engineer", provider: "Google Cloud", duration: "2-3 months", level: "Intermediate", rating: 4.5, students: "30K+", description: "Deploy and manage Google Cloud solutions", link: "https://cloud.google.com/certification/", tags: ["GCP", "Engineering", "Cloud"], paid: true },
    { title: "Azure Administrator Associate", provider: "Microsoft", duration: "3-4 months", level: "Intermediate", rating: 4.6, students: "35K+", description: "Manage Azure subscriptions and resources", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "Administration", "Cloud"], paid: true },
    { title: "AWS Certified SysOps Administrator", provider: "Amazon Web Services", duration: "3-5 months", level: "Professional", rating: 4.5, students: "20K+", description: "Deploy and manage AWS systems", link: "https://aws.amazon.com/certification/", tags: ["AWS", "SysOps", "Administration"], paid: true },
    { title: "Google Cloud Professional DevOps Engineer", provider: "Google Cloud", duration: "4-6 months", level: "Advanced", rating: 4.8, students: "15K+", description: "Implement DevOps practices on GCP", link: "https://cloud.google.com/certification/", tags: ["GCP", "DevOps", "Engineering"], paid: true },
    
    // DevOps & Containers
    { title: "Certified Kubernetes Administrator", provider: "Cloud Native Computing Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.9, students: "15K+", description: "Master Kubernetes cluster administration", link: "https://www.cncf.io/certification/cka/", tags: ["Kubernetes", "DevOps", "Containers"], paid: true },
    { title: "Docker Certified Associate", provider: "Docker", duration: "1-3 months", level: "Intermediate", rating: 4.5, students: "30K+", description: "Containerization and Docker expertise", link: "https://www.docker.com/certification/", tags: ["Docker", "Containers", "DevOps"], paid: true },
    { title: "Certified Kubernetes Application Developer", provider: "CNCF", duration: "2-3 months", level: "Intermediate", rating: 4.7, students: "12K+", description: "Develop applications for Kubernetes", link: "https://www.cncf.io/certification/ckad/", tags: ["Kubernetes", "Development", "Containers"], paid: true },
    { title: "Jenkins Certified Engineer", provider: "CloudBees", duration: "1-2 months", level: "Intermediate", rating: 4.3, students: "8K+", description: "Master Jenkins CI/CD pipelines", link: "https://www.cloudbees.com/jenkins/certification", tags: ["Jenkins", "CI/CD", "DevOps"], paid: true },
    { title: "Terraform Associate", provider: "HashiCorp", duration: "2-3 months", level: "Intermediate", rating: 4.6, students: "18K+", description: "Infrastructure as Code with Terraform", link: "https://www.hashicorp.com/certification/terraform-associate", tags: ["Terraform", "IaC", "DevOps"], paid: true },
    { title: "Ansible Automation Platform", provider: "Red Hat", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "10K+", description: "Automate IT infrastructure with Ansible", link: "https://www.redhat.com/en/services/certification", tags: ["Ansible", "Automation", "DevOps"], paid: true },
    
    // Cybersecurity
    { title: "Certified Ethical Hacker", provider: "EC-Council", duration: "3-6 months", level: "Advanced", rating: 4.4, students: "40K+", description: "Ethical hacking and penetration testing", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", tags: ["Security", "Ethical Hacking", "Penetration Testing"], paid: true },
    { title: "CISSP", provider: "ISC2", duration: "6-12 months", level: "Advanced", rating: 4.7, students: "25K+", description: "Information Systems Security Professional", link: "https://www.isc2.org/Certifications/CISSP", tags: ["Security", "Risk Management", "Governance"], paid: true },
    { title: "CompTIA Security+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "60K+", description: "Foundation-level cybersecurity skills", link: "https://www.comptia.org/certifications/security", tags: ["Security", "CompTIA", "Fundamentals"], paid: true },
    { title: "CISM", provider: "ISACA", duration: "4-8 months", level: "Advanced", rating: 4.6, students: "15K+", description: "Certified Information Security Manager", link: "https://www.isaca.org/credentialing/cism", tags: ["Security", "Management", "Governance"], paid: true },
    { title: "CISA", provider: "ISACA", duration: "4-8 months", level: "Advanced", rating: 4.5, students: "12K+", description: "Certified Information Systems Auditor", link: "https://www.isaca.org/credentialing/cisa", tags: ["Security", "Audit", "Risk"], paid: true },
    
    // Programming & Development
    { title: "Oracle Certified Professional Java", provider: "Oracle", duration: "3-6 months", level: "Professional", rating: 4.6, students: "45K+", description: "Master Java programming language", link: "https://education.oracle.com/java", tags: ["Java", "Programming", "Oracle"], paid: true },
    { title: "Microsoft Certified: Azure Developer", provider: "Microsoft", duration: "3-5 months", level: "Professional", rating: 4.5, students: "28K+", description: "Develop solutions for Microsoft Azure", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "Development", "Microsoft"], paid: true },
    { title: "Python Institute PCAP", provider: "Python Institute", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "22K+", description: "Certified Associate Python Programmer", link: "https://pythoninstitute.org/pcap", tags: ["Python", "Programming", "Development"], paid: true },
    { title: "React Developer Certification", provider: "Meta", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "35K+", description: "Build modern web applications with React", link: "https://developers.facebook.com/developercircles/", tags: ["React", "JavaScript", "Frontend"], paid: true },
    { title: "Node.js Application Developer", provider: "OpenJS Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "18K+", description: "Server-side JavaScript development", link: "https://openjsf.org/certification/", tags: ["Node.js", "JavaScript", "Backend"], paid: true },
    
    // Data Science & Analytics
    { title: "Google Data Analytics Certificate", provider: "Google", duration: "3-6 months", level: "Beginner", rating: 4.7, students: "150K+", description: "Analyze data and gain insights", link: "https://grow.google/certificates/data-analytics/", tags: ["Data Analytics", "Google", "Business Intelligence"], paid: true },
    { title: "IBM Data Science Professional", provider: "IBM", duration: "4-8 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Complete data science methodology", link: "https://www.ibm.com/training/badge/data-science-professional-certificate-v2", tags: ["Data Science", "IBM", "Machine Learning"], paid: true },
    { title: "Microsoft Power BI Data Analyst", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "40K+", description: "Business intelligence and data visualization", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Power BI", "Analytics", "Visualization"], paid: true },
    { title: "Tableau Desktop Specialist", provider: "Tableau", duration: "1-3 months", level: "Beginner", rating: 4.4, students: "25K+", description: "Data visualization with Tableau", link: "https://www.tableau.com/learn/certification", tags: ["Tableau", "Visualization", "Analytics"], paid: true },
    { title: "SAS Certified Specialist", provider: "SAS", duration: "3-5 months", level: "Intermediate", rating: 4.3, students: "15K+", description: "Statistical analysis and data management", link: "https://www.sas.com/en_us/certification.html", tags: ["SAS", "Statistics", "Analytics"], paid: true },
    
    // Machine Learning & AI
    { title: "Google Machine Learning Engineer", provider: "Google Cloud", duration: "4-8 months", level: "Advanced", rating: 4.8, students: "20K+", description: "Design and implement ML solutions", link: "https://cloud.google.com/certification/", tags: ["Machine Learning", "GCP", "AI"], paid: true },
    { title: "AWS Certified Machine Learning", provider: "Amazon Web Services", duration: "4-8 months", level: "Advanced", rating: 4.7, students: "18K+", description: "ML solutions on AWS platform", link: "https://aws.amazon.com/certification/", tags: ["Machine Learning", "AWS", "AI"], paid: true },
    { title: "TensorFlow Developer Certificate", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "30K+", description: "Build ML models with TensorFlow", link: "https://www.tensorflow.org/certificate", tags: ["TensorFlow", "Deep Learning", "AI"], paid: true },
    { title: "Azure AI Engineer Associate", provider: "Microsoft", duration: "3-5 months", level: "Professional", rating: 4.5, students: "12K+", description: "Design AI solutions on Azure", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "AI", "Machine Learning"], paid: true },
    
    // Database Management
    { title: "Oracle Database Administrator", provider: "Oracle", duration: "4-8 months", level: "Professional", rating: 4.6, students: "20K+", description: "Manage Oracle database systems", link: "https://education.oracle.com/database", tags: ["Oracle", "Database", "Administration"], paid: true },
    { title: "Microsoft SQL Server DBA", provider: "Microsoft", duration: "3-6 months", level: "Professional", rating: 4.4, students: "25K+", description: "SQL Server database administration", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["SQL Server", "Database", "Microsoft"], paid: true },
    { title: "MongoDB Certified Developer", provider: "MongoDB", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "15K+", description: "NoSQL database development", link: "https://university.mongodb.com/certification", tags: ["MongoDB", "NoSQL", "Database"], paid: true },
    { title: "MySQL Database Administrator", provider: "Oracle", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "18K+", description: "MySQL database management", link: "https://education.oracle.com/mysql", tags: ["MySQL", "Database", "Administration"], paid: true },
    
    // Project Management
    { title: "PMP Certification", provider: "PMI", duration: "4-8 months", level: "Professional", rating: 4.7, students: "200K+", description: "Project Management Professional", link: "https://www.pmi.org/certifications/project-management-pmp", tags: ["Project Management", "PMI", "Leadership"], paid: true },
    { title: "Certified Scrum Master", provider: "Scrum Alliance", duration: "1-2 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Agile project management with Scrum", link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster", tags: ["Scrum", "Agile", "Management"], paid: true },
    { title: "PRINCE2 Foundation", provider: "AXELOS", duration: "2-3 months", level: "Beginner", rating: 4.4, students: "50K+", description: "Structured project management method", link: "https://www.axelos.com/certifications/prince2", tags: ["PRINCE2", "Project Management", "Methodology"], paid: true },
    { title: "Agile Certified Practitioner", provider: "PMI", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "35K+", description: "Agile project management practices", link: "https://www.pmi.org/certifications/agile-acp", tags: ["Agile", "PMI", "Project Management"], paid: true },
    
    // Web Development
    { title: "Google UX Design Certificate", provider: "Google", duration: "3-6 months", level: "Beginner", rating: 4.6, students: "120K+", description: "User experience design fundamentals", link: "https://grow.google/certificates/ux-design/", tags: ["UX Design", "Google", "Design"], paid: true },
    { title: "Adobe Certified Expert", provider: "Adobe", duration: "2-4 months", level: "Professional", rating: 4.4, students: "30K+", description: "Master Adobe Creative Suite", link: "https://www.adobe.com/training/certification.html", tags: ["Adobe", "Design", "Creative"], paid: true },
    { title: "W3C Frontend Developer", provider: "W3C via edX", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "25K+", description: "Modern frontend web development", link: "https://www.w3.org/", tags: ["Frontend", "HTML", "CSS"], paid: true },
    { title: "Vue.js Developer Certification", provider: "Vue School", duration: "1-3 months", level: "Intermediate", rating: 4.5, students: "15K+", description: "Progressive JavaScript framework", link: "https://vueschool.io/", tags: ["Vue.js", "JavaScript", "Frontend"], paid: true },
    { title: "Angular Developer Certification", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "20K+", description: "Build dynamic web applications", link: "https://developers.google.com/certification/", tags: ["Angular", "TypeScript", "Frontend"], paid: true },
    
    // Mobile Development
    { title: "Android Developer Certification", provider: "Google", duration: "3-6 months", level: "Intermediate", rating: 4.5, students: "40K+", description: "Build Android mobile applications", link: "https://developers.google.com/certification/", tags: ["Android", "Mobile", "Java"], paid: true },
    { title: "iOS Developer Certification", provider: "Apple", duration: "3-6 months", level: "Intermediate", rating: 4.6, students: "30K+", description: "Develop apps for iOS platform", link: "https://developer.apple.com/certification/", tags: ["iOS", "Swift", "Mobile"], paid: true },
    { title: "React Native Developer", provider: "Meta", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "25K+", description: "Cross-platform mobile development", link: "https://reactnative.dev/", tags: ["React Native", "Mobile", "JavaScript"], paid: false },
    { title: "Flutter Developer Certification", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "20K+", description: "Cross-platform app development", link: "https://flutter.dev/", tags: ["Flutter", "Dart", "Mobile"], paid: true },
    
    // Networking
    { title: "Cisco CCNA", provider: "Cisco", duration: "3-6 months", level: "Professional", rating: 4.7, students: "100K+", description: "Network Associate certification", link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html", tags: ["Cisco", "Networking", "Infrastructure"], paid: true },
    { title: "CompTIA Network+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Networking fundamentals and protocols", link: "https://www.comptia.org/certifications/network", tags: ["CompTIA", "Networking", "Infrastructure"], paid: true },
    { title: "Juniper JNCIA", provider: "Juniper Networks", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "15K+", description: "Junos associate certification", link: "https://www.juniper.net/us/en/training/certification/", tags: ["Juniper", "Networking", "Junos"], paid: true },
    { title: "Fortinet NSE", provider: "Fortinet", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "12K+", description: "Network Security Expert", link: "https://www.fortinet.com/training/cybersecurity-professionals", tags: ["Fortinet", "Security", "Networking"], paid: true },
    
    // Linux & System Administration
    { title: "Red Hat Certified Engineer", provider: "Red Hat", duration: "4-8 months", level: "Professional", rating: 4.8, students: "25K+", description: "Advanced Linux system administration", link: "https://www.redhat.com/en/services/certification/rhce", tags: ["Red Hat", "Linux", "System Administration"], paid: true },
    { title: "CompTIA Linux+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "35K+", description: "Linux system administration skills", link: "https://www.comptia.org/certifications/linux", tags: ["CompTIA", "Linux", "System Administration"], paid: true },
    { title: "Ubuntu Certified Professional", provider: "Canonical", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "18K+", description: "Ubuntu Linux administration", link: "https://ubuntu.com/certification", tags: ["Ubuntu", "Linux", "Canonical"], paid: true },
    { title: "SUSE Certified Administrator", provider: "SUSE", duration: "2-4 months", level: "Intermediate", rating: 4.2, students: "10K+", description: "SUSE Linux Enterprise administration", link: "https://www.suse.com/training/", tags: ["SUSE", "Linux", "Enterprise"], paid: true },
    
    // Quality Assurance
    { title: "ISTQB Foundation Level", provider: "ISTQB", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "150K+", description: "Software testing fundamentals", link: "https://www.istqb.org/", tags: ["Testing", "Quality Assurance", "ISTQB"], paid: true },
    { title: "Selenium WebDriver", provider: "Selenium", duration: "1-3 months", level: "Intermediate", rating: 4.4, students: "40K+", description: "Automated web testing", link: "https://selenium.dev/", tags: ["Selenium", "Automation", "Testing"], paid: false },
    { title: "Certified Tester Advanced Level", provider: "ISTQB", duration: "3-6 months", level: "Advanced", rating: 4.6, students: "50K+", description: "Advanced software testing", link: "https://www.istqb.org/", tags: ["Testing", "Advanced", "ISTQB"], paid: true },
    
    // Business Analysis
    { title: "CBAP Certification", provider: "IIBA", duration: "4-8 months", level: "Professional", rating: 4.6, students: "30K+", description: "Certified Business Analysis Professional", link: "https://www.iiba.org/career-resources/a-business-analysts-guide-to-career-development/certifications/cbap/", tags: ["Business Analysis", "IIBA", "Requirements"], paid: true },
    { title: "PMI-PBA", provider: "PMI", duration: "3-6 months", level: "Professional", rating: 4.5, students: "20K+", description: "Professional in Business Analysis", link: "https://www.pmi.org/certifications/business-analysis-pba", tags: ["Business Analysis", "PMI", "Requirements"], paid: true },
    
    // Digital Marketing
    { title: "Google Ads Certification", provider: "Google", duration: "1-2 months", level: "Beginner", rating: 4.4, students: "200K+", description: "Online advertising with Google Ads", link: "https://skillshop.withgoogle.com/", tags: ["Google Ads", "Marketing", "Advertising"], paid: false },
    { title: "Google Analytics Certified", provider: "Google", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "180K+", description: "Web analytics and data insights", link: "https://skillshop.withgoogle.com/", tags: ["Google Analytics", "Marketing", "Analytics"], paid: false },
    { title: "Facebook Blueprint Certification", provider: "Meta", duration: "1-3 months", level: "Intermediate", rating: 4.3, students: "100K+", description: "Social media marketing expertise", link: "https://www.facebook.com/business/learn", tags: ["Facebook", "Social Media", "Marketing"], paid: true },
    { title: "HubSpot Content Marketing", provider: "HubSpot", duration: "1-2 months", level: "Beginner", rating: 4.4, students: "80K+", description: "Inbound marketing strategies", link: "https://academy.hubspot.com/", tags: ["HubSpot", "Content Marketing", "Inbound"], paid: false },
    
    // Blockchain & Cryptocurrency
    { title: "Certified Bitcoin Professional", provider: "CryptoCurrency Certification Consortium", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "15K+", description: "Bitcoin and blockchain fundamentals", link: "https://cryptoconsortium.org/certifications/CBP", tags: ["Bitcoin", "Blockchain", "Cryptocurrency"], paid: true },
    { title: "Ethereum Developer Certification", provider: "ConsenSys", duration: "3-6 months", level: "Advanced", rating: 4.5, students: "12K+", description: "Smart contract development", link: "https://consensys.net/academy/", tags: ["Ethereum", "Smart Contracts", "Blockchain"], paid: true },
    { title: "Hyperledger Fabric Developer", provider: "Linux Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "8K+", description: "Enterprise blockchain development", link: "https://www.hyperledger.org/", tags: ["Hyperledger", "Blockchain", "Enterprise"], paid: true },
    
    // IT Service Management
    { title: "ITIL 4 Foundation", provider: "AXELOS", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "300K+", description: "IT service management best practices", link: "https://www.axelos.com/certifications/itil-service-management", tags: ["ITIL", "Service Management", "ITSM"], paid: true },
    { title: "COBIT 2019 Foundation", provider: "ISACA", duration: "2-3 months", level: "Intermediate", rating: 4.4, students: "40K+", description: "IT governance framework", link: "https://www.isaca.org/credentialing/cobit", tags: ["COBIT", "Governance", "Framework"], paid: true },
    
    // Salesforce
    { title: "Salesforce Administrator", provider: "Salesforce", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "100K+", description: "Salesforce platform administration", link: "https://trailhead.salesforce.com/credentials/administrator", tags: ["Salesforce", "CRM", "Administration"], paid: true },
    { title: "Salesforce Developer", provider: "Salesforce", duration: "3-6 months", level: "Professional", rating: 4.5, students: "60K+", description: "Custom Salesforce development", link: "https://trailhead.salesforce.com/credentials/platformdeveloper", tags: ["Salesforce", "Development", "Apex"], paid: true },
    { title: "Salesforce Consultant", provider: "Salesforce", duration: "4-8 months", level: "Professional", rating: 4.7, students: "40K+", description: "Salesforce implementation consulting", link: "https://trailhead.salesforce.com/credentials/consultant", tags: ["Salesforce", "Consulting", "Implementation"], paid: true },
    
    // SAP
    { title: "SAP Certified Application Associate", provider: "SAP", duration: "3-6 months", level: "Professional", rating: 4.4, students: "50K+", description: "SAP ERP system expertise", link: "https://training.sap.com/certification", tags: ["SAP", "ERP", "Enterprise"], paid: true },
    { title: "SAP HANA Developer", provider: "SAP", duration: "2-4 months", level: "Professional", rating: 4.3, students: "15K+", description: "In-memory database development", link: "https://training.sap.com/certification", tags: ["SAP HANA", "Database", "Development"], paid: true },
    
    // Virtualization
    { title: "VMware Certified Professional", provider: "VMware", duration: "3-6 months", level: "Professional", rating: 4.6, students: "80K+", description: "Virtualization and cloud infrastructure", link: "https://www.vmware.com/education-services/certification.html", tags: ["VMware", "Virtualization", "Infrastructure"], paid: true },
    { title: "Microsoft Hyper-V", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "25K+", description: "Windows Server virtualization", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Hyper-V", "Virtualization", "Windows Server"], paid: true },
    
    // Big Data
    { title: "Cloudera Data Engineer", provider: "Cloudera", duration: "3-6 months", level: "Professional", rating: 4.5, students: "20K+", description: "Big data engineering with Hadoop", link: "https://www.cloudera.com/about/training/certification.html", tags: ["Cloudera", "Big Data", "Hadoop"], paid: true },
    { title: "Apache Spark Developer", provider: "Databricks", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "15K+", description: "Distributed data processing", link: "https://academy.databricks.com/", tags: ["Spark", "Big Data", "Analytics"], paid: true },
    { title: "Elastic Certified Engineer", provider: "Elastic", duration: "2-3 months", level: "Intermediate", rating: 4.4, students: "12K+", description: "Elasticsearch and data search", link: "https://www.elastic.co/training/certification", tags: ["Elasticsearch", "Search", "Analytics"], paid: true },
    
    // IoT
    { title: "AWS IoT Core Developer", provider: "Amazon Web Services", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "10K+", description: "Internet of Things solutions", link: "https://aws.amazon.com/certification/", tags: ["IoT", "AWS", "Connected Devices"], paid: true },
    { title: "Microsoft Azure IoT Developer", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "8K+", description: "IoT solutions on Azure platform", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure IoT", "IoT", "Cloud"], paid: true },
    
    // Game Development
    { title: "Unity Certified Developer", provider: "Unity Technologies", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "25K+", description: "Game development with Unity", link: "https://unity.com/products/unity-certifications", tags: ["Unity", "Game Development", "C#"], paid: true },
    { title: "Unreal Engine Developer", provider: "Epic Games", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "15K+", description: "Game development with Unreal Engine", link: "https://www.unrealengine.com/", tags: ["Unreal Engine", "Game Development", "C++"], paid: false },
    
    // Additional Programming Languages
    { title: "C++ Certified Associate", provider: "C++ Institute", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "20K+", description: "C++ programming fundamentals", link: "https://cppinstitute.org/", tags: ["C++", "Programming", "Systems"], paid: true },
    { title: "PHP Zend Certified Engineer", provider: "Zend", duration: "2-3 months", level: "Professional", rating: 4.2, students: "15K+", description: "PHP web development expertise", link: "https://www.zend.com/training/php-certification-exam", tags: ["PHP", "Web Development", "Backend"], paid: true },
    { title: "Ruby Association Certified", provider: "Ruby Association", duration: "1-3 months", level: "Intermediate", rating: 4.3, students: "12K+", description: "Ruby programming language", link: "https://www.ruby.or.jp/en/certification/examination/", tags: ["Ruby", "Programming", "Web"], paid: true },
    { title: "Go Developer Certification", provider: "Google", duration: "1-3 months", level: "Intermediate", rating: 4.4, students: "18K+", description: "Go programming language", link: "https://golang.org/", tags: ["Go", "Programming", "Backend"], paid: false },
    { title: "Rust Programming Certification", provider: "Rust Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "10K+", description: "Systems programming with Rust", link: "https://www.rust-lang.org/", tags: ["Rust", "Systems Programming", "Performance"], paid: false },
    
    // Additional Specialized Areas
    { title: "Atlassian Certified Jira Administrator", provider: "Atlassian", duration: "1-2 months", level: "Intermediate", rating: 4.4, students: "30K+", description: "Project tracking and management", link: "https://www.atlassian.com/university/certification", tags: ["Jira", "Project Management", "Atlassian"], paid: true },
    { title: "Splunk Core Certified User", provider: "Splunk", duration: "1-3 months", level: "Beginner", rating: 4.3, students: "20K+", description: "Machine data analytics platform", link: "https://www.splunk.com/en_us/training.html", tags: ["Splunk", "Analytics", "Monitoring"], paid: true },
    { title: "ServiceNow Certified System Administrator", provider: "ServiceNow", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "25K+", description: "IT service management platform", link: "https://www.servicenow.com/services/training-and-certification.html", tags: ["ServiceNow", "ITSM", "Platform"], paid: true },
    { title: "Snowflake SnowPro Core", provider: "Snowflake", duration: "2-3 months", level: "Intermediate", rating: 4.6, students: "15K+", description: "Cloud data warehouse platform", link: "https://www.snowflake.com/certifications/", tags: ["Snowflake", "Data Warehouse", "Cloud"], paid: true },
    { title: "Databricks Certified Developer", provider: "Databricks", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "12K+", description: "Unified analytics platform", link: "https://academy.databricks.com/", tags: ["Databricks", "Analytics", "Big Data"], paid: true },
    { title: "freeCodeCamp Certifications", provider: "freeCodeCamp", duration: "Varies", level: "Beginner", rating: 4.8, students: "1M+", description: "Various web development certifications", link: "https://www.freecodecamp.org/learn", tags: ["Web", "JavaScript", "HTML", "CSS"], paid: false }
];

const TagFilterDropdown = ({ allTags, selectedTags, onTagClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    const filteredTags = allTags.filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    return (
        <div className="relative" ref={dropdownRef}>
            <Button 
                variant="outline" 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full justify-between border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white"
            >
                <span>Filter by Category</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl z-10 p-2">
                    <Input
                        type="text"
                        placeholder="Search tags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full mb-2 bg-neutral-900 border-neutral-600 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="max-h-60 overflow-y-auto pr-1">
                        {filteredTags.map(tag => (
                             <button
                                key={tag}
                                onClick={() => onTagClick(tag)}
                                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-between ${
                                    selectedTags.includes(tag)
                                    ? 'bg-blue-600 text-white'
                                    : 'text-neutral-300 hover:bg-neutral-700'
                                }`}
                            >
                                {tag}
                                {selectedTags.includes(tag) && <XCircle className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const CertificatesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [costFilter, setCostFilter] = useState<'all' | 'free' | 'paid'>('all');

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    certificates.forEach(cert => cert.tags.forEach(tag => tagsSet.add(tag)));
    return Array.from(tagsSet).sort();
  }, []);
  
  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  const filteredCertificates = useMemo(() => {
    return certificates.filter(cert => {
      const matchesCost = costFilter === 'all' || (costFilter === 'free' && !cert.paid) || (costFilter === 'paid' && cert.paid);
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => cert.tags.includes(tag));
      const matchesSearch = 
        !searchQuery ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCost && matchesTags && matchesSearch;
    });
  }, [searchQuery, selectedTags, costFilter]);

  const Breadcrumb = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4" />
                Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Certificates</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* <Header /> */}
      
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Professional Certification Catalog
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                Explore our curated list of industry-recognized certifications to advance your skills.
            </p>
        </div>
        
        <Breadcrumb />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <aside className="md:col-span-1 h-fit md:sticky top-24">
                <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800 space-y-6">
                    <div>
                        <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2"><Filter className="w-4 h-4"/> Filters</h3>
                        <div className="grid grid-cols-3 gap-2">
                           {['all', 'free', 'paid'].map((type) => (
                                <Button 
                                    key={type}
                                    variant={costFilter === type ? 'default' : 'outline'}
                                    onClick={() => setCostFilter(type as any)}
                                    className={`capitalize text-xs h-9 ${costFilter === type 
                                        ? 'bg-blue-600 text-white border-blue-600' 
                                        : 'border-neutral-700 bg-neutral-800 hover:bg-neutral-700'}`
                                    }
                                >
                                    {type}
                                </Button>
                           ))}
                        </div>
                    </div>
                    <div>
                        <TagFilterDropdown allTags={allTags} selectedTags={selectedTags} onTagClick={handleTagClick} />
                    </div>
                </div>
            </aside>

            <main className="md:col-span-3">
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5 h-5" />
                    <Input
                        type="text"
                        placeholder="Search by title, provider, or tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-full text-base focus:ring-blue-500 focus:border-blue-500 placeholder-neutral-500"
                    />
                </div>
                
                {(selectedTags.length > 0 || costFilter !== 'all') && (
                    <div className="mb-4 flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-neutral-300">Active:</span>
                         {costFilter !== 'all' && (
                             <Badge className="capitalize bg-purple-900/80 text-purple-200 border border-purple-600/50">
                                {costFilter}
                            </Badge>
                         )}
                        {selectedTags.map(tag => (
                            <Badge key={tag} className="bg-blue-900/80 text-blue-200 border border-blue-600/50 flex items-center gap-1.5">
                                {tag}
                                <button onClick={() => handleTagClick(tag)} className="hover:text-white">
                                    <XCircle className="w-4 h-4" />
                                </button>
                            </Badge>
                        ))}
                         <Button variant="ghost" size="sm" onClick={() => { setSelectedTags([]); setCostFilter('all'); }} className="text-xs text-neutral-400 hover:text-white">Clear</Button>
                    </div>
                )}

                <p className="text-sm text-neutral-400 mb-6">
                    Showing {filteredCertificates.length} of {certificates.length} certificates.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredCertificates.map((cert) => {
                        const Icon = getCertIcon(cert.tags);
                        return (
                        <Card key={cert.title} className="group bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-neutral-800 group-hover:bg-blue-600 transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="font-bold text-lg text-white leading-tight">{cert.title}</h2>
                                            <p className="text-sm text-neutral-400">{cert.provider}</p>
                                        </div>
                                    </div>
                                    <Badge className={`text-xs font-semibold ${cert.paid 
                                        ? 'bg-amber-900/90 text-amber-100 border border-amber-600/50' 
                                        : 'bg-emerald-900/90 text-emerald-100 border border-emerald-600/50'}`
                                    }>
                                        {cert.paid ? 'Paid' : 'Free'}
                                    </Badge>
                                </div>
                                <p className="text-neutral-400 text-sm mb-5 flex-grow line-clamp-2">{cert.description}</p>
                                
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {cert.tags.slice(0, 3).map((tag) => <Badge key={tag} variant="outline" className="text-xs border-neutral-700 bg-neutral-800 text-neutral-300">{tag}</Badge>)}
                                </div>

                                <div className="flex items-center justify-between text-sm text-neutral-400 pt-4 border-t border-neutral-800">
                                    <div className="flex items-center gap-1.5" title="Duration"><Clock className="w-4 h-4" />{cert.duration}</div>
                                    <div className="flex items-center gap-1.5" title="Enrolled Students"><Users className="w-4 h-4" />{cert.students}</div>
                                    <div className="flex items-center gap-1.5" title="Rating"><Star className="w-4 h-4 text-yellow-500" />{cert.rating}</div>
                                </div>

                                <div className="mt-6">
                                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                        View Course <ExternalLink className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        );
                    })}
                </div>
            </main>
            </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default CertificatesPage;
