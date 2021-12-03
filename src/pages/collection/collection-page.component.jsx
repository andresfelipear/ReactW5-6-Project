import React from 'react'

import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collection-page.styles'

const CollectionPage = ({ collections }) => {

    const { title, items } = collections

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
      {items.map(item => (
          <>test</>
      ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default CollectionPage