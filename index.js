
$( document ).ready(function() {
  loadPosts();
});


function loadPosts() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    success: function(result){
      for (let user of result){
        let userCard = document.createElement("div");
        userCard.className="userCard";
        let userCardTitle = document.createElement("h4");
        userCardTitle.innerHTML = user.name;
        userCard.append(userCardTitle);
        $("#usersContainer").append(userCard);
      }


    },
    error: function(){
      console.log("error");
    }
  });
}
