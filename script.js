/* =========================================================
   VIJAYASREE — INTERACTIVE LOVE JOURNEY
========================================================= */


/* =========================================================
   SCREEN ELEMENTS
========================================================= */

const screens = {

    welcome:
        document.getElementById("welcomeScreen"),

    intro:
        document.getElementById("introScreen"),

    questions:
        document.getElementById("questionScreen"),

    photos:
        document.getElementById("photoQuestionScreen"),

    love:
        document.getElementById("loveScreen"),

    proposal:
        document.getElementById("proposalScreen"),

    result:
        document.getElementById("resultScreen"),

    answerSheet:
        document.getElementById("answerSheetScreen")

};


/* =========================================================
   BUTTONS
========================================================= */

const beginButton =
    document.getElementById("beginButton");

const readyButton =
    document.getElementById("readyButton");

const textContinueButton =
    document.getElementById("textContinueButton");

const answerSheetButton =
    document.getElementById("answerSheetButton");

const replayButton =
    document.getElementById("replayButton");


/* =========================================================
   QUESTION DATA
========================================================= */

const questions = [

    {
        number: 1,

        icon: "❤️",

        text:
            "Do you remember when we first met, and do you remember when we became “us” — when we became lovers?",

        type: "options",

        options: [
            "Yes",
            "No",
            "Absolutely, I remember",
            "Never"
        ],

        hasDate: true

    },

    {
        number: 2,

        icon: "💗",

        text:
            "Do you still love me, or have those feelings for me faded away?",

        type: "options",

        options: [
            "Yes",
            "Never",
            "They’re still there, but…",
            "They’ll come back"
        ]

    },

    {
        number: 3,

        icon: "🫶",

        text:
            "What kind of relationship do we have?",

        type: "options",

        options: [
            "Friendship",
            "Lovers",
            "Classmates",
            "Soulmates"
        ]

    },

    {
        number: 4,

        icon: "🌊",

        text:
            "If I suddenly stopped talking to you from tomorrow, would you forget me and move on? Or would you stay silent, continue with your work, and let me go?",

        type: "options",

        options: [
            "No matter what happens, I’ll stay",
            "I’ll move on",
            "I’ll come back and talk to you from time to time",
            "I don’t know"
        ]

    },

    {
        number: 5,

        icon: "🥺",

        text:
            "Have you ever thought that you don’t want me in your life forever — that you don’t want this person in your life?",

        type: "options",

        options: [
            "Yes",
            "No",
            "Sometimes"
        ]

    },

    {
        number: 6,

        icon: "💔",

        text:
            "If I were gone one day, would you move on to another relationship, or if a new boyfriend came into your life, would you talk to him and forget about me?",

        type: "options",

        options: [
            "Yes",
            "No",
            "I don’t know"
        ]

    },

    {
        number: 7,

        icon: "💍",

        text:
            "If your family found a suitable match for you through an arranged marriage, would you say yes and move on?",

        type: "options",

        options: [
            "Yes",
            "No"
        ]

    },

    {
        number: 8,

        icon: "🌙",

        text:
            "If you found out tomorrow that I was no longer in this world, what would you do?",

        type: "text"

    },

    {
        number: 9,

        icon: "❤️",

        text:
            "When we’re together, do you truly feel that we belong together?",

        type: "options",

        options: [
            "Yes",
            "No",
            "Sometimes"
        ]

    },

    {
        number: 10,

        icon: "💗",

        text:
            "Please answer honestly, from your heart. Do you want me in your life or not?",

        type: "text"

    }

];


/* =========================================================
   ANSWERS
========================================================= */

let answers = [];

let currentQuestion = 0;


/* =========================================================
   SCREEN SWITCH
========================================================= */

function showScreen(screen) {

    Object.values(screens).forEach(item => {

        item.classList.remove("active");

    });

    setTimeout(() => {

        screen.classList.add("active");

    }, 80);

}


/* =========================================================
   BEGIN
========================================================= */

beginButton.addEventListener("click", () => {

    createHeartExplosion(
        window.innerWidth / 2,
        window.innerHeight / 2,
        18
    );

    showScreen(screens.intro);

});


/* =========================================================
   READY
========================================================= */

readyButton.addEventListener("click", () => {

    answers = [];

    currentQuestion = 0;

    renderQuestion();

    showScreen(screens.questions);

});


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];

    const counter =
        document.getElementById(
            "questionCounter"
        );

    const percent =
        document.getElementById(
            "questionPercent"
        );

    const progress =
        document.getElementById(
            "progressFill"
        );

    const icon =
        document.getElementById(
            "questionIcon"
        );

    const label =
        document.getElementById(
            "questionLabel"
        );

    const text =
        document.getElementById(
            "questionText"
        );

    const options =
        document.getElementById(
            "answerOptions"
        );

    const dateArea =
        document.getElementById(
            "dateArea"
        );

    const textArea =
        document.getElementById(
            "textAnswerArea"
        );


    /* Counter */

    counter.textContent =
        `QUESTION ${String(question.number).padStart(2, "0")}`;


    const percentage =
        Math.round(
            (question.number / 11) * 100
        );


    percent.textContent =
        `${percentage}%`;

    progress.style.width =
        `${percentage}%`;


    /* Content */

    icon.textContent =
        question.icon;

    label.textContent =
        `QUESTION ${String(question.number).padStart(2, "0")}`;

    text.textContent =
        question.text;


    /* Reset */

    options.innerHTML = "";

    dateArea.classList.add("hidden");

    textArea.classList.add("hidden");


    /* Date */

    if (question.hasDate) {

        dateArea.classList.remove("hidden");

    }


    /* Text */

    if (question.type === "text") {

        textArea.classList.remove("hidden");

        document.getElementById(
            "writtenAnswer"
        ).value = "";

        return;

    }


    /* Options */

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.innerHTML =
                `<strong>${String.fromCharCode(65 + index)}</strong>
                 &nbsp;&nbsp; ${option}`;

            button.addEventListener(
                "click",
                () => {

                    selectOption(
                        button,
                        option
                    );

                }
            );

            options.appendChild(button);

        }
    );

}


/* =========================================================
   SELECT OPTION
========================================================= */

function selectOption(button, option) {

    document
        .querySelectorAll(".answer-option")
        .forEach(item => {

            item.classList.remove("selected");

        });


    button.classList.add("selected");


    createHeartExplosion(
        window.innerWidth / 2,
        window.innerHeight / 2,
        8
    );


    const question =
        questions[currentQuestion];


    let answer =
        option;


    /* Question 1 date */

    if (question.number === 1) {

        const date =
            document.getElementById(
                "memoryDate"
            ).value;

        if (date) {

            answer =
                `${option} — Date: ${formatDate(date)}`;

        }

    }


    answers.push({

        question:
            `Question ${question.number}`,

        answer:
            answer

    });


    setTimeout(() => {

        nextQuestion();

    }, 650);

}


/* =========================================================
   TEXT ANSWERS
========================================================= */

textContinueButton.addEventListener(
    "click",
    () => {

        const input =
            document.getElementById(
                "writtenAnswer"
            );

        const value =
            input.value.trim();


        if (!value) {

            input.focus();

            input.style.borderColor =
                "#ff5575";

            setTimeout(() => {

                input.style.borderColor =
                    "";

            }, 700);

            return;

        }


        answers.push({

            question:
                `Question ${questions[currentQuestion].number}`,

            answer:
                value

        });


        createHeartExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2,
            12
        );


        setTimeout(() => {

            nextQuestion();

        }, 650);

    }
);


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showPhotoQuestion();

        return;

    }


    renderQuestion();

}


/* =========================================================
   PHOTO QUESTION
========================================================= */

function showPhotoQuestion() {

    showScreen(screens.photos);

    document
        .querySelectorAll(".photo-choice")
        .forEach(button => {

            button.classList.remove(
                "selected"
            );

            button.onclick = () => {

                document
                    .querySelectorAll(".photo-choice")
                    .forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                const selectedPhoto =
                    button.dataset.photo;


                answers.push({

                    question:
                        "Question 11",

                    answer:
                        selectedPhoto

                });


                createHeartExplosion(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    20
                );


                setTimeout(() => {

                    startLoveReveal();

                }, 900);

            };

        });

}


/* =========================================================
   LOVE REVEAL
========================================================= */

function startLoveReveal() {

    showScreen(screens.love);

    const loveText =
        document.getElementById(
            "loveText"
        );

    loveText.textContent = "";


    const text =
        "I LOVE YOU";


    let index = 0;


    const timer =
        setInterval(() => {

            loveText.textContent =
                text.substring(
                    0,
                    index + 1
                );

            index++;


            createHeartExplosion(
                window.innerWidth / 2,
                window.innerHeight / 2,
                2
            );


            if (index >= text.length) {

                clearInterval(timer);


                setTimeout(() => {

                    showScreen(
                        screens.proposal
                    );

                }, 2200);

            }

        }, 180);

}


/* =========================================================
   PROPOSAL
========================================================= */

document
    .querySelectorAll(".proposal-choice")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const proposalAnswer =
                    button.dataset.answer;


                answers.push({

                    question:
                        "Final Proposal",

                    answer:
                        proposalAnswer

                });


                createMassiveCelebration();


                const resultTitle =
                    document.getElementById(
                        "resultTitle"
                    );

                const resultSubtitle =
                    document.getElementById(
                        "resultSubtitle"
                    );


                if (
                    proposalAnswer ===
                    "NEVER 💔"
                ) {

                    resultTitle.textContent =
                        "HER ANSWER.";

                    resultSubtitle.textContent =
                        "NEVER 💔";

                } else {

                    resultTitle.textContent =
                        "SHE SAID YES. ❤️";

                    resultSubtitle.textContent =
                        proposalAnswer;

                }


                setTimeout(() => {

                    showScreen(
                        screens.result
                    );

                }, 1800);

            }
        );

    });


/* =========================================================
   ANSWER SHEET
========================================================= */

answerSheetButton.addEventListener(
    "click",
    () => {

        renderAnswerSheet();

        showScreen(
            screens.answerSheet
        );

    }
);


/* =========================================================
   RENDER ANSWERS
========================================================= */

function renderAnswerSheet() {

    const list =
        document.getElementById(
            "answersList"
        );

    const finalAnswer =
        document.getElementById(
            "finalProposalAnswer"
        );


    list.innerHTML = "";


    answers.forEach(item => {

        const row =
            document.createElement("div");

        row.className =
            "answer-row";

        row.innerHTML = `

            <div class="answer-question">
                ${escapeHTML(item.question)}
            </div>

            <div class="answer-value">
                ${escapeHTML(item.answer)}
            </div>

        `;

        list.appendChild(row);

    });


    const proposal =
        answers.find(
            item =>
                item.question ===
                "Final Proposal"
        );


    finalAnswer.textContent =
        proposal
            ? proposal.answer
            : "—";

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

}


/* =========================================================
   DOWNLOAD ANSWERS
========================================================= */

document
    .getElementById("downloadAnswers")
    .addEventListener(
        "click",
        () => {

            const data = {

                name:
                    "Vijayasree",

                answers:
                    answers,

                created:
                    new Date().toLocaleString()

            };


            const blob =
                new Blob(
                    [
                        JSON.stringify(
                            data,
                            null,
                            4
                        )
                    ],
                    {
                        type:
                            "application/json"
                    }
                );


            const url =
                URL.createObjectURL(
                    blob
                );


            const link =
                document.createElement(
                    "a"
                );

            link.href = url;

            link.download =
                "vijayasree-answer-sheet.json";

            link.click();


            URL.revokeObjectURL(url);

        }
    );


/* =========================================================
   PRINT
========================================================= */

document
    .getElementById("printAnswers")
    .addEventListener(
        "click",
        () => {

            window.print();

        }
    );


/* =========================================================
   REPLAY
========================================================= */

replayButton.addEventListener(
    "click",
    () => {

        answers = [];

        currentQuestion = 0;

        document.getElementById(
            "memoryDate"
        ).value = "";


        document.getElementById(
            "writtenAnswer"
        ).value = "";


        showScreen(
            screens.welcome
        );

    }
);


/* =========================================================
   BACKGROUND FLOATING HEARTS
========================================================= */

function createBackgroundHearts() {

    const container =
        document.getElementById(
            "backgroundHearts"
        );


    for (
        let i = 0;
        i < 32;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > 0.5
                ? "♥"
                : "♡";


        heart.style.left =
            `${Math.random() * 100}%`;


        heart.style.animationDuration =
            `${8 + Math.random() * 12}s`;


        heart.style.animationDelay =
            `${Math.random() * 10}s`;


        heart.style.fontSize =
            `${10 + Math.random() * 14}px`;


        container.appendChild(
            heart
        );

    }

}


createBackgroundHearts();


/* =========================================================
   TOUCH / CLICK HEART SPARKS
========================================================= */

const cursor =
    document.getElementById(
        "heartCursor"
    );


document.addEventListener(
    "mousemove",
    event => {

        cursor.style.left =
            `${event.clientX}px`;

        cursor.style.top =
            `${event.clientY}px`;

    }
);


document.addEventListener(
    "mousedown",
    event => {

        cursor.classList.add(
            "touch"
        );


        createHeartExplosion(
            event.clientX,
            event.clientY,
            12
        );

    }
);


document.addEventListener(
    "mouseup",
    () => {

        cursor.classList.remove(
            "touch"
        );

    }
);


/* =========================================================
   MOBILE TOUCH
========================================================= */

document.addEventListener(
    "touchstart",
    event => {

        const touch =
            event.touches[0];

        if (!touch) {
            return;
        }


        createHeartExplosion(
            touch.clientX,
            touch.clientY,
            10
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   HEART EXPLOSION
========================================================= */

function createHeartExplosion(
    x,
    y,
    count = 15
) {

    const container =
        document.getElementById(
            "sparkContainer"
        );


    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "•"
    ];


    const colors = [
        "#ff365d",
        "#ff6b88",
        "#ffb1c0",
        "#ffffff",
        "#ff8b9e"
    ];


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const spark =
            document.createElement(
                "span"
            );

        spark.className =
            "spark";


        spark.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        spark.style.setProperty(
            "--left",
            `${x}px`
        );


        spark.style.setProperty(
            "--top",
            `${y}px`
        );


        spark.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 260}px`
        );


        spark.style.setProperty(
            "--y",
            `${(Math.random() - 0.5) * 260}px`
        );


        spark.style.setProperty(
            "--rotation",
            `${Math.random() * 720 - 360}deg`
        );


        spark.style.setProperty(
            "--size",
            `${10 + Math.random() * 17}px`
        );


        spark.style.setProperty(
            "--spark-color",
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ]
        );


        container.appendChild(
            spark
        );


        setTimeout(
            () => {

                spark.remove();

            },
            1400
        );

    }

}


/* =========================================================
   MASSIVE CELEBRATION
========================================================= */

function createMassiveCelebration() {

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;


    createHeartExplosion(
        centerX,
        centerY,
        100
    );


    for (
        let i = 0;
        i < 5;
        i++
    ) {

        setTimeout(
            () => {

                createHeartExplosion(
                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    window.innerHeight,

                    35
                );

            },
            i * 250
        );

    }

}
