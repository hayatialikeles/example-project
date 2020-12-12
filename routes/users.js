var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:uid/:token', function(req, res, next) {
    res.json({
      state:true,
      data:[
        {
          id:1,
          name:"ahmet",
          surname:'Deniz'
        },
        {
          id:2,
          name:"Mehmet",
          surname:'Deniz'
        },
        {
          id:3,
          name:"Yılmaz",
          surname:'Deniz'
        },
      ]
    });
});

module.exports = router;
