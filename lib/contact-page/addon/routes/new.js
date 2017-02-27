import Ember from 'ember';

// const { inject: { service } } = Ember;

export default Ember.Route.extend({

    // siteState: service(),
    siteState: Ember.inject.service('site-state'),

    model() {
        console.log(this.get('siteState.test'));
        console.log('wtf');
    }
});
