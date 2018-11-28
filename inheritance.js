var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, company, price, discount) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.discount = discount;
    }
    Vehicle.prototype.showV = function () {
        console.log("Your vechile Name is " + this.name);
    };
    Vehicle.prototype.run = function () {
        console.log("Your vechile Name is " + this.name + " Company: " + this.company);
    };
    return Vehicle;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWheeler.prototype.run = function () {
        console.log("Your Vechile Runs at " + this.speed);
    };
    return TwoWheeler;
}(Vehicle));
var twoWheeler = new TwoWheeler();
twoWheeler.name = "TVS Scooty";
twoWheeler.company = "Tata";
twoWheeler.speed = "200 km/hr";
twoWheeler.run();
twoWheeler.showV();
