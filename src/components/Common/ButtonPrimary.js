import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const ButtonPrimary = ({type, to}) => (
    <Link className="buttonPrimary" to={to}>
        <Button variant="contained" color="primary">
        </Button>
    </Link>
);

export default ButtonPrimary;
