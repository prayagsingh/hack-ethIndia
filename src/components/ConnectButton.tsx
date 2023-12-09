'use client'

import { useSDK } from "@metamask/sdk-react";
import { Button } from "./ui/Button";
import { usePersistSafeAuthStore, useSafeAuthStore } from "@/store/safeAuthStore";
import wallet from '@/icons/ic_baseline_wallet.svg'
import safeWallet from '@/icons/safe-wallet.png'
import metamask from '@/icons/metamask.svg'
import Image from "next/image";
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogTrigger, AlertDialogDescription, AlertDialogCancel } from "./ui/AlertDialog";
import { usePersistLoginStore } from "@/store/loginStore";
import { useEffect } from "react";

const ConnectButton = () => {
  const { sdk, connected, connecting } = useSDK();
  const { safeAuthPack: authPack } = useSafeAuthStore();
  const { isAuthenticated: safeAuthenticated } = usePersistSafeAuthStore();
  const { isAuthenticated, setIsAuthenticated, authenticationMethod, setAuthenticationMethod } = usePersistLoginStore()
  useEffect(() => {
    if (safeAuthenticated) {
      setAuthenticationMethod('safeauth')
      setIsAuthenticated(true)
    }else if(connected){
      setAuthenticationMethod('metamask')
      setIsAuthenticated(true)
    }
  }, [])
  if (isAuthenticated)
    return <></>
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="gap-x-2">
          <Image src={wallet} alt='wallet' />
          <div>Login</div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm">
        <AlertDialogTitle><div className="justify-between flex-row flex"><div className="w-10 h-8"></div><div className="self-center">Login</div><AlertDialogCancel className="">X</AlertDialogCancel></div></AlertDialogTitle>
        <div className="flex flex-col gap-2 w-fit justify-self-center">
          <Button variant='outline' className='gap-x-5 px-5 border-black' onClick={() => {
            sdk?.connect().then((accounts) => {
              if (accounts) {
                setAuthenticationMethod('metamask')
                setIsAuthenticated(true)
              }
            })
          }}><Image src={metamask} className="w-5 h-5" alt='Safe wallet'></Image>Metamask</Button>
          <Button variant='outline' className='gap-x-5 px-5 border-black' onClick={async () => {
            console.log("authPack", authPack)
            await authPack?.signIn();
          }}>
            <Image src={safeWallet} className="w-5 h-5" alt='Safe wallet'></Image>Safe Wallet
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default ConnectButton;
/*
<Button onClick={() => {
      if (!connected) {
        sdk?.connect().catch(console.log)
      } else {
        sdk?.disconnect();
      }
    }}>{connected ? 'Disconnect' : connecting ? 'Connecting' : 'Connect'}</Button>
*/