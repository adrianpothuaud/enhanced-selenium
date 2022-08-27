import { getRemoteChromeDriver, IEnhancedDriver } from '../dist'

jest.setTimeout(300000)

/**
 * @group samples
 */
describe('Sign In', () => {
  let driver: IEnhancedDriver

  beforeAll(async () => {
    driver = await getRemoteChromeDriver('localhost')
  })

  afterAll(async () => {
    await driver.quit()
  })

  it('open demo application and enter the store', async () => {
    await driver.navTo('https://petstore.octoperf.com/')
    await driver.click('a[txt:Enter the Store]')
  })

  it('goes to sign in page through the link on the header', async () => {
    await driver.click('div[#:MenuContent]->a[txt:Sign In]')
  })

  it('fills login form', async () => {
    await driver.fill('input[n:username]', 'username')
    await driver.fill('input[n:password]', 'password')
    await driver.click('input[n:signon]')
  })
})
