import React, { useState } from 'react'
import './style.css'
import { makeStyles, Box, FormControl, Select, MenuItem, Menu, Divider, Paper, MenuList, Typography } from "@material-ui/core"
import { ExpandMore, Search } from '@material-ui/icons'

// class styles
const useStyles = makeStyles((theme) => ({
    searchBoxArea: {
        // backgroundColor: '#faaa',

        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '578px',
        height: '30px',
        border: '1.5px solid #afafaf',
        borderRadius: '100px',
        paddingInline: '10px'

    },
    hr: {
        height: '30px',
        margin: 0,
        padding: 0,
        marginInline: '10px'
    },

    subBox: {
        // backgroundColor: '#a77',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },

    iconDiv: {
        display: 'flex',
        flexDirection: 'row'
    },

    iconDivider: {
        margin: '2px',
        marginInline: '10px',
    },
    subTextArea: {
        width: '232px'
    },

    menu: {
        width: '250px'
    },

    searchInput: {
        // color: "#5dd",
        fontSize: '17px',
        border: 'none',
        outline: 'none'
    }



}));



const MenuOptionList = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5",
]



const SearchBox = () => {
    const classes = useStyles()

    const [SelectedCategory, setSelectedCategory] = useState(MenuOptionList[0])
    const [isCategoryMenuOpened, setIsCategoryMenuOpened] = useState(false);

    const [searchText, setSearchText] = useState("")

    const handleClick = (event) => {
        setIsCategoryMenuOpened(event.currentTarget);
    };

    const handleClose = () => {
        setIsCategoryMenuOpened(null);
    };


    const handleMenuClick = (data) => {
        setSelectedCategory(data)
        handleClose()
    }



    // search text handler
    const handleSearchText = (text) => {
        console.log(text);
        setSearchText(text)
    }



    return (
        <Box className={classes.searchBoxArea} >

            <Box className={classes.subBox} onClick={handleClick} >
                <Box className={classes.subTextArea} >
                    <Typography>{SelectedCategory}</Typography>
                </Box>
                <Box className={classes.iconDiv} >
                    <hr className={classes.iconDivider} />
                    <ExpandMore />
                </Box>
            </Box>


            <Paper >
                <Menu
                    id="simple-menu"
                    anchorEl={isCategoryMenuOpened}
                    keepMounted
                    open={isCategoryMenuOpened}
                    onClose={handleClose}
                >
                    {
                        MenuOptionList.map((data, i) => {
                            return (
                                <span key={i} >
                                    <MenuItem className={classes.menu} onClick={() => handleMenuClick(data)}>{data}</MenuItem>
                                    <Divider />
                                </span>
                            )
                        })
                    }

                </Menu>
            </Paper>


            <hr className={classes.hr} />
            <Box className={classes.subBox} >
                <Box className={classes.subTextArea} >
                    {/* <Typography> Search</Typography> */}
                    <input type="text" placeholder="Search" value={searchText} onChange={e => { handleSearchText(e.target.value) }} className={classes.searchInput} />
                </Box>
                <Box className={classes.iconDiv} >
                    <hr className={classes.iconDivider} />
                    <Search />
                </Box>
            </Box>

        </Box>
    )
}

export default SearchBox
