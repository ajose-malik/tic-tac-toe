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
