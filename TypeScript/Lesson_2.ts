//1
let fruit: string = "Grape";
console.log(fruit);
//***************************************************


//2
function printDouble(num: number): void{
    console.log(num*2);
}
printDouble(10);
//***************************************************


//3
//this is single line comment
/* this
    is
    multi line
    comment
    */
//***************************************************


//4
class Person{
    sayHello():void{
        console.log("Hello my friend.")
    }
}

let obj = new Person();
obj.sayHello();