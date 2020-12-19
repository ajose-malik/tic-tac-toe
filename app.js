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

// Check Status Function
const checkWin = player => {
	if (
		$('#1').text() === player &&
		$('#2').text() === player &&
		$('#3').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#4').text() === player &&
		$('#5').text() === player &&
		$('#6').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#7').text() === player &&
		$('#8').text() === player &&
		$('#9').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#1').text() === player &&
		$('#4').text() === player &&
		$('#7').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#2').text() === player &&
		$('#5').text() === player &&
		$('#8').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#3').text() === player &&
		$('#6').text() === player &&
		$('#9').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#1').text() === player &&
		$('#5').text() === player &&
		$('#9').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (
		$('#3').text() === player &&
		$('#5').text() === player &&
		$('#7').text() === player
	) {
		$('#scoreboard').text(`${player} Wins.`);
	} else if (record.length > 8) {
		$('#scoreboard').text('Tie Game');
	}
};
