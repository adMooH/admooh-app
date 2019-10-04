import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( _ => ({
    form: {
        padding: 15
    }
}));

export function DataOptions(props){
    const classes = useStyles();

    function handlerCustomChanges(event){
        if(props.onChange !== undefined && event.jsObject !== undefined)
            props.onChange(event.jsObject);
    }
    return (
        <div className={classes.form}>
            <JSONInput  placeholder={props.placeholder} onChange={handlerCustomChanges} height="30rem"/>
        </div>
    );
}
