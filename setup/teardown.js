const teardown = async () => {
    global.Server.close();
};

module.exports = teardown;
