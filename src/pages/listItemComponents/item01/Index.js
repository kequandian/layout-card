import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import classes from './IndexCss';

const Fragment = React.Fragment;

export default ({ text = '' }) => {
  const [open, setOpen] = useState(false);

  const styles = classes();

  function handleSwitch() {
    setOpen(!open)
  }

  return <>
    <Fragment>
      <CssBaseline />
      <Container fixed className={styles.containerCs} >
        <Typography component="div" className={styles.img}>

        </Typography>
        <Typography component="div" className={styles.imgRight}>
          
        </Typography>
      </Container>
    </Fragment>
  </>
}
