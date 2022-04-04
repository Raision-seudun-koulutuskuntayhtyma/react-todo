import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Kirjautumisdialogi(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const {tunnus, passu} = document.forms[0];
        props.kirjaudu(tunnus.value, passu.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Kirjaudu sisään</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Käyttäjätunnus</Form.Label>
                        <Form.Control name="tunnus"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Salasana</Form.Label>
                        <Form.Control type="password" name="passu"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Kirjaudu
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Form>
    );
}
