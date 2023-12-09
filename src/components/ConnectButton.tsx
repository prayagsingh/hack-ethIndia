'use client'

import { useSDK } from "@metamask/sdk-react";
import { Button } from "./ui/Button";

const ConnectButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  return <>
  {account && <>{account}</>}
  <Button onClick={() => {
    if (!connected) {
      sdk?.connect().catch(console.log)
    }else {
      sdk?.disconnect();
    }
  }}>{connected ? 'Disconnect' : connecting ? 'Connecting' : 'Connect'}</Button>
  </>
}
export default ConnectButton;