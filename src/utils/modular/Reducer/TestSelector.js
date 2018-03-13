import _ from 'lodash'

class Model {
  static defaultProps = {
    isFetching: false,
    isReload: true,
    data: {},
    error: '',
  }
  /**
   * Get Data With Key
   * @param {*} state 
   * @param {string} key
   * @return {typeof Model.defaultProps} 
   * @static
   */
  static get(state, key) {
    const name = this.toString().split(' ')[1]
    const path = key ? `${_.camelCase(name)}.keys.${key}` : _.camelCase(name)
    return _.get(state, path, this.defaultProps)
  }
}

export class Product extends Model {
  static defaultProps = {
    isFetching: false,
    isReload: true,
    data: [],
    error: '',
  }
}

Product.get()
