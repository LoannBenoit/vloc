var form = {
  send: document.getElementById('submit'),
  cancel: document.getElementById('cancel'),
  canvas: document.getElementById('canvas'),
  bar: document.getElementById('determinate'),

  init: function() {
    this.checkName();
    this.getTicket();
    
    document.getElementById('form').addEventListener('change', function() {
      if (name.value == '' || firstName.value == '') {
      send.style.backgroundColor = 'lightgrey';
      send.style.pointerEvents = 'none';
      } else if (name.value != '' && firstName.value != '') {
      send.style.backgroundColor = '#78bced';
      send.style.pointerEvents = 'auto';
      }
    });

    send.addEventListener('click', function() {
      width = 100;
      station.value = "";
      bikes.value = "";
      var dispo = document.getElementById('available');
      dispo.value = "";
      document.getElementById('counterMinutes').textContent = '20';
      document.getElementById('counterSecondes').textContent = '0';
      var timeZone = document.getElementById('time_zone');
      timerSecondes = setInterval(compteur.startTimer, 1000);
      canvas.style.display = ('none');
      timeZone.style.display = ('block');
      send.style.display = ('none');
      cancel.style.display = ('block');
      compteur.startTimer(true);
    });

    cancel.addEventListener('click', function() {
      clearInterval(timerSecondes);
      var bikes =  document.getElementById('bikes');
      var dispo =  document.getElementById('available');
      var timeZone = document.getElementById('time_zone');
      station.value = "";
      bikes.value = "";
      dispo.value = "";
      canvas.style.display = ('block');
      timeZone.style.display = ('none');
      send.style.display = ('block');
      cancel.style.display = ('none');
      send.style.backgroundColor = 'lightgrey';
      send.style.pointerEvents = 'none';
    });
  },

  // Check if a 'name' and a 'firstName' were already added
  checkName: function() {
    var name = document.getElementById('name');
    var firstName = document.getElementById('first_name');
    var ticketName = document.getElementById('ticketName');
    var ticketFirstName = document.getElementById('ticketFirstName');
    if (localStorage.getItem('name')) {
    // if it already exists, add it's value
    name.value = localStorage.getItem('name');
    ticketName.textContent = localStorage.getItem('name');
    name.style.pointerEvents = 'auto';
    }
    // Change memory by changing 'name' and 'firstName
    name.addEventListener("change", function() {
      localStorage.setItem('name', name.value);
    });
    if (localStorage.getItem('firstName')) {
      firstName.value = localStorage.getItem('firstName');
      ticketFirstName.textContent = localStorage.getItem('firstName');
      firstName.style.pointerEvents = 'auto';
    }
      firstName.addEventListener("change", function() {
      localStorage.setItem('firstName', firstName.value);
    });
  },

  // Get the station value for the ticket
  getTicket: function() {
    var timeZone = document.getElementById('time_zone');
    var station = document.getElementById('station');
    var ticketStation = document.getElementById('ticketStation');
    var minutesResa = document.getElementById('counterMinutes');
    var secondesResa = document.getElementById('counterSecondes');
    
    // Set the value of TicketStation if it exists
    if (sessionStorage.getItem('station')) {
      ticketStation.textContent = sessionStorage.getItem('station');
      minutesResa.textContent = sessionStorage.getItem('minutesResa');
      secondesResa.textContent = sessionStorage.getItem('secondesResa');
      bar.style.width = sessionStorage.getItem('width');
      canvas.style.display = ('none');
      timeZone.style.display = ('block');
      send.style.display = ('none');
      cancel.style.display = ('block');
      timerSecondes = setInterval(compteur.startTimer, 1000);
      compteur.startTimer(true);
    }
    // Set the value if it doesn't exists
    send.addEventListener("click", function() {
    sessionStorage.setItem('station', station.value);
    ticketStation.textContent = sessionStorage.getItem('station');
    });
  },
  
}

