
// this is my component called my button
function MyButton() {

    // This is then my function used for my third button
    function ButtonThree() {
        console.log("Does it work yet")
    }

    return (
        <div>
            {/* arrow function */}
            <button onClick={() => console.log("Good Morning")}>
                Click Here </button>

            {/* annonymous function */}
            <button onClick={function () {
                console.log("Happy Wednesday")
            }} >Or Here </button>

            {/* normal function */}
            <button onClick={ButtonThree}>This One Too</button>
        </div>
    )
}





export default MyButton;