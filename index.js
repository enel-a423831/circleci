/************/
/* index.js */
/************/

var mywssocks = require('./modules/mywssocks')({
    port:    (process.env.PORT || 5000),
    logTime: (process.env.PORT ? false : true),
    debug:   (process.env.PORT ? false : true),
    dump:    (process.env.PORT ? false : true)
});

/******************/
/* index.js : EOF */
/******************/

