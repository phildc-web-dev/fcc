function myLocalScope() {
  const myVar = "bar";
  console.log("inside myLocalScope", myVar);
}

myLocalScope();

console.log("outside myLocalScope", myVar);
