Promise.resolve(23);
Promise.reject(23);


const promise = Promise.all([
    promise1,
    promise2
]);

Promise.race([
    promise1,
    promise2
]);