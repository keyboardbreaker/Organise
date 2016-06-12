//to do list
$(function() {


	//$(".list").hide();
	//$(".chatBox").hide();
	$(".headerTD").click(function(){
		$(".list").toggle();
    });
	
	$(".headerChat").click(function(){
		$(".chatBox").toggle();
    });
	$(".headerBookmarks").click(function(){
		$(".bookBox").toggle();
    });
	


	$('#submitNote').click(function(){
		var name= $('#inputItem').val();
		
		var dataString = 'name=' + name;
		if(name == "" || name == "type a new item here"){
			return false;
		}
		
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/add_note.php",
			data: dataString,
			success: function(){
				$('#inputItem').val(name);
				$('#inputItem').val("");
			}
		});
		return false;	
	});
	
	$(document).on("click", '.delete-button', function(event) { 
		var id = $(this).parent().children('.id').html();
		var dataString = 'id=' + id;
		//alert(dataString);
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/delete_note.php",
			data: dataString,
			success: function(data){

			}
		});
		return false;	
	});
	
	$(document).on("click", '.delete-button', function(event) { 
		var id = $(this).parent().children('.id').html();
		var dataString = 'id=' + id;
		//alert(dataString);
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/delete_done_note.php",
			data: dataString,
			success: function(data){
				alert("task deleted");
			}
		});
		return false;	
	});
	

	//TODO  ID and check PHP QUERY
	$(document).on("click", '.done-button', function(event) { 
		var id = $(this).parent().children('.id').html();
		var successString = 'reach success, within done button';
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/done_note.php",
			data: { id: id },
			success: function(data){		
				//alert(successString);	
			}
		});
		return false;	
	});
	

	
	////// Chat Starts here	
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
			url: "https://digitaljunkyard.co.uk/yujin/send_message.php",
			data: dataString,
			success: function(){
				document.newMessage.newMessageContent.value= "";
			}	
		});
		$('.mainc').scrollTop($('.mainc')[0].scrollHeight); //moves the focus to the bbottom 
		return false;	
	});
	
	$('#newMessageContent').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
        //alert('You pressed a "enter" key in textbox'); 
		var username= $('#loggedUser').html();
		var message= $('#newMessageContent').val();
		
		if(message == "" || message == "enter your message here"){
			return false;
		}
		
		var dataString = 'username=' +username+ '&message=' + message;
			
		
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/send_message.php",
			data: dataString,
			success: function(){
				document.newMessage.newMessageContent.value= "";
			}
		});
		$('.mainc').scrollTop($('.mainc')[0].scrollHeight); //moves the focus to the bbottom
		return false;
    }
	});


	$('.newMessage').hide();
	$('#messageBoxSignIn').click(function() {
		$('#username').focus();
	});
		
	$('.error').hide();
	$('#username').click(function(){
		$('#username').val("");
	});

	$('#signIn').click(function() {
		var username = $('#username').val();
		if (username == "" || username == "enter username"){
			$('.error').show();
			return false;
		}
		
		$('#messageBoxSignInForm').hide();
		$('.newMessage').show();
		
		
		var dataString = 'username=' + username+ '&message=HAS LOGGED IN';
		var xmlhttp = new XMLHttpRequest();
		$.ajax({
			type: "POST",
			url: "https://digitaljunkyard.co.uk/yujin/send_message.php",
			data: dataString,
			success: function(){
			
				$('.user').html('<span>Welcome <span id="loggedUser">' + username + '</span>!</span> <form onsubmit="return false"><input type="submit" id = "signOut" value="SIGN OUT"></form>');	
				
					$('#signOut').click(function() {
						var username = $('#loggedUser').html();
						
						$('#messageBoxSignInForm').show();
						$('.newMessage').hide();
						
						var dataString = 'username=' + username+ '&message=HAS LOGGED OUT';
						var xmlhttp = new XMLHttpRequest();
						$.ajax({
							type: "POST",
							url: "https://digitaljunkyard.co.uk/yujin/send_message.php",
							data: dataString,
							success: function(){

								document.newMessage.newMessageContent.value= "";
							},
							error: function(xhr, desc, err) {
								console.log(xhr);
								console.log("Details: " + desc + "\nError:" + err);
							}

						});
						
					});
				
				document.newMessage.newMessageContent.value= "";
			},
			error: function(xhr, desc, err) {
				console.log(xhr);
				console.log("Details: " + desc + "\nError:" + err);
			}

		});
		return false;
	});
	

});