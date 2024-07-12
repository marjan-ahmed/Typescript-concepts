// Mobile class
class Mobile {
    brand: string = "By default" // By default
    model: string = "By default" // By default

    mobileStart() {
        return `Opening ${this.brand} ${this.model}...`;
    }    
}

// to create a new object / instance of a class
const mobileOne = new Mobile();
mobileOne.brand = "Techno";
mobileOne.model = "Spark 20C";
console.log(mobileOne.mobileStart()); // Opening Techno Spark 20C...


