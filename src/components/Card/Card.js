import React from 'react'
import { string, oneOfType, node, func, element } from 'prop-types'
import styled from 'styled-components'

const CardPlate = styled.div`
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: ${props => props.color || '#333'};
  background-color: #fff;
  margin-bottom: 10px;
`

const CardTitle = styled.div`
  font-family: Tahoma;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color ? '#fff' : '#333'};
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px 10px 15px;
  border-bottom-color: ${props => props.color || '#333'};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: ${props => props.color || 'transparent'};
`

const CardBody = styled.div`
  padding: 15px;
`

const CardTitleActions = styled.div`

`

const Flex = styled.div`
  flex: 1;
`


const Card = (props) => {
  const { title, children, color, actions } = props
  return (
    <CardPlate color={color}>
      <CardHeader color={color}>
        <CardTitle color={color}>{title}</CardTitle>
        <Flex />
        <CardTitleActions>
          {actions()}
        </CardTitleActions>
      </CardHeader> 
      <CardBody>
        {children}
      </CardBody>
    </CardPlate>
  )
}

Card.propTypes = {
  title: oneOfType([
    string,
    node,
    func,
    element,
  ]),
  children: oneOfType([
    node,
    func,
    element,
  ]),
  color: string,
  actions: func
}

Card.defaultProps = {
  title: '',
  children: null,
  color: '',
  actions: () => null
}

export default Card
