const Board = ( Sequelize, DataTypes)=>{  
    return Sequelize.define(    
      "board_list2", 
      {
          number: { 
              type: DataTypes.INTEGER.UNSIGNED,
              allowNull: false, 
              primaryKey: true, 
              autoIncrement: true
          },

          title : { 
             type: DataTypes.STRING(200),  
             allowNull: false 
          },

           id : { 
            type: DataTypes.STRING(10),  
            allowNull: false 
          },
           content : {
            type: DataTypes.TEXT,
            allowNull: true   
           },
           date : { 
            type: DataTypes.DATE,
            allowNull: false 
          },

           hit: { 
              type: DataTypes.INTEGER.UNSIGNED,
              allowNull: false,
              defaulteValue : "0"
          }
      },
      {
          tableName: "board_list2",  
          freezeTableName: true,
          timestamps: false 
      }
  )
}

module.exports = Board;
