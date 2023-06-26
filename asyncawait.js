// to check whether it is connected or not
console.log("AsyncAwait Connected");

let hasmeeting = false;
let newMeeting1 = {};
const meetings1 = new Promise((resolve, reject) => {
  if (!hasmeeting) {
    newMeeting1 = {
      meetingName: "Technical meeting",
      location: "Gulshan",
      time: "10:00 AM",
    };
    resolve(newMeeting1);
  } else {
    reject(new Error("Metting already scheduled!"));
  }
});
// no need to .then in async function
(async function init() {
  try {
    const data = await meetings1;
    console.log(data.time);
  } catch {
    //console.log("Metting already scheduled!");
  }
})();

///////////////////////////////
const payment = false;

const paymentDone = () => {
  const promise = new Promise((resolve, reject) => {
    if (!payment) {
      resolve("Pyament Done!");
    } else {
      reject("You must to pay first!");
    }
  });
  return promise;
};

const process = () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Your order is Processing!");
    }, 3000);
  });
  return promise1;
};

const ready = () => {
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ready to serve");
    }, 3000);
  });
  return promise2;
};
const eatNow = () => {
  const promise3 = new Promise((resolve) => {
    resolve("You can eat now!");
  });
  return promise3;
};

(async function foodServe() {
  try {
    const donePayment = await paymentDone();
    const foodProcess = await process();
    const foodReady = await ready();
    const foodEat = await eatNow();
    console.log(donePayment);
    console.log(foodProcess);
    console.log(foodReady);
    console.log(foodEat);
  } catch (err) {
    console.log(err);
  }
})();
