/*******************************POLYFILS*************************************/
/** 
    A polyfill in JavaScript is a piece of code (usually JavaScript code) that provides functionality 
    that is not natively supported in a particular environment. Polyfills allow developers to use modern 
    features of the language or APIs while ensuring compatibility with older browsers or environments 
    that do not support those features.
 */
//In this example suppose there's no bind function inside Function interface, and we want to create it.
let name = {
  firstName: "Jane",
  lastName: "Doe",
};
function printName(greeting, ...args) {
  console.log(`${greeting ?? "Hello"}, ${this.firstName} ${this.lastName}`);
  if (args && args.length) {
    console.log("Args", args);
  }
}
Function.prototype.customBind = function (...args) {
  return (...moreArgs) => this.apply(args[0], [...args.slice(1), ...moreArgs]);
};

const customPrintNameBind = printName.customBind(
  name,
  "Hey",
  "More polyfil args"
);
customPrintNameBind("Hello", "Bind Polyfils", "MoreArgs");
