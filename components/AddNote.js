import React from 'react';
import { Styles, TextField } from 'material-ui';
let ThemeManager = new Styles.ThemeManager();

class AddNote extends React.Component {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    getStyle() {
        return {
            textAlign: 'left',
            width: '50%',
            boxShadow: '0 2px 1px rgba(0,0,0,0.08)',
            backgroundColor: '#FFFFFF'
        };
    }

    render() {
        const style = this.getStyle();
        return (
            <TextField
            hintText="Insert any text (MultiLine)"
            floatingLabelText="Add a note"
            style={style}
            multiLine={true} />
        );
    }
}

AddNote.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default AddNote;
