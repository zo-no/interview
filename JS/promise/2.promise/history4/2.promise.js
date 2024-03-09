const Promise = require('./promise');
let p = new Promise((resolve, reject) => {
    reject(1);
});
p.then().then().then(data=>{
    console.log(data);
},err=>{
    console.log(err,'err');
})

