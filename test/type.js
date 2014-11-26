
var Document = require('../Document');

module.exports.tests = {};

module.exports.tests.getType = function(test, common) {
  test('getType', function(t) {
    var doc = new Document('mytype','myid');
    doc._meta.type = 'foo';
    t.equal(doc.getType(), 'foo', 'getter works');
    t.end();
  });
};

module.exports.tests.setType = function(test, common) {
  test('setType', function(t) {
    var doc = new Document('mytype','myid');
    t.equal(doc._meta.type, 'mytype', 'id set in constructor');
    t.equal(doc.setType('foo'), doc, 'chainable');
    t.equal(doc._meta.type, 'foo', 'id set');
    t.end();
  });
  test('setType - validate', function(t) {
    var doc = new Document('mytype','myid');
    t.throws( doc.setType.bind(doc,undefined), null, 'invalid type' );
    t.throws( doc.setType.bind(doc,''), null, 'invalid length' );
    t.end();
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('type: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};