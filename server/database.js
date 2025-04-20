const {Client} = require("pg");

//pleasant-love
const client = new Client({
    database: "railway",
    user: "postgres",
    password: "tPaPqQzsXkAdQeTiqiCjtLCgRpoOgKPF",
    host: "yamanote.proxy.rlwy.net",
    port: "50234"
});

// enthusiastic-communication
// const client = new Client({
//     database: "railway",
//     user: "postgres",
//     password: "qNTPUQCtZvwrIzqWLBYDmyRDtOJvblCT",
//     host: "shuttle.proxy.rlwy.net",
//     port: "41295"
// });

client.connect();

client.query(`Select * from users`, (err, res) => {
    if (!err){
        console.log(res.rows);
    } else {
        console.log(err.message)
    }
    client.end;
})