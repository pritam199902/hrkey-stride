import React, { useState } from 'react'
import './style.css'
import clsx from 'clsx'
import { makeStyles, Box, Button, Typography, InputAdornment, TextField, Input, Select, FormHelperText, FormControl, Divider, InputLabel, MenuItem } from '@material-ui/core'
import { borderColor } from '@material-ui/system'



const primaryColor = '#45175c'
const primaryColor1 = '#581d74'

const useStyles = makeStyles(theme => ({
    templateBtn: {
        borderColor: primaryColor1,
        color: primaryColor1,
        textTransform: 'none',
        marginTop: '30px',
        paddingInline: '30px'
    },

    infoTitle: {
        fontSize: '18px',
        marginTop: '25px',
    },

    formControl: {
        marginBottom: '10px'
    },

    inputs: {
        // padding: '10px'
        color: '#d665a7',
        fontSize: '12px'
    },

    nextBtn: {
        backgroundColor: primaryColor,
        color: '#fff',
        margin: '5px 0px',
        border: 'none',
        borderRadius: '5px',
        padding: '8px',
        fontSize: '14px',
        textTransform: 'Capitalize',
        cursor: 'pointer'

    },
    resetBtn: {
        backgroundColor: '#fff',
        color: primaryColor,
        border: `1px ${primaryColor} solid`,
        borderRadius: '5px',
        margin: '5px 0px',
        padding: '8px',
        fontSize: '14px',
        textTransform: 'Capitalize',
        cursor: 'pointer'
    },


}))


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



const EntityInfo = () => {

    const classes = useStyles()

    const initData = {
        isActive: false,
        refId: '',
        legalEntityName: '',
        country: ''
    }
    const [Data, setData] = useState(initData)
    // const [age, setAge] = React.useState('');
    const [countryList, setCountryList] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        // setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleReset = () => {
        setData(initData)
    }







    return (
        <Box className="entity-info-container" >
            <Typography className={classes.infoTitle} >Entity's Infomation</Typography>



            <Button
                variant="outlined"
                // href="#outlined-buttons"
                className={classes.templateBtn}
            >
                Use a template
            </Button>




            <Box className="form" >



                <Box className="input-section" >

                    <FormControl fullWidth={true} className={classes.formControl} >
                        <TextField
                            value={Data.refId}
                            // onChange={handleChange('weight')}
                            size="small"
                            label="RAF ID *"
                            // color="primary"
                            // variant="filled"
                            className={classes.inputs}
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="ref-id"
                            error={false}
                            inputProps={{
                                
                            }}

                        />
                        <FormHelperText className={classes.normalLabel} id="ref-if">normal label</FormHelperText>
                        <FormHelperText className={classes.descriptionLabel} id="ref-if">description label</FormHelperText>
                        <FormHelperText className={classes.errorLabel} id="ref-if">error label</FormHelperText>
                    </FormControl>

                    <FormControl fullWidth={true} className={classes.formControl} >
                        <TextField
                            value={Data.legalEntityName}
                            // onChange={handleChange('weight')}
                            size="small"
                            label="Legal Entity Name *"
                            // variant="filled"
                            // color="primary"
                            className={classes.inputs}
                            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                            aria-describedby="ref-id"
                            error={false}
                            inputProps={{

                            }}

                        />
                        <FormHelperText id="ref-if">Weight</FormHelperText>
                        <FormHelperText id="ref-if">Weight</FormHelperText>
                    </FormControl>


                    <Divider />


                    <Typography className={classes.infoTitle} >Entity's Infomation</Typography>


                    <FormControl fullWidth={true} className={classes.formControl}>
                        <InputLabel id="country">Country</InputLabel>

                        <Select
                            labelId="country"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={Data.country}
                            onChange={handleChange}
                        >



                            <MenuItem value={10}>Ten</MenuItem>
                            <Divider />
                            <MenuItem value={20}>Twenty</MenuItem>
                            <Divider />
                            <MenuItem value={30}>Thirty</MenuItem>
                            <Divider />

                        </Select>



                    </FormControl>




                </Box>


                <Box className="btn-section" >
                    <button className={classes.nextBtn} >next</button>
                    <button className={classes.resetBtn} onClick={handleReset} >reset</button>
                </Box>


            </Box>






        </Box>
    )
}

export default EntityInfo
