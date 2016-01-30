Ext.define('Hr.system.SysUser', {
    extend: 'Ext.grid.Panel',
    border: false,
    forceFit: true,
    autoHeight: true,
    autoWidth: true,
    frame: true,
    layout: 'fit',
    columnLines: true,
    loadMask: true,
    al: true, // 自动加载
    viewConfig: {
        stripeRows: true
    },
    // selModel : Ext.create('Ext.selection.CheckboxModel'),
    noPagging: false,
    operBar: {}, // 操作栏

    initComponent: function() {
        this.store = new Ext.data.Store({
            fields: [{
                name: 'company'
            }, {
                name: 'price',
                type: 'float'
            }, {
                name: 'change',
                type: 'float'
            }, {
                name: 'pctChange',
                type: 'float'
            }]
        });
        this.columns = [
            new Ext.grid.RowNumberer(), {
                text: "Company",
                width: 30,
                sortable: true,
                dataIndex: 'company'
            }, {
                text: "Price",
                width: 30,
                sortable: true,
                renderer: Ext.util.Format.usMoney,
                dataIndex: 'price'
            }, {
                text: "Change",
                width: 30,
                sortable: true,
                dataIndex: 'change'
            }, {
                text: "% Change",
                width: 30,
                sortable: true,
                dataIndex: 'pctChange'
            }
        ];

        this.tbar = [{
                xtype: 'button',
                text: '添加到表单',
                ref: 'gridInsertF',
                iconCls: 'table_add'
            }, {
                xtype: 'button',
                text: '添加',
                ref: 'gridInsert',
                iconCls: 'table_add'
            }, {
                xtype: 'button',
                text: '编辑',
                ref: 'gridEdit',
                iconCls: 'table_remove',
                disabled: true
            }, {
                xtype: 'button',
                text: '删除',
                ref: 'gridDelete',
                iconCls: 'table_remove'
            }, {
                xtype: 'button',
                text: '保存',
                ref: 'gridSave',
                iconCls: 'table_save'
            }],

            //this.tbar = this.operBar;
            this.callParent(arguments);
    }

});