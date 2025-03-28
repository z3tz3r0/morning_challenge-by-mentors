class FulfillmentCenter {
    constructor() {
        // example {inventory:{ { items: [a,b], totalWeight: 3 }, ... }}
        this.cargos = [];
    }

    // input example { items: [a,b], totalWeight: 3 }
    load(newCargo) {
        if (newCargo.totalWeight > 100) return console.log("This items weight over 100");

        let currIdToFill = 0;

        while (newCargo) {
            let currFillingCargo = this.getFillingCargo(currIdToFill);
            let currCargoWeight = this.getCargoWeight(currFillingCargo);

            // check if the current cargo to fill is already the next one
            // if not, build a new cargo
            if (!currFillingCargo) {
                this.cargos.push({inventory:[newCargo]});
                newCargo = null;
                break;
            }
            // check if the current cargo to fill weight to current cargo is over 100 yet
            if (newCargo.totalWeight + currCargoWeight < 100) {
                // check which cargo to push to since next cargo could weight over 100 as well
                this.cargos[currIdToFill].inventory.push(newCargo);
                newCargo = null;
                break;
            } else {
                currIdToFill++;
            }
        }
    }

    getFillingCargo(cargoId) {
        return this.cargos[cargoId]; // return cargoObj
    }

    getCargoWeight(cargoObj) {
        return cargoObj ? cargoObj.inventory.reduce((acc,prev) => acc+= prev.totalWeight, 0) : 0; // return total cargo weight
    }

    deliver(requestCount = 1) {
        for (let i = 0; i < requestCount; i++) {
            this.cargos.shift();
        }
    }
}

const cargoInc = new FulfillmentCenter();

const order1 = { items: [1, 2], totalWeight: 10 };
const order2 = { items: [1, 2], totalWeight: 99 };
const order3 = { items: [1, 2], totalWeight: 1 };
const order4 = { items: [1, 2], totalWeight: 100 };

console.log("initial Cargo: " + cargoInc.cargos);

console.log("load order 1: 10W")
cargoInc.load(order1);
console.log("Updated cargo length: " + cargoInc.cargos.length);

console.log("load order 2: W99")
cargoInc.load(order2);
console.log("Updated cargo length: " + cargoInc.cargos.length);

console.log("load order 3: W1")
cargoInc.load(order3);
console.log("Updated cargo length: " + cargoInc.cargos.length);
console.log("Updated cargo inventory " + cargoInc.getCargoWeight(cargoInc.cargos[0]));

console.log("load order 4: W100")
cargoInc.load(order4);
console.log("Updated cargo length: " + cargoInc.cargos.length);

console.log("Sent 2")
cargoInc.deliver(2);
console.log("Updated cargo length: " + cargoInc.cargos.length);