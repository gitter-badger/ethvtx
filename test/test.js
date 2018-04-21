const expect = require('chai').expect;
const Ganache = require("ganache-core");
const { exec } = require('child_process');
let Server;

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

describe('VortΞx', function() {

    describe("Init", function() {

        it("Starts an instance of ganache-core", (done) => {
            Server = Ganache.server();
            let intervalId = setInterval(() => {
                isPortTaken(8545, (err, status) => {
                    if (status === false) {
                        Server.listen(8545, (err) => {
                            done(err);
                        });
                        clearInterval(intervalId);
                    } else {
                        console.warn("Port 8545 is taken, waiting ...");
                    }
                })
            }, 5000);
        }).timeout(125000);

        it("Migrates contracts on temporary ganache session", (done) => {
            exec("cd test/truffle && ../../node_modules/.bin/truffle migrate --reset && cd ../..", (err, stdout, stderr) => {
                console.log(stdout);
                console.error(stderr);
                done(err);
            });
        }).timeout(120000);

    });

    describe("Cleaning ...", () => {

        it("Stops the previously started server", () => {
            Server.close();
        });

    })

});
