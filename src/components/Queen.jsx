
import PropTypes from 'prop-types';

// This is the queen component that is then pulled into queen solution

function Queen(props) {

    return (
        <div>
            <br /> Name: {props.nm}
            <br />Country: {props.cty}
            <br />House: {props.hse}
            <br />Years: {props.yrs}
            <br />
        </div>
    );
}

Queen.propTypes = {
    nm: PropTypes.string,
    cty: PropTypes.string,
    hse: PropTypes.string,
    yrs: PropTypes.string,
}


export default Queen;