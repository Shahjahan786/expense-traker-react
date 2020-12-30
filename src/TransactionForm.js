import { useContext } from "react";
import { TransContext } from "./TransContext";
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

        flexDirection: 'column'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '96%',
        margin: '10px'
    },
    button:{
        width: '96%',
        margin: '10px'
    }
}));

const TransactionForm = () => {

    const classes = useStyles();

    const { transactions, addTransaction } = useContext(TransContext);

    console.log(transactions)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(document.getElementById("desc").value + ": " + document.getElementById("amount").value)

        addTransaction({ id: new Date().getTime(), desc: document.getElementById("desc").value, amount: Number(document.getElementById("amount").value) });
        document.getElementById("desc").value = "";
        document.getElementById("amount").value = ""
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <ListSubheader>Add New Transaction</ListSubheader>
            <Divider/>

            <TextField
                required
                label="Enter Description"
                id="desc"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Title</InputAdornment>,
                }}
            />

            <TextField
                required
                label="Enter Amount"
                id="amount"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Rs. </InputAdornment>,
                }}
            />



            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                type="submit"
            >
                Add Transaction
      </Button>
        </form>
    )
}

export default TransactionForm