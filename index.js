
// Deze functie geeft een stukje code terug waar we zeggen wacht voor zoveel milliseconde
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// De functie om te "typen"
// Voor de lengte van de tekst gaan we typen

let elementsRunning = {};
async function typeWriter(text, el) {
  if (!elementsRunning[el.id]) {
    elementsRunning[el.id] = true;
    for (let i = 0; i < text.length; i++) {
      await timeout(150);
      el.innerHTML = text.substring(0, i + 1)
    }
  };

}

function isInViewport (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


function addTyperToScrollEvent(text, elementId) {
  const titleElement = document.querySelector(elementId);
  elementsRunning[titleElement.id] = false;

  window.addEventListener("scroll", async function (event) {
    if (isInViewport(titleElement)) {
      await typeWriter(text, titleElement);
    }
  }, false);
}

addTyperToScrollEvent("Love letters left on read <br> My 2 year relationship", "#Lovelettersleftonread")
addTyperToScrollEvent("Abstract", "#Abstract")
addTyperToScrollEvent("Introduction", "#Introduction")
addTyperToScrollEvent("Chapter I<br>Waiting in line for the new iPhone", "#Chapter1")
addTyperToScrollEvent("Chapter II<br>Good morning Siri", "#Chapter2")
addTyperToScrollEvent("Chapter III<br>Digital butterflies", "#Chapter3")
addTyperToScrollEvent("Chapter IV<br>No, you hang up", "#Chapter4")
addTyperToScrollEvent("Conclusion<br>Broken heart emoji", "#Conclusion")
addTyperToScrollEvent("Bibliography", "#Bibliography")
