import React, { Component } from 'react'
import { Card, Avatar } from 'antd'
import { View } from 'Components/Native'
import faker from 'faker'

const { Meta } = Card

class ShopCreate extends Component {
  render() {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
      <View>
        {
          arr.map((item, key) => (
            <Card
              key={key}
              hoverable
              style={{ width: '100%', marginBottom: 10 }}
              cover={<img alt="example" src={faker.image.cats()} />}
            >
              <Meta
                title={faker.name.title()}
                avatar={<Avatar src={faker.image.avatar()} />}
                description={faker.lorem.lines(1)}
              />
            </Card>
          ))
        }
      </View>
    )
  }
}

export default ShopCreate
