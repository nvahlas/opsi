(function($)
{
    $.fn.bulletPoints=function(parametres)
    {
       return this.each(function()
       {
       		// define content

			var realInput 		= $(this).find(".hiddenfrom"),
				textArray 		= ( realInput.val()
									// remove '<ul></ul>', first '<li>' & last </li>
									.substr(8, realInput.val().length-18))
									// build array by splitting on '</li><li>' 
									.split("</li><li>"
								),

				minLines		= 2,
				maxLines		= 9,
				filledLines		= (textArray.length < 3) ? 3 : textArray.length;

			$(this)

			// put add / remove functionnality
			.prepend('<div class="btn-group pull-left"><a href="#" class="bullet-add btn btn-mini">Add Bullet point</a><a href="#" class="bullet-rem btn btn-mini">Remove Bullet point</a></div>')

			// put parent block
			.prepend('<div class="bullet-block"></div>');

			// put bullet div / textarea
			for (var i=0;i<=9;i++)
			{
				var hidden = (i < 3 || i <= filledLines-1) ? '' : ' style="display: none;"'

				$(this).find(".bullet-block")
				.append('<div class="bLine"'+hidden+'><textarea rows="2" class="bulletLine" name="bulletLine" placeholder="Max. 20 words"></textarea></div>');
			}

			var	bulletblock		= $(this).find(".bullet-block"),
				bLines			= $(this).find(".bLine"),
				textAreas		= $(this).find(".bulletLine"),

				currentIndex	= filledLines-1;

        	// fill with previous values if available

			$.each( textArray, function( intIndex, objValue )
			{
				$(textAreas[intIndex]).val(objValue).parent();
			});

			// updates realInput field on line blur

		    textAreas.on("blur", function() {
				var concatenate = "";
				textAreas.each(function(index) {
					if ($(this).val() != '') concatenate += "<li>"+$(this).val()+"</li>";
				});
				concatenate = "<ul>"+concatenate+"</ul>";
				realInput.val(concatenate);
			});

			/* --- add / remove behaviours --- */

			// default add / remove state

			var	addLine			= $(this).find(".bullet-add"),
				removeLine		= $(this).find(".bullet-rem");

		    function btnState () {
				if ( currentIndex >= maxLines) addLine.addClass("disabled");
				if ( currentIndex < maxLines) addLine.removeClass("disabled");

				if ( currentIndex <= minLines) removeLine.addClass("disabled");
				if ( currentIndex > minLines) removeLine.removeClass("disabled");
				console.log(filledLines, minLines, maxLines);
		    }

			btnState ();

			// add Line action

		    addLine.on("click", function() {
		        if ( currentIndex < maxLines)
		        {
		          currentIndex ++;
		          $(bLines[currentIndex]).slideDown();
		        }
		        btnState (); return false;
		    });

			// remove Line action

		    removeLine.on("click", function() {
		        if ( currentIndex > minLines)
		        {
			        $(bLines[currentIndex])
			        .slideUp(function() { $(this) .find('textarea').val(''); });

		        	currentIndex --;
		        }
		        btnState(); return false;
		    });
       });
    };
    $.fn.addRemove=function(parametres)
    {

    };
})(jQuery);