import React from 'react'

// import './menu-item.styles.scss';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size }) => (
  <MenuItemContainer size={size} >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default MenuItem
