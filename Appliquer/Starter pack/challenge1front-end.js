function checkEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function validate () {
  var email = document.getElementById('email').value
  if (checkEmail(email)) {
    text='Adresse e-mail valide';
  } else {
    text='Adresse e-mail non valide';
  }
  document.getElementById("checked mail").innerHTML = text;
  //return false
}



