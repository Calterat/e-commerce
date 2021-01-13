const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });

  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();

// This was code I used to remedy a peculiar issue I was having with the seeds. The problem dissapeared without a reason...

// sequelize.sync({ force: true })
//   .then(async () => {
//     console.log('\n----- DATABASE SYNCED -----\n');
//     await seedCategories();
//   })
//   .then(async () => {
//     console.log('\n----- CATEGORIES SEEDED -----\n');
//     await seedProducts();
//   })
//   .then(async () => {
//     console.log('\n----- PRODUCTS SEEDED -----\n');
//     await seedTags();
//   })
//   .then(async () => {
//     console.log('\n----- TAGS SEEDED -----\n');
//     await seedProductTags();
//   })
//   .then(() => {
//     console.log('\n----- PRODUCT TAGS SEEDED -----\n');
//     process.exit(0);
//   })
