/* ==============
 ========= js documentation ==========================

 * theme name: Xpovio
 * version: 1.0
 * description: Creative Agency Portfolio HTML5 Template
 * author: Gramentheme
 * author-url: https://themeforest.net/user/gramentheme

    ==================================================

     01. preloader
     -------------------------------------------------
     02. primary navbar sticky
     -------------------------------------------------
     03. progress wrap sticky
     -------------------------------------------------
     04. data background
     -------------------------------------------------
     05. custom cursor
     -------------------------------------------------
     06. mobile menu
     -------------------------------------------------
     07. on window scroll navbar
     -------------------------------------------------
     08. on window resize navbar
     -------------------------------------------------
     09. offcanvas navigation
     -------------------------------------------------
     10. toggle class to items
     -------------------------------------------------
     11. offer image move with cursor
     -------------------------------------------------
     12. service faq
     -------------------------------------------------
     13. work image move with cursor
     -------------------------------------------------
     14. blog three image hover
     -------------------------------------------------
     15. faq
     -------------------------------------------------
     16. footer copyright year
     -------------------------------------------------
     17. scroll to top with progress

    ==================================================
============== */

(function($) {
	"use strict";

	jQuery(document).ready(function() {

		// 01. preloader
		$("#preloader").fadeOut(800);
		
		$(window).on("load", function() {
			// 02. primary navbar sticky
			var initialScroll = $(window).scrollTop();
			if (initialScroll >= 100) {
				$(".primary-navbar").addClass("navbar-active");
			}

			// 03. progress wrap sticky
			var initialScroll = $(window).scrollTop();
			if (initialScroll >= 100) {
				$(".progress-wrap").addClass("active-progress");
			}
		});

		// 04. data background
		$("[data-background]").each(function() {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ")"
			);
		});

		let device_width = window.innerWidth;

		// 05. custom cursor
		function itCursor() {
			var myCursor = jQuery(".mouseCursor");
			if (myCursor.length) {
				if ($("body")) {
					const e = document.querySelector(".cursor-inner"),
						t = document.querySelector(".cursor-outer");
					let n,
						i = 0,
						o = !1;
					(window.onmousemove = function(s) {
						o ||
							(t.style.transform =
								"translate(" + s.clientX + "px, " + s.clientY + "px)"),
							(e.style.transform =
								"translate(" + s.clientX + "px, " + s.clientY + "px)"),
							(n = s.clientY),
							(i = s.clientX);
					}),
					$("body").on(
							"mouseenter",
							"button, a, .cursor-pointer",
							function() {
								e.classList.add("cursor-hover"),
									t.classList.add("cursor-hover");
							}
						),
						$("body").on(
							"mouseleave",
							"button, a, .cursor-pointer",
							function() {
								($(this).is("a", "button") &&
									$(this).closest(".cursor-pointer").length) ||
								(e.classList.remove("cursor-hover"),
									t.classList.remove("cursor-hover"));
							}
						),
						(e.style.visibility = "visible"),
						(t.style.visibility = "visible");
				}
			}
		}
		itCursor();

		// 06. mobile menu
		if ($(".mobile-menu").length) {
			var mobileMenuContent = $(".cmn-nav .navbar__menu").html();
			$(".cmn-nav .mobile-menu__list").append(mobileMenuContent);

			var mobileMenuOptions = $(".cmn-nav .navbar__mobile-options").html();
			$(".cmn-nav .mobile-menu__options").append(mobileMenuOptions);

			$(".mobile-menu .navbar__dropdown-label").on("click", function() {
				$(this).parent().siblings().find(".navbar__sub-menu").slideUp(300);
				$(this)
					.parent()
					.siblings()
					.find(".navbar__dropdown-label")
					.removeClass("navbar__item-active");
				$(this).siblings(".navbar__sub-menu").slideToggle(300);
				$(this).toggleClass("navbar__item-active");
			});
		}

		$(".open-mobile-menu, .open-offcanvas-nav").on("click", function() {
			$(".mobile-menu__backdrop").addClass("mobile-menu__backdrop-active");
			$(".nav-fade").each(function(i) {
				$(this).css("animation-delay", 0.2 * 1 * i + "s");
			});

			$(".mobile-menu").addClass("show-menu");
			$(".mobile-menu__wrapper").removeClass("nav-fade-active");
		});

		$(".close-mobile-menu, .mobile-menu__backdrop").on("click", function() {
			setTimeout(function() {
				$(".mobile-menu").removeClass("show-menu");
			}, 900);
			setTimeout(function() {
				$(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
			}, 1100);

			$(".mobile-menu__wrapper").addClass("nav-fade-active");
		});

		// 07. close video popup
		$(".close-v").on("click", function() {
			$(".vid-m").fadeOut(300);
		});

		// 08. on window scroll navbar
		$(window).on("scroll", function() {
			var scroll = $(window).scrollTop();
			if (scroll < 100) {
				$(".primary-navbar").removeClass("navbar-active");
			} else {
				$(".primary-navbar").addClass("navbar-active");
			}
		});

		// 09. on window resize navbar
		$(window).on("resize", function() {
			$("body").removeClass("body-active");
			$(".mobile-menu").removeClass("show-menu");
			$(".mobile-menu__backdrop").removeClass("mobile-menu__backdrop-active");
			$(".mobile-menu__wrapper").addClass("nav-fade-active");
		});

		// 10. offcanvas navigation
		if ($(".offcanvas-nav").length) {
			$(".offcanvas-menu .navbar__dropdown-label").on("click", function() {
				$(this).parent().siblings().find(".navbar__sub-menu").slideUp(300);
				$(this)
					.parent()
					.siblings()
					.find(".navbar__dropdown-label")
					.removeClass("navbar__item-active");
				$(this).siblings(".navbar__sub-menu").slideToggle(300);
				$(this).toggleClass("navbar__item-active");
			});
		}

		$(".open-offcanvas-nav").on("click", function() {
			$(".nav-fade").each(function(i) {
				$(this).css("animation-delay", 1 + 0.2 * 1 * i + "s");
			});

			$(".offcanvas-menu").addClass("show-offcanvas-menu");
			$(".offcanvas-menu__wrapper").removeClass("nav-fade-active");
		});

		$(".close-offcanvas-menu, .offcanvas-menu__backdrop").on(
			"click",
			function() {
				setTimeout(function() {
					$(".offcanvas-menu").removeClass("show-offcanvas-menu");
				}, 900);
				$(".offcanvas-menu__wrapper").addClass("nav-fade-active");
			}
		);

		// 11. toggle class to items
		$(".portfolio__single").on("mouseover", function() {
			$(".portfolio__single").removeClass("portfolio__single-active");
			$(this).addClass("portfolio__single-active");
		});

		$(".work-steps__single").on("mouseover", function() {
			$(".work-steps__single").removeClass("work-steps__single-active");
			$(this).addClass("work-steps__single-active");
		});

		// 12. offer image move with cursor
		if (device_width > 576) {
			const blogImgItem = document.querySelectorAll(".offer__cta-single");

			function followImageCursor(event, blogImgItem) {
				const contentBox = blogImgItem.getBoundingClientRect();
				const dx = event.clientX - contentBox.x;
				const dy = event.clientY - contentBox.y;
				blogImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
			}
			blogImgItem.forEach((item, i) => {
				item.addEventListener("mousemove", (event) => {
					setInterval(followImageCursor(event, item), 1000);
				});
			});
		}

		// 13. service faq
		$(".service-f-single:first").addClass("service-f-single-active");
		$(".service-f-single:first .p-single").show();
		$(".toggle-service-f").on("click", function() {
			var parent = $(this).parent();
			parent.find(".p-single").slideToggle(600);
			parent.toggleClass("service-f-single-active");
			parent.siblings().removeClass("service-f-single-active");
			parent.siblings().find(".p-single").slideUp(600);
		});

		// 14. work image move with cursor
		if (device_width > 576) {
			const workImgItem = document.querySelectorAll(".work-steps__single");

			function followImageCursor(event, workImgItem) {
				const contentBox = workImgItem.getBoundingClientRect();
				const dx = event.clientX - contentBox.x;
				const dy = event.clientY - contentBox.y;
				workImgItem.children[2].style.transform = `translate(${dx}px`;
			}
			workImgItem.forEach((item, i) => {
				item.addEventListener("mousemove", (event) => {
					setInterval(followImageCursor(event, item), 1000);
				});
			});
		}

		// 15. blog three image hover
		$(".blog-three__thumb .blog-single-img:not(:first-child)").hide();

		$(".blog-three__single").on("mouseenter", function() {
			if ($(this).hasClass("active")) {
				return;
			}

			var index = $(this).index();
			gsap.to(".blog-three__thumb .blog-single-img", {
				opacity: 0,
				scale: 0,
				duration: 0.4,
				onComplete: function() {
					$(".blog-three__thumb .blog-single-img").hide();
					$(".blog-three__thumb .blog-single-img").eq(index).show();
					gsap.fromTo(
						".blog-three__thumb .blog-single-img", {
							opacity: 0,
							scale: 0,
						}, {
							opacity: 1,
							scale: 1,
							duration: 0.4,
						}
					);
				},
			});

			$(".blog-three__single").removeClass("active");
			$(this).addClass("active");
		});

		$(".blog-three__single").on("mouseleave", function() {
			gsap.to(".blog-three__thumb .blog-single-img", {
				opacity: 1,
				scale: 1,
				duration: 0.4,
			});
		});

		// 16. faq
		$(".accordion-button:not(.collapsed)")
			.parents(".accordion-item")
			.addClass("faq-one-active");
		$(".accordion-button").on("click", function() {
			$(".accordion-item").removeClass("faq-one-active");
			$(".accordion-button:not(.collapsed)")
				.parents(".accordion-item")
				.addClass("faq-one-active");
		});

		// 17. footer copyright year
		$("#copyYear").text(new Date().getFullYear());

		// 18. scroll to top with progress
		if ($(".progress-wrap").length > 0) {
			var progressPath = document.querySelector(".progress-wrap path");
			var pathLength = progressPath.getTotalLength();
			progressPath.style.transition = progressPath.style.WebkitTransition =
				"none";
			progressPath.style.strokeDasharray = pathLength + " " + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition = progressPath.style.WebkitTransition =
				"stroke-dashoffset 10ms linear";
			var updateProgress = function() {
				var scroll = $(window).scrollTop();
				var height = $(document).height() - $(window).height();
				var progress = pathLength - (scroll * pathLength) / height;
				progressPath.style.strokeDashoffset = progress;
			};
			updateProgress();
			$(window).scroll(updateProgress);
			var offset = 50;
			var duration = 1000;
			$(window).on("scroll", function() {
				if ($(this).scrollTop() > offset) {
					$(".progress-wrap").addClass("active-progress");
				} else {
					$(".progress-wrap").removeClass("active-progress");
				}
			});
			$(".progress-wrap").on("click", function(event) {
				event.preventDefault();
				$("html, body").animate({
						scrollTop: 0,
					},
					duration
				);
				return false;
			});
		}
	});
})(jQuery);


