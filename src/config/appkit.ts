import { createAppKit } from '@reown/appkit/react'
import { StacksAdapter } from '@reown/appkit-adapter-stacks' 
import { stacks, stacksTestnet } from '@reown/appkit/networks'

export const projectId = '180a7164cfa9e5388daf1160841f65a0'

export const metadata = {
  name: 'STX HODL Guild',
  description: 'Proof of HODL Protocol',
  url: 'https://hodlguild.xyz',
  icons: ['https://avatars.githubusercontent.com/u/17922993']
}

export const appKit = createAppKit({
  adapters: [new StacksAdapter()],
  networks: [stacks, stacksTestnet],
  metadata,
  projectId,
  features: {
    analytics: true,
    email: true, // Opsional: Memungkinkan login via email (WalletKit feature)
    socials: ['google', 'x', 'discord']
  }
})
