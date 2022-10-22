# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

// The x declared in line 1 is a global value, and is logged to the console at line 7 while the x declared on line 4 is a local variable withing the block code from line 3 - 6 and is only accessible with that block code

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

console.log(f1()) // 10 because x is defined globally, whereas console.log(y) // undefined because it is not called within the scope of y.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); // 9 this is global variable declared on line 47. The function was only called on line 54 and not logged to the console.

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y); // { x: 9 } because that's the value assigned to y. The function invoked on line 64 is not logging any variable to the console.
```

What will be the output of this code. Explain your answer in 50 words or less.
