/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
  }
  
  function getApp() {
      var os = getMobileOperatingSystem();
      var link;
  
      console.log ('Inside getApp()');
  
      if ("iOS") {
          link = "https://itunes.apple.com/it/app/swapush/id1222964555?l=en&mt=8";
      }
  
      if ("Android") {
          link = "https://play.google.com/store/apps/details?id=com.swapush&hl=it";
      }
  
      console.log ('link: '+link);
  
      window.location.href = link;
  };

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
  });