$(document).ready(function() {
  // Collection of quotes
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "In a gentle way, you can shake the world. - Mahatma Gandhi",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon"
  ];

  // Collection of colors
  const colors = ["#E57373", "#81C784", "#64B5F6", "#FFD54F", "#9575CD", "#FF8A65", "#4DB6AC", "#A1887F", "#F06292", "#4FC3F7"];

  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Function to get a random color
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // Function to display the greeting based on time of day
  function displayGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let timeOfDay;

    if (currentHour < 12) {
      timeOfDay = "morning";
    } else if (currentHour < 18) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "evening/night";
    }

    $("#greeting").text("Let's start our " + timeOfDay + " with a new quote");
  }

  // Function to update the quote and background color
  function updateQuote() {
    const randomQuote = getRandomQuote();
    const randomColor = getRandomColor();

    $("#quote").text(randomQuote);
    $("body").css("background-color", randomColor);
    $("#new-quote").css("background-color", randomColor);
    $("#quote").css("color", randomColor);
  }

  // Event handler for the New Quote button click
  $("#new-quote").on("click", function() {
    updateQuote();
  });

  // Initialize the greeting and the first quote
  displayGreeting();
  updateQuote();
});
