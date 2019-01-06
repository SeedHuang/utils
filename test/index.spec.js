import assert from 'assert';
import * as utils from '../lib/index';

describe('test', () => {
  it('isNotEmpty', function() {
    assert.equal(utils.isNotNull({}), true);
  })
})
