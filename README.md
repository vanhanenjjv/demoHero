# Demo Hero

## Description

This repository contains two different services where the other one listens to HTTP events and the other one makes analytics based on events that the first service publish. Idea is that receipt API behaves as a proxy server and just provides API to for example Point of Sale systems. Analytic service other hand saves how many receipts have been received in each date which helps the development team to see if the system is working as intended and sales see how business is growing. User should be have possibility fetch analytics with selected start time and end time also limit query for selected countries
![alt text](/docs/overview.png "overview")

Example request can be found in `/http/receipt.json.http`

[Good client to do test your functionality in VS Code REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)


## Demo data

At `/tests/data/receipts.json` is 800 mock receipts that can be used as testing application functionality

## Technologies and how to use

At Receipt Hero we are heavily using Node.JS and Typescript and we hope that you have some experience also. We have added a basic boilerplate for you. This is how to set up project

```bash
npm install
npm run analytics:dev
npm run receipt-api:dev
```

Now you should see `Hello world` in your console and you are ready to implement your solution
