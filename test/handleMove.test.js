import handleMove from "../utils/handleMove";

test("test 1", () => {
	expect(handleMove(
	  [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		],
		[2,1],
		"x"
	)).toStrictEqual(
			[
				[null, null, null],
				[null, null, null],
				[null, 'x', null],
			]
    )
})


test("test 2", () => {
	expect(handleMove(
	  [
			['o', null, null],
			['x', null, null],
			[null, null, null],
		],
		[1,1],
		"o"
	)).toStrictEqual(
			[
				['o', null, null],
				['x', 'o' , null],
				[null, null, null],
			]
    )
})

test("test 3", () => {
	expect(handleMove(
	  [
			['o', null, null],
			['x', 'o', null],
			[null, null, null],
		],
		[2,0],
		"x"
	)).toStrictEqual(
			[
				['o', null, null],
				['x', 'o' , null],
				['x', null, null],
			]
    )
})
