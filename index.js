const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
    { email: 'example@example.com', password: 'password123'},
    { email: 'example2@example.com', password: 'password1234'},
]

const role = [
    { email: 'example@example.com', role: 'admin'},
    { email: 'example1@example.com', role: 'user'},
]

const QUESTIONS = require('./questions.js');
  

app.post('/signup', (req, res) => {
    const { email, password , } = req.body;
  
    // Check if the email already exists
    if (users.some(user => user.email === email)) {
      res.status(409).send('Email already exists. Please login.');
      return;
    }
  
    // Store the user data
    users.push({ email, password });

  
    res.status(200).send('Signup successful');
  });

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    console.log(users)
    if (!email || !password) {
        res.status(400).send('Email and password are required fields');
        return;
    }

    // Perform input validation and sanitization if necessary

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.status(200).send(`Welcome ${email}`);
    } else {
        res.status(401).send('Invalid email or password');
    }

})
app.get('/questions', (req, res) => {
    
    res.json(QUESTIONS);
})
app.post("/submissions", (req, res) => {
    // Get the submission data from the request body
    const submission = req.body;
  
    // Randomly accept or reject the solution
    const isAccepted = Math.random() < 0.5;
  
    // Store the submission in the SUBMISSION array
    SUBMISSIONS.push({
      submission,
      isAccepted
    });
  
    // Send a response based on the acceptance status
    if (isAccepted) {
      res.status(200).send("Solution accepted!");
    } else {
      res.status(400).send("Solution rejected.");
    }
  });

  app.post("/newquestion", (req, res) => {
    const { email, question } = req.body;
  
    const user = role.find((user) => user.email === email);
    if (!user || user.role !== "admin") {
      return res.status(400).send("Only admins can add questions");
    }
  
    if (!question || Object.keys(question).length === 0) {
      return res.status(400).send("Question is empty");
    }
  
    QUESTIONS.push(question);
    res.status(200).send(`${question.title} is added`);
  });

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})