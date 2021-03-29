// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});
  
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, 
  {
    through: { model: ProductTag },
    as: "tags"
  });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany( Product,
  {
    through: { model: ProductTag },
    as: "tags_for_products"
  });
  
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
