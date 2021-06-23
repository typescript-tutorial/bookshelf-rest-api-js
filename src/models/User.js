const knex = require('../config/database').knex;
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('bookshelf-virtuals-plugin');

const userModel = bookshelf.Model.extend({
  tableName: 'users',
  hidden: ['dateofbirth'],
  virtuals: {
    dateOfBirth: function () {
      return this.get("dateofbirth");
    },
  },
});

module.exports = userModel;