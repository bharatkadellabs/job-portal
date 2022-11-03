import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import StudentImageOnSignUpPage from "../Assets/images/1.png";
import toast, { Toaster } from "react-hot-toast";
import { Autocomplete, FormControl, FormGroup, FormLabel, InputLabel, MenuItem, Select } from "@mui/material";
import e from "cors";
// import { param } from "../../server/router";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
const theme = createTheme();
export default function RegisterUser() {

    const navigate = useNavigate();
    let [checkboxInt, setCheckboxInt] = React.useState([]);
    let [input, setInput] = React.useState({});
    const id = useParams().id;
    console.log("%%", id);
    const collegeID = JSON.parse(sessionStorage.getItem('collegeID'))
    console.log("collegeID", collegeID._id)
    React.useEffect(() => {

        const fecthHandler = async () => {
            return await axios
                .get(`/getDataById/${id}`)
                .then((res) => res.data)
                .then((data) => {
                    setInput(data.student);
                });
        };
        if (id) {
            fecthHandler();
        }
    }, []);
    const handleChangeCheckbox = (e) => {
        setCheckboxInt((prevState) => [...prevState, e.target.value]);
    };
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            interested: checkboxInt,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(input);
        try {
            await axios.post("/sign-up", {
                name: String(input.name), aadharId: Number(input.aadharId),
                email: String(input.email), mobile: String(input.mobile),
                percentage: Number(input.percentage), interested: String(input.interested),
                graduation: String(input.graduation), collegeID: String(collegeID._id),
                age: Number(input.age), enrolYear: Number(input.enrolYear), highSchool: Number(input.highSchool), address: String(input.address), fatherName: String(input.fatherName), motherName: String(input.motherName), pincode: Number(input.pincode), backlogs: String(input.backlogs), languages: String(input.languages)
            }).then((res) => {
                console.log("res", res);
                if (res.status == 201) {
                    navigate("/", {
                        state: { message: res.data.message, status: res.status },
                    });
                    // toast.success(res.data.message);
                } else {
                    toast.error(res.data.message);
                }
            });
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
        // await axios.get('/')
    };

    // for Update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/update-student/${id}`, {
                name: String(input.name), aadharId: Number(input.aadharId), email: String(input.email), mobile: String(input.mobile), percentage: Number(input.percentage), interested: String(input.interested), graduation: String(input.graduation), collegeID: String(collegeID._id), age: Number(input.age), enrolYear: Number(input.enrolYear), highSchool: Number(input.highSchool), address: String(input.address), fatherName: String(input.fatherName), motherName: String(input.motherName), pincode: Number(input.pincode), backlogs: String(input.backlogs), languages: String(input.languages)
            }).then((res) => {
                console.log("res", res);
                if (res.status === 200) {
                    console.log("in res ", res);
                    // toast.success(res.data.message);
                    navigate("/", {
                        state: { message: res.data.message, status: res.status },
                    });
                } else {
                    toast.error(res.data.message);
                }
            });
        } catch (err) {
            console.log(err);
            toast.error("hiiiii", err.message);
        }
    };
    const course = [
        { graduation: "B-Tech" },
        { graduation: "Computer Science" },
        { graduation: "MCA" },
        { graduation: "M-Tech" },
        // { graduation: '12 Angry Men' },
        // { graduation: "Schindler's List" },
    ];
    if (!id) {
        return (
            <>
                <Toaster />
                <Grid
                    container
                    display="center"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        backgroundColor: "#F8F8FF",
                    }}
                >
                    <Grid item md={12} lg={12} xs={12} sm={12} alignItems="center" justifyContent="center">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                marginX: "100px",
                                [theme.breakpoints.down("md")]: {
                                    marginX: "10px",
                                },
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register Form
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.name} name="name" required label="Full Name" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.fatherName} name="fatherName" required label="Fater Name" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.motherName} name="motherName" required label="Mother Name" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.aadharId} name="aadharId" type="number" label="Aadhar Card Number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.email} label="Email Address" name="email" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.mobile} name="mobile" label="mobile" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.percentage} name="percentage" label="Percentage (%)" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.highSchool} name="highSchool" label="12th Percentage (%)" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.age} name="age" label="Age" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.enrolYear} name="enrolYear" label="Enrolment Year" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.address} name="address" label="Address" type="text" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.pincode} name="pincode" label="Pincode" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.backlogs} name="backlogs" label="Backlogs" type="text" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.languages} name="languages" label="Languages" type="text" />
                                    </Grid>
                                    <Grid item xs={12} md={6} textAlign={"left"}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">choose interested</FormLabel>
                                            <FormGroup aria-label="position" row>
                                                <FormControlLabel value="AI" control={<Checkbox />} label="AI" onChange={handleChangeCheckbox} />
                                                <FormControlLabel value="data science" control={<Checkbox />} label="data science" onChange={handleChangeCheckbox} />
                                                <FormControlLabel value="ML" control={<Checkbox />} label="ML" onChange={handleChangeCheckbox} />
                                            </FormGroup>
                                        </FormControl>{" "}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Graduation</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="graduation" label="Age" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.graduation}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    {/* <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Languages</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="languages" label="Languages" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.Languages}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                </Grid>
                                <Grid item xs={12} md={12} textAlign={"center"}>
                                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, paddingX: "100px " }}>
                                        Submit User
                                    </Button>
                                </Grid>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/login-form" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </>
        );
    } else {
        return (
            <>
                <Toaster />
                <Grid
                    container
                    display="center"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        backgroundColor: "#F8F8FF",
                    }}
                >
                    <Grid item md={12} lg={12} xs={12} sm={12} alignItems="center" justifyContent="center">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                marginX: "100px",
                                [theme.breakpoints.down("md")]: {
                                    marginX: "10px",
                                },
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Update Student Data
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleUpdate} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.name} name="name" required label="Full Name" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.fatherName} name="fatherName" required label="Fater Name" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.motherName} name="motherName" required label="Mother Name" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.aadharId} type="number" label="Aadhar Card Number" name="aadharID" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.email} label="Email Address" name="email" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.mobile} name="mobile" label="mobile" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.percentage} name="percentage" label="Percentage (%)" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.highSchool} name="highSchool" label="12th Percentage (%)" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.age} name="age" label="Age" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.enrolYear} name="enrolYear" label="Enrolment Year" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.address} name="address" label="Address" type="text" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.pincode} name="pincode" label="Pincode" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.backlogs} name="backlogs" label="Backlogs" type="text" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.languages} name="languages" label="Languages" type="text" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6} textAlign={"left"}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">choose interested</FormLabel>
                                            <FormGroup aria-label="position" row>
                                                <FormControlLabel value="AI" control={<Checkbox />} label="AI" onChange={handleChangeCheckbox} />
                                                <FormControlLabel value="data science" control={<Checkbox />} label="data science" onChange={handleChangeCheckbox} />
                                                <FormControlLabel value="ML" control={<Checkbox />} label="ML" onChange={handleChangeCheckbox} />
                                            </FormGroup>
                                        </FormControl>{" "}
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Graduation</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="graduation" label="Age" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.graduation}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12} textAlign={"center"}>
                                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, paddingX: "100px " }}>
                                        Update Data
                                    </Button>
                                </Grid>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/login-form" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </>
        );
    }
}
