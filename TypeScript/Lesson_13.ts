//1
// describePerson fxn
function describePerson(name: string, age?: number):void{
    if(age)console.log(`Name: ${name}, Age: ${age}`);
    else console.log(`Name: ${name}, Age: Unknown`);
}

//2
//calculatePrice fxn
function calculatePrice(basePrice: number, discount: number = 0.1):number{
    return basePrice - basePrice*discount;
}

//3
//test calls
describePerson("Eve");
describePerson("Frank", 28);
console.log(`Discount of 10%: ${calculatePrice(100)}`);      
console.log(`Discount of 20%: ${calculatePrice(100, 0.2)}`); 