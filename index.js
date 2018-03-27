//TO RUN STEP BY STEP, uncomment the step you would like to see
//step4();
//step5();
//step7();
//steps11through14();
//console.log(step15("Yo","hey","whatsup"));
//console.log(step16("Yo","hey","whatsup"));
//console.log(step17("Yo","hey","whatsup"));

function step4() {
  let ans = confirm("Press OK if you like apples");
  if (ans == true) {
    alert("I like Apples Too");
  } else {
    alert("Thats too bad");
  }
}

function step5() {
  let ans = confirm("Press OK if you like apples");
  alert(ans ? "I like Apples Too" : "Thats too bad");
}

function step7() {
  let age = prompt("How old are you?");

  if (age == null || age == "") {
    alert("You didn't give me your age....");
  }
  else if(isNaN(age)){
    alert("That is not a number")
  }
  else {
    alert("Thanks for the data");
  }
}


function User(firstname, lastname, username) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.username = username;
  this.fullname = function() {return this.firstName + " " + this.lastName;};
}

function copyUser(user) {
  let newUser = new User(user.firstName, user.lastName, user.username);
  let ans = confirm("Enter your favorite color to enter into our raffle");
  if (ans == true) {
    let color = prompt("What is your favorite color?");
    if (color == null || color == ""){
      alert("You did not qualify for the raffle");
    }
    else {
      newUser.favColor = color;
      alert("Thanks for entering the raffle");
    }
  }
  alert("New User Created");
  return(newUser);
}

function steps11through14() {
  let user = new User("Jeff", "Wheadon", "jwheadon");
  let newUser = copyUser(user);

  console.log("User: ",user);
  console.log("Copy of User: ",newUser);
  console.log("Users full name: " + user.fullname());
  console.log("Copy of User's full name: " + newUser.fullname());
}

function step15(string1, string2, string3="Hello") {
  return "String 1: " + string1 + "\nString 2: " + string2 + "\nString 3: " + string3;
}

let step16 = function(string1, string2, string3="Hello") {
  return "String 1: " + string1 + "\nString 2: " + string2 + "\nString 3: " + string3;
}

let step17 = (string1, string2, string3="Hello") => {
  return "String 1: " + string1 + "\nString 2: " + string2 + "\nString 3: " + string3;
};
