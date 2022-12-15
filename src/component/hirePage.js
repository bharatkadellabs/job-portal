import { Button, Checkbox, Chip, FormControlLabel, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainHome from "../component/mainHome";
import StudentTable from "../component/studentTable";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchBar from "./SearchBar";
import FilerDialogBox from "./FilerDialogBox";
import SendIcon from '@mui/icons-material/Send';
import TakeCompanyDetails from "./AddCompanyDialog";
const HirePage = () => {
    let serText = "";
    let [studentData, setStudentData] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [filterValue, setFilterData] = useState();
    let [checked, setChecked] = useState([]);
    const [isAllCheckMail, setisAllCheckMail] = useState(false)
    const [isChecked, setisChecked] = useState([]);
    const [addCompanyDialogOpen, setaddCompanyDialogOpen] = useState(false);
    useEffect(() => {
        fecthTicketData(serText);
    }, [filterValue]);
    const handleCheckedAll = (e) => {
        setisAllCheckMail(!isAllCheckMail);
        setisChecked(studentData.map(li => li.email));
        if (isAllCheckMail) {
            setisChecked([])
        }
    }
    const handleClick = e => {
        console.log(e.target.value, e.target.checked)
        const { value, checked } = e.target;
        if (!checked) {
            //remove
            setisChecked(isChecked.filter(item => item !== value));
        }
        else {
            //add
            setisChecked([...isChecked, value]);
        }
    };
    const handleDeleteClip = (email) => {
        setisChecked(isChecked.filter(item => item !== email));
    }
    const sendMailButtonClick = () => {
        setaddCompanyDialogOpen(true)

    }
    const fecthTicketData = async (searchStr) => {
        let data = {
            search: searchStr || "",
            colleges: filterValue && filterValue.filterCollegeName || [],
            courses: filterValue && filterValue.filterCourse || [],
            percentage: filterValue && filterValue.filterPercentage || 0
        };
        console.log("filterValue received :", data);
        await axios.post('/getStudentBySearch', data).then((res) => {
            setStudentData(res.data.data)
            console.log(checked)
        })
            .catch((err) => {
                console.log("errror", err);
            });
        defaultSelectCehckbox();
    };
    const defaultSelectCehckbox = () => {
        console.log("!!!", studentData)
        {
            studentData.map((email) => {
                console.log("hiaasas@@@@@a", email.email)
                setChecked((prevstate) => ({
                    ...prevstate, [email.email]: false
                }
                ));
            })
        }
    }
    return (
        <>
            {" "}
            <MainHome />
            <TakeCompanyDetails emails={isChecked} open={addCompanyDialogOpen} setClose={setaddCompanyDialogOpen} />
            <FilerDialogBox
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                setFilterData={(d) => {
                    console.log("filter itemss", d);
                    setFilterData(d);
                }}
            />
            <Box marginX={5} marginTop={"100px"} marginBottom={5}>
                {" "}
                <Grid container justifyContent={"space-between"}>
                    <Grid item xm={2} md={3} lg={3}>
                        <Typography variant="h5" letterSpacing={1}>
                            Dashboard
                        </Typography>
                    </Grid>
                    <Grid item xm={10} md={6} lg={6}>
                        <SearchBar
                            onClick={(seach) => {
                                serText = seach;
                                // handleSearch(serText);
                                fecthTicketData(serText);
                            }}
                            clearSearch={(setSearched) => {
                                serText = "";
                                setSearched("");
                                fecthTicketData(serText);
                            }}
                        />
                    </Grid>
                    <Grid item xm={12} sm={12} md={3} lg={3} textAlign="right">
                        <Button
                            variant="contained"
                            onClick={() => setOpenPopup(true)}
                            sx={{
                                backgroundColor: "blue",
                                "&:hover": {
                                    color: "white",
                                },
                            }}
                        >
                            <FilterAltIcon />
                            &nbsp; Filter
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {isChecked.length != 0 ? <Box marginX={5} my={1} p={2} backgroundColor={'#FFFBCE'}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10} lg={10} >
                        <Stack direction="row" spacing={1}>
                            {isChecked.map((email) => (
                                <Chip
                                    label={email}
                                    variant="outlined"
                                    onClick={handleClick}
                                    onDelete={() => handleDeleteClip(email)}
                                />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <Button variant="contained" onClick={sendMailButtonClick} fullWidth color="success" endIcon={<SendIcon />} >Send Mail</Button>
                    </Grid>
                </Grid>
            </Box> : ''}
            <Box marginX={5}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#F4FBFF", fontWeight: 700 }}>
                                <TableCell align="center" sx={{ fontWeight: 600 }}>
                                    <FormControlLabel
                                        label="Select All"
                                        control={
                                            <Checkbox
                                                checked={isAllCheckMail}
                                                onChange={handleCheckedAll}
                                            />
                                        }
                                    />
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600 }}>
                                    Index
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600 }}>
                                    Student Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="center">
                                    Email
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="center">
                                    AadharId Number
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="center">
                                    Mobile No.
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="center">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {studentData.length != 0
                                ? studentData.map((data, i) => (
                                    <TableRow key={i}>
                                        <TableCell align="center" scope="row">
                                            <FormControlLabel
                                                value={data.email}
                                                control={<Checkbox onChange={handleClick} checked={isChecked.includes(data.email)} value={data.email} />}
                                            />
                                        </TableCell>
                                        <TableCell align="center" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <StudentTable products={data} />
                                    </TableRow>
                                ))
                                : ""}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};
export default HirePage;
