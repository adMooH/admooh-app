import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import React from 'react';
import ActionTabs from './components/ActionTabs';
import Alert from './components/Alert';
import AppPreview from './components/AppPreview';
import { ActionOptions, DataOptions, RssOptions } from './components/options';
import DevContext from './devContext';

const drawerWidth = 440;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  runButton: {
    margin: "3%",
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000
  }
}));

export default function DevAppView(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const [status, setStatus] = React.useState('');
  const [openAlert, setOpenAlert] = React.useState(false);

  const [data, setData] = React.useState(props.defaultData === undefined? {}: props.defaultData);
  const [app, setApp] = React.useState({});
  const [previewComponent, setPreviewComponent] = React.useState(<></>);


  const admoohContext = new DevContext();

  function setAppRef(ref){
    setApp(ref);
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function willShow(){
    if(app.willShow !== undefined)
      app.willShow();
  }

  function runApp(){
    var d = new Date();
    setPreviewComponent(
      <AppPreview
        key={d.getSeconds()}
        getApp={props.getApp}
        data={data}
        setApp={setAppRef}
        context={admoohContext}
      />);
  }

  function prepare(){
    setStatus('Prepare APP');
    setOpenAlert(true);

    props.prepareApp
    props.prepareApp({
      context: admoohContext,
      data,
    }).then(isDone => {
      setOpenAlert(false);
    });
  }

  function clearDb(){
    admoohContext.clearData('_fake_db');
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fab color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={classes.fab}>
        <SettingsIcon />
      </Fab>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {
          previewComponent
        }
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <ActionTabs tabs={[
          <DataOptions onChange={setData} placeholder={data}/>,
          <ActionOptions
            willShow={willShow}
            prepareApp={prepare}
            clearDb={clearDb}
          />,
          <RssOptions />
        ]}/>
        <Button
            className={classes.runButton}
            type="submit"
            variant="contained"
            color="primary"
            onClick={runApp}
        >Run
        </Button>
      </Drawer>
      <Alert text={status} open={openAlert} />
    </div>
  );
}
