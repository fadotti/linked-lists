import { Node, LinkedList } from "./classes.js";

const myList = new LinkedList();
myList.append("horsie");
myList.append("Ursulaes");
myList.prepend("Ursulaes");
console.log(myList)
console.log(myList.toString())
