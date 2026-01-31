//1
//class for feedbacks
class FeedbackBox<T>{
    private feedbacks: T[] = [];
    addFeedback(fb : T): void{
        this.feedbacks.push(fb);
    }
    getAllFeedback():T[]{
        return [...this.feedbacks];
    }
}


//2
//generic function
function getFirstItem<T>(arr:T[]):T | undefined{
    return arr[0];
}



//testing of class
const feedBack = new FeedbackBox();
feedBack.addFeedback("ViBe is super fun.");
feedBack.addFeedback(12);
console.log(feedBack.getAllFeedback());


// testing of our function
let arr1: number[] = [1,2,3,4,5];
let arr2: string[] = ["hello","world"];
let arr3: boolean[] = [true,false];

console.log(getFirstItem(arr1));//1
console.log(getFirstItem(arr2));//hello
console.log(getFirstItem(arr1));
console.log(getFirstItem([]));//true