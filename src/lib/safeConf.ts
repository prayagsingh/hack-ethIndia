import {
  SafeAuthPack,
  SafeAuthConfig,
  SafeAuthInitOptions,
} from '@safe-global/auth-kit'

export const safeAuthInitOptions: SafeAuthInitOptions = {
  enableLogging: true,
  showWidgetButton: false,
  chainConfig: {
    chainId: `80001`,
    rpcTarget: `https://rpc-mumbai.maticvigil.com`
  },
}

// You can also pass the SafeAuthConfig as a parameter to the SafeAuthPack constructor if you are using a custom txServiceUrl domain
// e.g. const safeAuthConfig: SafeAuthConfig = {
//   txServiceUrl: 'https://safe-transaction-mainnet.safe.global'
// }
export const safeAuthPack = new SafeAuthPack()