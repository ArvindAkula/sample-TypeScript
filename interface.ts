

interface Interior {
    type: string;
    area: number;
    budget: number;
    total: number;
    generateQuotation(): string;
    makeHouse(): string;
    collectPayment(): void;


}




class Customer implements Interior {

    type: string;
    area: number;
    budget: number;
    total: number;

    generateQuotation(): string {
        this.total = (this.area * 50);
        return "Your Quotation Amount is " + this.total;
    }

    makeHouse(): string {

        return "Your house is in progess";

    }

    collectPayment(): void {
        console.log("This is the collect method"+this.total);

    }

    greetCustomer():void{
        console.log("Greeting the customer");

    }


}





class Customer2 implements Interior {

    type: string;
    area: number;
    budget: number;
    total: number;

    generateQuotation(): string {
        this.total = (this.area * 150);
        return "Your Quotation Amount is " + this.total;
    }

    makeHouse(): string {

        return "Your house is in progess -Customer2";

    }

    collectPayment(): void {
        console.log("This is the collect method Customer2"+this.total);

    }

    greetCustomer():void{
        console.log("Greeting the  Customer2");

    }


}


let customer = new Customer();
customer.type = "Hall";
customer.area = 200;
customer.budget = 50000;
var cot3 = customer.greetCustomer();

var cot = customer.generateQuotation();
var cot1 = customer.makeHouse();

console.log(cot);
console.log(cot1);
console.log(cot3);

console.log("#########################");

let customer2 = new Customer2();
customer2.type = "Hall";
customer2.area = 200;
customer2.budget = 50000;
var cot3 = customer2.greetCustomer();
var cot = customer2.generateQuotation();
var cot1 = customer2.makeHouse();

console.log(cot);
console.log(cot1);
console.log(cot3);



