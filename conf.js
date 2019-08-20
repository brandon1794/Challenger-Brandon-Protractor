exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    params: {
        url: 'https://edition.cnn.com/'
    },

    specs: ['TestFolder/TestChallenge.js'],

    capabilities: {
        'browserName': 'chrome'
    }
}