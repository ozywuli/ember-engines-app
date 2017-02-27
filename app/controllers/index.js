import Ember from 'ember';

export default Ember.Controller.extend({

    init() {
        console.log('index');
    },

    youtubeModalService: Ember.inject.service('youtube-modal-service'),

    actions: {
        openModal(item) {
            this.get('youtubeModalService').openVideoModal(item);
        }
    }

});
