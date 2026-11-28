import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'r1va8pan',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  },
})
