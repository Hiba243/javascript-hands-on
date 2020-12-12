//JavaScript Basics

// Coding Challenge 1

var johnMass, johnHeight, markMass, markHeight, johnBMI, markBMI;
johnMass=70;
johnHeight=1.2;
markMass=75;
markHeight=1.5;

johnBMI= johnMass/(johnHeight * johnHeight);
markBMI=markMass/(markHeight *markHeight);

var result= markBMI>johnBMI;

console.log('Is Mark\'s BMI greater than John\'s?' + result);

// Coding Challenge 2

var mikeAvg, johnAvg;
mikeAvg= (116 + 94 + 123)/3;
johnAvg=(89+120+103)/3

if(mikeAvg>johnAvg){console.log('mike won');}
else if(johnAvg>mikeAvg){console.log('john won');}
else{console.log('draw');}

// Coding Challenge 3

function tipCalc(bill){
    if(bill<50){
        tip=0.2*bill;
        return tip;
    }
    else if(50<bill && bill<200){
        tip=0.15*bill;
        return tip;
    }
    else if(bill>200){
        tip=0.1*bill;
        return tip;
    }
}

var tips=[ tipCalc(124), 
          tipCalc(48),
          tipCalc(268)];
var total=[tipCalc(124)+124, tipCalc(48)+48,tipCalc(268)+268];

// Coding Challenge 4

var Mike={
    firstName:'Mike',
    lastName:'Scott',
    height:1.7,
    weight: 70,
    calcBMI: function() {
        this.BMI=this.weight/(this.height*this.height);
        return this.BMI;
    }
};
var John={
    firstName:'John',
    lastName:'Clark',
    height:1.6,
    weight: 75,
    calcBMI: function() {
        this.BMI=this.weight/(this.height*this.height);
        return this.BMI;
    }
};
Mike.calcBMI();
John.calcBMI();
if(Mike.BMI>John.BMI){
    console.log(Mike.firstName+'has higher BMI'+Mike.BMI);
}
else if(Mike.BMI<John.BMI){
    console.log(John.firstName+'has higher BMI'+John.BMI);
}
else if(Mike.BMI==John.BMI){
    console.log('same bmi');
}

// Coding challenge 5

var MikeObj={
    bill: [124,48,268,180,42],
    tip: [],
    total:[],
    calcTip: function() {
        
        for(var i=0;i<this.bill.length;i++){
        if(this.bill[i]<50){
            this.tip[i]=0.2*this.bill[i];
            this.total[i]=this.tip[i]+this.bill[i];
        }
        else if(50<this.bill[i] && this.bill[i]<200){
            this.tip[i]=0.15*this.bill[i];
            this.total[i]=this.tip[i]+this.bill[i];
        }
        else if(this.bill[i]>200){
            this.tip[i]=0.1*this.bill[i];
            this.total[i]=this.tip[i]+this.bill[i];
        }
    }
    }
};
MikeObj.calcTip();


