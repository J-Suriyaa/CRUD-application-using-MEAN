const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('/inser.pug', {
        //viewTitle: 'Insert Employee'
    });
});

module.exports = router;