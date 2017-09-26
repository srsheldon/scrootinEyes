import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};