const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/',  async (req, res) => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const users = await response.json();
    res.json(users);
    /*res.send('users');
    console.log(users);*/
});

module.exports = router;
