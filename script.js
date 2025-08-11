// Async/Await = Async = Makes a function return a promise
//               Await = makes an async function wait for promise 
//                
//                Allows to write synchronus code in asynchronus method
//                Async Doesnot have resolve or reject parameters
//                Everything after Await placed in a event queue  

// Like Do these Chores in Order

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve(`You walked the dog`);
      } else {
        reject(`You didnot walked the dog`);
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve(`You cleaned the kitchen`);
      } else {
        reject(`YYou Did not cleaned the kitchen`);
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTook = true;
      if (trashTook) {
        resolve(`You took out the trash`);
      } else {
        reject(`You did not took trash out`);
      }
    }, 500);
  });
}

async function doChores() {

  try{
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);
  }

  catch(error){
    console.error(error);
  }
}

doChores();