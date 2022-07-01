function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    });
  }
  
  function on(type) {
    return new Promise(resolve => {
      document.addEventListener(type, resolve);
    });
  }
  
  
  
  async function run() {
    await on('click');
    console.log('click');
    throw new Error('something!')
    await delay(1000);
    console.log('hello');
    await delay(500);
    console.log('world');
    await delay(500);
    console.log('im there'); 
  }
  
  run()
    .then(() => console.log('ok!'))
    .catch(e => {
      console.log({ e });
    });
  
  
  // on('click')
  //   .then(() => {
  //     console.log('click');
  //     return delay(1000)
  //   })
  //   .then(() => {
  //     console.log('hello');
  //     return delay(500);
  //   })
  //   .then(data => {
  //     console.log('world');
  //     return delay(500);
  //   })
  //   .then(data => {
  //     console.log('im there');
  //   });
  
  