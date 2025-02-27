// Chatbot Logic
function toggleChat() {
    document.querySelector('.chatbot').classList.toggle('hidden');
}

function sendMessage() {
    const input = document.querySelector('input');
    const chatArea = document.querySelector('.chat-area');
    
    // User Message
    chatArea.innerHTML += `<div class="user-msg">${input.value}</div>`;
    
    // Bot Response
    const responses = {
        "resume": "Use our AI Builder: 1) Fill details 2) Choose template 3) Download!",
        "job": "Top companies hiring: Amazon, Google, Microsoft",
        "salary": "Average salary for your role: ₹6-12 LPA (Experience based)",
        "default": "I can help with resumes, career tips, and job search!"
    };
    
    const reply = responses[input.value.toLowerCase()] || responses['default'];
    chatArea.innerHTML += `<div class="bot-msg">${reply}</div>`;
    
    input.value = '';
}
