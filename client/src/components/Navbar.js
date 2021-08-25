import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  nav: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Navbar = ({ toggleApp }) => {
  const classes = useStyles();

  // const click = (num) => {
  //   console.log(num);
  // }
  return (
    <div className='nav-container'>
      {/* <div className="brand"><h1>cpalmer-atx</h1></div> */}
      <div className={classes.nav}>
        <Button variant='contained' color='primary' onClick={() => toggleApp(0)}>GitFinder</Button>
        <Button variant='contained' color='primary' onClick={() => toggleApp(1)}>SpaceX</Button>
        <Button variant='contained' color='primary' onClick={() => toggleApp(2)}>Waypoints</Button>
      </div>
    </div>
  )
}

export default Navbar