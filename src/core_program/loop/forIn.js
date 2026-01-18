let obj= {
    name: "Joy with Java",
    version: "jdk 25",
    released: "1995"
}

// key represent field of obj not value
// obj represent whole thing of obj
for(const key in obj){
    console.log(`${key} -> ${obj[key]}`);

}