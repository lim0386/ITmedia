// Preload Necessary Images
		function preload() {
			var d = document;
			if(d.images) {
				if(!d.p) {
					d.p = new Array();
					var i, j = d.p.length, a = preload.arguments;
					for(i = 0; i < a.length; i++) {
						if(a[i].indexOf("#") != 0) {
							d.p[j] = new Image; d.p[j++].src = a[i];
						}
					}
				}
			}
		}
		$(document).ready(function () {
			// Center Image Popup
			$('.main-image').bind("click touch", function(me){
				if (me.target == this && $(this).attr('title') != "") { // Makes Sure Clicking Title Bar Doesn't Trigger Closing
					var height = $(this).attr('data-height');
					if($('.main-image').is('.main-image-full')) {
						$(this).removeClass('main-image-full');
					} else {
						$(this).addClass('main-image-full');
					}
					if($('.main-image').is('.main-image-full')) {
						$('.main-image-full').css("height", height + "px");
					} else {
						if(window.innerWidth >= 320 && window.innerWidth <= 479) {
							$(".main-image").css("height", "450px");
						} else if(window.innerWidth >= 480 && window.innerWidth <= 767) {
							$(".main-image").css("height", "450px");
						} else if(window.innerWidth >= 768 && window.innerWidth <= 1139) {
							$(".main-image").css("height", "450px");
						} else {
							$(".main-image").css("height", "450px");
						}
					}
					$(".blackout").toggleClass('blackout-on');
				}
			});

			// Kill Popup Via Blackout Background
			$('.blackout').bind("click touch", function(){
				$(".main-image").toggleClass('main-image-full');
				if(window.innerWidth >= 320 && window.innerWidth <= 479) {
					$(".main-image").css("height", "450px");
				} else if(window.innerWidth >= 480 && window.innerWidth <= 767) {
					$(".main-image").css("height", "450px");
				} else if(window.innerWidth >= 768 && window.innerWidth <= 1139) {
					$(".main-image").css("height", "450px");
				} else {
					$(".main-image").css("height", "450px");
				}
				$(this).toggleClass('blackout-on');
			});

			// Change The Images
			$('.small-image').bind("click touch", function() {
				var img = $(this).attr('data-img');
				var title = $(this).attr('title');
				var link = $(this).attr('data-link');
				var height = $(this).attr('data-height');
				$(".main-image").fadeOut(1000, function () {
					$(this).css("background", "#FFFFFF top center no-repeat url('" + img + "')").fadeIn(1000).attr("data-height", height).attr("title", title);
					$(".popup-text-title").html(title);
				});
			});
		});
