define(function(require) {
    'use strict';

    var utils = require('./utilities');

    /**
     * API
     *
     * @namespace
     * @name api
     */
    return {
        setAuthFlow: utils.setAuthFlow,
        setBaseUrl:  utils.setBaseUrl,
        setNotifier: utils.setNotifier,

        annotations: require('./api/annotations')(),
        catalog: require('./api/catalog')(),
        documents: require('./api/documents')(),
        files: require('./api/files')(),
        folders: require('./api/folders')(),
        followers: require('./api/followers')(),
        groups: require('./api/groups')(),
        institutions: require('./api/institutions')(),
        locations: require('./api/locations')(),
        metadata: require('./api/metadata')(),
        profiles: require('./api/profiles')(),
        trash: require('./api/trash')()
    };

});
