const Fs = require("fs");

const teardown = async () => {
    console.log("\n+--------------------------------------+");
    console.log("| Starting Test Teardown               |");
    console.log("+--------------------------------------+\n");
    global.Server.close();
    console.log("# Closing Ganache server");
    Fs.unlinkSync("./setup/truffle/build/contracts/Migrations.json");
    console.log("# Removing Contract Artifacts");
    console.log("\n+--------------------------------------+");
    console.log("| Test Teardown Successful             |");
    console.log("+--------------------------------------+\n");
};

module.exports = teardown;
