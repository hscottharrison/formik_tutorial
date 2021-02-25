import { Box, Button, Grid, TextField, makeStyles } from '@material-ui/core';
import { Formik, Form } from 'formik';

import MyForm from './form.js';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
}));

function App() {
  const classes = useStyles();

  function handleSubmit(values) {
    debugger;
  }

  return (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            date: new Date(),
            address: '',
            city: '',
            state: '',
            postalCode: '',
          }}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Box className={classes.root} display='flex' alignItems='center' justifyContent='center'>
                <Grid container spacing={3}>
                  <MyForm />
                </Grid>
              </Box>
            )
          }}
        </Formik>
  );
}

export default App;
