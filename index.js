Survey
    .StylesManager
    .applyTheme("default");

var noun=["\u0441\u04E9\u0437", "\u043A\u04E9\u0437", "\u0442\u04AF\u0439\u0435", "\u0436\u043E\u043B"]; 
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
var km=["\u0435\u04A3\u0431\u0435\u043A\u043F\u0435\u043D", ];

var no=["\u043A\u0435\u043B\u0456\u043F \u0436\u0430\u0442\u044B\u0440", "\u043A\u04E9\u0440\u0456\u043F \u0436\u0430\u0442\u044B\u0440"];
var ao=["\u043A\u0435\u043B\u0435\u0434\u0456", "\u0436\u0430\u0437\u0430\u0434\u044B"];
var zo=["\u043A\u0435\u043B\u0434\u0456", "\u049B\u0430\u0440\u0430\u0441\u0442\u044B\u0440\u0434\u044B"];
var bo=["\u043A\u0435\u043B\u0433\u0435\u043D", "\u0437\u0435\u0440\u0442\u0442\u0435\u0433\u0435\u043D"];
var aou=["\u043A\u0435\u043B\u0435\u0442\u0456\u043D", "\u0442\u0430\u043B\u0434\u0430\u0439\u0442\u044B\u043D"];
var bk=["\u043A\u0435\u043B\u0435\u0440", "\u043A\u04E9\u0440\u0435\u0440"];
var mk=["\u043A\u0435\u043B\u043C\u0435\u043A", "\u043E\u0442\u044B\u0440\u043C\u0430\u049B"]; 

var verbsa=["\u0436\u0430\u0441\u0430\u0441\u0430"];

var kz=["-\u043B\u0430\u0440"];
var zz=["-\u0441\u0456\u04A3"];


function rnd(a) {
return a[Math.floor(Math.random()*a.length)];
}

var json = {
    title: "\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 \u043C\u0435\u043D \u043C\u043E\u0440\u0444\u043E\u043B\u043E\u0433\u0438\u044F",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinish: 600,
    firstPageIsStarted: true,
    startSurveyText: "\u0422\u0435\u0441\u0442\u0442\u0456 \u0431\u0430\u0441\u0442\u0430\u0443",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456\u043D\u0456\u04A3 \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u0456 \u043C\u0435\u043D \u043C\u043E\u0440\u0444\u043E\u043B\u043E\u0433\u0438\u044F\u0441\u044B \u0431\u043E\u0439\u044B\u043D\u0448\u0430 \u0442\u0435\u0441\u0442 (\u0442\u0435\u0441\u0442\u0442\u0456\u04A3 \u0441\u043E\u04A3\u044B\u043D\u0434\u0430 \u0436\u0430\u0443\u0430\u043F\u0442\u0430\u0440\u044B \u043A\u04E9\u0440\u0441\u0435\u0442\u0456\u043B\u0435\u0434\u0456)."
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
                },{
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
                }
                
            ]
        }, {
            questions: [
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
                ,
                {
                type: "radiogroup", 
                    name: "17", 
                    title: "\u0410\u0443\u044B\u0441\u043F\u0430\u043B\u044B \u043E\u0441\u044B \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [rnd(ao)/**/, rnd(bo), rnd(aou), rnd(zo)] 
                },
                {
                type: "radiogroup", 
                    name: "18", 
                    title: "\u041D\u0430\u049B \u043E\u0441\u044B \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [rnd(no)/**/, rnd(bo), rnd(aou), rnd(zo)] 
                },
                {
                type: "radiogroup", 
                    name: "19", 
                    title: "\u0416\u0435\u0434\u0435\u043B \u04E9\u0442\u043A\u0435\u043D \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [rnd(bo), rnd(zo)/**/, rnd(aou), rnd(bk)] 
                },
                {
                type: "radiogroup", 
                    name: "20", 
                    title: "\u0411\u04B1\u0440\u044B\u043D\u0493\u044B \u04E9\u0442\u043A\u0435\u043D \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [rnd(bo)/**/, rnd(mk), rnd(aou), rnd(zo)] 
                },
                {
                type: "radiogroup", 
                    name: "21", 
                    title: "\u0410\u0443\u044B\u0441\u043F\u0430\u043B\u044B \u04E9\u0442\u043A\u0435\u043D \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [ rnd(bo), rnd(bk), rnd(aou)/**/, rnd(zo)] 
                },
                {
                type: "radiogroup", 
                    name: "22", 
                    title: "\u0411\u043E\u043B\u0436\u0430\u043C\u0434\u044B \u043A\u0435\u043B\u0435\u0440 \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [rnd(bk)/**/, rnd(bo), rnd(aou), rnd(zo)]
                }, 
                {
                type: "radiogroup", 
                    name: "23", 
                    title: "\u041C\u0430\u049B\u0441\u0430\u0442\u0442\u044B \u043A\u0435\u043B\u0435\u0440 \u0448\u0430\u049B\u0442\u0430\u0493\u044B \u0435\u0442\u0456\u0441\u0442\u0456\u043A:", 
                    choices: [rnd(mk)/**/, rnd(bo), rnd(aou), rnd(zo)]
                },
                {type:"radiogroup",
                 name: "24", 
                 title:"\u0414\u0430\u0440\u0430 \u0441\u04E9\u0439\u043B\u0435\u043C\u0434\u0456 \u0442\u0430\u0431\u044B\u04A3\u044B\u0437 (\u0436\u0430\u0443\u0430\u043F \u043D\u04B1\u0441\u049B\u0430\u043B\u0430\u0440\u044B \u043C\u04D9\u043D\u043C\u04D9\u0442\u0456\u043D\u043D\u0435\u043D \u0442\u04D9\u0443\u0435\u043B\u0441\u0456\u0437 \u0433\u0440\u0430\u043C\u043C\u0430\u0442\u0438\u043A\u0430 \u0430\u0440\u049B\u044B\u043B\u044B \u049B\u04B1\u0440\u044B\u043B\u0430\u0434\u044B, \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430 \u049B\u0430\u0442\u0435 \u0431\u043E\u043B\u0443\u044B \u043C\u04AF\u043C\u043A\u0456\u043D): ",
                 choices: [rnd(noun)+" "+rnd(aou)+", \u0441\u043E\u043D\u0434\u044B\u049B\u0442\u0430\u043D \u043E\u043B "+rnd(aou), rnd(noun)+" "+rnd(ao), rnd(noun)+" "+rnd(bo)+", \u044F\u0493\u043D\u0438 "+rnd(noun)+" "+rnd(bo), "\u043E\u043B "+rnd(verbsa)+", "+rnd(noun)+" "+rnd(bk)]
                },
                {type: "radiogroup", 
                name: "25", 
                title:"\u041A\u04E9\u043F\u0442\u0456\u043A \u0436\u0430\u043B\u0493\u0430\u0443\u0434\u044B \u0430\u04A3\u044B\u049B\u0442\u0430\u04A3\u044B\u0437:", 
                choices:[rnd(kz), rnd(zz)]}, 
                {type: "radiogroup", 
                name: "26", 
                title:"\u0416\u0456\u043A\u0442\u0456\u043A \u0436\u0430\u043B\u0493\u0430\u0443\u0434\u044B \u0430\u04A3\u044B\u049B\u0442\u0430\u04A3\u044B\u0437:", 
                choices:[rnd(zz), rnd(kz)]}

            ]
        }
     ],
    completedHtml: "<h4>\u0416\u0430\u0443\u0430\u043F\u0442\u0430\u0440:<br> 1. 1 <br> 2. 3  <br> 3. 3 <br> 4. 4  <br> 5. 3  <br> 6. 4 <br> 7. 1 <br> 8. 2 <br> 9. 1 <br> 10. 1 <br> 11. 3 <br> 12. 2 <br> 13. 1 <br> 14. 4 <br> 15. 4  <br> 16. 1 <br> 17. 1 <br> 18. 1<br> 19. 2<br> 20. 1<br> 21. 3<br> 22. 1<br> 23. 1<br> 24. 2<br> 25. 1<br> 26. 1<br></h4>"
};

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({model: survey});
