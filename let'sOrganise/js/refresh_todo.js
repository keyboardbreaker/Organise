$.ajaxSetup({
	cache: false
});

$(setInterval(function(){
	$('.items').load('https://digitaljunkyard.co.uk/yujin/getItems.php');
}, 500));