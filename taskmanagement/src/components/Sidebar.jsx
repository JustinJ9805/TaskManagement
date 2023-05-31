import React from 'react'
import{
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import{
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    //PortraitOutlinedIcon,
    //CreateNewFolderOutlinedIcon,
    //FolderOpenOutlinedIcon,
    TodayOutlined,
   // CalenderMonthOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    PersonAddOutlined,
    CreateNewFolderOutlined,
    FolderOpenOutlined,
    PortraitOutlined,
    CalendarMonthOutlined,
    
    //CreateNewFolderOutlined
} from "@mui/icons-material";
import { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from 'assets/picture.jpeg';
import PlusOneIcon from '@mui/icons-material/PlusOne';




const navItems = [
    
    {
        text:"Dashboard",
        link: 'Dashboard',
        icon: <HomeOutlined />
    },
    {
        text:"Projects",
        icon: null,
    },
    {
        text: "New Task",
        link: 'NewTask',
        icon:<PlusOneIcon/>
    },
    {
        text: "New Update",
        link: 'NewUpdate',
        icon:<PlusOneIcon/>
    },
    {
        text:"New Project",
        link: 'NewProject',
        icon: <CreateNewFolderOutlined  />,
        isModal: true,
        //onClick: () => setIsNewProject(true)
    },
    {
        text:"Projects",
        link: 'Projects',
        icon: <FolderOpenOutlined />
    },
    {
        text:"People",
        icon: null,
    },
    {
        text:"New Employee",
        link: 'NewEmployee',
        icon: <PersonAddOutlined />,
    },
    {
        text:"Employee",
        link: 'Employee',
        icon: <PortraitOutlined />
    },
    {
        text:"Dates",
        icon: null,
    },
    {
        text:"Today",
        link: 'Today',
        icon: <TodayOutlined />
    },
    {
        text:"Monthly",
        link: 'Monthly',
        icon: <CalendarMonthOutlined />
    },
    {
        text:"",
        icon: null,
    },
    {
        text:"Setting",
        link: 'Setting',
        icon: <SettingsOutlined />
    },
    
]


const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();



    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

  return <Box component = "nav">
    {isSidebarOpen && (
        <Drawer
            open = {isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant='persistent'
            anchor='left'
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper" : {
                    color: theme.palette.secondary[200],
                    backgroundColor : theme.palette.background.alt,
                    boxSixing: "border-box",
                    borderWidth: isNonMobile ? 0 : "2px",
                    width: drawerWidth
                }
            }}
        >
            <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant='h4' fontWeight="bold">
                                Expansion Pack
                            </Typography>
                        </Box>
                        {!isNonMobile &&(
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>
                <List>
                    {navItems.map(({ text,icon,link,isModal }) => {
                        if(!icon){
                            return(
                                <Typography key={text} sx={{m: "2.25rem 0 1rem 3rem"}}>
                                    {text}
                                </Typography>
                            )
                        }
                        const lcLink = link.toLocaleLowerCase();

                        return(
                            <ListItem key={link} disablePadding>
                                <ListItemButton
                                    onClick={() => { 
                                        //modal here
                                        navigate (`/${lcLink}`);
                                        setActive(lcLink);
                                    }}
                                        sx={{
                                            backgroundColor: active === lcLink 
                                            ? theme.palette.secondary[300]
                                            : "transparent",
                                            color: active === lcLink 
                                            ? theme.palette.primary[600]
                                            : theme.palette.secondary[100],
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ml: "2rem",
                                                color: active === lcLink 
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[200],
                                            }}
                                        >
                                         {icon}   
                                        </ListItemIcon>
                                        <ListItemText primary = {text}/>
                                        {active === lcLink && (
                                            <ChevronRightOutlined sx = {{ml: "auto"}} />
                                        )}
                                    </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Drawer>
    )}    
  </Box>;
};

export default Sidebar