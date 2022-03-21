function TodoIteemi(props) {
    if (props.tehty) {
        return (
            <div>
                <s>{props.otsikko}</s>
            </div>
        );
    } else {
        return (
            <div>
                {props.otsikko}
                <a
                    href="#"
                    onClick={props.merkitseTehdyksi}
                >
                    [Merkitse tehdyksi]
                </a>
            </div>
        );
    }
}

export default TodoIteemi;
