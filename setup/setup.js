const Ganache = require("ganache-core");
const { exec } = require('child_process');

const isPortTaken = function(port, fn) {
    const net = require('net');
    const tester = net.createServer()
        .once('error', function (err) {
            if (err.code !== 'EADDRINUSE') return fn(err);
            fn(null, true)
        })
        .once('listening', function() {
            tester.once('close', function() { fn(null, false) })
                .close()
        })
        .listen(port)
};


const setup = async () => new Promise((ok, ko) => {
    global.Server = Ganache.server();
    let intervalId = setInterval(() => {
        isPortTaken(8545, (err, status) => {
            if (status === false) {
                Server.listen(8545, (err) => {
                    if (err)
                        ko(err);
                    exec("cd setup/truffle && ../../node_modules/.bin/truffle migrate --reset && cd ../..", (err, stdout, stderr) => {
                        if (err)
                            ko(err);
                        if (stdout)
                            console.log(stdout);
                        if (stderr)
                            console.error(stderr);
                        ok();
                    });
                });
                clearInterval(intervalId);
            } else {
                console.warn("Port 8545 is taken, waiting ...");
            }
        })
    }, 5000);

});

module.exports = setup;
