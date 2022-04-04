import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './App.css';

import * as api from './api';
import TodoLista from './components/TodoLista';
import Kirjautumisdialogi from './components/Kirjautumisdialogi';

export default class App extends React.Component {
    state = {
        iteemit: [],
        virheViesti: null,
        kirjauduttu: false
    }

    componentDidMount() {
        const kirjauduttu = api.palautaKirjautuminen();
        if (kirjauduttu) {
            this.setState({kirjauduttu: true});
            this.lataaTehtavat();
        }
    }

    lataaTehtavat() {
        api.haeTehtavat()
            .then((res) => {
                const iteemit = res.data;
                this.setState({iteemit, virheViesti: null});
            })
            .catch((error) => {
                this.setState({virheViesti: error.message});
            });
    }

    render() {       
        const virheKomponentti = (this.state.virheViesti) ? (
            <Alert variant="danger">
                Virhe: {this.state.virheViesti}
            </Alert>
        ) : null;

        const kirjautumisKomponentti = (this.state.kirjauduttu) ? (
            <Button onClick={() => {
                api.kirjauduUlos();
                this.setState({kirjauduttu: false, iteemit: []});
            }}>
                Kirjaudu ulos
            </Button>
        ) : (
            <Kirjautumisdialogi kirjaudu={
                (kayttaja, salasana) => {
                    api.kirjaudu(kayttaja, salasana)
                        .then(() => {
                            this.setState({kirjauduttu: true});
                            this.lataaTehtavat();
                        })
                        .catch((error) => {
                            this.setState({virheViesti: error.message});
                        });
                }
            }/>
        );

        const listaKomponentti = (this.state.iteemit) ? (
            <TodoLista
                iteemit={this.state.iteemit}
                merkitseTehtavaTehdyksi={
                    (id) => this.merkitseTehtavaTehdyksiRajapinnassa(id)
                }
            />
        ) : null;

        return (
            <Container>
                {virheKomponentti}
                {kirjautumisKomponentti}
                {listaKomponentti}
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
