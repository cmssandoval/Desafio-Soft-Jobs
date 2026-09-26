# Desafio 6 - Soft Jobs

This is my response to the **Desafio 6 - Soft Jobs** meeting the following requirements:
- Register and retrieve users from the database.

- Use middlewares to:
    - Verify the existence of credentials at the corresponding route.

    - Validate the token received in the headers at the corresponding route.

    - Report requests received by the server via the terminal.

- Sign, verify, and decode JWT tokens.

- Capture and return any errors that occur on the server.

- Encrypt passwords when registering new users.

## How to use (Dev Mode)
1. Before anything, to use this app you should have Postgres installed and run the sql scripts in [**scripts.sql**](./backend-soft-jobs/src/database/scripts.sql).
    
2. Clone, or download the repository.

3. Create a .env file in the backend directory following the example, in this file, you can change the server PORT, the postgres credentials and configuration, and the JWT SECRET.

4. In two different terminals, open both backend and frontend directories as root paths.

5. Run the following command:

    ```bash
    $ npm install
    ```
    
6. After, start the app with the following command:

    ```bash
    $ npm run dev
    ```

7. Visit **http://localhost:5173** to see the home page. This page allow you to:
    - Register a user.
    - Login with an existing user.
    - Logout your user session.
    - See a profile page with some of your user data.
    - *This functionalities at the frontend were not developed by me.

<h4 style="color: lime; font-style: italic;">> Thank you for reading this README.</h4>