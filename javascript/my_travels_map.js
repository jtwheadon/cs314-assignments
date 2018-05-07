var map;
function initMap() {
  let dubai = {lat: 25.205, lng: 55.271};
  var dubaiInfo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Dubai</h1>'+
      '<div id="bodyContent">'+
      '<p>I had the pleasure of traveling to dubai to ' +
      'help run some STEM teacher workshops with '+
      'the ministry of education.</p>'+
      '</div>'+
      '</div>';

  let glasgow = {lat: 55.864, lng: -4.252};
  var glasgowInfo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Glasgow</h1>'+
      '<div id="bodyContent">'+
      '<p>For two weeks over the Summer of 2016 ' +
      'my family and I traveled parts of Europe and '+
      'I got to explore where my step mom grew up in Scotland'+
      '</p>'+
      '</div>'+
      '</div>';

  let bahamas = {lat: 25.034, lng: -77.396};
  var bahamasInfo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Bahamas</h1>'+
      '<div id="bodyContent">'+
      '<p>My grandparents take all of their grandchildren on ' +
      'a big vacation for their 16th birthdays. '+
      'I chose to go to the bahamas and swim with dolphins!'+
      '</p>'+
      '</div>'+
      '</div>';

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 20, lng: 0}
  });

  var dubaiInfoWindow = new google.maps.InfoWindow({
    content: dubaiInfo
  });
  let dubaiMarker = new google.maps.Marker({
    position: dubai,
    map: map
  });
  dubaiMarker.addListener('click', function() {
    dubaiInfoWindow.open(map, dubaiMarker);
  });

  var glasgowInfoWindow = new google.maps.InfoWindow({
    content: glasgowInfo
  });
  let glasgowMarker = new google.maps.Marker({
    position: glasgow,
    map: map
  });
  glasgowMarker.addListener('click', function() {
    glasgowInfoWindow.open(map, glasgowMarker);
  });

  var bahamasInfoWindow = new google.maps.InfoWindow({
    content: bahamasInfo
  });
  let bahamasMarker = new google.maps.Marker({
    position: bahamas,
    map: map
  });
  bahamasMarker.addListener('click', function() {
    bahamasInfoWindow.open(map, bahamasMarker);
  });
}
