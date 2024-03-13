// let a = 90;
// let b = 3;
// let c = a + b;
// let d = a - b;
// let e = a / b;
// let f = a * b;
// let g = a % b;
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)


// // DATATYPE
// let FirstName="lahu";
// console.log(FirstName);
// console.log(typeof (FirstName))

// let Digit=20;
// console.log(Digit);
// console.log(typeof(Digit ));

// let statement=true
// console.log(statement);
// console.log(typeof(statement));

// const a = 'Hello';
// const b = 'World';
// const result = a.concat("",b);//concat is the string there are to addition to sentences
// // const result = b.toUpperCase();
// // const result = a.toLowerCase();
// console.log(result);


// const l = 'lahu';
// const k = 'kailas';
// const s = '                    Sanap          ';
// const output = s.trim();
// console.log(typeof(s));
// console.log(output);
// console.log(s);


// let a = 2;
// let b = 5;
// console.log(a < b);


let age = 19;
if (age > 18) {
  console.log('You are eligible for driving lincence');
} else {
  console.log('You are not eligible for driving lincence');
}


let a = 12;
let b = 10;
if (a == b) {
  console.log("Value is matched");
}
else {
  console.log("value doesn't match");
}


function factorial(n) {
  if (n == 0 || n == 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

let n = 5;
answer = factorial(n);
console.log(answer);