$("#num-time").fitText(.75);
$(".canvas-small-text").fitText(3);
var addSkin = document.getElementById("add-skin");
var addDeposit = document.getElementById("add-deposit");

//Event listeners for buttons
addSkin.addEventListener("click", incrementSkin);
addDeposit.addEventListener("click", incrementDeposit);

//Adds a skin
function incrementSkin() {
  /* jQuery
  $("div.skin:last").after('<div class="skin"><img class="skin-image" src="http://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfkDCYk8fhvVcWx8vVSeQ7rvNeVO7B-MNwYG8mGC_WHYVr_70pq0fULe8aLpXvm3C3gP20PRVO1rSj5oTL5/360fx360f"><h3 class="skin-price">$147.32</h3><h5 class="skin-name">AWP | Asiimov (Battle-Scarred)</h5></div>');
  */

  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "skin");

  var skinImage = document.createElement("img");
  skinImage.setAttribute("class", "skin-image");
  skinImage.setAttribute("src", "http://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfkDCYk8fhvVcWx8vVSeQ7rvNeVO7B-MNwYG8mGC_WHYVr_70pq0fULe8aLpXvm3C3gP20PRVO1rSj5oTL5/360fx360f");

  var skinName = document.createElement("h5");
  skinName.setAttribute("class", "skin-name");
  skinName.innerHTML = "AWP | Asiimov (Battle-Scarred)";

  var skinPrice = document.createElement("h3");
  skinPrice.setAttribute("class", "skin-price");
  skinPrice.innerHTML = "$87.24";

  var skinPanel = document.getElementById("skin-panel-body");
  createDiv.appendChild(skinImage);
  createDiv.appendChild(skinPrice);
  createDiv.appendChild(skinName);

  skinPanel.appendChild(createDiv);
}

//Adds a Deposit Notificaiton
function incrementDeposit() {
  var listGroup = document.createElement("div");
  listGroup.setAttribute("class", "list-group");
  var listGroupItem = document.createElement("div");
  listGroupItem.setAttribute("class", "list-group-item");

  var rowPicture = document.createElement("div");
  rowPicture.setAttribute("class", "row-picture");
  var rowImg = document.createElement("img");
  rowImg.setAttribute("class", "circle");
  rowImg.setAttribute("src", "http://res.cloudinary.com/mitchellvaline-herokuapp-com/image/upload/c_crop,h_1600/v1430079702/image1_dkh0oz.jpg");
  rowImg.setAttribute("alt", "icon");
  var rowContent = document.createElement("div");
  rowContent.setAttribute("class", "row-content");
  var listGroupItemHeading = document.createElement("h6");
  listGroupItemHeading.setAttribute("class", "list-group-item-heading");
  var usernameBold = document.createElement("span");
  usernameBold.setAttribute("class", "username-bold");
  usernameBold.innerHTML= "Frown";
  var depositedText = document.createTextNode(" deposited 8 skins worth $739.21");

  listGroupItemHeading.appendChild(usernameBold);
  listGroupItemHeading.appendChild(depositedText);
  rowContent.appendChild(listGroupItemHeading);

  rowPicture.appendChild(rowImg);

  listGroupItem.appendChild(rowPicture);
  listGroupItem.appendChild(rowContent);

  listGroup.appendChild(listGroupItem);

  var panelBody = document.getElementById("game-panel-body");
  panelBody.insertBefore(listGroup, panelBody.childNodes[0]); //Inserts before the first child node
}

//Horizontal mousewheel scroll
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('skin-panel-body').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('skin-panel-body').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('skin-panel-body').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('skin-panel-body').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('skin-panel-body').attachEvent("onmousewheel", scrollHorizontally);
    }
})();
