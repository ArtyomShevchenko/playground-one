fs = require('fs');

fs.readFile('./database.json', 'utf8', (err, data) => {
	if (err) {
		console.error("\nПомилка\n\n" + err);
		return;
	}
	console.log(typeof data);
	console.log( JSON.parse(data) );
});