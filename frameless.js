/*

	UNDER DEVELOPMENT
	
*	Frameless Gridlet		!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*	by Joni Korpi			http://jonikorpi.com/
*	licensed under MIT		http://opensource.org/licenses/mit-license.php
*/


/*
*	Customization
*/

var Grid = {
	columnWidth: 48,
	gutterWidth: 24,
	unit: 'px',
	columnColor: 'rgba(0,0,0, 0.382)'
};

var Baseline = {
	color: 'rgba(0,0,0, 0.236)',
	gridHeight: '1.5em'
};

var Resolutions = {
	enabled: true,
	sizes: [240, 320, 480, 600, 768, 1024, 1280, 1440, 1680, 1920, 2560],
	color: 'rgba(0,0,0, 0.618)',
	labelBackground: '#000',
	labelColor: '#fff'
};

var Buttons = {
	color: 'rgba(0,0,0, 0.5)',
	activeColor: 'rgba(0,0,0, 1)',
	position: {
		top: 0,
		right: 0,
		bottom: 'auto',
		left: 'auto',
		position: 'absolute'
	}
};


/*
*	Creation
*/

Grid.create = function (target) {
	var container = $('<div class="framelessGrid"></div>')
			.css('height', $(target).height())
			.appendTo($(target));
	var gridWidth = -(Grid.gutterWidth);
	while (gridWidth < $(target).width()) {
		$('<div class="framelessColumn"></div>')
			.css('height', $(target).height())
			.css('left', gridWidth)
			.appendTo(container);
		gridWidth += Grid.columnWidth + Grid.gutterWidth;
	}
	$(target + ' .framelessGrid').toggle();
};

Baseline.create = function (target) {
	var container = $('<div class="framelessBaseline"></div>').appendTo($(target));
	var neededLines = Math.floor($(target).height()/24);
	var i = 0;
	while (i < neededLines) {
		$('<div class="framelessLine"></div>').appendTo(container);
		i++;
	}
	$(target + ' .framelessBaseline').toggle();
};

Resolutions.create = function (target) {
	if (Resolutions.enabled) {
		var container = $('<div class="framelessResolutions"></div>')
			.css('height', $(target).height())
			.appendTo($(target));
		$.each(this.sizes, 
			function (key, resolution) {
				$('<div class="framelessResolution"> <div class="framelessLabel">' + resolution + ' px</div> </div>').css({
					'width': resolution,
					'margin-left': -1*(resolution/2)
				}).appendTo(container);
			}
		);
		$(target + ' .framelessResolutions').toggle();
	}
};


Buttons.create = function (target) {
	var gridButton = $('<div class="framelessGridButton framelessButton"> <div></div> <div></div> <div></div> </div>');
	var baselineButton = $('<div class="framelessBaselineButton framelessButton"> <div></div> <div></div> <div></div> <div></div> </div>');
	if (Resolutions.enabled) {
		var resolutionsButton = $('<div class="framelessResolutionsButton framelessButton"> <div></div> </div>');
	}
	else {
		var resolutionsButton;
	}
	var container = $('<div class="framelessButtons"></div>');
	container.append(gridButton).append(baselineButton).append(resolutionsButton);
	$(target).append(container);
	$('.framelessButton').toggle(
		function (){
			$(this).addClass('framelessButtonActive');
		},
		function (){
			$(this).removeClass('framelessButtonActive')
		}
	);
	$('.framelessGridButton').click(
		function () {
			$('.framelessGrid').toggle();
		}
	);
	$('.framelessBaselineButton').click(
		function () {
			$('.framelessBaseline').toggle();
		}
	);
	$('.framelessResolutionsButton').click(
		function () {
			$('.framelessResolutions').toggle();
		}
	);
};

// Define CSS
var styles = '\
	.framelessResolutions, .framelessBaseline, .framelessGrid {\
		overflow: hidden;\
		position: absolute;\
		left: 0; top: 0;\
		height: 100%;\
		width: 100%;\
	}\
		.framelessResolution, .framelessLine {\
			-webkit-box-sizing: border-box;\
			   -moz-box-sizing: border-box;\
				-ms-box-sizing: border-box;\
				 -o-box-sizing: border-box;\
					box-sizing: border-box;\
		}\
		.framelessResolution {\
			height: 100%;\
			position: absolute;\
			left: 50%;\
			border: dashed ' + Resolutions.color + ';\
			border-width: 0 1px;\
		}\
		.framelessLabel {\
			background: ' + Resolutions.labelBackground + ';\
			color: ' + Resolutions.labelColor + ';\
			padding: 6px 9px;\
			font-size: 16px;\
			line-height: 1;\
			position: absolute;\
			right: 14px; top: 120px;\
			-webkit-transform-origin: top right;\
			-webkit-transform: rotate(-90deg);\
			   -moz-transform: rotate(-90deg);\
				-ms-transform: rotate(-90deg);\
				 -o-transform: rotate(-90deg);\
					transform: rotate(-90deg);\
		}\
	.framelessLine {\
		height: ' + Baseline.gridHeight + ';\
		border-bottom: 1px dotted ' + Baseline.color + ';\
	}\
	.framelessColumn {\
		background: ' + Grid.columnColor + ';\
		width: ' + Grid.columnWidth + Grid.unit + ';\
		position: absolute;\
		top: 0; left: 0;\
	}\
	.framelessButtons {\
		position: ' + Buttons.position.position + ';\
		top: ' + Buttons.position.top + ';\
		right: ' + Buttons.position.right + ';\
		bottom: ' + Buttons.position.bottom + ';\
		left: ' + Buttons.position.left + ';\
		width: 144px;\
		z-index: 999999;\
	}\
		.framelessButton {\
			height: 48px;\
			padding: 7px;\
			width: 34px;\
			float: right;\
			position: relative;\
			cursor: pointer;\
		}\
		.framelessGridButton div {\
			border: solid ' + Buttons.color + ';\
			border-width: 0 5px 0 0;\
			height: 34px;\
			float: left;\
			margin-left: 6px;\
		}\
			.framelessGridButton div:first-child {\
				margin-left: 0;\
			}\
		.framelessBaselineButton div {\
			border-top: 1px dotted ' + Buttons.color + ';\
			height: 9px;\
		}\
		.framelessResolutionsButton div {\
			border: 3px solid ' + Buttons.color + ';\
			height: 28px;\
		}\
		.framelessButtonActive.framelessGridButton div,\
		.framelessButtonActive.framelessBaselineButton div,\
		.framelessButtonActive.framelessResolutionsButton div {\
			border-color: ' + Buttons.activeColor + ';\
		}\
';

// Append CSS
function appendCSS(css) {
	if(document.createStyleSheet) {
		document.createStyleSheet(css);
	} 
	else {
		$('<style type="text/css"></style>').html(css).appendTo('head');
	}
};

function frameless(target, alignment) {
	if ($(target).css('position') == 'static') {
		$(target).css('position', 'relative');
	}
	Buttons.create(target);
	Grid.create(target);
	Baseline.create(target);
	Resolutions.create(target);
}

$(document).ready(function () {
	
	frameless('body');
	appendCSS(styles);
	
});