var options = {
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
      }
    }}
  }
}
i18n.init(options).done(function() {
  $('#innovationSubmit').i18n();
});