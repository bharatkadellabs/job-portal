import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Autocomplete, Checkbox, Chip, FormControl, Grid, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import axios from 'axios';
import { Margin } from '@mui/icons-material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const percentage = [
    { label: 'Above 50%', percentageAvarge: 50 },
    { label: 'Above 65%', percentageAvarge: 65 },
    { label: 'Above 85%', percentageAvarge: 85 },
    { label: 'Above 95%', percentageAvarge: 95 },

];

const course = [
    { graduation: "B-Tech" },
    { graduation: "Computer Science" },
    { graduation: "MCA" },
    { graduation: "M-Tech" },

];
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
export default function CustomizedDialogs({ openPopup, setOpenPopup, setFilterData }) {
    const [collegeData, setCollegeData] = React.useState([])
    const [filterCollegeName, setFilterCollegeName] = React.useState([])
    const [filterCourse, setFilterfilterCourse] = React.useState([])
    const [filterPercentage, setFilterPercentage] = React.useState(0)
    console.log('collegeData', collegeData)



    console.log('allCollegeId', filterCollegeName)
    React.useEffect(() => {
        getCollegeName();
    }, [])

    const getCollegeName = async () => {
        await axios.get("http://localhost:8000/getCollegeData").then((res) => {
            setCollegeData(res.data.data)
        })
    }
    const handleClose = () => {
        setOpenPopup(false);
    };
    const handleCollegeNameForFilter = (e) => {
        console.log(e)
        let allCollegeId = []
        for (let index = 0; index < e.length; index++) {
            const id = e[index]._id;
            allCollegeId.push(id)
        }

        setFilterCollegeName(allCollegeId);
    }
    const handleCourseForFilter = (e) => {
        console.log(e)
        console.log(e)
        let allCourse = []
        for (let index = 0; index < e.length; index++) {
            const graduation = e[index].graduation;
            allCourse.push(graduation)
        }
        setFilterfilterCourse(allCourse);
    }
    const handlerPercentage = (e) => {
        console.log(e.percentageAvarge)
        setFilterPercentage(e.percentageAvarge);
    }
    const handleFilter = () => {
        setOpenPopup(false);
        const obj = {
            colleges: filterCollegeName,
            courses: filterCourse,
            percentage: filterPercentage
        }
        console.log("obj", obj)
        setFilterData({ filterCollegeName, filterCourse, filterPercentage })

    };
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openPopup}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Search Students By Fillter
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid
                        container
                        spacing={4}
                        className="inspection-filter-modal-margins"
                    >
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <label style={{ marginBottom: '5px' }}
                                    className="inspection-filter-modal-label"
                                    htmlFor="Inspectors"
                                    id="demo-simple-select-label"
                                >
                                    Filter By COLLEGE NAME
                                </label>
                                <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={collegeData}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.cName}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.cName}
                                        </li>
                                    )}
                                    getOptionSelected={(option, value) => option.value === value.value}

                                    onChange={(e, getOptionSelected) => { handleCollegeNameForFilter(getOptionSelected) }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="College Name" placeholder="Choose College.." />
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth >
                                <label style={{ marginBottom: '5px' }}
                                    className="inspection-filter-modal-label"
                                    htmlFor="Inspectors"
                                    id="demo-simple-select-label"
                                >
                                    Filter By Course
                                </label>
                                <Autocomplete
                                    multiple
                                    id="checkboxes-tags-demo"
                                    options={course}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => option.graduation}
                                    renderOption={(props, option, { selected }) => (
                                        <li {...props}>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.graduation}
                                        </li>
                                    )}
                                    getOptionSelected={(option, value) => option.value === value.value}
                                    onChange={(e, getOptionSelected) => { handleCourseForFilter(getOptionSelected) }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Course Name" placeholder="Choose Course.." />
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <label style={{ marginBottom: '5px' }}
                                    className="inspection-filter-modal-label"
                                    htmlFor="Inspectors"
                                    id="demo-simple-select-label"
                                >
                                    Filter By Percentage
                                </label>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={percentage}

                                    getOptionSelected={(option, value) => option.value === value.value}

                                    onChange={(e, getOptionSelected) => { handlerPercentage(getOptionSelected) }}
                                    renderInput={(params) => <TextField {...params} label="Percentage" />}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleFilter}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}
