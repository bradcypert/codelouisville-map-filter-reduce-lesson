const test = require('ava');

const {
  mapPractice, mapPractice2, filterPractice, filterPractice2, reducePractice, reducePractice2 
} = require('../index-solutions');

test('mapPractice', (t) => {
  t.deepEqual(mapPractice([1,2,3]), [2,4,6]);
});

test('mapPractice2', (t) => {
  t.deepEqual(mapPractice2(["brad","tom","mike"]), ["BRAD","TOM","MIKE"]);
});

test('filterPractice', (t) => {
  t.deepEqual(filterPractice([1,null,3]), [1,3]);
});

test('filterPractice2', (t) => {
  t.deepEqual(filterPractice2([{age: 22},{age: 11},{age: 44}]), [{age: 22}, {age: 44}]);
});

test('reducePractice', (t) => {
  t.is(reducePractice([1,2,3]), 6);

});

test('reducePractice2', (t) => {
  t.deepEqual(reducePractice2([
    {
      firstName: "Brad",
      lastName: "Cypert",
    },
    {
      firstName: "Tom",
      lastName: "Cypert",
    },
    {
      firstName: "Seth",
      lastName: "Rogen",
    },
  ]), {
    Cypert: 2,
    Rogen: 1
  });
});
