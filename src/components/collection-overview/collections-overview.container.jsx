import { connect } from 'react-redux'
import { compose } from 'redux'
import SHOP_DATA from 'assets/data/shop'

import CollectionOverview from './collections-overview.component'
import WithSpinner from 'hoc/withSpinner/with-spinner.component'

const mapStateToProps = (state) => ({
    //Use this line the first time for maps the data to firestore (just once)
    // collectionProps:SHOP_DATA
    collectionProps: state.shop.collections,
    isLoading: state.shop.isFetching
    
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
