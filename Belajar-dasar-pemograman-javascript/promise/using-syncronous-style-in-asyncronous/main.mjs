import { doSomething } from "./utils.mjs";

async function promiseWithAsynAwai(params) {
  try {
    console.log("start");
    const result = await doSomething();
    console.log(result);
    console.log("end");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsynAwai();
