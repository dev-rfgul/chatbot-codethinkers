

const pattern = [
  // Personal Information
  {
    pattern: /who\s+are\s+you|your\s+name|tell\s+me\s+about\s+yourself|introduce\s+yourself/i,
    answer: "Hello! I'm Muhammad Fahad, a Full Stack Developer and MERN Stack professional. I have experience working as a Web Developer and Chrome Extension Developer, with expertise in both frontend and backend technologies."
  },
  
  // Contact Information
  {
    pattern: /phone|mobile|number|call/i,
    answer: "You can reach me at 03329296026 for any inquiries or project discussions."
  },
  
  {
    pattern: /email|mail|gmail/i,
    answer: "You can reach me via email at devrfgul@gmail.com for professional inquiries, project discussions, or collaboration opportunities. I'm always responsive to emails!"
  },
  
  // Social Media/Connect
  {
    pattern: /social\s+media|socials?|connect\s+on|follow\s+me|social\s+platforms|where\s+can\s+i\s+find\s+you/i,
    answer: "You can connect with me on various platforms! I'm available on LinkedIn, GitHub, and you can view my Portfolio. You can also reach me via Email (devrfgul@gmail.com) or WhatsApp (03329296026). Which specific platform would you like to connect on?"
  },
  
  // Specific Social Media Platforms
  {
    pattern: /linkedin|professional\s+network/i,
    answer: "You can connect with me on LinkedIn for professional networking and updates about my career journey in full-stack development!"
  },
  
  {
    pattern: /github|git\s+hub|code\s+repository|source\s+code/i,
    answer: "Check out my GitHub profile to see my code repositories, contributions, and all the projects I've worked on. You'll find live demos and source code for all my projects there!"
  },
  
  {
    pattern: /portfolio|website|personal\s+site/i,
    answer: "Visit my Portfolio website to see my complete work showcase, projects, skills, and professional journey. It's the best place to get a comprehensive view of my capabilities!"
  },
  
  {
    pattern: /whatsapp|whats\s+app/i,
    answer: "I'm available on WhatsApp at 03329296026 for quick discussions about projects or any urgent inquiries. Feel free to reach out!"
  },
  
  // Current Learning
  {
    pattern: /learning|currently\s+learning|studying|what\s+are\s+you\s+learning/i,
    answer: "I'm continuously learning and improving my skills in advanced React patterns, Next.js optimization, Django backend development, and exploring new technologies in the MERN stack ecosystem."
  },
  
  // Skills & Technologies
  {
    pattern: /skills?|technologies|tech\s+stack|tools|what\s+do\s+you\s+know|competencies/i,
    answer: "My core competencies include: Frontend - Tailwind, JavaScript, jQuery, React JS, Next.js; Backend - Node.js, MongoDB, Express.js, Django; Deployment - Vercel, Render, Netlify; Version Control - Git & GitHub; Other languages - Python, NumPy, Pandas, Java, C++."
  },
  
  // Frontend Skills
  {
    pattern: /frontend|front.end|react|javascript|html|css|tailwind|jquery|next/i,
    answer: "My frontend skills include: Tailwind CSS, JavaScript, jQuery, React.js, Next.js for building modern, responsive web applications. I specialize in creating user-friendly interfaces and optimizing performance."
  },
  
  // Backend Skills
  {
    pattern: /backend|back.end|node|mongo|express|django|database/i,
    answer: "My backend technologies include: Node.js, MongoDB, Express.js, and Django. I can build robust APIs, handle database operations, and create scalable server-side applications."
  },
  
  // Professional Experience
  {
    pattern: /experience|work\s+experience|professional\s+experience|internship|job/i,
    answer: "I have professional experience including: Web Developer Intern at CodesFix (Feb-Mar 2024), Chrome Extension Developer Intern at Bytelogist (Mar-May 2024), and Frontend Developer Intern on Freelance Projects (Nov 2024-Feb 2025). I've worked on diverse projects from AI-powered tools to social media applications."
  },
  
  // CodesFix Experience
  {
    pattern: /codesfix|web\s+developer\s+intern|keyword\s+extraction|hashtag\s+generator/i,
    answer: "At CodesFix (Feb-Mar 2024), I learned HTML, CSS, and JavaScript. I developed a site that takes paragraph input, sends it to AI for keyword extraction, generates hashtags, and regenerates optimized content with keywords and hashtags included."
  },
  
  // Bytelogist Experience
  {
    pattern: /bytelogist|chrome\s+extension|youtube\s+automation/i,
    answer: "At Bytelogist (Mar-May 2024), I developed several Chrome Extensions including a YouTube Automation Extension that automatically plays videos, likes them, subscribes to channels, and comments using AI integration."
  },
  
  // Freelance Experience
  {
    pattern: /freelance|social\s+media\s+project|profile\s+pages|user\s+interface/i,
    answer: "In my Freelance Frontend Developer role (Nov 2024-Feb 2025), I collaborated on a social media application, developed User Profile and Profile Edit pages, implemented loading animations for API calls, and conducted thorough app testing."
  },
  
  // Education
  {
    pattern: /education|degree|university|college|studied|academic|islamia|bahawalpur/i,
    answer: "I'm pursuing a BS in Computer Science from The Islamia University of Bahawalpur (GPA: 3.5, started Aug 2022). I've received appreciation certificates for serving as Designer/Editor in IUB Publication Society and contributing to BLCF organization. I also completed FSC from Military College Sui (GPA: 95%, 2016-2021)."
  },
  
  // Projects Overview
  {
    pattern: /projects?|work\s+samples|what\s+have\s+you\s+built|portfolio\s+projects/i,
    answer: "I've worked on several major projects: Ecom Website (WordPress to MERN conversion with 78% speed optimization), Study Group Finder (5th semester project with group management), and Task Manager AI (advanced to-do app with AI-powered task organization). Each project demonstrates different aspects of full-stack development."
  },
  
  // Ecom Website Project
  {
    pattern: /ecom\s+website|ecommerce|wordpress\s+to\s+mern|speed\s+optimization/i,
    answer: "Ecom Website: Converted a WordPress site to MERN Stack and optimized speed by 78% (from 57 seconds to 12 seconds). Built complete Admin Panel with Order Management, Product Management, User Management systems, and added Analytics for better business insights."
  },
  
  // Study Group Finder Project
  {
    pattern: /study\s+group\s+finder|group\s+management|semester\s+project/i,
    answer: "Study Group Finder: My 5th semester project where users can search, join, leave groups, and send messages in joined groups. Includes admin panel with CRUD operations for both groups and users. Demonstrates full-stack development with user management."
  },
  
  // Task Manager AI Project
  {
    pattern: /task\s+manager\s+ai|ai\s+task|to.do|productivity\s+app/i,
    answer: "Task Manager AI: An advanced to-do list application with task creation, priority setting, time estimation, and deadline assignment features. The standout feature is AI-powered Task Organization that automatically sorts tasks based on priority and deadlines to optimize user productivity."
  },
  
  // Certifications
  {
    pattern: /certificates?|certifications?|credentials|coursera|meta|google|freecodecamp/i,
    answer: "I have professional certifications including: React Basics from Meta/Coursera (Jan 2024), Intro to Git and GitHub from Google/Coursera (Dec 2023), and Responsive Web Design from Free Code Camp (Sep 2023)."
  },
  
  // Deployment & DevOps
  {
    pattern: /deploy|deployment|hosting|vercel|render|netlify/i,
    answer: "I have extensive experience with deployment platforms including Vercel, Render, and Netlify. I can handle the complete deployment process for full-stack applications with proper CI/CD setup."
  },
  
  // Programming Languages
  {
    pattern: /python|java|c\+\+|programming\s+languages|coding\s+languages|numpy|pandas/i,
    answer: "Besides web technologies, I'm proficient in Python (with NumPy and Pandas for data analysis), Java, and C++. This diverse language background helps me tackle various programming challenges."
  },
  
  // Version Control
  {
    pattern: /git|github|version\s+control|repository/i,
    answer: "I'm experienced with Git & GitHub for version control, collaborative development, and project management. I maintain clean commit histories and follow best practices for team collaboration."
  },
  
  // Achievements & Recognition
  {
    pattern: /achievements?|awards?|recognition|appreciation|shield|certificate/i,
    answer: "I've received several recognitions: Appreciation Certificate for serving as Designer/Editor in IUB Publication Society, Shield for contributing to BLCF organization, 3rd Position in Inter House Painting & Calligraphy Competition, and participation in Drama Club and various sports activities."
  },
  
  // Performance Optimization
  {
    pattern: /optimization|performance|speed|loading|fast/i,
    answer: "I specialize in performance optimization - demonstrated by converting an ecommerce site from WordPress to MERN stack and achieving 78% speed improvement (57 seconds to 12 seconds loading time). I also implement loading animations and optimize API calls for better user experience."
  },
  
  // AI Integration
  {
    pattern: /ai|artificial\s+intelligence|machine\s+learning|ai\s+powered/i,
    answer: "I have experience integrating AI technologies into web applications, including AI-powered keyword extraction, hashtag generation, automated commenting systems, and intelligent task organization. I'm always exploring new AI integrations to enhance user experience."
  },
  
  // Contact/Availability
  {
    pattern: /contact|hire|available|reach\s+out|connect/i,
    answer: "I'm available for full-stack development projects! You can reach me through: Email (devrfgul@gmail.com), WhatsApp (03329296026), LinkedIn, GitHub, or my Portfolio website. I'm always responsive and ready to discuss new opportunities."
  },
  
  // Location
  {
    pattern: /location|where\s+are\s+you|bahawalpur|pakistan/i,
    answer: "I'm based in Bahawalpur, Pakistan, and have experience working both locally and remotely. I've successfully collaborated with international teams on freelance projects."
  },
  
  // Career Goals
  {
    pattern: /goals?|future|career|plans?|ambitions?/i,
    answer: "My goal is to continue growing as a Full Stack Developer, mastering advanced MERN stack techniques, exploring AI integrations, and taking on challenging projects that push the boundaries of web development. I'm particularly interested in performance optimization and user experience enhancement."
  },
  
  // Generic Greeting
  {
    pattern: /hi|hello|hey|greetings|good\s+morning|good\s+afternoon|good\s+evening/i,
    answer: "Hello! I'm Muhammad Fahad, a Full Stack Developer specializing in MERN Stack development. I have professional experience in web development, Chrome extensions, and AI integration. How can I help you learn more about my skills and experience?"
  },
  
  // Default/Fallback
  {
    pattern: /.*/,
    answer: "I'm Muhammad Fahad, a Full Stack Developer with expertise in MERN Stack, AI integration, and performance optimization. I have professional internship experience and have worked on various projects from ecommerce to social media applications. Feel free to ask me about my skills, projects, experience, or how to connect with me!"
  }
];

export default pattern;