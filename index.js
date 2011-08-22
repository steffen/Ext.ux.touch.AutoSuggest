Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

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
                    
                    panel = new Ext.Panel({
                        floating: true,
                        width: window.innerWidth - 18 * 2 - 2,
                        height: 200,
                        // html: 'hello',
                        items: {
                            xtype: 'list',
                            itemTpl: '{firstName} {lastName}',
                            store: new Ext.data.Store({
                                model: 'Contact',
                                data: [
                                    {firstName: 'Tommy', lastName: 'Maintz'},
                                    {firstName: 'Ed', lastName: 'Spencer'},
                                    {firstName: 'Jamie', lastName: 'Avins'},
                                    {firstName: 'Aaron', lastName: 'Conran'},
                                    {firstName: 'Dave', lastName: 'Kaneda'}
                                ]
                            })
                        }
                    });
                    
                    // Ext.defer(function () {
                        panel.showBy(field, false, false, false);
                    // }, 500);
                },
                keyup: function (field) {
                    // this.panel = new Ext.Panel({
                    //     floating: true,
                    //     width: window.innerWidth - 18 * 2,
                    //     height: 200,
                    //     html: 'hello'
                    // });
                    // 
                    // this.panel.showBy(field, false, false, false);
                },
                blur: function () {
                    // if (this.panel) {
                    //     this.panel.destroy();
                    // }
                    
                },
                // keyup: function () {
                //     
                // },
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