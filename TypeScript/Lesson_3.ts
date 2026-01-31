//1
var city: string = "Chittaurgarh";
//***************************************************

//2
var temperature: number = 37;
//***************************************************

//3
var isRaining = false;
//***************************************************

//4
function weatherReport(city: string, temperature: number, isRaining: boolean): void{
    console.log("In ",city," it is ",temperature,"°C. Is it raining? ",isRaining);
}
weatherReport(city,temperature,isRaining);
