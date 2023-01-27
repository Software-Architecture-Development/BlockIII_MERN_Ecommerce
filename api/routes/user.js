const router = require("express").Router();
//testing api
router.get("/userget", (req, res) => {
    res.send("success");
});

router.post("/userpost", (req, res) => {
    const username = req.body.usename;
    console.log(username);
});

module.exports = router;