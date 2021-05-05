document.getElementById('burger').onclick = function () {
	document.getElementById('menu').classList.add('open');
};
document.querySelectorAll('#menu > *').forEach((item) => {
	item.onclick = () => {
		document.getElementById('menu').classList.remove('open')
	}
})
new WOW({
	animateClass: 'animate__animated'
}).init();
$('.popup_img').magnificPopup({
	type: 'image'
});


$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
});
$('#submit').click(function () {
	let name = $('#name');
	let address = $('#address');
	let mobile = $('#mobile');
	let hasError = false;
	let loadin = $('#loadin');
	let accepted = $('#accepted');
	let form = $('form');
	$('.erro-input').hide();
	$('input').css('border-color', '#B99150')
	if (!name.val()) {
		name.siblings('.erro-input').show();
		name.css('border-color', 'red');
		hasError = true;
	}

	if (!address.val()) {
		address.siblings('.erro-input').show();
		address.css('border-color', 'red');
		hasError = true;
	}

	if (!mobile.val()) {
		mobile.siblings('.erro-input').show();
		mobile.css('border-color', 'red');
		hasError = true;
	}
	
	if (!hasError) {
		loadin.css('display', 'flex');
		$.ajax({
			method: "POST",
			url: ' https://itlogia.ru/test/checkout ',
			data: { name: name.val(), address: address.val(), mobile: mobile.val() }
		})
			.done(function (message) {
				loadin.hide();
				console.log(message);
				if (message.success) {
					form.hide();
					accepted.css('display', 'flex');	
				} else {
					alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
				}
			});
	}



})
