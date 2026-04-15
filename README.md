# IntroToWebdev

To view the pages, run

```sh
python3 -m http.server
```

Then open

```sh
http://localhost:8000
```

## Responsiveness

I made my website responsive through:

- Usage of flex containers. I tried to create my content in a exclusively 'row-or-column' fashion which meant - using media queries - when the resolution became too small I could switch the flex direction without the destruction of the design.

- Relative/Proportional units. Besides media queries, I attempted to exclusively use units which are relative the screen size rather than a fixed amount. As a result, my primary tool for sizing was 'vw' & 'vh' and percentages, and for text I stuck to 'rem'.
