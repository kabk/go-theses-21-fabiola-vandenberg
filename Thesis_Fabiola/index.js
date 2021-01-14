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

// function typeWriter(text, i, el, fnCallback) {
//     if (i < text.length) {
//       el.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
//
//       setTimeout(function() {
//         typeWriter(text, i + 1, fnCallback)
//       }, 150);
//     } else {
//       setTimeout(fnCallback, 700);
//     }
//   }
//
//   function Title(i, el) {
//
//     var dataText = ["My 2 year relationship", "My 2 year relationship" ];
//
//
//     if (i < dataText[i].length) {
//       typeWriter(dataText[i], 0, el, function() {
//         Title(i + 1);
//       });
//     },
//   }
//
//
//
//
//     if (i < dataText[i].length) {
//       typeWriter(dataText[i], 0, function() {
//         Title(i + 1);
//       });
//     }
//   }
//
//
//
//
// var isInViewport = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };
//
// var header = document.querySelector("#My2yearrelationship");
//
//
// window.addEventListener('scroll', function (event) {
// 	if (isInViewport(header)) {
//     Title(0, document.querySelector("#My2yearrelationship"));
// 	}
// }, false);
