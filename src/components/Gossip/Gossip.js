import React, { Component } from "react";

class Gossip extends Component {
  state = {
    showGossipDetails: false,
  };
  render() {
    const { title, gossip } = this.props;
    const { showGossipDetails } = this.state;
    return (
      <div className="card card-body mb-3">
        <div
          onClick={() => {
            this.setState({
              showGossipDetails: !this.state.showGossipDetails,
            });
          }}
        >
          <h3>{title}</h3>
        </div>

        {showGossipDetails ? (
          <ul className="list-group">
            <li className="list-group-item mb-3"> {gossip}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Gossip;
