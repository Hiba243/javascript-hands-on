// ES6 JavaScript

//for-each
var numbers=[5,6,7];
var sum=0;
numbers.forEach(function(number){
    console.log(number);
});

//map
var doubled=numbers.map(function(number){
    return number*2;
});
doubled;

//filter and find
var products=[
    {name:'abc',type:'word'},
    {name:'xyz',type:'word'},
    {name:243,type:'number'}
];
products.filter(function(product){
    return product.type === 'word';
});
products.find(function(product){
    return product.type === 'number';
});

//every and some
var computers=[
    {name:'apple',ram:12},
    {name:'windows',ram:3},
    {name:'linux',ram:5}
];
var allComputersCanRunProgram=true;
var onlySomeComputersCanRunProgram=false;
computers.every(function(computer){
    return computer.ram>4;
});
computers.some(function(computer){
    return computer.ram>4;
});

//reduce
numbers.reduce(function(sum,number){
    return sum+number;
},0);

//template strings
console.log(`This year is ${new Date().getFullYear()}`);

//arrow functions
const add= (a,b)=>a+b;
const newSum=add(1,2);
console.log(newSum);

//Enhanced object literal
//inventory:inventory;
//inventoryValue: function(){  }
function createBookShop(inventory){
    return{
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total,book)=>total+book.price,0);
        }
    };
}

const inventory=[
    {title:'Harry Potter', price:10},
    {title:'Narnia',price:20}
]
const bookShop=createBookShop(inventory);

//Use case of default function argument
// pass create user id fucntion as default argument when creating admin user

//Rest and spread operator
// can be used in function argument and cancatenating in arrays

//Classes: prototype and extends
// extends is same as java. prototype in old udemy course

//Destructuring of object and array
//can be used to simplify when passing many properties of an object to a function
var savedFile={
 extension:'jpg',
 size:104
};
function fileSummary({extension,size}){
    console.log(`the file ${extension} and ${size}`); 
}
fileSummary(savedFile);

const companies=[
    'uber',
    'amazon',
    'google'
];
const[name1,name2,...rest]=companies;

//Generators
function* colors(){
    yield 'red';
    yield 'blue';
}
const colorarr=[];
for(let color of colors()){
    colorarr.push(color);
}

//Promises and Fetch
let promise=new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve();
    }, 3000);
});
promise
.then(()=> console.log('finally finished'))
.then(()=> console.log('i also ran'))
.catch(()=> console.log('uh oh'));

// url=""
//fetch(url)
//.then(response=>console.log(response))
//.catch(error=>console.log('BAD',error));
//shortcoming of fetch: catch method doesnt really catch error