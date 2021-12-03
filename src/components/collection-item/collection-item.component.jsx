import React from 'react'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item

    return(
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton>Add to Cart</AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem