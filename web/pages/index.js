import Head from 'next/head';
import {Container} from 'semantic-ui-react';
import DiscordStats from '../components/DiscordStats';
import React, {Component} from 'react';
import {Table} from 'semantic-ui-react'
import DiscordTable from '../components/DiscordTable';


const {API_URL} = process.env;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                channels: {}

            },
            isLoading: true,
            activeTable:"general"
        }
    }

    componentDidMount = () => {
        this.getDiscordServerData();
    }

    getDiscordServerData = () => {
        fetch('http://localhost:8080')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.data,
                        isLoading: false
                    });
                }
            )
    }

    tableButtonPress = (tableName) => {
        this.setState({
            activeTable: tableName
        })
    }

    render() {
        return (
            <div>
                <Head>
                    <title>
                        Big Boiz and Diana</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Container className={'uiContainer'}>
                    <main>
                        <div className={'headingTitleContainer'}>
                            <h1>{this.state.data.guild}</h1>
                        </div>
                        <p className={'titleSubHeading'}>
                            Join us in the <a>discord!</a>
                        </p>
                        <div>
                            {/* Loops through data, and renders a button for every channel in this.state.data*/}
                            <div className={'buttonContainer'}>
                                {Object.keys(this.state.data.channels).map(key => (
                                    // when you click a button, it changes active button in state, telling the discordtable component to render
                                    // data for that channel
                                    <button
                                        onClick={(e) => this.tableButtonPress(key)}
                                        className={'ui button' + (this.state.activeTable === key ? ' activeChannelButton' : '')}
                                    > {key} </button>
                                ))}
                            </div>
                            <DiscordTable activeTable={this.state.activeTable} channelData={this.state.data.channels[this.state.activeTable]} isLoading={this.state.isLoading}/>
                            {/*<DiscordStats data={this.state.data} isLoading={this.state.isLoading}/>*/}
                        </div>
                    </main>
                </Container>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;

