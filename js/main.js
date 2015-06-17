var addSkin = document.getElementById("add-skin");
var addDeposit = document.getElementById("add-deposit");

addSkin.addEventListener("click", incrementSkin);
addDeposit.addEventListener("click", incrementDeposit);

function incrementSkin() {
  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "skin");

  var skinImage = document.createElement("img");
  skinImage.setAttribute("class", "skin-image");
  skinImage.setAttribute("src", "http://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfkDCYk8fhvVcWx8vVSeQ7rvNeVO7B-MNwYG8mGC_WHYVr_70pq0fULe8aLpXvm3C3gP20PRVO1rSj5oTL5/360fx360f");

  var skinName = document.createElement("h5");
  skinName.setAttribute("class", "skin-name");
  skinName.innerHTML = "AWP | Asiimov (Battle-Scarred)";

  var skinPanel = document.getElementById("skin-panel-body");
  createDiv.appendChild(skinImage);
  createDiv.appendChild(skinName);;

  skinPanel.appendChild(createDiv);
}

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
  panelBody.appendChild(listGroup);
}





var screenHeight = screen.height;
console.log(screenHeight);
if (screenHeight == 1080)
{
  var maxHeight = document.getElementById("game-panel");
  maxHeight.style.height = "650px";
}