// premier version
// il est malheureusement impossible de récupérer la valeur du tirage au sort
function toss() {
  let result;
  setTimeout(() => {
    console.log("start toss");
    let random = Math.random();
    if (random > 0.5) {
      result = true;
    } else {
      result = false;
    }
  }, 1000);
  console.log("end toss");
  return result;
}

//const myToss = toss();
//console.log("result:", myToss);

// seconde version (avec callback)
// Grâce à l'utilisation d'un callback, on peut accéder au réultat du tirage
// quand celui ci est terminée.
function tossWithCallback(callback) {
  let result;
  setTimeout(() => {
    console.log("start callback toss");
    let random = Math.random();
    if (random > 0.5) {
      result = true;
    }
    result = false;
    callback(result);
  }, 1000);
  
  return result;
}

// let MyToss2;
// tossWithCallback((result) => {
//   console.log("end callback toss");
//   MyToss2 = result;
//   console.log("result (with callback):", MyToss2);
// });

// 3eme version.
// on retourne maintenant une promesse
function tossWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("start promise toss");
      let random = Math.random();
      if (random > 0.5) {
        resolve("c'est ok c'était bien > à 0.5");
      } else {
        reject("Too bad, le tirage était inférieur à 0.5");
      }
    }, 1000);
  });
}
/*
function tirage() {
  tossWithPromise()
    .then((result) => {
      console.log("end promise toss");
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function tirage2() {
  try {
    const result = await tossWithPromise();
    console.log("end promise toss");
    console.log("result3:", result);
  } catch (error) {
    console.log(error);
  }
}
*/

async function getToss(){
  const result = await tossWithPromise();
  console.log(result);
}

getToss();

/* exemple
async function query(sql){
  //appeler le DB
  const result = await appelProsgres(sql);
  return result;
}
*/



async function toto(){
  return "boum"
}

toto().then(result=>{
  console.log(result)
})

async function getToto(){
  result = await toto();
  console.log(result)
}