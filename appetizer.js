function join(){
	var a = prompt('what is your name?');
	alert('Hello '+ a);
	var A=parseInt(prompt('Do you like cooking(type in number 1:yes 2:no)'))
	if (A == "1"){
		console.log('welcome!');
		alert('welcome!');
		var A=parseInt(prompt('Can you cook？(type in number 3:yes 4:no)'))
		if (A == "3"){
			console.log('You can improve yourself in this website!');
			alert('You can improve yourself in this website!');
		}
		if (A == "4"){
			console.log('We have a lot of simple recipes, you can try from the simple ones');
			alert('We have a lot of simple recipes, you can try from the simple ones');
		}
		var a = prompt('Enter your email here so we can contact you')
	}
	if (A == "2"){
		console.log('If you want to try, feel free to join');
		alert('If you want to try, feel free to join');
	}
	alert('🎉Thank you🎉');
}

