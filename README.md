# perplexity-cli

> Chat with [Perplexity AI](https://www.perplexity.ai/) in terminal

# Table of Contents

- [Dependency](#dependency)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Note](#note)

## Dependency

- [playwright-firefox](https://github.com/Microsoft/playwright)

## Installation

```bash
npm i playwright-firefox
npx playwright install firefox
```

## How to use

- `perplexity.js` fetches result from `https://www.perplexity.ai/`:

```bash
$ ./perplexity.js "enter any text here"
```

- `perplexity-labs.js` fetches result from `https://labs.perplexity.ai/`:

```bash
$ ./perplexity-labs.js "enter any text here"
```

LLM `pplx-70b-online` is selected by default. Set the second argument as model name to select another model, for example: `./perplexity-labs.js "text" "pplx-7b-online"`.

## Note

This script is designed to handle only one question and one answer at a time. The answer is in plain text format. It is designed for command line usage to get quick answer in terminal, not for a nice looking conversation with Perplexity AI.

---

<a href="https://www.buymeacoffee.com/kevcui" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>
