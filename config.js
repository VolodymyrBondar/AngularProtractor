exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['loginTest.js'],
    capabilities: {
        browserName: 'chrome'
    }
}