import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

const GameHistory = props => {
  let id = 1;
  return (
    <div className="game">
      {props.games.map(element => (
        <div className="help" key={id}>
          {id++}
          <span style={{ color: element.status === "lost" ? "red" : "green" }}>
            {element.status}
          </span>
          &nbsp; | &nbsp;
          {element.dateCreated}
        </div>
      ))}
    </div>
  );
};

GameHistory.propTypes = { games: propTypes.array };

const mapStateToProps = state => {
  return { games: state.gameHistory };
};

export default connect(mapStateToProps)(GameHistory);
