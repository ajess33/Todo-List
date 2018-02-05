// add remove button to each item
var todos = document.querySelectorAll("li");
for (var i = 0; i < todos.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "remove";
  span.appendChild(txt);
  todos[i].appendChild(span);
}

// check off todos by clicking
// var todos = document.querySelectorAll("li");
for (var i = 0; i < todos.length; i++) {
  todos[i].addEventListener('click', function() {
    this.classList.toggle("completed");
  });
}

// delete the item by clicking the remove button
var remove = document.querySelectorAll(".remove");
for (var i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// when the add button is clicked
// ****** add remove button on new elements
function newItem() {
  var li = document.createElement("li")
  var value = document.querySelector("input").value;
  var text = document.createTextNode(value);
  li.appendChild(text);
  console.log(li);
  if (value) {
    document.querySelector("ul").appendChild(li);
  } else {
    console.log("Please type something");
  }
  document.querySelector("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Remove");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  var remove = document.querySelectorAll(".remove");
  for (var i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



