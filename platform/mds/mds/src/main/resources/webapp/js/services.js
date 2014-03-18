(function () {

    'use strict';

    /**
    * Creates the entity service that will connect to the server and execute appropriate
    * methods on an entity schema.
    */
    angular.module('entityService', ['ngResource']).factory('Entities', function ($resource) {
        return $resource(
            '../mds/entities/:id/:action/:param/:params',
            { id: '@id' },
            {
                getAdvanced: { method: 'GET', params: { action: 'advanced' } },
                getAdvancedCommited: { method: 'GET', params: { action: 'advancedCommited' } },
                getSecurity: { method: 'GET', params: { action: 'security' } },
                getWorkInProggress: { method: 'GET', params: { action: 'wip' }, isArray: true },
                getFields: { method: 'GET', params: {action: 'fields' }, isArray: true },
                getField: { method: 'GET', params: {action: 'fields'} },
                getDisplayFields: { method: 'GET', params: {action: 'displayFields'}, isArray: true },
                getEntity: { method: 'GET', params: {action: 'getEntity'}  },
                draft: { method: 'POST', params: {action: 'draft' } },
                abandon: { method: 'POST', params: {action: 'abandon' } },
                commit: { method: 'POST', params: {action: 'commit' } },
                update: { method: 'POST', params: {action: 'update' } }
            }
        );
    });

    angular.module('instanceService', ['ngResource']).factory('Instances', function ($resource) {
        return $resource(
            '../mds/instances/:id/:action/:param',
            { id: '@id' },
            {
                newInstance: { method: 'GET', params: { action: 'new' }},
                selectInstance: { method: 'GET', params: { action: 'instance' }},
                deleteInstance: { method: 'DELETE', params: { action: 'delete' }},
                revertInstanceFromTrash: { method: 'GET', params: {action: 'revertFromTrash'}}
            }
        );
    });

    angular.module('historyService', ['ngResource']).factory('History', function ($resource) {
            return $resource(
                '../mds/instances/:entityId/:instanceId/:action/:param',
                {
                    entityId: '@entityId',
                    instanceId: '@instanceId'
                },
                {
                    getHistory: { method: 'GET', params: { action: 'history' } },
                    getPreviousVersion: { method: 'GET', params: { action: 'previousVersion' }, isArray: true },
                    revertPreviousVersion: { method: 'GET', params: { action: 'revert' } }
                }
            );
        });

    angular.module('mdsSettingsService', ['ngResource']).factory('MdsSettings', function ($resource) {
        return $resource(
            '../mds/settings/:action/', {},
            {
                importFile: { method: 'POST', params: {action: 'importFile' } },
                exportData: { method: 'POST', params: {action: 'exportData' } },
                saveSettings: { method: 'POST', params: {action: 'saveSettings' } },
                getSettings: { method: 'GET', params: { action: 'get' } }
            }
        );
    });

    angular.module('roleService', ['ngResource']).factory('Roles', function($resource) {
        return $resource('../websecurity/api/web-api/roles');
    });

    angular.module('userService', ['ngResource']).factory('Users', function($resource) {
        return $resource('../websecurity/api/users');
    });
}());
