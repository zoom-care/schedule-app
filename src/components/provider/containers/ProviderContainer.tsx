import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import providerActions from "../../../reduxSaga/actions/providerActions";
import ProviderView from "../view/ProviderView";
import providersSelector from "../../../reduxSaga/selectors/provider/providersSelector";

const ProviderContainer = (props: any) => {
  useEffect(() => {
    props.loginUser();
  }, []);

  return <ProviderView providersData={props.providersData} />;
};

function mapStateToProps(state: never) {
  return providersSelector(state);
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      loginUser: providerActions.loginUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderContainer);
