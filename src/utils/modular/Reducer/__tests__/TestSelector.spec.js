import { Product } from "../TestSelector";

describe('TestSelector', () => {
  it('Test', () => {
    const state = {
      product: {
        keys: {
          abcd: '1'
        }
      }
    }
    const recieved = Product.get(state, 'abcde')
    const expected = Product.defaultProps
    expect(recieved).toEqual(expected)
  })
})