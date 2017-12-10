var newToDo
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
  newItem();
  //only add 1+ char strings
  if(newToDo.length > 0){
    createListItem();
    $('ol').append(newListItem);
    $('.userInput').val([]);
    addDeleteListener();
  }
}

//add user input to newToDo variable
function newItem(){
  newToDo = $('.userInput').val();
}

//create list item 
function createListItem(){
  newListItem = ('<li class="item"><span class="listTextSpan">' + newToDo + '</span></li>');
}

//Delete button logic
function addDeleteListener(){
  $('.item').click(function(){
    this.remove();
  });
}

addDeleteListener();