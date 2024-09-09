    const express = require("express");
    const app = express();
    const port = 8887;

    const bodyParser = require("body-parser");
    app.use(bodyParser.json());

    const cors = require("cors");
    app.use(cors());

    let userList = [];
    let shoesList = [
        { id: 1, size: 42, brand: "Nike", color: "Black" },
        { id: 2, size: 34, brand: "Adidas", color: "Blue" },
        { id: 3, size: 40, brand: "Skechers", color: "Brown" },
    ];

    app.post("/login", (req, res) => {
        const { username, password } = req.body;
        const user = userList.find(
            (u) => u.username === username && u.password === password
        );
        if (user) 
        {
            res.json({ message: `${username} Logged in successfully` });
        } 
        else 
        {
            res.status(401).json({ message: "Invalid username or password" });
        }
    });

    app.post("/signup", (req, res) => {
        const { username, password } = req.body;
        if (userList.find((uname) => uname.username === username)) 
        {
            res.json({ message: "Username already exists" });
        } 
        else 
        {
            userList.push({ username, password });
            res.json({ message: `${username} successfully registered` });
        }
    });


    app.get("/shoes", (req, res) => {
        res.json(shoesList);
    });

    app.post("/shoes", (req, res) => {
        const newShoe = req.body;
        if (shoesList.length) 
        {
            newShoe.id = shoesList[shoesList.length - 1].id + 1;
        } 
        else 
        {
            newShoe.id = 1;
        }
        shoesList.push(newShoe);
        res.json(newShoe);
    });


    app.put("/shoes/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const updated = req.body;
        const index = shoesList.findIndex((shoe) => shoe.id === id);

        if (index !== -1) 
        {
            shoesList[index] = { id, ...updated };
            res.json(shoesList[index]);
        } 
    });

    app.delete("/shoes/:id", (req, res) => {
        
        const id = parseInt(req.params.id);
        const index = shoesList.findIndex((shoe) => shoe.id === id);

        if (index !== -1) 
        {
            const deletedShoe = shoesList.splice(index, 1);
            res.json(deletedShoe[0]);
        } 
    });

    app.listen(port, () => { console.log(`Server running at http://localhost:${port}/`); });
