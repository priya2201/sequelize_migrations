module.exports=(sequelize,DataTypes)=>{
    const Payment=sequelize.define('payment',{
        id:{
type:DataTypes.INTEGER,
primaryKey:true,
allowNull:false,
autoIncrement:true
        },
        status:DataTypes.STRING,
        amount:DataTypes.DECIMAl,
    });
    Payment.associate=models=>{
        Payment.hasOne(models.Order)
    };
    return Payment;
}