// This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

// Ex: given the following strings...

// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]






function getUncommonWords (first_str, second_str) {
  let uncommonWords = [];
  const first = first_str.split(" ");
  const second = second_str.split(" ");
  const count = first.length > second.length ? first.length : second.length;


  for (let i = 0; i < count; i++) {
    let first_scoped = first[i];
    let second_scoped = second[i];

    // Add the first to uncommondWords if it is not included in the "second" and uncommonWords
    // Add the second to uncommondWords if it is not included in the "first" and unCommondWords

    if(!first.includes(second_scoped) && !uncommonWords.includes(second_scoped)) {
      uncommonWords.push(second_scoped)
    }

    if(!second.includes(first_scoped) && !uncommonWords.includes(first_scoped)) {
      uncommonWords.push(first_scoped)
    }

  } 
  
  return uncommonWords
}


const x = "copper coffee pot";
const y = "hot coffee pot";

console.log(getUncommonWords(x, y))






