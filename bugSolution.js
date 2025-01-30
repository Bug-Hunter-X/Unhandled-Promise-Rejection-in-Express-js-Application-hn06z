const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error('Error during request:', err);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  await new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
}