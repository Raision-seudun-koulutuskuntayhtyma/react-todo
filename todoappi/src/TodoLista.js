import Stack from 'react-bootstrap/Stack';

import TodoIteemi from './TodoIteemi';

function TodoLista(props) {
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
