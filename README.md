# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: neglecting to handle potential errors within asynchronous operations.  The `bug.js` file showcases an Express app with an asynchronous function (`someAsyncOperation`) that might throw an error.  Crucially, it lacks proper error handling, leading to an unhandled promise rejection.  The solution, provided in `bugSolution.js`, demonstrates how to correctly handle this scenario using `.catch()`.