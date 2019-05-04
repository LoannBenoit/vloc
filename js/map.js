var name = document.getElementById('name');
var firstName = document.getElementById('first_name');
var send = document.getElementById('submit');
send.style.backgroundColor = 'lightgrey';
send.style.pointerEvents = 'none';

// Declaration of the map
var map = {
    lat: 45.764043,
    lng: 4.835659,

    // Setting map's conditions
    initMap: function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: this.lat,
                lng: this.lng
            },
            zoom: 14,
        });
        ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=c0b053aec47fb9e03232563717a89df9167ab593', function(reponse){
            var stations = JSON.parse(reponse);
            stations.forEach(function(station) {
              var marker = new google.maps.Marker({
                position: station.position,
                map: map,
                title: station.name
              });	  
                marker.addListener('click', function (e) {
                  var stationName = marker.title;
                  var nbPlaces = station.bike_stands;
                  var nbFree = station.available_bike_stands;
                  document.getElementById('station').value = stationName;
                  document.getElementById('bikes').value = 'Places : ' + nbPlaces;
                  document.getElementById('available').value = nbFree;
                  
                  if (name.value == '' || firstName.value == '') {
                    if (nbFree == 0) {
                      send.style.backgroundColor = 'lightgrey';
                      send.style.pointerEvents = 'none';
                      document.getElementById('name').style.pointerEvents = 'none';
                      document.getElementById('first_name').style.pointerEvents = 'none';
                    } else if (nbFree > 0) {
                      document.getElementById('name').style.pointerEvents = 'auto';
                      document.getElementById('first_name').style.pointerEvents = 'auto';
                    } 
                  }

                  if (nbFree > 0 && name.value != '' && firstName.value != '') {
                    document.getElementById('name').style.pointerEvents = 'auto';
                    document.getElementById('first_name').style.pointerEvents = 'auto';
                    send.style.backgroundColor = '#78bced';
                    send.style.pointerEvents = 'auto';
                  } else if (nbFree == 0 && name.value != '' && firstName.value != '') {
                    document.getElementById('name').style.pointerEvents = 'auto';
                    document.getElementById('first_name').style.pointerEvents = 'auto';
                    send.style.backgroundColor = 'lightgrey';
                    send.style.pointerEvents = 'none';
                  }
                });
            });
        });
    },
}

