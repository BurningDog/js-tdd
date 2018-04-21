import test from 'tape';

import * as vending_machine from '../src/vending-machine';

test('should be true', function(assert) {
  assert.pass('TDD environment set up');
  assert.end();
});

test('getChange(1, 1) should return an empty array', function(assert) {
  const actual = vending_machine.getChange(1, 1);
  const expected = [];
  assert.deepEqual(actual, expected);
  assert.end();
});

test('getChange(215, 300) should return [50, 20, 10, 5]', function(assert) {
  const actual = vending_machine.getChange(215, 300);
  const expected = [50, 20, 10, 5];
  assert.deepEqual(actual, expected, 'Should return array [50, 20, 10, 5]');
  assert.end();
});

// test for where the person pays less than the amount