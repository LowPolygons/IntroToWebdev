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

## Notes

On the Hall of Fame page, I intentionally let the textbox go outside the bounds of what the mudfoot server actually contains data for.

I am aware that it doesn't go earlier than 1986 or after 2021.

This was a design choice to demonstrate error handling easier for the marker of this assignment.

Across the pages I use classes with the prefix 'exc-'. If I were to redo this whole project, I would not include the 'exc-' infront of them.

However, because it technically provides no disadvantages I have chosen to not replace them all.
