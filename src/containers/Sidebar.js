import React from 'react'
import { CardWrapper, CardHeader, CardHeading, CardBody, NavItem, NavLinkItem } from '../theme/CardWrapper'
import {
  withState,
  lifecycle,
  compose
} from 'recompose'

const SidebarContainer = ({
  value
}) => (
    <div>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Chuck Norris</CardHeading>
        </CardHeader>
        <CardBody>
          <NavItem>
            {
              value.map((item, index) => (
                <NavLinkItem
                  key={index}
                  to={`/categories/${item}/jokes`}>
                  <li>
                    {item}
                  </li>
                </NavLinkItem>
              ))
            }
          </NavItem>
        </CardBody>
      </CardWrapper>
    </div>
  )
export default compose(
  withState('value', 'setCategories', []),
  lifecycle({
    componentDidMount() {
      fetch('/categories')
        .then(res => res.json())
        .then(({ value }) => this.props.setCategories(value))
    }
  })
)(SidebarContainer)
