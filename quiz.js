// ===========================
// ZENTRALE QUIZ.JS
// ===========================

const QUIZZES = {
  programmieren: {
    title: "💻 Programmieren",
    description: "Python, CSS & Java",
    questions: [
      { question: "Welche Zeile definiert eine Variable in Python?", answers: ["int x = 5;", "x = 5", "var x := 5"], correct: 1 },
      { question: "Wofür wird CSS verwendet?", answers: ["Logik programmieren", "Daten speichern", "Webseiten gestalten"], correct: 2 },
      { question: "Welche Schleife gibt es in Java?", answers: ["repeat-until", "foreach", "for"], correct: 2 },
      { question: "Was ist eine Funktion?", answers: ["Ein gespeicherter Wert", "Ein wiederverwendbarer Codeblock", "Ein Fehler"], correct: 1 }
    ]
  },

  anatomie: {
    title: "🫀 Anatomie",
    description: "Muskeln, Organe & Skelett",
    questions: [
      {
        question: "Welche Aufgabe haben Muskeln hauptsächlich?",
        answers: ["Sie speichern Sauerstoff", "Sie ermöglichen Bewegung und Haltung", "Sie produzieren Blut"],
        correct: 1
      },
      {
        question: "Welche Muskelart ist willentlich steuerbar?",
        answers: ["Glatte Muskulatur", "Herzmuskulatur", "Skelettmuskulatur"],
        correct: 2
      },
      {
        question: "Welches Organ pumpt Blut durch den Körper?",
        answers: ["Lunge", "Herz", "Leber"],
        correct: 1
      },
      {
        question: "Wie viele Knochen hat das menschliche Skelett ungefähr?",
        answers: ["106", "206", "306"],
        correct: 1
      },
      {
        question: "Welche Aufgabe hat das Skelett?",
        answers: ["Nährstoffe verdauen", "Körper stützen und Organe schützen", "Sauerstoff produzieren"],
        correct: 1
      }
    ]
  },

  erstehilfe: {
    title: "🚑 Lebensrettende Maßnahmen",
    description: "Erste Hilfe & Notfallwissen",
    questions: [
      {
        question: "Wann wird eine Herz-Lungen-Wiederbelebung (HLW) durchgeführt?",
        answers: [
          "Bei Kopfschmerzen",
          "Bei Bewusstlosigkeit ohne normale Atmung",
          "Bei Fieber"
        ],
        correct: 1
      },
      {
        question: "Wie lautet der Notruf in Deutschland?",
        answers: ["911", "110", "112"],
        correct: 2
      },
      {
        question: "Wie behandelt man Verbrennungen korrekt?",
        answers: [
          "Mit Eis kühlen",
          "Blasen aufstechen",
          "Mit kühlem Wasser kühlen"
        ],
        correct: 2
      },
      {
        question: "Was hat bei Erste Hilfe oberste Priorität?",
        answers: ["Schnell handeln", "Eigenschutz", "Viele Helfer"],
        correct: 1
      }
    ]
  },
    ggp: {
    title: "🌍 Geschichte & Geografie",
    description: "Geschichte, Geografie & Weltwissen",
    questions: [
      {
        question: "Womit beschäftigt sich die Geschichte?",
        answers: [
          "Mit zukünftigen Ereignissen",
          "Mit der Vergangenheit des Menschen",
          "Mit Wetter und Klima"
        ],
        correct: 1
      },
      {
        question: "Welche Epoche gehört zur Antike?",
        answers: [
          "Römisches Reich",
          "Industrialisierung",
          "Digitale Gesellschaft"
        ],
        correct: 0
      },
      {
        question: "Was untersucht die Geografie?",
        answers: [
          "Nur politische Systeme",
          "Die Erde als Lebensraum",
          "Ausschließlich Tiere"
        ],
        correct: 1
      },
      {
        question: "Welche Disziplin gehört zur physischen Geografie?",
        answers: [
          "Klimatologie",
          "Wirtschaftslehre",
          "Geschichtsforschung"
        ],
        correct: 0
      }
    ]
  },
  biologie: {
  title: "🧠 Biologie",
  description: "Pflanzen & Tiere",
  questions: [
    {
      question: "Warum stehen Pflanzen am Anfang fast jeder Nahrungskette?",
      answers: [
        "Weil sie Tiere fressen",
        "Weil sie Energie selbst herstellen können",
        "Weil sie sich schnell bewegen"
      ],
      correct: 1
    },
    {
      question: "Wie heißt der Prozess, bei dem Pflanzen Sauerstoff produzieren?",
      answers: [
        "Atmung",
        "Photosynthese",
        "Verdauung"
      ],
      correct: 1
    },
    {
      question: "Welche Pflanzengruppe vermehrt sich über Sporen?",
      answers: [
        "Blütenpflanzen",
        "Farne",
        "Nadelpflanzen"
      ],
      correct: 1
    },
    {
      question: "Tiere sind heterotroph. Was bedeutet das?",
      answers: [
        "Sie stellen ihre Nahrung selbst her",
        "Sie müssen Nahrung aufnehmen",
        "Sie betreiben Photosynthese"
      ],
      correct: 1
    },
    {
      question: "Welche Eigenschaft haben Säugetiere?",
      answers: [
        "Sie sind wechselwarm",
        "Sie legen Eier und haben Schuppen",
        "Sie säugen ihre Jungen mit Milch"
      ],
      correct: 2
    }
  ]
}   
};

// === Quiz rendern nur für eine Kategorie ===
function loadQuiz(category) {
  const quiz = QUIZZES[category];
  if (!quiz) return;

  const container = document.getElementById("quiz-container");
  const checkBtn = document.getElementById("checkBtn");
  const resultEl = document.getElementById("result");
  const titleEl = document.getElementById("title");
  const descEl = document.getElementById("description");

  container.innerHTML = "";
  resultEl.innerHTML = "";
  checkBtn.disabled = true;

  titleEl.textContent = quiz.title;
  descEl.textContent = quiz.description || "";

  quiz.questions.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "quiz-card";

    const answersHTML = q.answers.map((a, ai) => `
      <label>
        <input type="radio" name="q${i}" value="${ai}">
        ${a}
      </label>
    `).join("");

    card.innerHTML = `
      <div class="question">${i + 1}. ${q.question}</div>
      <div class="answers">${answersHTML}</div>
    `;
    container.appendChild(card);
  });

  // Button aktivieren, wenn alle beantwortet
  container.addEventListener("change", () => {
    const allAnswered = quiz.questions.every((_, i) =>
      document.querySelector(`input[name="q${i}"]:checked`)
    );
    checkBtn.disabled = !allAnswered;
  });

  // Auswertung
  checkBtn.onclick = () => {
    let score = 0;

    quiz.questions.forEach((q, i) => {
      document.querySelectorAll(`input[name="q${i}"]`).forEach(input => {
        const label = input.parentElement;
        label.classList.remove("correct", "wrong");

        if (+input.value === q.correct) label.classList.add("correct");
        if (input.checked && +input.value !== q.correct) label.classList.add("wrong");

        if (input.checked && +input.value === q.correct) score++;
      });
    });

    // Ergebnis + Liste der falsch beantworteten Fragen
    const wrongQuestions = quiz.questions
      .map((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) return null;
        return +selected.value !== q.correct ? `${i + 1}. ${q.question}` : null;
      })
      .filter(Boolean);

    let resultText = `✅ <strong>${score} von ${quiz.questions.length}</strong> richtig`;
    if (wrongQuestions.length > 0) {
      resultText += "<br><br>❌ Falsch beantwortete Fragen:<br>" + wrongQuestions.join("<br>");
    }

    resultEl.innerHTML = resultText;
  };
}
