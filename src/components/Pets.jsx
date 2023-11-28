
// imports the prop-types library from the node modules folder
import PropTypes from 'prop-types' ;

function Pets(props) {
    return (
        <div>
            <heading>
                <h3>Introducing..</h3>
            </heading>
            <section>
                Name: {props.name}
                <br />
                Breed: {props.breed}
                <br />
                Colour: {props.colour}
                <br />
                Nickname: {props.nickname}
                <br />
                <label for="yesNo" name="yesNo">Cute? </label>
                <input type="checkbox" name="yesNo" ></input>

            </section>


        </div>
    );

}

Pets.propTypes = {
name: PropTypes.string,
breed: PropTypes.string,
// can put .isRequired after string
colour: PropTypes.string,
nickname: PropTypes.string,
}

export default Pets;


