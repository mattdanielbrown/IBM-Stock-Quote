// (Just to ensure console is easy to read while running)
console.clear();

// SETUP FOR ANYONE OUTSIDE OF REPLIT

/*
 * Download run_(platform).(file extension)
 * run the file
 */

// Dependencies
const express 						= require("express");
const https 							= require("https");

// Main variable declarations
const app 								= express();

// Default values (...variable declarations)
const hostOptionString 		= `www.google.com`;
const pathOptionString 		= `/search?q=IBM+stock`;

// Convenience option (...variable declarations)
const requestOptions 			= {host: hostOptionString, path: pathOptionString};
const htmlToReplace 			= `<div class="BNeawe iBp4i AP7Wnd">`;
const htmlToReplaceLength = htmlToReplace.length;
const closingTagToReplace = `</span>`;
const emptyString					= "";
const html2ToReplace			= `<span class="rQMQod AWuZUe">`;

app.use("/", (req, res) => {
	var content = "";
	var googlar = https.request(
		requestOptions,

		function(resp) {
			resp.setEncoding("utf8");
			resp.on("data", function(chunk) {content += chunk;});
			resp.on("end", function() {
				
				// Convenience (local) variable declarations
				var lastIndexOfElementToReplace = content.lastIndexOf(htmlToReplace);
				var lastIndexAndLengthToReplace = lastIndexOfElementToReplace + htmlToReplaceLength;
				var lastIndexAndLenOfClosingTag = content.substr(lastIndexAndLengthToReplace).indexOf(closingTagToReplace);
				var indexLengthOfFullElement		= lastIndexAndLengthToReplace + lastIndexAndLenOfClosingTag;

				// ... Build the target string to return from response
				var codebeforenum = content.substr(lastIndexAndLengthToReplace, indexLengthOfFullElement).replace(html2ToReplace, emptyString);

				// console.log(codebeforenum.indexOf(")") + ")");
				var indexOfParenthesis = codebeforenum.substr(0, codebeforenum.indexOf(")"));
				var appenedParenthesis = (indexOfParenthesis + ")").replace("+", "USD + ");

				// Actually send the extracted, parsed, and formatted text.
				res.send(appenedParenthesis);
			});
		});
	googlar.end();
});

app.listen(3000, () => { });