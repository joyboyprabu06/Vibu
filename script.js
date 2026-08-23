/* =========================================================
   VIJAYASREE PROPOSAL WEBSITE
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const screens = {
    start: document.getElementById("startScreen"),
    intro: document.getElementById("introScreen"),
    question: document.getElementById("questionScreen"),
    imageQuestion: document.getElementById("imageQuestionScreen"),
    proposal: document.getElementById("proposalScreen"),
    celebration: document.getElementById("celebrationScreen"),
    memories: document.getElementById("memoriesScreen"),
    finalMessage: document.getElementById("finalMessageScreen")
};

const startBtn = document.getElementById("startBtn");
const readyBtn = document.getElementById("readyBtn");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const questionLabel = document.getElementById("questionLabel");
const optionsContainer = document.getElementById("optionsContainer");
const progressBar = document.getElementById("progressBar");

const loveText = document.getElementById("loveText");
const proposalQuestion = document.getElementById("proposalQuestion");
const marriageBox = document.getElementById("marriageBox");

const replayBtn = document.getElementById("replayBtn");


/* =========================================================
   QUESTION DATA
========================================================= */

const questions = [

    {
        number: "01",
        icon: "❤️",
        text: 'Do you remember when we first started becoming "us"?',
        options: [
            "I remember ❤️",
            "Maybe... 👀",
            "Of course I do 🥹",
            "You tell me 😌"
        ]
    },

    {
        number: "02",
        icon: "🌷",
        text: "Which one describes us the best?",
        options: [
            "💗 Best Friends",
            "😂 Two Crazy People",
            "🌈 Partners in Crime",
            "❤️ Something More"
        ]
    },

    {
        number: "04",
        icon: "🌈",
        text: "If we could disappear somewhere together... where would you choose?",
        options: [
            "🌊 Beach",
            "🌃 A city at night",
            "🏔️ Somewhere peaceful",
            "🌌 Anywhere, as long as we're together"
        ]
    },

    {
        number: "05",
        icon: "🥹",
        text: "What's one thing about me that secretly makes you smile?",
        options: [
            "😂 My comedy",
            "😌 My way of talking",
            "🥹 The way I care",
            "❤️ Everything"
        ]
    },

    {
        number: "06",
        icon: "💗",
        text: "If you had to describe whatever this is between us with ONE word... what would it be?",
        options: [
            "FRIENDSHIP",
            "CONNECTION",
            "LOVE",
            "OUR LITTLE STORY ❤️"
        ]
    },

    {
        number: "07",
        icon: "🫶",
        text: "If you could go back to the very beginning... would you choose me again?",
        options: [
            "YES ❤️",
            "WITHOUT A DOUBT 🫶",
            "EVERY SINGLE TIME 🌈"
        ]
    },

    {
        number: "08",
        icon: "👀",
        text: "Okay... we're getting closer. Are you ready for the last two questions?",
        options: [
            "YES 😳",
            "I'M READY ❤️",
            "LET'S GO 💗"
        ]
    },

    {
        number: "09",
        icon: "🥹",
        text: "If someone wanted to stay beside you through the good days, bad days, random fights, stupid jokes, and everything between... would you let him?",
        options: [
            "YES 🥹",
            "ALWAYS ❤️",
            "I'M NOT GOING ANYWHERE 💗"
        ]
    }

];


/* =========================================================
   STATE
========================================================= */

let currentQuestionIndex = 0;
let memoryIndex = 0;

const memories = [
    {
        image: "images/photo1.jpg",
        caption: "A moment I'll always remember. ❤️"
    },
    {
        image: "images/photo2.jpg",
        caption: "One more beautiful memory with you. 🌸"
    },
    {
        image: "images/photo3.jpg",
        caption: "A moment that became a memory. 🌅"
    },
    {
        image: "images/photo4.jpg",
        caption: "And a memory I'll keep forever. ❤️"
    }
];


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
   START
========================================================= */

startBtn.addEventListener("click", () => {

    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        15
    );

    showScreen(screens.intro);
});


/* =========================================================
   READY
========================================================= */

readyBtn.addEventListener("click", () => {

    currentQuestionIndex = 0;

    showScreen(screens.question);

    setTimeout(() => {
        renderQuestion();
    }, 350);
});


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const question = questions[currentQuestionIndex];

    questionNumber.textContent = question.number;

    questionLabel.textContent =
        `QUESTION ${question.number}`;

    questionText.textContent = question.text;

    progressBar.style.width =
        `${(parseInt(question.number) / 10) * 100}%`;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-btn";

        button.innerHTML = `
            <span>${String.fromCharCode(65 + index)}</span>
            &nbsp;&nbsp;
            ${option}
        `;

        button.addEventListener("click", () => {

            button.classList.add("selected");

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2,
                8
            );

            setTimeout(() => {

                if (question.number === "02") {

                    showImageQuestion();

                } else if (currentQuestionIndex < questions.length - 1) {

                    currentQuestionIndex++;

                    renderQuestion();

                } else {

                    startProposal();

                }

            }, 650);

        });

        optionsContainer.appendChild(button);

    });
}


/* =========================================================
   IMAGE QUESTION
========================================================= */

function showImageQuestion() {

    showScreen(screens.imageQuestion);

    document.querySelectorAll(".photo-option").forEach(photo => {

        photo.classList.remove("selected");

        photo.onclick = () => {

            photo.classList.add("selected");

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2,
                10
            );

            setTimeout(() => {

                currentQuestionIndex = 2;

                showScreen(screens.question);

                setTimeout(() => {
                    renderQuestion();
                }, 350);

            }, 650);

        };

    });

}


/* =========================================================
   PROPOSAL
========================================================= */

function startProposal() {

    showScreen(screens.proposal);

    loveText.innerHTML = "";

    proposalQuestion.classList.remove("show");

    marriageBox.classList.remove("show");

    document.getElementById("bigHeart").style.display = "block";

    document.getElementById("finalIntro").style.display = "block";

    setTimeout(() => {

        document.getElementById("finalIntro").style.opacity = "0";

    }, 1800);

    setTimeout(() => {

        typeLoveText();

    }, 2400);

}


/* =========================================================
   I LOVE YOU LETTER REVEAL
========================================================= */

function typeLoveText() {

    const text = "I LOVE YOU";

    loveText.innerHTML = "";

    let index = 0;

    const typing = setInterval(() => {

        loveText.textContent =
            text.substring(0, index + 1);

        index++;

        if (index >= text.length) {

            clearInterval(typing);

            setTimeout(() => {

                showProposalQuestion();

            }, 1800);
        }

    }, 180);

}


/* =========================================================
   SHOW PROPOSAL
========================================================= */

function showProposalQuestion() {

    document.getElementById("bigHeart").style.transform =
        "scale(0.7)";

    proposalQuestion.classList.add("show");

    setTimeout(() => {

        marriageBox.classList.add("show");

    }, 2200);

}


/* =========================================================
   PROPOSAL BUTTONS
========================================================= */

document.querySelectorAll(".proposal-btn").forEach(button => {

    button.addEventListener("click", () => {

        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;

        createHeartBurst(x, y, 70);

        createConfetti();

        setTimeout(() => {

            showScreen(screens.celebration);

            setTimeout(() => {

                showMemories();

            }, 3500);

        }, 700);

    });

});


/* =========================================================
   CELEBRATION
========================================================= */

function createConfetti() {

    const container =
        document.getElementById("celebrationParticles");

    container.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top =
            -Math.random() * 30 + "%";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        piece.style.width =
            4 + Math.random() * 7 + "px";

        piece.style.height =
            8 + Math.random() * 12 + "px";

        const colors = [
            "#ff6eaf",
            "#ffb6dc",
            "#a78bff",
            "#ffffff",
            "#ff83c0"
        ];

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(piece);
    }

}


/* =========================================================
   HEART BURST
========================================================= */

function createHeartBurst(x, y, count = 20) {

    const container =
        document.getElementById("celebrationParticles");

    for (let i = 0; i < count; i++) {

        const heart =
            document.createElement("div");

        heart.className = "burst-heart";

        heart.textContent =
            Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 260;

        const moveX =
            Math.cos(angle) * distance;

        const moveY =
            Math.sin(angle) * distance;

        heart.style.setProperty(
            "--x",
            `${moveX}px`
        );

        heart.style.setProperty(
            "--y",
            `${moveY}px`
        );

        heart.style.setProperty(
            "--r",
            `${Math.random() * 360}deg`
        );

        heart.style.animationDelay =
            Math.random() * 0.15 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}


/* =========================================================
   MEMORIES
========================================================= */

function showMemories() {

    memoryIndex = 0;

    showScreen(screens.memories);

    setTimeout(() => {

        playMemories();

    }, 700);

}


function playMemories() {

    const image =
        document.querySelector("#memoryPhoto img");

    const number =
        document.getElementById("memoryNumber");

    const caption =
        document.getElementById("memoryCaption");

    if (memoryIndex >= memories.length) {

        setTimeout(() => {

            showScreen(screens.finalMessage);

        }, 1000);

        return;
    }

    image.style.opacity = "0";
    image.style.transform = "scale(1.08)";

    setTimeout(() => {

        image.src =
            memories[memoryIndex].image;

        caption.textContent =
            memories[memoryIndex].caption;

        number.textContent =
            `0${memoryIndex + 1} / 04`;

        image.style.transition =
            "opacity 1s ease, transform 1.2s ease";

        image.style.opacity = "1";
        image.style.transform = "scale(1)";

    }, 500);

    memoryIndex++;

    setTimeout(() => {

        playMemories();

    }, 3300);

}


/* =========================================================
   REPLAY
========================================================= */

replayBtn.addEventListener("click", () => {

    currentQuestionIndex = 0;
    memoryIndex = 0;

    document.getElementById(
        "celebrationParticles"
    ).innerHTML = "";

    loveText.innerHTML = "";

    proposalQuestion.classList.remove("show");

    marriageBox.classList.remove("show");

    showScreen(screens.start);

});


/* =========================================================
   FALLING HEARTS
========================================================= */

function createFallingHearts() {

    const layer =
        document.querySelector(".hearts-layer");

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("span");

        heart.className = "falling-heart";

        heart.textContent =
            Math.random() > 0.5 ? "♡" : "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            8 + Math.random() * 12 + "s";

        heart.style.animationDelay =
            Math.random() * 10 + "s";

        heart.style.fontSize =
            8 + Math.random() * 13 + "px";

        layer.appendChild(heart);

    }
}

createFallingHearts();


/* =========================================================
   MOUSE HEART CURSOR
========================================================= */

const cursor =
    document.querySelector(".cursor-heart");

document.addEventListener("mousemove", event => {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";

});


document.addEventListener("mousedown", () => {

    cursor.classList.add("active");

    createHeartBurst(
        window.event?.clientX || window.innerWidth / 2,
        window.event?.clientY || window.innerHeight / 2,
        5
    );

});


document.addEventListener("mouseup", () => {

    cursor.classList.remove("active");

});


/* =========================================================
   MOBILE TOUCH HEART
========================================================= */

document.addEventListener("touchstart", event => {

    const touch = event.touches[0];

    if (!touch) return;

    createHeartBurst(
        touch.clientX,
        touch.clientY,
        4
    );

}, {
    passive: true
});
