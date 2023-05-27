import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import { Box, useTheme } from '@mui/material';
import { ResponsiveCalendar } from '@nivo/calendar';
import moment from 'moment';



const Dashboard = () => {
  
  const [projects, setProjects] = useState([]);

  const [updates, setUpdates]= useState([]);

  const [tasks, setTasks] = useState([])
  
  const theme = useTheme();
  

 

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

  useEffect(() => {
    axios.get('http://localhost:5001/tasks/getTasksStatus')
    .then((response) => {
      setTasks(response.data)
      console.log(tasks)
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
    {
      id: 'Delayed',
      label: 'Delayed',
      value: projects.filter(p => p.completed === 'Delayed').length,
      color: 'hsl(200, 70%, 50%)'
    }
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

  const calenderInfo = () => {
    // Create an object to count the number of tasks due on each date
    const taskCounts = {};

    tasks.forEach((task) => {
      const dueDate = moment.utc(task.dueDate).format('YYYY-MM-DD');
      if (taskCounts[dueDate]) {
        taskCounts[dueDate]++;
      } else {
        taskCounts[dueDate] = 1;
      }
    });

    projects.forEach((project) => {
      const dueDate = moment.utc(project.dueDate).format('YYYY-MM-DD');
      if(taskCounts[dueDate]){
        taskCounts[dueDate]++;
      } else {
        taskCounts[dueDate] = 1;
      }
    });
  
    // Create an array of objects representing each day on the calendar
    const today = moment().startOf('day');
    const endDate = moment().add(1, 'year').startOf('day');
    const days = [];
    while (today.isBefore(endDate)) {
      const dateStr = today.format('YYYY-MM-DD');
      days.push({
        day: dateStr,
        value: taskCounts[dateStr] || 0,
      });
      today.add(1, 'day');
    }
    return days;
  };


  const chartTheme = {
    textColor: theme.palette.text.secondary, // Use the text color from the MUI theme
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    tooltip: {
      container: {
        background: theme.palette.background.paper, // Use the background color from the MUI theme
        color: theme.palette.text.secondary, // Use the text color from the MUI theme
      },
    },
  };

  return (

    <div>

      <Box sx={{ display: 'flex'}}>
        <Box sx={{height:500, width: 500}}>
          <div style={{textAlign: 'center'}}>
            <h2>Project Status</h2>
          </div>
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
            theme={chartTheme}
          />
        </Box>
        <Box sx={{height:500, width: 500}}>
        <div style={{textAlign: 'center'}}>
            <h2>Updates Posted</h2>
          </div>
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
          theme={chartTheme}
          
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
        </Box>
      </Box>

      <Box>
        <br></br>
        <br></br>
        <br></br>
      </Box>

      <Box sx={{height:300, width: 1000}}>
        <div style={{textAlign: 'center'}}>
          <h2>Tasks Calendar</h2>
        </div>
        <ResponsiveCalendar
          data={calenderInfo()}
          from={moment().subtract(2, 'month').format('YYYY-MM-DD')}
          to={moment().add(12, 'month').format('YYYY-MM-DD')}
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{ top: 50, right: 40, bottom: 50, left: 40 }}
          theme={chartTheme}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[      
            {        
              anchor: 'bottom-right',
              direction: 'row',        
              translateY: 36,        
              itemCount: 4,        
              itemWidth: 42,        
              itemHeight: 36,        
              itemsSpacing: 14,        
              itemDirection: 'right-to-left',
            },    
          ]}
        />
      </Box>

    </div>
  ) 
}

export default Dashboard;