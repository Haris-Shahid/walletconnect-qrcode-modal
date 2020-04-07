"use strict";

const WalletConnectQRCodeModal = window.WalletConnectQRCodeModal.default;

const TEST_URI =
  "wc:8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a";

function onConnect() {
  WalletConnectQRCodeModal.open(uri, () => {
    console.log("QR Code Modal closed"); // eslint-disable-line
  });
}
