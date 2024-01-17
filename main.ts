import { chromium } from "playwright"

const browser = await chromium.launch({
  headless: false
})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://search.bilibili.com/all?keyword=%E6%B3%A2%E5%A3%AB%E9%A1%BF%E5%9C%86%E8%84%B8&search_source=1")
await page.waitForTimeout(1000)

await browser.close()
