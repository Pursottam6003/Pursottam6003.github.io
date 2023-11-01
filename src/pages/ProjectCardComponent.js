import React from 'react';
import { styled } from '@mui/material/styles';

import {CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Card } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import chatAnalyzer from '../images/projects/chat_analyzer.jpg'
import Airavat from '../images/projects/airavat.jpg'
import Atulyam from '../images/projects/atulyam.png'
import BakewithLove from '../images/projects/bakeWithLove.jpg'
import HousePricePrediction from '../images/projects/housePricePrediction.webp'
import IoclTracker from '../images/projects/iocl.jpeg'
import SmartNaka from '../images/projects/apsn.jpeg'
import Technodaya from '../images/projects/technodaya.jpg'
 


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MyCardComponent = ({ projectTitle, imgsrc,period, shortDesc, codeSrc, demoSrc, para1, para2 }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className='Projtitle'>
          {projectTitle}
        </div>
        <div style={{ padding: 4, textAlign: "center", background: "#fc5356", color: "#ffffff", fontSize: 12, display: "inline-block", marginBottom:5, borderRadius: 16, fontWeight: 600 }}>{period} </div>
      </div>
      <div />
      <CardMedia
        component="img"
        height="194"
        image={imgsrc}
        alt="cake"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
        <IconButton aria-label="share">
          <a href={codeSrc}>
            <LinkIcon />
          </a>
        </IconButton>
        <a href={codeSrc}>
          <div className="source">Source Code</div>
        </a>
        <a href={demoSrc}>
          <div className="demo">View Demo</div>
        </a>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {para1}
          </Typography>

          <Typography paragraph>
            {para2}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default function ProjectCardComponent() {
  const projectDetails = [
    { projectTitle: 'Chat_Analyzer', imgsrc: chatAnalyzer,period:'July 2023 - Aug 2023', shortDesc: 'Ultimate companion in unraveling the secrets of online chating', codeSrc: 'https://github.com/Pursottam6003/chat_analyzer', demoSrc: 'chat-analyzer-mdjk.onrender.com/', para1: ' A web application that enables users to analyze chat conversations to extract valuable insights', para2: ' Helps to understand user behavior and identify patterns. It processes the data to give visual insights of analysis.' },
    { projectTitle: 'Atulyam 23', imgsrc: Atulyam,period:'April 2023 - May 2023', shortDesc: 'Cultural fest Website for NIT AP ', codeSrc: 'http://github.com/tripathics/atulyam-2023', demoSrc: 'https://atulyam23.com', para1: 'Contributed the cultural fest Website for NIT AP', para2: ' ReactJs is used in the frontend and Firebase is used at the backend for registered users information.' },
    { projectTitle: 'IOCL Tracker', imgsrc: IoclTracker,period:'Dec 2022 - Jan 2023', shortDesc: 'MERN application:  Vehicle Tracking and Management System ', codeSrc: 'https://github.com/tripathics/iocl-tracker', demoSrc: 'https://github.com/tripathics/iocl-tracker', para1: 'ReactJs is used in the frontend and we styled the whole frontend by the help of Material UI (MUi)', para2: 'ExpressJs, NodeJs and MongoDB  with JWT authentication  in the backend.' },
    { projectTitle: 'Ethos: Smart-Naka', imgsrc: SmartNaka,period:'Dec 2022 - Jan 2023',  shortDesc: 'A react Native application which helps Assam Police to catch thiefts at Naka', codeSrc: 'https://github.com/Pursottam6003/smart-naka', demoSrc: '#', para1: 'We developed this application during the Ethos The coding contest at IIT Guwahati', para2: 'React Native used with the help of React Native paper and we trained our model using YOLO V3' },
    { projectTitle: 'House Price Prediction', imgsrc: HousePricePrediction, period:'Dec 2022',  shortDesc: 'Trained the regression model for house price prediction', codeSrc: 'https://colab.research.google.com/drive/1nnoUPiE8rUWB4CWaVuOAJwJdydCYkA9u', demoSrc: 'https://colab.research.google.com/drive/1nnoUPiE8rUWB4CWaVuOAJwJdydCYkA9u', para1: 'A House Price pediction model is trained with the help of house dataset ', para2: 'Scikit learn is used for training the model' },
    { projectTitle: 'Technodaya Magazine', imgsrc: Technodaya,period:'Aug 2022 - Oct 2023',  shortDesc: 'Technodaya NIT Arunachal Pradesh Web Magazine ', codeSrc: 'https://github.com/Pursottam6003/Designathon-for-one', demoSrc: 'https://technodaya.netlify.app/', para1: ' The newsletter website of NIT Arunachal Pradesh, Admin can fill out the form and generate monthly magazine.', para2: ' ReactJs is used in frontEnd and Google Firebase is used as a backend for server authentication, and databases of magazines.' },
    { projectTitle: 'Airavat', imgsrc: Airavat,period:'Sept 2022 - Oct 2022',  shortDesc: 'Bus Tracking and Management System for NIT AP Students', codeSrc: 'https://github.com/tripathics/airavat-nodejs', demoSrc: 'https://github.com/tripathics/airavat-nodejs', para1: '  A beta version of the Bus Tracking and Navigation. System was completed for more than 1000 college students.', para2: ' A lightweight website is developed and ReactJs is used as a framework. As hardware components, we used the Node MCU (ESP8266) and GPS Module (NEOSIM900A)' },
    { projectTitle: 'E Commerce Website', imgsrc: BakewithLove, period:'July 2022 - Aug 2022',  shortDesc: 'Developed E-Commerce Web application Bake with Love', codeSrc: 'https://github.com/Pursottam6003/bake_with_love', demoSrc: 'https://pursottam6003bakewithlove.netlify.app/', para1: 'ReactJs is used in the frontend and Firebase is used at the backend for server authentication, Databases, and Cart Products.', para2: 'Stripe Payment gateway is used for online payment which improves business sales by about 200%.' },
  ]
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>

    <div className="Projects reveal">
      {projectDetails.map(val => {
        return <MyCardComponent key={val.projectTitle} {...val} />
      })}
    </div>
    </>
  )
}
