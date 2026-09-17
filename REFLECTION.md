# Lab 1 Reflection Questions

## 1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?

res.send() sends content directly in the response. I could use it to send simple text, HTML written directly in my server file, or other small responses. res.sendFile() sends an actual file from my computer or project folder. In this lab, I used res.sendFile() because the assignment required me to serve separate HTML files.

## 2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like public/index.html?

The path module helps create a complete and reliable file path. Using path.join() with __dirname tells Node.js exactly where the file is located. If I only used a relative path like public/index.html, the server might not find the file if the application is started from a different working directory.

## 3. How would you add a third page, such as a menu page, to this server?

I would first create a new menu.html file inside the public folder. Then I would add a new GET route in server.js for /menu. Inside that route, I would use res.sendFile() and path.join() to send the menu.html file. Finally, I would restart the server and test http://localhost:3000/menu in the browser.
