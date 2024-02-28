let current_users : string [] = ["Admin", "Eric", "Ali", "Hamza", "Fatima"];
let new_users : string [] = ["Fatima", "Aliza", "Haseeb", "Noor"];

let current_users_lower : string [] =current_users .map(user => user.toLowerCase())

for(let new_user of new_users ){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`soory ${new_users},that name is taken`)
    }else{
        console.log(`yes ${new_users}is still in avaliable list`)
    }
}













    

    


      