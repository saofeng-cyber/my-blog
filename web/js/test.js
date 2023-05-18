const obj = { name: "Alice", age: 25 };
Object.setPrototypeOf(obj, {
  eat() {
    console.log("吃饭");
  },
  sleep() {
    console.log("睡觉");
  },
});
console.log(Object.getPrototypeOf(obj));
