
// my key
// 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





document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  let body = {
    model: "text-davinci-002",
    prompt: `Q: ${value}\nA:`,
    temperature: 0.7,
    max_tokens: 100,
    n: 1,
    stop: "\n"
  };
  let headers = {
    Authorization: "Bearer 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",
    "Content-Type": "application/json"
  };

  axios
    .post("https://api.openai.com/v1/completions", body, { headers: headers })
    .then((response) => {
      let reply = response.data.choices[0].text;
      document.getElementById("reply-content").textContent = reply;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
