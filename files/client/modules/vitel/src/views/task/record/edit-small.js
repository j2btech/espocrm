Espo.define('vitel:views/task/record/edit-small', ['views/record/edit-small', 'vitel:views/task/record/edit'], function (Dep, Edit) {

    return Dep.extend({
        
        sideView: 'vitel:views/task/record/edit-side',
        
        populateDefaults: function () {
            Dep.prototype.populateDefaults.call(this);
            Edit.prototype.populateDefaults.call(this);
        }
    });
});
