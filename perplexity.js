#!/usr/bin/env node

const { firefox } = require('playwright-firefox');
const url = 'https://www.perplexity.ai/search?focus=internet&copilot=false&q=' + process.argv[2];
const buttonMenu = 'button[data-testid="thread-dropdown-menu"]';
const buttonDelete = 'div[data-testid="thread-delete"]';
const buttonConfirm = 'css=button:has-text("Confirm")';
const buttonCopy = 'svg[data-icon="clipboard"]';
const textMessage = 'div[dir="auto"]';

firefox.launch({ headless: true, timeout: 30000 }).then(async browser => {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  page.setDefaultTimeout(20000);

  await page.waitForSelector(buttonCopy);
  const result = await page.locator(textMessage).textContent();
  console.log(result);

  await page.click(buttonMenu, {focus: true});
  await page.waitForTimeout(300);
  await page.click(buttonDelete);
  await page.waitForTimeout(300);
  await page.click(buttonConfirm);

  await browser.close();
});
