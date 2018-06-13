
    var p1map = [],
        p2map = ['ooosooooss',
                'ososoooooo',
                'ooosoooooo',
                'ooosooosoo',
                'ooooooosoo',
                'osoosoosoo',
                'osoooooooo',
                'ososoooooo',
                'ooooossooo',
                'ssooooooso'],
	var w = 10;
	var h = 10;
	
	//основная функция

	do
		 for (i = 0; i < w; i++) for (j = 0; j < h; j++) {
		  arr(i, j)
		};
	  for (i = w * h; i > 0; i--) {
      if (fire(p2map[Math.round(Math.random() * 10)][Math.round(Math.random()*10)])) backfire();
	  };
	  while(p1map.indexOf("s") !== -1 || p2map.indexOf("s") !== -1);
		
		//заполенние поля 1
 function arr(i, j) {
	  if (process.argv[i + j].length == 1) {
   p1map[i][j] = 's';
} else {
   p1map[i][j] = 'o';
}
 }
 
       //огонь по противнику 2
      function fire(el) {
        if (el == 'd' || el == 'm') return false;
        el == 's' ? 'd' : 'm';
        if (p2map.indexOf("s") == -1) {
          process.stdout.write('Victory!'); 
          return false;
        }
        if (el === 'm') return true;
      }
	  
	  //огонь по противнику 1, ответный
      function backfire() {
        for (i = w * h; i > 0; i--) {
          if (p1map.indexOf("s") == -1 || fire(p1map[Math.round(Math.random() * 10)][Math.round(Math.random() * 10)])) break;
        }
        if (p1map.indexOf("s") !== -1) process.stdout.write('You have lost!');
      }

  
