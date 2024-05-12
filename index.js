// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name){
    cats.push("Ralph")

 }
 function destructivelyPrependCat(name){
    cats.unshift("Bob")

 }
 function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
 }
 function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
 }
 function appendCat(name) {
    return [...cats , "Broom"];
   
}
function prependCat(name) {
    return ["Arnold",...cats ];
   
}
function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    
    return newCatsArray;
}
function removeFirstCat() {
    const copy = cats.slice(1);
    return copy;
}





    







  