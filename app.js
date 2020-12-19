const squareArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const record = [];

let player;

// Check Win
const time = setInterval(() => {
	checkWin(player);
});

// User Function
const user = () => {
	player = 'X';
	$('.square').click(e => {
		const num = Number(e.target.id);
		if (record.includes(num)) {
			$('#scoreboard').text('Pick Another Square.');
		} else {
			$(e.target).text('X').css('background', '#2e3c46');
			record.push(num);
			computer();
		}
	});
};

// Computer Function
const computer = () => {
	player = 'O';
	const rand = Math.floor(Math.random() * squareArr.length + 1);
	if (record.includes(rand)) {
		computer();
	} else {
		$(`#${rand}`).text('O').css('background', '#2e3c46');
		record.push(rand);
	}
	user();
};

// Play Again
const playAgain = () => {
	$('.square').css({ display: 'none' });
	clearInterval(time);
	setTimeout(() => {
		location = location;
	}, 1000);
};

// Game Over
const gameOver = player => {
	if (player === 'O') {
		$('#scoreboard').text('You Lose!');
		playAgain();
	} else {
		$('#scoreboard').text('You Win!');
		playAgain();
	}
};

// Check Status Function
const checkWin = player => {
	if (
		$('#1').text() === player &&
		$('#2').text() === player &&
		$('#3').text() === player
	) {
		gameOver(player);
	} else if (
		$('#4').text() === player &&
		$('#5').text() === player &&
		$('#6').text() === player
	) {
		gameOver(player);
	} else if (
		$('#7').text() === player &&
		$('#8').text() === player &&
		$('#9').text() === player
	) {
		gameOver(player);
	} else if (
		$('#1').text() === player &&
		$('#4').text() === player &&
		$('#7').text() === player
	) {
		gameOver(player);
	} else if (
		$('#2').text() === player &&
		$('#5').text() === player &&
		$('#8').text() === player
	) {
		gameOver(player);
	} else if (
		$('#3').text() === player &&
		$('#6').text() === player &&
		$('#9').text() === player
	) {
		gameOver(player);
	} else if (
		$('#1').text() === player &&
		$('#5').text() === player &&
		$('#9').text() === player
	) {
		gameOver(player);
	} else if (
		$('#3').text() === player &&
		$('#5').text() === player &&
		$('#7').text() === player
	) {
		gameOver(player);
	} else if (record.length === 9) {
		$('#scoreboard').text('Tie Game!');
		$('.square').css({ display: 'none' });
		clearInterval(time);
		setTimeout(() => {
			location = location;
		}, 1000);
	}
};

// Initialization
const init = () => {
	setTimeout(() => {
		$('#scoreboard').text('Click a Button to Play');
	}, 2000);
	user();
};

// Invocation
init();
