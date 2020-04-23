const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ['./src'],
            alias: {
                '@contexts': './src/contexts',
                '@pages': './src/pages',
                '@components': './src/components',
                '@assets': './src/assets',
                '@helpers': './src/helpers',
                '@styles': './src/styles',
                '@layouts': './src/layouts',
                '@services': './src/services',
                '@fixtures': './__fixtures__',
                '@mocks': './__mocks__',
                '@root': './src',
                '@hooks': './src/hooks',
                '@integrations': './src/integrations',
            },
        },
    ],
    'transform-es2015-modules-commonjs',
    ['babel-plugin-styled-components', {ssr: false, displayName: false}],
];

module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current',
                    },
                },
            ],
            '@babel/preset-typescript',
            'module:metro-react-native-babel-preset',
            'module:react-native-dotenv',
        ],
        plugins,
    };
};
