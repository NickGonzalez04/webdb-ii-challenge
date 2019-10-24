
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 17).notNullable();
      tbl.string('Make', 128).notNullable();
      tbl.string('Model', 128).notNullable();
      tbl.string('Mileage').notNullable();
      tbl.string('Transmission');
      tbl.string('Status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
