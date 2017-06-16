import { createSelector } from 'reselect';
import { selectLoginAccountState } from 'src/select-state';
import { augur } from 'services/augurjs';
import { formatRep, formatEtherTokens, formatEther } from 'utils/format-number';
import generateDownloadAccountLink from 'modules/auth/helpers/generate-download-account-link';
// import getABCUIContext from 'modules/auth/selectors/abc';
import store from 'src/store';

import getValue from 'utils/get-value';

export default function () {
  return selectLoginAccount(store.getState());
}

export const selectLoginAccount = createSelector(
  selectLoginAccountState,
  (loginAccount) => {
    const trimmedAddress = loginAccount.address ? `${loginAccount.address.substring(0, 4)}...${loginAccount.address.substring(loginAccount.address.length - 4)}` : null;
    const trimmedLoginID = loginAccount.loginID ? `${loginAccount.loginID.substring(0, 4)}...${loginAccount.loginID.substring(loginAccount.loginID.length - 4)}` : null;
    const linkText = loginAccount.isUnlocked ? trimmedAddress : loginAccount.name || trimmedLoginID;
    const keystore = getValue(augur, 'account.account.keystore');
    // if (loginAccount.airbitzAccount) {
    //   console.log('here');
    //   loginAccount.onAirbitzManageAccount = () => onAirbitzManageAccount(loginAccount);
    // }

    return {
      ...loginAccount,
      ...generateDownloadAccountLink(loginAccount.address, keystore, loginAccount.loginID),
      trimmedLoginID,
      trimmedAddress,
      linkText,
      rep: formatRep(loginAccount.rep, { zeroStyled: false, decimalsRounded: 1 }),
      eth: formatEther(loginAccount.eth, { zeroStyled: false, decimalsRounded: 2 }),
      ethTokens: formatEtherTokens(loginAccount.ethTokens, { zeroStyled: false, decimalsRounded: 2 })
    };
  }
);

// export const onAirbitzManageAccount = loginAccount => (
//   getABCUIContext().openManageWindow(loginAccount.airbitzAccount, (err) => {
//     if (err) console.error('onAirbitzManageAccount:', err);
//   })
// );
