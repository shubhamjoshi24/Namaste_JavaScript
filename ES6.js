//  EcmaScript 6 aka EcmaScript 2015

const biodata = {
    name: "shubham",
    age: 21,
    born: "india",
    lastName: "joshi",
}

console.log(biodata);

const a = biodata.name;
console.log(a);

// Object Destructuring

const { age, born } = biodata;
console.log(age);
console.log(born);