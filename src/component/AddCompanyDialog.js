import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { FormControlLabel, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function SimpleDialog(props) {
  const { onClose, selectedValue, open, emails } = props;
  console.log("emailsemailsemails", emails)
  const [input, setInput] = React.useState({
    company_name: '',
    contact_number: '',
    email: '',
    location: '',
  })
  const handleClose = () => {
    onClose(selectedValue);
  };
  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };
  const handlerChages = (e) => {
    setInput((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    console.log(input)
  }
  /////////// For Email Validation////////////////////
  const validate = () => {
    if (input.contact_number == "") {
      toast.error("Contact Number is Empty!!");
      return false;
    } else {
      if (!input.contact_number.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
        toast.error("please enter valid Contact Number")
        return false;
      } else {
        if (input.email == "") {
          toast.error("Email is Empty!!");
          return false;
        } else {
          if (!input.email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) {
            toast.error("please enter valid email address");
            return false;
          } else {
            if (input.company_name == "" || input.location == "") {
              toast.error("All Fields Are Required");
              return false;
            } else {
              return true;
            }
          }
        }
      }
    }
  }
  const handleSubmit = async (e) => {

    let data = { ...input, 'ToEmails': emails };
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("/send-Mail ",
          { data }
        ).then((res) => {
          toast.success("Email Sent Succesfully")
          handleClose();
        });
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error("Please Enter Correct Details")
    }

  }
  return (

    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Fill The Details</DialogTitle>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} p={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handlerChages}
              autoComplete="given-name"
              name="company_name"
              required
              fullWidth
              id="firstName"
              label="Company Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handlerChages}
              required
              fullWidth
              name="contact_number"
              label="Contact Number"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={handlerChages}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              onChange={handlerChages}
              label="Location"
              name="location"
              autoComplete="family-name"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit & Send Mail
        </Button>
      </Box>
    </Dialog >
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default function TakeCompanyDetails({ open, setClose, emails }) {
  const handleClose = (value) => {
    setClose(false);
  };
  return (
    <div>
      <Toaster />
      <SimpleDialog
        open={open}
        onClose={handleClose}
        emails={emails}
      />
    </div>
  );
}