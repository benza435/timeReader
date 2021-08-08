const each = require('jest-each').default;

const tellTime = require('../clock');

// describe('test', () => {
// 	it('should test', () => {
// 		expect(1).toBe(1);
// 	});
// });

each([
	[1, 0, "one o'clock"],
	[2, 0, "two o'clock"],
	[11, 0, "eleven o'clock"],
	[18, 0, "six o'clock"],
]).test('returns correct time on the hour', (h, m, expected) => {
	expect(tellTime(h, m)).toBe(expected);
});

each([
	[1, 5, 'five past one'],
	[2, 10, 'ten past two'],
	[3, 20, 'twenty past three'],
]).test('returns correct hour and minutes past', (h, m, expected) => {
	expect(tellTime(h, m)).toBe(expected);
});

each([
	[1, 15, 'quarter past one'],
	[22, 15, 'quarter past ten'],
	[6, 15, 'quarter past six'],
]).test('returns quarter past, not 15 minutes past', (h, m, expected) => {
	expect(tellTime(h, m)).toBe(expected);
});

each([
	[1, 45, 'quarter to two'],
	[22, 45, 'quarter to eleven'],
	[6, 45, 'quarter to seven'],
]).test('returns quarter to, not 45 minutes past', (h, m, expected) => {
	expect(tellTime(h, m)).toBe(expected);
});

each([
	[2, 30, 'half past two'],
	[23, 30, 'half past eleven'],
	[7, 30, 'half past seven'],
]).test('returns half past, not 30 minutes past', (h, m, expected) => {
	expect(tellTime(h, m)).toBe(expected);
});

each([
	[2, 38, 'twenty to three'],
	[23, 23, 'twenty five past eleven'],
	[14, 6, 'five past two'],
	[14, 7, 'five past two'],
	[14, 8, 'ten past two'],
	[14, 9, 'ten past two'],
	[17, 55, 'five to six'],
	[17, 56, 'five to six'],
	[17, 57, "six o'clock"],
	[17, 58, "six o'clock"],
	[17, 59, "six o'clock"],
]).test('rounding tests', (h, m, expected) => {
	expect(tellTime(h, m)).toBe(expected);
});
