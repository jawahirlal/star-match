import React from "react";
import { connect } from "react-redux";
import addGameHistory from "../redux/actions/gameActions";
import propTypes from "prop-types";

const AddGameHistory = props => {
  props.saveGame(addGameHistory(props.game));
  return null;
};

AddGameHistory.propTypes = { saveGame: propTypes.func.isRequired };

const mapDispatchToProps = dispatch => {
  return {
    saveGame: game => {
      dispatch(game);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddGameHistory);
