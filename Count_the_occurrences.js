/* Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

function countWordOccurrences(text)
//split the input sting into an array of words
{
    const words = text.split(' ');
    //create a Map to store word counts
    const wordCountMap = new Map();
    // Iterate through the words and count there occurrences 
    for(const word of words)
    {
        // Remove trailing punctuation and convert to lower case
        const cleanedWord = word.replace(/[^a-zA-Z]+/g, '').toLowerCase();
        
        if(cleanedWord)
        {
            if(wordCountMap.has(cleanedWord))
            {
                wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) +1);
            }
            else
            {
                wordCountMap.set(cleanedWord, 1)
            }
        }
    }
    return wordCountMap;
}

const txt = "Hello pw skills from east medipur kolkata pw skills";
const wordOccurrences = countWordOccurrences(txt);

for(const [word,count] of wordOccurrences)
{
    console.log(`${word}: ${count}`);
}
