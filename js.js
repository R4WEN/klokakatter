/* 
















VÄNLIGEN LÄS README-FILEN INNAN DU KOLLAR PÅ KODEN
                        Tack :)




























*/







// calls the function pageElements upon loading the page...
/* document.body.onload = pageElements;
 */
// ...which calls other functions to provide the page elements
function pageElements() {
    addButton('meow', 'print-button', printCatFacts); // button text, button ID, function for event listener
/*     addButton('clear everytin', 'clear-button', clearCatFacts); // same
 */    addDiv('all-cat-facts'); // div ID
    addButton('pussy switch', 'fu-button', changeCat); 

}


function addElement(myElement, myId) {

    const newElement = document.createElement(myElement);

    newElement.setAttribute('id', myId);

    const newContent = document.createTextNode(myText);

    newElement.appendChild(newContent);

    document.getElementById('all-cat-facts').appendChild(newElement);
 /*    // add content
    newElement.
    // add to body
    document.body.appendChild(newElement);

    // create a new element
    const newElement = document.createElement('p');
    // and give it the catfact content
    const newContent = document.createTextNode(myText);
    // add the text node to the element
    newElement.appendChild(newContent);
    // add element to div
    document.getElementById('all-cat-facts').appendChild(newElement); */
}

// adds div
function addDiv(myId, parentId) {
    // create a div
    const newElement = document.createElement('div');
    // give it ID
    newElement.setAttribute('id', myId);
    // add to body
    document.getElementById(parentId).appendChild(newElement);
}

function removeContent() {
    // from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
    let parent = document.getElementById("container")
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function pageContent() {
    removeContent()
    addDiv()

}

function dogtalk() {
    pageContent();

/*     <div class="bubble medium bottom" id="speech-bubble"><p">Wanna hear what I have to say?</p></div>

    <div id="pic-container">
        <img src="https://cdn.shibe.online/cats/847869f12d47398c1c80978394e3cd944c4214bd.jpg
        " id="cat-pic" alt="Cat Pic">
        

    </div>

    <div id="buttons">
        <button id="button-quote">Please tell me</button>
        <button id="button-change">I wannu change guru</button>
        <button id="button-nope">I do not like this</button>
    </div>   */
    changePic('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');

}

function cattalk() {
    pageContent();
    changePic('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true');
}


function printCatFacts() {
    var responseClone;
    fetch('https://api.themotivate365.com/stoic-quote')
    .then(function (response) {
   
        return response.json();
    })
    .then(function (data) {
      /*   console.log(data);
        addCatFacts(data.quote); */
        // Change bubble content to recived quote
        document.getElementById('speech-bubble').innerText = data.quote;

    });
}

// OBS url för byta hund/katt
function changePic() {

    //http://shibe.online/api/shibes    
  var responseClone; // 1
  fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true')
  .then(function (response) {
    console.log('responsen:',response);
      responseClone = response.clone(); // 2
      return response.json();
  })
  .then(function (data) {
    /* document.body.appendChild(data + ".jpg"); */
    /* document.getElementById("googleMap").innerHTML = data; */
    console.log(data);
    addPic(data);
    document.getElementById('speech-bubble').innerText = "Great choice, I am the enlightened kitty. Would you like to hear my meow of wisdom?";
    {/* <img src="https://cdn.shibe.online/cats/98b508cd8486911f9666bce1dfdb4fc16aad99e1.jpg
    " alt="Cat Pic"> */}
   /*  document.getElementById("all-cat-facts").appendChild(data); */
 /*    console.log(data);
    addCatFacts(data.content); */
  /*   document.body.appendChild(data);
  */    // Do something with data
  }, function (rejectionReason) { // 3
      console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
      responseClone.text() // 5
      .then(function (bodyText) {
          console.log('Received the following instead of valid JSON:', bodyText); // 6
      });
  });
}

function addPic(myPic) {
  // inspo från https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/
/*   var img = document.createElement('img'); */
  


  //var img = document.createElement("img");
  var picplace = document.getElementById('cat-pic');
  picplace.src = myPic;

  //var oldImg = document.getElementById('oldImg');
  //document.getElementById(picplace).replace(img, oldImg);
  /* document.getElementById('all-cat-facts').appendChild(img); */
  /* down.innerHTML = "Image Element Added."; */
 /*  // create a new element
  var newElement = document.createElement('img');
  // and give it the catfact content
  const newContent = document.createTextNode(myPic);
  // add the text node to the element
  newElement.appendChild(newContent);
  // add element to div
  document.getElementById('all-cat-facts').appendChild(newElement); */
}



// adds catfacts to div
function addCatFacts(myText) {
    // create a new element
    const newElement = document.createElement('p');
    // and give it the catfact content
    const newContent = document.createTextNode(myText);
    // add the text node to the element
    newElement.appendChild(newContent);
    // add element to div
    document.getElementById('all-cat-facts').appendChild(newElement);
}


function nope() {
    // yet to be employed
}


// Event listeners for the buttons, each calling their own function
// when clicked.
/* document.getElementById("button-cat").addEventListener("click", dogtalk);
document.getElementById("button-dog").addEventListener("click", cattalk);
 */
document.getElementById("button-quote").addEventListener("click", printCatFacts);
document.getElementById("button-change").addEventListener("click", changePic);
document.getElementById("button-nope").addEventListener("click", nope);











// clears all catfacts by removing all childs of the parent div
// inspo from https://www.w3schools.com/jsref/met_node_removechild.asp
function clearCatFacts() {
    const catFactsDiv = document.getElementById('all-cat-facts');
    // as long as div has children, the first child will be removed
    while (catFactsDiv.hasChildNodes()) {
        catFactsDiv.removeChild(catFactsDiv.firstChild);
    }
}


// adds button
// based code on https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#web_component_example
// this should be first for easier readability, but i call a couple of funtions that have nothing to
// do w the assignment so i figured id rather end w it
function addButton(myText, myId, myEvent) {
    // create a new element
    const newElement = document.createElement('button');
    // give it ID
    newElement.setAttribute('id', myId);
    // some event listeners
    newElement.addEventListener('click', myEvent);
    newElement.addEventListener('click', colorExplosion);
    // and a lil bit of styling
    myStyleAttributes(newElement);
    // and give it some content
    const newContent = document.createTextNode(myText);
    // add the text node to the element
    newElement.appendChild(newContent);
    // add element to body
    document.body.appendChild(newElement);
}

function myStyleAttributes(myElement) {
    let x = myElement.style;
    x.border = 'none';
    x.fontSize = '100%';
    x.padding = '27px';
    x.width = '50%';
}

// only for fun :) lets throw in some fun colors!!
function colorExplosion() {
    const randomColor1 = randomColorGenerator();
    const randomColor2 = randomColorGenerator();
    this.style.backgroundColor = randomColor1;
    /* Below is some very bad coding, im combining two random colors meaning i have no control over the contrast
    between background and text. Adding a glow of the text in the same color amplifies this problem. lol. */
    this.style.color = randomColor2;
    this.style.textShadow = '0 0 20px ' + randomColor2 + ', 0 0 20px ' + randomColor2; 
}

// basically copypaste from https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColorGenerator() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
