import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';


const Dashboard = () => {



  const [projects, setProjects] = useState([]);

  const [updates, setUpdates]= useState([]);

  

  useEffect(() => {
    axios.get('http://localhost:5001/project/getProjectStatus')
    .then((response) => {
      setProjects(response.data)
      //console.log(projects)
    }).catch(error => {
      console.log(error)
    });
  }, [])

  useEffect(()=> {
    axios.get('http://localhost:5001/updates/getUpdateStatus')
    .then((response) => {
      setUpdates(response.data)
      console.log(updates);
      
    }).catch(error => {
      console.log(error)
    });
  }, [])

  



  const projectData = [
    {
      id: 'Completed',
      label: 'Completed',
      value: projects.filter(p => p.completed === 'Completed').length,
      color: 'hsl(150, 70%, 50%)',
    },
    {
      id: 'In Progress',
      label: 'In Progress',
      value: projects.filter(p => p.completed === 'In Progress').length,
      color: 'hsl(0, 70%, 50%)',
    },
    {
      id: 'New',
      label: 'New',
      value: projects.filter(p => p.completed === 'New').length,
      color: 'hsl(240, 70%, 50%)',
    },
  ];


  const updateData = updates.reduce((acc, update) => {
    const existingItemIndex = acc.findIndex(item => item.id === update.name);
    if (existingItemIndex >= 0) {
      // If an item with the same name already exists, increment its value
      acc[existingItemIndex].value += 1;
    } else {
      // Otherwise, add a new item with a value of 1
      acc.push({
        id: update.name,
        label: update.name,
        value: 1,
        color: 'hsl(120,70%, 50%)',
      });
    }
    return acc;
  }, []);




  

  return (

    <div style={{}}>
      
      <div style={{height: '400px'}}>
      <h2>Project Status</h2>
        <ResponsivePie
          data={projectData}
          margin={{ top: 40, right: 120, bottom: 80, left: 120 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'paired' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
        />
        
      </div>

      <div style={{height: '400px'}}>
        <h2>Contributions</h2>
        <ResponsiveBar
        data={updateData}
        keys={['value']}
        layout='horizontal'
        indexBy="id"
        margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: 'Number of Updates',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
      </div>
    </div>
    
  ) 
}

export default Dashboard;