import React, { Component } from "react";
import PropTypes from "prop-types";
import Gossip from "./Gossip";

class Gossips extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 mb-4">
          <span>Hot Gossip</span>
        </h1>
        <Gossip
          title="John drinks everyday"
          gossip="Jane saw john drinking jin 10am in the morning for the 5th time in a row. I bet he's going down a spiral after getting layed off"
        />
        <Gossip
          title="David is getting fat"
          gossip="Iy's very obvious, and the belly cannot be ignored"
        />
      </div>
    );
  }
}

// Gossip.prototype = {
//   title: PropTypes.string.isRequired,
//   gossip: PropTypes.string.isRequired,
// };

export default Gossips;
