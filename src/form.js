import React from 'react';

import {Grid, TextField, Button} from '@material-ui/core';
import { Form, useFormikContext } from 'formik';


export default function MyForm() {
  const { handleChange } = useFormikContext();
  return (
    <Form>
    <Grid item md={6} xs={12}>
        <TextField name='firstName' onChange={handleChange} fullWidth={true} variant='outlined' label='First Name'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='lastName' onChange={handleChange} fullWidth={true} variant='outlined' label='Last Name'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='email' onChange={handleChange} fullWidth={true} variant='outlined' type='email' label='Email'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='date' onChange={handleChange} fullWidth={true} variant='outlined' type='date' label='Date of Birth' placeholder='none'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='address' onChange={handleChange} fullWidth={true} variant='outlined' label='Address'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='city' onChange={handleChange} fullWidth={true} variant='outlined' label='City'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='state' onChange={handleChange} fullWidth={true} variant='outlined' label='State'/>
    </Grid>
    <Grid item md={6} xs={12}>
        <TextField name='postalCode' onChange={handleChange} fullWidth={true} variant='outlined' label='Postal Code'/>
    </Grid>
    <Button type='submit' variant='contained' color='primary'>Submit</Button>
    </Form>
  )
}