Espo.define('vitel:views/email/detail', 'views/email/detail', function (Dep) {
	
	return Dep.extend({
		setup: function() {
			Dep.prototype.setup.call(this);
			
			/*this.menu.dropdown.push({
				label: 'Crear Oportunidad',
				action: 'createOpportunity',
				acl: 'edit',
				aclScope: 'Opportunity'
			});*/
			
			this.menu.dropdown = this.menu.dropdown.filter(function(item) {
				return item.aclScope != 'Case' && item.aclScope != 'Lead';
			});
		},
		
		actionCreateOpportunity: function () {
			var attributes = {};
			
			attributes.description = '[' + this.model.get('name') + '](#Email/view/' + this.model.id + ')';
			attributes.name = this.translate('Email', 'scopeNames') + ': ' + this.model.get('name');
			
			var viewName = this.getMetadata().get('clientDefs.Opportunity.modalViews.detail') || 'Modals.Edit';
			
			this.notify('Loading...');
			this.createView('quickCreate', viewName, {
				scope: 'Opportunity',
				attributes: attributes,
			}, function (view) {
				view.render();
				view.notify(false);
				view.once('after:save', function() {
					view.close();
				}.bind(this));
			}.bind(this));
		},
	});
});