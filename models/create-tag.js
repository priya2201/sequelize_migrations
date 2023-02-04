module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      status: DataTypes.STRING,
      name: DataTypes.STRING,
    });
  
    Tag.associate = models => {
      Tag.belongsToMany(models.Product, { through: 'ProductTags' });
    };
  
    return Tag;
  };