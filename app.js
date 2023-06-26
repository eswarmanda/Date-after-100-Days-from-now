const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get('/', (request, response) => {
    let dateToday = new Date();
    let dates = addDays(dateToday, 100);
    let dateAfter100Days = `${dates.getDate()}/${dates.getMonth()+1}/${dates.getFullYear()}`
    response.send(dateAfter100Days);

})


module.exports = app;