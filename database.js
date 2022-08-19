var mysql = require('mysql');

//create connection DATABASE
const conn = mysql.createConnection({
    host:'oth5z7gwp636.ap-southeast-2.psdb.cloud',
    user:'9pm91k4psps3',
    password:'pscale_pw_yqNhJ_aTLqmjiA9wPmviasUr7iXkw8u07_BHjwB07Lg',
    database:'testapi',
    ssl: true
});
//IF SUCCESFUL U CAN SEE THIS MESSAGE FROM FROM CONSOLE
conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql connection OK!');
});

module.exports = conn;
