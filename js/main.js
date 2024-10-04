const topics = ["HTML", "CSS", "JavaScript"];

const rankings = [
  { ranking: "Awesome", value: 5 },
  { ranking: "Great", value: 4 },
  { ranking: "Good", value: 3 },
  { ranking: "Okay", value: 2 },
  { ranking: "Poor", value: 1 },
  { ranking: "Unranked", value: 0 },
];

const generateRadioButtons = (name, label, value) => {
  const radioLabel = document.createElement("label");
  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = name;
  radioButton.value = value;

  radioLabel.innerText = label;
  radioLabel.appendChild(radioButton);

  return radioLabel;
};

const generateResult = (ranking, topic) => {
  const results = document.querySelector("#results");
  const text = `I am ${ranking} when it comes to ${topic}.`;
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  results.appendChild(paragraph);
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready...FAMILY");

  const form = document.querySelector("#classSurveyForm");
  const rankingsOptions = document.querySelector("#rankingOptions");
  const topicOptions = document.querySelector("#topicOptions");

  rankings.map((ranking) => {
    const label = generateRadioButtons(
      "ranking",
      ranking.ranking,
      ranking.value
    );
    rankingsOptions.appendChild(label);
  });

  topics.map((topic) => {
    const label = generateRadioButtons("topic", topic, topic);
    topicOptions.appendChild(label);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const rankingScore = formData.get("ranking");
    const topic = formData.get("topic");

    if (!topic || !rankingScore) {
      alert("Please fill out all fields!");
      return;
    }

    const rankingText = rankings.reduce((acc, curr) => {
      if (curr.value === Number(rankingScore)) {
        return (curr.ranking).toLowerCase();
      }
      return acc;
    }, []);

    generateResult(rankingText, topic);
  });
});
