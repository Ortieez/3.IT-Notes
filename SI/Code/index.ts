import { LIFO, myElement } from "./element";

let myLIFO = new LIFO();
let element = new myElement("Hello");

myLIFO.store(element);
console.log(myLIFO.load().getValue());

myLIFO.store(element);
myLIFO.store(new myElement("World"));
console.log(myLIFO.load().getValue());

myLIFO.store(element);
myLIFO.store(new myElement("World"));
myLIFO.store(new myElement("!!!"));
console.log(myLIFO.load().getValue());

console.log(myElement.getCount());

myLIFO.load();

console.log(myElement.getCount());