var submitButton_e = $('#submitButton');
var userInput_e = $('.userInput');
var listLi = $('.item');
var newToDo
var itemCount = 3;
var newListItem


//iterate item count
var itemCountCalc = function(){
	itemCount++;
}

//recognize input value
//add it to newToDo variable
var newItem = function(){
	newToDo = $(userInput_e).val();
}

//create list item 
var createListItem = function(){
	newListItem = ('<li class="item"><span class=listTextSpan">' + newToDo + '</span></li>');
}

// button function works
$(submitButton_e).click(function(){
	itemCountCalc();
	newItem();
	createListItem();
	$('ol').append(newListItem);
	$(userInput_e).val([]);
})

//Delete button logic
$(listLi).click(function(){
	this.remove();
});