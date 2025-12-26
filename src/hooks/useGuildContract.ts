import { useAppKitProvider, useAppKitAccount } from '@reown/appkit/react'
import { openContractCall } from '@stacks/connect'
import { StacksMainnet } from '@stacks/network'
import { AnchorMode, PostConditionMode } from '@stacks/transactions'

export const useGuildContract = () => {
  const { address } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('stacks') // Integrasi Provider AppKit

  const joinGuild = async () => {
    const contractAddress = 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9'; // Ganti dengan address deploy-mu
    const contractName = 'hodl-guild';

    // Membuka modal transaksi via Reown/WalletKit
    await openContractCall({
      contractAddress,
      contractName,
      functionName: 'join-guild',
      functionArgs: [], // Fungsi ini tidak butuh argumen
      network: new StacksMainnet(),
      anchorMode: AnchorMode.Any,
      postConditionMode: PostConditionMode.Allow,
      onFinish: (data) => {
        console.log('Transaction Sent:', data.txId);
      },
      onCancel: () => {
        console.log('User cancelled the transaction');
      }
    });
  }

  return { joinGuild, address }
}
