async function submitQuestion() {
  const question = document.getElementById('questionInput').value.trim();
  if (!question) return alert("Please enter a question.");

  // Show loading indicators
  document.getElementById('chatgptResponse').innerText = "Loading...";
  document.getElementById('geminiResponse').innerText = "Loading...";
  document.getElementById('deepseekResponse').innerText = "Loading...";
  document.getElementById('grokResponse').innerText = "Loading...";

  // Define helper to fetch from each AI tool
  const fetchAI = async (route, elementId) => {
    try {
      const res = await fetch(`http://localhost:5000/ask/${route}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      document.getElementById(elementId).innerText = data.response || data.answer || 'No response';
    } catch (err) {
      document.getElementById(elementId).innerText = 'Error fetching response';
    }
  };

  // Fetch from all AI tools
  fetchAI('chatgpt', 'chatgptResponse');
  fetchAI('gemini', 'geminiResponse');
  fetchAI('deepseek', 'deepseekResponse');
  fetchAI('grok', 'grokResponse');
}
