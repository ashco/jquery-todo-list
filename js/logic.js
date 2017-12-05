var submitButton_e = $('#submitButton');
var userInput_e = $('.userInput');
var deleteButton_e = $('.deleteCheck');
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
	newListItem = ('<li class="item' + itemCount + '"><span class="listTextSpan">' + newToDo + '</span><span class="checkBoxSpan"><input class="item' + itemCount + '" class="deleteCheck" type="checkbox"></span></li>');
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
// $('.deleteCheck').click(function(){
// 	console.log('hi');
// });