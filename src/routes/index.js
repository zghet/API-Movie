//routes
const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.json({"Titulo":"Hello World"});
})

module.exports = router;
