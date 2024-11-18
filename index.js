const quoteBox = document.querySelector(".quote");
const generateBtn = document.querySelector(".generate-btn");
const authorBox = document.querySelector(".author");

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

generateBtn.addEventListener("click", () => {
  fetchQuote()
    .then((data) => {
      quoteBox.textContent = data[0].content;
      authorBox.textContent = `~${data[0].author}~`;
    })
    .catch((err) => {
      console.log(err);
    });
});
