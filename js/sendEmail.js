document.getElementById('send').addEventListener("click", function(event){
  var name = document.module.Name.value;
  var email = document.module.Email.value;
  var oggetto = '['+name+'] '+document.module.Subject.value+' from: '+email;
  var messaggio = document.module.Message.value;
  var swapushmail = 'info@swapush.com;mattia.cavedini@hotmail.com';

  if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
    alert("Inserire un indirizzo email valido.");
    document.module.email.focus();
  }
  else if ((oggetto == "") || (oggetto == "undefined")) {
    alert("Inserire un oggetto.");
    document.module.oggetto.focus();
  }
  else if ((messaggio == "") || (messaggio == "undefined")) {
    alert("Inserire un messaggio.");
    document.module.messaggio.focus();
  }
  else {
    window.open("mailto:" + swapushmail + "?Subject=" + oggetto + "&Body=" + messaggio, '_self', ''); window.close();
    event.preventDefault();
  }
})