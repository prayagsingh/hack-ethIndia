'use client'
import React, { useEffect, useState } from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';

export default function AllProviders({ children }: {
  children: React.ReactNode
}) {
  const [renderd, setRendered] = useState<boolean>(false)
  useEffect(() => {
    setRendered(true);
  }, [])
  if(renderd)
  return (
      <MetaMaskProvider 
      debug={false}
      sdkOptions={{
      checkInstallationImmediately: false,
      dappMetadata: {
        name: "Demo React App",
        url: location.origin,
      }
    }}>
        {children}
      </MetaMaskProvider>
  )
  return (<>{children}</>)
}