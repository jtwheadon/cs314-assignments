
//Scroll Buttons
document.getElementById("scrollToOneBtn").addEventListener("click", function() {
  document.getElementById("one").scrollIntoView();
});
document.getElementById("scrollToTwoBtn").addEventListener("click", function() {
  document.getElementById("two").scrollIntoView();
});
document.getElementById("scrollToThreeBtn").addEventListener("click", function() {
  document.getElementById("three").scrollIntoView();
});
document.getElementById("scrollToFourBtn").addEventListener("click", function() {
  document.getElementById("four").scrollIntoView();
});
document.getElementById("scrollToFiveBtn").addEventListener("click", function() {
  document.getElementById("five").scrollIntoView();
});


// Section 1
document.getElementById("blueBtn").addEventListener("click", function(){
  document.getElementById("one").style.backgroundColor = "blue";
});
document.getElementById("greenBtn").addEventListener("click", function(){
  document.getElementById("one").style.backgroundColor = "green";
});

// Section 2
let sectionTwoBtn = document.getElementById("sectionTwoBtn");
let sectionTwo = document.getElementById("two");
sectionTwoBtn.addEventListener("click", function(){
  if (sectionTwoBtn.innerHTML === "Click for pink!") {
    sectionTwo.style.backgroundColor = "pink";
    sectionTwoBtn.innerHTML = "Click for orange!";
  }
  else {
    sectionTwo.style.backgroundColor = "orange";
    sectionTwoBtn.innerHTML = "Click for pink!";
  }
});

// Section 3
let sectionThreeInput = document.getElementById("sectionThreeInput");
let sectionThreeBtn = document.getElementById("sectionThreeBtn");
let sectionThreeList = document.getElementById("sectionThreeList");
sectionThreeBtn.addEventListener("click", function(){
  let input = document.getElementById("sectionThreeInput").value;
  var newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(input));
  sectionThreeList.appendChild(newItem);
});


// Section 4
let sectionFourList = document.getElementById("sectionFourList");
let sectionFourListItems = sectionFourList.getElementsByTagName("li");
for (var i=0; i<sectionFourListItems.length; i++) {
  let listItem = sectionFourListItems[i]
  listItem.addEventListener('click', function() {
    sectionFourList.removeChild(listItem);
  });
}

// Section 5
let sectionFiveList = document.getElementById("sectionFiveList");
let sectionFiveListItems = sectionFiveList.getElementsByTagName("li");

for (var i=0; i<sectionFiveListItems.length; i++) {
  let listItem = sectionFiveListItems[i]
  listItem.addEventListener('click', function() {
    for (var i=0; i<sectionFiveListItems.length; i++) {
      sectionFiveListItems[i].style.backgroundColor = "transparent";
    }
    listItem.style.backgroundColor = "yellow";
  });
}
