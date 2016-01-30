Ext.define("Hr.system.SysRole",{
    extend:"Ext.form.Panel",
    alias:"widget.rbac.deptform",
    layout:"auto",
    align:"left",
    frame:true,
//  defaults:{
//          selectOnFocus:true,
//          msgTarget:"side" //提示信息现在的位置
//  },
    items:[{
                xtype:"textfield",
                fieldLabel:"主键",
                name:"deptId",
                hidden:true
            },{
                xtype:"textfield",
                fieldLabel:"部门名称",
                name:"deptName"
            },{
                xtype:"textfield",
                fieldLabel:"部门编码",
                name:"deptCode"
            },{
                xtype:"numberfield",
                fieldLabel:"排序",
                name:"orderIndex"
            },{
                xtype:"button",
                ref:"submit",
                text:"保存"
            }]
});