import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
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
function CompanyDetails(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>

        </Dialog>
    );
}
export default function CustomizedDialogs({ openPopup, setOpenPopup, data }) {
    const [open, setOpen] = React.useState(true);

    const Sdata = data.products;
    let date = new Date(Sdata.dob);
    let options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    };
    const dob = date.toLocaleString('en-us', options);
    const handleClose = () => {
        setOpenPopup(false);
    };
    const handlerCompanyModel = () => {
        setOpen(true)
        // return (
        //     <CompanyDetails open={open} />
        // )
    }
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openPopup}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Student Details
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container >
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Student Name</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.name}</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Father Name</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.fatherName}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Mother Name</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.fatherName}</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Aadhar Number</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.aadharId}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Student Address</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.address
                                }</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Date Of Birth</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{dob}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Contact Number</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.mobile}</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Graduation</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.graduation}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >activities</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.activities}</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >backlogs</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.backlogs}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >enrolYear</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.enrolYear}</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >12th %</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.highSchool
                                } &nbsp;%</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Student Hobbies</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.hobbies
                                }</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >internships</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.internships}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >10th %</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.secSchool}&nbsp;%</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >Graduation</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.graduation}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >skills</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.skills
                                }</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >stream</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.stream}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} spacing={10} >
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >languages</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.languages}</Typography>
                            </Grid>
                            <Grid item sx={{ md: 6, xs: 12 }} display={'flex'} gap={3} alignItems={'center'}>
                                <Typography  >pincode</Typography>
                                <Typography sx={{ color: '#A9A9A9' }}>{Sdata.pincode}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {/* <Button autoFocus onClick={handlerCompanyModel}>
                        send Mail
                    </Button> */}
                    <Button autoFocus onClick={handleClose}>
                        cancel
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}
