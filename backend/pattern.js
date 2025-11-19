

// const pattern = [
//   // Personal Information
//   {
//     pattern: /who\s+are\s+you|your\s+name|tell\s+me\s+about\s+yourself|introduce\s+yourself/i,
//     answer: "Hello! I'm Muhammad Fahad, a Full Stack Developer and MERN Stack professional. I have experience working as a Web Developer and Chrome Extension Developer, with expertise in both frontend and backend technologies."
//   },
  
//   // Contact Information
//   {
//     pattern: /phone|mobile|number|call/i,
//     answer: "You can reach me at 03329296026 for any inquiries or project discussions."
//   },
  
//   {
//     pattern: /email|mail|gmail/i,
//     answer: "You can reach me via email at devrfgul@gmail.com for professional inquiries, project discussions, or collaboration opportunities. I'm always responsive to emails!"
//   },
  
//   // Social Media/Connect
//   {
//     pattern: /social\s+media|socials?|connect\s+on|follow\s+me|social\s+platforms|where\s+can\s+i\s+find\s+you/i,
//     answer: "You can connect with me on various platforms! I'm available on LinkedIn, GitHub, and you can view my Portfolio. You can also reach me via Email (devrfgul@gmail.com) or WhatsApp (03329296026). Which specific platform would you like to connect on?"
//   },
  
//   // Specific Social Media Platforms
//   {
//     pattern: /linkedin|professional\s+network/i,
//     answer: "You can connect with me on LinkedIn for professional networking and updates about my career journey in full-stack development!"
//   },
  
//   {
//     pattern: /github|git\s+hub|code\s+repository|source\s+code/i,
//     answer: "Check out my GitHub profile to see my code repositories, contributions, and all the projects I've worked on. You'll find live demos and source code for all my projects there!"
//   },
  
//   {
//     pattern: /portfolio|website|personal\s+site/i,
//     answer: "Visit my Portfolio website to see my complete work showcase, projects, skills, and professional journey. It's the best place to get a comprehensive view of my capabilities!"
//   },
  
//   {
//     pattern: /whatsapp|whats\s+app/i,
//     answer: "I'm available on WhatsApp at 03329296026 for quick discussions about projects or any urgent inquiries. Feel free to reach out!"
//   },
  
//   // Current Learning
//   {
//     pattern: /learning|currently\s+learning|studying|what\s+are\s+you\s+learning/i,
//     answer: "I'm continuously learning and improving my skills in advanced React patterns, Next.js optimization, Django backend development, and exploring new technologies in the MERN stack ecosystem."
//   },
  
//   // Skills & Technologies
//   {
//     pattern: /skills?|technologies|tech\s+stack|tools|what\s+do\s+you\s+know|competencies/i,
//     answer: "My core competencies include: Frontend - Tailwind, JavaScript, jQuery, React JS, Next.js; Backend - Node.js, MongoDB, Express.js, Django; Deployment - Vercel, Render, Netlify; Version Control - Git & GitHub; Other languages - Python, NumPy, Pandas, Java, C++."
//   },
  
//   // Frontend Skills
//   {
//     pattern: /frontend|front.end|react|javascript|html|css|tailwind|jquery|next/i,
//     answer: "My frontend skills include: Tailwind CSS, JavaScript, jQuery, React.js, Next.js for building modern, responsive web applications. I specialize in creating user-friendly interfaces and optimizing performance."
//   },
  
//   // Backend Skills
//   {
//     pattern: /backend|back.end|node|mongo|express|django|database/i,
//     answer: "My backend technologies include: Node.js, MongoDB, Express.js, and Django. I can build robust APIs, handle database operations, and create scalable server-side applications."
//   },
  
//   // Professional Experience
//   {
//     pattern: /experience|work\s+experience|professional\s+experience|internship|job/i,
//     answer: "I have professional experience including: Web Developer Intern at CodesFix (Feb-Mar 2024), Chrome Extension Developer Intern at Bytelogist (Mar-May 2024), and Frontend Developer Intern on Freelance Projects (Nov 2024-Feb 2025). I've worked on diverse projects from AI-powered tools to social media applications."
//   },
  
//   // CodesFix Experience
//   {
//     pattern: /codesfix|web\s+developer\s+intern|keyword\s+extraction|hashtag\s+generator/i,
//     answer: "At CodesFix (Feb-Mar 2024), I learned HTML, CSS, and JavaScript. I developed a site that takes paragraph input, sends it to AI for keyword extraction, generates hashtags, and regenerates optimized content with keywords and hashtags included."
//   },
  
//   // Bytelogist Experience
//   {
//     pattern: /bytelogist|chrome\s+extension|youtube\s+automation/i,
//     answer: "At Bytelogist (Mar-May 2024), I developed several Chrome Extensions including a YouTube Automation Extension that automatically plays videos, likes them, subscribes to channels, and comments using AI integration."
//   },
  
//   // Freelance Experience
//   {
//     pattern: /freelance|social\s+media\s+project|profile\s+pages|user\s+interface/i,
//     answer: "In my Freelance Frontend Developer role (Nov 2024-Feb 2025), I collaborated on a social media application, developed User Profile and Profile Edit pages, implemented loading animations for API calls, and conducted thorough app testing."
//   },
  
//   // Education
//   {
//     pattern: /education|degree|university|college|studied|academic|islamia|bahawalpur/i,
//     answer: "I'm pursuing a BS in Computer Science from The Islamia University of Bahawalpur (GPA: 3.5, started Aug 2022). I've received appreciation certificates for serving as Designer/Editor in IUB Publication Society and contributing to BLCF organization. I also completed FSC from Military College Sui (GPA: 95%, 2016-2021)."
//   },
  
//   // Projects Overview
//   {
//     pattern: /projects?|work\s+samples|what\s+have\s+you\s+built|portfolio\s+projects/i,
//     answer: "I've worked on several major projects: Ecom Website (WordPress to MERN conversion with 78% speed optimization), Study Group Finder (5th semester project with group management), and Task Manager AI (advanced to-do app with AI-powered task organization). Each project demonstrates different aspects of full-stack development."
//   },
  
//   // Ecom Website Project
//   {
//     pattern: /ecom\s+website|ecommerce|wordpress\s+to\s+mern|speed\s+optimization/i,
//     answer: "Ecom Website: Converted a WordPress site to MERN Stack and optimized speed by 78% (from 57 seconds to 12 seconds). Built complete Admin Panel with Order Management, Product Management, User Management systems, and added Analytics for better business insights."
//   },
  
//   // Study Group Finder Project
//   {
//     pattern: /study\s+group\s+finder|group\s+management|semester\s+project/i,
//     answer: "Study Group Finder: My 5th semester project where users can search, join, leave groups, and send messages in joined groups. Includes admin panel with CRUD operations for both groups and users. Demonstrates full-stack development with user management."
//   },
  
//   // Task Manager AI Project
//   {
//     pattern: /task\s+manager\s+ai|ai\s+task|to.do|productivity\s+app/i,
//     answer: "Task Manager AI: An advanced to-do list application with task creation, priority setting, time estimation, and deadline assignment features. The standout feature is AI-powered Task Organization that automatically sorts tasks based on priority and deadlines to optimize user productivity."
//   },
  
//   // Certifications
//   {
//     pattern: /certificates?|certifications?|credentials|coursera|meta|google|freecodecamp/i,
//     answer: "I have professional certifications including: React Basics from Meta/Coursera (Jan 2024), Intro to Git and GitHub from Google/Coursera (Dec 2023), and Responsive Web Design from Free Code Camp (Sep 2023)."
//   },
  
//   // Deployment & DevOps
//   {
//     pattern: /deploy|deployment|hosting|vercel|render|netlify/i,
//     answer: "I have extensive experience with deployment platforms including Vercel, Render, and Netlify. I can handle the complete deployment process for full-stack applications with proper CI/CD setup."
//   },
  
//   // Programming Languages
//   {
//     pattern: /python|java|c\+\+|programming\s+languages|coding\s+languages|numpy|pandas/i,
//     answer: "Besides web technologies, I'm proficient in Python (with NumPy and Pandas for data analysis), Java, and C++. This diverse language background helps me tackle various programming challenges."
//   },
  
//   // Version Control
//   {
//     pattern: /git|github|version\s+control|repository/i,
//     answer: "I'm experienced with Git & GitHub for version control, collaborative development, and project management. I maintain clean commit histories and follow best practices for team collaboration."
//   },
  
//   // Achievements & Recognition
//   {
//     pattern: /achievements?|awards?|recognition|appreciation|shield|certificate/i,
//     answer: "I've received several recognitions: Appreciation Certificate for serving as Designer/Editor in IUB Publication Society, Shield for contributing to BLCF organization, 3rd Position in Inter House Painting & Calligraphy Competition, and participation in Drama Club and various sports activities."
//   },
  
//   // Performance Optimization
//   {
//     pattern: /optimization|performance|speed|loading|fast/i,
//     answer: "I specialize in performance optimization - demonstrated by converting an ecommerce site from WordPress to MERN stack and achieving 78% speed improvement (57 seconds to 12 seconds loading time). I also implement loading animations and optimize API calls for better user experience."
//   },
  
//   // AI Integration
//   {
//     pattern: /ai|artificial\s+intelligence|machine\s+learning|ai\s+powered/i,
//     answer: "I have experience integrating AI technologies into web applications, including AI-powered keyword extraction, hashtag generation, automated commenting systems, and intelligent task organization. I'm always exploring new AI integrations to enhance user experience."
//   },
  
//   // Contact/Availability
//   {
//     pattern: /contact|hire|available|reach\s+out|connect/i,
//     answer: "I'm available for full-stack development projects! You can reach me through: Email (devrfgul@gmail.com), WhatsApp (03329296026), LinkedIn, GitHub, or my Portfolio website. I'm always responsive and ready to discuss new opportunities."
//   },
  
//   // Location
//   {
//     pattern: /location|where\s+are\s+you|bahawalpur|pakistan/i,
//     answer: "I'm based in Bahawalpur, Pakistan, and have experience working both locally and remotely. I've successfully collaborated with international teams on freelance projects."
//   },
  
//   // Career Goals
//   {
//     pattern: /goals?|future|career|plans?|ambitions?/i,
//     answer: "My goal is to continue growing as a Full Stack Developer, mastering advanced MERN stack techniques, exploring AI integrations, and taking on challenging projects that push the boundaries of web development. I'm particularly interested in performance optimization and user experience enhancement."
//   },
  
//   // Generic Greeting
//   {
//     pattern: /hi|hello|hey|greetings|good\s+morning|good\s+afternoon|good\s+evening/i,
//     answer: "Hello! I'm Muhammad Fahad, a Full Stack Developer specializing in MERN Stack development. I have professional experience in web development, Chrome extensions, and AI integration. How can I help you learn more about my skills and experience?"
//   },
  
//   // Default/Fallback
//   {
//     pattern: /.*/,
//     answer: "I'm Muhammad Fahad, a Full Stack Developer with expertise in MERN Stack, AI integration, and performance optimization. I have professional internship experience and have worked on various projects from ecommerce to social media applications. Feel free to ask me about my skills, projects, experience, or how to connect with me!"
//   }
// ];

// export default pattern;




const pattern = [
  // Personal Information
  {
    pattern: /who\s+are\s+you|your\s+name|tell\s+me\s+about\s+yourself|introduce\s+yourself/i,
    answer: "Hello! I'm **Muhammad Fahad**, a **Full Stack Developer** and **MERN Stack** professional. I have experience working as a **Web Developer** and **Chrome Extension Developer**, with expertise in both frontend and backend technologies."
  },
  
  // Contact Information
  {
    pattern: /phone|mobile|number|call/i,
    answer: "You can reach me at **03329296026** for any inquiries or project discussions."
  },
  
  {
    pattern: /email|mail|gmail/i,
    answer: "You can reach me via email at **[devrfgul@gmail.com](mailto:devrfgul@gmail.com)** for professional inquiries, project discussions, or collaboration opportunities. I'm always responsive to emails!"
  },
  
  // Social Media/Connect
  {
    pattern: /social\s+media|socials?|connect\s+on|follow\s+me|social\s+platforms|where\s+can\s+i\s+find\s+you/i,
    answer: "You can connect with me on various platforms:\n\n- 💼 **LinkedIn** - Professional networking\n- 💻 **GitHub** - Code repositories\n- 🌐 **Portfolio** - Complete work showcase\n- 📧 **Email** - [devrfgul@gmail.com](mailto:devrfgul@gmail.com)\n- 💬 **WhatsApp** - 03329296026\n\nWhich specific platform would you like to connect on?"
  },
  
  // Specific Social Media Platforms
  {
    pattern: /linkedin|professional\s+network/i,
    answer: "You can connect with me on **LinkedIn** for professional networking and updates about my career journey in full-stack development!"
  },
  
  {
    pattern: /github|git\s+hub|code\s+repository|source\s+code/i,
    answer: "Check out my **GitHub profile** to see my code repositories, contributions, and all the projects I've worked on. You'll find *live demos* and *source code* for all my projects there!"
  },
  
  {
    pattern: /portfolio|website|personal\s+site/i,
    answer: "Visit my **Portfolio website** to see my complete work showcase, projects, skills, and professional journey. It's the best place to get a comprehensive view of my capabilities!"
  },
  
  {
    pattern: /whatsapp|whats\s+app/i,
    answer: "I'm available on **WhatsApp** at **03329296026** for quick discussions about projects or any urgent inquiries. Feel free to reach out!"
  },
  
  // Current Learning
  {
    pattern: /learning|currently\s+learning|studying|what\s+are\s+you\s+learning/i,
    answer: "I'm continuously learning and improving my skills in:\n\n- Advanced **React patterns**\n- **Next.js** optimization\n- **Django** backend development\n- Exploring new technologies in the **MERN stack** ecosystem"
  },
  
  // Skills & Technologies
  {
    pattern: /skills?|technologies|tech\s+stack|tools|what\s+do\s+you\s+know|competencies/i,
    answer: "## My Core Competencies\n\n**Frontend:**\n- Tailwind CSS\n- JavaScript\n- jQuery\n- React.js\n- Next.js\n\n**Backend:**\n- Node.js\n- MongoDB\n- Express.js\n- Django\n\n**Deployment:**\n- Vercel\n- Render\n- Netlify\n\n**Version Control:**\n- Git & GitHub\n\n**Other Languages:**\n- Python (NumPy, Pandas)\n- Java\n- C++"
  },
  
  // Frontend Skills
  {
    pattern: /frontend|front.end|react|javascript|html|css|tailwind|jquery|next/i,
    answer: "## Frontend Skills\n\nMy frontend expertise includes:\n\n- **Tailwind CSS** - Modern styling\n- **JavaScript** - Core language\n- **jQuery** - DOM manipulation\n- **React.js** - Component-based architecture\n- **Next.js** - Server-side rendering\n\nI specialize in creating *user-friendly interfaces* and *optimizing performance*."
  },
  
  // Backend Skills
  {
    pattern: /backend|back.end|node|mongo|express|django|database/i,
    answer: "## Backend Technologies\n\nMy backend stack includes:\n\n- **Node.js** - Runtime environment\n- **MongoDB** - NoSQL database\n- **Express.js** - Web framework\n- **Django** - Python framework\n\nI can build robust APIs, handle database operations, and create scalable server-side applications."
  },
  
  // Professional Experience
  {
    pattern: /experience|work\s+experience|professional\s+experience|internship|job/i,
    answer: "## Professional Experience\n\n**Web Developer Intern** - CodesFix\n*Feb-Mar 2024*\n\n**Chrome Extension Developer Intern** - Bytelogist\n*Mar-May 2024*\n\n**Frontend Developer Intern** - Freelance Projects\n*Nov 2024-Feb 2025*\n\nI've worked on diverse projects from AI-powered tools to social media applications."
  },
  
  // CodesFix Experience
  {
    pattern: /codesfix|web\s+developer\s+intern|keyword\s+extraction|hashtag\s+generator/i,
    answer: "## CodesFix Experience\n*Web Developer Intern (Feb-Mar 2024)*\n\nI learned **HTML, CSS, and JavaScript** and developed a site that:\n\n- Takes paragraph input\n- Sends it to AI for **keyword extraction**\n- Generates **hashtags**\n- Regenerates optimized content with keywords and hashtags included"
  },
  
  // Bytelogist Experience
  {
    pattern: /bytelogist|chrome\s+extension|youtube\s+automation/i,
    answer: "## Bytelogist Experience\n*Chrome Extension Developer Intern (Mar-May 2024)*\n\nI developed several **Chrome Extensions** including a YouTube Automation Extension that:\n\n- ▶️ Automatically plays videos\n- 👍 Likes them\n- 🔔 Subscribes to channels\n- 💬 Comments using AI integration"
  },
  
  // Freelance Experience
  {
    pattern: /freelance|social\s+media\s+project|profile\s+pages|user\s+interface/i,
    answer: "## Freelance Frontend Developer\n*Nov 2024-Feb 2025*\n\nI collaborated on a **social media application**:\n\n- Developed **User Profile** and **Profile Edit** pages\n- Implemented loading animations for API calls\n- Conducted thorough app testing\n- Ensured responsive design across devices"
  },
  
  // Education
  {
    pattern: /education|degree|university|college|studied|academic|islamia|bahawalpur/i,
    answer: "## Education\n\n**BS in Computer Science**\nThe Islamia University of Bahawalpur\n*Started Aug 2022 | GPA: 3.5*\n\n**Achievements:**\n- 🏆 Appreciation certificates for Designer/Editor in IUB Publication Society\n- 🏆 Contribution to BLCF organization\n\n**FSC**\nMilitary College Sui\n*2016-2021 | GPA: 95%*"
  },
  
  // Projects Overview
  {
    pattern: /projects?|work\s+samples|what\s+have\s+you\s+built|portfolio\s+projects/i,
    answer: "## Major Projects\n\n### 1. Ecom Website\nWordPress to MERN conversion with **78% speed optimization**\n\n### 2. Study Group Finder\n5th semester project with group management\n\n### 3. Task Manager AI\nAdvanced to-do app with AI-powered task organization\n\nEach project demonstrates different aspects of full-stack development."
  },
  
  // Ecom Website Project
  {
    pattern: /ecom\s+website|ecommerce|wordpress\s+to\s+mern|speed\s+optimization/i,
    answer: "## Ecom Website Project\n\n**Key Achievement:** Converted WordPress site to MERN Stack\n\n### Performance Optimization\n- ⚡ **78% speed improvement**\n- From 57 seconds → 12 seconds loading time\n\n### Features Built\n- 🛠️ Complete **Admin Panel**\n- 📦 **Order Management** system\n- 🏷️ **Product Management** system\n- 👥 **User Management** system\n- 📊 **Analytics** for business insights"
  },
  
  // Study Group Finder Project
  {
    pattern: /study\s+group\s+finder|group\s+management|semester\s+project/i,
    answer: "## Study Group Finder\n*5th Semester Project*\n\n### User Features\n- 🔍 Search groups\n- ➕ Join groups\n- ➖ Leave groups\n- 💬 Send messages in joined groups\n\n### Admin Panel\n- ✏️ CRUD operations for groups\n- 👤 CRUD operations for users\n\nDemonstrates full-stack development with user management."
  },
  
  // Task Manager AI Project
  {
    pattern: /task\s+manager\s+ai|ai\s+task|to.do|productivity\s+app/i,
    answer: "## Task Manager AI\n\nAn advanced to-do list application with:\n\n- ✅ Task creation\n- 🎯 Priority setting\n- ⏱️ Time estimation\n- 📅 Deadline assignment\n\n### Standout Feature\n**🤖 AI-Powered Task Organization**\n\nAutomatically sorts tasks based on priority and deadlines to optimize user productivity!"
  },
  
  // Certifications
  {
    pattern: /certificates?|certifications?|credentials|coursera|meta|google|freecodecamp/i,
    answer: "## Professional Certifications\n\n- 📜 **React Basics** - Meta/Coursera (Jan 2024)\n- 📜 **Intro to Git and GitHub** - Google/Coursera (Dec 2023)\n- 📜 **Responsive Web Design** - Free Code Camp (Sep 2023)"
  },
  
  // Deployment & DevOps
  {
    pattern: /deploy|deployment|hosting|vercel|render|netlify/i,
    answer: "## Deployment Expertise\n\nI have extensive experience with:\n\n- **Vercel** - Next.js & React apps\n- **Render** - Full-stack applications\n- **Netlify** - Static sites & SPAs\n\nI can handle the complete deployment process with proper **CI/CD setup**."
  },
  
  // Programming Languages
  {
    pattern: /python|java|c\+\+|programming\s+languages|coding\s+languages|numpy|pandas/i,
    answer: "## Programming Languages\n\nBesides web technologies, I'm proficient in:\n\n- **Python** (with NumPy and Pandas for data analysis)\n- **Java** - Object-oriented programming\n- **C++** - Systems programming\n\nThis diverse language background helps me tackle various programming challenges."
  },
  
  // Version Control
  {
    pattern: /git|github|version\s+control|repository/i,
    answer: "## Version Control Expertise\n\nI'm experienced with **Git & GitHub** for:\n\n- 🔄 Version control\n- 👥 Collaborative development\n- 📋 Project management\n\nI maintain *clean commit histories* and follow best practices for team collaboration."
  },
  
  // Achievements & Recognition
  {
    pattern: /achievements?|awards?|recognition|appreciation|shield|certificate/i,
    answer: "## Achievements & Recognition\n\n- 🏆 **Appreciation Certificate** - Designer/Editor in IUB Publication Society\n- 🛡️ **Shield** - Contributing to BLCF organization\n- 🥉 **3rd Position** - Inter House Painting & Calligraphy Competition\n- 🎭 Participation in Drama Club\n- ⚽ Various sports activities"
  },
  
  // Performance Optimization
  {
    pattern: /optimization|performance|speed|loading|fast/i,
    answer: "## Performance Optimization\n\nI specialize in making applications **fast and efficient**:\n\n### Case Study: Ecommerce Site\n- Converted from WordPress to MERN stack\n- ⚡ **78% speed improvement**\n- From *57 seconds* → *12 seconds* loading time\n\n### Other Optimizations\n- Loading animations\n- Optimized API calls\n- Better user experience"
  },
  
  // AI Integration
  {
    pattern: /ai|artificial\s+intelligence|machine\s+learning|ai\s+powered/i,
    answer: "## AI Integration Experience\n\nI have experience integrating AI technologies:\n\n- 🤖 AI-powered **keyword extraction**\n- #️⃣ **Hashtag generation**\n- 💬 Automated **commenting systems**\n- 📋 Intelligent **task organization**\n\nI'm always exploring new AI integrations to enhance user experience!"
  },
  
  // Contact/Availability
  {
    pattern: /contact|hire|available|reach\s+out|connect/i,
    answer: "## Let's Connect!\n\nI'm available for full-stack development projects!\n\n### Contact Methods\n- 📧 **Email:** [devrfgul@gmail.com](mailto:devrfgul@gmail.com)\n- 💬 **WhatsApp:** 03329296026\n- 💼 **LinkedIn**\n- 💻 **GitHub**\n- 🌐 **Portfolio Website**\n\nI'm always responsive and ready to discuss new opportunities! 🚀"
  },
  
  // Location
  {
    pattern: /location|where\s+are\s+you|bahawalpur|pakistan/i,
    answer: "I'm based in **Bahawalpur, Pakistan** 🇵🇰 and have experience working both *locally* and *remotely*. I've successfully collaborated with international teams on freelance projects."
  },
  
  // Career Goals
  {
    pattern: /goals?|future|career|plans?|ambitions?/i,
    answer: "## Career Goals\n\nMy goal is to continue growing as a **Full Stack Developer**:\n\n- 🎯 Mastering advanced MERN stack techniques\n- 🤖 Exploring AI integrations\n- 🚀 Taking on challenging projects\n- ⚡ Focusing on performance optimization\n- 🎨 Enhancing user experience\n\nI'm particularly interested in pushing the boundaries of web development!"
  },
  
  // Generic Greeting
  {
    pattern: /hi|hello|hey|greetings|good\s+morning|good\s+afternoon|good\s+evening/i,
    answer: "Hello! 👋\n\nI'm **Muhammad Fahad**, a **Full Stack Developer** specializing in **MERN Stack** development. I have professional experience in:\n\n- Web development\n- Chrome extensions\n- AI integration\n\nHow can I help you learn more about my skills and experience?"
  },
  
  // Default/Fallback
  {
    pattern: /.*/,
    answer: "I'm **Muhammad Fahad**, a **Full Stack Developer** with expertise in:\n\n- 💻 **MERN Stack**\n- 🤖 **AI integration**\n- ⚡ **Performance optimization**\n\nI have professional internship experience and have worked on various projects from ecommerce to social media applications.\n\n*Feel free to ask me about my skills, projects, experience, or how to connect with me!*"
  }
];

export default pattern;
