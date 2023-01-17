import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
let harvestedPlants = []

//defining the function, field array as a parameter
export const harvestPlants = (field) => {
   for(let i = 0; i < field.length; i++) {
      //console.log(field[i].output)
      if(field[i].type === "Corn"){  
         field[i].output = field[i].output / 2
      }

       for(let j = 0; j < field[i].output; j++) {
         //console.log(field[i].output)
         
            //harvestedPlants.push(...field.slice(0, finalOutput))

         
         harvestedPlants.push(field[i])
      
       }
   }
   
   //console.log(harvestedPlants)
    //return an array of seedObjects
   return harvestedPlants
}
    
   



//input the field array and to return the property's
//iterate through the objects to add seedObjects depending on output #
//return harvested food array
