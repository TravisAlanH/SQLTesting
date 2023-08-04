const { Client } = require("pg");

var conectionString = "postgres://admin:WAT499er!@10.34.3.86/ip:5432/raritan";

var pgClient = new Client(conectionString);

pgClient.connect();

var query = pgClient.query(`SELECT "ModelName" from odbc."dcModels"`);

let returnData;

query.on("row", (row, results) => {
  results.addRow(row);
  returnData = results;
});

console.log(returnData);
