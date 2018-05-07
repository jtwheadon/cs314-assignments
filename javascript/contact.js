$("#formSubmitBtn").click(function(event){
  event.preventDefault();
  if(validateForm()) {
    displayForm()
  }
});

function validateForm() {
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let email = $('#email').val();

  if (firstName === '') {
    alert("Please enter your first name");
    return false;
  }
  if (lastName === '') {
    alert("Please enter your last name");
    return false;
  }
  if (email === '' || !validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  return true;
}


function validateEmail(email) {
  var re = /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+((?:\_[a-zA-Z0-9]+)|(?:\.[a-zA-Z0-9]+))*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-zA-Z]{2,6}(?:\.[a-zA-Z]{2})?)$)/;
  return re.test(email);
}


function displayForm() {
  let firstName = $('#firstName');
  let lastName = $('#lastName');
  let email = $('#email');
  let comment = $('#comment');

  let formDisplayCard = document.createElement("div");
  formDisplayCard.className = "formDisplayCard";
  let nameDisplay = document.createElement('p');
  nameDisplay.innerHTML = `Name: ${firstName.val()} ${lastName.val()}`;
  formDisplayCard.append(nameDisplay);
  let emailDisplay = document.createElement('p');
  emailDisplay.innerHTML = `Email: ${email.val()}`;
  formDisplayCard.append(emailDisplay);
  let commentDisplay = document.createElement('p');
  commentDisplay.innerHTML = `Comment: ${comment.val()}`;
  formDisplayCard.append(commentDisplay);
  $("#formDisplayContainer").append(formDisplayCard);

  firstName.val('');
  lastName.val('');
  email.val('');
  comment.val('');
}
