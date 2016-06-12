$.ajaxSetup({
	cache: false
});

$(setInterval(function(){
	$('.mainc').load('https://digitaljunkyard.co.uk/yujin/display_messages.php');
	//$('.mainc').load('https://digitaljunkyard.co.uk/yujin/display_signin.php');
	$('.items').load('https://digitaljunkyard.co.uk/yujin/getItems.php');
	$('.bookmarkPages').load('https://digitaljunkyard.co.uk/yujin/displayBookmarks.php');
	
	//$('.mainc').scrollTop($('.mainc')[0].scrollHeight); 
}, 500));
