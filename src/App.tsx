import { createAppKit } from '@reown/appkit/react'
import { StacksAdapter } from '@reown/appkit-adapter-stacks'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { stacksMainnet, stacksTestnet } from '@reown/appkit/networks'

// 1. Initialize AppKit with your Project ID
const projectId = '180a7164cfa9e5388daf1160841f65a0'

createAppKit({
  adapters: [new StacksAdapter()],
  networks: [stacksMainnet, stacksTestnet],
  metadata: {
    name: 'STX HODL Guild',
    description: 'Rewarding long-term Bitcoin believers',
    url: 'https://your-domain.com',
    icons: ['https://cryptologos.cc/logos/stacks-stx-logo.png']
  },
  projectId,
  features: {
    analytics: true 
  }
})

export default function App() {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🪙 STX HODL GUILD</h1>
        <p>Where your conviction defines your power.</p>
      </header>

      <main style={styles.main}>
        {!isConnected ? (
          <button style={styles.button} onClick={() => open()}>
            Connect Wallet to Join
          </button>
        ) : (
          <div style={styles.card}>
            <p><strong>Member Address:</strong> {address}</p>
            <div style={styles.stats}>
              <h3>Your Guild Status</h3>
              <p>Status: Active Member ✅</p>
              <p>Power Level: Calculating from Block Height...</p>
            </div>
            <button style={styles.guildBtn} onClick={() => alert('Triggering join-guild contract...')}>
              Register New HODL Position
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

const styles = {
  container: { backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'Inter, sans-serif' },
  header: { textAlign: 'center' as const, marginBottom: '50px' },
  main: { display: 'flex', justifyContent: 'center' },
  card: { background: '#1e293b', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', width: '400px' },
  button: { padding: '15px 30px', borderRadius: '12px', border: 'none', backgroundColor: '#5546ff', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  guildBtn: { width: '100%', marginTop: '20px', padding: '12px', borderRadius: '8px', border: '1px solid #5546ff', backgroundColor: 'transparent', color: '#5546ff', cursor: 'pointer' },
  stats: { margin: '20px 0', padding: '15px', backgroundColor: '#0f172a', borderRadius: '8px' }
}
