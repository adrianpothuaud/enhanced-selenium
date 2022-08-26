import { getFirefoxDriver, getRemoteChromeDriver, IEnhancedDriver } from '../src'

/**
 * @group samples
 */
describe('Sign In', () => {
  let driver: IEnhancedDriver

  beforeAll(async () => {
    if (JSON.parse(process.env.CI)) driver = await getRemoteChromeDriver(process.env.SELENIUM_HUB_HOST)
    else driver =  await getFirefoxDriver()
  }, 10000)

  afterAll(async () => {
    await driver.quit()
  }, 10000)

  it('open demo application and enter the store', async () => {
    await driver.navTo('https://petstore.octoperf.com/')
    await driver.click('a[txt:Enter the Store]')
  }, 30000)

  it('goes to sign in page through the link on the header', async () => {
    await driver.click('div[#:MenuContent]->a[txt:Sign In]')
  }, 30000)

  it('fills login form', async () => {
    await driver.fill('input[n:username]', 'username')
    await driver.fill('input[n:password]', 'password')
    await driver.click('input[n:signon]')
  }, 20000)
})
