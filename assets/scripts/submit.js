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
          "organisation": "Your Organisation",
          "email": "Your Email Adress",
          "phone": "Your Telephone Number",
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
          "help": "The OPSI’s working definition of public sector innovation is the implementation of a new way in which an organisation operates or the services that it provides. It should  result in improvements in at least one of the following areas:<br />1) efficiency;<br />2) effectiveness;<br />3) service quality; or<br />4) user satisfaction<br />(Please note that you may still provide examples of innovations where the results are not yet available, with the opportunity to update these results at a later date)"
        },
        "image": {
          "label": "If you wish, please upload an image related to the innovation",
          "help": "image dimensions: width= 290px, height= 140px"
        },
        "link": {
          "label": "If available, please provide a link that provides further information about the innovation"
        },
        "when": {
          "label": "What year was the innovation launched?"
        },
        "description": {
          "label": "Please briefly describe the innovative practice",
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
          "help": "Enter a tag or select from the list <br />Separate each tagwith a semi-colon"
        },
        "why": {
          "label": "Why was the innovation developed?",
          "help": "For example, this can include but is not limited to, the following factors: <br />1) response to a problem (e.g. service gap or failure);  <br />2) response to a change within the organisation (e.g. change of internal rules and procedures);  <br />3) response to an external change (policy change, changes in laws and regulation)."
        },
        "objectives": "Please set out the objectives of the innovation",
        "help": "Please provide an estimated number of beneficiaries where possible"
      },
      "step5": {
        "label": "D. Novelty",
        "question": {
          "label": "Are you aware of existing practices <br />which are similar to your innovation?",
          "options": [
            {"label": "yes"},
            {"label": "no"}
          ],
          "help": "Answers may include up to 12 responses"
        },
        "practice": {
          
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

    $("#C8").select2({tags:["Users", "public sector", "innovation", "change", "efficiency", "e-government", "partnership", "co-production", "design", "implementation", "delivery", "performance", "budgeting", "rules", "decision-making", "human resources", "project management", "childcare", "equality", "access", "digital", "citizens", "open data", "transparency", "flexibility", "civil service", "private sector", "civil society", "consultation", "simplicity", "savings", "online", "procurement"], maximumSelectionSize: 5, tokenSeparators: [","]});

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

    var hasNovelty      = $("input[name=hasNovelty]"),
        checkState      = false,
        practiceIndex   = 0;
        practices       = $(".novelty-pane"),
        addPractice     = $("#practice-add"),
        remPractice     = $("#practice-rem");

    hasNovelty.change(function() {
      checkState = $("input[name=hasNovelty]:checked").val();
      if (checkState == "true") {
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

    $( "#stageSelect" ).on("change", function (evt) {
      stageIndex = $(this).prop("selectedIndex");
      showPanes(stagePanes, stageIndex);
    });

    /***
    *  F : select partnership presence 
    *  and add partners
    */

    var hasPartner     = $("input[name=hasPartner]"),
        checkState     = false,
        partnerIndex   = 0;
        partners       = $(".partnership-pane"),
        addPartner     = $("#Partner-add"),
        remPartner     = $("#Partner-rem");

    hasPartner.change(function() {
      checkState = $("input[name=hasPartner]:checked").val();
      if (checkState == "true") {
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
        $(resultFields[index+1]).slideDown();
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
    $('input[name=hasEval]').change(function() {
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
          auth1_name: { required: true, minlength: 3 },
          auth1_org: { required: true, minlength: 3 },
          auth1_mail: { required: true, email: true, minlength: 3 },
          auth1_mail: { required: true, email: true, minlength: 3 },

          // Section B
          org_country: { required:true },
          org_level: { required:true },
          org_sector: { required:true, selectNone:true },
          org_size: { required: true, selectNone:true },

          // Section C
          'C6[]': { required: true },
          stageSelect: { required: true, selectNone:true },
          G1_check: { required: true, selectNone:true }
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
});