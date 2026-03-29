/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
isSplash: false
};

//SEO Related Settings
const seo = {
title: "Nguyen Pham Tri Portfolio",
description:
"Cybersecurity student focusing on malware analysis, threat detection and security research.",
og: {
title: "Nguyen Pham Tri Portfolio",
type: "website",
url: "[https://trinpce192008.github.io/](https://trinpce192008.github.io/)"
}
};

//Home Page
const greeting = {
username: "Nguyen Pham Tri",
title: "Nguyen Pham Tri",
subTitle:
"Cybersecurity Student focused on Malware Analysis, Network Security and Threat Detection. Seeking Cybersecurity Internship.",
resumeLink: "",
displayGreeting: true
};

// Social Media Links
const socialMediaLinks = [
{
name: "Github",
link: "[https://github.com/trinpce192008](https://github.com/trinpce192008)",
fontAwesomeIcon: "fa-github",
backgroundColor: "#181717"
},
{
name: "LinkedIn",
link: "[https://linkedin.com/in/trinpce192008](https://linkedin.com/in/trinpce192008)",
fontAwesomeIcon: "fa-linkedin-in",
backgroundColor: "#0077B5"
},
{
name: "Gmail",
link: "mailto:trinp[.ce192008@gmail.com](mailto:.ce192008@gmail.com)",
fontAwesomeIcon: "fa-google",
backgroundColor: "#D14836"
}
];

// Skills Section
const skills = {
data: [
{
title: "Cybersecurity",
fileName: "CloudInfraImg",
skills: [
"⚡ Malware Analysis and Reverse Engineering",
"⚡ Network Security and Traffic Analysis",
"⚡ Linux System Security",
"⚡ Incident Response and Threat Detection"
],
softwareSkills: [
{
skillName: "Wireshark",
fontAwesomeClassname: "simple-icons:wireshark"
},
{
skillName: "Kali Linux",
fontAwesomeClassname: "simple-icons:kalilinux"
},
{
skillName: "Python",
fontAwesomeClassname: "simple-icons:python"
},
{
skillName: "Linux",
fontAwesomeClassname: "simple-icons:linux"
},
{
skillName: "Nmap",
fontAwesomeClassname: "simple-icons:nmap"
}
]
}
]
};

// Education Section
const degrees = {
degrees: [
{
title: "FPT University",
subtitle: "Bachelor of Information Security",
logo_path: "fpt_logo.png",
duration: "2023 - Present",
descriptions: [
"⚡ Studying Cybersecurity and Information Security",
"⚡ Malware Analysis and Network Security",
"⚡ Linux System and Networking"
]
}
]
};

// Certifications
const certifications = {
certifications: [
{
title: "Cisco CyberOps Associate",
subtitle: "Cisco",
logo_path: "cisco.png",
certificate_link: "",
alt_name: "CyberOps"
},
{
title: "Object Oriented Programming in Java",
subtitle: "Coursera",
logo_path: "coursera.png",
certificate_link: "",
alt_name: "Java OOP"
}
]
};

// Experience Section
const experience = {
title: "Projects",
subtitle: "Cybersecurity Projects",
description:
"Hands-on cybersecurity and malware analysis projects",

sections: [
{
title: "Cybersecurity Projects",
experiences: [
{
title: "Redline Malware Analysis",
company: "Personal Project",
company_url: "",
logo_path: "malware.png",
duration: "Feb 2026 - Mar 2026",
location: "Vietnam",
description:
"Static and dynamic malware analysis of Redline and Lumma Stealer",
color: "#000000"
},
{
title: "System Monitoring using Monit",
company: "Personal Project",
company_url: "",
logo_path: "monitor.png",
duration: "Jun 2025 - Jul 2025",
location: "Vietnam",
description:
"Built monitoring dashboard and anomaly detection system",
color: "#0879bf"
}
]
}
]
};

// GitHub Section
const githubProfile = {
username: "trinpce192008"
};

// Contact Info
const contactInfo = {
title: "Contact Me",
subtitle: "Cybersecurity Internship Opportunities",
number: "0337010437",
email_address: "[trinp.ce192008@gmail.com](mailto:trinp.ce192008@gmail.com)"
};

export {
settings,
seo,
greeting,
socialMediaLinks,
skills,
degrees,
certifications,
experience,
githubProfile,
contactInfo
};
