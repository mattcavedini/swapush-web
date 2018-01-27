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
}