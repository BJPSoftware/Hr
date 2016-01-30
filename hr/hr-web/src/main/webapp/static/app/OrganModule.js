/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Hr.OrganModule', {
    extend: 'Hr.BogusModule',

    init: function() {

        this.launcher = {
            text: '组织架构',
            iconCls: 'bogus',
            handler: function() {
                return false;
            },
            menu: {
                items: []
            }
        };
        this.launcher.menu.items.push({
            text: '学校管理 ',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: "schoolinfo"
        });
        this.launcher.menu.items.push({
            text: '校区管理 ',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: "schoolarea"
        }); 
        this.launcher.menu.items.push({
            text: '部门管理 ',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: "depart"
        }); 
        this.launcher.menu.items.push({
            text: '职位管理 ',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: "job"
        });
    }
});