const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const options = {
  method: 'POST',
  url: 'https://chatgpt-42.p.rapidapi.com/chatgpt',
  headers: {
    'x-rapidapi-key': process.env.API_KEY || process.env.GITHUB_API_KEY,
    'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: 'Generate a JSON output with 2 general culture questions for level intermediate and their answer.'
      }
    ],
    web_access: false
  }
};

async function save_json(data) {
    console.log('Data received:', data); // Log the received data
    if (data && data.result) {
        const parsedData = JSON.parse(data.result);
        const questions = parsedData.questions.map(question => ({
            content: question.text,
            answer: question.answer.text
        }));
        fs.writeFile('questions.json', JSON.stringify({ questions }, null, 2), function (err) {
            if (err) {
                console.error('Error writing file:', err);
                throw err;
            }
            console.log('questions.json has been saved!');
        });
    } else {
        console.error('Invalid data format:', data);
    }
}

async function getQuestions() {
    try {
        const response = await axios.request(options);
        console.log('Response data:', response.data);
        save_json(response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
    }
}

getQuestions();