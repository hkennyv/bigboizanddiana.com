import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

class DiscordTable extends Component {
  render() {
    return (
      <div className={"dataTableContainer"}>
        <Table compact celled size="small" className={"dataTable"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Contributions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.keys(this.props.channelData.stats).map((key) => (
              <Table.Row key={key}>
                <Table.Cell className={"userTableCell"}>
                  <img
                    className={"tableImage"}
                    src={this.props.channelData.users[key]}
                    alt={"users profile picture"}
                  />
                  <p> {key} </p>
                </Table.Cell>
                <Table.Cell>
                  <p> {this.props.channelData.stats[key]} </p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

DiscordTable.propTypes = {
  activeChannel: PropTypes.string.isRequired,
  channelData: PropTypes.object.isRequired,
};

export default DiscordTable;
