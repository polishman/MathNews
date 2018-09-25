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

var at=["\u0435\u04A3\u0431\u0435\u043A"];
var il=["\u0435\u04A3\u0431\u0435\u043A\u0442\u0456\u04A3"];
var br=["\u0435\u04A3\u0431\u0435\u043A\u043A\u0435"];
var tb=["\u0435\u04A3\u0431\u0435\u043A\u0442\u0456"];
var zh=["\u0435\u04A3\u0431\u0435\u043A\u0442\u0435"];
var sh=["\u0435\u04A3\u0431\u0435\u043A\u0442\u0435\u043D"];
var km=["\u0435\u04A3\u0431\u0435\u043A\u043F\u0435\u043D"];

var no=["\u043E\u049B\u044B\u043F \u0436\u0430\u0442\u044B\u0440"];
var ao=["\u0436\u04AF\u0437\u0435\u0434\u0456"];
var zo=["\u043A\u0435\u043B\u0434\u0456\u043C"];
var bo=["\u0431\u0430\u0440\u0493\u0430\u043D"];
var aou=["\u0435\u0441\u0442\u0438\u0442\u0456\u043D\u0431\u0456\u0437"];
var bk=["\u043A\u0435\u043B\u0435\u0440\u043C\u0456\u0437"];
var mk=["\u0436\u04AF\u0440\u043C\u0435\u043A"]; 

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
                        rnd(odg), rnd(noun), rnd(adj)/**/, rnd(verb)
                    ]
                }, 
                {
                    type: "radiogroup",
                    name: "3",
                    title: "\u0421\u0430\u043D \u0435\u0441\u0456\u043C \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [
                      rnd(adj), rnd(shl), rnd(numerl)/**/, rnd(ust)  
                    ]
 
                }, {
                          
                    type: "radiogroup",
                    name: "4",
                    title: "\u0415\u0441\u0456\u043C\u0434\u0456\u043A \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb), rnd(pron)/**/
                    ]
                }, {
                          
                    type: "radiogroup",
                    name: "5",
                    title: "\u0415\u0442\u0456\u0441\u0442\u0456\u043A \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(adj), rnd(verb)/**/, rnd(ust)
                    ]
                }, {
                          
                    type: "radiogroup",
                    name: "6",
                    title: "\u04AE\u0441\u0442\u0435\u0443 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(odg), rnd(adj), rnd(verb), rnd(ust)/**/
                    ]
                },{
                          
                    type: "radiogroup",
                    name: "7",
                    title: "\u0415\u043B\u0456\u043A\u0442\u0435\u0443 \u0441\u04E9\u0437 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(elk)/**/, rnd(adj), rnd(verb), rnd(ust)
                    ]
                }, 
                {
                          
                    type: "radiogroup",
                    name: "8",
                    title: "\u0428\u044B\u043B\u0430\u0443 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(noun), rnd(shl)/**/, rnd(verb), rnd(ust)
                    ]
                }
                ,
                 {
                          
                    type: "radiogroup",
                    name: "9",
                    title: "\u041E\u0434\u0430\u0493\u0430\u0439 \u0441\u04E9\u0437 \u0442\u0430\u0431\u044B\u043D\u0430 \u043D\u0435 \u0436\u0430\u0442\u0430\u0434\u044B?",
                    choices: [rnd(odg)/**/, rnd(adj), rnd(verb), rnd(ust)
                    ]
                }, 
                {
                    type: "radiogroup", 
                    name: "10",
                    title: "\u0410\u0442\u0430\u0443 \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(at)/***/, rnd(br), rnd(il), rnd(sh)]
                },
                 {
                    type: "radiogroup", 
                    name: "11",
                    title: "\u0406\u043B\u0456\u043A \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(at), rnd(br), rnd(il)/***/, rnd(sh)]
                },
                 {
                    type: "radiogroup", 
                    name: "12",
                    title: "\u0411\u0430\u0440\u044B\u0441 \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(at), rnd(br)/***/, rnd(il), rnd(sh)]
                },
                 {
                    type: "radiogroup", 
                    name: "13",
                    title: "\u0422\u0430\u0431\u044B\u0441 \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(tb)/***/, rnd(br), rnd(il), rnd(sh)]
                },
                 {
                    type: "radiogroup", 
                    name: "14",
                    title: "\u0416\u0430\u0442\u044B\u0441 \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(at), rnd(br), rnd(il), rnd(zh)/**/]
                }
                , {
                    type: "radiogroup", 
                    name: "15",
                    title: "\u0428\u044B\u0493\u044B\u0441 \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(at), rnd(br), rnd(il), rnd(sh)/**/]
                },
                 {
                    type: "radiogroup", 
                    name: "16",
                    title: "\u041A\u04E9\u043C\u0435\u043A\u0442\u0435\u0441 \u0441\u0435\u043F\u0442\u0456\u043A\u0442\u0435\u0433\u0456 \u0437\u0430\u0442 \u0435\u0441\u0456\u043C\u0434\u0456 \u0442\u0430\u04A3\u0434\u0430\u043D\u044B\u0437:", 
                    choices: [rnd(km)/***/, rnd(br), rnd(il), rnd(sh)]
                }
                

            ]
        }
     ],
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
