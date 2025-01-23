const isMommyHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMommyHappy) {
    const phone = {
      brand: "Samsung",
      color: "Black",
    };
    resolve(phone);
  } else {
    const reason = new Error("Mom is not happy");
    reject(reason);
  }
});
// console.log(willGetNewPhone);

const resolveAfterTwoSeconds = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`RESOLVED`);
    }, 2000);
  });
};

const asyncCall = async (callbackFunction) => {
  console.log(`CALLING CALLBACK FUNCTION`);
  const result = await callbackFunction();
  console.log(result);
};

// asyncCall(resolveAfterTwoSeconds);

const doubleAfterTwoSeconds = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * 2);
    }, 2000);
  });
};

const callPromise = (n, callbackFunction) => {
  return new Promise((resolve) => {
    callbackFunction(10).then((firsttResponse) => {
      callbackFunction(20).then((secondtResponse) => {
        callbackFunction(30).then((thirdtResponse) => {
          resolve(n + firsttResponse + secondtResponse + thirdtResponse);
        });
      });
    });
  });
};

callPromise(10, doubleAfterTwoSeconds).then((sum) => {
  console.log("SUM", sum);
});

const callAsync = async (n, callbackFunction) => {
  const firstResponse = await callbackFunction(10);
  const secondResponse = await callbackFunction(20);
  const thirdtResponse = await callbackFunction(30);
  return n + firstResponse + secondResponse + thirdtResponse;
};

callAsync(10, doubleAfterTwoSeconds).then((sum) => {
  console.log("SUM", sum);
});
