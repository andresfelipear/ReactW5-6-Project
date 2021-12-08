import { connect } from 'react-redux'
import SHOP_DATA from 'assets/data/shop'

import CollectionOverview from './collections-overview.component'

const mapStateToProps = (state) => ({
    //Use this line the first time for maps the data to firestore (just once)
    // collectionProps:SHOP_DATA
    collectionProps: state.shop.collections
    
})

const CollectionOverviewContainer = connect(mapStateToProps)(CollectionOverview)

export default CollectionOverviewContainer