/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
      const end = Date.now() + milliseconds;
      while (Date.now() < end) continue;
      resolve();
    });
  }

  function main(){
    let resolvedPromise = sleep(10000);
    resolvedPromise.then(()=>{
        console.log("yo!S");
    })
  }

  main();
//module.exports = sleep;
