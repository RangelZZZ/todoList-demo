import {connect} from "react-redux";
import {Footer} from "../component/Footer";
import {filter} from "../action/footer";


const mapDisPatchToProps = (dispatch) => {
    return {
        onFilter: (filterName) => {
            dispatch(filter(filterName));
        }
    }
};

export  default connect(() => {
    return {}
}, mapDisPatchToProps)(Footer)
