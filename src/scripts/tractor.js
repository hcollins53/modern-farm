import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
//import { addPlant } from "./field.js";
//iterate through parent and child arrays?
//iterate through a nest array
let i = 0;
let j = 0;

export const plantSeeds = (yearlyplan) => {
  //for of loop to iterate through the nested yearly plan
  //for(const seed of yearlyplan) {
  //if statement to invoke the create(seeds)functions
  
  for (i = 0; i < yearlyplan.length; i++) {
    for (j = 0; j < yearlyplan[i].length; j++) {
      //console.log(`YearlyPlan[${i}][${j}]: ${yearlyplan[i][j]}`);

      if (yearlyplan[i][j] === "Asparagus") {
        addPlant(createAsparagus());
      }
      else if (yearlyplan[i][j] === "Corn") {
        addPlant(createCorn());
       }
      else if (yearlyplan[i][j] === "Potato") {
        addPlant(createPotato());
      }
      else if (yearlyplan[i][j] === "Soybean") {
       addPlant(createSoybean());
      }
      else if (yearlyplan[i][j] === "Sunflower") {
        addPlant(createSunflower());
      }
      else if (yearlyplan[i][j] === "Wheat") {
        addPlant(createWheat());
      }
    }
  }
  
  
};
