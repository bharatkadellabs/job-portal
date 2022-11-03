import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainHome from "../component/mainHome";
import StudentTable from "../component/studentTable";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import FilerDialogBox from "./FilerDialogBox";
const HirePage = () => {
    let serText = "";
    const [studentData, setStudentData] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [filterValue, setFilterData] = useState();
    // const [filterCollegeName, setFilterCollegeName] = React.useState([])
    // const [filterCourse, setFilterfilterCourse] = React.useState([])
    // const [filterPercentage, setFilterPercentage] = React.useState({})
    console.log("#", filterValue);
    useEffect(() => {
        fecthTicketData(serText);
    }, [filterValue]);
    const fecthTicketData = async (searchStr) => {
        console.log("search string ::::", searchStr);
        console.log("object string ::::", filterValue);
        let data = {
            search: searchStr || "",
            colleges: filterValue && filterValue.filterCollegeName || [],
            courses: filterValue && filterValue.filterCourse || [],
            percentage: filterValue && filterValue.filterPercentage || 0
        };
        console.log("filterValue received :", data);
        await axios.post('/getStudentBySearch', data).then((res) => {
            console.log("@@@@@@@@@@@@@>>>>>>", res);
            setStudentData(res.data.data)
        })
            .catch((err) => {
                console.log("errror", err);
            });
    };
    return (
        <>
            {" "}
            <MainHome />
            <FilerDialogBox
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                setFilterData={(d) => {
                    console.log("filter itemss", d);
                    setFilterData(d);
                }}
            // setFilterCollegeName
            // setFilterfilterCourse
            // setFilterPercentage
            // data={props}
            />
            {/* <Typography sx={{ fontSize: "18px", color: "#3B3B3B" }}>
                Welcome{" "}
                ,
            </Typography> */}
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
            <Box marginX={5}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#F4FBFF", fontWeight: 700 }}>
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
                            {studentData.length !== 0
                                ? studentData.map((data, i) => (
                                    <TableRow key={i}>
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
