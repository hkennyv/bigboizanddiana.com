import Head from 'next/head';
import {Container} from 'semantic-ui-react';
import DiscordStats from '../components/DiscordStats';
import React, {Component} from 'react';
import {Table} from 'semantic-ui-react'


const {API_URL} = process.env;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                channels: {}

            },
            isLoading: true
        }
    }

    componentDidMount = () => {
        this.getDiscordServerData();
    }

    getDiscordServerData = () => {
        fetch("http://localhost:8080")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.data,
                        isLoading: false
                    });
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
                            {/*<img  className="titleImage" src={this.state.data.guildIconURL}/>*/}
                        </div>
                        <p className={'titleSubHeading'}>
                            Join us in the <a>discord!</a>
                        </p>
                        <div>
                            {Object.keys(this.state.data.channels).map(channel => (
                                <div className={'dataTableContainer'}>
                                    <h2 style={{textAlign: 'center'}}> #{channel} </h2>
                                    <Table celled className={'dataTable'}>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Name</Table.HeaderCell>
                                                <Table.HeaderCell>Contributions</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {Object.keys(this.state.data.channels[channel].stats).map(key => (
                                                <Table.Row>
                                                    <Table.Cell className={'userTableCell'}>
                                                        <img className={'tableImage'} src={this.state.data.channels[channel].users[key]}/>
                                                        <p> {key} </p>
                                                    </Table.Cell>
                                                    <Table.Cell><p>
                                                        {this.state.data.channels[channel].stats[key]}</p>
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </div>
                            ))}
                            <DiscordStats data={this.state.data} isLoading={this.state.isLoading}/>
                        </div>
                    </main>
                </Container>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;

