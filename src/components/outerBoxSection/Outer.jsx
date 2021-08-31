import React, { useState } from 'react'
import './style.css'
import { makeStyles, Container, Box, Grid, Button, Typography } from '@material-ui/core'
import SearchBox from '../searchSection/SearchBox';
// import Hierachy from '../hierarchySection/Hierachy';
import Hierachy from '../hierarchySection/Hr';
import { CloudUpload, CloudUploadOutlined, ExpandMore } from '@material-ui/icons';

// demo data
import Data from '../../Data'


// class styles
const useStyles = makeStyles((theme) => ({
    main: {
        paddingInline: '10px'
    },
    container: {
        // backgroundColor: '#f3f3f3',

        marginTop: '10px',
        padding: '20px',
        border: '2px solid #afafaf',
        borderRadius: '10px',
        minWidth: '70%',
        maxWidth: 'fit-content',
        width: 'fit-content'

    },

    search: {
        // backgroundColor: "#666",
        // alignItems: 'center',
    },

    clientPass: {
        // backgroundColor: "#666",
        // alignItems: 'center',

        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
        justifyContent: 'space-between',
    },

    clientPasssBtn: {
        paddingInline: '30px',
        borderColor: '#8a007a',
        color: "#8a007a"
    },

    sourceSelectBtn: {
        display: "flex",
        flexDirection: 'row',
        padding: '5px 10px',
        border: '1px solid #afafaf',
        borderRadius: '50px',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    sourceBtnText: {
        color: "#777",
        fontWeight: 555,
        fontSize: '15px'
    },

    hr_container: {
        display: 'flex',
        flexDirection: 'row'
    }
}));


const Outer = () => {

    const classes = useStyles()

    // const data = Data.data.filter(d => d.source_name.toLowerCase() === "orbis")
    const data = Data.data
    // console.log(data);

    const [selectedSources, setSelectedSources] = useState(["Source1"])
    const [filteredData, setFilteredData] = useState(data)


    return (
        <Box className={classes.main} >

            <Container maxWidth="md" className={classes.container} >

                <Box className={classes.search} >
                    <SearchBox />
                </Box>

                <Box className={classes.clientPass} >
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.clientPasssBtn}
                        startIcon={<CloudUploadOutlined />}
                    >
                        Import data from Client Pass
                    </Button>
                    <Box className={classes.sourceSelectBtn} >
                        <Typography className={classes.sourceBtnText} >Choose sources to display </Typography>
                        <ExpandMore />
                    </Box>
                </Box>

                {
                    filteredData.length === 1 ? <Hierachy data={filteredData[0]} />
                        :
                        <Grid container justifyContent="space-evenly" spacing={1} >
                            {
                                filteredData.map((data, i) => {
                                    return (
                                        <Grid key={i} item >
                                            <Hierachy data={data} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                }


            </Container>
        </Box>

    )
}

export default Outer
