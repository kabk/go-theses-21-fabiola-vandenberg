document.addEventListener('DOMContentLoaded', function(event) {
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("#My2yearrelationship").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    } else {
      setTimeout(fnCallback, 700);
    }
  }

  function Title(i) {

    var dataText = ["My 2 year relationship", "My 2 year relationship" ];


    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function() {
        Title(i + 1);
      });
    }
  }

  Title(0);
})
