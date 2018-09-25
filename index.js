var noun=["\u0421\u04E9\u0437"]; 
var adj=["\u04D8\u0434\u0435\u043C\u0456"]; 
var numerl=["\u0411\u0456\u0440\u0456\u043D\u0448\u0456"]; 
var pron=["\u041C\u0435\u043D"];
var verb=["\u0421\u04E9\u0439\u043B\u0435\u0441\u0443"];
var ust=["\u0421\u04D9\u043B"]; 
var elk=["\u0442\u0430\u0440\u0441-\u0442\u0430\u0440\u0441"]; 
var shl=["\u0430\u043B\u0430\u0439\u0434\u0430"]; 
var odg=["\u044F\u043F\u044B\u0440\u043C\u0430\u0443"]; 

function rnd(a){
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
        }    
              
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
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
