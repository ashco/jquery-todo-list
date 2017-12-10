var newToDo
var itemCount = 3;
var newListItem

// click to submit entry
$('#submitButton').click(submit);
// enter to submit entry
$(document).keypress(function(enter) {
    if(enter.which == 13) {
        submit();
    }
});

//actions that occur to add item to list
function submit(){
  itemCountCalc();
  newItem();
  createListItem();
  $('ol').append(newListItem);
  $('.userInput').val([]);
  addDeleteListener();
}

//iterate item count
function itemCountCalc(){
  itemCount++;
}

//add user input to newToDo variable
function newItem(){
  newToDo = $('.userInput').val();
}

//create list item 
function createListItem(){
  newListItem = ('<li class="item"><span class=listTextSpan">' + newToDo + '</span></li>');
}

//Delete button logic
function addDeleteListener(){
  $('.item').click(function(){
    this.remove();
  });
}

addDeleteListener();