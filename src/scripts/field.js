let field = [];

export const addPlant = (seedObject) => {
  
  if(Array.isArray(seedObject)) {
   field = field.concat(seedObject)
   //console.log(field)
  } else {
  field.push(seedObject);
  }
  //console.log(field)
  return field;
};

export const usePlants = () => {
  /*
   for(let i=0; i < field.length; i++){
     fieldCopy[i].push(field[i])
   }
   */
  return field.map((field) => ({ ...field }));

  //field.forEach((value, index) => fieldCopy[index] = value)
};
