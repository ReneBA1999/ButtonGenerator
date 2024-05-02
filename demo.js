function generateNames() {
  const names = [
    "Hello Brett",
    "Hello Uriel",
    "Hello Kayla",
    "Hello Jesus",
    "Hello Daniel",
    "Kaaliyah",
    "Hello Victor",
    "Hello Alfi",
    "Hello Donny",
    "Hello Abdi",
    "Hello Kadi"
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * names.length);

  document.getElementById("displayQuestion").innerHTML = names[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateNames();
