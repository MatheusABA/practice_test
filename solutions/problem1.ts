import net from 'node:net'

type PingCallback = (err: Error | null, info?: { ip: string; time: [number, number] }) => void

// This functiosn receives an IP address and a callback function.
export const ping = (ip: string, callback: PingCallback) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    callback(null, {
      ip: ip,
      time: process.hrtime(startTime),
    })
    client.end()
  })
  
  client.on('error', (err) => {
    callback(err)
    client.end()
  })
}

// This function call passes the IP address 'midu.dev' to the ping function
// and a callback to handle the response or error.
ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})