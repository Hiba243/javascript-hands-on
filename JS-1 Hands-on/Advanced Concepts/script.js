// Advanced JavaScript Concepts

// Object Inheritance-Function Constructor

var Person=function(name,yob){
    this.name=name;
    this.yob=yob;
}

Person.prototype.calcAge=function(){
    console.log(2020-this.yob);
}
Person.prototype.lastName='Smith';

var John=new Person('John',1999);
var Mark=new Person('Mark',1998);

John.calcAge();
Mark.calcAge();
console.log(John.lastName);

// Prototype chaining- obj.hasownproperty()

// Object Inheritance-Object.create

var personProto={
    calculateAge: function(){
        console.log(2020-this.yobirth);
    }
}
var Hiba=Object.create(personProto,{
    name:{value:'Hiba'},
    yobirth:{value:1997}
})
Hiba.calculateAge();

// Primitives vs. Objects

var a=26;
var b=31;
a=40;
console.log(a); //40

var obj1={
    age:26
}
var obj2=obj1;
obj1.age=39;
console.log(obj1.age); //39
console.log(obj2.age); //39


hAge=12;
var fareha={
    city:'Dubai'
}
function change(a,b){
    a=10;
    b.city='San Fran';
}
change(hAge,fareha); //12, San Fran   Because primitive copy and obj reference is passed to function
console.log(hAge);
console.log(fareha.city);

// Passing functions as argument

var years=[1999,1998,1997];

function arrayCalc(arr,fn){
    var resArr=[];
    for(var i=0;i<arr.length;i++){
        resArr.push(fn(arr[i]));
    }
    return resArr;
}

function calculateAge(el){
    return 2020-el;
}
function calculatePlusTwo(el){
    return el+2;
}

var ages=arrayCalc(years,calculateAge);
var plusTwo=arrayCalc(years,calculatePlusTwo);
console.log(ages);
console.log(plusTwo);

// Returning functions

function InterviewQn(job){
    if(job==='designer'){
        return function(name){
            console.log(name+ ' Hi designer');
        }
    }
    else{
        return function(name){
            console.log(name+ ' what do you do');
        }
    }
}

var DesignerQn=InterviewQn('designer');
var NormalQn=InterviewQn();
DesignerQn('Afsha');
NormalQn('Nameera');
InterviewQn('designer')('Mom');

// Immediately Invoke Function Expression

(function(){
    var score=Math.random()*10;
    console.log(score);
})();

// Closures

function retirement(retAge){
    var a='years left';
    return function(yearOfBirth){
        var age=2020-yearOfBirth;
        console.log((retAge-age)+a);
    }
}
var retUS=retirement(66);
retUS(1999);

function InterviewQuestionn(job){
    return function(name){
        if(job==='designer'){
             console.log(name+ ' Hi designer');
        }
        else{
            console.log(name+ ' what do you do');
        }
    }
}
InterviewQn('designer')('abbu');

// Bind, Call and Apply

var jake={
    name:'jake',
    presentation: function(style,timeoOfDay){
        if(style==='formal')
        console.log('Good '+timeoOfDay+ ' I\'m '+this.name);
    
        else if(style==='casual'){
            console.log('Hi '+'Good '+timeoOfDay+ ' I\'m '+this.name);
        }
}}

jake.presentation('formal','morning');

var emily={
    name:'emily'
}

jake.presentation.call(emily,'casual','evening');
// jake.presentation.apply(emily,['casual','evening']); same as call, just use array as argument

var jakeFrienly=jake.presentation.bind(jake,'formal');
jakeFrienly('evening');

// apply to any function
// when function has 2 args, but you want to pass 3, use bind. check video

// Coding challenge 7

(function(){
    var Question=function(qn, answers, correct){
        this.qn=qn;
        this.answers=answers;
        this.correct=correct;
    }
    
    var qn1=new Question('what is my name',['Hiba','Fareha'],0);
    var qn2=new Question('what is my age',[21,22],0);
    var questions=[qn1,qn2];

    function score(){
        var sc=0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore=score();

    Question.prototype.displayQn=function(){
        console.log(this.qn);
        for (var i=0;i<this.answers.length;i++){
            console.log(i+' '+this.answers[i]);
        }
    }

    function nextQn(){
        var n=Math.floor(Math.random()*questions.length);
        questions[n].displayQn();
        var answer=prompt('type index of ans');
        if(answer!=='exit'){
        questions[n].checkAns(answer, keepScore);
        nextQn();
        }
    }

    Question.prototype.checkAns=function(ans,callback){
        if(ans==this.correct){
            console.log('correct ans');
            sc=callback(true);
        }
        else{
        console.log('wrong ans');
        sc=callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore=function(score){
        console.log(score);
    }
    
    nextQn();
    
})();

