# Learning Board

**Learning Board** is a minimalistic and user-friendly web app designed to help you study through interactive question cards. Add your questions in JSON format and track your understanding in real-time through built-in statistics.

![Home page](./screenshots/Home_page.png)
![Add questions modal](./screenshots/Add_questions_modal.png)
![Home page with questions](./screenshots/Home_page_with_questions.png)
![Statistics page](./screenshots/Statistics_page.png)

## Features

- Add your own questions using structured JSON
- Interactive answer interface with feedback
- Statistics page to track your learning progress
- Simple, clean UI for focused study sessions
- Light/Dark mode toggle

### Known Limitations

- Currently supports only **one correct answer** per question.
- Multiple correct answers in the `correctAnswer` field are not yet handled.

## Getting Started

### Local development

```bash:
    npm install
    npm run dev
```

### Docker deployment
You can run the app with Docker Compose:
    docker-compose up --build

## Question format (JSON)
```
[
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "Madrid", "Berlin", "Rome"],
    "correctAnswer": "Paris"
  },
  {
    "question": "Which city is the capital of Japan?",
    "options": ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    "correctAnswer": "Tokyo"
  },
  next question structure ...
]
```