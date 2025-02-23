// Array of quotes
const quotes = [
    { text: "The heart is like a garden, it only grows what is planted in it.", author: "Ibn Taymiyyah" },
    { text: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { text: "Comparison is the thief of joy.", author: "Theodore Roosevelt" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Talent without work is nothing.", author: "Cristiano Ronaldo" }
  ];
  
  let lastQuoteIndex = -1;  // Start with an invalid index
  
  // Function to display a random quote
  function displayRandomQuote() {
    let randomIndex;
    // Ensure the random index is not the same as the last one
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);  // Loop until it's different
    lastQuoteIndex = randomIndex;
  
    const quote = quotes[randomIndex];
    // Update the HTML with the quote text and author
    document.getElementById('quoteText').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = `- ${quote.author}`;
  }
  
  // Function to copy the quote to the clipboard
  function copyQuoteToClipboard() {
    const quoteText = document.getElementById('quoteText').textContent;
    
    navigator.clipboard.writeText(quoteText).then(() => {
      // Show the thank you message after copying
      document.getElementById('thankYouMessage').style.display = 'block';
      
      // Hide the thank you message after 3 seconds
      setTimeout(() => {
        document.getElementById('thankYouMessage').style.display = 'none';
      }, 3000);
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  }
  
  // Add event listeners to buttons
  document.getElementById('newQuoteButton').addEventListener('click', displayRandomQuote);
  document.getElementById('copyQuoteButton').addEventListener('click', copyQuoteToClipboard);
  
  // Display a random quote when the page loads
  window.onload = displayRandomQuote;
  