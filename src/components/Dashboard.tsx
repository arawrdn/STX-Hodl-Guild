import { useGuildContract } from '../hooks/useGuildContract'
import { useAppKit } from '@reown/appkit/react'

export const Dashboard = () => {
  const { joinGuild, address } = useGuildContract()
  const { open } = useAppKit()

  return (
    <div className="card">
      {!address ? (
        <button onClick={() => open()}>Connect Wallet</button>
      ) : (
        <>
          <h2>Welcome, {address.substring(0, 6)}...</h2>
          <p>Ready to prove your HODL conviction?</p>
          <button onClick={joinGuild} className="btn-primary">
            Sign "Join Guild" Transaction
          </button>
        </>
      )}
    </div>
  )
}
