/*
 * mobile controlgroup unit tests
 */

// delay the start to prevent the tests running before enhancement has completed
$.testHelper.delayStart();

(function($){
	module( 'vertical controlgroup, no refresh' , {
		setup: function() {
			this.vcontrolgroup = $( "#vertical-controlgroup" );
		}
	});

	test( "Pre-rendered controlgroup option-setting works", function() {
		var grp = $( "#pre-rendered" );
		grp.controlgroup( "option", "type", "horizontal" );
		deepEqual( grp.hasClass( "ui-controlgroup-horizontal" ), true, "After setting type to horizontal, the class ui-controlgroup-horizontal has been added." );
		deepEqual( grp.hasClass( "ui-controlgroup-vertical" ), false, "After setting type to horizontal, the class ui-controlgroup-vertical has been removed." );
	});

	test( "vertical controlgroup classes", function() {
		var buttons = this.vcontrolgroup.find( ".ui-btn" ),
			middlebuttons = buttons.filter(function(index) {
				return index > 0 && index < (length-1);
			}),
			length = buttons.length;

		ok( buttons.first().hasClass( "ui-first-child" ), "first button should have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-first-child" ), "middle buttons should not have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-last-child" ), "middle buttons should not have class 'ui-last-child'" );
		ok( buttons.last().hasClass( "ui-last-child"), "last button should have class 'ui-last-child'" );
	});

	module( 'vertical controlgroup, refresh', {
		setup: function() {
			this.vcontrolgroup = $( "#vertical-controlgroup" );
			this.vcontrolgroup.find( ".ui-btn" ).show();
			this.vcontrolgroup.controlgroup( "refresh" );
		}
	});

	test( "vertical controlgroup after first button was hidden", function() {
		//https://github.com/jquery/jquery-mobile/issues/1929

		//We hide the first button and refresh
		this.vcontrolgroup.find( ".ui-btn" ).first().hide();
		this.vcontrolgroup.controlgroup( "refresh" );

		var buttons = this.vcontrolgroup.find( ".ui-btn" ).filter( ":visible" ),
			middlebuttons = buttons.filter(function(index) { return index > 0 && index < (length-1)}),
			length = buttons.length;

		ok( buttons.first().hasClass( "ui-first-child" ), "first visible button should have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-first-child" ), "middle buttons should not have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-last-child" ), "middle buttons should not have class 'ui-last-child'" );
		ok( buttons.last().hasClass( "ui-last-child"), "last visible button should have class 'ui-last-child'" );
	});

	test( "vertical controlgroup after last button was hidden", function() {
		//https://github.com/jquery/jquery-mobile/issues/1929

		//We hide the last button and refresh
		this.vcontrolgroup.find( ".ui-btn" ).last().hide();
		this.vcontrolgroup.controlgroup( "refresh" );

		var buttons = this.vcontrolgroup.find( ".ui-btn" ).filter( ":visible" ),
			middlebuttons = buttons.filter(function(index) { return index > 0 && index < (length-1)}),
			length = buttons.length;

		ok( buttons.first().hasClass( "ui-first-child" ), "first visible button should have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-first-child" ), "middle buttons should not have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-last-child" ), "middle buttons should not have class 'ui-last-child'" );
		ok( buttons.last().hasClass( "ui-last-child"), "last visible button should have class 'ui-last-child'" );
	});

	module( 'horizontal controlgroup, no refresh', {
		setup: function() {
			this.hcontrolgroup = $( "#horizontal-controlgroup" );
		}
	});

	test( "horizontal controlgroup classes", function() {
		var buttons = this.hcontrolgroup.find( ".ui-btn" ),
			middlebuttons = buttons.filter(function(index) { return index > 0 && index < (length-1)}),
			length = buttons.length;

		ok( buttons.first().hasClass( "ui-first-child" ), "first button should have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-first-child" ), "middle buttons should not have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-last-child" ), "middle buttons should not have class 'ui-last-child'" );
		ok( buttons.last().hasClass( "ui-last-child"), "last button should have class 'ui-last-child'" );
	});

	module( 'horizontal controlgroup, refresh', {
		setup: function() {
			this.hcontrolgroup = $( "#horizontal-controlgroup" );
			this.hcontrolgroup.find( ".ui-btn" ).show();
			this.hcontrolgroup.controlgroup( "refresh" );
		}
	});

	test( "horizontal controlgroup after first button was hidden", function() {
		//We hide the first button and refresh
		this.hcontrolgroup.find( ".ui-btn" ).first().hide();
		this.hcontrolgroup.controlgroup( "refresh" );

		var buttons = this.hcontrolgroup.find( ".ui-btn" ).filter( ":visible" ),
			middlebuttons = buttons.filter(function(index) { return index > 0 && index < (length-1)}),
			length = buttons.length;

		ok( buttons.first().hasClass( "ui-first-child" ), "first visible button should have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-first-child" ), "middle buttons should not have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-last-child" ), "middle buttons should not have class 'ui-last-child'" );
		ok( buttons.last().hasClass( "ui-last-child"), "last visible button should have class 'ui-last-child'" );
	});

	test( "horizontal controlgroup after last button was hidden", function() {
		//We hide the last button and refresh
		this.hcontrolgroup.find( ".ui-btn" ).last().hide();
		this.hcontrolgroup.controlgroup( "refresh" );

		var buttons = this.hcontrolgroup.find( ".ui-btn" ).filter( ":visible" ),
			middlebuttons = buttons.filter(function(index) { return index > 0 && index < (length-1)}),
			length = buttons.length;

		ok( buttons.first().hasClass( "ui-first-child" ), "first visible button should have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-first-child" ), "middle buttons should not have class 'ui-first-child'" );
		ok( !middlebuttons.hasClass( "ui-last-child" ), "middle buttons should not have class 'ui-last-child'" );
		ok( buttons.last().hasClass( "ui-last-child"), "last visible button should have class 'ui-last-child'" );
	});


	test( "controlgroups will create when inside a container that receives a 'create' event", function(){
		ok( !$("#enhancetest").appendTo(".ui-page-active").find(".ui-controlgroup").length, "did not have enhancements applied" );
		ok( $("#enhancetest").trigger("create").find(".ui-controlgroup").length, "enhancements applied" );
	});

	test( "controlgroups in ignored containers aren't enhanced", function() {
		var $unenhancedFieldSet = $( "#unenhanced-fieldset" ),
			$enhancedFieldSet = $( "#enhanced-fieldset" );

		$.mobile.ignoreContentEnabled = true;

		// attempt to enhance the controlgroup
		$unenhancedFieldSet.parent().trigger("create");

		deepEqual( $unenhancedFieldSet.length, 1, "the fieldset test fixtures exist" );
		ok( !$unenhancedFieldSet.is(".ui-controlgroup"), "there is no control group" );

		// attempt to enhance the controlgroup
		$enhancedFieldSet.parent().trigger("create");

		deepEqual( $enhancedFieldSet.length, 1, "the fieldset test fixtures exist" );
		ok( $enhancedFieldSet.is(".ui-controlgroup"), "there is a control group" );

		$.mobile.ignoreContentEnabled = false;
	});

	test( "calling .controlgroup() again is the same as calling .controlgroup( 'refresh' )", function() {
		var btn1 = $( "<a href='#' data-nstest-role='button'>Option 3</a>" ),
			btn2 = $( "<a href='#' data-nstest-role='button'>Option 4</a>" ),
			grp = $( "#test-reinstantiate" );

		grp
			.controlgroup( "container" )
				.prepend( btn1 )
				.append( btn2 )
				.trigger( "create" )
				.controlgroup();

		ok( btn1.hasClass( "ui-first-child" ), "The prepended button has class ui-first-child" );
		ok( btn2.hasClass( "ui-last-child" ), "The appended button has class ui-last-child" );
	});

	test( "Controlgroup destruction", function() {
		var grp = $( "#destroy-test" ),
			orig = grp.clone();

		// We need to manually unenhance the buttons inside for the sake of the
		// comparison - the point is that the wrappers should be gone.
		grp.controlgroup().controlgroup( "destroy" ).find( "a" ).removeAttr( "class" );
		deepEqual( $.testHelper.domEqual( grp, orig ), true, "The post-enhance-unenhance DOM is identical to the pre-enhance DOM." );
	});
})(jQuery);
