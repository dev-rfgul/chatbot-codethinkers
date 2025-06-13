const pattern = [
    // Specific: Best or recommended courses
    {
        pattern: /(the\s+)?(best|recommend(ed)?)(\s+(a\s+)?)?course(s)?/i,
        answer: "We recommend starting with our Full-Stack Web Development course."
    },
    // Specific: Best service
    {
        pattern: /best\s+(service|services)/i,
        answer: "Our most popular service is Full-Stack Web Development."
    },
    // Office hours / timing
    {
        pattern: /office.*(time|hours)|when.*open|timing/i,
        answer: "Our office is open from 9 AM to 6 PM, Monday to Saturday."
    },
    // Services in general
    {
        pattern: /\b(services?|offer)\b/i,
        answer: "We offer Web Development, UI/UX Design, SEO, and more."
    },
    // Course-related (broad match)
    {
        pattern: /\b(courses?|training)\b/i,
        answer: "We offer Web Development, Data Science, and Digital Marketing courses."
    },
    // Location or address
    {
        pattern: /\b(location|address|office)\b/i,
        answer: "We are located at 123 Code Street, Tech City, Country."
    },
    {
        pattern: /contact|phone|number|email|reach\s+(you|us)/i,
        answer: "You can contact us at contact@codethinker.com or call us at +1-800-123-4567."
    },
    {
        pattern: /website|web\s*site|your\s+site|visit\s+(your\s+)?(website|site)/i,
        answer: "You can visit our website at https://www.codethinker.com."
    }


];

export default pattern;
