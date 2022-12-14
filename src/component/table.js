import { Button, ButtonGroup, TableCell } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import DialogBox from './dialogBox';
import { useState } from 'react'
// const click_show_product_details = () => {
//     return <ProductDetailsPage />
// }
const Book = (props) => {
    // const navigate = useNavigate();

    const { _id, name, aadharId, email, mobile } = props.products
    // -----for dialogbox product detail
    const [openPopup, setOpenPopup] = useState(false)

    const deleteHandler = async () => {
        await axios
            .delete(`/student/${_id}`).then((res) => res.data);
        window.location.reload(false)
    }
    return (
        <>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{email}</TableCell>
            <TableCell align="center">
                {aadharId}
            </TableCell>
            <TableCell align="center">
                {mobile}
            </TableCell>
            <TableCell align="center">
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button
                        sx={{ borderRadius: 0 }}
                        color="info"
                        onClick={() => setOpenPopup(true)}
                    >
                        <RemoveRedEyeIcon />
                    </Button>
                    <Button
                        LinkComponent={Link}
                        to={`/register-form/${_id}`}
                        sx={{ borderRadius: 0 }}
                        color="warning"
                    >
                        <ModeEditOutlineIcon />
                    </Button>
                    <Button
                        sx={{ borderRadius: 0 }}
                        color="error"
                        onClick={deleteHandler}
                    >
                        <DeleteIcon />
                    </Button>
                </ButtonGroup>
            </TableCell>
            <DialogBox
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                data={props}
            />
        </>
    )
}

export default Book
