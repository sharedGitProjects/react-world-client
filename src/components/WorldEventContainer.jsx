import React from "react";
import { connect } from "react-redux";
import WorldEvent from "./WorldEvent";
import getTemperature from "../actions/getTemperature";
import getTimeOfday from "../actions/getTimeOfday";

class WorldEventContainer extends React.PureComponent {
  render() {
    return <WorldEvent {...this.props} />;
  }
}

const mapStateToProps = store => ({
  event: store.event,
});

const mapDispatchToProps = dispatch => ({
  getTemperature: () => dispatch(getTemperature()),
  getTimeOfday: () => dispatch(getTimeOfday()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorldEventContainer);