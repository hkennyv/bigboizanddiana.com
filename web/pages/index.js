import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Meta from "../components/Meta";
import DiscordHeader from "../components/DiscordHeader";
import DiscordData from "../components/DiscordData";

const { NEXT_PUBLIC_API_URL } = process.env;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        channels: {},
      },
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this.getDiscordServerData();
  };

  getDiscordServerData = () => {
    fetch(NEXT_PUBLIC_API_URL)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result.data,
          isLoading: false,
        });
      });
  };

  render() {
    return (
      <div>
        {/* meta takes care of <head> section */}
        <Meta
          title={this.state.data.guild}
          favicon={this.state.data.guildIconURL}
        />
        {/*
         * main container that contains the <header> and the <main> sections
         * all data and plots go in the DiscordData component to render
         */}
        <Container className={"uiContainer"}>
          <header>
            <DiscordHeader
              headerImage={this.state.data.guildIconURL}
              guild={this.state.data.guild}
            />
          </header>
          <main>
            <DiscordData
              data={this.state.data}
              isLoading={this.state.isLoading}
            />
          </main>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
