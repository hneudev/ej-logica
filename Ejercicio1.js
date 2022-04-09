function toArray(obj) {
const entries = Object.entries(obj)    
return entries;
}
console.log(toArray({ a: 1, b: 2 }));
module.exports = toArray;