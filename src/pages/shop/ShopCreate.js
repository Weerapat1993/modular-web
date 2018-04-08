import React, { Component } from 'react'
import { Card } from 'antd'
import { View } from 'Components/Native'
import { LoadImage } from 'Components/LoadImage'
import faker from 'faker'
import { styles } from 'Styles/index'

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
              cover={<LoadImage url={faker.image.avatar()} />}
            >
              <Meta
                title={faker.name.title()}
                avatar={<LoadImage url={faker.image.avatar()} style={styles.circle(30)} />}
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
