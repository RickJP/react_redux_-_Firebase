import React from 'react'

const ProjectDetails = (props) => {

  const id = props.match.params.id;

 
  return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eos itaque quidem assumenda magni, id ab, error obcaecati tempora ducimus quam quo fuga. Accusamus nam vero aut a harum quasi!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Rick</div>
          <div>7 October 2018</div>
        </div>
      </div>
    </div>
  )
}


export default ProjectDetails