module.exports = function (params) {
    return ({
        parser: params.file.extname === '.sss' ? 'sugarss' : false,
        plugins: {
            'postcss-import': { root: params.file.dirname },
            'postcss-cssnext': params.options.cssnext ? params.options.cssnext || {} : false,
            autoprefixer: params.env === 'production' ? params.options.autoprefixer || {} : false,
            cssnano: params.env === 'production' ? params.options.cssnano || {} : false,
        },
    });
};
