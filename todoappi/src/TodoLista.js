import Stack from 'react-bootstrap/Stack';

import TodoIteemi from './TodoIteemi';

function TodoLista(props) {
    /*
    Parametrina annettu "props" pitäisi näyttää tältä:

    props = {
        "iteemit": [
            {
                "id": 123,
                "otsikko": "Joku otsikko",
                "tehty": false
            },
            {
                "id": 456,
                "otsikko": "Joku toinen otsikko",
                "tehty": true
            }
        ],
        "merkitseTehtavaTehdyksi": <funkio>
    }
    */

    return (
        <Stack gap={2}>
            {props.iteemit.map(
                (x) => (
                    <TodoIteemi
                        id={x.id}
                        otsikko={x.otsikko}
                        tehty={x.tehty}
                        merkitseTehdyksi={
                            () => (
                                props.merkitseTehtavaTehdyksi(x.id)
                            )
                        }
                    />
                )
            )}
        </Stack>
    );
}

export default TodoLista;
