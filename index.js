const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Slot 1: Uses Llama 3 8B
app.post('/ask/chatgpt', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: req.body.question }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY_KIMIK2}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Groq Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch from Groq" });
  }
});

// Slot 2: Uses Llama 3 70B
app.post('/ask/gemini', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages: [{ role: 'user', content: req.body.question }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY_KIMIK2}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Groq Llama3-70B Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch from Groq (Llama3-70B)" });
  }
});

// Slot 3: Uses Gemma2
app.post('/ask/deepseek', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'gemma2-9b-it',
        messages: [{ role: 'user', content: req.body.question }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY_KIMIK2}`,
        },
      }
    );
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Groq Gemma2 Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch from Groq (Gemma2)" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});