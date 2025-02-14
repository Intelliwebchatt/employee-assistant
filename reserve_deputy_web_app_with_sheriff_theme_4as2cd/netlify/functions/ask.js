const axios = require('axios');

exports.handler = async function(event, context) {
  const { question } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: response.data.choices[0].text.trim() })
    };
  } catch (error) {
    console.error('Error fetching the answer:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error processing your request.' })
    };
  }
};
