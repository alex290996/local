 var vDD = process.argv[2];
 var month = process.argv[3];
 var year = bigYear(process.argv[4]);
  function bigYear(vYear)
{
	// ¬исокосный год / 400
	if ((vYear % 400) === 0)
	
		return 1;
	else
		// ¬исокосный год делитс¤ на 4 без остатка, но
		// год, / 100 без остатка, не високосный
		if (((vYear % 4) === 0) && ((vYear % 100) !== 0))
			
			return 1;
	// √од не високосный
	return 0;
}

  switch (month) {
  // ¤нварь, февраль, март
  case 'января': day = 31+28+year+31+30+31+30+31+31+30+31+30+31-vDD; break;
  case 'февраля': day = 28+year+31+30+31+30+31+31+30+31+30+31-vDD; break;
  case 'марта': day = 31+30+31+30+31+31+30+31+30+31-vDD; break;
  // јпрель, ћай, »юнь
  case 'апреля': day = 30+31+30+31+31+30+31+30+31-vDD; break;
  case 'мая': day = 31+30+31+31+30+31+30+31-vDD; break;
  case 'июня': day = 30+31+31+30+31+30+31-vDD; break;
  // »юль, јвгуст, —ент¤брь
  case 'июля': day = 31+31+30+31+30+31-vDD; break;
  case 'августа': day = 31+30+31+30+31-vDD; break;
  case 'сентября': day = 30+31+30+31-vDD; break;
  // ќкт¤брь, Ќо¤брь, ƒекабрь
  case 'октября': day = 31+30+31-vDD; break;
  case 'ноября': day = 30+31-vDD; break;
  case 'декабря': day = 31-vDD; break;
  default:
  process.stdout.write("Что-то пошло не так.");
   }
process.stdout.write(String(day));
