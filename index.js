function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let elementsRunning = {};
async function typeWriter(text, el, offset = 0) {
  if (!elementsRunning[el.id]) {
    elementsRunning[el.id] = true;
    let inHtmlElement = false;
    for (let i = 0 + offset; i < text.length; i++) {
      if (text[i + 1] === "<") {
        inHtmlElement = true;
        continue;
      } else if (text[i + 1] === ">") {
        inHtmlElement = false;
        continue;
      }

      if (!inHtmlElement) {
        await timeout(150);
        el.innerHTML = text.substring(0, i + 1)
      }
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


window.onload = async function () {
  const el = document.querySelector("#Lovelettersleftonread");
  await typeWriter("Loev", el);
  elementsRunning[el.id] = false;
  await timeout(700);
  await typeWriter("Love letters lefft on", el, 6);
  elementsRunning[el.id] = false;
  await timeout(700);
  await typeWriter("Love letters left on read <br><br> My 2 year reel", el, 22);
  elementsRunning[el.id] = false;
  await timeout(700);
  await typeWriter("Love letters left on read <br><br> My 2 year relationship", el, 43);
}

addTyperToScrollEvent("read 5:15 am", "#read")
addTyperToScrollEvent("Abstract", "#abstract")
addTyperToScrollEvent("Introduction", "#introduction")
addTyperToScrollEvent("Chapter I <br>Waiting in line for the new iPhone", "#chapter1")
addTyperToScrollEvent("Chapter II<br>Good morning Siri", "#chapter2")
addTyperToScrollEvent("Chapter III<br>Digital butterflies","#chapter3")
addTyperToScrollEvent("Chapter IV<br>No, you hang up", "#chapter4")
addTyperToScrollEvent("Conclusion<br>Broken heart emoji", "#conclusion")
addTyperToScrollEvent("Bibliography", "#bibliography")
addTyperToScrollEvent("delivered", "#delivered")
