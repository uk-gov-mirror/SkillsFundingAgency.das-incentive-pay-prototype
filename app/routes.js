const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

var _myData = {
    "appliedApprenticesSet": false,
    "includeValidation": "true",
    "apprentices": require(__dirname + '/data/apprentices.json'),
    "apprentices2": require(__dirname + '/data/apprentices2.json'),
    "apprentices3": require(__dirname + '/data/apprentices3.json')
}


// Sort apprentices
_myData.apprentices.list.sort(function(a,b){
    if (a.name.toUpperCase() < b.name.toUpperCase()){
        return -1
    } else if(a.name.toUpperCase() > b.name.toUpperCase()){
        return 1
    }
    return 0;
});
_myData.apprentices2.sort(function(a,b){
    if (a.name.toUpperCase() < b.name.toUpperCase()){
        return -1
    } else if(a.name.toUpperCase() > b.name.toUpperCase()){
        return 1
    }
    return 0;
});
_myData.apprentices3.sort(function(a,b){
    if (a.name.toUpperCase() < b.name.toUpperCase()){
        return -1
    } else if(a.name.toUpperCase() > b.name.toUpperCase()){
        return 1
    }
    return 0;
});


// var _testttt = [],
//     _months = {}
// _myData.apprentices2.forEach(function(_apprentice, index) {
//     function randomBoolean(_chance){
//         return Math.random() < _chance
//     }
//     if(randomBoolean(0.16)){
//         _apprentice.startdate = "February 2021"
//     } else {
//         if(randomBoolean(0.16)){
//             _apprentice.startdate = "March 2021"
//         } 
//     }
//     _testttt.push(_apprentice)
//     _months[_apprentice.startdate] = (_months[_apprentice.startdate] || 0) + 1
// });
// console.log(JSON.stringify(_testttt)) 
// // console.log(_months) 

//Add commas to amounts
_myData.apprentices2.forEach(function(_apprentice, index) {
    _apprentice.amountCommas = _apprentice.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var _halfAmount = _apprentice.amount/2
    _apprentice.halfamountCommas = _halfAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
_myData.apprentices3.forEach(function(_apprentice, index) {
    _apprentice.amountCommas = _apprentice.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var _halfAmount = _apprentice.amount/2
    _apprentice.halfamountCommas = _halfAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});


require('./routes/1-0/v1.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/2-0/v2.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/3-0/v3.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/4-0/v4.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/5-0/v5.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/6-0/v6.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/7-0/v7.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/8-0/v8.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/9-0/v9.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/10-0/v10.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/mvs/mvs.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/11-0/v11.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/12-0/v12.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/13-0/v13.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/14-0/v14.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/15-0/v15.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/15-0-fitz/v15-fitz.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/16-0/v16.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/17-0/v17.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/18-0/v18.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/19-0/v19.js')(router,JSON.parse(JSON.stringify(_myData)));
require('./routes/20-0/v20.js')(router,JSON.parse(JSON.stringify(_myData)));

module.exports = router
