import PropTypes from 'prop-types';

function KingsSolution(props) {
    // console.log("props", props);
    // console.log("name", props.nm);
    // console.log("city", props.cty);
    // console.log("house", props.hse);
    // console.log("years", props.yrs);
    
    return (
        <div>
            <h3> King </h3>
            Name: {props.nm}
            <br />
            City: {props.cty}
            <br />
            House: {props.hse}
            <br />
            Years:{props.yrs}
            <p/>
        </div>

    )
}

KingsSolution.propTypes = {
    nm: PropTypes.string,
    cty: PropTypes.string,
    hse: PropTypes.string,
    yrs: PropTypes.string,
}

export default KingsSolution;
