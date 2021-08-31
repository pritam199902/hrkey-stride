import React from 'react'


import BuildingIcon from '../../../icons/icon_building.svg'
import { makeStyles, Box, Typography } from '@material-ui/core'





// class styles
const useStyles = makeStyles((theme) => ({
   
    label_text_div: {
        // backgroundColor: '#a55',

        // marginTop: '0px',
        marginInline: '20px',
        paddingBottom: '10px',
        width: '100%',
        borderBottom: '1px solid #afafaf'
    },

    label_name: {
        fontSize: "18px",
        color: '#9f9f9f',
        fontWeight: 540,
    },

    label_small_description: {
        fontSize: "14px",
        color: '#9f9f9f',
        fontWeight: 540,
    },





    label_outer: {
        // backgroundColor: '#efe',

        display: "flex",
        flexDirection: "column",
        // alignItems: 'center',
        borderLeft: '2px solid #afafaf',
        // paddingLeft: '20px',
        marginLeft: '38px'
    },





    label: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: '20px',
        // marginTop: '10px',
        // position: 'relative',
        maxWidth: '100%',
        minWidth: 'max-content',

        // minWidth: '800px'
    },
    label_icon_area: {
        // backgroundColor: '#afafaf',
        // position: 'absulite'

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '30px',
        width: '32px',
        padding: '2px',
        border: '2px solid #8a007a',
        borderRadius: '50px'
    },
    label_icon: {
        // fontSize: '22px',
        color: "#8a007a",
        padding: "2px",
        height: '25px',
        width: '25px'
    },

    label_title_content:{
        display: 'flex',
        justifyContent: 'space-between'
    },

    info_content:{
        display: 'flex',
        justifyContent: 'space-between'
    },

    info :{
        paddingInline: '6px',
        textAlign: 'center',
        height: '15px',
        border: '1px solid #afafaf' ,
        borderRadius: '5px',
        marginInline: '3px'
    },

    info_text:{
        fontSize: '10px',
        color: '#afafaf',
        // paddingTop: '5px'
    },

    info_danger :{
        paddingInline: '6px',
        textAlign: 'center',
        height: '15px',
        border: '1px solid #fa3232' ,
        borderRadius: '5px',
        marginInline: '3px'
    },
    
    info_danger_text:{
        fontSize: '10px',
        color: '#fa3232',
        // paddingTop: '5px'
    }

}));




const Label1 = () => {

    const classes = useStyles()



    return (
        <Box className={classes.label} id="sideupper" >
            <Box className={classes.label_icon_area} >
                {/* <Business className={classes.label_icon} /> */}
                <img src={BuildingIcon} alt="Icon" className={classes.label_icon} />
            </Box>
            <Box className={classes.label_text_div} id="label" >
                <Box className={classes.label_title_content} >
                    <Typography className={classes.label_name} >ACS Actividades de Construccion y Service</Typography>
                    <Box className={classes.info_content} >

                        <Box className={classes.info_danger} >
                            <Typography className={classes.info_danger_text} >100%</Typography>
                        </Box>
                        <Box className={classes.info} >
                            <Typography className={classes.info_text} >100%</Typography>
                        </Box>
                        <Box className={classes.info} >
                            <Typography className={classes.info_text} >100%</Typography>
                        </Box>

                    </Box>
                </Box>

                <Typography className={classes.label_small_description} >Corporates</Typography>
            </Box>
        </Box>
    )
}

export default Label1
