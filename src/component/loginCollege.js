import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Card, Link, Container, Typography, Box, TextField, Stack, IconButton, InputAdornment, Button } from "@mui/material";
// hooks
import useResponsive from "../hooks/useResponsive";
import welcomeImage from "../Assets/images/illustration_login.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import MainHome from '../component/mainHome'
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
// ----------------------------------------------------------------------
export default function Login() {
    const smUp = useResponsive("up", "sm");
    const mdUp = useResponsive("up", "md");
    const [showPassword, setShowPassword] = useState(false);
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const handleClickShowPassword = () => {
        setShowPassword(true);
    };
    const handlerTextFiled = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
        console.log(input);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(input, "hiii");
        const collegeLogin = await axios.post("/login-college", { email: String(input.email), password: String(input.password) });
        console.log("response@@@@@@", collegeLogin)
        if (collegeLogin.status === 201) {
            const collegeData = JSON.stringify(collegeLogin.data.collegeLoginData);
            sessionStorage.setItem("collegeID", collegeData);
            navigate("/", {
                state: { message: collegeLogin.data.message, status: collegeLogin.status },
            });
        } else {
            console.log("<LLKJDJDJ")
            toast.error(collegeLogin.data.message);
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
                        <SectionStyle sx={{ height: "95vh", maxWidth: "500px", borderRadius: "16px" }}>
                            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 10 }}>
                                Hi College, Welcome Back
                            </Typography>
                            <img src={welcomeImage} sx={{ width: "100%" }} alt="login" />
                        </SectionStyle>
                    )}
                    <Container maxWidth="sm">
                        <ContentStyle sx={{ padding: "0px" }}>
                            <Typography variant="h4" gutterBottom>
                                Sign in to Minimal
                            </Typography>
                            <Typography sx={{ color: "text.secondary", mb: 5 }}>Enter your details below.</Typography>
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField onChange={handlerTextFiled} name="email" label="Email address" />
                                    <TextField
                                        onChange={handlerTextFiled}
                                        name="password"
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Stack>
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                                    {/* <RHFCheckbox name="remember" label="Remember me" /> */}
                                    <Link variant="subtitle2" underline="hover">
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button fullWidth size="large" type="submit" variant="contained">
                                    Login
                                </Button>
                            </form>
                            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                                Don’t have an account?{" "}
                                <Link variant="subtitle2" component={RouterLink} to="/register-form">
                                    Get started
                                </Link>
                            </Typography>
                        </ContentStyle>
                    </Container>
                </RootStyle>
            </Box>
        </>

    );
}
