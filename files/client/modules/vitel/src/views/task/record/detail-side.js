Espo.define('vitel:views/task/record/detail-side', 'views/record/detail-side', function (Dep) {

    return Dep.extend({

        defaultPanelDefs: {
            name: 'default',
            label: false,
            view: 'vitel:views/task/record/panels/default-side',
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