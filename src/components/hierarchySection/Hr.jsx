import React from 'react'
import './style.css'

import BuildingIcon from '../../icons/icon_building.svg'

import { makeStyles, Box, Typography } from '@material-ui/core'
import { BorderBottom, Business } from '@material-ui/icons'

import LabelCom from "./label1/Label"
import Data from '../../Data'


// class styles
const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor: '#f3f3f3',

        marginTop: "12px",
        padding: '2px',
        minHeight: 'fit-content'
    },

    main_container: {
        maxHeight: '600px',
        overflowY: 'auto'
    },

    source_name: {
        color: "#8a007a",
        fontSize: '22px',
        fontWeight: 780,
        marginBottom: '10px'
    },

    source_name_icon: {
        fontSize: '40px',
        color: "#8a007a",
        padding: "2px",
        height: '30px',
        width: '30px'
    },

    legal_name_section: {
        // backgroundColor: '#aaaa',

        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },

    legal_name_text_div: {
        // backgroundColor: '#a55',

        marginInline: '20px',
        paddingBottom: '10px',
        width: '100%',
        borderBottom: '1px solid #afafaf'
    },

    legal_name: {
        fontSize: "18px",
        color: '#9f9f9f',
        fontWeight: 548,
        // paddingInline: '20px'
    },

    legal_name_small_description: {
        fontSize: "13px",
        color: '#9f9f9f',
        fontWeight: 548,
        // paddingInline: '20px'
    },
    legal_name_icon: {
        backgroundColor: '#fff',

        zIndex: 10,
    }


}));




const Hierachy = ({ data }) => {
    const classes = useStyles()

    console.log(data);

    const { source_name, data_points, module_code } = data
    const { legal_name } = data_points

    var new_data_points = data_points

    delete new_data_points.id
    delete new_data_points.legal_name
    delete new_data_points.type 

    new_data_points = Object.entries(new_data_points)
    console.log(new_data_points);

    return (
        <Box className={classes.container} >

            {/* Source Name */}
            <Typography className={classes.source_name}>
                {source_name}
            </Typography>


            <Box className={classes.main_container} >


                {/* Legal Name Section */}
                <Box className={classes.legal_name_section} >
                    {/* <Business className={classes.source_name_icon} /> */}
                    <Box className={classes.legal_name_icon} >
                        <img src={BuildingIcon} alt="Icon" className={classes.source_name_icon} />
                    </Box>
                    <Box className={classes.legal_name_text_div} >
                        <Typography className={classes.legal_name} >{legal_name}</Typography>
                        <Typography className={classes.legal_name_small_description} >
                            Corporates
                        </Typography>
                    </Box>
                </Box>



                {/* Outer Section with ;eft border */}
                <ul className="tree">

                    

                    <li><LabelCom />
                        <ul>
                            <li><LabelCom /> </li>
                        </ul>
                    </li>
                    <li><LabelCom />
                        <ul>
                            <li><LabelCom /> </li>
                        </ul>
                    </li>
                    <li><LabelCom /></li>

                </ul>







            </Box>
        </Box>
    )
}

export default Hierachy
