# Lab 12: Build a Basic Express.js Server

This is my Lab 12 project for building a basic Express.js server. I created a simple website for a fictional coffee shop called The Daily Grind. I used Node.js and Express to start the server, create routes, and send HTML files to the browser.

My server runs on port 3000. The home route (`/`) displays the home page, and the contact route (`/contact`) displays the contact page. Both HTML files are stored in the `public` folder. I used the built-in `path` module and `res.sendFile()` so Express can find and serve each file correctly.

I kept the code simple and beginner-friendly so I can understand how the server, routes, and HTML pages work together.

## How I Run the Project

First, I open the project folder in VS Code. Then I open the terminal and install the project dependencies:

```bash
npm install
```

Next, I start the server:

```bash
npm start
```

After the server starts, I open these pages in my browser:

- Home page: <http://localhost:3000/>
- Contact page: <http://localhost:3000/contact>

To stop the server, I return to the terminal and press `Control + C`.

## What I Learned

I learned how to set up a Node.js project, install Express, create a server, build GET routes, and serve separate HTML files. I also learned why the `path` module is useful when Express needs the complete location of a file.

**Author:** Dr. Chantell McDowell  
**Program:** Per Scholas
