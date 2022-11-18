import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Button,
    ButtonGroup,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Link, Navigate, useLocation } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import toast, { Toaster } from "react-hot-toast";
import DialogBox from '../component/dialogBox'
import StudentTable from '../component/table';
import { DataArrayTwoTone } from '@mui/icons-material'

// import Table from './table'
// import productDetails from './products/productDetails'



const Home = ({ loggedIn }) => {
    const location = useLocation();
    const [studentData, setStudentData] = useState([])

    useEffect(() => {

        if (location && location.state) {
            toast.success(location.state.message)
        }
        console.log(location)
        getStudentData();
    }, [])

    const getStudentData = async () => {
        let collegeID = JSON.parse(sessionStorage.getItem('collegeID'))
        console.log("sasas", collegeID, "@@@@@", collegeID._id)
        let data = { CID: collegeID._id }
        console.log("!!!!1", data)
        await axios.post('/getStudentByCollege', data).then((res) => {
            console.log(res);
            setStudentData(res.data)
        })
    }
    return (
        <div>
            <Toaster />
            <Container>
                <Grid container padding="30px 0 30px 0" textAlign="left">
                    <Grid item xs={12} md={10}>
                        <Typography variant="h4" marginBottom={1} component="h3">
                            View Student Data
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} textAlign="right">
                        <Button
                            style={{ width: '100%' }}
                            variant="contained"
                            color="success"
                            component={Link}
                            to="/register-form"
                        >
                            <AddIcon /> Add Student
                        </Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: '#F4FBFF', fontWeight: 700 }}>
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
                            {studentData.length !== 0 ?
                                studentData.map((data, i) => (
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
            </Container>
        </div>
    )
}
export default Home
