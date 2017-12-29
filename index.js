const express = require('express');

const app = express()

/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/

exports.getWeather = function getWeather (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};



const port = process.env.PORT ||3000

app.get("/", (req, res) => {
  res.send("Hello World")
})


app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
