const puppeteer = require('puppeteer');
require('dotenv').config();


(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://livecontabilidade.digisac.chat/now');
    await page.setViewport({width: 1920, height: 1080});
    await page.waitForSelector('#username');
    await page.type('#username', process.env.USUARIO);
    await page.type('#password', process.env.SENHA);
    await page.click('button[type=submit]');
    await page.evaluate(()=>{
        setTimeout(()=>{
            document.querySelector("#resume").click();
            document.querySelector("div.sc-hqpNSm").click();
        }, 5000)
    });
})();