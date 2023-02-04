module.exports=(sequelize,DataTypes)=>{
    const Customer=sequelize.define('Customer',{
     id:{
         type:DataTypes.INTEGER,
         primaryKey:true,
         allowNull:false,
         autoIncrement:false,
     },
     customerName:DataTypes.STRING,
     customerPhone:{
        type:DataTypes.STRING,
        unique:true
     }
    });
 
  
    return Customer;
 };