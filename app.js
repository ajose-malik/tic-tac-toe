const squareArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const record = [];

// User Function
const user = () => {
	const player = 'X';
	checkWin(player);
	$('.row').click(e => {
		const num = Number(e.target.id);
		if (record.includes(num)) {
			$('#scoreboard').text('Pick Another Square.');
			setTimeout(() => {
				$('#scoreboard').text('');
			}, 2000);
		} else {
			$(e.target).text('X').css('background', '#92a0ad');
			checkWin(player);
			record.push(num);
			computer();
		}
	});
};

// Computer Function
const computer = () => {
	const player = 'O';
	checkWin(player);
	setTimeout(() => {
		const rand = Math.floor(Math.random() * squareArr.length + 1);
		if (record.includes(rand)) {
			computer();
		} else {
			$(`#${rand}`).text('O').css('background', '#92a0ad');
			record.push(rand);
			checkWin(player);
		}
	}, 1000);
	user();
};
