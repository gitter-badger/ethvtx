module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [
        "sources/**/*.ts",
        "!sources/test_tools/**/*.ts",
        "!sources/index.ts"
    ]
};
