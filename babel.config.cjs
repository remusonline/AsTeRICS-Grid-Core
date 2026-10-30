module.exports = {
    targets: {
        ios: '12'
    },
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: '3.46',
                bugfixes: true
            }
        ]
    ]
};