/*jshint maxerr: 1000 */


function run(schedule) {
	window.usedSchedule = schedule;

	today = dater();
	window.PLC = isPLC(today);
	changeAdress(
		getNextTime(window.usedSchedule, today.getHours(), today.getMinutes())
	);
}

function changeAdress(adressArray) {
	window.location.href = adressArray[2];
	console.log(adressArray[2]);
}

function start() {
	schedule = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[[45, 'https://classroom.google.com/']],
		[[40, 'https://classroom.google.com/u/0/c/MTkzNDI2MjAyOFpa']],
		[[34, 'https://classroom.google.com/u/0/c/MTA0MzI4OTUyMDZa']],
		[[28, 'https://classroom.google.com/u/0/c/NzA0ODc4OTA1NVpa']],
		[
			[22, 'https://classroom.google.com/u/0/c/NzA0Mzk2MzI3Nlpa'],
			[51, 'https://classroom.google.com/'],
		],
		[
			[20, 'https://classroom.google.com/u/0/c/NzA1MjA2MDA2NFpa'],
			[49, 'https://classroom.google.com/u/0/c/NzA1MjA2MDA2NFpa'],
		],
		[[43, 'https://classroom.google.com/u/0/c/MTkzNTY2MDE5NVpa']],
		[[37, 'https://classroom.google.com/u/0/c/NzA0NDMzOTc2N1pa']],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
	];

	plcSchedule = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[[45, 'https://classroom.google.com/']],
		[[33, 'https://classroom.google.com/u/0/c/MTkzNDI2MjAyOFpa']],
		[[20, 'https://classroom.google.com/u/0/c/MTA0MzI4OTUyMDZa']],
		[
			[7, 'https://classroom.google.com/u/0/c/NzA0ODc4OTA1NVpa'],
			[54, 'https://classroom.google.com/u/0/c/NzA0Mzk2MzI3Nlpa'],
		],
		[
			[23, 'https://classroom.google.com/'],
			[52, 'https://classroom.google.com/u/0/c/NzA1MjA2MDA2NFpa'],
		],
		[[21, 'https://classroom.google.com/u/0/c/NzA1MjA2MDA2NFpa']],
		[[7, 'https://classroom.google.com/u/0/c/NzA0NDMzOTc2N1pa']],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
	];

	scheduleSend = schedule;

  today = dater();

	if (isPLC(today)) scheduleSend = plcSchedule;

	if (today.getDay() === 6 || today.getDay() === 0 || isUnusual(today)) {
		window.location.href = 'https://classroom.google.com/';
	}
	run(scheduleSend);
}
start();
