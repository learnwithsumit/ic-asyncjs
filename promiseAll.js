let a = false;

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        if (!a) {
            res("I am promise 1");
        } else {
            rej(new Error("I am error from promise 2"));
        }
    }, 3000);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        if (!a) {
            res("I am promise 2");
        } else {
            rej(new Error("I am error from promise 2"));
        }
    }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

Promise.race([promise1, promise2])
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
