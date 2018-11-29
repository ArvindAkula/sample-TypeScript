var DilPizza = /** @class */ (function () {
    function DilPizza() {
    }
    DilPizza.prototype.makePizza = function () {
        return "Making pizza";
    };
    DilPizza.takeOrder1 = function () {
        console.log("Making pizza" + DilPizza.pname);
        console.log("Making pizza" + DilPizza.pCompany);
        console.log("Making pizza" + DilPizza.proce);
    };
    DilPizza.prototype.addOns = function () {
        this.addons.push("Extra Cheese");
        this.addons.push("Extra Chilli");
    };
    DilPizza.pname = "Dil Pizza";
    DilPizza.pCompany = "Tata Company";
    DilPizza.proce = "200";
    return DilPizza;
}());
DilPizza.proce = "300";
DilPizza.takeOrder1();
