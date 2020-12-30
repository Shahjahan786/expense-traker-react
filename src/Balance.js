import { useContext } from "react";
import { TransContext } from "./TransContext";
import Chip from '@material-ui/core/Chip';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const Balance = () => {

    let { transactions } = useContext(TransContext)
    let balance = 0;
    transactions.forEach(transObj => {
        balance += transObj.amount
    });

    return (
        <Chip
            label={`BALANCE \nRs. ${balance}`}
            color="secondary"
            variant="outlined"
            style={{ margin: '10px auto' }}
            icon={<AccountBalanceWalletIcon />} />

    )
}

export default Balance