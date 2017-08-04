Espo.define('vitel:views/opportunity/record/edit-side', 'views/record/edit-side', function (Dep) {

    return Dep.extend({

        //mode: 'edit',

        defaultPanelDefs: {
            name: 'default',
            label: false,
            view: 'vitel:views/opportunity/record/panels/side',
            options: {
                fieldList: [
                    {
                        name: 'assignedUser',
                        view: 'views/fields/assigned-user'
                    },
                    {
                        name: 'teams',
                        view: 'views/fields/teams'
                    }
                ]
            }
        },

    });
});
