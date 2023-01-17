console.log("Welcome to the main module");

import { createPlan } from "./plan.js";
const yearlyPlan = createPlan();
console.log(yearlyPlan)

//import { createAsparagus } from "./seeds/asparagus.js"

//const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js";

//const cornSeed = createCorn()
//console.log(cornSeed)

import { createPotato } from "./seeds/potato.js";

//const potatoSeed = createPotato()
//console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js";

//const soybeanSeed = createSoybean()
//console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js";

//const sunflowerSeed = createSunflower()
//console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js";

//const wheatSeed = createWheat()
//console.log(wheatSeed)

//write an import statement
//create a seedObject variable?
//Invoke the addPlant function where the seedObject is the argument
// invoke usePlants anf return the value in a variable
//console log the array

import { addPlant } from "./field.js";

/*
let seedObject2 = {
    type: "Poppy",
    height: 4,
    output: 4
}
*/

import { usePlants } from "./field.js";

//const plantField = usePlants()
//console.log(plantField)

import { plantSeeds } from "./tractor.js";
plantSeeds(yearlyPlan);
//let fieldArray = addPlant(seedObject)
const plantField = usePlants();

// console.log('plant field----' +plantField);
// console.log('seed object ---'+seedObject);

import { harvestPlants } from './harvester.js';
let harvest = harvestPlants(plantField)
//console.log(harvest)
//console.log(plantField)