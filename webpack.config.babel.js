//======================================================================================================================
//Imports:
//* webpackCommonConfiguration - 
//* webpackDevelopmentConfiguration -
//* webpackTestingConfiguration - 
//* webpackProductionConfiguration -
//* webpackMerge - 
//======================================================================================================================
import webpackCommonConfiguration from './webpack.com';
import webpackDevelopmentConfiguration from './webpack.dev';
import webpackTestingConfiguration from './webpack.tst';
import webpackProductionConfiguration from './webpack.pro';
import webpackMerge from 'webpack-merge';

const TARGET_ENVIRONMENT = process.env.npm_lifecycle_event;
const TARGET_ENVIRONMENT_CONFIGURATION = (() => {
    switch (TARGET_ENVIRONMENT) {
        case 'start':
            return webpackDevelopmentConfiguration;
        case 'test':
            return webpackTestingConfiguration;
        case 'build':
            return webpackProductionConfiguration;
        default:
            return {};
    }
})();

export default function(env, argv) {
    return webpackMerge(webpackCommonConfiguration, TARGET_ENVIRONMENT_CONFIGURATION);
}