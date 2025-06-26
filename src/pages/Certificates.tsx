
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Clock, Users, Star } from "lucide-react";

const Certificates = () => {
  const certificates = [
    // Cloud Computing
    { title: "AWS Certified Solutions Architect", provider: "Amazon Web Services", duration: "3-6 months", level: "Professional", rating: 4.8, students: "50K+", description: "Design and deploy scalable AWS solutions", link: "https://aws.amazon.com/certification/", tags: ["Cloud", "AWS", "Architecture"] },
    { title: "Google Cloud Professional Cloud Architect", provider: "Google Cloud", duration: "4-8 months", level: "Professional", rating: 4.7, students: "25K+", description: "Design and manage Google Cloud solutions", link: "https://cloud.google.com/certification/", tags: ["Cloud", "GCP", "Architecture"] },
    { title: "Microsoft Azure Fundamentals", provider: "Microsoft", duration: "1-2 months", level: "Beginner", rating: 4.6, students: "100K+", description: "Learn Azure cloud services fundamentals", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Cloud", "Azure", "Fundamentals"] },
    { title: "AWS Certified Developer", provider: "Amazon Web Services", duration: "2-4 months", level: "Professional", rating: 4.7, students: "40K+", description: "Develop applications on AWS platform", link: "https://aws.amazon.com/certification/", tags: ["AWS", "Development", "Cloud"] },
    { title: "Google Cloud Associate Cloud Engineer", provider: "Google Cloud", duration: "2-3 months", level: "Intermediate", rating: 4.5, students: "30K+", description: "Deploy and manage Google Cloud solutions", link: "https://cloud.google.com/certification/", tags: ["GCP", "Engineering", "Cloud"] },
    { title: "Azure Administrator Associate", provider: "Microsoft", duration: "3-4 months", level: "Intermediate", rating: 4.6, students: "35K+", description: "Manage Azure subscriptions and resources", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "Administration", "Cloud"] },
    { title: "AWS Certified SysOps Administrator", provider: "Amazon Web Services", duration: "3-5 months", level: "Professional", rating: 4.5, students: "20K+", description: "Deploy and manage AWS systems", link: "https://aws.amazon.com/certification/", tags: ["AWS", "SysOps", "Administration"] },
    { title: "Google Cloud Professional DevOps Engineer", provider: "Google Cloud", duration: "4-6 months", level: "Advanced", rating: 4.8, students: "15K+", description: "Implement DevOps practices on GCP", link: "https://cloud.google.com/certification/", tags: ["GCP", "DevOps", "Engineering"] },
    
    // DevOps & Containers
    { title: "Certified Kubernetes Administrator", provider: "Cloud Native Computing Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.9, students: "15K+", description: "Master Kubernetes cluster administration", link: "https://www.cncf.io/certification/cka/", tags: ["Kubernetes", "DevOps", "Containers"] },
    { title: "Docker Certified Associate", provider: "Docker", duration: "1-3 months", level: "Intermediate", rating: 4.5, students: "30K+", description: "Containerization and Docker expertise", link: "https://www.docker.com/certification/", tags: ["Docker", "Containers", "DevOps"] },
    { title: "Certified Kubernetes Application Developer", provider: "CNCF", duration: "2-3 months", level: "Intermediate", rating: 4.7, students: "12K+", description: "Develop applications for Kubernetes", link: "https://www.cncf.io/certification/ckad/", tags: ["Kubernetes", "Development", "Containers"] },
    { title: "Jenkins Certified Engineer", provider: "CloudBees", duration: "1-2 months", level: "Intermediate", rating: 4.3, students: "8K+", description: "Master Jenkins CI/CD pipelines", link: "https://www.cloudbees.com/jenkins/certification", tags: ["Jenkins", "CI/CD", "DevOps"] },
    { title: "Terraform Associate", provider: "HashiCorp", duration: "2-3 months", level: "Intermediate", rating: 4.6, students: "18K+", description: "Infrastructure as Code with Terraform", link: "https://www.hashicorp.com/certification/terraform-associate", tags: ["Terraform", "IaC", "DevOps"] },
    { title: "Ansible Automation Platform", provider: "Red Hat", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "10K+", description: "Automate IT infrastructure with Ansible", link: "https://www.redhat.com/en/services/certification", tags: ["Ansible", "Automation", "DevOps"] },
    
    // Cybersecurity
    { title: "Certified Ethical Hacker", provider: "EC-Council", duration: "3-6 months", level: "Advanced", rating: 4.4, students: "40K+", description: "Ethical hacking and penetration testing", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", tags: ["Security", "Ethical Hacking", "Penetration Testing"] },
    { title: "CISSP", provider: "ISC2", duration: "6-12 months", level: "Advanced", rating: 4.7, students: "25K+", description: "Information Systems Security Professional", link: "https://www.isc2.org/Certifications/CISSP", tags: ["Security", "Risk Management", "Governance"] },
    { title: "CompTIA Security+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "60K+", description: "Foundation-level cybersecurity skills", link: "https://www.comptia.org/certifications/security", tags: ["Security", "CompTIA", "Fundamentals"] },
    { title: "CISM", provider: "ISACA", duration: "4-8 months", level: "Advanced", rating: 4.6, students: "15K+", description: "Certified Information Security Manager", link: "https://www.isaca.org/credentialing/cism", tags: ["Security", "Management", "Governance"] },
    { title: "CISA", provider: "ISACA", duration: "4-8 months", level: "Advanced", rating: 4.5, students: "12K+", description: "Certified Information Systems Auditor", link: "https://www.isaca.org/credentialing/cisa", tags: ["Security", "Audit", "Risk"] },
    
    // Programming & Development
    { title: "Oracle Certified Professional Java", provider: "Oracle", duration: "3-6 months", level: "Professional", rating: 4.6, students: "45K+", description: "Master Java programming language", link: "https://education.oracle.com/java", tags: ["Java", "Programming", "Oracle"] },
    { title: "Microsoft Certified: Azure Developer", provider: "Microsoft", duration: "3-5 months", level: "Professional", rating: 4.5, students: "28K+", description: "Develop solutions for Microsoft Azure", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "Development", "Microsoft"] },
    { title: "Python Institute PCAP", provider: "Python Institute", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "22K+", description: "Certified Associate Python Programmer", link: "https://pythoninstitute.org/pcap", tags: ["Python", "Programming", "Development"] },
    { title: "React Developer Certification", provider: "Meta", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "35K+", description: "Build modern web applications with React", link: "https://developers.facebook.com/developercircles/", tags: ["React", "JavaScript", "Frontend"] },
    { title: "Node.js Application Developer", provider: "OpenJS Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "18K+", description: "Server-side JavaScript development", link: "https://openjsf.org/certification/", tags: ["Node.js", "JavaScript", "Backend"] },
    
    // Data Science & Analytics
    { title: "Google Data Analytics Certificate", provider: "Google", duration: "3-6 months", level: "Beginner", rating: 4.7, students: "150K+", description: "Analyze data and gain insights", link: "https://grow.google/certificates/data-analytics/", tags: ["Data Analytics", "Google", "Business Intelligence"] },
    { title: "IBM Data Science Professional", provider: "IBM", duration: "4-8 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Complete data science methodology", link: "https://www.ibm.com/training/badge/data-science-professional-certificate-v2", tags: ["Data Science", "IBM", "Machine Learning"] },
    { title: "Microsoft Power BI Data Analyst", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "40K+", description: "Business intelligence and data visualization", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Power BI", "Analytics", "Visualization"] },
    { title: "Tableau Desktop Specialist", provider: "Tableau", duration: "1-3 months", level: "Beginner", rating: 4.4, students: "25K+", description: "Data visualization with Tableau", link: "https://www.tableau.com/learn/certification", tags: ["Tableau", "Visualization", "Analytics"] },
    { title: "SAS Certified Specialist", provider: "SAS", duration: "3-5 months", level: "Intermediate", rating: 4.3, students: "15K+", description: "Statistical analysis and data management", link: "https://www.sas.com/en_us/certification.html", tags: ["SAS", "Statistics", "Analytics"] },
    
    // Machine Learning & AI
    { title: "Google Machine Learning Engineer", provider: "Google Cloud", duration: "4-8 months", level: "Advanced", rating: 4.8, students: "20K+", description: "Design and implement ML solutions", link: "https://cloud.google.com/certification/", tags: ["Machine Learning", "GCP", "AI"] },
    { title: "AWS Certified Machine Learning", provider: "Amazon Web Services", duration: "4-8 months", level: "Advanced", rating: 4.7, students: "18K+", description: "ML solutions on AWS platform", link: "https://aws.amazon.com/certification/", tags: ["Machine Learning", "AWS", "AI"] },
    { title: "TensorFlow Developer Certificate", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "30K+", description: "Build ML models with TensorFlow", link: "https://www.tensorflow.org/certificate", tags: ["TensorFlow", "Deep Learning", "AI"] },
    { title: "Azure AI Engineer Associate", provider: "Microsoft", duration: "3-5 months", level: "Professional", rating: 4.5, students: "12K+", description: "Design AI solutions on Azure", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure", "AI", "Machine Learning"] },
    
    // Database Management
    { title: "Oracle Database Administrator", provider: "Oracle", duration: "4-8 months", level: "Professional", rating: 4.6, students: "20K+", description: "Manage Oracle database systems", link: "https://education.oracle.com/database", tags: ["Oracle", "Database", "Administration"] },
    { title: "Microsoft SQL Server DBA", provider: "Microsoft", duration: "3-6 months", level: "Professional", rating: 4.4, students: "25K+", description: "SQL Server database administration", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["SQL Server", "Database", "Microsoft"] },
    { title: "MongoDB Certified Developer", provider: "MongoDB", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "15K+", description: "NoSQL database development", link: "https://university.mongodb.com/certification", tags: ["MongoDB", "NoSQL", "Database"] },
    { title: "MySQL Database Administrator", provider: "Oracle", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "18K+", description: "MySQL database management", link: "https://education.oracle.com/mysql", tags: ["MySQL", "Database", "Administration"] },
    
    // Project Management
    { title: "PMP Certification", provider: "PMI", duration: "4-8 months", level: "Professional", rating: 4.7, students: "200K+", description: "Project Management Professional", link: "https://www.pmi.org/certifications/project-management-pmp", tags: ["Project Management", "PMI", "Leadership"] },
    { title: "Certified Scrum Master", provider: "Scrum Alliance", duration: "1-2 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Agile project management with Scrum", link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster", tags: ["Scrum", "Agile", "Management"] },
    { title: "PRINCE2 Foundation", provider: "AXELOS", duration: "2-3 months", level: "Beginner", rating: 4.4, students: "50K+", description: "Structured project management method", link: "https://www.axelos.com/certifications/prince2", tags: ["PRINCE2", "Project Management", "Methodology"] },
    { title: "Agile Certified Practitioner", provider: "PMI", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "35K+", description: "Agile project management practices", link: "https://www.pmi.org/certifications/agile-acp", tags: ["Agile", "PMI", "Project Management"] },
    
    // Web Development
    { title: "Google UX Design Certificate", provider: "Google", duration: "3-6 months", level: "Beginner", rating: 4.6, students: "120K+", description: "User experience design fundamentals", link: "https://grow.google/certificates/ux-design/", tags: ["UX Design", "Google", "Design"] },
    { title: "Adobe Certified Expert", provider: "Adobe", duration: "2-4 months", level: "Professional", rating: 4.4, students: "30K+", description: "Master Adobe Creative Suite", link: "https://www.adobe.com/training/certification.html", tags: ["Adobe", "Design", "Creative"] },
    { title: "W3C Frontend Developer", provider: "W3C", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "25K+", description: "Modern frontend web development", link: "https://www.w3.org/", tags: ["Frontend", "HTML", "CSS"] },
    { title: "Vue.js Developer Certification", provider: "Vue School", duration: "1-3 months", level: "Intermediate", rating: 4.5, students: "15K+", description: "Progressive JavaScript framework", link: "https://vueschool.io/", tags: ["Vue.js", "JavaScript", "Frontend"] },
    { title: "Angular Developer Certification", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "20K+", description: "Build dynamic web applications", link: "https://developers.google.com/certification/", tags: ["Angular", "TypeScript", "Frontend"] },
    
    // Mobile Development
    { title: "Android Developer Certification", provider: "Google", duration: "3-6 months", level: "Intermediate", rating: 4.5, students: "40K+", description: "Build Android mobile applications", link: "https://developers.google.com/certification/", tags: ["Android", "Mobile", "Java"] },
    { title: "iOS Developer Certification", provider: "Apple", duration: "3-6 months", level: "Intermediate", rating: 4.6, students: "30K+", description: "Develop apps for iOS platform", link: "https://developer.apple.com/certification/", tags: ["iOS", "Swift", "Mobile"] },
    { title: "React Native Developer", provider: "Meta", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "25K+", description: "Cross-platform mobile development", link: "https://reactnative.dev/", tags: ["React Native", "Mobile", "JavaScript"] },
    { title: "Flutter Developer Certification", provider: "Google", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "20K+", description: "Cross-platform app development", link: "https://flutter.dev/", tags: ["Flutter", "Dart", "Mobile"] },
    
    // Networking
    { title: "Cisco CCNA", provider: "Cisco", duration: "3-6 months", level: "Professional", rating: 4.7, students: "100K+", description: "Network Associate certification", link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html", tags: ["Cisco", "Networking", "Infrastructure"] },
    { title: "CompTIA Network+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "80K+", description: "Networking fundamentals and protocols", link: "https://www.comptia.org/certifications/network", tags: ["CompTIA", "Networking", "Infrastructure"] },
    { title: "Juniper JNCIA", provider: "Juniper Networks", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "15K+", description: "Junos associate certification", link: "https://www.juniper.net/us/en/training/certification/", tags: ["Juniper", "Networking", "Junos"] },
    { title: "Fortinet NSE", provider: "Fortinet", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "12K+", description: "Network Security Expert", link: "https://www.fortinet.com/training/cybersecurity-professionals", tags: ["Fortinet", "Security", "Networking"] },
    
    // Linux & System Administration
    { title: "Red Hat Certified Engineer", provider: "Red Hat", duration: "4-8 months", level: "Professional", rating: 4.8, students: "25K+", description: "Advanced Linux system administration", link: "https://www.redhat.com/en/services/certification/rhce", tags: ["Red Hat", "Linux", "System Administration"] },
    { title: "CompTIA Linux+", provider: "CompTIA", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "35K+", description: "Linux system administration skills", link: "https://www.comptia.org/certifications/linux", tags: ["CompTIA", "Linux", "System Administration"] },
    { title: "Ubuntu Certified Professional", provider: "Canonical", duration: "2-3 months", level: "Intermediate", rating: 4.3, students: "18K+", description: "Ubuntu Linux administration", link: "https://ubuntu.com/certification", tags: ["Ubuntu", "Linux", "Canonical"] },
    { title: "SUSE Certified Administrator", provider: "SUSE", duration: "2-4 months", level: "Intermediate", rating: 4.2, students: "10K+", description: "SUSE Linux Enterprise administration", link: "https://www.suse.com/training/", tags: ["SUSE", "Linux", "Enterprise"] },
    
    // Quality Assurance
    { title: "ISTQB Foundation Level", provider: "ISTQB", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "150K+", description: "Software testing fundamentals", link: "https://www.istqb.org/", tags: ["Testing", "Quality Assurance", "ISTQB"] },
    { title: "Selenium WebDriver", provider: "Selenium", duration: "1-3 months", level: "Intermediate", rating: 4.4, students: "40K+", description: "Automated web testing", link: "https://selenium.dev/", tags: ["Selenium", "Automation", "Testing"] },
    { title: "Certified Tester Advanced Level", provider: "ISTQB", duration: "3-6 months", level: "Advanced", rating: 4.6, students: "50K+", description: "Advanced software testing", link: "https://www.istqb.org/", tags: ["Testing", "Advanced", "ISTQB"] },
    
    // Business Analysis
    { title: "CBAP Certification", provider: "IIBA", duration: "4-8 months", level: "Professional", rating: 4.6, students: "30K+", description: "Certified Business Analysis Professional", link: "https://www.iiba.org/career-resources/a-business-analysts-guide-to-career-development/certifications/cbap/", tags: ["Business Analysis", "IIBA", "Requirements"] },
    { title: "PMI-PBA", provider: "PMI", duration: "3-6 months", level: "Professional", rating: 4.5, students: "20K+", description: "Professional in Business Analysis", link: "https://www.pmi.org/certifications/business-analysis-pba", tags: ["Business Analysis", "PMI", "Requirements"] },
    
    // Digital Marketing
    { title: "Google Ads Certification", provider: "Google", duration: "1-2 months", level: "Beginner", rating: 4.4, students: "200K+", description: "Online advertising with Google Ads", link: "https://skillshop.withgoogle.com/", tags: ["Google Ads", "Marketing", "Advertising"] },
    { title: "Google Analytics Certified", provider: "Google", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "180K+", description: "Web analytics and data insights", link: "https://skillshop.withgoogle.com/", tags: ["Google Analytics", "Marketing", "Analytics"] },
    { title: "Facebook Blueprint Certification", provider: "Meta", duration: "1-3 months", level: "Intermediate", rating: 4.3, students: "100K+", description: "Social media marketing expertise", link: "https://www.facebook.com/business/learn", tags: ["Facebook", "Social Media", "Marketing"] },
    { title: "HubSpot Content Marketing", provider: "HubSpot", duration: "1-2 months", level: "Beginner", rating: 4.4, students: "80K+", description: "Inbound marketing strategies", link: "https://academy.hubspot.com/", tags: ["HubSpot", "Content Marketing", "Inbound"] },
    
    // Blockchain & Cryptocurrency
    { title: "Certified Bitcoin Professional", provider: "CryptoCurrency Certification Consortium", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "15K+", description: "Bitcoin and blockchain fundamentals", link: "https://cryptoconsortium.org/certifications/CBP", tags: ["Bitcoin", "Blockchain", "Cryptocurrency"] },
    { title: "Ethereum Developer Certification", provider: "ConsenSys", duration: "3-6 months", level: "Advanced", rating: 4.5, students: "12K+", description: "Smart contract development", link: "https://consensys.net/academy/", tags: ["Ethereum", "Smart Contracts", "Blockchain"] },
    { title: "Hyperledger Fabric Developer", provider: "Linux Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "8K+", description: "Enterprise blockchain development", link: "https://www.hyperledger.org/", tags: ["Hyperledger", "Blockchain", "Enterprise"] },
    
    // IT Service Management
    { title: "ITIL 4 Foundation", provider: "AXELOS", duration: "1-2 months", level: "Beginner", rating: 4.5, students: "300K+", description: "IT service management best practices", link: "https://www.axelos.com/certifications/itil-service-management", tags: ["ITIL", "Service Management", "ITSM"] },
    { title: "COBIT 2019 Foundation", provider: "ISACA", duration: "2-3 months", level: "Intermediate", rating: 4.4, students: "40K+", description: "IT governance framework", link: "https://www.isaca.org/credentialing/cobit", tags: ["COBIT", "Governance", "Framework"] },
    
    // Salesforce
    { title: "Salesforce Administrator", provider: "Salesforce", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "100K+", description: "Salesforce platform administration", link: "https://trailhead.salesforce.com/credentials/administrator", tags: ["Salesforce", "CRM", "Administration"] },
    { title: "Salesforce Developer", provider: "Salesforce", duration: "3-6 months", level: "Professional", rating: 4.5, students: "60K+", description: "Custom Salesforce development", link: "https://trailhead.salesforce.com/credentials/platformdeveloper", tags: ["Salesforce", "Development", "Apex"] },
    { title: "Salesforce Consultant", provider: "Salesforce", duration: "4-8 months", level: "Professional", rating: 4.7, students: "40K+", description: "Salesforce implementation consulting", link: "https://trailhead.salesforce.com/credentials/consultant", tags: ["Salesforce", "Consulting", "Implementation"] },
    
    // SAP
    { title: "SAP Certified Application Associate", provider: "SAP", duration: "3-6 months", level: "Professional", rating: 4.4, students: "50K+", description: "SAP ERP system expertise", link: "https://training.sap.com/certification", tags: ["SAP", "ERP", "Enterprise"] },
    { title: "SAP HANA Developer", provider: "SAP", duration: "2-4 months", level: "Professional", rating: 4.3, students: "15K+", description: "In-memory database development", link: "https://training.sap.com/certification", tags: ["SAP HANA", "Database", "Development"] },
    
    // Virtualization
    { title: "VMware Certified Professional", provider: "VMware", duration: "3-6 months", level: "Professional", rating: 4.6, students: "80K+", description: "Virtualization and cloud infrastructure", link: "https://www.vmware.com/education-services/certification.html", tags: ["VMware", "Virtualization", "Infrastructure"] },
    { title: "Microsoft Hyper-V", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "25K+", description: "Windows Server virtualization", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Hyper-V", "Virtualization", "Windows Server"] },
    
    // Big Data
    { title: "Cloudera Data Engineer", provider: "Cloudera", duration: "3-6 months", level: "Professional", rating: 4.5, students: "20K+", description: "Big data engineering with Hadoop", link: "https://www.cloudera.com/about/training/certification.html", tags: ["Cloudera", "Big Data", "Hadoop"] },
    { title: "Apache Spark Developer", provider: "Databricks", duration: "2-4 months", level: "Intermediate", rating: 4.6, students: "15K+", description: "Distributed data processing", link: "https://academy.databricks.com/", tags: ["Spark", "Big Data", "Analytics"] },
    { title: "Elastic Certified Engineer", provider: "Elastic", duration: "2-3 months", level: "Intermediate", rating: 4.4, students: "12K+", description: "Elasticsearch and data search", link: "https://www.elastic.co/training/certification", tags: ["Elasticsearch", "Search", "Analytics"] },
    
    // IoT
    { title: "AWS IoT Core Developer", provider: "Amazon Web Services", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "10K+", description: "Internet of Things solutions", link: "https://aws.amazon.com/certification/", tags: ["IoT", "AWS", "Connected Devices"] },
    { title: "Microsoft Azure IoT Developer", provider: "Microsoft", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "8K+", description: "IoT solutions on Azure platform", link: "https://docs.microsoft.com/en-us/learn/certifications/", tags: ["Azure IoT", "IoT", "Cloud"] },
    
    // Game Development
    { title: "Unity Certified Developer", provider: "Unity Technologies", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "25K+", description: "Game development with Unity", link: "https://unity.com/products/unity-certifications", tags: ["Unity", "Game Development", "C#"] },
    { title: "Unreal Engine Developer", provider: "Epic Games", duration: "2-4 months", level: "Intermediate", rating: 4.4, students: "15K+", description: "Game development with Unreal Engine", link: "https://www.unrealengine.com/", tags: ["Unreal Engine", "Game Development", "C++"] },
    
    // Additional Programming Languages
    { title: "C++ Certified Associate", provider: "C++ Institute", duration: "2-4 months", level: "Intermediate", rating: 4.3, students: "20K+", description: "C++ programming fundamentals", link: "https://cppinstitute.org/", tags: ["C++", "Programming", "Systems"] },
    { title: "PHP Zend Certified Engineer", provider: "Zend", duration: "2-3 months", level: "Professional", rating: 4.2, students: "15K+", description: "PHP web development expertise", link: "https://www.zend.com/training/php-certification-exam", tags: ["PHP", "Web Development", "Backend"] },
    { title: "Ruby Association Certified", provider: "Ruby Association", duration: "1-3 months", level: "Intermediate", rating: 4.3, students: "12K+", description: "Ruby programming language", link: "https://www.ruby.or.jp/en/certification/examination/", tags: ["Ruby", "Programming", "Web"] },
    { title: "Go Developer Certification", provider: "Google", duration: "1-3 months", level: "Intermediate", rating: 4.4, students: "18K+", description: "Go programming language", link: "https://golang.org/", tags: ["Go", "Programming", "Backend"] },
    { title: "Rust Programming Certification", provider: "Rust Foundation", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "10K+", description: "Systems programming with Rust", link: "https://www.rust-lang.org/", tags: ["Rust", "Systems Programming", "Performance"] },
    
    // Additional Specialized Areas
    { title: "Atlassian Certified Jira Administrator", provider: "Atlassian", duration: "1-2 months", level: "Intermediate", rating: 4.4, students: "30K+", description: "Project tracking and management", link: "https://www.atlassian.com/university/certification", tags: ["Jira", "Project Management", "Atlassian"] },
    { title: "Splunk Core Certified User", provider: "Splunk", duration: "1-3 months", level: "Beginner", rating: 4.3, students: "20K+", description: "Machine data analytics platform", link: "https://www.splunk.com/en_us/training.html", tags: ["Splunk", "Analytics", "Monitoring"] },
    { title: "ServiceNow Certified System Administrator", provider: "ServiceNow", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "25K+", description: "IT service management platform", link: "https://www.servicenow.com/services/training-and-certification.html", tags: ["ServiceNow", "ITSM", "Platform"] },
    { title: "Snowflake SnowPro Core", provider: "Snowflake", duration: "2-3 months", level: "Intermediate", rating: 4.6, students: "15K+", description: "Cloud data warehouse platform", link: "https://www.snowflake.com/certifications/", tags: ["Snowflake", "Data Warehouse", "Cloud"] },
    { title: "Databricks Certified Developer", provider: "Databricks", duration: "2-4 months", level: "Intermediate", rating: 4.5, students: "12K+", description: "Unified analytics platform", link: "https://academy.databricks.com/", tags: ["Databricks", "Analytics", "Big Data"] }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      case "Professional": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Certificates</h1>
              <p className="text-gray-600 text-sm">Industry-recognized certifications</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                    {cert.title}
                  </CardTitle>
                  <Badge className={getLevelColor(cert.level)} variant="secondary">
                    {cert.level}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 font-medium">{cert.provider}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">{cert.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs px-2 py-0">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {cert.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {cert.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    {cert.rating}
                  </div>
                </div>

                <Button size="sm" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-lg">Certification Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• Start with fundamental certifications</li>
                <li>• Practice with hands-on labs</li>
                <li>• Join study groups and communities</li>
                <li>• Schedule exams after preparation</li>
                <li>• Keep certifications current</li>
                <li>• Focus on relevant technologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
