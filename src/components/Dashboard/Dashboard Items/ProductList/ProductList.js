import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux'

// Actions
import { getUser, getPropertiesByID, postUser, postProperty, editProperty, deleteProperty } from '../../../../actions'

import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { PropertyToolbar, PropertyCard } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const PropertyList = props => {
  const classes = useStyles();

  useEffect(() => {
    props.getPropertiesByID();
  }, [])

  return (
    <div className={classes.root}>
      <PropertyToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {props.properties && props.properties.map(property => (
            <Grid
              item
              key={property.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PropertyCard properties={props.properties} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    properties: state.properties,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    isUpdating: state.isUpdating,
    isDeleting: state.isDeleting,
    error: state.error
  };
};

export default connect(mapStateToProps, 
  { 
    getUser, 
    getPropertiesByID,
    postProperty,
    editProperty,
    deleteProperty
   }) (PropertyList);
