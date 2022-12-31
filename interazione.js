for (let clickButton of document.getElementsByClassName("button"))
  clickButton.addEventListener("click", alertMeessage);
function alertMeessage() {
  alert("You have clicked the button");
}
