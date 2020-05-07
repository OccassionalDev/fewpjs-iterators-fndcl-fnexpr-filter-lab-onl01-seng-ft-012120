// Code your solution here

function findMatching(array, str) {
  let matching = array.filter(element => {return element.toLowerCase === str.toLowerCase();});
  return matching;
}
