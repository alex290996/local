function word(num, words)
{
	num = num%100;
	if (num > 20)
		num %= 10;
	return words[ (num > 4 || num === 0) + (num !== 1) ];
}

function sumTime(tone, ttwo)
{	
		tone = parseInt(tone);
		ttwo = parseInt(ttwo);

		const t = tone + ttwo;
		const h = Math.floor(t/3600);
		const m = Math.floor((t - 3600*h)/60);
		const s = t - 3600*h - 60*m;

		const hoursArray = ['час', 'часа', 'часов'];
		const minutesArray = ['минута', 'минуты', 'минут'];
		const secondsArray = ['секунда', 'секунды', 'секунд'];

	if ((m === 0) && (s === 0))
		process.stdout.write(String(h + ' ' + word(h, hoursArray)));
	else
		if ((h !== 0) && (s === 0))
			process.stdout.write(String(h + ' ' + word(h, hoursArray) + ' ' + m + ' ' + word(m, minutesArray)));
		else
			if (s === 0)
				process.stdout.write(String(m + ' ' + word(m, minutesArray)));
			else
				if ((h !== 0) && (m !== 0))
					process.stdout.write(String(h + ' ' + word(h, hoursArray) + ' ' + m + ' ' + word(m, minutesArray) + ' ' + s + ' ' + word(s, secondsArray)));
				else
					if (h !== 0)
						process.stdout.write(String(h + ' ' + word(h, hoursArray) + ' ' + s + ' ' + word(s, secondsArray)));
					else
						if (m !== 0)
							process.stdout.write(String(m + ' ' + word(m, minutesArray) + ' ' + s + ' ' + word(s, secondsArray)));
						else
							process.stdout.write(String(s + ' ' + word(s, secondsArray)));
	
}

sumTime([process.argv[2], process.argv[3]);
