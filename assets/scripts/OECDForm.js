// GENERIO CODE
var OECDForm = function(config) {

	this.cfg = {
		appId: 123,
		jsonp: 'setToken',
		formId: 'form',
		fieldClass: 'oecd_form'
	};

	$.extend(true, this.cfg, config);

	this.save = function() {
		console.log('OECDForm::save()');
		
		var data = {};

		$('#' + this.cfg.formId + ' .' + this.cfg.fieldClass).each(function(idx, field) {
			var tagName = field.tagName.toLowerCase();

			var $field = $(field);
			var type = $field.attr('type');
			if ( 'select' === tagName || 'textarea' === tagName ) 
				type = tagName;

			if ( 
				( 'text' === type ) || ( 'select' === type ) || ( 'textarea' === type ) || ( 'hidden' === type )
				|| ( ('checkbox' === type || 'radio' === type) && $field.is(':checked') ) 
				
			) {
				var n = $field.attr('name');
				var v = $field.val();
				if ( data[n] ) {
					data[n] += ','+v;
 				} else {
					data[n] = v;
				}
			}
		});

		this.getToken($.proxy(function(token) {
			console.log('save data with token', token.token);
			console.log('data?', JSON.stringify(data));
		}, this));
	}

	this.getToken = function(callback) {
		$.ajax({
			type: "GET",
			url: 'https://login.oecd.org/token?appId='+this.cfg.appId,
			dataType: 'jsonp',
			crossDomain: true
		})
		.done(callback)
		.fail(function() {
			console.log('fail ... user not logged in', arguments);
		});
	}

	this.load = function() {
		console.log('OECDForm::load()');
		this.getToken($.proxy(function(token) {
			console.log('load data with token', token.token);
		}, this));
	}

	/*extension point*/
	this.loadData = function(data) {
		this._loadData(data);
	}

	this._loadData = function(data) {
		for ( var p in data ) {
			$('*[name="'+p+'"]').each(function(idx, el) {
				var $el = $(el);
				var tagName = el.tagName.toLowerCase();

				var type = $el.attr('type');
				if ( 'select' === tagName || 'textarea' === tagName )
					type = 'text';

				if ( 'text' === type || 'hidden' === type )
					$el.val(data[p]);

				if ( ('radio' === type || 'checkbox' === type ) && data[p].indexOf($el.val()) > -1 )
					$el.prop('checked', true);
			});
		}
	}
}

// SPECIFIC OPSI CODE
var innovationForm = new OECDForm({formId: 'innovationSubmit', appId: 120915 });

innovationForm.loadData = $.proxy(function(data) {

	// LOAD DATA
	this._loadData(data);

	// RESTORE STATE:

	// CONTACTS
	if (   data["1st Contact – Name"].length > 0 
		|| data["1st Contact – Organisation"].length > 0 
		|| data["1st Contact – Email"].length > 0 
		|| data["1st Contact – Telephone"].length > 0
	) { $('#auth2').show(); }

	if (   data["2nd Contact – Name"].length > 0 
		|| data["2nd Contact – Organisation"].length > 0 
		|| data["2nd Contact – Email"].length > 0 
		|| data["2nd Contact – Telephone"].length > 0
	) { $('#auth3').show(); }

	// PRACTICE
	if ( $('input[type="radio"][name="ExistingPractice"][value="284:5199"]').is(':checked') ) {
		$('#newPractice').show();
		$('div.novelty-pane').first().show();
		for ( var i=2; i<=5; i++ ) {
			if (   data['WhereExisting'+i].length > 0 
				|| data['Existing-Practice-Names'+i].length > 0 
				|| data['Existing-Organisation'+i].length > 0 
				|| data['Existing-Description'+i].length > 0 
				|| data['Existing-Websites'+i].length > 0 
			) {
				$($('div.novelty-pane')[i-1]).show();
			}
		}
	}

	// PARTNER
	if ( $('input[type="radio"][name="CheckPartners"][value="284:5199"]').is(':checked') ) {
		$('#newPartner').show();
		$('div.partnership-pane').first().show();
		for ( var i=2; i<=5; i++ ) {
			if (   data['Partners'+i].length > 0
				|| data['PartnerName'+i].length > 0
				|| data['Nature'+i].length > 0) {
				$($('div.partnership-pane')[i-1]).show();
			}
		}
	}

	// KEYWORDS
	$('#Keywords').select2("val", data['Keywords'].split(','));


	// EVALUATED INNOVATION
	if ( $('input[type="radio"][name="Evaluated"][value="284:5199"]').is(':checked') ) {
		$('#evalution-block').show();
	}

	// FEEDBACK
	if ( data['Scale'] )
		$('#hardness ul li:nth-child('+data['Scale']+')').addClass('active');

	// ALL BULLETS
	$('.hiddenfrom').each(function(idx, el) {
		var $el = $(el),
			items = 	$el.val()
						// remove '<ul></ul>', first '<li>' & last </li>
						.substr(8, $el.val().length-18)
						// build array by splitting on '</li><li>' 
						.split("</li><li>");
		var parent = $el.closest('div.bullet-list').first();
		var lines  = $(parent).find('div.bLine');
		for ( var i=0; i<lines.length; i++ ) {
			if ( items[i] ) {
				var $line = $(lines[i]);
				if ($line.is(':hidden')) $line.show();
				$line.find('.bulletLine').val(items[i]);
			}
		}
	})
	
	// E.1 STAGE OF INNOVATION
	switch($('#Stage').val())
		{
			case '274:5160': $('div.stagePane').first().show();break;
			case '274:5161': $('div.stagePane').first().show(); $($('div.stagePane')[1]).show();break;
			case '274:5162': $('div.stagePane').first().show(); $($('div.stagePane')[1]).show(); $($('div.stagePane')[2]).show();break;
			case '274:5163': $('div.stagePane').show();break;
        }
	
	if ( $('input[type="checkbox"][name="Stage"][value="274:5160"]').is(':checked') ) {
				var showstage = $('div.stagePane').first().show();
	}
	
	// E.8 & E.9  TIME TOOK 
	$('.hidden_time').each(function(idx, el) {
		var $el = $(el),
			items = $el.val().split(" ");		
		var parent = $el.closest('div.form-inline').first();
		var itemtime = "";
		if (items[1] == "year(s)" ) {
				itemtime = parent.find('.input-mini').first().val(items[0]);
		} else if (items[1] == "month(s)" ) {
				itemtime = parent.find('.input-mini').first().next().val(items[0]);
		} else {
				itemtime = parent.find('.input-mini').first().next().next().val(items[0]);
		}
	})
	
	// RESULTS
	for ( var i=1; i<8; i++ ) {
		if ( $('#G1_check' + i).is(':checked') ) {
		document.getElementById($('#G1_check' + i).val()).style.display="block";
	}}
	
	
}, innovationForm);

var fakeData = {"Your-Name":"Nicolas Vahlas","Your-Organisation":"OECD","Email":"nico@vahlas.eu","Telephone":"0658745929",
"1st Contact – Name":"Chris Daniel","1st Contact – Organisation":"OECD","1st Contact – Email":"chris.danie@oecd.org","1st Contact – Telephone":"","2nd Contact – Name":"","2nd Contact – Organisation":"","2nd Contact – Email":"","2nd Contact – Telephone":"","IsNameVisible":"284:5199","Country":"285:5214","LevelOfGovernment":"270:5139","Sector":"271:5141,271:5146,271:5148","OrgSize":"279:5177","Name-of-Innovation":"INNO TEST","InnoLink":"http://www.oecd.org","Year-of-launch":"2012","Description":"C.5 Innovation Practice Descrption","InnoType":"272:5151,272:5153","Main-beneficiaries":"<ul><li>C7.1 </li><li>C7.2</li><li>C7.3</li><li>C7.4</li></ul>","Keywords":"e-government,implementation","Why":"<ul><li>C9.1</li><li>C9.2</li><li>C9.3</li><li>C9.4</li></ul>","Objectives":"<ul><li>C10.1</li><li>C10.2</li></ul>","ExistingPractice":"284:5199","WhereExisting":"273:5157","Existing-Practice-Names":"Practice 1","Existing-Organisation":"European Commission","Existing-Description":"Short description for the practice 1\nagain","Existing-Websites":"http://europa.eu.int","WhereExisting2":"273:5159","Existing-Practice-Names2":"Practice number 2","Existing-Organisation2":"UNESCO","Existing-Description2":"Short description for practice 2\nwith a carriage return \nand some special #$% characters","Existing-Websites2":"http://www.unesco.org","WhereExisting3":"","Existing-Practice-Names3":"","Existing-Organisation3":"","Existing-Description3":"","Existing-Websites3":"","WhereExisting4":"","Existing-Practice-Names4":"","Existing-Organisation4":"","Existing-Description4":"","Existing-Websites4":"","WhereExisting5":"","Existing-Practice-Names5":"","Existing-Organisation5":"","Existing-Description5":"","Existing-Websites5":"","Stage":"274:5161","Design - How":"Description for the Design phase","Testing - Methods":"Description for the Testing phase","Implementation - Tools":"","Implementation - Resources":"","Diffusion - Methods":"","Overall - Challenges-and-solutions":"Overall description for the challenges encountered and solutions developped","Time-Overall":"4 month(s)","Design-Time":"2.6 year(s)","Testing-Time":"15 month(s)","Implementation-Time":"36 week(s)","Diffusion-Time":"15 year(s)","CheckPartners":"284:5199","Partners1":"275:5167","PartnerName1":"European Commission","Nature1":"Description for Partner 1","Partners2":"275:5164","PartnerName2":"Vahlas.eu","Nature2":"Best IT consultants ever :)","Partners3":"","PartnerName3":"","Nature3":"","Partners4":"","PartnerName4":"","Nature4":"","Partners5":"","PartnerName5":"","Nature5":"","Results":"282:5189,282:5241,282:5242,282:5244,282:5191","Desc-Imp-efficiency":"Efficiency description","Desc-Imp-effectiveness":"Effectiveness description","Quality-Accessibility":"Accessibility description","Quality-Responsiveness":"Responsiveness description","Quality-Reliability":"Reliability description","Quality-Other":"Other description","Desc-Imp-Usatisfaction":"Improved user satisfaction description","Results-Other":"Other description ... ","Evaluated":"284:5199","Evaluation-Process":"Descrption for the evaluation process","Link-to-information":"http://nico.vahlas.eu","Lessons-Learned":"Lessons","Conditions":"Conditions","Other-information":"other information","VisibleToPublic":"284:5200","Scale":"8","Feedback":"It was very long ... "};