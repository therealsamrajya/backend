import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Aa joke",
      content: "This is aa joke",
    },
    {
      id: 3,
      title: "Aaa joke",
      content: "This is aaa joke",
    },
    {
      id: 4,
      title: "Aaaa joke",
      content: "This is aaaa joke",
    },
    {
      id: 5,
      title: "Aaaa joke",
      content: "This is aaaaa joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
