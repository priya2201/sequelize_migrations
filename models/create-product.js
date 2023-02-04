
module.exports=(sequelize,DataTypes)=>{
    const Product=sequelize.define('Product',
    {
       id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
       },
       status:DataTypes.STRING,
       name:DataTypes.STRING
    });

    Product.associate=models=>{
        Product.belongsToMany(
            models.Tag,
            {
                through:'ProductTags'
            }
        )
    }
    return Product;
}
