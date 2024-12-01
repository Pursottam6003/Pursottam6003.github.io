import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import gear from '../images/gear.svg'

function createData(name, icons) {
    return { 
        name, 
        icons: icons.map((icon, i) => {
            if (icon === undefined) return <span key={i}>Undefined</span>
            const {id, name} = icon;
            return <span key={i}><img src={`/skills/${id}.svg`} className='skillIcon' alt={name} /><span>{name}</span></span>
        }) };
  }

  
  const rows = [
    // createData(`CS Fundamentals`, {id: 'bash', name: 'Bash'}, 'Data Structures', 'Algorithms','OOPs', 'DBMS', 'Computer Networking','Operating Systems'),
    createData('Programming Languages', [{id: 'cpp', name: 'C/C++'}, {id: 'python', name: 'Python'} , {id: 'java', name: 'Java'}, {id: 'javascript', name: 'JavaScript'}, {id: 'cpp', name: 'SQL'}, {id:'postgres', name:'PostgreSQL'}]),
    createData('Web Development', [{ id: 'html', name:'HTML/CSS'}, {id:'javascript', name:'Javascript'}, {id:'nodejs', name:'NodeJS'}, {id:'react',name:'ReactJs'}]),
    createData('Frameworks', [{id:'flask', name:'Flask'}, {id:'expressjs', name:'ExpressJS'}, {id:'react', name:'ReactJS'}, {id:'nodejs', name:'NodeJS'}, {id:'bootstrap', name:'Bootstrap'}, {id:'materialui', name:'Material UI'}]),
    createData('Databases', [{id:'mysql', name:'MySQL'}, {id:'mongodb', name:'MongoDB'}, {id:'firebase', name:'Firebase'}, {id:'aws', name:'AWS (Basics)'}, {id: 'rightscale', name: 'RightScale'}]),
    createData('Machine Learning', [{id:'python', name:'Python'}, {id:'pandas', name:'Pandas'}, {id:'numpy', name:'Numpy'}, {id:'tensorflow', name:'Tensorflow'}]),
    createData('Tools', [{id:'dbviewer', name:'Dbviewer'}, {id:'datadog', name: 'DataDog'}, {id:'splunk', name:'Splunk'}, {id:'postman', name:'Postman'}, {id:'jira', name:'One Jira'}, {id:'jenkins',name:'Jenkins' },{id:'mobaxterm', name:'MobaXterm'}]),
    createData('Version Control', [{id:'git', name:'Git'}, {id:'github', name:'GitHub'}, {id:'bitbucket', name:'BitBucket'}, {id:'gitlab', name:'GitLab'}]), 
  ];

export const Skills = () =>{
    return (
<>
    <div className='bound'>
        <h3>Technical Skills</h3>
    </div>

    <div className='skillsRotator'>
        <img src={gear} style={{width:'50px'}} alt="gear" className="gear"></img>
    </div>
    <TableContainer component={Paper} style={{ maxWidth: 1000, margin: "auto" }}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" className='skillCategory' scope="row">{row.name}</TableCell>
              <TableCell component="th" className='skills' scope="row">
              <div style={{display:'flex', gap: "1.2rem", flexWrap:'wrap', justifyContent:'flex-start'}}>
                {row.icons}
              </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
    )
}
 