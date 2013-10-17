var options = {
  "returnObjectTrees": true,
  "resStore": {
    "en" : { "translation": {
      "header": { 
      	"title": "Submit an innovation", 
      	"language-selector": "select language",
      	"previous": "Prev",
      	"next": "Next",
      	"start": "Start",
      	"end": "Finish"
      },
      "step1": {
        "indications": {
        	"1": "To share your innovation, please complete this step-by-step form",
        	"2": "Help notes are provided next to questions or indicated with a question sign",
        	"3": "You can save your work by clicking on the “save button” and go back later to complete it",
        	"4": "When you have completed a section you can go back and make changes",
        	"5a": "Questions indicated by",
        	"5b": "are required responses but we highly encourage you to take the time to answer those which are optional",
        	"6": "The OECD will send you a preview of how your innovation will look on the site before it is published on the website.",
        	"start": "Start"
        }
      },
      "step2": {
        "title": "A. Personal Details",
        "contact": {
			"title": "Contact informations",
			"name": "Your Name",
			"placeholder1": "max 10 words",
			"organisation": "Your Organisation",
			"placeholder2": "max 20 words",
			"email": "Your Email Adress",
			"placeholder3": "user@site.sfx",
			"phone": "Your Telephone Number",
			"placeholder4": "max 20 words",
			"add": "Add Contact",
			"remove": "Remove Contact",
			"visible": {
				"message": "Would you like your name and contact details to be visible to all registered members of the platform?",
				"help": "Ticking no will mean that your name and contact details remain private and will only be shared with the OECD Secretariat.",
				"yes": "yes",
				"no": "no"
			}
        }
      },
      "step3": {
        "title": "B. Organisation",
        "country": {
            "label": "Country",
            "default": "Select from drop down menu"
        },
        "government": {
            "label": "Level of government",
            "options": [
              {"label": "<strong>Central</strong> government", "help": "'Central' government refers to the national, central or federal government."}, 
              {"label": "<strong>Regional / State</strong> government", "help": "'State/Regional' government refers to the level immediately below the central government in federal countries. This might be called the region, state, province or Länder."}, 
              {"label": "<strong>Local</strong> government", "help": "'Local' government refers to all sub-national governments below the state/regional level in federal countries, and to all sub-national governments in non-federal countries."}
            ]
        },
        "sector": {
          "label": "Select Sector",
          "options": [
            {"label": "General public services", "help": "General public services includes: executive and legislative organs and governance, financial and fiscal affairs, external affairs; foreign economic aid; general services; basic research; R&amp;D related to general public services; public debt transactions; transfers between different levels of government of a general nature."},
            {"label": "Defence", "help": "Defence include: military defence; civil defence; foreign military aid; defence R&amp;D."},
            {"label": "Public order and safety", "help": "Public order and safety include: police services; fire-protection services; law courts; prisons; public order and safety R&amp;D."},
            {"label": "Economic affairs", "help": "Economic affairs include: general economic, commercial and labour affairs; agriculture, forestry, fishing and hunting; fuel and energy; mining, manufacturing and construction; transport; communication; other industries; economic affairs R&amp;D."},
            {"label": "Environmental protection", "help": "Environmental protection include: waste management; waste water management; pollution abatement; Protection of biodiversity and landscape; environmental protection R&amp;D."},
            {"label": "Housing and community amenities", "help": "Housing and community amenities include: housing development; community development; water supply; street lighting; housing and community amenities R&amp;D."},
            {"label": "Health", "help": "Health include: medical products, appliances and equipment; outpatient services; hospital services; public health services; health R&amp;D."},
            {"label": "Recreation, culture and religion", "help": "Recreation, culture and religion includes: recreational and sporting services; cultural services; broadcasting and publishing services; religious and other community services; recreation, culture and religion R&amp;D."},
            {"label": "Education", "help": "Education includes: pre-primary and primary education; secondary education; post secondary non-tertiary education; tertiary education; education not definable by level; subsidiary services to education; education R&amp;D."},
            {"label": "Social protection", "help": "Social protection includes: sickness and disability; old age; survivors; family and children; unemployment; housing; social protection R&amp;D."}
          ],
          "help": "The help list is taken from the Classification of the Functions of Government (COFOG) developed by the OECD. <a href=\"http://dx.doi.org/10.1787/gov_glance-2011-68-en\">OECD (2011), &laquo; Classification of the Functions of Government (COFOG) &raquo;, in Government at a Glance 2011, OECD Publishing.</a>"
        },
        "size": {
          "label": "Size of organisation",
          "default": "Select from drop down menu",
          "options": [
            {"label":"Less than 99"},
            {"label":"Between 100 and 249"},
            {"label":"Between 250 and 499"},
            {"label":"Between 500 and 999"},
            {"label":"More than 1000"}
          ]
        }
      },
      "step4": {
        "label": "C. Description of the innovation",
        "name": {
          "label": "Name of the innovation",
		  "placeholder": "max 40 words",
          "help": "The OPSI’s working definition of public sector innovation is the implementation of a new way in which an organisation operates or the services that it provides. It should  result in improvements in at least one of the following areas:<br />1) efficiency;<br />2) effectiveness;<br />3) service quality; or<br />4) user satisfaction<br />(Please note that you may still provide examples of innovations where the results are not yet available, with the opportunity to update these results at a later date)"
        },
        "image": {
          "label": "If you wish, please upload an image related to the innovation",
          "help": "image dimensions: width= 290px, height= 140px"
        },
        "link": {
          "label": "If available, please provide a link that provides further information about the innovation",
		  "placeholder": "http://..."
		},
        "when": {
          "label": "What year was the innovation launched?",
		  "placeholder": "Please provide as YYYY"
        },
        "description": {
          "label": "Please briefly describe the innovative practice",
		  "placeholder": "Max. 150 words",
          "help": "In your description please also set out what the innovation has changed compared to the situation before"
        },
        "type": {
          "label": "Type of innovation<br />Please check the box which most closely corresponds to the main type of change that your innovation has implemented",
          "options": [
            {"label": "It is an entirely new or significantly new service or product, <br />or an existing service provided to a new group of users;"},
            {"label": "It is a new process or approach for the design or delivery <br />of existing services or products;"},
            {"label": "It is a new way to organise or manage work <br />within your organisation;"},
            {"label": "It is a new way to communicate with service users"},
            {"label": "It is a different type of change from any of the above"}
          ],
          "help": "<p class=\"help-block\">Answers may include multiple types of change</p><p class=\"help-block\">E.g. a new security alert system for power stations combining meteorological and land data.<br />E.g. involving users in the design of personal care services by using web 2.0 technologies<br />E.g. the application of lean techniques to operational and policy processes<br />E.g. using a new communication campaign involving users and public servants as testimonials</p>"
        },
        "beneficiaries": {
          "label": "Please indicate the innovation's main beneficiaries",
          "help": "Please provide an estimated number of beneficiaries where possible"
        },
        "keywords": {
          "label": "Please provide up to 5 key words that capture the key elements of the innovation",
          "placeholder": "Tags",
		  "help": "Enter a tag or select from the list <br />Separate each tagwith a semi-colon"
        },
        "why": {
          "label": "Why was the innovation developed?",
          "help": "For example, this can include but is not limited to, the following factors: <br />1) response to a problem (e.g. service gap or failure);  <br />2) response to a change within the organisation (e.g. change of internal rules and procedures);  <br />3) response to an external change (policy change, changes in laws and regulation)."
        },
        "objectives": {
			"label": "Please set out the objectives of the innovation",
			"help": "Please provide an estimated number of beneficiaries where possible"
		}
      },
      "step5": {
        "label": "D. Novelty",
        "question": {
          "label": "Are you aware of existing practices <br />which are similar to your innovation?",
		  "options": [
            {"label": "yes"},
            {"label": "no"}
          ],
          "help": "Answers may include up to 5 responses"
        },
		"add": "Add Practice",
        "remove": "Remove Practice",
        "practice": {
			"label": "Practice information",
			"where": {
				"label": "Where did the practice occured",
				"default": "Select from drop down menu",
				"options": [
				{"label":"In my own organisation"},
				{"label":"In public administration of my country"},
				{"label":"in other countries' public administrations"},
				{"label":"in the private sector, civil society or elsewhere"}
				]
			},			
			"name": { 
				"label": "Practice Name",
				"placeholder": "Max. 40 words"
			},
			"organisation": {
				"label": "Organisation where the practice have occurred",
				"placeholder": "Max. 20 words"
			},
			"description": {
				"label": "Please provide a short description of the practice",
				"placeholder": "Max. 100 words"
			},
			"link": {
				"label": "Where they exist, please provide a link to any websites describing existing similar practices",
				"placeholder": "http://..."
			}
        }
      },
		"step6": {
			"label": "E. Developing the Innovation",
			"which": {
				"label": "Which stage is your innovation currently in?",
				"default": "Select from drop down menu",
				"options": [
					{"label":"Design"},
					{"label":"Testing"},
					{"label":"Implementation"},
					{"label":"Diffusion"}
				],
				"please": "Please answer this question"
			},
			"designtitle": "<strong>Design:</strong> Generating the idea for an innovation and turning into a project including his key attributes (budget, staff, tools)",
			"testingtitle": "<strong>Testing:</strong> The development and testing of an innovation e.g. by trialling, prototyping or piloting the innovation on a small scale.",
			"implementationtitle": "<strong>Implementation:</strong> The rolling out of the innovation to reach its target beneficiaries.",
			"diffusiontitle": "<strong>Diffusion:</strong> Extending the innovation to other services or organisations; this may include the growing or scaling up of an innovation.",
			"design" : {
				"label": "Design",
				"how": "How and by whom was the idea for the innovation generated?",
				"placeholder": "Max. 200 words",
				"help": "E.g. frontline staff, policy planning staff; prize or awards, consulting with users, adapted from an external source."
			},
			"testing" : {
				"label": "Testing",
				"methods": "Please outline any methods used to test the innovation",
				"placeholder": "Max. 200 words",
				"help": "E.g. frontline staff, policy planning staff; prize or awards, consulting with users, adapted from an external source."
			},
			"implementation" : {
				"label": "Implementation",
				"tools": {
					"label": "What tools were used to develop and implement the innovation?",
					"placeholder": "Max. 200 words",
					"help": "E.g. ICTs, management approaches."
				},
				"resources": {
					"label": "Where the information is available please indicate the resources that were used?",
					"placeholder": "Max. 200 words",
					"help": "E.g. staff, budget."
				}
			},
			"diffusion": {
				"label": "Diffusion",
				"placeholder": "Max. 200 words",
				"extend": " Please outline the methods used to extend your innovation to other services or organisations"
			},
			"overall": {	
				"label": "Overall", 
				"placeholder": "Max. 200 words",
				"challenges": "What challenges were encountered and what solutions were developed?"
			},
			"totaltime": {
				"question": "Please indicate approximately how much time the innovation took",
				"label": "Total time:",
				"please": "Please answer this question",
				"help": "in week or month",
				"placeholderyear": "Year(s)",
				"placeholdermonth": "Month(s)",
				"placeholderweeks": "Week(s)"
			},
			"timephase": {
				"question": "Where you have the information please also indicate how much time each phase took:",
				"design": "Design:",
				"testing": "Testing:",
				"implementation": "Implementation:",
				"diffusion": "Diffusion:",
				"help": "in week or month",
				"placeholderyear": "Year(s)",
				"placeholdermonth": "Month(s)",
				"placeholderweeks": "Week(s)"
			}
		}, 
		 "step7": {
			"label": "F-Partnership",
			"which": "Which (if any) actor(s) were partnered with?",
			"options": [
				{"label": "Yes"},
				{"label": "No"}
			],
			"partner": {
				"label": "Partners' information",
				"sector": {
					"label": "Partners' Sector",
					"default": "Select from drop down menu",
					"options": [
						{"label": "Private sector"},
						{"label": "Civil Society"},
						{"label": "Academics and Research Bodies"},
						{"label": "Other Public Sector"},
						{"label": "Other"},
						{"label": "None"}
					],
				},
				"name": {
					"label": "Partners' Name",
					"placeholder": "Max. 10 words"
				},
				"nature": {
					"label": "Please describe the nature of the partnership(s) and how it affected the innovation",
					"placeholder": "Max. 100 words"
				},
				"help": "Answers may include multiple responses"
			},
			"add": "Add Partner",
			"remove": "Remove Partner"
        },
		 "step8": {
			"label": "G. Results",
			"what": {
				"label": "What results has the innovation had?",
				"options": [
					{"label": "Results not available yet"},
					{"label": "Improved efficiency"},
					{"label": "Improved effectiveness"},
					{"label": "Improved service quality"},
					{"label": "Accessibility "},
					{"label": "Responsiveness"},
					{"label": "Reliability"},
					{"label": "other"},
					{"label": "Improved user satisfaction"},
					{"label": "Other"}
				],
				"datacontent1": "An improvement in outputs in relation to inputs. E.g. reducing the cost of providing waste recycling services by €0.5m over 4 years.",
				"datacontent2": "An improvement in achieving given objectives. E.g. a 10% increase in the exam pass rate among 16-18year olds, where an innovation's objective is to improve educational attainment",
				"datacontent3": "I.e. An improvement in the ease of access to access to a service. These may be related to cost; geographic distance; number of service providers; complexity and availability of a service (e.g. opening hours).",
				"datacontent4": "I.e. the ability to respond to different user needs or user views",
				"datacontent5": "i.e. the accuracy and consistency of a service (such as the number of errors that occur)",
				"datacontent6": "An improvement in outputs in relation to inputs. E.g. reducing the cost of providing waste recycling services by €0.5m over 4 years.",
				"datacontent7": "An improvement in outputs in relation to inputs. E.g. reducing the cost of providing waste recycling services by €0.5m over 4 years.",
				"help1": "(Please indicate the type of service quality improvement)",
				"help2": "Please check the box indicating the type of results. Please provide evidence of the improvements, including an indication of how they have been measured"
			},
			"efficiency": {
					"label": "Efficiency",
					"placeholder": "Max. 150 words",
					"help": "An improvement in outputs in relation to inputs. E.g. reducing the cost of providing waste recycling services by €0.5m over 4 years."
			},
			"effectiveness": {
					"label": "Effectiveness",
					"placeholder": "Max. 150 words",
					"help": "An improvement in achieving given objectives. E.g. a 10% increase in the exam pass rate among 16-18 year olds, where an innovation's objective is to improve educational attainment."
			},
			"accessibility": {
					"label": "<em>Service quality:</em> Accessibility",
					"placeholder": "Max. 150 words",
					"help": "An improvement in the ease of access to access to a service. These may be related to cost; geographic distance; number of service providers; complexity and availability of a service (e.g. opening hours)."
			},
			"responsiveness": {
					"label": "<em>Service quality:</em> Responsiveness",
					"placeholder": "Max. 150 words",
					"help": "I.e. the ability to respond to different user needs or user views."
			},
			"reliability": {
					"label": "<em>Service quality:</em> Reliability",
					"placeholder": "Max. 150 words",
					"help": "I.e. the accuracy and consistency of a service (such as the number of errors that occur)."
			},
			"qualityother": {
					"label": "<em>Service quality:</em> Other",
					"placeholder": "Max. 150 words"
			},
			"satisfaction": {
					"label": "Improved user satisfaction",
					"placeholder": "Max. 150 words",
					"help": "A recorded improvement in users' reported satisfaction. Users may refer to either external users (e.g. citizens) or internal users (e.g. staff)."	
			},
			"other": {
					"label": "Other",
					"placeholder": "Max. 150 words"
			},
			"evaluated" : {
				"label": "Has the innovation been evaluated?",
				"options": [
				{"label": "Yes"},
				{"label": "No"}
				],
				"help": "If yes, please provide details below",
				"process": {
					"label": "Please describe the evaluation process used and the resultLines",
					"placeholder": "Max. 200 words",
					"help": "Performance measurements or indicators may be included here"
				},
				"link": {
					"label": "If you wish, you may provide a link to further information on the evaluation",
					"placeholder": "http://...",
					"help": "or email documents to the OECD by clicking here [link to an OECD email address]."
				}
			}
		},
		"step9": {
			"label": "H. Lessons Learned",
			"lessons": {
				"label": "What lessons from your experience would you like to share with other countries?",
				"placeholder": "Max. 200 words",
				"help": "Please include what worked well and less well"
			},
			"conditions": {
				"label": "What conditions do you think are necessary for the success of the innovation?",
				"placeholder": "Max. 200 words",
				"help": "Conditions may refer to, but are not limited to, supporting infrastructure and services; policy and rules; leadership and guidance; human and financial resources; and personal values and motivation"
			},
			"other": {
				"label": "Is there any other information that you would like to share about your innovation?",
				"placeholder": "Max. 200 words"
			}	
		},
		"step10": {
			"download": "download <br>the filled form",
			"visible": {
				"label": "would you like to make <br>your innovation <br>visible to the public",
				"options": [
				{"label": "Yes"},
				{"label": "No"}
				],
				"help": "If you choose no, your innovation will only be visible <br>to a restricted community of registered users in government."
			},
			"feedback" :{
				"label": "Feedback",
				"scale": {
					"label": "On a scale of 1 - 10, how simple did you find it was to complete the form",
					"help": "where 1=impossible; 10=very straightforward."
				},
				"question": "Were there any questions that you found particularly difficult to answer? If so, please highlight the question and briefly explain why",
				"placeholder": "Max. 200 words"
			}
		},	
		"footer": {
			"cancel": "Cancel",
			"save": "Save",
			"preview": "Preview",
			"submit": "Submit",
			"previous": "Prev",
			"next": "Next"
		}
    }}
  }
}

i18n.init(options).done(function() {
  $('#innovationSubmit').i18n();
});

 $(function() {

    $('ul.browse li:nth-child(6)').attr('class', 'current');

    $('.help').popover({trigger: 'hover'});

    /***
    *  A : Add up to 3 contacts
    *  
    */

    var authLength    = 1,
        contactsPanes = $(".auth-pane");

    $("#auth-add").on("click", function() {
        if (authLength < 3)
        {
          $(contactsPanes[authLength]).slideDown()
          authLength ++;
        }
        if (authLength == 3) $(this).addClass("disabled");
        if (authLength > 1) $("#auth-rem").removeClass("disabled");
        return false;
    });

    $("#auth-rem").on("click", function() {
        if (authLength > 1) 
        {
          authLength --;
          $(contactsPanes[authLength]).slideUp();
        }
        if (authLength == 1) $(this).addClass("disabled");
        if (authLength < 3) $("#auth-add").removeClass("disabled");
        return false;
    });

    /***
    *  C : bullet points plugin
    
    *  options

    *  placeolder: "Max. 20 words"
    *  minLines: 3
    *  maxLines: 10
    */
    
    $(".bullet-list").bulletPoints({placeholder: "Max. 20 words"});

    /***
    *  c -tagging solution
    */

    $("#Keywords").select2({tags:["Users", "public sector", "innovation", "change", "efficiency", "e-government", "partnership", "co-production", "design", "implementation", "delivery", "performance", "budgeting", "rules", "decision-making", "human resources", "project management", "childcare", "equality", "access", "digital", "citizens", "open data", "transparency", "flexibility", "civil service", "private sector", "civil society", "consultation", "simplicity", "savings", "online", "procurement"], maximumSelectionSize: 5, tokenSeparators: [","]});

    // change real input style in order to validate

    $.each($(".select2-container"), function (i, n) {
        $(n).next().show().fadeTo(0, 0).height("0px").css("left", "auto"); // make the original select visible for validation engine and hidden for us
        $(n).prepend($(n).next());
        $(n).delay(500).queue(function () {
            $(this).removeClass("validate[required]"); //remove the class name from select2 container(div), so that validation engine dose not validate it
            $(this).dequeue();
        });
    });

    /***
    *  D : select novelty presence 
    *  and add practices
    */

    var ExistingPractice      = $("input[name=ExistingPractice]"),
        checkState      = false,
        practiceIndex   = 0;
        practices       = $(".novelty-pane"),
        addPractice     = $("#practice-add"),
        remPractice     = $("#practice-rem");

    ExistingPractice.change(function() {
      checkState = $("input[name=ExistingPractice]:checked").val();
      if (checkState == "284:5199") {
        addPractice.removeClass("disabled");
        remPractice.addClass("disabled");
        $(practices[practiceIndex]).slideDown();
        $("#newPractice").slideDown();
      } else {
        $(practices).slideUp();
        $("#newPractice").slideUp();
        practiceIndex = 0;
      }
    });

    addPractice.on("click", function() {
        if ( practiceIndex < practices.length)
        {
          practiceIndex ++;
          $(practices[practiceIndex]).slideDown();
        } 
        if ( practiceIndex === practices.length - 1) $(this).addClass("disabled");
        if ( practiceIndex > 0) $("#practice-rem").removeClass("disabled");
        return false;
    });

    remPractice.on("click", function() {
        if ( practiceIndex > 0)
        {
          $(practices[practiceIndex]).slideUp();
          practiceIndex --;
        } 
        if ( practiceIndex === 0) $(this).addClass("disabled");
        if ( practiceIndex < practices.length) $("#practice-add").removeClass("disabled");
        return false;
    });

    /***
    *  E : toggle stage fields display
    *  with check state
    */

    function showPanes(stagePanes, stageIndex) {
      stagePanes.each(function(index) {
        var showPane = (index+1 > stageIndex) ? "none" : "block";
        $(this).css("display", showPane );
      });
    }

    var stagePanes = $(".stagePane"),
        stageIndex = parseInt($("#stageIndex").attr("value"));

    showPanes(stagePanes, stageIndex);

    $( "#Stage" ).on("change", function (evt) {
      stageIndex = $(this).prop("selectedIndex");
      showPanes(stagePanes, stageIndex);
    });

    /***
    *  F : select partnership presence 
    *  and add partners
    */

    var CheckPartners     = $("input[name=CheckPartners]"),
        checkState     = false,
        partnerIndex   = 0;
        partners       = $(".partnership-pane"),
        addPartner     = $("#Partner-add"),
        remPartner     = $("#Partner-rem");

    CheckPartners.change(function() {
      checkState = $("input[name=CheckPartners]:checked").val();
      if (checkState == "284:5199") {
        addPartner.removeClass("disabled");
        remPartner.addClass("disabled");
        $(partners[partnerIndex]).slideDown();
        $("#newPartner").slideDown();
      } else {
        $(partners).slideUp();
        $("#newPartner").slideUp();
        partnerIndex = 0;
      }
    });

    addPartner.on("click", function() {
        if ( partnerIndex < partners.length)
        {
          partnerIndex ++;
          $(partners[partnerIndex]).slideDown();
        } 
        if ( partnerIndex === partners.length - 1) $(this).addClass("disabled");
        if ( partnerIndex > 0) remPartner.removeClass("disabled");
        return false;
    });

    remPartner.on("click", function() {
        if ( partnerIndex > 0)
        {
          $(partners[partnerIndex]).slideUp();
          partnerIndex --;
        } 
        if ( partnerIndex === 0) $(this).addClass("disabled");
        if ( partnerIndex < partners.length) addPartner.removeClass("disabled");
        return false;
    });

    /**
    * G - toggle results fields display
    * with check state
    */

    var checkState    = $("#resultChecks input[type='checkbox']")
        resultFields  = $(".resultLine");

    function changeCheck(index) {
      if (index > 0)
      {
        $(resultFields[index]).slideDown();
        $('#resultProgress').slideUp();
        $("#resultChecks input:eq(0)").prop('checked',false);
      } else {
        $("#resultChecks input:gt(0)").prop('checked',false);
        resultFields.slideUp();
        $('#resultProgress').slideDown();
      }
    }

    checkState
    .each(function(index) {
      resultFields.hide();  // hiding all fields at first load
      changeCheck(index);
    })
    .on("change",function (evt) {
      var index = checkState.index($(this));
      changeCheck(index);
    });


    var evalState = false
    $('input[name=Evaluated]').change(function() {
      evalState = ( evalState == false ) ? true : false;
      $('#evalution-block').slideToggle();
    });

    /***
    *  I : hardness
    *  collection
    */

    $("#hardness a").on("click", function () {

        $(this).parent().addClass("active")
        .siblings().removeClass("active");

        $('#I2').val($(this).text());

        return false;
    });

    /**
    * form validation 
    * 
    */

    $.validator.addMethod("selectNone",  function(value, element) {if (element.value == "") {return false;} else {return true};} );

    var form = $( "#innovationSubmit" );
    var currentStep = 0;
    var overideStep = 0;

    jQuery.extend(jQuery.validator.messages, {
      required: "Please answer this question"
    });


    jQuery.validator.addMethod("checkboxes", function(value, element) {
      return $('input[type=checkbox]:checked').length > 0;
     }, "please select at least one checkbox");

    var $validator = form.validate({
	rules: {
		// Section A
		'Your-Name' : { required: true, minlength: 3, maxlength: 100 },
		'Your-Organisation': { required: true, minlength: 3, maxlength: 200 },
		Email: { required: true, email: true, minlength: 3, maxlength: 200 },
		Telephone: { required: false, minlength: 3, maxlength: 100 },

		'1st Contact – Name' : { required: false, minlength: 3, maxlength: 100 },
		'1st Contact – Organisation': { required: false, minlength: 3, maxlength: 200 },
		'1st Contact – Email': { required: false, email: true, minlength: 3, maxlength: 200 },
		'1st Contact – Telephone': { required: false, minlength: 3, maxlength: 100 },

		'2nd Contact – Name': { required: false, minlength: 3, maxlength: 100 },
		'2nd Contact – Organisation': { required: false, minlength: 3, maxlength: 200 },
		'2nd Contact – Email': { required: false, email: true, minlength: 3, maxlength: 200 },
		'2nd Contact – Telephone' : { required: false, minlength: 3, maxlength: 100 },
		isNameVisible : { required: true},


		// Section B
		Country : { required:true },
		LevelOfGovernment : { required:true },
		Sector : { required:true, selectNone:true },
		OrgSize : { required: true, selectNone:true },

		// Section C
		'Name-of-Innovation' : { required: true, minlength: 3, maxlength: 400 },
		'Year-of-launch' : { required: true, number : true, minlength: 4, maxlength: 4 },
		Description : { required: true, minlength: 3, maxlength: 2000 }, 
		InnoType : { required: true },
		'Main-beneficiaries' :  { required: false, minlength: 3, maxlength: 1500 },
		Keywords :  { required: false, minlength: 1, maxlength: 225 },
		Why : { required: false, minlength: 3, maxlength: 2000 },
		Objectives : { required: false, minlength: 3, maxlength: 2100 },

		// Section D
		'Existing-Practice-Names' : { required: false, minlength: 3, maxlength: 400 },
		'Existing-Practice-Names2' : { required: false, minlength: 3, maxlength: 400 },
		'Existing-Practice-Names3' : { required: false, minlength: 3, maxlength: 400 },
		'Existing-Practice-Names4' : { required: false, minlength: 3, maxlength: 400 },
		'Existing-Practice-Names5' : { required: false, minlength: 3, maxlength: 400 },
		'Existing-Organisation' : { required: false, minlength: 3, maxlength: 200 },
		'Existing-Organisation2' : { required: false, minlength: 3, maxlength: 200 },
		'Existing-Organisation3' : { required: false, minlength: 3, maxlength: 200 },
		'Existing-Organisation4' : { required: false, minlength: 3, maxlength: 200 },
		'Existing-Organisation5' : { required: false, minlength: 3, maxlength: 200 },	
		'Existing-Description' :  { required: false, minlength: 3, maxlength: 1000 },
		'Existing-Description2' :  { required: false, minlength: 3, maxlength: 1000 },
		'Existing-Description3' :  { required: false, minlength: 3, maxlength: 1000 },
		'Existing-Description4' :  { required: false, minlength: 3, maxlength: 1000 },
		'Existing-Description5' :  { required: false, minlength: 3, maxlength: 1000 },

		// Section E
		Stage : { required: true, selectNone:true },
		'Design - How' : { required: false, minlength: 3, maxlength: 2000 },
		'Testing - Methods' : { required: false, minlength: 3, maxlength: 2000 },
		'Implementation - Tools' : { required: false, minlength: 3, maxlength: 2100 },
		'Implementation - Resources' : { required: false, minlength: 3, maxlength: 2100 },
		'Diffusion - Methods' : { required: false, minlength: 3, maxlength: 2000 },
		'Overall - Challenges-and-solutions' : { required: false, minlength: 3, maxlength: 2000 },
		
		'total_year' : { required: false, number : true, minlength: 1, maxlength: 3},
		'total_month' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'total_weeks' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'design_year' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'design_month' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'design_weeks' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'testing_year' : { required: false, number : true, minlength: 1, maxlength: 3},
		'testing_month' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'testing_weeks' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'implem_year' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'implem_month' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'implem_weeks' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'diffusion_year' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'diffusion_month' : { required: false, number : true, minlength: 1, maxlength: 3 },
		'diffusion_weeks' : { required: false, number : true, minlength: 1, maxlength: 3 },
		
		// Section G
		Results: { required: true, selectNone:true },
		'Desc-Imp-efficiency' : { required: false, minlength: 3, maxlength: 1500 },
		'Desc-Imp-effectiveness' : { required: false, minlength: 3, maxlength: 1500 },
		'Quality-Accessibility' : { required: false, minlength: 3, maxlength: 1500 },
		'Quality-Responsiveness' : { required: false, minlength: 3, maxlength: 1500 },
		'Quality-Reliability' : { required: false, minlength: 3, maxlength: 1500 },
		'Quality-Other' : { required: false, minlength: 3, maxlength: 1500 },
		'Desc-Imp-Usatisfaction' : { required: false, minlength: 3, maxlength: 1500 },
		'Results-Other' : { required: false, minlength: 3, maxlength: 1500 },
		'Evaluation-Process' : { required: false, minlength: 3, maxlength: 2000 },
		
		//Section H
		'Lessons-Learned' : { required: false, minlength: 3, maxlength: 2100 },
		Conditions : { required: false, minlength: 3, maxlength: 2100 },
		'Other-information' : { required: false, minlength: 3, maxlength: 2000 },
		
		//End 
		'Feedback' : { required: false, minlength: 3, maxlength: 2000 }
	},
	highlight: function(element) {
	$(element).closest('.control-group').removeClass('success').addClass('error');
	},
	success: function(element) {
	element.addClass('valid').closest('.control-group').removeClass('error');
	},
	errorPlacement: function(error, element) {
	if (element.is(":checkbox") || element.is(":radio")) {
	  element.parents('.controls').append(error);
	} else 
	{
	  $(element.parents('.controls')).append(error);
		}
	}
	});


 /***
 *
 * main wizard behaviour
 *
 */


    $("select").on("change", function () {
        $(this).blur();
    });
    var overideStep = 0;

    $("#fPreview").css("display", "none");
    $("#fSubmit").css("display", "none");
        $("#fSave").css("display", "none");


    $('#myWizard').wizard();
    $('#MyWizard').on('change', function(e, data) {
      if(data.step===9 && data.direction==='next') {
        // return e.preventDefault();
        $("#fPreview").css("display", "inline-block");
        $("#fSubmit").css("display", "inline-block");
      }

      if(data.step=1) {
        // return e.preventDefault();
        $("#fSave").css("display", "none");
      }
      if(data.step===1 && data.direction==='next') {
        // return e.preventDefault();
        $("#fSave").css("display", "inline-block");
      }

      if(data.step===10 && data.direction==='previous') {
        // return e.preventDefault();
        $("#fPreview").css("display", "none");
        $("#fSubmit").css("display", "none");
      }

      var $valid = $("#innovationSubmit").valid();
      if(!$valid) {
        $validator.focusInvalid();
        if (data.step != overideStep)
        {
          overideStep = data.step;
          return false;
        }
      }
    });
    $('#MyWizard').on('changed', function(e, data) {
       overideStep = 0;
    });
    $('#MyWizard').on('finished', function(e, data) {
      console.log('finished');
    });
    $('#btnWizardPrev').on('click', function() {
      $('#MyWizard').wizard('previous');
    });
    $('#btnWizardNext').on('click', function() {
      $('#MyWizard').wizard('next','finished');
    });
    $('#btnWizardStep').on('click', function() {
      var item = $('#MyWizard').wizard('selectedItem');
      console.log(item.step);
    });
    $('#myWizard').on('stepclick', function(e, data) {
      console.log('step' + data.step + ' clicked');
    });


    $('#startForm').on('click', function() {
      $('#MyWizard').wizard('next','finished');
    });

    $('#cancelForm').click(function(){
      window.location = '/pages/profile'
    });



    $('#myWizard').on('change', function(e, data) {
      console.log('step' + data.step + ' clicked');

      tinyMCE.triggerSave();

        var $valid = $("#innovationSubmit").valid();
        if(!$valid) {
          $validator.invalid();
          if (data.step != overideStep)
          {
            overideStep = data.step;
            return false;
          }
      if(data.step > 8) {
        $("#fPreview").css("display", "inline-block");
        $("#fSubmit").css("display", "inline-block");
      }
      }
    });
	
	// E.8 Check Total Time
	var libY = " year(s)",
		libM = " month(s)",
		libw = " week(s)";
		
	$( "#total_year" ).blur(function() {
		var checkval = $("#total_year").val();
		if  (checkval > 0) {
			$('#total_month').val("");
			$('#total_weeks').val("");
			$('#Time-Overall').val($( "#total_year" ).val() + libY);	
		} else {
			if ($("#total_month").val() == "" && $("#total_weeks").val() == "") $('#Time-Overall').val("");
		}
	});
	$( "#total_month" ).blur(function() {
		var checkval = $("#total_month").val();
		if  (checkval > 0) {
			$('#total_year').val("");
			$('#total_weeks').val("");
			$('#Time-Overall').val($( "#total_month" ).val() + libM);
		}else {
			if ($("#total_year").val() == "" && $("#total_weeks").val() == "") $('#Time-Overall').val("");
		}
	});
	$( "#total_weeks" ).blur(function() {
		var checkval = $("#total_weeks").val();
		if  (checkval > 0) {
			$('#total_month').val("");
			$('#total_year').val("");
			$('#Time-Overall').val($( "#total_weeks" ).val() + libw);	
		} else {
			if ($("#total_month").val() == "" && $("#total_year").val() == "") $('#Time-Overall').val("");
		}
	});
	
	// E.9 phase time  
	$( "#design_year" ).blur(function() {
		var checkval = $("#design_year").val();
		if  (checkval > 0) {
			$('#design_month').val("");
			$('#design_weeks').val("");
			$('#Design-Time').val($( "#design_year" ).val() + libY);	
		} else {
			if ($("#design_month").val() == "" && $("#design_weeks").val() == "") $('#Design-Time').val("");
		}
	});
	$( "#design_month" ).blur(function() {
		var checkval = $("#design_month").val();
		if  (checkval > 0) {
			$('#design_year').val("");
			$('#design_weeks').val("");
			$('#Design-Time').val($( "#design_month" ).val() + libM);	
		} else {
			if ($("#design_year").val() == "" && $("#design_weeks").val() == "") $('#Design-Time').val("");
		}
	});
	$( "#design_weeks" ).blur(function() {
		var checkval = $("#design_weeks").val();
		if  (checkval > 0) {
			$('#design_month').val("");
			$('#design_year').val("");
			$('#Design-Time').val($( "#design_weeks" ).val() + libw);	
		} else {
			if ($("#design_year").val() == "" && $("#design_month").val() == "") $('#Design-Time').val("");
		}
	});
	
	$( "#testing_year" ).blur(function() {
		var checkval = $("#testing_year").val();
		if  (checkval > 0) {
			$('#testing_month').val("");
			$('#testing_weeks').val("");
			$('#Testing-Time').val($( "#testing_year" ).val() + libY);	
		} else {
			if ($("#testing_month").val() == "" && $("#testing_weeks").val() == "") $('#Testing-Time').val("");
		}
	});
	$( "#testing_month" ).blur(function() {
		var checkval = $("#testing_month").val();
		if  (checkval > 0) {
			$('#testing_year').val("");
			$('#testing_weeks').val("");
			$('#Testing-Time').val($( "#testing_month" ).val() + libM);		
		} else {
			if ($("#testing_year").val() == "" && $("#testing_weeks").val() == "") $('#Testing-Time').val("");
		}
	});
	$( "#testing_weeks" ).blur(function() {
		var checkval = $("#testing_weeks").val();
		if  (checkval > 0) {
			$('#testing_month').val("");
			$('#testing_year').val("");
			$('#Testing-Time').val($( "#testing_weeks" ).val() + libw);	
		} else {
			if ($("#testing_month").val() == "" && $("#testing_year").val() == "") $('#Testing-Time').val("");
		}
	});
	
	$( "#implem_year" ).blur(function() {
		var checkval = $("#implem_year").val();
		if  (checkval > 0) {
			$('#implem_month').val("");
			$('#implem_weeks').val("");
			$('#Implementation-Time').val($( "#implem_year" ).val() + libY);		
		} else {
			if ($("#implem_month").val() == "" && $("#implem_weeks").val() == "") $('#Implementation-Time').val("");
		}
	});
	$( "#implem_month" ).blur(function() {
		var checkval = $("#implem_month").val();
		if  (checkval > 0) {
			$('#implem_year').val("");
			$('#implem_weeks').val("");
			$('#Implementation-Time').val($( "#implem_month" ).val() + libM);		
		} else {
			if ($("#implem_year").val() == "" && $("#implem_weeks").val() == "") $('#Implementation-Time').val("");
		}	
	});
	$( "#implem_weeks" ).blur(function() {
		var checkval = $("#implem_weeks").val();
		if  (checkval > 0) {
			$('#implem_month').val("");
			$('#implem_year').val("");
			$('#Implementation-Time').val($( "#implem_weeks" ).val() + libw);
		} else {
			if ($("#implem_month").val() == "" && $("#implem_year").val() == "") $('#Implementation-Time').val("");
		}
	});
	
	$( "#diffusion_year" ).blur(function() {
		var checkval = $("#diffusion_year").val();
		if  (checkval > 0) {
			$('#diffusion_month').val("");
			$('#diffusion_weeks').val("");
			$('#Diffusion-Time').val($( "#diffusion_year" ).val() + libY);	
		} else {
			if ($("#diffusion_month").val() == "" && $("#diffusion_weeks").val() == "") $('#Diffusion-Time').val("");
		}
	});
	$( "#diffusion_month" ).blur(function() {
		var checkval = $("#diffusion_month").val();
		if  (checkval > 0) {
			$('#diffusion_year').val("");
			$('#diffusion_weeks').val("");
			$('#Diffusion-Time').val($( "#diffusion_month" ).val() + libM);	
		} else {
			if ($("#diffusion_year").val() == "" && $("#diffusion_weeks").val() == "") $('#Diffusion-Time').val("");
		}
	});
	$( "#diffusion_weeks" ).blur(function() {
		var checkval = $("#diffusion_weeks").val();
		if  (checkval > 0) {
			$('#diffusion_month').val("");
			$('#diffusion_year').val("");
			$('#Diffusion-Time').val($( "#diffusion_weeks" ).val() + libw);		
		} else {
			if ($("#diffusion_month").val() == "" && $("#diffusion_year").val() == "") $('#Diffusion-Time').val("");
		}
	});
	
});