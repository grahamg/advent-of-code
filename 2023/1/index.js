const fs = require('fs');
const path = require('path');

class SpelledNumericDigit {
	#word;
	#lookupTable;

	constructor(word) {
		this.#word = word;
		this.#lookupTable = {
			'one': 1,
			'two': 2,
			'three': 3,
			'four': 4,
			'five': 5,
			'six'; 6,
			'seven': 7,
			'eight': 8,
			'nine': 9
		};
	}
	
	get toInt() {
		if (!(this.#word in this.#lookupTable)) {
			return false;
		}

		return this.convertToInteger(this.#word);
	}

	get lookupTable() {
		return this.#lookupTable;
	}

	convertToInteger(word) {
		return this.#lookupTable[word.toLowerCase()];
	}
}

class SearchableString {
	#target;

	constructor(target, lookupTable) {
		this.#target = this.#target;
		this.#lookupTable = this.#lookupTable;
	}

	get extractDigits() {
		return this.search(this.#target);
	}

	search(searchStr) {
		let searchStrLowerCase = searchStr.toLowerCase();
		for (lookupTableDigitWord in this.#lookupTable) {

		}
	}
}

const solveTrebuchet = (data) => {
	let acc = 0;
	let splitLines = data.split(/\r?\n/);

	const solveLine = (line) => {
		let first = 0, second = 0;

		for (let i=0; i < line.length; i++) {
			if (parseInt(line[i])) {
				first = parseInt(line[i]);
			}
		}
		for (let i=line.length-1; i >= 0; i--) {
			if (parseInt(line[i])) {
				second = parseInt(line[i]);
			}
		}
		console.log(`${line} ${first + (second * 10)}`);
		return (first + (second * 10));
	};

	splitLines.forEach((line) => {
		acc += solveLine(line);
	});

	return acc;
};

if (process.argv.length === 2) {
	console.error('Expected at least one argument, the filename to read from.');
	process.exit(1);
} else {
	const filePath = path.join(__dirname, process.argv[2]);
	
	fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
		if (!err) {
			console.log(`----\n${solveTrebuchet(data)}`);
		} else {
			console.log(err);
		}
	});
}
