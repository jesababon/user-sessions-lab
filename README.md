# Express sessions lab

In this lab we're going to make a website where a user has a session that keeps
track of their favorite color, and shows it as the site background.

1.  Install npm dependencies

    ```bash
    npm install
    ```

1.  Run the application with nodemon:

    ```bash
    npm start
    ```

1.  Open the website [`http://localhost:4567`](http://localhost:4567) to take a look at the starting state, and read through
    `server.js` and `views/home/index.ejs`.

1.  Install the `express-session` package and configure it in the `server.js` file.

1.  Implement the `POST /set-favorite-color` endpoint that sets a variable
    `favoriteColor` in the user session object, and redirects the user back to the homepage
    at `GET /`.

1.  Change the hardcoded value in the homepage route to display the user's favorite
    color as the background instead of the hardcoded value. _Don't forget to set
    a fallback for new users that haven't picked one!_

1.  Connect to the website in different browsers to see how the server tracks separate
    sessions.

1.  Set the default value for the color picker to the user's favorite color.
    BONUS

1.  The default Express session storage mechanism is in memory, and not recommended
    for production. Add in [`session-file-store`](https://www.npmjs.com/package/session-file-store)
    as an alternative storage mechanism.

1.  Poke around the project's filesystem to see where user data is stored in the filesystem.
