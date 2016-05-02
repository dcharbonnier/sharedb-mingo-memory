var expect = require('expect.js');
var MemoryDB = require('sharedb/lib/db/memory');
var ShareDBMingo = require('../index').extendMemoryDB(MemoryDB);

function create(callback) {
  var db = ShareDBMingo();
  callback(null, db);
}

require('sharedb/test/db')(create);

