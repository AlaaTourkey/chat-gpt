// document.getElementById("submit-btn").addEventListener("click", function () {
//   sendToChatGPT();
// });


// function sendToChatGPT() {
//   let value = document.getElementById("word-input").value;

//   let body = {
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: value }],
//     tempreture: "0",
//   };

//   let headers = {
//     Authorization: "Bearer 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",
//   };



//   axios
//     .post("https://api.openai.com/v1/chat/completions", body, {
//       headers: headers,
//     })
//     .then((response) => {
//       let reply = response.data.choices[0].message.content;
//       document.getElementById("reply-content").textContent = reply;
//     });

// }



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
    });
}