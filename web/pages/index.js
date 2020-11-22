import React, { Component } from "react";
import Head from "next/head";
import { Container } from "semantic-ui-react";

import DiscordHeader from "../components/DiscordHeader";
import DiscordData from "../components/DiscordData";

const { API_URL } = process.env;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        channels: {},
      },
      isLoading: true,
      activeTable: "general",
    };
  }

  componentDidMount = () => {
    this.getDiscordServerData();
  };

  getDiscordServerData = () => {
    fetch("http://localhost:8080")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result.data,
          isLoading: false,
        });
      });
  };

  tableButtonPress = (tableName) => {
    this.setState({
      activeTable: tableName,
    });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Big Boiz and Diana</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container className={"uiContainer"}>
          <header>
            <DiscordHeader guild={this.state.data.guild} />
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
