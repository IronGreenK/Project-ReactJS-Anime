import React from 'react'
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const SearchBar = ({validateAnime}) => {
    const CssTextField = withStyles({
        root: {
            '& label': {
                color: '#ff0000',
            },
            '& label.Mui-focused': {
                color: '#000000',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#2b6b2b',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#557ca2',
                },
                '& input': {
                    color: '#ff9797',
                },
                '&:hover fieldset': {
                    borderColor: '#f11414',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#737c7a',
                },
            },
        },
    })(TextField);

    return (
        <CssTextField
            type="text"
            id="q_anime"
            label="Search for an anime"
            margin="normal"
            variant="outlined"
            style={{width: '80%'}}
            onKeyPress={ e => validateAnime(e) }
        />
    );
}

SearchBar.propTypes = {
    validateAnime: PropTypes.func
}
export default SearchBar;