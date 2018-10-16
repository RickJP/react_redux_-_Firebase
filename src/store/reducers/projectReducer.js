
const initState = {
  projects: [
    {id: '1', title:'Start booting up the servers', content:'walk over to them....'},
    {id: '2', title:'Clean out the closet', content:'Do not forget to clean the corners.'},
    {id: '3', title:'Start booting up the servers', content:'walk over to them....'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created project', action.project);
      return state;

    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error', action.err);
      return state;
    default:
    return state;
  }
}


export default projectReducer