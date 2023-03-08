import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import clinicActions from "../redux/actions/clinicActions";
import ClinicView from "../components/ClinicView";
import clinicSelector from "../redux/selectors/clinic/clinicSelector";

const ClinicContainer = (props: any) => {
  useEffect(() => {
    props.loginUser();
  }, []);

  return <ClinicView clinicsData={props.clinicsData} />;
};

function mapStateToProps(state: never) {
  return clinicSelector(state);
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      loginUser: clinicActions.loginUser,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicContainer);
