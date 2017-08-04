Espo.define('vitel:views/opportunity/detail', 'crm:views/opportunity/detail', function (Dep) {

    return Dep.extend({
        
        sideView: 'vitel:views/opportunity/detail-side',
        
        recordView: 'vitel:views/opportunity/record/detail',
/*
        relatedAttributeMap: {
            'contacts': {
                'accountId': 'accountId',
                'accountName': 'accountName'
            },
        },

        relatedAttributeFunctions: {
            'documents': function () {
                var data = {};
                if (this.model.get('accountId')) {
                    data['accountsIds'] = [this.model.get('accountId')]
                }
                return data;
            }
        },

        selectRelatedFilters: {
            'contacts': {
                'account': function () {
                    if (this.model.get('accountId')) {
                        return {
                            field: 'accountId',
                            type: 'equals',
                            value: this.model.get('accountId'),
                            valueName: this.model.get('accountName')
                        };
                    }
                },
            },
            'documents': {
                'accounts': function () {
                    var accountId = this.model.get('accountId');
                    if (accountId) {
                        var nameHash = {};
                        nameHash[accountId] = this.model.get('accountName');
                        return {
                            field: 'accounts',
                            type: 'linkedWith',
                            value: [accountId],
                            nameHash: nameHash
                        };
                    }
                },

            },
        },
*/
    });
});
