import { useContext } from "react";
import { TransContext } from "./TransContext";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
                        <Paper variant="outlined" style={{height:'100px', width:'50%', backgroundColor:'rgb(0,128,0, 0.1)'}}>
                                <p className="income">INCOME <br />Rs. {income}</p>
                        </Paper>
                        <Paper variant="outlined" style={{height:'100px', width:'50%', backgroundColor:'rgb(255,0,0, 0.1)'}}>
                                <p className="expense">EXPENSE <br />Rs. {Math.abs(expenses)}</p>
                                
                        </Paper>
                </div>

        )
}

export default IncomeExpenceTotals