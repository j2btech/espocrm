/****************************************************************************************
* This file is part of the tryouts of EspoCRM
* 
* This will extend the current functionalities for Task management, adding the ability
* to create quotations and answer to Emails. This is a tryout in progress.
*****************************************************************************************/
Espo.define('vitel:views/task/record/edit', 'views/record/edit', function (Dep) {

    return Dep.extend({
		
		setup: function() {
			// Call the parent setup function and extend the events Hash
			Dep.prototype.setup.call(this);
			_.extend(this.events, Dep.prototype.events);
		},
		
		fromQuotation : false,
		
        sideView: 'vitel:views/task/record/edit-side',
		
        events: {
            'click button[data-action="quotate"]': function (view) {
				// First version of quotation and opportunity creation after saving a Task
				if(this.isNew) {
					if(this.save()) {
						this.fromQuotation = true;
					}
				}
			}
		},
		
		afterSave: function () {
			Dep.prototype.afterSave.call(this);
            // For now, just redirect to the Invision project
			if(this.fromQuotation) {
				location.href = 'https://projects.invisionapp.com/share/RXCDEJZMP#/screens/241268442';
			}
        },
        
    });
});
