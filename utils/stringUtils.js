
export function writeObj(obj){ 
 var description = "object:"; 
 for(var i in obj){ 
 var property=obj[i]; 
 description+=i+" = "+property+"\n"; 
 } 
 console.log(description); 
};