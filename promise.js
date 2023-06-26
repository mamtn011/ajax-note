// Promise.............................................

let hasMeeting = false;
let newMeeting = {};
const meetings = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    newMeeting = {
      meetingName: "Technical meeting",
      location: "Gulshan",
      time: "10:00 AM",
    };
    resolve(newMeeting);
  } else {
    reject(new Error("Metting already scheduled!"));
  }
});

meetings
  .then((res) => {
    for (let key in newMeeting) {
      console.log(`${key}: ${res[key]}`);
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

//multiple promise.........
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolved");
});
//Promise.all take all resolve value in an array. if any reject then jump to catch
Promise.all([promise1, promise2]).then((res) => console.log(res));
//Promise.race take 1st resolve value
Promise.race([promise1, promise2]).then((res) => console.log(res));

// win in race
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4 resolved");
  }, 2000);
});

// here show promis4 because it timeout after 2 second
Promise.race([promise3, promise4]).then((res) => console.log(res));
