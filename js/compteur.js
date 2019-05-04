var bar = document.getElementById('determinate');
var width = bar.style.width = sessionStorage.getItem('width');
bar.style.width = width + '%';
var counterSecondesElt = document.getElementById('counterSecondes');
var counterMinutesElt = document.getElementById('counterMinutes');
var send = document.getElementById('submit');

var compteur = {

    startTimer: function (newResa) {
      var counterSecondes = Number(counterSecondesElt.textContent);
      var counterMinutes = Number(counterMinutesElt.textContent);
      sessionStorage.setItem('minutesResa', counterMinutesElt.textContent);
      sessionStorage.setItem('secondesResa', counterSecondesElt.textContent);
      sessionStorage.setItem('width', bar.style.width);
      sessionStorage.setItem('width', Number(width));
      
        if (counterSecondesElt.textContent > -1) {
          counterSecondesElt.textContent = counterSecondes - 1;
        }
        
        if (counterMinutesElt.textContent == 0 && counterSecondesElt.textContent == 0) {
          if (sessionStorage.getItem('station')) {
            sessionStorage.setItem('minutesResa', 0);
            sessionStorage.setItem('secondesResa', 0);
          }
          clearInterval(timerSecondes);
          document.getElementById('timeSeparator').style.display = 'none';
          counterSecondesElt.style.display = 'none';
          counterMinutesElt.textContent = 'Votre réservation est arrivée à expiration !';
          clearInterval()
          sessionStorage.setItem('minutesResa', 0);
          sessionStorage.setItem('secondesResa', 0);
        }

        if (counterMinutesElt.textContent > 0 && counterSecondesElt.textContent == -1) {
          counterMinutesElt.textContent = counterMinutes - 1;
          counterSecondesElt.textContent = counterSecondes += 60;
        }

        if (sessionStorage.getItem('station')) {
        bar.style.width = sessionStorage.getItem('width');
        document.getElementById('determinate').style.width = - 1;
        counterSecondesElt.textContent = counterSecondes - 1;
        width = width - 0.083;
        bar.style.width = width + '%'
        }
    },

    stopTimer: function () {
      clearInterval(timerSecondes);
    }
}



        




