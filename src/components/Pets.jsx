
function Pets(props) {
return(
<div>
    <heading>
        <h3>Introducing..</h3>
        </heading>
        <section>
            Name: {props.name}
            <br/>
            Breed: {props.breed}
            <br/>
            Colour: {props.colour}
            <br/>
            Nickname: {props.nickname}
            <br/>
            <label for ="yesNo" name="yesNo" id="yesNo">Cute? </label>
            <input type="checkbox" name="yesNo" ></input>
            
        </section>


</div>
)

}

export default Pets


