//1
//display member function for two memebrs
function displayMember(id: number, name: string, email?: string) : void{
    console.log(`ID: ${id}, Name: ${name}`);
    if(email) console.log(`Email: ${email}`);
}
//calling displayMember fxn for 2 person
displayMember(101,"Sohail");
displayMember(102,"James","abc@gmail.com");
//******************************************************* */

//2
//calculateFine fxn 
function calculateFine(...fines: number[]):number{
    let total = 0;
    for(let num of fines) total += num;
    return total;
}
//displaying fine of 5, 10, 2.5
console.log(`Total Fine: ${calculateFine(5,10,2.5)}`);
//******************************************************* */

//3
//membershipFee fxn
function membershipFee(price: number, discount: number = 0.1):number{
    return price - price*discount;
}
//calling membershipFee
console.log(`Membership fee: $100.\nAfter Discount: $${membershipFee(100)}.`);
console.log(`Membership fee: $100.\nAfter Discount: $${membershipFee(100,0.2)}.`);//20% discount
//******************************************************* */


//4
//vip greet fxn
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
  formatter(visitor);
}
const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);

//console greet fxn
type VisitorFormatter = (name: string) => void;
let consoleGreet: VisitorFormatter = (n) => console.log(`Hello, ${n}!`);

//calling vipGreet
vipGreet("Sohail");

//calling consoleGreet
consoleGreet("Sohail");
// **************************************************************



//5
//factorial fxn
function fact(n: number): number{
    if(n <= 1) return 1;
    return n * fact(n-1);
}
//calling fact for 5
console.log(`Factorial of 5 is: ${fact(5)}.`);


//6
//generate report fxn
function generateReport(data: any[], format?: string): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }
  return data.map(item => item.title).join("\n");
}
//array of objects
const books = [{title: "1984"},{title: "Marvel"}, {title: "Spider-Man"}];

//calling generate report for text format
let txt:string= generateReport(books);
console.log(txt);

//calling generate report fxn for json format
let json:string= generateReport(books,"json");
console.log(json);