**Triage App**

The app is implemented with 3 languages, Html CSS and Javascript. I used React for the frontend development and some Javascript libraries for the Backend. I also Used PostgreSql for the Data base.

First of all, I created a Database called hospital_triage in Postgresql( My postgreSql run on port 3000). Then I use the Sequelize Library to connect my database to my Backend server. I used Axios for the HTTPS request( Post, Get, put….). I also Used Cors to connect my Frontend project who run on port 3001 to connect to my Server who run on port 5000. And at the end express also helped me for the server.

**Description of the App:**

When you start the react server you re welcomed by this page!

![screenshot0](https://github.com/Riperjump/Triage-app/blob/main/img/Screenshot%20(339).png)


When you click on the button you ll have a page to register in the queue of the triage system.

![screenshot1](https://github.com/Riperjump/Triage-app/blob/main/img/Screenshot%20(340).png)


After got registered you will be redirected to a page that shown the approximately wait time!

![screenshot2](https://github.com/Riperjump/Triage-app/blob/main/img/Screenshot%20(341).png)


Now for the admin you can follow every steps stated on top. But when you ll get asked to register to the triage app instead enter “admin” for the name and “adm” for the code you will instead get redirected to the admin page when you can see every patients in a sorted queue( to make the most severe patient a t the top of the list) The admin can now chose to treat a patient by pressing the button.

![screenshot2](https://github.com/Riperjump/Triage-app/blob/main/img/Screenshot%20(342).png)


**How to install the app?**

After downloading all the files on Github, go to the terminal and to the directory of the server the type this command npm run dev

![screenshot3](https://github.com/Riperjump/Triage-app/blob/main/img/Screenshot%20(343).png)


After go the Client directory and start the react app by typing the command npm start

![screenshot4](https://github.com/Riperjump/Triage-app/blob/main/img/Screenshot%20(344).png)


Your server is now functional.
