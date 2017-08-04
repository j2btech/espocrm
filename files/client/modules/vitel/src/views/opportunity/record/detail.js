Espo.define('vitel:views/opportunity/record/detail', 'views/record/detail', function (Dep, ViewRecordHelper) {

    return Dep.extend({

        template: 'vitel:record/detail',
        
        sideView: 'vitel:views/opportunity/record/detail-side',

        extraView: 'vitel:views/opportunity/quotations',

        showPanel: function (name) {
            this.recordHelper.setPanelStateParam(name, 'hidden', false);

            var middleView = this.getView('middle');
            if (middleView) {
                middleView.showPanel(name);
            }

            if (extraView) {
                extraView.showPanel(name);
            }

            var bottomView = this.getView('bottom');
            if (bottomView) {
                if ('showPanel' in bottomView) {
                    bottomView.showPanel(name);
                }
            }

            var sideView = this.getView('side');
            if (sideView) {
                if ('showPanel' in sideView) {
                    sideView.showPanel(name);
                }
            }
        },

        hidePanel: function (name) {
            this.recordHelper.setPanelStateParam(name, 'hidden', true);

            var middleView = this.getView('middle');
            if (middleView) {
                middleView.hidePanel(name);
            }

            if (extraView) {
                extraView.hidePanel(name);
            }

            var bottomView = this.getView('bottom');
            if (bottomView) {
                if ('hidePanel' in bottomView) {
                    bottomView.hidePanel(name);
                }
            }

            var sideView = this.getView('side');
            if (sideView) {
                if ('hidePanel' in sideView) {
                    sideView.hidePanel(name);
                }
            }
        },

        createExtraView: function () {
            var el = this.options.el || '#' + (this.id);
            this.createView('extra', this.extraView, {
              model: this.model,
              scope: this.scope,
              type: this.type,
              el: el + ' .extra',
              inlineEditDisabled: this.inlineEditDisabled,
              recordHelper: this.recordHelper,
              recordViewObject: this
            }, function (view) {
                if (this.isRendered()) {
                    view.render();
                }
            }, this, false);
        },

        build: function (callback) {
            if (!this.sideDisabled && this.sideView) {
                this.createSideView();
            }

            if (this.middleView) {
                this.createMiddleView(callback);
            }

            if (this.extraView) {
                this.createExtraView(callback);
            }

            if (!this.bottomDisabled && this.bottomView) {
                this.once('after:render', function () {
                    this.createBottomView();
                }, this);
            }
        },

    });

});