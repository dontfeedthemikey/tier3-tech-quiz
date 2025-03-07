// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
/**
    Note: Unnecessary code could cause additional issue best to commented out or totally remove code. This solve issue 2 but
    does not address how this happen or stop hackers from adding it back.

    function bug1() {
      //alert("Fix me! I am a bug");
    }

    document.addEventListener("DOMContentLoaded", bug1);
*/