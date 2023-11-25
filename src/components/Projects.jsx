import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faInstagram
} from "@fortawesome/free-brands-svg-icons";


let icount = 1;

function Project(props){

  const [name,setName] = useState(props.name) ;
  
  const nextItem = () => {

    if (icount === 3){icount = 0};
    setName(props.proj[icount++].name)

  };

  return (

    <div className='about-space container-divider'>


    <Col md={12} sm={12} className='about-content'>

      <Row>
        <Col sm={12} xs={12} className="about-header">
          <div>
            Projects
          </div>
        </Col>
      </Row>

      <div className='project-container'>
        <div className="project-div left"><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
        <div className="project-div center">{name}</div>
        <div className="project-div right"><FontAwesomeIcon icon={faInstagram} size="2x" onClick={() => nextItem()}/></div>

      </div>
    </Col>
  </div>

 
  )
}

function Projects(){
  
  const projects = [

    {id:1,name:"local"},
    {id:2,name:"kid"},
    {id:3,name:"king"},  
  ]

 return(
     <div>
      <Project proj={projects} 
      name = {projects[0].name}/>
     </div>
 )
}


export default Projects;