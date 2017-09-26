
import path from 'path';

export default {
    context: __dirname,
    entry: {
        scrootinEyes: [path.resolve(__dirname, 'lib/scrootinEyes.js')]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};