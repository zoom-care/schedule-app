import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import providerActions from 'actions/providerActions'
import { bindActionCreators } from 'redux'
import ProviderView from 'components/provider/view/ProviderView'
import providersSelector from 'selectors/provider/providersSelector'

const ProviderContainer = (props: any) => {

    useEffect(() => {
        props.loginUser()
      }, []);

    return (
        <ProviderView />
    )
}

function mapStateToProps(state: any) {
    return providersSelector(state)
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ 
        loginUser: providerActions.loginUser,
     }, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(
	ProviderContainer
)
