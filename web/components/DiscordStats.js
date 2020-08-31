import React, {Component} from 'react';
import {Dimmer, Loader, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';


class DiscordStats extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Dimmer active={this.props.isLoading}>
                    <Loader content="Loading"/>
                </Dimmer>
                {/*<svg width={800} height={600} ref={ref} />*/}
                <pre>{this.props.data && JSON.stringify(this.props.data, null, 2)}</pre>


            </div>
        );
    }
}

DiscordStats
    .propTypes = {};

export default DiscordStats;


