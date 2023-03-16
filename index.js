'use strict';

const sitespeed = require('sitespeed.io');
const urls = ['https://tiger.tianyancha.com/company/19009957'];

async function run() {
  try {
    const result = await sitespeed.run({
      urls,
      browsertime: {
        iterations: 1,
        connectivity: {
          "profile": "native",
          "downstreamKbps": "undefined",
          "upstreamKbps": "undefined",
          "latency": "undefined",
          "engine": "external"
        },
        browser: 'chrome'
      }
    });
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

run();
