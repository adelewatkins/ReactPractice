

// Component names MUST be capitalised
// props is so the input can be different on the component 
function Trainee(props) {
    // Components return html
    return (
        <div>
            <heading>
                <h1>Trainee</h1>
            </heading>
            <section>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Job: {props.job}</p>
            </section>
            <p>
                <img src="https://th.bing.com/th/id/OIP.hjB9WdbxiHMWlDnOBJjsNgHaJd?rs=1&pid=ImgDetMain" alt="Homer" width={200} />
            </p>
        </div>
    );
}

// lets you import the function
export default Trainee;

