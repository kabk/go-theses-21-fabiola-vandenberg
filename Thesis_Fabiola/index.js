// Deze functie geeft een stukje code terug waar we zeggen wacht voor zoveel milliseconde
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// De functie om te "typen"
async function typeWriter(text, el) {
  // Voor de lengte van de tekst gaan we typen
  for (let i = 0; i < text.length; i++) {
    // Wacht 150 milliseconde
    await timeout(150);
    // In het element zet de tekst vanaf het begin tot en met I + 1
    el.innerHTML = text.substring(0, i + 1)
  }
}

// Check of dit element nu op je scherm staat
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

  window.addEventListener("scroll", async function (event) {
    if (isInViewport(titleElement)) {
      await typeWriter(text, titleElement);
    }
  }, false);
}

addTyperToScrollEvent("Love letters left on read", "#Lovelettersleftonread")
addTyperToScrollEvent("My 2 year relationship", "#My2yearrelationship")
addTyperToScrollEvent("Abstract", "#Abstract")
addTyperToScrollEvent("Introduction", "#Introduction")
