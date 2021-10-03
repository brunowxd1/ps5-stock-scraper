const puppeteerArgs = [
  "--no-sandbox",
  "--disable-setupid-sandbox",
  "--disable-infobars",
  "--window-position=0,0",
  "--ignore-certifcate-errors",
  "--ignore-certifcate-errors-spki-list",
  '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
];

const puppeteerOptions = {
  puppeteerArgs,
  ignoreHTTPSErrors: true,
};

export default puppeteerOptions;
