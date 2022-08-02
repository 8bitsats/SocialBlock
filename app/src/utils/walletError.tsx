/** @format */
import {
 SuccessAlert,
 InfoAlert,
 DangerAlert,
 SpecialAlert,
 WarningAlert,
 DangerAlertWallet,
} from "../components/alert";
import { UseProgramContext } from "../contexts/programContextProvider";
import { connection } from "../contexts/programContextProvider";
import { getWalletBalance } from "./get-wallet-balance";
export async function CheckWallet(getWallet: any, notify: any,ProgramContext:any) {
 if (!getWallet?.publicKey) {
  notify(<DangerAlert text="Please connect to a wallet." dismiss={undefined} />);
  return { error: true, msg: "no wallet" };
 }
 //broken
//  if (!ProgramContext?.state.user.foundUser) {
//   notify(<DangerAlert text="Please connect to a wallet." dismiss={undefined} />);
//   return { error: true, msg: "no username" };
//  }
 let balance = await getWalletBalance(connection, getWallet);
 
 if (balance == 0) {
  notify(<DangerAlertWallet text={undefined} dismiss={undefined} />);
  return { error: true, msg: "no balance" };
 } else {
    return {error:false}
 }
}
