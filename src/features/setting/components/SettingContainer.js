import { List } from 'antd-mobile'
import { func } from 'prop-types'
import { translate } from 'react-i18next'
import React, { Component } from 'react'
import I18n from '../../../language'


class SettingContainer extends Component {
  static propTypes = {
    t: func.isRequired,
  }

  constructor(props) {
    super(props)

    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(value) {
    const { t } = this.props
    if(value === t('english')) {
      I18n.changeLanguage('th')
    } else {
      I18n.changeLanguage('en')
    }
    this.setState({ lang: value })
  }

  render() {
    const { t } = this.props
    return (
      <div>
        <List renderHeader={() => t('setting')}>
          <List.Item 
            arrow='horizontal' 
            onClick={() => this.handleValueChange(t('current_language'))} 
            extra={t('current_language')}>
            {t('language')}
          </List.Item>
        </List>
      </div>
    )
  }
}

export default translate()(SettingContainer)
