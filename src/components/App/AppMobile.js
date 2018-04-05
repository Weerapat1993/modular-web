import React, { Component } from 'react'
import { func } from 'prop-types'
import { Icon, Layout } from 'antd'
import { TabBar } from 'antd-mobile'
import { translate } from 'react-i18next'
import { Shop } from '../../pages/shop'
import { SettingContainer } from 'Features/setting'
import 'Styles/styles.less'
import styles from './styles'

const { Content } = Layout

class AppMobile extends Component {
  static propTypes = {
    t: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      hidden: false,
    }
  }

  renderContent = (key) => {
    switch(key) {
      case 'Shop':
        return <Shop.Home />
      case 'Setting':
        return <SettingContainer />
      default:
        return <Shop.Create />
    }
  }

  render() {
    const { t } = this.props
    const tabs = [
      {
        key: 'Home',
        title: t('home'),
        icon: 'home',
      },
      {
        key: 'Shop',
        title: t('shop'),
        icon: 'shopping-cart',
      },
      {
        key: 'Notificaction',
        title: t('notification'),
        icon: 'bell',
      },
      {
        key: 'Setting',
        title: t('setting'),
        icon: 'setting',
      }
    ]
    return (
      <Layout style={styles.height('100vh')} >
        <Content>
          <div style={styles.containerMobile}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor={'white'}
              hidden={this.state.hidden}
            >
              {
                tabs.map(item => (
                  <TabBar.Item
                    title={item.title}
                    key={item.key}
                    icon={<Icon type={item.icon} style={styles.fontSize(22)} />}
                    selectedIcon={<Icon type={item.icon} style={styles.fontSize(22)} />}
                    selected={this.state.selectedTab === item.key}
                    onPress={() => this.setState({ selectedTab: item.key })}
                    data-seed="logId"
                  >
                    {this.renderContent(item.key)}
                  </TabBar.Item>
                ))
              }
            </TabBar>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default translate()(AppMobile)
