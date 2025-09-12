import { API, sampleErrorData, sampleSuccessData } from "./support.mjs";

function processData(data) {
  // Pecah tiap item agar sesuai parameter yang diharapkan
  const promises = data.map(({ delay, simulateError }) =>
    API.fetch({ delay, simulateError })
  );

  return Promise.all(promises);
}

processData(sampleErrorData).then(console.log).catch(console.log);
// Output -> "Error from delay 50"

processData(sampleSuccessData).then(console.log).catch(console.log);
// Output -> ['Data from delay 100', 'Data from delay 50']
