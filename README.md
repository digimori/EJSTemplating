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
