import { describe, it } from 'mocha';
import { assert } from 'chai';

import { updateHasLoadedTopic, UPDATE_HAS_LOADED_TOPIC } from 'modules/categories/actions/update-has-loaded-category';

describe('modules/categories/actions/update-has-loaded-category.js', () => {
  const test = (t) => {
    it(t.description, () => {
      t.assertions(updateHasLoadedTopic(t.hasLoadedTopic));
    });
  };

  test({
    description: 'should return the expected object',
    hasLoadedTopic: true,
    assertions: (action) => {
      const expected = {
        type: UPDATE_HAS_LOADED_TOPIC,
        hasLoadedTopic: true
      };

      assert.deepEqual(action, expected, `Didn't return the expected object`);
    }
  });
});
