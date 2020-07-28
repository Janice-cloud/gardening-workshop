import axios from 'axios';
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, PROJECTS_LOADING} from './types';

//const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001'

export const getProjects = () => dispatch => {
    dispatch(setProjectLoading());
    axios
        // .get(BASE_URL + '/api/projects-routes')
        .get('/api/projects')
        .then(res => 
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            }))
}


export const addProject = project => dispatch => {
    axios
        .post('/api/projects', project)
        .then(res => 
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            }))
}

export const deleteProject = id => dispatch => {
    axios.delete(`/api/projects/${id}`).then(res =>
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        }))
}


export const setProjectLoading = () => {
    return {
        type: PROJECTS_LOADING
        
    }
}