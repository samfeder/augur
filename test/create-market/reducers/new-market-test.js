import { describe, it } from 'mocha';
import { assert } from 'chai';

import newMarket from 'modules/create-market/reducers/new-market';

import {
  ADD_VALIDATION_TO_NEW_MARKET,
  REMOVE_VALIDATION_FROM_NEW_MARKET,
  ADD_ORDER_TO_NEW_MARKET,
  REMOVE_ORDER_FROM_NEW_MARKET,
  UPDATE_NEW_MARKET,
  CLEAR_NEW_MARKET
} from 'modules/create-market/actions/update-new-market';

import { TAKER_FEE_DEFAULT, MAKER_FEE_DEFAULT } from 'modules/create-market/constants/new-market-constraints';

import BigNumber from 'bignumber.js';

describe('modules/create-market/reducers/new-market.js', () => {
  const test = (t) => {
    it(t.describe, () => {
      t.assertions();
    });
  };

  test({
    describe: 'should return the default state',
    assertions: () => {
      const actual = newMarket(undefined, { type: null });

      const expected = {
        isValid: false,
        holdForUserAction: false,
        validations: [],
        currentStep: 0,
        type: '',
        outcomes: [],
        scalarSmallNum: '',
        scalarBigNum: '',
        description: '',
        expirySourceType: '',
        expirySource: '',
        endDate: {},
        detailsText: '',
        category: '',
        keywords: [],
        takerFee: TAKER_FEE_DEFAULT,
        makerFee: MAKER_FEE_DEFAULT,
        orderBook: {},
        orderBookSorted: {},
        orderBookSeries: {},
        initialLiquidityEth: new BigNumber(0),
        initialLiquidityGas: new BigNumber(0),
        initialLiquidityFees: new BigNumber(0),
        creationError: 'Unable to create market.  Ensure your market is unique and all values are valid.'
      };

      assert.deepEqual(actual, expected, `Didn't return the expected default value`);
    }
  });

  test({
    describe: 'should return the existing value',
    assertions: () => {
      const actual = newMarket('testing', { type: null });

      const expected = 'testing';

      assert.equal(actual, expected, `Didn't return the expected existing value`);
    }
  });

  test({
    describe: 'should add validation',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        validations: [
          'valid1',
          'valid2'
        ]
      };

      const actual = newMarket(newMarketState, {
        type: ADD_VALIDATION_TO_NEW_MARKET,
        data: 'valid3'
      });

      const expected = {
        test: 'test',
        validations: [
          'valid1',
          'valid2',
          'valid3'
        ]
      };

      assert.deepEqual(actual, expected, `Didn't return the expected updated validations`);
    }
  });

  test({
    describe: 'should not add validation if already exists',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        validations: [
          'valid1',
          'valid2'
        ]
      };

      const actual = newMarket(newMarketState, {
        type: ADD_VALIDATION_TO_NEW_MARKET,
        data: 'valid1'
      });

      const expected = {
        test: 'test',
        validations: [
          'valid1',
          'valid2'
        ]
      };

      assert.deepEqual(actual, expected, `Didn't return the expected validations array`);
    }
  });

  test({
    describe: 'should remove validation',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        validations: [
          'valid1',
          'valid2'
        ]
      };

      const actual = newMarket(newMarketState, {
        type: REMOVE_VALIDATION_FROM_NEW_MARKET,
        data: 'valid1'
      });

      const expected = {
        test: 'test',
        validations: [
          'valid2'
        ]
      };

      assert.deepEqual(actual, expected, `Didn't return the expected validations array`);
    }
  });

  test({
    describe: 'should not modify validations if value is not present',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        validations: [
          'valid1',
          'valid2'
        ]
      };

      const actual = newMarket(newMarketState, {
        type: REMOVE_VALIDATION_FROM_NEW_MARKET,
        data: 'valid3'
      });

      const expected = {
        test: 'test',
        validations: [
          'valid1',
          'valid2'
        ]
      };

      assert.deepEqual(actual, expected, `Didn't return the expected validations array`);
    }
  });

  test({
    describe: 'should add order to outcome with no previous orders',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        orderBook: {}
      };

      const actual = newMarket(newMarketState, {
        type: ADD_ORDER_TO_NEW_MARKET,
        data: {
          outcome: 'Outcome1',
          type: 'bid',
          price: new BigNumber(0.5),
          quantity: new BigNumber(1)
        }
      });

      const expected = {
        test: 'test',
        orderBook: {
          Outcome1: [
            {
              type: 'bid',
              price: new BigNumber(0.5),
              quantity: new BigNumber(1)
            }
          ]
        }
      };

      assert.deepEqual(actual, expected, `Didn't return the expected orderBook object`);
    }
  });

  test({
    describe: 'should add order to an existing outcome',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        orderBook: {
          Outcome1: [
            {
              type: 'bid',
              price: new BigNumber(0.8),
              quantity: new BigNumber(1)
            },
            {
              type: 'ask',
              price: new BigNumber(0.9),
              quantity: new BigNumber(1)
            }
          ]
        }
      };

      const actual = newMarket(newMarketState, {
        type: ADD_ORDER_TO_NEW_MARKET,
        data: {
          outcome: 'Outcome1',
          type: 'bid',
          price: new BigNumber(0.5),
          quantity: new BigNumber(1)
        }
      });

      const expected = {
        test: 'test',
        orderBook: {
          Outcome1: [
            {
              type: 'bid',
              price: new BigNumber(0.8),
              quantity: new BigNumber(1)
            },
            {
              type: 'ask',
              price: new BigNumber(0.9),
              quantity: new BigNumber(1)
            },
            {
              type: 'bid',
              price: new BigNumber(0.5),
              quantity: new BigNumber(1)
            }
          ]
        }
      };

      assert.deepEqual(actual, expected, `Didn't return the expected orderBook object`);
    }
  });

  test({
    describe: 'should remove order',
    assertions: () => {
      const newMarketState = {
        test: 'test',
        orderBook: {
          Outcome1: [
            {
              type: 'bid',
              price: new BigNumber(0.8),
              quantity: new BigNumber(1)
            },
            {
              type: 'ask',
              price: new BigNumber(0.9),
              quantity: new BigNumber(1)
            }
          ]
        }
      };

      const actual = newMarket(newMarketState, {
        type: REMOVE_ORDER_FROM_NEW_MARKET,
        data: {
          outcome: 'Outcome1',
          index: 0
        }
      });

      const expected = {
        test: 'test',
        orderBook: {
          Outcome1: [
            {
              type: 'ask',
              price: new BigNumber(0.9),
              quantity: new BigNumber(1)
            }
          ]
        }
      };

      assert.deepEqual(actual, expected, `Didn't return the expected orderBook object`);
    }
  });

  test({
    describe: `should update 'newMarket'`,
    assertions: () => {
      const newMarketState = {
        test: 'test',
        anotherTest: [
          'test1',
          'test2'
        ]
      };

      const actual = newMarket(newMarketState, {
        type: UPDATE_NEW_MARKET,
        data: {
          test: 'updated test'
        }
      });

      const expected = {
        test: 'updated test',
        anotherTest: [
          'test1',
          'test2'
        ]
      };

      assert.deepEqual(actual, expected, `Didn't return the expected newMarket object`);
    }
  });

  test({
    describe: `should clear 'newMarket'`,
    assertions: () => {
      const newMarketState = {
        test: 'test',
        anotherTest: [
          'test1',
          'test2'
        ]
      };

      const actual = newMarket(newMarketState, {
        type: CLEAR_NEW_MARKET
      });

      const expected = {
        isValid: false,
        holdForUserAction: false,
        validations: [],
        currentStep: 0,
        type: '',
        outcomes: [],
        scalarSmallNum: '',
        scalarBigNum: '',
        description: '',
        expirySourceType: '',
        expirySource: '',
        endDate: {},
        detailsText: '',
        category: '',
        keywords: [],
        takerFee: TAKER_FEE_DEFAULT,
        makerFee: MAKER_FEE_DEFAULT,
        orderBook: {},
        orderBookSorted: {},
        orderBookSeries: {},
        initialLiquidityEth: new BigNumber(0),
        initialLiquidityGas: new BigNumber(0),
        initialLiquidityFees: new BigNumber(0),
        creationError: 'Unable to create market.  Ensure your market is unique and all values are valid.'
      };

      assert.deepEqual(actual, expected, `Didn't return the expected newMarket object`);
    }
  });
});
