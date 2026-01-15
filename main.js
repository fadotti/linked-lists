import { LinkedList } from "./classes.js";

const myList = new LinkedList();
myList.append("horsie");
myList.append("Ursulaes");
myList.prepend("Ursulaes");
console.log(myList);
console.log(myList.removeAt(1));
console.dir(myList, { depth: null });

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());