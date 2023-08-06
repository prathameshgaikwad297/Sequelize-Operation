module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('dept',{
        deptId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        dName:{
            type: Sequelize.STRING(150),
            allowNull: false,
        },
        isActive:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },{
        freezeTableName: true,
        //   timestamps: true,
        //    createdAt: "created_at",
        //   updatedAt: "updated_at"
    })

    return model;
}