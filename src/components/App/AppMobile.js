import React, { Component } from 'react'
import { Icon, Layout } from 'antd'
import { TabBar } from 'antd-mobile'
import { Shop } from '../../pages/shop'
import 'Styles/styles.less'
import styles from './styles'

const { Content } = Layout

class AppMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent = (key) => {
    switch(key) {
      case 'Shop':
        return <Shop.Home />
      default:
        return <Shop.Create />
    }
  }

  render() {
    const tabs = [
      {
        key: 'Home',
        title: 'Home',
        icon: 'home',
      },
      {
        key: 'Shop',
        title: 'Shop',
        icon: 'shopping-cart',
      },
      {
        key: 'Wallet',
        title: 'Wallet',
        icon: 'wallet',
      },
      {
        key: 'Setting',
        title: 'Setting',
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

export default AppMobile
