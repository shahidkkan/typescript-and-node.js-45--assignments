let personName: string="shahid khan";
console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:",personName.toLocaleUpperCase());

console.log("titalcase:",personName.replace(/\bw/g,c => c.toUpperCase()))