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
    const [errors, setErrors] = React.useState({});
    console.log("errororoor", errors)
    const id = useParams().id;
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
    const validation = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = 'First name is required.';
        }
        if (!values.email) {
            errors.email = 'Email is required.';
        } else if (!/^[A-Z0-9._%+]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email is invalid';
        }
        // if (!values.phone) {
        // } else if (values.phone.length < 12) {
        //     errors.phone = 'Phone number is invalid';
        // }
        // if (!values.secondphone) {
        // } else if (values.secondphone.length < 12) {
        //     errors.secondphone = 'Phone number is invalid';
        // }
        // if (!values.companynumber) {
        // } else if (values.companynumber.length < 12) {
        //     errors.companynumber = 'Company number is invalid';
        // }
        return errors;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(input);

        try {
            await axios.post("/sign-up", {
                name: String(input.name), aadharId: String(input.aadharId),
                email: String(input.email), mobile: String(input.mobile),
                percentage: Number(input.percentage), interested: String(input.interested),
                graduation: String(input.graduation), collegeID: String(collegeID._id),
                dob: Date(input.age), enrolYear: Number(input.enrolYear),
                highSchool: Number(input.highSchool),
                secSchool: Number(input.secSchool),
                address: String(input.address),
                fatherName: String(input.fatherName),
                motherName: String(input.motherName),
                pincode: Number(input.pincode),
                backlogs: Number(input.backlogs), languages: String(input.languages), hobbies: String(input.hobbies),
                skills: String(input.skills), stream: String(input.stream), activities: String(input.activities), internships: String(input.internships)
            }).then((res) => {
                console.log("res!@@@@@@@@@@@", res);
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
                name: String(input.name), aadharId: String(input.aadharId),
                email: String(input.email), mobile: String(input.mobile),
                percentage: Number(input.percentage), interested: String(input.interested),
                graduation: String(input.graduation), collegeID: String(collegeID._id),
                dob: Date(input.age), enrolYear: Number(input.enrolYear),
                highSchool: Number(input.highSchool),
                secSchool: Number(input.secSchool),
                address: String(input.address),
                fatherName: String(input.fatherName),
                motherName: String(input.motherName),
                pincode: Number(input.pincode),
                backlogs: Number(input.backlogs), languages: String(input.languages), hobbies: String(input.hobbies),
                skills: String(input.skills), stream: String(input.stream), activities: String(input.activities), internships: String(input.internships)
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
                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <span style={{ color: 'red', float: 'left' }}>*All fields are mandatory</span>
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
                                        <TextField required inputProps={{ maxLength: 12, minLength: 12 }} onChange={handleChange} fullWidth value={input.aadharId} name="aadharId" type="text" label="Aadhar Card Number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.email} label="Email Address" name="email" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.mobile} name="mobile" label="mobile" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.dob} name="dob" label="Date Of Birth" type="date" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.percentage} name="percentage" label="Aggregate" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.secSchool} name="secSchool" label="10th Percentage (%)" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.highSchool} name="highSchool" label="12th Percentage (%)" type="number" />
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
                                        <TextField onChange={handleChange} fullWidth value={input.backlogs} name="backlogs" label="Current Backlogs" type="number" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.languages} name="languages" label="Language`s Known" type="text" />
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
                                            <InputLabel id="demo-simple-select-label">Graduation/Master</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="graduation" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.graduation}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Present Stream</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="stream" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.graduation}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.hobbies} name="hobbies" label="Hobbies" type="text" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.skills} name="skills" label="Skills" type="text" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.activities} name="activities" label="activities" type="text" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.internships} name="internships" label="internships" type="text" />
                                    </Grid>
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
                            <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
                                <span style={{ color: 'red', float: 'left' }}>*All fields are mandatory</span>
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
                                        <TextField required onChange={handleChange} fullWidth value={input.aadharId} name="aadharId" type="text" label="Aadhar Card Number" InputLabelProps={{ shrink: true }} InputProps={{
                                            maxLength: 12, minLength: 12
                                        }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.email} label="Email Address" name="email" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField required onChange={handleChange} fullWidth value={input.mobile} name="mobile" label="mobile" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.dob} name="dob" label="Date Of Birth" type="date" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.percentage} name="percentage" label="Aggregate" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.secSchool} name="secSchool" label="10th Percentage (%)" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.highSchool} name="highSchool" label="12th Percentage (%)" type="number" InputLabelProps={{ shrink: true }} />
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
                                        <TextField onChange={handleChange} fullWidth value={input.backlogs} name="backlogs" label="Current Backlogs" type="number" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.languages} name="languages" label="Language`s Known" type="text" InputLabelProps={{ shrink: true }} />
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
                                            <InputLabel id="demo-simple-select-label">Graduation/Master</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="graduation" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.graduation}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Present Stream</InputLabel>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="stream" onChange={handleChange}>
                                                {course.map((data) => (
                                                    <MenuItem value={data.graduation}>{data.graduation}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.hobbies} name="hobbies" label="Hobbies" type="text" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.skills} name="skills" label="Skills" type="text" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.activities} name="activities" label="activities" type="text" InputLabelProps={{ shrink: true }} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField onChange={handleChange} fullWidth value={input.internships} name="internships" label="internships" type="text" InputLabelProps={{ shrink: true }} />
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
