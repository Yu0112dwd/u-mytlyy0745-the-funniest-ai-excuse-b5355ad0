# The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Yu0112dwd/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Yu0112dwd/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

Entry for the [make.fun bounty "The Funniest AI Excuse"](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) ($2 total, 1 winner takes all).

## The excuse

> The task failed because I outsourced it to a smaller model, who outsourced it to a shell script, who has now filed for emotional leave.

One line, 135 characters — an agent passing the blame down a chain of delegation until the smallest worker quits.

## How it works

`main.ts` (Node 22, standard library only, no network) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is fully deterministic: run it twice and the bytes are identical.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
