// const pattern = [
//     {
//         pattern: /(the\s+)?(best|recommend(ed)?)(\s+(a\s+)?)?course(s)?/i,
//         answer: "We recommend starting with our Full-Stack Web Development course."
//     },
//     // Specific: Best service
//     {
//         pattern: /best\s+(service|services)/i,
//         answer: "Our most popular service is Full-Stack Web Development."
//     },
//     // Office hours / timing
//     {
//         pattern: /office.*(time|hours)|when.*open|timing/i,
//         answer: "Our office is open from 9 AM to 6 PM, Monday to Saturday."
//     },
//     // Services in general
//     {
//         pattern: /\b(services?|offer)\b/i,
//         answer: "We offer Web Development, UI/UX Design, SEO, and more."
//     },
//     // Course-related (broad match)
//     {
//         pattern: /\b(courses?|training)\b/i,
//         answer: "We offer Web Development, Data Science, and Digital Marketing courses."
//     },
//     // Location or address
//     {
//         pattern: /\b(location|address|office)\b/i,
//         answer: "We are located at 123 Code Street, Tech City, Country."
//     },
//     {
//         pattern: /contact|phone|number|email|reach\s+(you|us)/i,
//         answer: "You can contact us at contact@codethinker.com or call us at +1-800-123-4567."
//     },
//     {
//         pattern: /website|web\s*site|your\s+site|visit\s+(your\s+)?(website|site)/i,
//         answer: "You can visit our website at https://www.codethinker.com."
//     }


// ];

// export default pattern;


const pattern = [
  // Name
  {
    pattern: /(your\s+)?name|who\s+are\s+you/i,
    answer: "My name is Muhammad Fahad."
  },
  // Title / Role
  {
    pattern: /title|position|role/i,
    answer: "I am a Full Stack Web Developer, Frontend Developer, MERN Stack Developer, Django Developer."
  },
  // Education
  {
    pattern: /education|study|university|degree/i,
    answer: "My education:\nB.Sc. Computer Science - Islamia University Bahawalpur\nFSc Pre-Engineering - Military College Sui"
  },
  // Experience
  {
    pattern: /experience|work|job/i,
    answer: "My experience:\n1 Year in Frontend Development."
  },
  // Projects
  {
    pattern: /project(s)?/i,
    answer: "I have worked on 30+ practice projects."
  },
  // Learning
  {
    pattern: /learning|currently\s+learning|studying/i,
    answer: "I am currently learning Django, Python, and Machine Learning."
  },
  // Skills
  {
    pattern: /skills?|technologies|tools/i,
    answer: "My skills include: React, JavaScript, HTML, CSS, Tailwind, Git, Responsive Design."
  },
  // Favourite Personalities
  {
    pattern: /people|favorite\s+personality|favourite\s+personality/i,
    answer: "My favourite personalities are: Muhammad Ali Jinnah, Franz Kafka, Marcus Aurelius, My Father, Janan."
  },
  // Favourite Books
  {
    pattern: /books?|favorite\s+books|favourite\s+books/i,
    answer: "My favourite books are: Meditations, The Alchemist, Atomic Habits, How to Win Friends and Influence People, Man's Search for Meaning."
  },
  // Teacher
  {
    pattern: /teacher|ai\s+teacher/i,
    answer: "My teacher is: mam Fariha."
  },
  // Favourite Movies
  {
    pattern: /movies?|favourite\s+movies|favorite\s+movies/i,
    answer: "My favourite movies include: The Shawshank Redemption, Inception, Interstellar, The Dark Knight."
  },
  // Hobbies
  {
    pattern: /hobbies?|hobby/i,
    answer: "My hobbies are: painting, calligraphy, reading books, writing diary, talking to my friends, keeping secrets, writing false philosophy, introspecting myself, reading human beings, reading body language."
  },
  // Social Links
  {
    pattern: /social(_)?links?|links/i,
    answer: "My social links include:\nLinkedIn: https://www.linkedin.com/in/muhammad-fahad-7b0a1b1b6/\nGitHub: https://www.github.com/dev-rfgul\nTwitter: https://www.twitter.com/dev_rfgul\nPortfolio: https://www.rfgul.live"
  },
  // Testimonials
  {
    pattern: /testimonial|feedback|review/i,
    answer: "Hassan Raza (CEO Bytelogist):\n\"Fahad is a true professional. Their attention to detail and commitment to quality are unmatched. They were always responsive and willing to go the extra mile to ensure our satisfaction. We highly recommend their services.\"\n\nAyesha Shoaib (HR at Evionics):\n\"Fahad demonstrates a deep understanding of modern web development frameworks and tools. His sites are responsive, user-friendly, and aesthetically pleasing. Whether custom-built or integrating third-party services, his versatility shines through.\""
  },
  // Certifications
  {
    pattern: /certification(s)?|certificate(s)?|course(s)?/i,
    answer: "My certifications include: React Basics, Git & GitHub, Responsive Web Design, Exploratory Data Analysis in Python."
  },
  // Contact
  {
    pattern: /contact|connect|reach/i,
    answer: "Feel free to reach out to me on any of the following platforms.\nI look forward to connecting with you!"
  },
  // Help
  {
    pattern: /help/i,
    answer: "You can ask me about:\n- My name\n- My title or experience\n- My skills or projects\n- My testimonials or certifications\n- How to contact me"
  },
  // Fallback
  {
    pattern: /.*/i,
    answer: "I'm not sure I understand. Try asking about my skills, projects, or education."
  }
];

export default pattern;
