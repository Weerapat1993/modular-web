import React, { Component } from 'react'
import { Card } from 'antd'
import { View } from 'Components/Native'
import faker from 'faker'

const { Meta } = Card

class ShopCreate extends Component {
  render() {
    return (
      <View>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title={faker.name.title()}
            description={faker.lorem.lines(1)}
          />
        </Card>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title={faker.name.title()}
            description={faker.lorem.lines(1)}
          />
        </Card>
      </View>
    )
  }
}

export default ShopCreate
