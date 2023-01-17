import { harvestPlants } from "./harvester.js"

let html = '<main class="container">'
export const Catalog = (harvestedPlants) => {
 
    for(let plant of harvestedPlants){
        html += `<section class="plant"> ${plant.type}</section>`
    }
    html += `</main>`
   return html
   
    
   
}


