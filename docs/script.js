const body = document.body;

document.body.onload = function() {

  setTimeout(function() {
    let preloader = document.getElementById("preloader");

    if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
    }
  }, 1000);
};
