Ext.regApplication({
    name: 'App',
    lastYOffset: 0,
    launch: function() {
        var items = [],
            fieldCfg;
            
        fieldCfg = {
            xtype: 'textfield',
            listeners: {
                focus: function (field) {
                    var form = field.up('form'),
                        yOffset = field.el.getOffsetsTo(form.scrollEl)[1];
                    
                    if (yOffset > this.lastYOffset) {
                        form.scroller.scrollTo({
                            x: 0,
                            y: yOffset
                        });
                    }
                    
                    this.lastYOffset = yOffset;
                },
                scope: this
            }
        };
        
        for (var i = 1; i <= 20; i++) {
            items.push(Ext.apply(fieldCfg.clone(), {
                placeHolder: 'Field ' + i
            }));
        }
        
        new Ext.form.FormPanel({
            fullscreen: true,
            scroll: true,
            items: {
                xtype: 'fieldset',
                items: items
            }
        });
    }
});