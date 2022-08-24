// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, 
// return whether or not it will return to its original position. The string will only
// contain L, R, U, and D characters, representing left, right, up, and down respectively.


// ALGORITHM EXPLANATION
// Checks if the number of lefts (L) are equal to rights (R)
// checks if the number of ups (U) are equal to downs (D)

function vacuumCleanerRoute ( routes ) {
  let route_description = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };

  for ( let each of routes ) {
    route_description[each] = route_description[each] + 1
  }

  const { L, R, U, D } = route_description; // Destructuring the routes

  if(L == R && U == D) {
    return true;
  }

  return false
}


console.log(vacuumCleanerRoute("LR")) // return true
console.log(vacuumCleanerRoute("URURD")) // return true
console.log(vacuumCleanerRoute("RUULLDRD")) // return true















