const CDP = require('chrome-remote-interface')

const main = async () => {
  const url = 'http://localhost:8000'
  const client = await CDP({
    port: 9222,
    host: process.env.CHROME_HOST ?? 'localhost',
  })

  await client.Browser.setPermission({
    permission: {
      name: 'notifications',
    },
    setting: 'granted',
    // setting: 'prompt',
    // setting: 'denied',
  })

  await client.Runtime.enable()
  await client.Runtime.consoleAPICalled(({ args }) => {
    console.log(JSON.stringify(args, undefined, 2))
  })
  await client.Page.enable()
  const detectingScript = await client.Page.addScriptToEvaluateOnNewDocument({
    source: `
      console.log("Notification.permission", Notification.permission)
      navigator.permissions.query({ name: "notifications" })
        .then(query => console.log("query", query))
        .catch(query => console.error("query", query))
      Notification.requestPermission()
        .then(request => console.log("request", request))
        .catch(request => console.error("request", request))
    `,
  })

  await client.Page.navigate({ url })
  await client.Page.loadEventFired()

  await client.Page.removeScriptToEvaluateOnNewDocument(detectingScript)
  await client.Runtime.disable()
  await client.Page.disable()
  await client.close()
}

main().catch(console.error)
