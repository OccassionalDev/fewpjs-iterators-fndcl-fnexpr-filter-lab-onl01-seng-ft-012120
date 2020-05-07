// Code your solution here

function findMatching(array, str) {
  return array.filter(element => {return element.toLowerCase() === str.toLowerCase();});
}

function fuzzmatch(array, str) {
  return array.filter(element => {return element.toLowerCase().indexOf(str.toLowerCase) === 0});
}