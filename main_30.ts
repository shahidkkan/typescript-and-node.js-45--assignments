let users :string [] = ["adiman", "zakir", "shahid", "ali"];
  for(let user of users){
   if(user === "adiman"){
    console.log ("hellow adiman, woruld you like to see a status ");
   }else{
console.log(`hellow${user};thank you for logging in again`);
   }
  }