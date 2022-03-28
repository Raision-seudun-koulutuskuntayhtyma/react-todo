import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css';

import * as api from './api';
import TodoLista from './TodoLista';

export default class App extends React.Component {
    state = {
        iteemit: [],
        virheViesti: null
    }

    componentDidMount() {
        api.kirjaudu("admin", "admin");
        api.haeTehtavat()
            .then((res) => {
                const iteemit = res.data;
                this.setState({iteemit});
            })
            .catch((error) => {
                this.setState({virheViesti: error.message});
            });
    }

    render() {
        if (this.state.virheViesti) {
            return (
                <Container>
                    Virhe: {this.state.virheViesti}
                </Container>
            );
        }
        const data = this.state.iteemit;
        console.log(data);
        return (
            <Container>
                <TodoLista
                    iteemit={data}
                    merkitseTehtavaTehdyksi={
                        (id) => this.merkitseTehtavaTehdyksiRajapinnassa(id)
                    }
                />
            </Container>
        );
    }

    merkitseTehtavaTehdyksiRajapinnassa(id) {
        api.merkitseTehdyksi(id)
            .then(() => this.componentDidMount())
            .catch(error => {
                this.setState({virheViesti: error.message});
            });
    }
}
