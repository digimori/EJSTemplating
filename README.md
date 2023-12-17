# EJSTemplating

## How does EJS work?

- Code injection, very similar to what you've learned previously with Jinja in Python.
- Rendered into a .ejs file.
- Dynamic template rendering

```
// Example structure using a for loop:
<ul>
    <%for(let i = 0; i < items.length; i++>) { %>
        <li>
            <%= items[i] %>
        </li>
        <% } %>
</ul>
```

- To render this, much like Jinja with Django/Flask, we have to use a render method to serve it to the front end:
- First parameter is the page/file path that you want to serve.
- Second parameter is an object containing the data that you want to pass over (key-value pair).

```
// Example in index.js:
app.post("/submit", (req, res) => {
    res.render("index.ejs", {
        name: req.body['name'] // req.body is what's being sent over
    })
})

// Frontend in index.ejs:
<h1> Hello, <%= name %> // This is based on the key
```

## Installation:

- EJS Language support needs to be installed into your IDE/Code Editor
- Install it on the command line
- Create two folders, one for backend (index.js) and one for frontend (index.ejs)
- index.ejs MUST live in a folder named "views".

## EJS Syntax (Tags and more):

````
// Common tags:

<%= variable %> //  Interpreted as JS, will be an output (ie name: "digi", the variable will be replaced here with name and the output will be "digi")
<% console.log("Hello") %> // Executable JS code, interpreted in an ejs file - No output given in HTML
<%- <h1>Hello</h1>  %> // Render tag, renders HTML directly via interpretation
<%%  %%> // Escape EJS tag. So like showing code without it being executed as an example. Like what we're doing these notes in with the ```
<%# This is a comment %> // EJS Comments
<%- include("<FILE NAME)">) %>; // Includes, like in Django, inserting one file into another. So we can have a base template and partials.

````

### Further example of running JS in HTML via EJS:

```
// index.js:
let bowl = ["Apples", "Oranges", "Pears"];

app.get("/", (req, res) => {
    res.render("index.ejs", {fruits: bowl});
})

// index.ejs:
<ul>
    <% for(let i = 0; i < fruits.length; i++){ %>
        <li>
            <%= fruits[i] %>
        </li>
        <% } %>
</ul>
```

## EJS and Passing data:

- Passing data from server to client and vice-versa

```
// Server to EJS:
app.get("/", (req, res) => {
    res.render("index.ejs", {key: 'value'});
});

<h1>Hello, <%= key %></h1>
```

### Catching in EJS when there is no data to pass:

- We can mitigate if there's no data, such as if the data being pulled is corrupted, using locals

ie:

```
// index.js:
app.get("/", (req, res) =>{
    res.render("index.ejs"); //No data being passed to the frontend, only the page render
})

// index.ejs, we can use it where we potentially have no data:
<% if(locals.fruits) { %>
// List code or whatever you're rendering
<% } %>
```

- Locals can be set to anything you wish via res.locals = {data: whatever};
- This can be used to test the presence of data before you commit to the render like a fallback

### EJS > Server way around - Passing data:

- Example using a form:

```
// HTML:
<form action ="/submit" method="POST">
    <input type="text" name="lName">
    <input type="text" name="fName">
    <input type="submit" value="OK">

// app.post("/submit", (req,res) => {
    res.render("index.ejs", {
        name: req.body['fName']
    })
})

```

- REMEMBER: When doing if statements and the like, locals should be used for a form as it checks for existence first before running.

```
<% if (locals.numberOfLetters) %>
```

## Re-using EJS code with Partials and Layouts (includes and templating):

### Static Files:

- Files that don't change, go in public folders.

```
app.use(express.static("public")) // Tells the middleware to use the public folder to search for static files
```
