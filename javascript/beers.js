
$( document ).ready(function() {
  loadBeers(0, 10);
});


function loadBeers(gt,lt) {

  $("#beersContainer").innerHTML = "";

  $.ajax({
    url: `https://api.punkapi.com/v2/beers?abv_gt=${gt}&abv_lt=${lt}`,

    success: function(result){
      for (let beer of result){
        let beerContainer = document.createElement("div");
        beerContainer.className = "beerContainer";
        let beerName = document.createElement("h4");
        beerName.innerHTML = beer.name;
        beerContainer.append(beerName);
        let tagline = document.createElement("p");
        tagline.innerHTML = beer.tagline;
        beerContainer.append(tagline);
        let abv = document.createElement("p");
        abv.innerHTML = "ABV: " + beer.abv;
        beerContainer.append(abv);
        $("#beersContainer").append(beerContainer);
      }

    },
    error: function(){
      console.log("error");
    }
  });
}

$("#light").click(function() {
  $("#beersContainer").empty();
  loadBeers(0,5);
});
$("#dark").click(function() {
  $("#beersContainer").empty();
  loadBeers(5,10);
});
$("#all").click(function() {
  $("#beersContainer").empty();
  loadBeers(0,10);
});
