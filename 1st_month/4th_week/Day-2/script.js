function highlight() {
  // by id
  let title = document.getElementById("title");
  title.style.color = "red";

  // by class
  let foods = document.getElementsByClassName("food");
  foods[0].style.fontWeight = "bold";

  // querrySelector
  let firstItem = document.querySelector(".food");
  firstItem.style.backgroundColor = "yellow";

  // querySelectorAll
  let allItems = document.querrySelectorAll(".food");

  allItems.forEach(function (item) {
    item.style.color = "green";
  });
}
