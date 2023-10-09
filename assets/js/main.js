/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const eSpan = "<span class = \"E\">E</span>";
const tSpan = "<span class = \"T\">T</span>";
var startMessage = eSpan + " " + tSpan;
var eMess = "";
var tMess = "";

const textCombos = [
	["ric   ", "abuchi"],
	["laborate", "enacious"],
	["fficient", "rustable"],
	["xceptional", "rustworthy"],
	["loquent","rusting"],
];
var index = 1;
var dynText = document.getElementById("main-dyn-text");
revealText();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function revealText() 
{
	var index0 = 0;
	var index1 = 0;
	phrase0 = textCombos[index][0];
	phrase1 = textCombos[index][1];
	var mess0 = "";
	var mess1 = "";

	await sleep(100)
	
	while(index0 < phrase0.length || index1 < phrase1.length)
	{
		if (index0 < phrase0.length)
		{
			mess0 += phrase0[index0];
			index0++;
		}

		if (index1 < phrase1.length)
		{
			mess1 += phrase1[index1];
			index1++;
		}

		eMess = eSpan + mess0;
		tMess = tSpan + mess1;
		dynText.innerHTML = eMess + "<br>" + tMess;
		await sleep(100)
	}

	await sleep(1000)
	deleteText();
}

async function deleteText() 
{
	length = Math.max(textCombos[index][0].length,textCombos[index][1].length);
	while(length > 0)
	{
		eMess = eMess.slice(0,-1);
		tMess = tMess.slice(0,-1);
		length--;
		dynText.innerHTML = eMess + "<br>" + tMess;
		await sleep(100)
	}

	index = (index + 1) % textCombos.length;
	await sleep(1000);
	revealText();
}

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);