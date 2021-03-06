import {
  START_FETCHING_USER,
  FETCH_SUCCESS_USER,
  FETCH_FAILURE_USER,
  START_POST_USER,
  POST_SUCCESS_USER,
  POST_FAILURE_USER,
  START_FETCHING_PROPERTY,
  FETCH_SUCCESS_PROPERTY,
  FETCH_FAILURE_PROPERTY,
  START_FETCHING_PROPERTY_PID,
  FETCH_SUCCESS_PROPERTY_PID,
  FETCH_FAILURE_PROPERTY_PID,
  START_FETCHING_PROPERTY_ID,
  FETCH_SUCCESS_PROPERTY_ID,
  FETCH_FAILURE_PROPERTY_ID,
  START_POST_PROPERTY,
  POST_SUCCESS_PROPERTY,
  POST_FAILURE_PROPERTY,
  START_UPDATE,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILURE,
  START_DELETE,
  DELETE_SUCCESSFUL,
  DELETE_FAILURE
} from '../actions';

const initialState = {
  users: [],
  properties: [],
  isFetching: false,
  isPosting: false,
  isUpdating: false,
  isDeleting: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS_USER:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    case FETCH_FAILURE_USER:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_POST_USER:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POST_SUCCESS_USER:
      return {
        ...state,
        isPosting: false,
        users: action.payload
      };
    case POST_FAILURE_USER:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case START_FETCHING_PROPERTY:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS_PROPERTY:
      return {
        ...state,
        isFetching: false,
        properties: action.payload
      };
    case FETCH_FAILURE_PROPERTY:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_FETCHING_PROPERTY_PID:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS_PROPERTY_PID:
      console.log('ACTIONS', action.payload)
      return {
        ...state,
        isFetching: false,
        properties: action.payload
      };
    case FETCH_FAILURE_PROPERTY_PID:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_FETCHING_PROPERTY_ID:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS_PROPERTY_ID:
      return {
        ...state,
        isFetching: false,
        properties: action.payload
      };
    case FETCH_FAILURE_PROPERTY_ID:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_POST_PROPERTY:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POST_SUCCESS_PROPERTY:
      return {
        ...state,
        isPosting: false,
        properties: [...state.properties, action.payload]
      };
    case POST_FAILURE_PROPERTY:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case START_UPDATE:
      return {
        ...state,
        isUpdating: true,
        error: ''
      };
    case UPDATE_SUCCESSFUL:
      return {
        ...state,
        isUpdating: false,
        properties: state.properties.map(property => {
          if (property.id === action.payload.id) return action.payload
          return property
        })
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
    case START_DELETE:
      return {
        ...state,
        isDeleting: true,
        error: ''
      };
    case DELETE_SUCCESSFUL:
      return {
        ...state,
        isDeleting: false,
        properties: state.properties.filter(property => {
          return property.id !== action.payload.id
        })
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
