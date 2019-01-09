20-Questions

To run this game locally, and play against a friend on the same network as you, clone this repo, and from within it call:

docker-compose build
docker-compose up

You'll need to use software such as Postman to be able to add data to the body of your http requests.  Please use setting x-www-form-url-encoded.

Think of a unique name to identify your game.

To create your game:

  POST http://localhost:3000/game-create
  (with request body)
  name: your-game-name-here

To check for answered or unanswered questions or guesses:

  GET http://localhost:3000/game-view?name=your-game-name-here
  (note the game name in the query)

To ask a question:

  POST http://localhost:3000/game-ask-question
  (with request body)
  name: your-game-name-here
  questionText: your-question-here

To answer a question:

  POST http://localhost:3000/game-answer-question
  (with request body)
  name: your-game-name-here
  questionId: id-of-question-to-answer
  response: must-be-true-or-false

To try a guess:

  POST http://localhost:3000/game-try-guess
  (with request body)
  name: your-game-name-here
  guessText: your-question-here

To answer a guess:

  POST http://localhost:3000/game-answer-guess
  (with request body)
  name: your-game-name-here
  guessId: id-of-guess-to-answer
  guessCorrect: must-be-true-or-false

One person thinks of the word and responds to the others questions or guesses.  No more than 20 questions can be asked.