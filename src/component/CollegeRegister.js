import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import { Box, Grid, TextField, Checkbox, FormControlLabel, Divider, FormGroup, FormLabel } from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import MainHome from '../component/mainHome';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
const steps = ["Shipping address", "Payment details", "Review your order"];
const theme = createTheme();
export default function CollegeRegister() {
    let [input, setInput] = React.useState({});
    let [checkbox, setCheckbox] = React.useState(true);
    console.log("check", checkbox);
    const handleTextFiled = (e) => {
        setInput((prevState) => ({
            ...prevState,
            ["icit"]: checkbox,
            [e.target.name]: e.target.value,
        }));
        console.log(input);
    };
    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/college-data ", {
                cName: String(input.cName), cEmail: String(input.cEmail),
                password: String(input.password), cNumber: String(input.cNumber), icit: Boolean(checkbox),
                address: String(input.address), city: String(input.city), state: String(input.state)
            }).then((res) => {
                console.log("res", res)
                if (res.status == 201) {

                    toast.success(res.data.message);
                }
                toast.error(res.data.message);
            })
        } catch (err) {
            console.log(err)
            toast.error(err.message);
        }

    };

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Toaster />
            <MainHome />
            <Container component="main" maxWidth="sm" sx={{ marginTop: '80px', mb: 4 }}>
                <form onSubmit={handlerSubmit}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" mb={2} variant="h4" align="center">
                            College Registration
                        </Typography>
                        <Divider />
                        <Typography variant="h6" mt={3} gutterBottom>
                            Filed College Details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField onChange={handleTextFiled} required id="cName" name="cName" label="College Name" fullWidth autoComplete="given-name" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleTextFiled} required type={"email"} name="cEmail" label="College Email ID" fullWidth variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleTextFiled} required type={"password"} name="password" label="Create Password" fullWidth variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleTextFiled} required name="cNumber" label="College Contact Number" fullWidth variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel component="legend">Are You Belog to</FormLabel>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={(e) => {
                                                checkbox = e.target.checked;
                                            }}
                                            name="icit"
                                            defaultChecked={checkbox}
                                        />
                                    }
                                    label="ICIT "
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleTextFiled} required id="address" name="address" label="Address line " fullWidth variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleTextFiled} required id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleTextFiled} id="state" name="state" label="State/Province/Region" fullWidth variant="standard" />
                            </Grid>
                            <Grid item xs={12} textAlign="center">
                                <Button type="submit" variant="contained" color="success">
                                    Submit
                                </Button>{" "}
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
