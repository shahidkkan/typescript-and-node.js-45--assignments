let guest_list:string[] = ['zakir', 'shahid', 'adil', 'faheem', 'zeeshan', 'saqab', ];
console.log('table is not available i can invite');

let friend1 = guest_list.pop();
console.log(`sory Mr.${friend1}you are not invited!`);

let friend2 = guest_list.pop();
console.log(`sory Mr.${friend2}you are not invited!`);

let friend3 = guest_list.pop();
console.log(`sory Mr.${friend3}you are not invited!`);

let friend4 = guest_list.pop();
console.log(`sory Mr.${friend4}you are not invited!`);


for(let i=0; i<guest_list.length; i++){

    console.log(`Mr ${guest_list[i]}you are still inited`);
}