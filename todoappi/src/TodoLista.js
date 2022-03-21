import TodoIteemi from './TodoIteemi';

function TodoLista(props) {
    return (
        <div>
            {props.iteemit.map(
                (x) => (
                    <TodoIteemi
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
        </div>
    );
}

export default TodoLista;
