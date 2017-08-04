Espo.define('vitel:views/task/record/edit-side', 'views/record/edit-side', function (Dep) {

    return Dep.extend({
        defaultPanelDefs: {
            name: 'default',
            label: false,
            view: 'vitel:views/task/record/panels/side',
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
