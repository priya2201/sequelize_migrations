module.exports=(sequelize,DataTypes)=>{
   const Order=sequelize.define('Order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    status:DataTypes.STRING,
    invoiceNumber:DataTypes.STRING
   });

   Order.associate=(models)=>{
    Order.belongsTo(models.Customer);
    Order.hasMany(models.Product)
   }
   return Order;
};
