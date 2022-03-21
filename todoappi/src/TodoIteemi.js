import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const laatikkoRastilla = <>&#x2611;</>;  // [X]
const laatikkoTyhja = <>&#x2610;</>;  // [ ]

function TodoIteemi(props) {
    // ks. ?-operaattorin selitys lopusta
    const laatikko = props.tehty ? laatikkoRastilla : laatikkoTyhja;
    const otsikko = props.otsikko;
    const otsikkoElementti = props.tehty ? <s>{otsikko}</s> : <>{otsikko}</>;
    const reuna = props.tehty ? 'light' : 'primary';

    return (
        <Card style={{'max-width': '30rem'}} border={reuna}>
            <Card.Header>{laatikko} Tehtävä {props.id}</Card.Header>
            <Card.Body>
                <Card.Title>{otsikkoElementti}</Card.Title>
                {/* <Card.Text>Tehtävän kuvaus.</Card.Text> */}
                {props.tehty ? null : (
                    <Button
                        variant="primary"
                        onClick={props.merkitseTehdyksi}
                    >Merkitse tehdyksi</Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default TodoIteemi;

/*

? = kolmoisoperaattori (conditional ternary operator)

Muotoa

   arvo = ehto ? jos_tosi : jos_epätosi;

oleva lauseke asettaa arvoksi jos_tosi:n silloin kun ehto on tosi
ja jos_epätosin silloin kun ehto on epätosi.

Saman asian voisi tehdä myös näin:

   if (ehto) {
       arvo = jos_tosi;
   } else {
       arvo = jos_epätosi;
   }

*/
