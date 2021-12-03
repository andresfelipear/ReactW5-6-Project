import { connect } from 'react-redux'
import { compose } from 'redux'

import CollectionPage from './collection-page.component'

const mapStateToProps = (state) => ({
    collections: state.shop.collections
})

const CollectionPageContainer = connect(mapStateToProps)(CollectionPage)

export default CollectionPageContainer