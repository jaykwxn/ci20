
$(document).ready(function() {
	 var entryCount = 0;
	 var displayCount = 0;

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++; 
    displayCount ++;     
     //translate unicode to characters    
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
    var containerWidth = $("#container").width();
    $(".inner").css("width", containerWidth / displayCount);
    $(".inner:last-child").css("width", "700px")
    $(".inner").innerClass('show')
  });

 //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
	    displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
    }
      deleteElement();
      var containerWidth = $("#container").width();
    $(".inner").css("width", containerWidth / displayCount);
    $(".inner:last-child").css("width", "700px")
    };
  });
});

function deleteElement() {
  $(".inner").last().remove();
}

function createElement(k) {
  var elem = $('#container');
  if (k == "a" || k == "A") { elem.append('<div class="inner"><img src="images/os/os_a.png"></div>'); }
  if (k == "b" || k == "B") { elem.append('<div class="inner"><img src="images/os/os_b.png"></div>'); }
  if (k == "c" || k == "C") { elem.append('<div class="inner"><img src="images/os/os_c.png"></div>'); }
  if (k == "d" || k == "D") { elem.append('<div class="inner"><img src="images/os/os_d.png"></div>'); }
  if (k == "e" || k == "E") { elem.append('<div class="inner"><img src="images/os/os_e.png"></div>'); }
  if (k == "f" || k == "F") { elem.append('<div class="inner"><img src="images/os/os_f.png"></div>'); }
  if (k == "g" || k == "G") { elem.append('<div class="inner"><img src="images/os/os_g.png"></div>'); }
  if (k == "h" || k == "H") { elem.append('<div class="inner"><img src="images/os/os_h.png"></div>'); }
  if (k == "i" || k == "I") { elem.append('<div class="inner"><img src="images/os/os_i.png"></div>'); }
  if (k == "j" || k == "J") { elem.append('<div class="inner"><img src="images/os/os_j.png"></div>'); }
  if (k == "k" || k == "K") { elem.append('<div class="inner"><img src="images/os/os_k.png"></div>'); }
  if (k == "l" || k == "L") { elem.append('<div class="inner"><img src="images/os/os_l.png"></div>'); }
  if (k == "m" || k == "M") { elem.append('<div class="inner"><img src="images/os/os_m.png"></div>'); }
  if (k == "n" || k == "N") { elem.append('<div class="inner"><img src="images/os/os_n.png"></div>'); }
  if (k == "o" || k == "O") { elem.append('<div class="inner"><img src="images/os/os_o.png"></div>'); }
  if (k == "p" || k == "P") { elem.append('<div class="inner"><img src="images/os/os_p.png"></div>'); }
  if (k == "q" || k == "Q") { elem.append('<div class="inner"><img src="images/os/os_q.png"></div>'); }
  if (k == "r" || k == "R") { elem.append('<div class="inner"><img src="images/os/os_r.png"></div>'); }
  if (k == "s" || k == "S") { elem.append('<div class="inner"><img src="images/os/os_s.png"></div>'); }
  if (k == "t" || k == "T") { elem.append('<div class="inner"><img src="images/os/os_t.png"></div>'); }
  if (k == "u" || k == "U") { elem.append('<div class="inner"><img src="images/os/os_u.png"></div>'); }
  if (k == "v" || k == "V") { elem.append('<div class="inner"><img src="images/os/os_v.png"></div>'); }
  if (k == "w" || k == "W") { elem.append('<div class="inner"><img src="images/os/os_w.png"></div>'); }
  if (k == "x" || k == "X") { elem.append('<div class="inner"><img src="images/os/os_x.png"></div>'); }
  if (k == "y" || k == "Y") { elem.append('<div class="inner"><img src="images/os/os_y.png"></div>'); }
  if (k == "z" || k == "Z") { elem.append('<div class="inner"><img src="images/os/os_z.png"></div>'); }
  if (k == "1") { elem.append('<div class="inner"><img src="images/os/os_1.png"></div>'); }
  if (k == "2") { elem.append('<div class="inner"><img src="images/os/os_2.png"></div>'); }
  if (k == "3") { elem.append('<div class="inner"><img src="images/os/os_3.png"></div>'); }
  if (k == "4") { elem.append('<div class="inner"><img src="images/os/os_4.png"></div>'); }
  if (k == "5") { elem.append('<div class="inner"><img src="images/os/os_5.png"></div>'); }
  if (k == "6") { elem.append('<div class="inner"><img src="images/os/os_6.png"></div>'); }
  if (k == "7") { elem.append('<div class="inner"><img src="images/os/os_7.png"></div>'); }
  if (k == "8") { elem.append('<div class="inner"><img src="images/os/os_8.png"></div>'); }
  if (k == "9") { elem.append('<div class="inner"><img src="images/os/os_9.png"></div>'); }
  if (k == "0") { elem.append('<div class="inner"><img src="images/os/os_0.png"></div>'); }
}


/*function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.append('<div class="inner"><img src="images/os/os_a.svg"></div>'); }
  if (k == "b" || k == "B") { elem.append('<div class="inner"><img src="images/os/os_b.svg"></div>'); }
  if (k == "c" || k == "C") { elem.append('<div class="inner"><img src="images/os/os_c.svg"></div>'); }
  if (k == "d" || k == "D") { elem.append('<div class="inner"><img src="images/os/os_d.svg"></div>'); }
  if (k == "e" || k == "E") { elem.append('<div class="inner"><img src="images/os/os_e.svg"></div>'); }
  if (k == "f" || k == "F") { elem.append('<div class="inner"><img src="images/os/os_f.svg"></div>'); }
  if (k == "g" || k == "G") { elem.append('<div class="inner"><img src="images/os/os_g.svg"></div>'); }
  if (k == "h" || k == "H") { elem.append('<div class="inner"><img src="images/os/os_h.svg"></div>'); }
  if (k == "i" || k == "I") { elem.append('<div class="inner"><img src="images/os/os_i.svg"></div>'); }
  if (k == "j" || k == "J") { elem.append('<div class="inner"><img src="images/os/os_j.svg"></div>'); }
  if (k == "k" || k == "K") { elem.append('<div class="inner"><img src="images/os/os_k.svg"></div>'); }
  if (k == "l" || k == "L") { elem.append('<div class="inner"><img src="images/os/os_l.svg"></div>'); }
  if (k == "m" || k == "M") { elem.append('<div class="inner"><img src="images/os/os_m.svg"></div>'); }
  if (k == "n" || k == "N") { elem.append('<div class="inner"><img src="images/os/os_n.svg"></div>'); }
  if (k == "o" || k == "O") { elem.append('<div class="inner"><img src="images/os/os_o.svg"></div>'); }
  if (k == "p" || k == "P") { elem.append('<div class="inner"><img src="images/os/os_p.svg"></div>'); }
  if (k == "q" || k == "Q") { elem.append('<div class="inner"><img src="images/os/os_q.png"></div>'); }
  if (k == "r" || k == "R") { elem.append('<div class="inner"><img src="images/os/os_r.svg"></div>'); }
  if (k == "s" || k == "S") { elem.append('<div class="inner"><img src="images/os/os_s.svg"></div>'); }
  if (k == "t" || k == "T") { elem.append('<div class="inner"><img src="images/os/os_t.svg"></div>'); }
  if (k == "u" || k == "U") { elem.append('<div class="inner"><img src="images/os/os_u.svg"></div>'); }
  if (k == "v" || k == "V") { elem.append('<div class="inner"><img src="images/os/os_v.svg"></div>'); }
  if (k == "w" || k == "W") { elem.append('<div class="inner"><img src="images/os/os_w.svg"></div>'); }
  if (k == "x" || k == "X") { elem.append('<div class="inner"><img src="images/os/os_x.svg"></div>'); }
  if (k == "y" || k == "Y") { elem.append('<div class="inner"><img src="images/os/os_y.svg"></div>'); }
  if (k == "z" || k == "Z") { elem.append('<div class="inner"><img src="images/os/os_z.svg"></div>'); }
  if (k == "1") { elem.append('<div class="inner"><img src="images/os/os_1.svg"></div>'); }
  if (k == "2") { elem.append('<div class="inner"><img src="images/os/os_2.svg"></div>'); }
  if (k == "3") { elem.append('<div class="inner"><img src="images/os/os_3.svg"></div>'); }
  if (k == "4") { elem.append('<div class="inner"><img src="images/os/os_4.svg"></div>'); }
  if (k == "5") { elem.append('<div class="inner"><img src="images/os/os_5.svg"></div>'); }
  if (k == "6") { elem.append('<div class="inner"><img src="images/os/os_6.svg"></div>'); }
  if (k == "7") { elem.append('<div class="inner"><img src="images/os/os_7.svg"></div>'); }
  if (k == "8") { elem.append('<div class="inner"><img src="images/os/os_8.svg"></div>'); }
  if (k == "9") { elem.append('<div class="inner"><img src="images/os/os_9.svg"></div>'); }
  if (k == "0") { elem.append('<div class="inner"><img src="images/os/os_0.svg"></div>'); }
  if (k == " ") { elem.before('<div class="inner">&nbsp;</div>'); }
} */

