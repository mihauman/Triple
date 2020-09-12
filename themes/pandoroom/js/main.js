window.onload = function () {

// ========================================================================================
// Variables //
// ========================================================================================
	
	    var $window = $(window),
			$document = $(document),
			body = $('body'),
			logo = $('#logo'),
			social = $('#social'),
			phone = $('#phone'),
			phoneIcon = phone.find('.socialIcons'),
			phoneNumber = $('#phoneNumber'),
			phoneMobile = $('#phoneMobile'),
			book = $('#book'),
			header = $('#header'),
			questName = header.find('#questName'),
			introText = header.find('#introText'),
			video = $('video'),
			main = $('#main'),
			mainMask = $('#mainMask'),
			pageMask = $('#pageMask'),
			blockMask = $('.blockMask'),
			map = $('#map'),
			map2 = $('#map2'),
			footer = $('#footer'),
			fixedBtn = $('.fixedBtn'),
			fixedBtnBg = fixedBtn.find('.fixedBtnBg'),
			sideTextFixed = $('#sideTextFixed'),
			video = main.find('video'),

			internalLink = $('.internalLink'),
			externalLink = $('.externalLink'),
			linkSpan = externalLink.find('.linkSpan'),
			linkLine = externalLink.find('.linkLine'),

		// Side nav

			sideNav = $('#sideNav'),
			sideNavHeader = $('#sideNavHeader'),
			sideNavHeaderBtnClose = sideNavHeader.find('.socialIcon'),
			sideNavIcon = $('#sideNavIcon'),
			sideNavIconBg = $('.sideNavIconBg'),
			bmWrapper = sideNavIcon.find('#bmWrapper'),
			bmLine1 = bmWrapper.find('#bmLine1'),
			bmLine2 = bmWrapper.find('#bmLine2'),
			bmLine3 = bmWrapper.find('#bmLine3'),

			sideNavQuest = sideNav.find('.sideNavQuest'),
			sideNavImage = sideNavQuest.find('.sideNavImage'),
			sideNavTitle = sideNavQuest.find('.sideNavTitle'),
			sideNavLine = sideNavQuest.find('.sideNavLine'),
			sideNavBg = $('#sideNavBg'),
			sideNavBgImage = sideNavBg.find('.sideNavBgImage'),
			sideNavQuestInfo = sideNavBg.find('.sideNavQuestInfo'),
			canvasNoise = sideNavBg.find('#canvasNoise'),		
			sideTextAbout = $('#sideTextAbout'),		

		// Main page

			headerMain = $('#headerMain'),
			questSelect = headerMain.find('.questSelect'),
			questSelect1 = headerMain.find('#questSelect1'),
			questSelect2 = headerMain.find('#questSelect2'),
			questSelect3 = headerMain.find('#questSelect3'),
			questSelect4 = headerMain.find('#questSelect4'),
			questSelect5 = headerMain.find('#questSelect5'),
			questSelect6 = headerMain.find('#questSelect6'),
			questSelect7 = headerMain.find('#questSelect7'),
			questSelect8 = headerMain.find('#questSelect8'),
			questSelectBg = questSelect.find('.questSelectBg'),
			questSelectLine = questSelect.find('.questSelectLine'),
			questSelectCircle = questSelect.find('.questSelectCircle'),
			headerMainIntroText = headerMain.find('.introText'),
			questInfo = questSelect.find('.questInfo'),

		// Text blocks

			textBlock = main.find('.textBlock'),
			textBlockMask = textBlock.find('.textBlockMask'),
			introTextBlock = main.find('.introTextBlock'),
			textBlockContent = textBlock.find('.textBlockContent'),
			textBlock1 = main.find('#textBlock1'),
			textBlock2 = main.find('#textBlock2'),
			textBlock3 = main.find('#textBlock3'),
			winnersBlock = $('#winnersBlock'),
			winnersPhotos = winnersBlock.find('#winnersPhotos'),
			winnersPhoto = winnersPhotos.find('.winnersPhoto'),
			// gallery = winnersBlock.find('.gallery'),
			// textBlock4 = main.find('#textBlock4'),

		// Image full

			imageBlock = main.find('.imageBlock'),
			imageFull = main.find('.imageFull'),
			imageFullTitle = imageFull.find('.imageFullTitle'),
			imageFullGhostFace = imageFull.find('.ghostFace'),
			imageFullFront = imageFull.find('.imageFullFront'),
			imageFullMiddle = imageFull.find('.imageFullMiddle'),
			imageFullBack = imageFull.find('.imageFullBack'),
			imageFullMaskRed = imageFull.find('.maskRed'),
			imageFullMaskGreen = imageFull.find('.maskGreen'),

		// Book calendar

			bookCalendar = main.find('#bookCalendar'),
			bookCalendarTitle = main.find('#bookCalendarTitle'),
			firstWeek = bookCalendar.find('#firstWeek'),
			nextWeek = bookCalendar.find('#nextWeek'),
			nextWeekSelect = bookCalendar.find('#nextWeekSelect'),
			firstWeekSelect = bookCalendar.find('#firstWeekSelect'),
			bookDay = bookCalendar.find('.bookDay'),
			bookDayFirstWeek = firstWeek.find('.bookDay'),
			bookDayNextWeek = nextWeek.find('.bookDay'),
			bookDate = bookDay.find('.bookDate'),
			bookHour = bookDay.find('.bookHour'),
			bookTime = bookHour.find('.bookTime'),
			bookHourBg = bookHour.find('.bookHourBg'),

		// Modal window

			modalWrapper = $('#modalWrapper'),
			btnModal = modalWrapper.find('.btnModal'),
			btnModalTitle = btnModal.find('.btnModalTitle'),
			btnModalBg = btnModal.find('.btnModalBg'),

			// modalContainer = modalWrapper.find('#modalContainer'),
			// modalContent = modalWrapper.find('#modalContent'),
			// modalGallery = modalWrapper.find('.gallery'),
			// modalTitle = modalWrapper.find('#modalTitle'),

		// Icons

			socialIcons = $('.fixedIcons'),
			socialIcon = $('.socialIcon'),
			socialIconBg = socialIcon.find('.socialIconBg'),
			share = $('#share'),
			shareTitle = share.find('.shareTitle'),
			shareIcon = share.find('.socialIcon'),
			shareIcons = share.find('.socialIcons'),
			shareIconBtn = shareIcon.slice(0,1),
			shareIconOther = shareIcon.slice(1),
			socialIconsTop = social.find('.socialIcons'),

		// Full image

			fullImageWrapper = $('#fullImageWrapper'),
			fullImageContainer = fullImageWrapper.find('#fullImageContainer'),
			closeIcon = $('#closeIcon'),
			rect = closeIcon.find('rect'),

		// Window's dimentions

			windowWidth = $window.width(),
			windowHeight = $window.height()
		;

// ========================================================================================
// Set properties //
// ========================================================================================

	TweenLite.to(window, 0, {scrollTo:{y:0}});

	var tlSetProps = new TimelineLite()
		.set(main, {'-webkit-filter':'blur(0em)', filter:'blur(0em)'})
		.set(mainMask, {autoAlpha:0})
		.set(mainMask1, {autoAlpha:0})

		.set(fixedBtnBg, {scale:0})

		.set(sideNavQuest, {xPercent:50, autoAlpha:0})
		.set(sideNavQuestInfo, {yPercent:100, autoAlpha:0})
		.set(sideNavLine, {scaleX:0, transformOrigin:'0% 50%'})
		.set(sideNavBg, {autoAlpha:0})
		.set(sideNavBgImage, {autoAlpha:0})

		.set(sideTextFixed, {autoAlpha:0, yPercent:400})
		.set(sideTextAbout, {autoAlpha:0, yPercent:-200})

		.set(introTextBlock, {opacity:0})
		.set(textBlockMask, {scaleY:0, transformOrigin:'50% 100%'})
		.set(textBlockContent, {opacity:0})

		//.set(shareIcons, {width:'5%'})
		.set(shareIconOther, {display:'none', opacity:0, yPercent:200})
		.set(bmWrapper, {transformOrigin:'50% 50%'})
		.set([bmLine1, bmLine2, bmLine3], {transformOrigin:'0% 50%', scaleX:1})

		.set(linkLine, {scaleY:0, transformOrigin:'50% 100%'})

		.set(firstWeekSelect, {display:'none', autoAlpha:0, scale:0.85})
		.set(bookDay, {transformOrigin:'50% 0%'})
		.set(bookHourBg, {scaleY:0, transformOrigin:'50% 100% 0%'})

		.set(btnModalBg, {scaleY:0, transformOrigin:'50% 100%'})

		.set(phoneNumber, {yPercent:-100, opacity: 0})

		.set(fullImageWrapper, {autoAlpha:0})
		.set(closeIcon, {autoAlpha:0})

		.set(imageFullTitle, {yPercent:-50})

		;
		if(windowWidth>1024){
			tlSetProps
				.set(imageBlock, {'-webkit-filter':'blur(5em)', filter:'blur(5em)', opacity:0})
				.set(imageFull, {'-webkit-filter':'blur(5em)', filter:'blur(5em)', opacity:0})
				.set([imageFullFront, imageFullMiddle, imageFullBack], {transformOrigin:"50% 50%", transformPerspective:800, scale: 1.1})
				.set(imageFullGhostFace, {transformOrigin:"0% 50%", transformPerspective:800, scale: 1.1})
				.set(imageFullMaskRed, {opacity:0})
			;
		}

		if(windowWidth>1024){
			tlSetProps
				.set(questSelectBg, {scale:1.2, transformPerspective:800, transformOrigin:'50% 50%', '-webkit-filter':'grayscale(100%)', filter:'grayscale(100%)'})
				.set(headerMainIntroText, {scale:0.65})
		}

// ========================================================================================
// Fixed navigation //
// ========================================================================================

	logo.on({
		mouseenter: function(){
			fixedBtnHover(this, '+=color', 0.4, 0.03, -2, 1);
		},
		mouseleave: function(){
			fixedBtnHover(this, '-=color', 0.4, 0.03, 0, 1);
		},
		click: function(){
			clickScale(this, 0.9);
			fixedBtnHover(this, '-=color', 0.4, 0.03, 0, 1);
		}
	});

	phone.on({
		mouseenter: function(){
			showFixedBtns(phoneNumber, 1, 0, 0);
		},
		mouseleave: function(){
			showFixedBtns(phoneNumber, 0, -100, 0);
		}
	});

	book.on({
		mouseenter: function(){
			fixedBtnHover(this, '+=color', 0.3, 0.015, -2, 1);
		},
		mouseleave: function(){
			fixedBtnHover(this, '-=color', 0.3, 0.015, 0, 1);
		},
		click: function(){
			fixedBtnHover(this, '-=color', 0.3, 0.015, 0, 1);
		}
	});

	sideNavIcon.on({
		mouseenter: function(){
			sideNavIconHover(this, 'rgba(150, 150, 150, 0)', '#ffffff', 1.1, 1.2, 0, 45, 8.5);
		},		
		mouseleave: function(){
			sideNavIconHover(this, 'rgba(150, 150, 150, 1)', '#c8c8c8', 0, 1, 1, 0, 0);

		},
		click: function(){
			disableScroll();
			sideNavOpen(-100, 'blur(0.2em)', 0.95, 1, 0, 1, 0.25, 0.85);
			sideNavIconHover(this, 'rgba(150, 150, 150, 1)', '#c8c8c8', 0, 1, 1, 1, 0, 0);
			sideNavAddClass();
			textAboutOpen(1, 0, 0.3);
			sideNavIconShow(0, 100, 0.1);
			showFixedBtns(phoneIcon, 0, -100, 0);
			showFixedBtns(book, 0, 100, 0);
		}
	});

	sideNav.on({
		mouseleave: function(){
			enableScroll();
			if(sideNav.hasClass('opened')){
				sideNavOpen(0, 'blur(0em)', 0, 0, 50, 0, 0.25, 0.7);
				sideNavRemoveClass();
				textAboutOpen(0, -200, 0.4);
				sideNavIconShow(1, 0, 0.4);
				showFixedBtns(phoneIcon, 1, 0, 0.4);
				if(!book.hasClass('hiddenBtn'))
					showFixedBtns(book, 1, 0, 0.4);

			}
		}
	});

	sideNavHeaderBtnClose.on({
		click: function(){
			enableScroll();
			if(sideNav.hasClass('opened')){
				sideNavOpen(0, 'blur(0em)', 0, 0, 50, 0, 0.25, 0.7);
				sideNavIconShow(1, 0, 0.4);
				sideNavRemoveClass();
				textAboutOpen(0, -200, 0.4);
				showFixedBtns(phoneIcon, 1, 0, 0.4);
				if(!book.hasClass('hiddenBtn'))
					showFixedBtns(book, 1, 0, 0.4);
			}
		}
	});

	mainMask.on({
		click: function(){
			enableScroll();
			sideNavOpen(0, 'blur(0em)', 0, 0, 50, 0, 0.25, 0.7);
			sideNavIconShow(1, 0, 0.4);
			sideNavRemoveClass();
			textAboutOpen(0, -200, 0.4);
			showFixedBtns(phoneIcon, 1, 0, 0.4);
			if(!book.hasClass('hiddenBtn'))
				showFixedBtns(book, 1, 0, 0.4);
		}
	});

	sideNavQuest.on({
		mouseenter: function(e){
			if(sideNav.hasClass('opened')){
				sideNavQuestHover(this, 'rgba(255, 255, 255, 1)', 1, 5, 2.5, 1);

				var $this = $(this),
					w = $this.width(),
					h = $this.height(),
					x = (e.pageX - $this.offset().left - (w/2)) * ( w > h ? (h/w) : 1 ),
					y = (e.pageY - $this.offset().top  - (h/2)) * ( h > w ? (w/h) : 1 ),
					direction =  Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

				switch(direction) {
					case 0:	/* from top */
					case 1:	/* from right **/
						bgImageAnim(this, 1, 1, 40, 1.2, -100, 0);
						break;
					case 2: /* from bottom */
					case 3: /* from left */
						bgImageAnim(this, 1, 1, 40, 1.2, 100, 0);
						break;
				}
			}

		},
		mouseleave: function(e){
			if(sideNav.hasClass('opened')){
				sideNavQuestHover(this, 'rgba(125, 125, 125, 1)', 0.3, 0, 0, 0);
				bgImageAnim(this, 0.5, 0, 1, 1, -20);

				var $this = $(this),
					w = $this.width(),
					h = $this.height(),
					x = (e.pageX - $this.offset().left - (w/2)) * ( w > h ? (h/w) : 1 ),
					y = (e.pageY - $this.offset().top  - (h/2)) * ( h > w ? (w/h) : 1 ),
					direction =  Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;

				switch(direction) {
					case 0:	/* to top */
					case 1:	/* to right **/
						bgImageAnim(this, 1, 0, 0.5, 1, 0, -100);
						break;
					case 2: /* to bottom */
					case 3: /* to left */
						bgImageAnim(this, 1, 0, 0.5, 1, 0, 100);
						break;
				}
			}
		},
		click: function(){

			if(windowWidth>1024 && !$(this).hasClass('notActive')){
				sideNav.removeClass('opened');
				sideNavRemoveClass();
				sideNavOpen(0, 'blur(0.2em)', 1, 1, 0.85, 30, 0.17, 0.75);
				bgImageAnim(this, 1, 1, 1, 1.2, 0, 0);
			}
		}
	});

	function sideNavAddClass(){
		sideNav.addClass('opened');
	}

	function sideNavRemoveClass(){
		sideNav.removeClass('opened');
	}

	function sideNavOpen(xSideNav, mainFilter, mainMaskAutoAlpha, sideNavBgAutoAlpha, xQuestTo, opacityQuestTo, delay, timeScale){
		var tl = new TimelineLite()
			.to(sideNav, 0.5, {xPercent:xSideNav, ease:Expo.easeInOut}, 0)
			.to(mainMask, 0.55, {autoAlpha:mainMaskAutoAlpha, ease:Power3.easeInOut}, 0)
			.to(sideNavBg, 0.55, {autoAlpha:mainMaskAutoAlpha, ease:Power3.easeInOut}, 0)
			.staggerTo(sideNavQuest, 0.5, {xPercent:xQuestTo, autoAlpha:opacityQuestTo, ease:Expo.easeOut}, 0.02, delay)
			.timeScale(timeScale)
			;
		if(windowWidth>600){
			tl
				.to(main, 0.55, {'-webkit-filter':mainFilter, filter:mainFilter, ease:Power3.easeInOut}, 0)
		}
	}

	function fixedBtnHover(object, className, time, stagger, x, scale){
		var $object = $(object),
			span = $object.find('span'),
			tl = new TimelineLite()
				.staggerTo(span, time, {className:className, x:x, y:x, scale:scale, ease:Power4.easeOut}, stagger)
				;
	}

	function sideNavQuestHover(object, color, opacity, xPercentTitle, xPercentImg, scaleX){
		var $object = $(object),
			title = $object.find('.sideNavTitle'),
			img = $object.find('.sideNavImage'),
			line = $object.find('.sideNavLine'),
			tl = new TimelineLite()
				.to(line, 0.7, {scaleX:scaleX, ease:Expo.easeOut}, 0)
				.to(title, 0.6, {color:color, xPercent:xPercentTitle, ease:Expo.easeOut}, 0)
				.to(img, 1, {opacity:opacity, xPercent:xPercentImg, ease:Expo.easeOut}, 0)
				;
	}

	function bgImageAnim(object, time, autoAlpha, scaleBgTime, scaleBg, yPercentQuestInfoFrom, yPercentQuestInfoTo){
		var $object = $(object),
			index = $object.index(),
			bgImage = sideNavBgImage[index-1],
			questInfo = sideNavQuestInfo[index-1],
			tl = new TimelineLite()
				.to(canvasNoise, time, {autoAlpha:autoAlpha, ease:Power2.easeOut}, 0)
				.to(bgImage, time, {autoAlpha:autoAlpha, ease:Power2.easeOut}, 0)
				.to(bgImage, scaleBgTime, {scale:scaleBg, ease:Power2.easeOut}, 0)
				.fromTo(questInfo, 0.4, {yPercent:yPercentQuestInfoFrom}, {autoAlpha:autoAlpha, yPercent:yPercentQuestInfoTo, ease:Power2.easeOut}, 0)
				;
	}

	/*function showQuestInfo(object, autoAlpha, yPercentTo){
		var $object = $(object),
			index = $object.index(),
			bgImage = sideNavQuestInfo[index-1],
	};*/

	function sideNavIconHover(object, borderColor, bgColor, scaleBg, scaleObj, scaleBmLine2, rotateBmLine, yBmLine){
		var tl = new TimelineLite()
			.to(bmLine2, 0.3, {scaleX:scaleBmLine2, ease:Expo.easeOut}, 0)
			.to(bmLine1, 0.2, {rotationZ:-rotateBmLine, y:yBmLine, ease:Expo.easeOut}, 0)
			.to(bmLine3, 0.2, {rotationZ:rotateBmLine, y:-yBmLine, ease:Expo.easeOut}, 0)
			.to([bmLine1, bmLine2, bmLine3], 0.3, {backgroundColor:bgColor, ease:Expo.easeOut}, 0)
			.to(object, 0.4, {scale:scaleObj, borderColor:borderColor, ease:Expo.easeOut}, 0)
			.to(sideNavIconBg, 0.3, {scale:scaleBg, ease:Expo.easeOut}, 0)
			.timeScale(0.6)
			;
	}

	function sideNavIconShow(autoAlpha, xPercent, delay){
		TweenLite.to(sideNavIcon, 0.3, {autoAlpha:autoAlpha, xPercent:xPercent, ease:Power3.easeOut, delay:delay});
	}

	function loadFullImg(object){
		var $object = $(object),
			imageSrc = $object.find('img').attr('src').replace('_sm.', '_bw_full.');	
		sideNavBgImage.css('background-image', 'url("' + imageSrc + '")');
	}

	function textAboutOpen(autoAlpha, yPercent, delay){
		TweenLite.to(sideTextAbout, 0.3, {autoAlpha:autoAlpha, yPercent:yPercent, ease:Power3.easeOut, delay:delay});
	}

	// var wLetter = $('#wLetterPath'),
	// 	segment = new Segment(wLetter);

	// segment.draw("25%", "75% - 10", 1);
	// // function drawSvg(object, begin, end){
	// 	// TweenLite.to(path, 1, { strokeDasharray: segment.strokeDasharray(begin, end)});
	// // };

// ========================================================================================
// Main page //
// ========================================================================================
	
	if(windowWidth>1024){

		questSelect.on({
			mouseenter: function(){
				questSelectHover(this, -50, 1, 0.6, 1, 1);
				questSelectBgHover(this, 0.75, 1, 30, 1.3, 'grayscale(0%)');
			},
			mouseleave: function(){
				var $this = $(this),
					bg = $this.find('.questSelectBg'),
					title = $this.find('.questName'),
					circleBg = $this.find('.questSelectCircle'),
					intro = $this.find('.introText');

				questSelectHover(this, 0, 0, 0.3, 0, 0.65);
				questSelectBgHover(this, 0.25, 0.6, 1, 1.2, 'grayscale(100%)');
				moveXY(bg, 1, 0, 0, 0);
				moveXY(title, 1, 0, 0, 0);
				moveXY(circleBg, 1, 0, 0, 0);		
				moveXY(intro, 1, 0, 0, 0);
			},
			mousemove: function(event){
				event = event || window.event;
				var $this = $(this),
					xPos = (event.clientX/windowWidth) - 0.5,
					yPos = (event.clientY/windowHeight) - 0.5,
					bg = $this.find('.questSelectBg'),
					title = $this.find('.questName'),
					circleBg = $this.find('.questSelectCircle'),
					intro = $this.find('.introText');

				moveXY(bg, 0.75, -30, xPos, yPos);
				moveXY(title, 0.75, 100, xPos, yPos);		
				moveXY(intro, 0.75, 130, xPos, yPos);		
				moveXY(circleBg, 0.75, 70, xPos, yPos);		
			}
		});

		questSelect1.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect2, '33.33%', 1.1, 'rgba(100, 100, 100, 0.5)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect2, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});

		questSelect2.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect1, '33.33%', 1.1, 'rgba(100, 100, 100, 0.5)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect1, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});

		questSelect3.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect4, '33.33%', 1.1, 'rgba(100, 100, 100, 0.5)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect4, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});
		
		questSelect4.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect3, '33.33%', 1.1, 'rgba(100, 100, 100, 0.5)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect3, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});
		
		//questSelect5.on({
			//mouseenter: function(){
				//questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect5, '66.66%', 1.1, 'rgba(255, 255, 255, 1)');
			//},
			//mouseleave: function(){
				//questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect5, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			//},
			//click: function(){

			//}
		//});
		
		questSelect5.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect6, '33.33%', 1.1, 'rgba(255, 255, 255, 1)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect6, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});
		
		questSelect6.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect5, '33.33%', 1.1, 'rgba(100, 100, 100, 0.5)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect5, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});
		
		
		questSelect7.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect8, '33.33%', 1.1, 'rgba(255, 255, 255, 1)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect8, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});
		
		questSelect8.on({
			mouseenter: function(){
				questSelectSize(this, '66.66%', 'rgba(255, 255, 255, 1)', questSelect7, '33.33%', 1.1, 'rgba(100, 100, 100, 0.5)');
			},
			mouseleave: function(){
				questSelectSize(this, '50%', 'rgba(200, 200, 200, 0.75)', questSelect7, '50%', 1.2, 'rgba(225, 225, 225, 0.75)');
			},
			click: function(){

			}
		});

	}

	function questSelectHover(object, yPercent, scaleCircleBg, timeIntro, opacityIntro, scaleIntro){
		var $object = $(object),
			circleBg = $object.find('.questSelectCircle'),
			introText = $object.find('.introText'),
			questInfo = $object.find('.questInfo'),
			tl = new TimelineLite()
				.to(circleBg, 0.7, {scale:scaleCircleBg, ease:Expo.easeInOut}, 0)
				.to(introText, timeIntro, {autoAlpha:opacityIntro, scale:scaleIntro, ease:Expo.easeInOut}, '-=0.5')
				;
	}

	function questSelectBgHover(object, opacityBg, opacityCanvas, scaleBgTime, scaleBg, filter){
		var $object = $(object),
			canvas = $object.find('canvas'),
			bg = $object.find('.questSelectBg'),
			tl = new TimelineLite()
				.to(bg, 1, {opacity:opacityBg, ease:Power3.easeOut}, 0)
				.to(bg, scaleBgTime, {scale:scaleBg, ease:Power3.easeOut}, 0)
				.to(canvas, 1, {opacity:opacityCanvas, ease:Power3.easeOut}, 0)
				.to(bg, 2, {'-webkit-filter':filter, filter:filter, ease:Power3.easeOut}, 0)
				;
	}

	function questSelectSize(object, thisWidth, thisTitleColor, otherObject, otherWidth, otherObjectBgScale, otherTitleColor){
		var $object = $(object),
			$otherObject = $(otherObject),
			thisTitle = $object.find('.questName'),
			otherObjectBg = $otherObject.find('.questSelectBg'),
			otherTitle = $otherObject.find('.questName'),
			tl = new TimelineLite()
				.to(object, 1, {width:thisWidth, ease:Power4.easeInOut}, 0)
				.to(otherObject, 1, {width:otherWidth, ease:Power4.easeInOut}, 0)
				.to(thisTitle, 1, {color:thisTitleColor, ease:Power3.easeOut}, 0)
				.to(otherObjectBg, 1, {scale:otherObjectBgScale, ease:Power4.easeInOut}, 0)
				.to(otherTitle, 0.7, {color:otherTitleColor, ease:Power4.easeInOut}, 0)
				;
	}

	// function introTextShow(object, time, opacity, yPercent, delay){
	// 	var $object = $(object),
	// 		introText = $object.find('.introText'),
	// 		tl = new TimelineLite()
	// 			.to(introText, time, {autoAlpha:opacity, yPercent:yPercent, ease:Power4.easeInOut}, delay);
	// };

	function moveXY(object, time, val, xPos, yPos){
		TweenLite.to(object, time, {x:val*xPos, y:val*yPos, ease:Power1.easeOut});
	}

// ========================================================================================
// Block opening //
// ========================================================================================

	introTextBlock.waypoint({
		handler: function(direction) {
			introTextBlockOpen(this.element);
			this.destroy();
		},
		offset:'70%'
	});	

	textBlock.waypoint({
		handler: function(direction) {
			textBlockOpen(this.element);
			this.destroy();
		},
		offset:'90%'
	});

	if(windowWidth>1024){

		imageBlock.waypoint({
			handler: function(direction) {
				imageBlockOpen(this.element);
				this.destroy();
			},
			offset:'70%'
		});	

		imageFull.waypoint({
			handler: function(direction) {
				imageBlockOpen(this.element);
				this.destroy();
			},
			offset:'70%'
		});
	}

	blockMask.waypoint({
		handler: function(direction) {
			blockMaskFade(this.element, 0);
			this.destroy();
		},
		offset:'90%'
	});

	function textBlockOpen(object){
		var $object = $(object),
			textBlockMask = $object.find('.textBlockMask'),
			content = $object.find('.textBlockContent'),
			tl = new TimelineLite()
				.to(textBlockMask, 0.7, {scaleY:1, ease:Expo.easeInOut})
				.set(textBlockMask, {transformOrigin:'50% 0%'})
				.to(textBlockMask, 0.8, {scaleY:0, ease:Expo.easeOut})
				.set(content, {opacity:1}, 0.7)
				.timeScale(1.4)
				;
			if(windowWidth>600){
				tl.set(object, {backgroundColor: 'rgba(27, 27, 27, 0.95)'}, 0.7)
			}
	}	

	function introTextBlockOpen(object){
		TweenLite.to(object, 2, {opacity:1, ease:Power2.easeOut});
	}

	function imageBlockOpen(object){
		TweenLite.to(object, 1, {'-webkit-filter':'blur(0.85em)', filter:'blur(0.85em)', opacity:0.3, ease:Power2.easeOut});
	}

	function blockMaskFade(object, autoAlpha){
		TweenLite.to(object, 0.7, {autoAlpha:autoAlpha, ease:Power3.easeOut});
	}

// ========================================================================================
// Full image hover //
// ========================================================================================
	
	if(windowWidth>1024){
		imageBlock.on({
			mouseenter: function () {
				imageBlockHover(this, 1, 'blur(0em)', 1);
			},
			mouseleave: function () {
				imageBlockHover(this, 1, 'blur(0.85em)', 0.5);
			}
		});
	}

	imageFull.on({
		mousemove: function(event){
			event = event || window.event;
			var xPos = (event.clientX/windowWidth) - 0.5,
				yPos = (event.clientY/windowHeight) - 0.5,
				rotationYValue = xPos,
				rotationXValue = yPos,
				scale = (Math.abs(Math.abs(xPos) -1))*0.1 + 1,
				opacityVal = (Math.abs(Math.abs(xPos-0.08) -1))*3 - 2
				;

				maskOpacity(imageFullMaskRed, 0.8, opacityVal-0.5);
				maskOpacity(imageFullGhostFace, 0.7, opacityVal-0.6);

				moveXY(imageFullGhostFace, 3, -100, xPos, yPos);
				moveXY(imageFullTitle, 1, 30, xPos, yPos);
				// imageFullTilt(imageFullGhostFace, rotationXValue, rotationYValue, scale*1.02);				

				moveXY(imageFullFront, 2, -20, xPos, yPos);
				imageFullTilt(imageFullFront, rotationXValue*1.5, rotationYValue*1.5, scale*1.02);						

				moveXY(imageFullMiddle, 2, 0, xPos, yPos);

				moveXY(imageFullBack, 2, 20, xPos, yPos);
				imageFullTilt(imageFullBack, rotationXValue*0.8, rotationYValue*0.8, scale*1.02);
		},
		mouseover: function() {
			imageBlockHover(this, 1, 'blur(0em)', 1);
		},
		mouseout: function() {
			imageBlockHover(this, 1, 'blur(0.85em)', 0.5);
			maskOpacity(imageFullMaskRed, 1, 0);
			maskOpacity(imageFullGhostFace, 1, 0);
		}
	});	

	function maskOpacity(object, time, opacityVal){
		TweenLite.to(object, time, {opacity:opacityVal, ease:Power2.easeOut});
	}

	function imageFullTilt(object, rotationXValue, rotationYValue, scale){
		TweenLite.to(object, 1.5, {
			rotationY:rotationYValue, rotationX:-rotationXValue,
			scale:scale, ease:Power3.easeOut, force3D:true});
	}

	function imageBlockHover(object, time, filter, opacity) {
		TweenLite.to(object, time, {'-webkit-filter':filter, filter:filter, opacity:opacity, ease:Power3.easeOut});
	}

	// function loop() {
	//		var rand = Math.round(Math.random() * (5000 - 1000)) + 1000;
	//			setTimeout(function() {
	//		var tl = new TimelineLite()
	//			.to(imageFullGhostFace, 0.6, {opacity:0.2, ease:Power4.easeOut})
	//			.to(imageFullGhostFace, 0.2, {opacity:0, ease:Power4.easeOut})
	//			;
	//		loop();  
	//		}, rand);
	// };

	// loop();

// ========================================================================================
// Gallery open & close
// ========================================================================================

	function createFullImages() {
		for(var i=0; i<winnersPhoto.length; i++) {
			fullImageContainer.append('<div class="fullImage"><img src="' + winnersPhoto[i].getAttribute('src') + '" alt="Wember quests"/></div>');
			TweenLite.set($('.fullImage')[i], {xPercent:100*i, yPercent:-50, scale:0.67, autoAlpha:0.25});
		}
	}

	createFullImages();

	var fullImage = fullImageContainer.find('.fullImage'),
		fullImageMask = fullImage.find('.fullImageMask')
		;

	winnersPhoto.on({
		click: function() {
			var $this = $(this),
				index = $this.index();
			addClassFullImages(this);
			appendFullImageMask($('.activeImg'));
			openFullImg();
			sideNavIconShow(0, 100, 0);
			showFixedBtns(phoneIcon, 0, -100, 0);
			showFixedBtns(book, 0, 100, 0);

			if(index == 0) {
				lastImgPrepend();
			} else if(index == winnersPhoto.length-1) {
				firstImgAppend();
			}
		}
	});

	fullImage.on({
		mouseenter: function() {
			var $this = $(this);
			if(!$this.hasClass('activeImg')){
				prevNextImageHover(this, 0.65);
			}
		},
		mouseleave: function() {
			var $this = $(this);
			if(!$this.hasClass('activeImg')){
				prevNextImageHover(this, 0.25);
			}
		},
		click: function() {
			var $this = $(this),
				index = $this.index();

			if($this.hasClass('nextImg')){
				slider($this, 'nextImg', 'prevImg', '-=60');
			} else if($this.hasClass('prevImg')) {
				slider($this, 'prevImg', 'nextImg', '+=60');
			}

			if(index == 0) {
				lastImgPrepend();
			} else if(index == fullImage.length-1) {
				firstImgAppend();
			}

			inactiveBody(5, 0);
			inactiveBody(0, 0.5);
		}
	});

	if(windowWidth>600) {

		fullImageWrapper.on({
			mousemove: function(event){
				event = event || window.event;
				var $this = $(this),
					xPos = (event.clientX/windowWidth) - 0.5,
					yPos = (event.clientY/windowHeight) - 0.25,
					activeImg = $this.find('.activeImg'),
					prevImg = $this.find('.prevImg'),
					nextImg = $this.find('.nextImg')
					;

				moveXY(activeImg, 0.75, -100, xPos, yPos);
				moveXY([prevImg, nextImg], 0.75, -60, xPos, yPos);

				// var scaleX = (Math.abs(Math.abs(xPos) -1))*0.4 + 0.70,
				// TweenLite.to(activeImg, 1, {scale:scaleX, ease:Power3.easeOut});
			}
		});
	}

	closeIcon.on({
		mouseenter: function() {
			closeIconHover(this, '#eb0f23');
		},
		mouseleave: function() {
			closeIconHover(this, '#969696');
		},
		click: function() {
			closeFullImg();
			sideNavIconShow(1, 0, 0.7);
			showFixedBtns(phoneIcon, 1, 0, 0.7);
			if(!book.hasClass('hiddenBtn'))
				showFixedBtns(book, 1, 0, 0.7);
		}
	});

	function slider(object, objRemoveClass, activeImgAddClass, xTo) {
		var $object = $(object),
			activeImg = fullImageContainer.find('.activeImg'),
			nextImg = fullImageContainer.find('.nextImg'),
			prevImg = fullImageContainer.find('.prevImg')
			;

		$object.removeClass(objRemoveClass).addClass('activeImg');;
		appendFullImageMask($object);

		activeImg.removeClass('activeImg').addClass(activeImgAddClass).find('.fullImageMask').remove();

		var	tl = new TimelineLite()
			.to(activeImg, 1, {scale:0.67, autoAlpha:0.25, ease:Power3.easeInOut}, 0)
			.to(fullImageContainer, 1, {xPercent:xTo, ease:Expo.easeInOut}, 0)
			.to($object, 1, {scale:1, autoAlpha:1, ease:Power3.easeInOut}, 0)
			.timeScale(0.75)
			;
	}

	function firstImgAppend(){
		var	firstImg = $('.fullImage').first(),
			imgOffset = '+=' + 100*fullImage.length;

		TweenLite.set(firstImg, {xPercent:imgOffset});
		firstImg.removeClass('prevImg').addClass('nextImg');	
		fullImageContainer.append(firstImg);
	}

	function lastImgPrepend(){
		var	lastImg = $('.fullImage').last(),
			imgOffset = '-=' + 100*fullImage.length;
		
		TweenLite.set(lastImg, {xPercent:imgOffset});
		lastImg.removeClass('nextImg').addClass('prevImg');
		fullImageContainer.prepend(lastImg);
	}

	function addClassFullImages(object) {
		var $object = $(object),
			index = $object.index(),
			fullImage = fullImageContainer.find('.fullImage'),
			activeImage = $('.fullImage:eq('+index+')'),
			prevImages = fullImage.slice(0,index),
			nextImages = fullImage.slice(index+1, fullImage.length);

			prevImages.addClass('prevImg');
			nextImages.addClass('nextImg');
			activeImage.addClass('activeImg');

		// wrapActiveImg(activeImage);

		var	tl = new TimelineLite()
			.set(fullImageContainer, {xPercent:-60*index})
			.set(activeImage, {scale:1, autoAlpha:1})
			.set('prevImg', {xPercent:-50})
			.set('nextImg', {xPercent:50})
			;	
	}

	function appendFullImageMask(object) {
		var $object = $(object);
		$object.append('<div class="fullImageMask"></div>');
	}

	function prevNextImageHover(object, opacity) {
		TweenLite.to(object, 0.5, {opacity:opacity, ease:Power3.easeOut});
	}

	function closeIconHover(object, color) {
		var rect = $(object).find('rect');
		TweenLite.to(rect, 0.4, {attr:{fill:color}, ease:Power3.easeOut});
	}

	function openFullImg(){
		var	activeImg = fullImageContainer.find('.activeImg'),
			fullImageMask = fullImage.find('.fullImageMask'),
			prevImg = fullImageContainer.find('.prevImg'),
			nextImg = fullImageContainer.find('.nextImg'),
			activeImgImg = activeImg.find('img'),

			tl = new TimelineLite({onStart:inactiveBody, onStartParams:[5,0]})
				.set(fullImageMask, {autoAlpha:1, scaleY:0, transformOrigin:'50% 100%'})
				.set(fullImageWrapper, {autoAlpha:1}, 0)
				.set(activeImgImg, {autoAlpha:0, yPercent:50}, 0)
				.to(mainMask, 0.6, {autoAlpha:0.95, ease:Expo.easeOut, onStart:disableScroll}, 0)
				.to(fullImageMask, 0.7, {scaleY:1, ease:Expo.easeInOut}, 0.3)
				.set(fullImageMask, {transformOrigin:'50% 0%'})
				.to(fullImageMask, 0.8, {scaleY:0, ease:Expo.easeOut})
				.fromTo([prevImg, nextImg], 2, {autoAlpha:0}, {autoAlpha:0.25, ease:Power2.easeOut}, 1)
				.to(activeImgImg, 0.8, {autoAlpha:1, yPercent:0, ease:Power4.easeOut, onStart:inactiveBody, onStartParams:[0,0]}, 1)
				.to(closeIcon, 0.5, {autoAlpha:1, ease:Power2.easeOut}, 1.5)
				;
				if(windowWidth>600)
					tl.to(main, 0.3, {'-webkit-filter':'blur(0.2em)', filter:'blur(0.2em)', ease:Power2.easeOut}, 0.4);
	}

	function closeFullImg(){
		var activeImg = fullImageContainer.find('.activeImg'),
			prevImg = fullImageContainer.find('.prevImg'),
			nextImg = fullImageContainer.find('.nextImg'),
			activeImgImg = activeImg.find('img'),
			fullImageMask = fullImage.find('.fullImageMask');

		var	tl = new TimelineMax({onStart:inactiveBody, onStartParams:[5,0], onComplete:inactiveBody, onCompleteParams:[0,0]})
				.to(closeIcon, 0.3, {scale:0.7, ease:Power3.easeOut}, 0)
				.to(closeIcon, 0.3, {scale:1, ease:Power3.easeOut}, 0)
				// .to(fullImageMask, 0.4, {opacity:1, ease:Power2.easeOut}, 0)
				.to(closeIcon, 0.2, {autoAlpha:0, ease:Power2.easeOut}, 0)
				.to([prevImg, nextImg], 0.7, {autoAlpha:0, ease:Power2.easeOut}, 0)
				.set(fullImageMask, {autoAlpha:1, scaleY:0, transformOrigin:'50% 0%'}, 0)
				.to(fullImageMask, 0.7, {scaleY:1, ease:Expo.easeInOut}, 0)
				.set(fullImageMask, {transformOrigin:'50% 100%'})
				.set(activeImgImg, {autoAlpha:0})
				.to(fullImageMask, 0.8, {scaleY:0, ease:Expo.easeOut})
				.set(fullImageMask, {autoAlpha:0})
				.set([prevImg,nextImg], {x:0})
				.set(fullImageWrapper, {autoAlpha:0, onComplete:resetFullImages})
				.to(mainMask, 0.6, {autoAlpha:0, ease:Expo.easeOut, onComplete:enableScroll}, 0.7)
				.to(main, 0.6, {'-webkit-filter':'blur(0em)', filter:'blur(0em)', ease:Power2.easeOut}, 0.7)
				;
				// .set(modalContent, {autoAlpha:0}, 0.7)
	}

	function resetFullImages() {
		var activeImgImg = $('.activeImg').find('img');

		TweenLite.set(activeImgImg, {autoAlpha:1});

		$('.prevImg').removeClass('prevImg');
		$('.activeImg').removeClass('activeImg');
		$('.nextImg').removeClass('nextImg');

		$('.fullImage').each(function(index){
			var img = $(this).find('img');
			TweenLite.set(this, {xPercent:100*index, yPercent:-50, scale:0.67, autoAlpha:0});
			TweenLite.set(img, {attr:{src:winnersPhoto[index].getAttribute('src')}});
		});

		fullImageContainer.find('.fullImageMask').remove();
	}

// ========================================================================================
// Slide navigation
// ========================================================================================

	/*nextImage.hammer().on('swipeleft click', function(){nextSlide('-=110');})
	nextImage.hammer().on('swiperight', function(){prevSlide('+=110');})	

	prevImage.hammer().on('swiperight click', function(){prevSlide('+=110');})
	prevImage.hammer().on('swipeleft', function(){nextSlide('-=110');})*/

	/*function nextSlide(xTo){
		var fullImage = fullImageContainer.find('.fullImage'),
			firstImg = fullImage.first(),
			imgOffset = '+=' + 120*fullImage.length,
			tl = new TimelineLite({onStart:inactiveBody, onStartParams:[5,0], onComplete:inactiveBody, onCompleteParams:[0,0]})
				.to(fullImageContainer, 0.8, {xPercent:xTo, ease:Expo.easeInOut})
				.set(firstImg, {xPercent:imgOffset});
			
			fullImageContainer.append(firstImg);	
	}	

	function prevSlide(xTo){
		var fullImage = fullImageContainer.find('.fullImage'),
			lastImg = fullImage.last(),
			imgOffset = '-=' + 120*fullImage.length,
			tl = new TimelineLite({onStart:inactiveBody, onStartParams:[5,0], onComplete:inactiveBody, onCompleteParams:[0,0]})
				.to(fullImageContainer, 0.8, {xPercent:xTo, ease:Expo.easeInOut})
				.set(lastImg, {xPercent:imgOffset}, 0);

			fullImageContainer.prepend(lastImg);
	}*/

// ========================================================================================
// Inactive body
// ========================================================================================

	function inactiveBody(zIndex, delay){
		var inactive = $('#inactive');
		TweenLite.set(inactive, {zIndex:zIndex, delay:delay});
	}	

	function inactivePrevNext(autoAlpha){
		TweenLite.set([prevImage, nextImage], {autoAlpha:autoAlpha});
	}

// ========================================================================================
// Book calendar //
// ========================================================================================

	bookDay.on({
		mouseenter: function(){
			bookDayHover(this, 0.3, 'rgba(50, 50, 50, 1)');
		},
		mouseleave: function(){
			bookDayHover(this, 0.9, 'rgba(30, 30, 30, 1)');
		}
	});	

	var highPriceColor = $('.highPrice').css('color'),
		normalPriceColor = $('.normalPrice').css('color'),
		lowPriceColor = $('.lowPrice').css('color');

	bookHour.on({
		mouseenter: function(){
			var $this = $(this);
			if(!$this.hasClass('booked')) {
				bookHourHover(this, 0.3, 1, 'rgb(255, 255, 255)', Expo.easeOut);
			}
		},
		mouseleave: function(){
			var $this = $(this);
			if(!$this.hasClass('booked')) {
				if($this.hasClass('highPrice'))
					bookHourHover(this, 0.9, 0, highPriceColor, Power2.easeOut);
				else if($this.hasClass('lowPrice'))
					bookHourHover(this, 0.9, 0, lowPriceColor, Power2.easeOut);
				else bookHourHover(this, 0.9, 0, normalPriceColor, Power2.easeOut);
			}
		}, 
		click: function(){
			var $this = $(this);
			if(!$this.hasClass('booked')) {
				if($this.hasClass('highPrice'))
					bookHourHover(this, 0.3, 0, highPriceColor, Power2.easeOut);
				else if($this.hasClass('lowPrice'))
					bookHourHover(this, 0.3, 0, lowPriceColor, Power2.easeOut);
				else bookHourHover(this, 0.3, 0, normalPriceColor, Power2.easeOut);
			}
		}
	});

	nextWeekSelect.on({
		mouseenter: function(){
			fixedBtnHover(this, '+=color', 0.3, 0.015, -2, 1);
		},
		mouseleave: function(){
			fixedBtnHover(this, '-=color', 0.3, 0.015, 0, 1);
		},
		click: function(){
			fixedBtnHover(this, '-=color', 0.3, 0.015, 0, 1);
			nextWeekChange();
		}
	});

	firstWeekSelect.on({
		mouseenter: function(){
			fixedBtnHover(this, '+=color', 0.3, 0.015, -2, 1.1);
		},
		mouseleave: function(){
			fixedBtnHover(this, '-=color', 0.3, 0.015, 0, 1);
		},
		click: function(){
			fixedBtnHover(this, '-=color', 0.3, 0.015, 0, 1);
			firstWeekChange(this);
		}
	});

	function bookDayHover(object, time, bgColor){
		TweenLite.to(object, time, {backgroundColor:bgColor, ease:Expo.ease});
	}

	function bookHourHover(object, time, scaleVal, color, ease){
		var $object = $(object),
			bookTime = $object.find('.bookTime'),
			bookHourBg = $object.find('.bookHourBg'),
			tl = new TimelineLite()
				.set(bookHourBg, {opacity:1}, 0)
				.to(bookHourBg, time, {scaleY:scaleVal, ease:ease}, 0)
				.to(bookTime, time, {color:color, ease:ease}, 0)
				;
	}

	function nextWeekChange(){
		var tl = new TimelineLite()
			.to(nextWeekSelect, 0.7, {autoAlpha:0, scale:0.85, ease:Expo.easeOut})
			.staggerTo(bookDayFirstWeek, 0.7, {opacity:0, scale:0.85, ease:Power4.easeInOut}, 0.03, 0)
			.set(firstWeek, {display:'none'})
			.set(nextWeek, {display:'block'})
			.set(bookDayNextWeek, {opacity:0, scale:0.85})
			.set(nextWeekSelect, {display:'none'})
			.set(firstWeekSelect, {display:'block'})
			.to(firstWeekSelect, 0.7, {autoAlpha:1, scale:1, ease:Power4.easeOut})
			.staggerTo(bookDayNextWeek, 0.7, {opacity:1, scale:1, ease:Power3.easeOut}, 0.03, '-=0.7')
			;
	}

	function firstWeekChange(){
		var tl = new TimelineLite()
			.to(firstWeekSelect, 0.7, {autoAlpha:0, scale:0.85, ease:Expo.easeOut})
			.staggerTo(bookDayNextWeek, 0.7, {opacity:0, scale:0.85, ease:Power4.easeInOut}, 0.03, 0)
			.set(firstWeekSelect, {display:'none'})
			.set(nextWeekSelect, {display:'block'})
			.set(bookDayFirstWeek, {opacity:0, scale:0.85})
			.set(nextWeek, {display:'none'})
			.set(firstWeek, {display:'block'})
			.to(nextWeekSelect, 0.7, {autoAlpha:1, scale:1, ease:Power4.easeOut})
			.staggerTo(bookDayFirstWeek, 0.7, {opacity:1, scale:1, ease:Power3.easeOut}, 0.03, '-=0.7')
			;
	}

// ========================================================================================
// Open modal window //
// ========================================================================================
	
	btnModal.on({
		mouseenter: function(){
			btnModalHover(this, 'rgba(75, 75, 75, 0)', 'rgb(255, 255, 255)', 1, Expo.easeOut);
		},
		mouseleave: function(){
			btnModalHover(this, 'rgba(75, 75, 75, 1)', 'rgb(200, 200, 200)', 0, Power2.easeOut);
		}
	});

	function btnModalHover(object, borderColor, colorTitle, scaleYBg, ease){
		var $object = $(object),
			title = $object.find('.btnModalTitle'),
			bg = $object.find('.btnModalBg'),
			tl = new TimelineLite()
				.to($object, 0.5, {borderColor:borderColor, ease:ease}, 0)
				.to(title, 0.3, {color:colorTitle, ease:ease}, 0)
				.to(bg, 0.3, {scaleY:scaleYBg, ease:ease}, 0)
				;
	}

	var OpenModal = {
		init: function(){
			main = $('#main');
			mainMask1 = $('#mainMask1');
			modalWrapper = $('#modalWrapper');
			modalMask = $('#modalMask');
			modalContainer = modalWrapper.find('#modalContainer');
			modalContainerMask = modalContainer.find('#modalContainerMask');
			modalContent = modalWrapper.find('#modalContent');
			inactive = $('#inactive');
			bookInfoForm = $('#bookInfoForm');
			btnSubmit = modalWrapper.find('#btnSubmit');
			btnCancel = modalWrapper.find('#btnCancel');
			booked = bookCalendar.find('.booked');
			bookedA = booked.find('a');
			tl = new TimelineLite()
				.set(modalWrapper, {autoAlpha:0})
				.set(modalContent, {autoAlpha:0})
				.set(modalContainerMask, {scaleY:0, transformOrigin:'50% 100%'})
				.set(main, {'-webkit-filter':'blur(0em)', filter:'blur(0em)'});
			this.bindEvents();
		},
		bindEvents: function(){
			bookHour.on('click', $.proxy(this.openModal, this));
			btnCancel.on('click', $.proxy(this.closeModal, this));

			booked.on('click', function(event){
				event = event || window.event;
				if (event.preventDefault)
					event.preventDefault();
				event.returnValue = false;  
			});

			bookedA.on('click', function(event){
				event = event || window.event;
				if (event.preventDefault)
					event.preventDefault();
				event.returnValue = false;  
			});
			
		},
		openModal: function(event){
			event = event || window.event;
			if (event.preventDefault)
				  event.preventDefault();
			event.returnValue = false;  
			var tl = new TimelineLite({onStart:inactiveBody, onStartParams:[2,0]})
				.set(modalWrapper, {autoAlpha:1})
				.to(mainMask1, 0.6, {autoAlpha:1, ease:Expo.easeOut}, 0)
				.to(modalContainerMask, 0.7, {scaleY:1, ease:Expo.easeInOut}, 0)
				.set(modalContainerMask, {transformOrigin:'50% 0%'})
				.to(modalContainerMask, 0.8, {scaleY:0, ease:Expo.easeOut})
				.set(modalContent, {autoAlpha:1}, 0.7)
				.set(modalContainer, {backgroundColor:'rgba(50, 50, 50, 1)'}, 0.7)
				;

			if(windowWidth>600){
				tl
					.to(main, 0.6, {'-webkit-filter':'blur(0.2em)', filter:'blur(0.2em)', ease:Power2.easeOut}, 0.2)
				;
			}
		},
		closeModal: function(){
			var tl = new TimelineLite({onComplete:inactiveBody, onCompleteParams:[0,0]})
				.to(modalContainerMask, 0.7, {scaleY:1, ease:Expo.easeInOut}, 0)
				.set(modalContainerMask, {transformOrigin:'50% 100%'})
				.to(modalContainerMask, 0.8, {scaleY:0, ease:Expo.easeOut})
				.set(modalContent, {autoAlpha:0}, 0.7)
				.set(modalContainer, {backgroundColor:'rgba(50, 50, 50, 0)'}, 0.7)
				.to(mainMask1, 0.6, {autoAlpha:0, ease:Expo.easeOut}, 0.7)
				.to(main, 0.6, {'-webkit-filter':'blur(0em)', filter:'blur(0em)', ease:Power2.easeOut}, 0.7)
				.to(modalWrapper, 0.6, {autoAlpha:0, ease:Expo.easeOut, onComplete:enableScroll}, '-=0.2')
				;
		}
	};

	OpenModal.init();

// ========================================================================================
// Social icons //
// ========================================================================================

	socialIcon.on({
		mouseenter: function(){
			socialIconHover(this, 'rgba(150, 150, 150, 0)', '#ffffff', 1.1, 1.25, 0.5);
		},
		mouseleave: function(){
			socialIconHover(this, 'rgba(150, 150, 150, 1)', '#c8c8c8', 0, 1, 0.4);
		},
		click: function(){
			socialIconHover(this, 'rgba(150, 150, 150, 1)', '#c8c8c8', 0, 1, 0.4);
		}
	});

	shareIconBtn.on({
		mouseenter: function(){
			openShareIcons(0, 1);
		},
		click: function(){
			openShareIcons(0, 1);
		}
	});

	shareIcons.on({
		mouseleave: function(){
			openShareIcons(200, 0);
			setTimeout(function(){ showShareIcons(40, 'none'); }, 150);
		}
	});

	function socialIconHover(object, borderColor, fillColor, scaleBg, scaleObj, scaleSvg){
		var $object = $(object),
			socialIconBg = $object.find('.socialIconBg'),
			socialIconSvg = $object.find('svg'),
			socialIconPath = socialIconSvg.find('path'),
			tl = new TimelineLite()
				.to(object, 0.4, {scale:scaleObj, borderColor:borderColor, ease:Expo.easeOut})
				.to(socialIconBg, 0.4, {scale:scaleBg, ease:Expo.easeOut}, 0)
				.to(socialIconSvg, 0.3, {scale:scaleSvg, ease:Expo.easeOut}, 0)
				.to(socialIconPath, 0.3, {attr:{fill:fillColor}, ease:Expo.easeOut}, 0)
				;
	}

	function openShareIcons(yPercent, opacity){
		var tl = new TimelineMax()
			.to(shareIcons, 0, {width:190}, 0)
			.to(shareIconOther, 0, {display:'block'}, 0)
			.staggerTo(shareIconOther, 0.5, {yPercent:yPercent, opacity:opacity, ease:Power3.easeOut}, 0.03, 0)
			;
	}

	function showShareIcons(width, displayIcons){
		var tl = new TimelineLite()
			.set(shareIcons, {width:width})
			.set(shareIconOther, {display:displayIcons})
			;
	}

// ========================================================================================
// Small functions //
// ========================================================================================

	pageTransition(1, 0, 1);

	function pageTransition(autoAlphaFrom, autoAlphaTo, time){
		TweenLite.fromTo(pageMask, time, {autoAlpha:autoAlphaFrom}, {autoAlpha:autoAlphaTo, ease:Power2.easeOut});
	}

	$window.on({
		orientationchange: function(){
			var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
			document.body.style.display = 'none';
			setTimeout(function(){document.body.style.display = originalBodyStyle;}, 10);
		}
	});

	body.on({
		//contextmenu: function(event){event.preventDefault();},
		dblclick: function(event){event.preventDefault();}
	});

	book.on({
		click: function(){
			TweenLite.to(window, 1, {scrollTo:{y:"#bookCalendar"}, ease:Power2.easeInOut})
		}
	});

	map.on({
		mouseenter: function(){
			photoHover(this, 0.5, 1);
		},
		mouseleave: function(){
			photoHover(this, 1, 0.5);
		},
	});
	
	map2.on({
		mouseenter: function(){
			photoHover(this, 0.5, 1);
		},
		mouseleave: function(){
			photoHover(this, 1, 0.5);
		},
	});

	winnersPhoto.on({
		mouseenter: function(){
			photoHover(this, 0.5, 1);
		},
		mouseleave: function(){
			photoHover(this, 1, 0.25);
		},
		click: function(){

		}
	});

	externalLink.on({
		mouseenter: function(){
			linkHover(this, 1, 'rgb(255, 255, 255)');
		},
		mouseleave: function(){
			linkHover(this, 0, 'rgb(150, 150, 150)');
		},
		click: function(){
			clickScale(this, 0.9);
		}
	});

	internalLink.on({
		click: function(event) {
			pageTransition(0, 1, 1);
			linkClickDelay(event, this, 1000);
		}
	});

	function linkHover(object, scaleY, color) {
		var $object = $(object),
			linkLine = $object.find('.linkLine'),
			linkText = $object.find('.linkText');
			TweenLite.to(linkLine, 0.3, {scaleY:scaleY, ease:Power4.easeOut});
			TweenLite.to(linkText, 0.3, {color:color, ease:Power4.easeOut});
	}

	function linkClickDelay(event, object, delay){
		event.preventDefault();
		var href = $(object).attr('href');
		setTimeout(function() {window.location.href = href;}, delay);
	}

	function photoHover(object, time, opacity) {
		TweenLite.to(object, time, {opacity:opacity, ease:Power3.easeOut});
	}

	function inactiveBody(zIndex, delay){
		TweenLite.set('#inactive', {zIndex:zIndex, delay: delay});
	}

	function clickScale(object, scale){
		var	tl = new TimelineLite()
			.to(object, 0.2, {scale:scale, ease:Power4.easeOut})
			.to(object, 0.3, {scale:1, ease:Power4.easeOut});
	}

	function showFixedBtns(object, autoAlpha, yPercent, delay){
		TweenLite.to(object, 0.3, {autoAlpha:autoAlpha, yPercent:yPercent, ease:Power3.easeOut, delay:delay});
	}

	function showSideText(autoAlpha, y){
		TweenLite.to(sideTextFixed, 0.5, {autoAlpha:autoAlpha, yPercent:y, ease:Expo.easeOut});
	}

	FastClick.attach(document.body);

// ========================================================================================
// Inview - show side & book button text //
// ========================================================================================

	if(introText.length){
		var inview = new Waypoint.Inview({
			element: introText,
			enter: function(direction) {
				showSideText(0, 400);
			},
			exited: function(direction) {
				showSideText(1, 0);
			}
		});
	}

	if(bookCalendar.length){
		var inviewBookCalendar = new Waypoint.Inview({
			element: bookCalendar,
			enter: function(direction) {
				book.addClass('hiddenBtn');
				showFixedBtns(book, 0, 100, 0);
			},
			exited: function(direction) {
				showFixedBtns(book, 1, 0, 0);
				book.removeClass('hiddenBtn');
			}
		});
	}

	var inviewBookFooter = new Waypoint.Inview({
		element: footer,
		enter: function(direction) {
			showFixedBtns(phoneMobile, 0, 100, 0);
		},
		exited: function(direction) {
			showFixedBtns(phoneMobile, 1, 0, 0);
		}
	});

// ========================================================================================
// Parallax //
// ========================================================================================

	if(textBlock.length){
		$window.on({
			scroll: function(){
				if(windowWidth>600){
					var scrolled = window.pageYOffset || document.documentElement.scrollTop;
					imgScrollParallax(scrolled, textBlock1);
					textBlock.each(function() {
						imgScrollParallax(scrolled, this);
					});
				}
			}
		});
	}

	function imgScrollParallax(scrolled, object){
		var yOffset = ($(object).offset().top - (windowHeight + scrolled))/5;
		TweenLite.to(object, 1, {y:yOffset, ease:Power2.easeOut});
	}

// ========================================================================================
// Play/pause video //
// ========================================================================================

	video.on({
		click: function(){
			if(this.paused)
				this.play();
				else this.pause();
		},
		mouseenter: function(){
			var that = this;
			setTimeout(function(){that.play()}, 500);
		},
		mouseover: function(){
			var that = this;
			setTimeout(function(){that.play()}, 500);
		},
	});

	$window.on("scroll wheel mousewheel touchmove keydown", function(){
		pauseVideo();
	});

	$window.blur(function(e) {
		pauseVideo();
	});

	function pauseVideo(){
		if(video.length) video[0].pause();		
	}	

// ========================================================================================
// Disable scroll //
// ========================================================================================

	var keys = {37: 1, 38: 1, 39: 1, 40: 1};	// left: 37, up: 38, right: 39, down: 40,
												// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			  e.preventDefault();
		e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	function disableScroll() {
		if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		window.onwheel = preventDefault; // modern standard
		document.onscroll = preventDefault; // modern standard
		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		window.ontouchmove  = preventDefault; // mobile
		document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null; 
		window.onwheel = null; 
		window.ontouchmove = null;  
		document.onkeydown = null;  
	}

// ========================================================================================
// Noise effect //
// ========================================================================================

	var canvas1 = document.getElementById("canvasNoise"),
		canvas2 = document.getElementById("questSelectNoise1"),
		canvas3 = document.getElementById("questSelectNoise2"),
		canvas5 = document.getElementById("questSelectNoise3"),
		canvas4 = document.getElementById("headerBgNoise");
		

	function noiseGenerator(object, alpha, noiseColor){

		var canvas = object,
			viewWidth,
			viewHeight,
			ctx;

		// change these settings
		var patternSize = 200,
			patternScaleX = 1.2,
			patternScaleY = 1.2,
			patternRefreshInterval = 1,
			patternAlpha = alpha; // int between 0 and 255,

		var patternPixelDataLength = patternSize * patternSize * 4,
			patternCanvas,
			patternCtx,
			patternData,
			frame = 0;

		// create a canvas which will render the grain
		function initCanvas() {
			viewWidth = canvas.width = canvas.clientWidth;
			viewHeight = canvas.height = canvas.clientHeight;
			ctx = canvas.getContext('2d');

			ctx.scale(patternScaleX, patternScaleY);
		}

		// create a canvas which will be used as a pattern
		function initGrain() {
			patternCanvas = document.createElement('canvas');
			patternCanvas.width = patternSize;
			patternCanvas.height = patternSize;
			patternCtx = patternCanvas.getContext('2d');
			patternData = patternCtx.createImageData(patternSize, patternSize);
		}

		// put a random shade of gray into every pixel of the pattern
		function update() {
			var value;

			for (var i = 0; i < patternPixelDataLength; i += 4) {
				value = (Math.random() * noiseColor) | 0;

				patternData.data[i    ] = value;
				patternData.data[i + 1] = value;
				patternData.data[i + 2] = value;
				patternData.data[i + 3] = patternAlpha;
			}

			patternCtx.putImageData(patternData, 0, 0);
		}

		// fill the canvas using the pattern
		function draw() {
			ctx.clearRect(0, 0, viewWidth, viewHeight);
			ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
			ctx.fillRect(0, 0, viewWidth, viewHeight);
		}

		function loop() {
			if (++frame % patternRefreshInterval === 0) {
				update();
				draw();
			}

			requestAnimationFrame(loop);
		}

		initCanvas();
		initGrain();
		requestAnimationFrame(loop);

	}

	if(canvas1!=null && windowWidth>600) noiseGenerator(canvas1, 50, 100);
	if(canvas2!=null && windowWidth>600) noiseGenerator(canvas2, 50, 100);
	if(canvas3!=null && windowWidth>600) noiseGenerator(canvas3, 50, 100);
	if(canvas4!=null && windowWidth>600) noiseGenerator(canvas4, 50, 100);
	if(canvas5!=null && windowWidth>600) noiseGenerator(canvas5, 50, 100);

} // End of main function //

// ========================================================================================
// Google map custom //
// ========================================================================================
	var map = $('#map');
	
	if(map.length){

		google.maps.event.addDomListener(window, 'load', init);

		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 15,
				backgroundColor: 'rgb(30, 30, 30)',
				disableDefaultUI: false,
				mapTypeControl: false,
				scrollwheel: false,
				streetViewControl: false,
				zoomControl: true,
				zoomControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},

				// The latitude and longitude to center the map (always required)
				//center: new google.maps.LatLng(50.4827435,30.4813831),
				center: new google.maps.LatLng(50.4827435,30.4835718),

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#282828"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#969696"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#1e1e1e"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"},{"lightness":"-50"},{"saturation":"0"},{"weight":"1.00"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#1e1e1e"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"lightness":"0"},{"visibility":"on"},{"color":"#505050"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#282828"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#646464"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#960f19"},{"weight":"5.00"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#e1e1e1"},{"weight":"1.00"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#730f19"},{"weight":"3.00"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#e1e1e1"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#1e1e1e"},{"weight":"1"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"weight":"0.5"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"1"},{"weight":"1.50"},{"color":"#282828"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#1e1e1e"},{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#969696"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"color":"#1e1e1e"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#282828"},{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000608"},{"lightness":"10"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]}]
			};

			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			function pinSymbol(color) {
				return {
					path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
					fillColor: color,
					fillOpacity: 1,
					strokeColor: '#e1e1e1',
					strokeWeight: 2,
					scale: 1.2,
				};
			}

			var marker = new google.maps.Marker({
				map: map,
				position: map.getCenter(),
				icon: pinSymbol("#e10f23"),
				title: 'RoyalQuest / г. Киев. ул. Викентия хвойки, 12'
			});
		}
	}

	
	var map = $('#map2');
	
	if(map.length){

		google.maps.event.addDomListener(window, 'load', init);

		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 15,
				backgroundColor: 'rgb(30, 30, 30)',
				disableDefaultUI: false,
				mapTypeControl: false,
				scrollwheel: false,
				streetViewControl: false,
				zoomControl: true,
				zoomControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},

				// The latitude and longitude to center the map (always required)
				//center: new google.maps.LatLng(50.4827435,30.4813831),
				//center: new google.maps.LatLng(50.4827435,30.4835718),
				center: new google.maps.LatLng(50.4860387,30.5306547),

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#282828"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#969696"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#1e1e1e"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"},{"lightness":"-50"},{"saturation":"0"},{"weight":"1.00"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#1e1e1e"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"lightness":"0"},{"visibility":"on"},{"color":"#505050"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#282828"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#646464"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#960f19"},{"weight":"5.00"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#e1e1e1"},{"weight":"1.00"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#730f19"},{"weight":"3.00"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#e1e1e1"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#1e1e1e"},{"weight":"1"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"weight":"0.5"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"1"},{"weight":"1.50"},{"color":"#282828"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#1e1e1e"},{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#969696"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"color":"#1e1e1e"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#282828"},{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000608"},{"lightness":"10"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]}]
			};

			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map2');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			function pinSymbol(color) {
				return {
					path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
					fillColor: color,
					fillOpacity: 1,
					strokeColor: '#e1e1e1',
					strokeWeight: 2,
					scale: 1.2,
				};
			}

			var marker = new google.maps.Marker({
				map: map,
				position: map.getCenter(),
				icon: pinSymbol("#e10f23"),
				title: 'RoyalQuest / г. Киев Пр-т Степана Бандеры, 32 (Ориентир: Disko Radio Hall)'
			});
		}
	}
	
	