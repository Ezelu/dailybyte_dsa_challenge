
// This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0


function jewelAndStones (stones, jewels) {
  dictionary = {};

  for(let each of jewels) {
    // Set the keys of the stones_dictionary by setting to 0 if it doesn't exist and adding 1 if it does
    dictionary[each] = !dictionary[each] ? 1 : dictionary[each] + 1
  }
  
  let numberOfMutuals = 0;
  let checked_stones = []
  
  
  for (let each of stones) {
    if(dictionary[each]) {
      const stone = each;
  
      if(!checked_stones.includes(stone)) {
        numberOfMutuals += dictionary[stone];
        checked_stones.push(stone)
      }
  
    }
  }

  return numberOfMutuals
}



console.log(jewelAndStones('Af', 'AaaddfFf'))






