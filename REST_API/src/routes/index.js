const { Router  } = require('express');
const router = Router();

//routes
router.get('/test', (req, res) => {
    const data = {
        'name':'diego',
        'github':'diegodavidq'
    };
    res.json(data);
} );

module.exports = router;