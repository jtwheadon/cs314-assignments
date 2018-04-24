
$( document ).ready(function() {
  loadUsers();
});


function loadUsers() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",

    success: function(result){
      for (let user of result){

        //create user card template
        let userCard = document.createElement("div");
        userCard.className="userCard";
        userCard.setAttribute('id', `user${user.id}`);

        let userName = document.createElement("h4");
        userName.innerHTML = user.name;
        userCard.append(userName);
        let userEmail = document.createElement("p");
        userEmail.innerHTML = user.email;
        userCard.append(userEmail);
        let userCompany = document.createElement("p");
        userCompany.innerHTML = user.company.name;
        userCard.append(userCompany);

        // buttonsContainer
        let userCardButtons = document.createElement("div");
        userCardButtons.className="userCardButtons";

        let todoBtn = document.createElement("div");
        todoBtn.className="button";
        todoBtn.innerHTML = "View Todos";
        todoBtn.setAttribute("hasLoaded", "false");
        $(todoBtn).click(function() {
          $(`#albumsContainer${user.id}`).hide();
          if($(todoBtn).attr("hasLoaded") === "false"){
            todoBtn.setAttribute("hasLoaded", "true");
            loadTodos(user.id);
          }
          else {
            $(`#todosContainer${user.id}`).toggle();
          }
        });
        userCardButtons.append(todoBtn);

        let albumsBtn = document.createElement("div");
        albumsBtn.className="button";
        albumsBtn.innerHTML = "View Albums";
        albumsBtn.setAttribute("hasLoaded", "false");
        $(albumsBtn).click(function() {
          $(`#todosContainer${user.id}`).hide();
          if($(albumsBtn).attr("hasLoaded") === "false"){
            albumsBtn.setAttribute("hasLoaded", "true");
            loadAlbums(user.id);
          }
          else {
            $(`#albumsContainer${user.id}`).toggle();
          }
        })
        userCardButtons.append(albumsBtn);

        userCard.append(userCardButtons);

        $("#usersContainer").append(userCard);
      }

    },
    error: function(){
      console.log("error");
    }
  });
}

function loadTodos(userID) {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/todos?userId=${userID}`,

    success: function(result){
      console.log(result);
      let todosContainer = document.createElement("div");
      todosContainer.className="todosContainer";
      todosContainer.id=`todosContainer${userID}`
      let todosHeader = document.createElement("h4");
      todosHeader.innerHTML = "Todos:";
      todosContainer.append(todosHeader);

      for (let todo of result){
        let todoItem = document.createElement("div");
        todoItem.className="todoItem";
        if (todo.completed === true){
          todoItem.innerHTML=`<i class="far fa-check-square" style="margin-right:5px;"></i>${todo.title}`;
        }
        else {
          todoItem.innerHTML=`<i class="far fa-square" style="margin-right:5px;"></i>${todo.title}`;
        }

        todosContainer.append(todoItem);
      }
      $(`#user${userID}`).append(todosContainer);

    },
    error: function(){
      console.log("error");
    }
  });
}

function loadAlbums(userID) {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/albums?userId=${userID}`,

    success: function(result){
      console.log(result);
      let albumsContainer = document.createElement("div");
      albumsContainer.className="todosContainer";
      albumsContainer.id=`albumsContainer${userID}`
      let albumsHeader = document.createElement("h4");
      albumsHeader.innerHTML = "Albums:";
      albumsContainer.append(albumsHeader);

      for (let album of result){
        let albumItem = document.createElement("div");
        albumItem.className="todoItem";
        albumItem.innerHTML=`- ${album.title}`;
        albumsContainer.append(albumItem);
      }
      $(`#user${userID}`).append(albumsContainer);

    },
    error: function(){
      console.log("error");
    }
  });
}
