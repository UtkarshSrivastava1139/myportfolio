import { Certificate } from '@/utils/certificateManager';

export const certificatesData: Certificate[] = [
  // 2025 - Featured/Recent Certificates (highest priority)
  {
    id: "27",
    name: "Build with India - Unstop",
    issuer: "Unstop",
    date: "2025",
    image: "/certificates/Unstop_buildwithindia.jpg",
    category: "Hackathon",
    featured: true,
    priority: 1
  },
  {
    id: "26",
    name: "Techspardha - NIT Kurukshetra",
    issuer: "NIT Kurukshetra",
    date: "2025",
    image: "/certificates/Techspardha NITKurukshetra.jpg",
    category: "Competition",
    featured: true,
    priority: 2
  },
  {
    id: "25",
    name: "Hack2Skill Certification",
    issuer: "Hack2Skill",
    date: "2025",
    image: "/certificates/Hack2skill-Certificate.png",
    category: "Certification",
    featured: true,
    priority: 3
  },
  {
    id: "24",
    name: "CodeForge Hackathon",
    issuer: "CodeForge",
    date: "2025",
    image: "/certificates/CodeForge.jpg",
    category: "Hackathon",
    featured: true,
    priority: 4
  },
  {
    id: "23",
    name: "YESIST12 Ambassador",
    issuer: "IEEE YESIST12",
    date: "2025",
    image: "/certificates/yesist ambassdor.jpeg",
    category: "Ambassador",
    featured: true,
    priority: 5
  },
  {
    id: "18",
    name: "Hack4Bihar Internship Offer",
    issuer: "Hack4Bihar",
    date: "2025",
    image: "/certificates/Hack4Bihar Offer Letter.jpeg",
    category: "Internship",
    featured: true,
    priority: 6
  },
  {
    id: "17",
    name: "CSIS Ambassador",
    issuer: "CSIS",
    date: "2025",
    image: "/certificates/CSIS ambassdor.png",
    category: "Ambassador",
    priority: 7
  },
  {
    id: "6",
    name: "Campus Ambassador - IIT BHU CodeFest",
    issuer: "IIT BHU",
    date: "2025",
    image: "/certificates/Certificate IIT BHU CA Code Fest.jpeg",
    category: "Ambassador",
    priority: 8
  },

  // 2024 - Important Achievements
  {
    id: "22",
    name: "StarkSeek Internship Offer",
    issuer: "StarkSeek",
    date: "2024",
    image: "/certificates/StarkSeek Offer Letter.jpeg",
    category: "Internship",
    priority: 10
  },
  {
    id: "12",
    name: "TOP 10 Teams - Convergex Hackathon",
    issuer: "Convergex",
    date: "2024",
    image: "/certificates/Certificate of Participation - TOP 10 Teams Covergex Hackathon Dec 2024.png",
    category: "Hackathon",
    priority: 11
  },
  {
    id: "7",
    name: "2nd Prize - Poster Presentation",
    issuer: "JSS University",
    date: "2024",
    image: "/certificates/Certificate of Achievement Poster Presentation 2nd prize.png",
    category: "Award",
    priority: 12
  },
  {
    id: "2", 
    name: "GSSoC 2024 Extended Contributor",
    issuer: "GirlScript Summer of Code",
    date: "2024",
    image: "/certificates/Utkarsh_Srivastava_Badge_Contributor_GSSoC2024-Extd.png",
    category: "Open Source",
    priority: 13
  },

  // 2024 - Certifications & Skills
  {
    id: "1",
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: "/certificates/Certificate Python(Basic).png",
    category: "Programming",
    priority: 20
  },
  {
    id: "15",
    name: "Samsung Solve for Tomorrow",
    issuer: "Samsung",
    date: "2024",
    image: "/certificates/Certificate-of-Participation Samsung Solve for Tomorrow.jpg",
    category: "Competition",
    priority: 21
  },
  {
    id: "20",
    name: "IEEE Xtreme Programming Contest",
    issuer: "IEEE",
    date: "2024",
    image: "/certificates/ieee xtreme.jpg",
    category: "Competition",
    priority: 22
  },
  {
    id: "21",
    name: "IGDTUW Hackathon",
    issuer: "IGDTUW",
    date: "2024",
    image: "/certificates/IGDTUW Hackathon.png",
    category: "Hackathon",
    priority: 23
  },

  // 2024 - Ambassador & Leadership Roles
  {
    id: "4",
    name: "Campus Ambassador - BITS Pilani",
    issuer: "BITS Pilani",
    date: "2024",
    image: "/certificates/Campus Ambassdor - BITS.jpg",
    category: "Ambassador",
    priority: 30
  },

  // 2024 - Volunteer & Community Work
  {
    id: "14",
    name: "IEEE WebMaster Volunteer",
    issuer: "IEEE",
    date: "2024",
    image: "/certificates/Certificate of Volunteer - IEEE WebMaster.jpg",
    category: "Volunteer",
    priority: 40
  },
  {
    id: "5",
    name: "University Conclave Volunteer",
    issuer: "JSS University",
    date: "2024",
    image: "/certificates/Certificate for Volunterring - University Conclave.png",
    category: "Volunteer",
    priority: 41
  },

  // 2024 - Workshops & Events
  {
    id: "9",
    name: "IEEE GitHub Event Participation",
    issuer: "IEEE",
    date: "2024",
    image: "/certificates/Certificate of Appreciation - IEEE Github Event.png",
    category: "Workshop",
    priority: 50
  },
  {
    id: "19",
    name: "IEEE India Council Participation",
    issuer: "IEEE India Council",
    date: "2024",
    image: "/certificates/IEEE INDIA COUNCIL participation.jpg",
    category: "Workshop",
    priority: 51
  },
  {
    id: "10",
    name: "CSE Department Conclave",
    issuer: "JSS University - CSE Dept",
    date: "2024",
    image: "/certificates/Certificate of Participation - Conclave of Dept. of CSE.png",
    category: "Event",
    priority: 52
  },
  {
    id: "11",
    name: "School of Science & Humanities Conclave",
    issuer: "JSS University",
    date: "2024",
    image: "/certificates/Certificate of Participation - Conclave of School of Science & Humanities.png",
    category: "Event",
    priority: 53
  },
  {
    id: "13",
    name: "Poster Presentation Participation",
    issuer: "JSS University",
    date: "2024",
    image: "/certificates/Certificate of Participation Poster Presentation.png",
    category: "Event",
    priority: 54
  },

  // 2024 - Appreciation & Recognition
  {
    id: "8",
    name: "Appreciation - CashKaro",
    issuer: "CashKaro",
    date: "2024",
    image: "/certificates/Certificate of Appreciation - CashKaro.png",
    category: "Appreciation",
    priority: 60
  },
  {
    id: "16",
    name: "Creative Member Newsletter",
    issuer: "JSS University",
    date: "2024",
    image: "/certificates/Creative Member Newsletter Certificate.png",
    category: "Creative",
    priority: 61
  },

  // 2024 - Other Activities
  {
    id: "3",
    name: "Build with India",
    issuer: "Build with India",
    date: "2024",
    image: "/certificates/Build with India.png",
    category: "Hackathon",
    priority: 70
  }
];
