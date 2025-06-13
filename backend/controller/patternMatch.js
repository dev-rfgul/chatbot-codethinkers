import patterns from '../pattern.js';

export const pattern = async (req,res) => {
    const userQuery = req.body;
    console.log("line no 5",userQuery)
    const matchPattern = patterns.find(item => item.pattern.test(userQuery.query));
    if (matchPattern) {
        res.json({ answer: matchPattern.answer });
    } else {
        res.json({ answer: "Sorry, I didn't understand that. Can you please rephrase?" });
    }
    console.log(`User Query: ${userQuery.query}`);
    console.log(`Matched Answer: ${matchPattern ? matchPattern.answer : "No match found"}`);
}
export default pattern;