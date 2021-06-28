const express = require("express");
const cors = require("cors");
const Users = require("./firebaseConfig");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await Users.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  await Users.add(data);
  res.send({ msg: "User Added" });
});

app.post("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  await Users.doc(id).update(req.body);
  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await Users.doc(id).delete();
  res.send({ msg: "User Deleted" });
});

app.listen(4000, () => console.log("Up & Running"));
