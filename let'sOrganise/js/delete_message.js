//delete message

$(function(){
	$('#newMessageContent').click(function(){
		document.newMessage.newMessageContent.value = "";
	});
	
	$('#newMessageSend').click(function(){
		var username= $('#loggedUser').html();
		var message= $('#newMessageContent').val();
		
		if(message == "" || message == "enter your message here"){
			return false;
		}
		
		var dataString = 'username=' +username+ '&message=' + message;
		
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/delete_message.php",
			data: dataString,
			success: function(){
				document.newMessage.newMessageContent.value= "";
			}
		});
		$('.mainc').scrollTop($('.mainc')[0].scrollHeight); //moves the focus to the bbottom 
		return false;
		
	});
});