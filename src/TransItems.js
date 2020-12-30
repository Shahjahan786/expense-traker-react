import { useContext } from "react"
import { TransContext } from "./TransContext"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Chip from '@material-ui/core/Chip';




const useStyles = makeStyles((theme) => ({
        root: {
                width: '100%',
                padding: '10px',

        },

        item: {
                backgroundColor: "rgb(0,0,128, 0.1)",
                boxShadow: '0 0 5px gray',
                marginTop: '10px',
                padding: '10px 5px',


        }
}));

const TransItems = () => {

        const classes = useStyles();

        let { transactions, deleteTransaction } = useContext(TransContext)

        function removeItem(id) {
                console.log(id)
                deleteTransaction(id);
        }

        return (
                <List className={classes.root}>
                        <Chip
                                label="Transactions"
                                color="primary"
                                variant="outlined"
                                style={{ margin: '10px auto' }}
                                icon={<ImportExportIcon />} />
                        {
                                transactions.map((transOb, id) => {
                                        return (
                                                <ListItem key={id} className={classes.item}>
                                                        <ListItemIcon>
                                                                <DeleteIcon color="secondary" onClick={() => { removeItem(transOb.id) }} />
                                                        </ListItemIcon>
                                                        <ListItemText id="switch-list-label-wifi" primary={transOb.desc} />


                                                        <ListItemSecondaryAction>
                                                                <ListItemIcon>
                                                                        {transOb.amount > 0 ?
                                                                                <CallReceivedIcon style={{ color: "green" }} />
                                                                                :
                                                                                <CallMadeIcon style={{ color: "red" }} />

                                                                        }
                                                                </ListItemIcon>

                                                                <span className={transOb.amount > 0 ? "income" : "expense"}>Rs. {transOb.amount}</span>
                                                        </ListItemSecondaryAction>
                                                </ListItem>
                                        )
                                })
                        }

                </List>

        )
}

export default TransItems