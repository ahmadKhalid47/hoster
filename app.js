let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("yess");
});

app.listen(8000, () => {
  console.log("ok");
});
