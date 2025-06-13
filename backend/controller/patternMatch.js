import patterns from '../pattern.js';

export const pattern = async (req,res) => {
    const userQuery = req.body.message;
    const matchPattern = patterns.find(item => item.pattern.test(userQuery));
    if (matchPattern) {
        res.json({ answer: matchPattern.answer });
    } else {
        res.json({ answer: "Sorry, I didn't understand that. Can you please rephrase?" });
    }
    console.log(`User Query: ${userQuery}`);
    console.log(`Matched Answer: ${matchPattern ? matchPattern.answer : "No match found"}`);
}
export default pattern;