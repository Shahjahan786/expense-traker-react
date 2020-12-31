import { useContext } from "react";
import { TransContext } from "./TransContext";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles((theme) => ({
        root: {
                display: 'flex',
                justifyContent: 'center',
                '& > *': {
                        margin: theme.spacing(2),
                        width: theme.spacing(16),
                        height: theme.spacing(16),
                        

                },
        },

        total:{
                fontSize: '36px',
                fontWeight: 900
        
        }
}));


const IncomeExpenceTotals = () => {

        const classes = useStyles();

        let income = 0;
        let expenses = 0;

        let { transactions } = useContext(TransContext);

        transactions.forEach(obj => {
                if (obj.amount > 0) {
                        income += obj.amount;
                } else if (obj.amount < 0) {
                        expenses += obj.amount;
                }


        });


        return (

                <div className={classes.root}>
                        <Paper variant="outlined" style={{display:'flex', justifyContent:'center',paddingTop:'15px',height:'100px', width:'50%', backgroundColor:'rgb(0,128,0, 0.1)'}}>
                                <CallReceivedIcon style={{ color: "green" }} />
                                <span className="income">INCOME <br />Rs. <span className={classes.total}>{income}</span></span>
                        </Paper>
                        <Paper variant="outlined" style={{display:'flex', justifyContent:'center',paddingTop:'15px',height:'100px', width:'50%', backgroundColor:'rgb(255,0,0, 0.1)'}}>
                                <CallMadeIcon style={{ color: "red" }} />
                                <span className="expense"> EXPENSE <br />Rs. <span className={classes.total}>{Math.abs(expenses)}</span></span>
                                
                        </Paper>
                </div>

        )
}

export default IncomeExpenceTotals