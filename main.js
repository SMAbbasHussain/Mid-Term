// Data for featured speakers
const speakers = [
  {
    name: "John Doe",
    title: "Pro Gamer - Team A",
    image: "Icons/spk1.jpeg",
    bio: "John is a world-renowned esports player with multiple championships."
  },
  {
    name: "Jane Smith",
    title: "Coach - Team B",
    image: "Icons/spk2.jpeg",
    bio: "Jane has over 10 years of experience coaching top-level esports teams."
  },
  {
    name: "Mike Ross",
    title: "Streamer & Analyst",
    image: "Icons/spk3.jpeg",
    bio: "Mike is a popular esports analyst and a seasoned live-streamer."
  },
  {
    name: "Lisa Wong",
    title: "Caster - Global League",
    image: "Icons/spk4.jpeg",
    bio: "Lisa is a commentator known for her insightful and exciting game breakdowns."
  }
];

// Function to create speaker cards dynamically
function generateSpeakers() {
  const speakersContainer = document.getElementById("speakers-container");

  speakers.forEach(speaker => {
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker-item");

    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}">
      <h4>${speaker.name}</h4>
      <p>${speaker.title}</p>
      <p>${speaker.bio}</p>
    `;

    speakersContainer.appendChild(speakerCard);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", generateSpeakers);
