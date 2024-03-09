#!/usr/bin/env node

const { chromium } = require('playwright-chromium');

const url = 'https://www.perplexity.ai/search?focus=internet&copilot=false&q=' + process.argv[2];
const buttonCopy = 'svg[data-icon="clipboard"]'; // copy icon on answer 
const buttonMenu = 'button[data-testid="thread-dropdown-menu"]'; // "..." icon on top right
const buttonDelete = 'div[data-testid="thread-delete"]'; // "Delete Thread" button
const buttonConfirm = 'css=button:has-text("Confirm")'; 
const textMessage = 'div[dir="auto"]';

chromium.launch({ headless: false, timeout: 30000 }).then(async browser => {
  // start session
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // get answer 
  await page.waitForSelector(buttonCopy);
  const result = await page.locator(textMessage).textContent();
  console.log(result);

  // delete thread
  await page.click(buttonMenu, {focus: true});
  await page.waitForTimeout(300);
  await page.click(buttonDelete);
  await page.waitForTimeout(300);
  await page.click(buttonConfirm);

  // close browser
  await browser.close();
});
