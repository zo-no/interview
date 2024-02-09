const Promise = require('./promise');
let p = new Promise((resolve, reject) => {
    resolve(1);
});

let promise2 = p.then(data => {
    reject('123')
});
promise2.then((data) => {
    console.log('成功', data)
}, err => {
    console.log('fail', err); // TypeError: Chaining cycle detected for promise #<Promise>
})

