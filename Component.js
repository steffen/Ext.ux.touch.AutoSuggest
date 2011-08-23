Ext.override(Ext.Component, {
    showBy: function(alignTo, animation, allowSides, anchor, offset) {
        if (!this.floating) {
            return this;
        }

        if (alignTo.isComponent) {
            alignTo = alignTo.el;
        }
        else {
            alignTo = Ext.get(alignTo);
        }

        this.x = 0;
        this.y = 0;

        this.show(animation);

        if (anchor !== false) {
            if (!this.anchorEl) {
                this.anchorEl = this.el.createChild({
                    cls: 'x-anchor'
                });
            }
            this.anchorEl.show();            
        }
        
        // OVERRIDE: allow custom offset
        offset = offset != undefined ? offset : 20;
        this.alignTo(alignTo, allowSides, offset);
    }
});