interface Measurement {
    length: number;
    width: number;
    isShirt: boolean;
    type: string;

}

class Tailor {

    dimensions: Measurement;
    name: string;

    constructor(name?:string,dimensions?:Measurement){
     this.name=name;
     this.dimensions=dimensions;

    }

    stich(): void {
        console.log(this.dimensions);
    }


    generateBill(isShirt: boolean): void {
        if (isShirt) {
            console.log("Welcome to this Tailor", this.name);

            console.log("Your Bill is 500 ");

        } else {
            console.log("Your Bill is 1500 ");
        }


    }

}

let cust1 = new Tailor("Test Tailor",{
    length: 21, width: 10, isShirt: true, type: "apple Cut"
});
// cust1.name = "Test Tailor";
// cust1.dimensions = {
//     length: 21, width: 10, isShirt: true, type: "apple Cut"
// }
cust1.generateBill(cust1.dimensions.isShirt);
cust1.stich();

let cust2 = new Tailor();
