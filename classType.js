var Tailor = /** @class */ (function () {
    function Tailor(name, dimensions) {
        this.name = name;
        this.dimensions = dimensions;
    }
    Tailor.prototype.stich = function () {
        console.log(this.dimensions);
    };
    Tailor.prototype.generateBill = function (isShirt) {
        if (isShirt) {
            console.log("Welcome to this Tailor", this.name);
            console.log("Your Bill is 500 ");
        }
        else {
            console.log("Your Bill is 1500 ");
        }
    };
    return Tailor;
}());
var cust1 = new Tailor("Test Tailor", {
    length: 21, width: 10, isShirt: true, type: "apple Cut"
});
// cust1.name = "Test Tailor";
// cust1.dimensions = {
//     length: 21, width: 10, isShirt: true, type: "apple Cut"
// }
cust1.generateBill(cust1.dimensions.isShirt);
cust1.stich();
