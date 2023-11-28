
function Pets(props) {
    return (
        <div>
            <heading>
                <h3>Introducing..</h3>
            </heading>
            <section>
                Name: {props.Name}
                <br />
                Breed: {props.Breed}
                <br />
                Colour: {props.Colour}
                <br />
                Nickname: {props.Nickname}
                <br />
                <label for="yesNo" name="yesNo">Cute? </label>
                <input type="checkbox" name="yesNo" ></input>

            </section>


        </div>
    );

}

export default Pets;


