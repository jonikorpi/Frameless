/*
*	Frameless Gridlet		!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*	by Joni Korpi			http://jonikorpi.com/
*	licensed under MIT		http://opensource.org/licenses/mit-license.php
*/


/*
*	Customization
*/

var Grid = {
	columnWidth: '48px',
	gutterWidth: '24px',
	columnColor: 'rgba(0,0,0, 0.382)'
};

var Baseline = {
	color: 'rgba(0,0,0, 0.236)',
	baseFontSize: 16;
	gridHeight: (24 / baseFontSize)+'em'
};

var Resolutions = {
	sizes: [240, 320, 480, 600, 768, 1024, 1280, 1440, 1680, 1920, 2560]
};

var Buttons = {
	color: 'rgba(0,0,0, 0.5)',
	activeColor: 'rgba(0,0,0, 1)',
	position: {
		top: 0,
		right: 0,
		bottom: 'auto',
		left: 'auto',
		position: 'fixed'
	}
};


/*
*	Creation
*/

Grid.create = function() {
	
};

Baseline.create = function() {

};

Resolutions.create = function() {

};

Buttons.create = function() {
	var gridButton = $('<div id="flGridButton" class="flButton"> <div></div> <div></div> <div></div> </div>');
	var baselineButton = $('<div id="flBaselineButton" class="flButton"> <div></div> <div></div> <div></div> <div></div> </div>');
	var commonSizesButton = $('<div id="flCommonSizesButton" class="flButton"> <div></div> </div>');
	var container = $('<div id="flButtons"></div>').append(gridButton + baselineButton + devicesButton);
	$('body').append(container);
	$('.flButton').toggle(
		function(){
			$(this).addClass('flActive');
		},
		function(){
			$(this).removeClass('flActive')
		}
	);
	$('#flGridButton').toggle(
		function() {
			Grid.show();
		},
		function() {
			Grid.hide();
		}
	);
	$('#flBaselineButton').toggle(
		function() {
			Baseline.show();
		},
		function() {
			Baseline.hide();
		}
	);
	$('#flCommonSizesButton').toggle(
		function() {
			
		},
		function() {
		
		}
	);
};

// Define CSS
var styles = '\
	
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


$(document).ready(function() {
	
	appendCSS(styles);
	
});