$(document).ready(function(){
	
	//console.log("PandoRoom loaded!");

	fix_html_height();

	$('a[href="#login_register"]').fancybox({
		fitToView	: false,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});
	
		$('a[href="#delete_booking"]').fancybox({
		fitToView	: false,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});
	
	$('#delete_booking_link').trigger('click');

	$('a[href="#modalContainer"]').fancybox({
		fitToView	: false,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});

	// клик на другую дату
	$("p.dates a").click(function(e){
		$("p.dates a").removeClass("date_selected");
		$("div.quests_schedule").addClass("in_process");
		$(this).addClass("date_selected");
		$("span.selected_date > span").text($(this).attr("data-date")).attr('data', $(this).attr("data")).fadeIn(150);

		var get = '?date=' + $(this).attr("data");
		wurl = location.href;
		
		wurl.replace(/#/g,"");
		
		wurl=wurl.replace("#", "");
		//alert (wurl);
		$.ajax({
			url: wurl + get,
			success: function(html){
				//alert(html);
				/*if (html != false) {
					suc.addClass("nonactive").addClass("a_disabled");
				}*/
				$(".quests_schedule").html(html);
				$("div.quests_schedule.in_process").removeClass("in_process");
			}
		});
		//
		//alert("Обновление дат");

		e.preventDefault();
	});

	// клик по времени
	//$(document).on("click", "a.bookTime", function(e){
	$(document).on("click", "span#confirm_booking", function(e){
		//alert("aaa");
		
		//data_id_my = $("#data_id").val();
		var ass = $(this).attr("data");
		//alert("hi -> "+ass);
		var qqq = $(this);
		//console.log(e);
		
		if ( !$(this).hasClass("a_disabled") ) {
			var suc = $(this);
			if ( 1 != 1 ) {
				$("div.header_buttons a.log_in").click();
			} else {
				
				var data_id = $(this).attr("data");
				var data_time = $(this).attr("data-time");
				var data_ids = $(this).attr("data-id");
				var data_qn = $(this).attr("data-qname");	
				var data_roomid	= $(this).attr("data-roomid");	
				var data_ip	= $(this).attr("data-ip");
				
				$("#last_clicked_time").attr("data", data_id).attr("data-time", data_time).attr("data-id", data_ids);
				var get = '?loc=' + $(this).attr("data") + '&time=' + $(this).attr("data-calend") + " " + $(this).text() + ":00" + '&client=' + $("#user_logged_in").attr("data") + '&price=' + $(this).attr("data-prise") + '&data-id='+data_ids+'&data-roomid='+data_roomid+'&data-ip='+data_ip+'&data_qn='+data_qn;
				$("#get_param").val(get);
				$("#data_id").val(data_id);
				
				$("#form_location").text(data_qn);
				$("#form_price").text($(this).attr("data-prise"));
				$("#form_time").text($(this).attr("data-calend") + " " + $(this).text());
				;
				$("a[href='#modalContainer']").fancybox({
					fitToView	: false,
					autoSize	: true,
					closeClick	: false,
					openEffect	: 'fade',
					closeEffect	: 'fade'
				});
			}
		}

		e.preventDefault();
	});

	$("a#booking_confirm").click(function(e){
		
		//if (typeof data_qn == 'undefined'){
			//alert("Произошла ошибка! Пожалуйста нажмите на время и заполните форму еще раз!");
			//location.reload();
			//return false;
		//}
				
		get = $("#get_param").val();
		if ($("#check_cert").is(":checked")) {
			get += "&cert=1";
		} else {
			get += "&cert=0";
		}
		regname     = document.getElementById('reg_name').value;
		regkol     = document.getElementById('reg_kol').value;
		regphone    = document.getElementById('reg_phone').value;
		regbox      = document.getElementById('reg_email').value;
		addeduser   = document.getElementById('addeduser').value;
		regsubs     = document.getElementById('reg_subs').checked;
				
		get +='&regname='+regname+'&regphone='+regphone+'&regsubs='+regsubs+'&addeduser='+addeduser+'&regbox='+regbox+'&regkol='+regkol;
		//alert(get);
		//console.log(get);
		$.ajax({
		  	type: "POST",
		  	//url: "/pandoroom-booking/add-booking.php" + get,
		  	url: "/pandoroom-booking/add-booking.php",
		  	data: get,
		  	success: function(html){
			    if (html != false) {
					$("a.booking_confirm").click();
					var r = $("div#last_clicked_time").attr("data");
					var s = $("div#last_clicked_time").attr("data-time");
					var t = $("div#last_clicked_time").attr("data-id");
					var at = 'a.bookTime[data="' + r + '"][data-time="' + s + '"][data-id="' + t + '"]';
					$(at).css({color: '#464646'});
					$(at).parent().removeClass("bookHour").addClass("booked");
					$(at).removeAttr('href');
					//console.log(html);
					//alert("ass");
					window.location.href = '/thanks.php';
			    }else{
			    	alert("Error!");
			    }
		  	},
		  	error: function( html, status ) {
				alert( 'произошла ошибка при выполнении запроса'+html+status );
			}

		});

		e.preventDefault();
	});

	$("a#booking_confirm").click(function(e){
		$("div#btnCancel").click();
		e.preventDefault();
	});

	//
	$("a.cancel_game").click(function(e){
		rem = $(this).parent("li");
		var get = $(this).attr("data");
		//alert(get);
		yes = confirm("Вы действительно хотите отменить данную бронь?");
		if ( yes ) {
			$.ajax({
			  url: "/wp-content/plugins/pandoroom-booking/remove2.php" + get,
			  success: function(html){
			    if (html != false) {
					//alert("Removed");
					rem.addClass("removed");
					$("li.removed").fadeOut(500);
					setTimeout(function(){
						rem.remove();
					}, 1000);
			    }
			  }
			});
		}

		e.preventDefault();
	});

/*$('a.one_quest_time').on('click', function(event){
	    console.log($(this).attr('href'));
	    event.preventDefault(); // отменяем действие по умолчанию, но не трогаем bubbling - чтобы не мешать другим обработчикам
	});*/

	// отправка данных формы "Подарочный сертификат"
	$('form.certificate_order').submit(function(){
		$.post("/wp-content/plugins/mail/send-form1.php", $(this).serialize(), function(result) {
			if (result == 'sent') {
				$('form.certificate_order').children('.input, .textarea').val('');
				//alert("Спасибо за заказ подарочного сертификата!\nНаш сотрудник свяжется с Вами в ближайшее время для уточнения деталей оплаты и доставки.");
				$(".cert_success").slideDown(300).delay(10000).slideUp(300);
			} else {
				//alert("Отправка не удалась. Попробуйте, пожалуйста, позже...");
				$(".cert_error").slideDown(300).delay(10000).slideUp(300);
			}
		});
		return false;
	});


	// закрытие попапа после клика по крестику
	$('body').on('click', 'a.close_overlay', function(event){
		$('.overlay, .thanks').fadeOut(150);
		event.preventDefault();
	});


	// убираем попап после клика вне окна
	$(function(){
		$(document).click(function(event) {
			if ($(event.target).closest(".thanks").length) return;
			$(".overlay, .thanks").fadeOut(150);
			event.stopPropagation();
		});
	});

	$("a.a_toogle").click(function(e){
		$("a.a_toogle").removeClass("active");
		$(this).addClass("active");
		$(".login_register > div").hide();
		var div_to_show = ".login_register > div" + $(this).attr("href");
		$(div_to_show).show();

		e.preventDefault();
	});

	//
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});


	
});






// функция валидации телефонов
function validatePhone(phone) { 
    var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return re.test(phone);
}


// функция валидации емейлов
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if( !emailReg.test( $email ) ) {
    return false;
  } else {
    return true;
  }
}

// фиксим размер html, когда есть админпанель
function fix_html_height() {
	if ( $("#wpadminbar").length ) {
		var wHeight = $(window).height();
		var adminHeight = $("#wpadminbar").outerHeight(true);
		$("html").height(wHeight - adminHeight);
	}
}

function CheckAddForm()
{
	mess="false";
	if(document.getElementById('reg_email').value=="") { mess="true";}	
	if(document.getElementById('reg_phone').value=="") { mess="true";}
	if(document.getElementById('reg_name').value=="") { mess="true";}
	if(document.getElementById('reg_kol').value=="") { mess="true";}

	if(mess!="false") { document.getElementById('alertform').style.display="block"; }
	else 
	{
		document.getElementById('alertform').style.display="none";
		allgoal();
		$('#booking_confirm').trigger('click');
	}	 
		
}

function allgoal()
{
	//yaCounter39216720.reachGoal('leadQuests'); 
	return true;
}
