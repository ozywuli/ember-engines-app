import Ember from 'ember';

export default Ember.Controller.extend({

    youtubeModalService: Ember.inject.service('youtube-modal-service'),

    actions: {
        openModal(item) {
            this.get('youtubeModalService').openVideoModal(item);
        }
    }

});
