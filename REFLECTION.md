# Lab 12 Reflection

## 1. What is the difference between res.send() and res.sendFile()?

I learned that `res.send()` sends content directly from the server. I could use it for a short message, a small piece of HTML, or another simple response. The `res.sendFile()` method sends a complete file from my project. I used `res.sendFile()` in this lab because I needed to serve separate HTML pages.

## 2. Why is the path module helpful when serving files?

The `path` module helps my server build the complete location of a file. I used `path.join()` with `__dirname` so Node.js can find the files inside my `public` folder. A simple relative path might not work correctly if I start the application from a different folder.

## 3. How would I add another page?

To add a menu page, I would create a file named `menu.html` inside the `public` folder. Then I would add a GET route for `/menu` in `server.js`. I would use `res.sendFile()` and `path.join()` to serve the new file. Finally, I would restart the server and test <http://localhost:3000/menu> in my browser.

## My Biggest Challenge

My biggest challenge was understanding how the route in `server.js` connects to an HTML file. Working through this lab helped me understand that Express listens for a request, finds the route that matches the request, and sends the correct file back to the browser.

## What I Accomplished

I successfully created a working Express server with a home page and a contact page. I also practiced installing dependencies, starting a server, testing routes, and organizing files in a simple project structure.
