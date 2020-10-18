var app = new Vue({
    el: '#app',
    data: {
        title: data.title,
        image: data.image,
        zones: data.zones,
        currentQuestion: 0,
        question: data.questions[0],
        answer:null,
        answerMessage:"",
        nextTxt:"",
        step:"questionImage",
    },
    methods:{

        nextStep : function () {
            this.answer = null;
            if (this.currentQuestion >= data.questions.length) {
                this.currentQuestion = 0;
            }
            this.question = data.questions[this.currentQuestion];
        },

        resolve : function (answer) {
            this.answer = answer;
            this.nextTxt = "SUIVANT >>";
            this.answerMessage = "Bien joué !";
            if (answer === this.question.answerImage){
                return this.step = "questionText"
            }
            if (answer === this.question.answerText){
                this.currentQuestion ++;
                this.answerMessage += this.question.correction;
                return this.step = "questionImage";
            }
            /////////// si aucune condition de victoir n'est validée
            this.answerMessage = "Mauvaise réponse"
            if (this.zones[answer]) this.answerMessage = this.zones[answer].wrongText;
            this.nextTxt = "ESSAYES ENCORE >>";
        },
    },
});