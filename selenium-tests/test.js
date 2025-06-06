const {Builder, By} = require('selenium-webdriver');

(async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://3.80.249.29');
    await driver.findElement(By.css('.cell[data-index="0"]')).click();
    let cellText = await driver.findElement(By.css('.cell[data-index="0"]')).getText();
    if (cellText.trim().toLowerCase() !== 'x') {
      throw new Error(cellText);
    }
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();

