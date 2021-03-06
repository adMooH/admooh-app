import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { AppRssSource } from '@admooh-app/tools';
import ReactJson from 'react-json-view'
import Alert from '../Alert';


const useStyles = makeStyles( _ => ({
    form: {
        padding: 15,
    },
    submit: {
		marginTop: "5%"
	},
}));

export function RssOptions(){
    const classes = useStyles();
    const rssSource = new AppRssSource();

    const [status, setStatus] = React.useState('');
    const [openPreview, setOpenPreview] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [dataUrL, setDataUrl] = React.useState('');
    const [data, setData] = React.useState([]);

    function onDataUrlChange(event){
        setDataUrl(event.target.value);
    }
    function handleClickOpen() {
        setStatus('Loading items...')
        setOpenAlert(true);
        rssSource.setUrl(dataUrL);
        rssSource.getItems(true).then(items => {
            setData(items);
            setOpenAlert(false);
            setOpenPreview(true);
        }).catch(err => {
            console.error(err);
            setOpenAlert(false);
        });
    }

    function handleClosePreview() {
        setOpenPreview(false);
    }

    return (
    <div className={classes.form}>
        <Grid container direction="column" justify="center" alignItems="center">
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="url">URL</InputLabel>
                <Input
                    value={dataUrL}
                    onChange={onDataUrlChange}
                    name="url"
                    type="url"
                    id="url"
                    />
            </FormControl>
            <Button
                type="button"
                variant="contained"
                color="default"
                fullWidth
                onClick={handleClickOpen}
            >Preview Data
            </Button>
        </Grid>
        <Dialog
            open={openPreview}
            onClose={handleClosePreview}
            fullScreen
        >
            <DialogTitle>Data Preview</DialogTitle>
            <DialogContent>
                <ReactJson style={{ marginTop: "2%" }} src={data} theme="monokai" collapsed={false} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClosePreview} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        <Alert text={status} open={openAlert} />
    </div>
    );
}
