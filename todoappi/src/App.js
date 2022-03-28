import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css';

import * as api from './api';
import TodoLista from './TodoLista';
import Kirjautumisdialogi from './Kirjautumisdialogi';

export default class App extends React.Component {
    state = {
        iteemit: [],
        virheViesti: null,
        kirjauduttu: false
    }

    lataaTehtavat() {
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

        if (!this.state.kirjauduttu) {
            return (
                <Kirjautumisdialogi kirjaudu={
                    (kayttaja, salasana) => {
                        const onnistuiko = api.kirjaudu(kayttaja, salasana);
                        this.setState({kirjauduttu: onnistuiko});
                        if (onnistuiko) {
                            this.lataaTehtavat();
                        }
                    }
                }/>
            );
        }

        const data = this.state.iteemit;
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
