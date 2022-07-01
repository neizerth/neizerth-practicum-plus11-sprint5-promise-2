function errorPromise(name) {
    return new Promise((resolve, reject) => {
      reject(name);
    });
  }
  
  errorPromise(777)
    .catch(e => {
      console.log(e);
    })