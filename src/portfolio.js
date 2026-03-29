/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
isSplash: false,
};

//SEO Related settings
const seo = {
title: "Tri Nguyen | Cybersecurity Portfolio",
description:
"Cybersecurity student focusing on malware analysis, system monitoring and security research.",
og: {
title: "Tri Nguyen Portfolio",
type: "website",
url: "https://trinpce192008.github.io/",
},
};

//Home Page
const greeting = {
title: "Nguyen Pham Tri",
logo_name: "TriNguyen",
nickname: "Cybersecurity Student",
subTitle:
"Cybersecurity student interested in Malware Analysis, System Monitoring and Security Research.",
resumeLink: "",
portfolio_repository:
"https://github.com/trinpce192008/masterPortfolio",
githubProfile: "https://github.com/trinpce192008",
};

const socialMediaLinks = [
{
name: "Github",
link: "https://github.com/trinpce192008",
fontAwesomeIcon: "fa-github",
backgroundColor: "#181717",
},
{
name: "LinkedIn",
link: "",
fontAwesomeIcon: "fa-linkedin-in",
backgroundColor: "#0077B5",
},
{
name: "Gmail",
link: "mailto:",
fontAwesomeIcon: "fa-google",
backgroundColor: "#D14836",
},
];

const skills = {
data: [
{
title: "Cybersecurity",
fileName: "DataScienceImg",
skills: [
"⚡ Malware analysis (Static & Dynamic)",
"⚡ Network security and monitoring",
"⚡ System security and threat detection",
],
softwareSkills: [
{
skillName: "Wireshark",
fontAwesomeClassname: "simple-icons:wireshark",
},
{
skillName: "Burp Suite",
fontAwesomeClassname: "simple-icons:burpsuite",
},
{
skillName: "Metasploit",
fontAwesomeClassname: "simple-icons:metasploit",
},
],
},
{
title: "Programming",
fileName: "FullStackImg",
skills: [
"⚡ Java programming",
"⚡ Python scripting",
"⚡ Bash scripting",
],
softwareSkills: [
{
skillName: "Java",
fontAwesomeClassname: "simple-icons:java",
},
{
skillName: "Python",
fontAwesomeClassname: "simple-icons:python",
},
],
},
],
};

// Education Page
const competitiveSites = {
competitiveSites: [],
};

const degrees = {
degrees: [
{
title: "FPT University",
subtitle: "Information Security",
logo_path: "fpt_logo.png",
alt_name: "FPT University",
duration: "2023 - Present",
descriptions: [
"⚡ Major in Information Security",
"⚡ Focus on Malware Analysis and System Security",
],
website_link: "",
},
],
};

const certifications = {
certifications: [
{
title: "Google Cybersecurity",
subtitle: "- Coursera",
logo_path: "google_logo.png",
certificate_link: "",
alt_name: "Coursera",
color_code: "#4285F499",
},
],
};

// Experience Page
const experience = {
title: "Projects",
subtitle: "Cybersecurity Projects",
description:
"Cybersecurity and Malware Analysis Projects",
header_image_path: "experience.svg",
sections: [
{
title: "Projects",
experiences: [
{
title: "RedLine Malware Analysis",
company: "Personal Project",
company_url: "",
logo_path: "malware.png",
duration: "2026",
location: "Vietnam",
description:
"Static and dynamic analysis of Redline and Lumma stealer",
color: "#000000",
},
{
title: "System Monitoring using Monit",
company: "Personal Project",
company_url: "",
logo_path: "monitor.png",
duration: "2025",
location: "Vietnam",
description:
"Built system monitoring dashboard using Monit",
color: "#0879bf",
},
],
},
],
};

// Projects Page
const projectsHeader = {
title: "Projects",
description:
"Cybersecurity and malware analysis projects",
avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
title: "Publications",
description: "",
avatar_image_path: "projects_image.svg",
};

const publications = {
data: [],
};

// Contact Page
const contactPageData = {
contactSection: {
title: "Contact Me",
profile_image_path: "animated_ashutosh.png",
description:
"Feel free to contact me for cybersecurity collaboration.",
},
blogSection: {
title: "",
subtitle: "",
link: "",
avatar_image_path: "blogs_image.svg",
},
addressSection: {
title: "",
subtitle: "",
locality: "",
country: "",
region: "",
postalCode: "",
streetAddress: "",
avatar_image_path: "address_image.svg",
location_map_link: "",
},
phoneSection: {
title: "",
subtitle: "",
},
};

export {
settings,
seo,
greeting,
socialMediaLinks,
skills,
competitiveSites,
degrees,
certifications,
experience,
projectsHeader,
publicationsHeader,
publications,
contactPageData,
};
