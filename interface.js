var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.generateQuotation = function () {
        this.total = (this.area * 50);
        return "Your Quotation Amount is " + this.total;
    };
    Customer.prototype.makeHouse = function () {
        return "Your house is in progess";
    };
    Customer.prototype.collectPayment = function () {
        console.log("This is the collect method" + this.total);
    };
    Customer.prototype.greetCustomer = function () {
        console.log("Greeting the customer");
    };
    return Customer;
}());
var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.generateQuotation = function () {
        this.total = (this.area * 150);
        return "Your Quotation Amount is " + this.total;
    };
    Customer2.prototype.makeHouse = function () {
        return "Your house is in progess -Customer2";
    };
    Customer2.prototype.collectPayment = function () {
        console.log("This is the collect method Customer2" + this.total);
    };
    Customer2.prototype.greetCustomer = function () {
        console.log("Greeting the  Customer2");
    };
    return Customer2;
}());
var customer = new Customer();
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
var customer2 = new Customer2();
customer2.type = "Hall";
customer2.area = 200;
customer2.budget = 50000;
var cot3 = customer2.greetCustomer();
var cot = customer2.generateQuotation();
var cot1 = customer2.makeHouse();
console.log(cot);
console.log(cot1);
console.log(cot3);
