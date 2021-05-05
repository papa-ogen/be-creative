import React, { useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import RateMe from './RateMe'

const SimpleDialog = ({ showDialog, setShowDialog }) => ( <Dialog onClose={()=> setShowDialog(false)} aria-labelledby="simple-dialog-title" open={showDialog}>
<DialogTitle id="simple-dialog-title">I don't know?</DialogTitle></Dialog>)

 const Social = () => {
   const [showDialog, setShowDialog] = useState(false)
  return (
<Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={() => setShowDialog(true)}>
                What is this crap?
              </Link>
            </Grid>
            <Grid item>
              <RateMe />
            </Grid>
            <SimpleDialog showDialog={showDialog} setShowDialog={setShowDialog} />
          </Grid>
  )
}

export default Social