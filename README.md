# quizme
I will use this to create a simple quiz as part of the skillhat DTTP program.

For this particular challenge the index.html, highscore.html, score.js, questions.js and a partial logic.js was provided.

This simple quiz has several questions for the user to answer. There is a timer and a page that keeps a record of the scores. Before starting the quiz the user as the option to check the highscores by clicking on "view highscore". The quiz is initiated when the user clicks the "Start Quiz" button. 
Once this button is clicked the timer will start counting down. If the user gets a question wrong 15 seconds is deducted from the time, the quiz ends when all the questions are answered or the time is equal to zero. In addition, when a user gets a question wrong or correct a sound effect is played respectively and a "Correct" or "Wrong" flashes below the question.
At the end of the quiz the score that the user receives is the value of the time remaining. The user is prompted to enter their initials to store their highscore. Once the submit button is clicked or the "Enter" key is pressed the user is taken to the highscore page where a list of highscores are stored. The user has the option to clear the highscores or go back to the index page and restart the quiz.

The most challenging parts for me were getting the timing the Wrong or correct display and getting the initials and scores to display.

For the timing I noticed that I the settimeout twice in the function instead of once. The initials and scores were showing undefined because the id was all lowercase and in the code one letter was uppercase so that key didn't exist.

See link below:
https://kmobatusin.github.io/quizme/

See screenshots below:
![Start](assets/images/Screenshot%201.png)
![Question](assets/images/Screenshot%202.png)
![Correct](assets/images/Screenshot%203.png)
![End](assets/images/Screenshot%204.png)
![Highscore](assets/images/Screenshot%205.png)
