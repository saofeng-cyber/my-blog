# 基本功(JavaScript)

## 数据类型

### 基本数据类型

- String
- Number
- Boolean
- Null
- Undefined
- Symbol (ES6)

### 引用数据类型

- Object(Array)

## 数组常见的操作方法

- [isArray() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

  ```js
  console.log(Array.isArray([1, 3, 5]));
  // Expected output: true
  console.log(Array.isArray("[]"));
  // Expected output: false

  console.log(Array.isArray(new Array(5)));
  // Expected output: true
  console.log(Array.isArray(new Int16Array([15, 33])));
  // Expected output: false
  ```

- [from() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

::: details 查看详情
from() 方法创建一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
:::

```js
console.log(
  Array.from([1, 2, 3], function (item) {
    return item * 2;
  })
);
// Expected output: [2, 4, 6]
```

- [map() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  - map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

  - map() 方法按照原始数组元素顺序依次处理元素。

::: tip 注意

- map() 不会对空数组进行检测。

- map() 不会改变原始数组
  :::

```js
console.log(
  Array.map([1, 2, 3], function (item) {
    return item * 2;
  })
);
// Expected output: [2, 4, 6]
```

- [filter() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

::: details 查看详情
filter() 方法创建给定数组的一部分的**浅拷贝**，过滤到给定数组中通过所提供函数实现的测试的元素
:::

```js
console.log(
  Array.filter([1, 2, 3, 4], function (item) {
    return item % 2 === 0;
  })
);
// Expected output: [2, 4]
```

- [reduce() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
- reduce() 可以作为一个高阶函数，用于函数的 compose。
  ::: tip 注意
  reduce() 对于空数组是不会执行回调函数的。
  :::

```js
// 封装一个删除对象中的某几个属性的方法

function deleteProps(obj, props) {
  if (!Array.isArray(props)) {
    throw new TypeError("props must be an array");
  }
  return Object.keys(obj).reduce(function (previousValue, currentValue) {
    if (!props.includes(currentValue)) {
      previousValue[currentValue] = obj[currentValue];
    }
    return previousValue;
  }, {});
}
const obj = {
  name: "骚风",
  age: 24,
  sex: "男",
  hobby: ["篮球", "足球"],
  address: {
    province: "北京",
    city: "北京",
    country: "中国",
  },
};
console.log(deleteProps(obj, ["name"]));
// Expected output: {age: 18, sex: "男", hobby: ["篮球", "足球"], address: { city: "北京", country: "中国" } }
```

- [some() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```js
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

- [every() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

::: details 查看详情
every() 方法, 测试是否数组中的**所有元素都通过提供的函数实现的测试**。它返回一个 Boolean 类型的值。
:::

```js
const array = [1, 2, 3, 4, 5];
const isBelowThreshold = (currentValue) => currentValue < 10;
console.log(array1.every(isBelowThreshold));
// Expected output: true
```

- [find() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

::: details 查看详情
find() 方法返回所提供数组中满足所提供测试函数的**第一个元素**。 如果没有值满足测试函数，则返回 undefined
:::

```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
// Expected output: 12
```

- [findIndex() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

::: details 查看详情
findIndex() 方法返回满足提供的测试函数的数组中**第一个元素的索引**。 如果没有元素满足测试函数，则返回 -1。
:::

```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.findIndex((element) => element > 10);
console.log(found);
// Expected output: 2
```

- [forEach() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [includes() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [concat() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [slice() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [splice() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [reverse() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [sort() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [indexOf() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [lastIndexOf() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
- [push() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [pop() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [shift() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [unshift() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

## 对象常见的操作方法

- [Object.assign() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。

::: tip 注意
Object.assign()拷贝的是属性值，如果源对象的属性值是一个指向对象的指针，那也只拷贝那个指针。所以如果对象的属性值为基础类型，对于通过 Object.assign()拷贝的那个属性而言是深拷贝；如果对象的属性值为引用，对于通过通过 Object.assign()拷贝的那个属性而言其实是浅拷贝的
:::

```js
const obj = {
  name: "骚风",
  age: 24,
  sex: "男",
  hobby: ["篮球", "足球"],
  address: {
    province: "北京",
    city: "北京",
    country: "中国",
  },
};
const newObj = Object.assign({}, obj, {
  name: "骚风",
  age: 24,
  sex: "男",
  hobby: ["篮球", "足球"],
  address: {
    province: "北京",
    city: "北京",
    country: "中国",
  },
});
console.log(newObj);
// Expected output: {name: "骚风", age: 24, sex: "男", hobby: ["篮球", "足球"], address: { province: "北京", city: "北京", country: "中国" } }
```

- [Object.keys() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

```js
const obj = {
  name: "骚风",
  age: 24,
  sex: "男",
  hobby: ["篮球", "足球"],
  address: {
    province: "北京",
    city: "北京",
    country: "中国",
  },
};
console.log(Object.keys(obj));
// Expected output: ["name", "age", "sex", "hobby", "address"]
```

- [Object.values() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const obj = {
  name: "骚风",
  age: 24,
  sex: "男",
  hobby: ["篮球", "足球"],
  address: {
    province: "北京",
    city: "北京",
    country: "中国",
  },
};
console.log(Object.values(obj));
// Expected output: ["骚风", 24, "男", ["篮球", "足球"], { province: "北京", city: "北京", country: "中国" }]
```

- [Object.entries() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

```js
const obj = {
  name: "骚风",
  age: 24,
  sex: "男",
  hobby: ["篮球", "足球"],
  address: {
    province: "北京",
    city: "北京",
    country: "中国",
  },
};
console.log(Object.entries(obj));
// Expected output: [["name", "骚风"], ["age", 24], ["sex", "男"], ["hobby", ["篮球", "足球"]], ["address", { province: "北京", city: "北京", country: "中国" }]]
```

- [Object.fromEntries() 方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

::: details 查看详情
Object.fromEntries() 将键值对列表转换为对象。
:::

```js
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

## 原型和原型对象

在 JavaScript 中，每个对象都有一个原型对象。原型对象是一个普通的对象，它包含用于继承的属性和方法。JavaScript 中的所有对象都是从其他对象继承而来的，这种继承是通过原型链来实现的，[原型链](./base.html#原型链) 就是将一个对象的原型设置为另一个对象的引用。

在 JavaScript 中，对象可以通过以下两种方式创建：

1 使用对象字面量语法创建对象，如下所示：

```javascript
const obj = { name: "Alice", age: 25 };
```

2 使用构造函数创建对象，如下所示：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const alice = new Person("Alice", 25);
```

在上述两种情况中，对象都具有一个指向其原型对象的内部链接，这个链接指向了 JavaScript 中的 Object.prototype 对象。

例如，我们可以使用以下代码来访问一个对象的原型对象：

```javascript
const obj = { name: "Alice", age: 25 };
console.log(Object.getPrototypeOf(obj)); // 输出：{}
```

在上面的代码中，Object.getPrototypeOf(obj)函数返回对象 obj 的原型对象，这里是一个空对象{}。

类似地，我们可以通过以下方式访问构造函数的原型对象：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Object.getPrototypeOf(Person)); // 输出：[Function]
console.log(Object.getPrototypeOf(Person.prototype)); // 输出：{}
```

在上面的代码中，我们通过 Object.getPrototypeOf 函数访问了构造函数 Person 的原型对象和 Person.prototype 的原型对象。在这种情况下，Person.prototype 的原型对象是一个空对象{}。

总之，原型对象是 JavaScript 中一种重要的机制，它使得对象可以继承其他对象的属性和方法。在 JavaScript 中，每个对象都有一个指向其原型对象的内部链接，这种链接形成了原型链。

## 原型链

在 JavaScript 中，每个对象都有一个内部链接，指向它的原型对象，我们称之为原型链。原型链是由一系列对象组成的链表结构，每个对象都有一个指向它的原型对象的引用，直到这个链的末端，也就是 Object.prototype 对象。

当我们访问一个对象的属性时，如果该对象本身没有这个属性，JavaScript 引擎会沿着该对象的原型链依次查找，直到找到该属性或者到达原型链的末端。如果到达原型链的末端还没有找到该属性，则返回 undefined。

例如，假设我们有一个对象 alice，它是通过一个构造函数 Person 创建的：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person("Alice", 25);
```

此时，alice 对象的原型对象是 Person.prototype，而 Person.prototype 的原型对象是 Object.prototype。这意味着 alice 对象可以访问到 Person.prototype 和 Object.prototype 中定义的属性和方法。

例如，我们可以在 Person.prototype 中添加一个 sayHello 方法：

```javascript
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};
```

现在，我们可以通过 alice 对象调用这个方法：

```javascript
alice.sayHello(); // 输出：Hello, my name is Alice
```

在上面的代码中，虽然 alice 对象本身没有 sayHello 方法，但是 JavaScript 引擎会沿着 alice 对象的原型链依次查找，找到了 Person.prototype 中的 sayHello 方法，并调用它。

总之，原型链是由一系列对象组成的链表结构，每个对象都有一个指向它的原型对象的引用。当我们访问一个对象的属性时，如果该对象本身没有这个属性，JavaScript 引擎会沿着该对象的原型链依次查找，直到找到该属性或者到达原型链的末端。这个机制是 JavaScript 中实现继承的基础。

## 作用域

在 JavaScript 中，作用域指的是变量和函数的可访问范围。JavaScript 中有两种作用域：全局作用域和局部作用域。全局作用域是在整个代码中都可访问的，而局部作用域只在函数内部或者块级作用域内部可访问。

在 JavaScript 中，每个函数都会创建一个新的作用域。当我们在函数内部声明一个变量时，这个变量只在该函数内部可访问，而在函数外部是不可访问的。同样地，当我们在块级作用域内部声明一个变量时，这个变量只在该块级作用域内部可访问，而在块级作用域外部是不可访问的。

例如，以下代码中的变量 name 和 age 都是局部变量，它们只能在函数 sayHello 内部访问：

```javascript
function sayHello(name, age) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}
```

另外，如果我们在函数内部没有使用 var、let 或 const 关键字声明一个变量，那么这个变量就会被自动声明为全局变量，它的作用域将扩展到整个代码中。例如，以下代码中的变量 count 就是全局变量：

```javascript
function incrementCount() {
  count++;
}

let count = 0;
incrementCount();
console.log(count); // 输出：1
```

在上面的代码中，我们在函数 incrementCount 内部对变量 count 进行了自增操作，而 count 变量是在函数外部声明的，因此它是全局变量，可以在函数内部访问和修改。

总之，作用域是 JavaScript 中非常重要的一个概念，它决定了变量和函数的可访问范围。JavaScript 中有两种作用域：全局作用域和局部作用域。当我们在函数内部或者块级作用域内部声明一个变量时，这个变量只在该函数或者块级作用域内部可访问。

## 闭包

闭包是指在一个函数内部定义的函数，它可以访问该函数作用域内的变量和参数，即使该函数已经返回，该内部函数仍然可以访问它们。

具体来说，当一个函数内部定义了另一个函数，而内部函数引用了外部函数的变量或参数时，就创建了一个闭包。在 JavaScript 中，每个函数都是一个闭包，因为它们都可以访问自己的作用域以及外部作用域。

闭包可以用来创建私有变量和方法，它们可以隐藏在函数作用域内，避免与全局命名空间冲突，从而提高代码的可维护性和安全性。

以下是一个闭包的示例：

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let counter = createCounter();

counter(); // 输出：1
counter(); // 输出：2
counter(); // 输出：3
```

在上面的示例中，函数 createCounter 返回了一个内部函数，该内部函数可以访问外部函数的变量 count。因为 counter 变量引用了返回的内部函数，所以它可以持续追踪 count 变量的值，每次调用 counter 时都会将 count 加 1，并将结果输出到控制台。

值得注意的是，由于闭包可以持续追踪它们访问的外部作用域，因此在使用闭包时需要注意内存管理，避免出现内存泄漏的情况。

闭包在 JavaScript 中有着广泛的应用，它具有以下优点和特性：

优点：

1. 创建私有变量和方法：闭包可以用来创建私有变量和方法，避免全局变量污染和函数命名冲突。

2. 延长变量的生命周期：闭包可以延长变量的生命周期，使其在函数执行完毕后仍然存在于内存中，方便在以后的操作中使用。

3. 代码复用：闭包可以作为一个独立的函数单元，在多个地方调用和使用，实现代码的复用。

缺点：

1. 内存泄漏：因为闭包会一直持有外部函数作用域中的变量和对象的引用，如果不恰当地使用闭包，会导致内存泄漏。

2. 性能问题：闭包会占用更多的内存和 CPU 资源，可能会影响程序的性能，特别是在大量使用闭包的情况下。

3. 理解难度：闭包的使用需要深入理解 JavaScript 的作用域和垃圾回收机制，对于初学者来说可能会有一定的难度。

总之，闭包在 JavaScript 中是一种非常强大和灵活的特性，可以用来实现很多有用的功能和模式。然而，在使用闭包时需要注意内存管理和性能问题，确保代码的稳定性和可维护性。
