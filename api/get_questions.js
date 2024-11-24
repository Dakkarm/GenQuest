const axios = require('axios');
const fs = require('fs');

const options = {
  method: 'POST',
  url: 'YOUR_API_ENDPOINT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
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
    const questions = data.messages.map(message => ({ content: message.content }));
    fs.writeFile('questions.json', JSON.stringify({ questions }), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

async function getQuestions() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        save_json(response.data);
    } catch (error) {
        console.error(error);
    }
}

getQuestions();