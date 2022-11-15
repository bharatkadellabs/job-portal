import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Stack, Card, Box, Grid, TextField, Checkbox, FormControlLabel, Divider, FormGroup, FormLabel } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import MainHome from '../component/mainHome';
import useResponsive from "../hooks/useResponsive";
import welcomeImage from "../Assets/images/wq.png";
const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));
const HeaderStyle = styled("header")(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    // width: '100%',
    display: "flex",
    alignItems: "center",
    position: "absolute",
    padding: theme.spacing(3),
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
        padding: theme.spacing(7, 5, 0, 7),
    },
}));
const SectionStyle = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: 464,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2, 0, 2, 2),
}));
const ContentStyle = styled("div")(({ theme }) => ({
    maxWidth: 480,
    margin: "auto",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(12, 0),
}));
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
    const mdUp = useResponsive("up", "md");
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
            await axios.post("/college-data ", {
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
        <>
            <MainHome />
            <Box title="Login" sx={{ backgroundColor: "#F8F8FF" }}>
                <Toaster />
                <RootStyle>
                    <HeaderStyle></HeaderStyle>
                    {mdUp && (
                        <SectionStyle sx={{ height: "100vh", maxWidth: "500px", borderRadius: "16px" }}>
                            <Typography variant="h3" sx={{ px: 5, mt: 10, }}>
                                Hi College, Welcome
                            </Typography>
                            <img src={welcomeImage} sx={{ width: "100%" }} alt="login" />
                        </SectionStyle>
                    )}
                    <Container maxWidth="sm">
                        <ContentStyle sx={{ padding: "0px" }}>
                            <Typography variant="h4" gutterBottom>
                                College Registration
                            </Typography>
                            <Typography sx={{ color: "text.secondary", mb: 5 }}>Enter your details below.</Typography>
                            <form onSubmit={handlerSubmit}>
                                <Stack spacing={3}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={6} xl={6}>
                                            <TextField onChange={handleTextFiled} required id="cName" name="cName" label="College Name" fullWidth autoComplete="given-name" variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} md={6} xl={6}>
                                            <TextField onChange={handleTextFiled} required name="cNumber" label="College Contact Number" fullWidth variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} md={6} xl={6}>
                                            <TextField onChange={handleTextFiled} required type="password" name="password" label="Create Password" fullWidth variant="standard" />
                                        </Grid>
                                        <Grid item xs={12} md={6} xl={6}>
                                            <TextField onChange={handleTextFiled} required type="email" name="cEmail" label="College Email ID" fullWidth variant="standard" />
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
                                                label="AICTE"
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
                                </Stack>
                            </form>
                        </ContentStyle>
                    </Container>
                </RootStyle>
            </Box>
        </>
    );
    // return (
    //     <ThemeProvider theme={theme} >
    //         <CssBaseline />
    //         <Toaster />
    //         <MainHome />
    //         <Container component="main" maxWidth="sm" sx={{ marginTop: '80px', mb: 4 }}>
    //             <form onSubmit={handlerSubmit}>
    //                 <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
    //                     <Typography component="h1" mb={2} variant="h4" align="center">
    //                         College Registration
    //                     </Typography>
    //                     <Divider />
    //                     <Typography variant="h6" mt={3} gutterBottom>
    //                         Filed College Details
    //                     </Typography>
    //                     <Grid container spacing={3}>
    //                         <Grid item xs={12}>
    //                             <TextField onChange={handleTextFiled} required id="cName" name="cName" label="College Name" fullWidth autoComplete="given-name" variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <TextField onChange={handleTextFiled} required type={"email"} name="cEmail" label="College Email ID" fullWidth variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <TextField onChange={handleTextFiled} required type={"password"} name="password" label="Create Password" fullWidth variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <TextField onChange={handleTextFiled} required name="cNumber" label="College Contact Number" fullWidth variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <FormLabel component="legend">Are You Belog to</FormLabel>
    //                             <FormControlLabel
    //                                 control={
    //                                     <Checkbox
    //                                         onChange={(e) => {
    //                                             checkbox = e.target.checked;
    //                                         }}
    //                                         name="icit"
    //                                         defaultChecked={checkbox}
    //                                     />
    //                                 }
    //                                 label="ICIT "
    //                             />
    //                         </Grid>
    //                         <Grid item xs={12}>
    //                             <TextField onChange={handleTextFiled} required id="address" name="address" label="Address line " fullWidth variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12} sm={6}>
    //                             <TextField onChange={handleTextFiled} required id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12} sm={6}>
    //                             <TextField onChange={handleTextFiled} id="state" name="state" label="State/Province/Region" fullWidth variant="standard" />
    //                         </Grid>
    //                         <Grid item xs={12} textAlign="center">
    //                             <Button type="submit" variant="contained" color="success">
    //                                 Submit
    //                             </Button>{" "}
    //                         </Grid>
    //                     </Grid>
    //                 </Paper>
    //             </form>
    //             <Copyright />
    //         </Container>
    //     </ThemeProvider>
    // );
}
