const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const port = 5000;

app.get("/post", (req, res) => {
    const post = {
        title: "Aprender NodeJS",
        category: "JavaScript",
        body: "Este arquivo vai te ajudar a aprender NodeJS",
        comments: 4
    };
    res.render("blogpost", { post });
});

app.use(express.static('public'));

app.get("/dashboard", (req, res) => {

    const items = ["Item A", "Item B", "Item C"];

    res.render('dashboard', { items });
});

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender NodeJS",
            category: "JavaScript",
            body: "Este arquivo vai te ajudar a aprender NodeJS",
            comments: 4
        },
        {
            title: "Aprender C#",
            category: "C#",
            body: "Este arquivo vai te ajudar a aprender C#",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Este arquivo vai te ajudar a aprender Python",
            comments: 4
        }
    ];
    res.render('blog', { posts });
});

app.get('/', (req, res) => {

    const user = {
        name: 'Carlos',
        surname: 'Israel',
        age: 30,
    };

    const auth = false;

    const approved = false;

    res.render('home', { user: user, auth, approved });
});

app.listen(port, () => console.log(`Running on port ${port}!`))