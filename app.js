async function sendMessage() {

const prompt = document.getElementById("prompt").value;

if(!prompt) return;

const chat = document.getElementById("chat");

chat.innerHTML += `
<div style="text-align:right;margin:10px;">
${prompt}
</div>
`;

document.getElementById("prompt").value = "";

const response = await fetch(
"https://script.google.com/macros/s/AKfycbxhmZmUeMQgCQmYg3T_EQlExUmlbfAioVJWrNgRNPVQ-8yt8beTpLQQHwpIN7KyS-AXLw/exec",
{
method:"POST",
body:JSON.stringify({
message:prompt
})
}
);

const data = await response.text();

chat.innerHTML += `
<div style="
background:#ececec;
padding:12px;
border-radius:10px;
margin:10px;
">
${data}
</div>
`;

chat.scrollTop = chat.scrollHeight;

}
