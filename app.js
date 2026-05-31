async function sendMessage() {

  const input = document.getElementById("prompt");
  const prompt = input.value.trim();

  if (!prompt) return;

  const chat = document.getElementById("chat");

  chat.innerHTML += `
    <div style="
      text-align:right;
      margin:10px;
      padding:10px;
      background:#dbeafe;
      border-radius:10px;
    ">
      ${prompt}
    </div>
  `;

  input.value = "";

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxhmZmUeMQgCQmYg3T_EQlExUmlbfAioVJWrNgRNPVQ-8yt8beTpLQQHwpIN7KyS-AXLw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: prompt
        })
      }
    );

    const answer = await response.text();

    chat.innerHTML += `
      <div style="
        margin:10px;
        padding:10px;
        background:white;
        border-radius:10px;
        border:1px solid #ddd;
      ">
        ${answer}
      </div>
    `;

    chat.scrollTop = chat.scrollHeight;

  } catch(error) {

    chat.innerHTML += `
      <div style="
        margin:10px;
        padding:10px;
        background:#ffe5e5;
        border-radius:10px;
      ">
        Error: ${error}
      </div>
    `;
  }
}
