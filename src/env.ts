import * as dotenv from 'dotenv'

dotenv.config()

interface IEnv {
  isCI: string
  seleniumHubHost: string
}

export const env: IEnv = {
  isCI: process.env.CI ? JSON.parse(process.env.CI as string) : false,
  seleniumHubHost: process.env.SELENIUM_HUB_HOST as string || ''
}
