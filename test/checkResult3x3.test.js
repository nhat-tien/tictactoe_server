import checkResult3x3 from "../utils/checkResult3x3";

test('check continous', () => {
	expect(checkResult3x3(
	  [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		],
		[2,1],
		"x"
	)).toStrictEqual({ isEnd: false, winner: null })
})

test('check draw', () => {
	expect(checkResult3x3(
	  [
			['x', 'o', 'o'],
			['o', 'x', null],
			['x', 'o', 'x'],
		],
		[1,2],
		"o"
	)).toStrictEqual({ isEnd: true, winner: null })
})

test('check win', () => {
	expect(checkResult3x3(
	  [
			['x', 'o', 'o'],
			['o', 'x', null],
			['x', 'o', null],
		],
		[2,2],
		"x"
	)).toStrictEqual({ isEnd: true, winner: "x" })
})
