import { Model } from './Model'

export class Product extends Model {
  static defaultProps = {
    isFetching: false,
    isReload: true,
    data: [],
    error: '',
  }
}
