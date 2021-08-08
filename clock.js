const { ToWords } = require('to-words');
const toWords = new ToWords();

class Time {
	constructor() {}
}

const tellTime = (hours, minutes) => {
	let pastTo = '';

	// correct for 24 hour time
	if (hours > 12) hours -= 12;

	//round up to nearest 5 mins
	if (minutes >= 57) {
		minutes = 0;
		hours += 1;
	}
	minutes = Math.round(minutes / 5) * 5; // check that nonsense

	// return if time is on the hour
	if (minutes === 0) return `${toWords.convert(hours).toLowerCase()} o'clock`;

	// set 'past' or 'to'
	if (minutes >= 5 && minutes <= 30) pastTo = 'past';
	if (minutes >= 35 && minutes <= 55) {
		pastTo = 'to';
		hours++;
		minutes = 60 - minutes;
	}

	// set minutes to quarter or half
	if (minutes === 15 || minutes === 45) minutes = 'quarter';
	if (minutes === 30) minutes = 'half';

	//convert numbers to words here
	hours = toWords.convert(hours).toLowerCase();
	if (typeof minutes === 'number')
		minutes = toWords.convert(minutes).toLowerCase();

	return `${minutes} ${pastTo} ${hours}`;
};

module.exports = tellTime;
