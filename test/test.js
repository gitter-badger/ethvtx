const expect = require('chai').expect;
const Ganache = require("ganache-core");
const { exec } = require('child_process');
let Server;

describe('VortΞx', function() {

    describe("Init", function() {

        it("Starts an instance of ganache-core", (done) => {
            Server = Ganache.server();
            Server.listen(8545, (err) => {
                done(err);
            });
        });

        it("Migrates contracts on temporary ganache session", (done) => {
            exec("cd test/truffle && ../../node_modules/.bin/truffle migrate --reset && cd ../..", (err, stdout, stderr) => {
                console.log(stdout);
                console.error(stderr);
                done(err);
            });
        }).timeout(100000);

    });

    describe("Cleaning ...", () => {

        it("Stops the previously started server", () => {
            Server.close();
        });

    })

});
