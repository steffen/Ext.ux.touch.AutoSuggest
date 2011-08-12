Ext.regApplication({
    name: 'App',
    launch: function() {
        var items = [],
            fieldCfg;
            
        fieldCfg = {
            xtype: 'textfield',
            listeners: {
                focus: function (field) {
                    var form = field.up('form');
                    
                    form.scroller.scrollTo({
                        x: 0,
                        y: field.el.getOffsetsTo(form.scrollEl)[1]
                    });
                }
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