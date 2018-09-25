Survey
    .StylesManager
    .applyTheme("default");

var noun=["\u0421\u04E9\u0437"]; 
var adj=["\u04D8\u0434\u0435\u043C\u0456"]; 
var numerl=["\u0411\u0456\u0440\u0456\u043D\u0448\u0456"]; 
var pron=["\u041C\u0435\u043D"];
var verb=["\u0421\u04E9\u0439\u043B\u0435\u0441\u0443"];
var ust=["\u0421\u04D9\u043B"]; 
var elk=["\u0442\u0430\u0440\u0441-\u0442\u0430\u0440\u0441"]; 
var shl=["\u0430\u043B\u0430\u0439\u0434\u0430"]; 
var odg=["\u044F\u043F\u044B\u0440\u043C\u0430\u0443"]; 

function rnd(a) {
return a[Math.floor(Math.random()*a.length)];
}

var json = {
    title: "American History",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "Welcome!"
                }
            ]
        }     , {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "1",
                    title: "\u0417\u0430\u0442 \u0435\u0441\u0456\u043C \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(ust)
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "2",
                    title: "\u0421\u044B\u043D \u0435\u0441\u0456\u043C \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?", 
                    choices: [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ]
                }, 
                {
                    type: "radiogroup",
                    name: "3",
                    title: "\u0421\u0430\u043D \u0435\u0441\u0456\u043C \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ]
 
                }

            ]
        }, {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "4",
                    title: "\u0415\u0441\u0456\u043C\u0434\u0456\u043A \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(ust)
                    ]
                }
            ]
        }, 
               {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "5",
                    title: "\u0415\u0442\u0456\u0441\u0442\u0456\u043A \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rns(ust)
                    ]
                }
            ]
        }, 
               {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "6",
                    title: "\u04AE\u0441\u0442\u0435\u0443 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(ust)
                    ]
                }
            ]
        }, 
               {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "7",
                    title: "\u0415\u043B\u0456\u043A\u0442\u0435\u0443 \u0441\u04E9\u0437 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(ust)
                    ]
                }
            ]
        }, 
               {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "8",
                    title: "\u0428\u044B\u043B\u0430\u0443 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(ust)
                    ]
                }
            ]
        }, 
               {
            questions: [
                {
                          
                    type: "radiogroup",
                    name: "9",
                    title: "\u041E\u0434\u0430\u0493\u0430\u0439 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(ust)
                    ]
                }]}],
    completedHtml: "<h4>You have answered correctly.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
