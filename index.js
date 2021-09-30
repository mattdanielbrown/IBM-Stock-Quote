console.clear(); // Ignore

// SETUP FOR ANYONE OUTSIDE OF REPLIT
/*
Download run_(platform).(file extension)
run the file
*/

const express = require("express");
const https = require("https");

const app = express();

app.use("/", (req, res) => {
	var content = "";
	var googlar = https.request({host: `www.google.com`, path: `/search?q=IBM+stock`}, function(resp) {
		resp.setEncoding("utf8");
    resp.on("data", function (chunk) {
      content += chunk;
    });
    resp.on("end", function () {
			var codebeforenum = content.substr(content.lastIndexOf(`<div class="BNeawe iBp4i AP7Wnd">`) + `<div class="BNeawe iBp4i AP7Wnd">`.length, content.lastIndexOf(`<div class="BNeawe iBp4i AP7Wnd">`) + `<div class="BNeawe iBp4i AP7Wnd">`.length + content.substr(content.lastIndexOf(`<div class="BNeawe iBp4i AP7Wnd">`) + `<div class="BNeawe iBp4i AP7Wnd">`.length).indexOf(`</span>`)).replace(`<span class="rQMQod AWuZUe">`, "");
			res.send((codebeforenum.substr(0, codebeforenum.indexOf(")")) + ")").replace("+", "USD + "));
    });
	});
	googlar.end();
});

app.listen(3000, () => {});