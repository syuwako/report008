const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const dogImageUrl = response.data.message;
    res.send(`
      <html>
        <body>
          <h1>ランダムな犬の画像</h1>
          <img src="${dogImageUrl}" alt="Random Dog" />
        </body>
      </html>
    `);
  } catch (error) {
    res.send('犬の画像を取得できませんでした。');
  }
});

app.listen(port, () => {
  console.log(`サーバーがポート${port}で動作しています`);
});
