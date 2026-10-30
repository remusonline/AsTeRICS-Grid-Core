module.exports = {
    targets: {
        ios: '12'
    },
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: '3.46'
            }
        ]
    ]
};