$(function() {
	$('ul').on('click', 'polygon.forward', function() {
		var li = this.parentNode.parentNode;
		
		if (li.nextSibling.nextSibling) {
			li.className = "";
			li.nextSibling.nextSibling.className ='current';
		}
	});

	$('ul').on('click', 'polygon.back', function() {
		var li = this.parentNode.parentNode;

		console.log(li);
		
		if (li.previousSibling.previousSibling) {
			li.className = "";
			li.previousSibling.previousSibling.className ='current';
		}
	});

	$(document).on('keydown', function(ev) {
		var current = document.getElementsByClassName('current')[0];

		if (current.nextSibling.nextSibling && 
				(ev.keyCode == 32 || ev.keyCode == 39)) {
			current.className = "";
			current.nextSibling.nextSibling.className ='current';
		} else if (current.previousSibling.previousSibling && 
				ev.keyCode == 37) {
			current.className = "";
			current.previousSibling.previousSibling.className ='current';
		}
	});
});