import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

console.log(config);


const { modulePrefix } = config;

const Eng = Engine.extend({
    modulePrefix,
    Resolver,
    dependencies: {
        externalRoutes: [
            'index',
            'about'
        ],

        services: [
            'site-state'
        ]

    }
});

console.log(Eng);

loadInitializers(Eng, modulePrefix);

export default Eng;
