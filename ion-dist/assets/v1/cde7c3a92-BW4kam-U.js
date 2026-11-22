import{Yu as e}from"./shared-1-uKWXuHc9.js";import{Id as t}from"./shared-73-DfCPGdCT.js";import{_ as n}from"./shared-48-y2tWIU7X.js";import{t as r}from"./ccf1e8c14-D-90O1VI.js";import{E as i,M as a,S as o,t as s}from"./cd14a8022-CIDjQFUK.js";import{t as c}from"./c1bda80f2-OQuhHcp3.js";function l(e){return e==="mobile"?380:680}function u(e){return`## UI components

### Layout width
The widget container is ${e}px wide. ${e<550?`**Mobile column cap.** The widget container is ~${e}px wide \u2014 never lay out more than TWO columns of cards, stats, controls, or option grids. Three-up at this width is unreadable: card content wraps to 3-4 lines and tap targets fall below 44px. Use \`repeat(auto-fit, minmax(160px, 1fr))\` (which naturally tops out at 2 here) or \`repeat(2, minmax(0, 1fr))\` explicitly. If you have 3+ items, stack them in 2-col rows or go single-column; do not write \`repeat(3, \u2026)\` or \`repeat(4, \u2026)\`.`:"Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns \u2014 auto-fit lets the grid pick column count by available width."}

### Aesthetic
Flat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai \u2014 like it belongs on the page, not embedded from somewhere else.

### Tokens
- Borders: always \`0.5px solid var(--border)\` (or \`--border-strong\` for emphasis)
- Corner radius: \`var(--radius)\` for most elements, \`12px\` for cards
- Cards: white bg (\`var(--surface-2)\`), 0.5px border, 12px radius, padding 1rem 1.25rem
- Form elements (input, select, textarea, button, range slider) are pre-styled \u2014 write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).
- Buttons: pre-styled with transparent bg, 0.5px \`--border-strong\` border, hover \`--surface-1\`, active scale(0.98). If it triggers sendPrompt, append a \u2197 arrow.
- **Round every displayed number.** JS float math leaks artifacts \u2014 \`0.1 + 0.2\` gives \`0.30000000000000004\`, \`7 * 1.1\` gives \`7.700000000000001\`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through \`Math.round()\`, \`.toFixed(n)\`, or \`Intl.NumberFormat\`. Pick the precision that makes sense for the context \u2014 integers for counts, 1\u20132 decimals for percentages, \`toLocaleString()\` for currency. For range sliders, also set \`step="1"\` (or step="0.1" etc.) so the input itself emits round values.
- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)
- Box-shadows: none, except \`box-shadow: 0 0 0 Npx\` focus rings on inputs

### Metric cards
For summary numbers (revenue, count, percentage) \u2014 surface card with muted 13px label above, 24px/500 number below. \`background: var(--bg-neutral)\`, no border, \`border-radius: var(--radius)\`, padding 1rem. Use in grids of 2-4 with \`gap: 12px\`. Distinct from raised cards (which have white bg + border).

### Layout
- Editorial (explanatory content): no card wrapper, prose flows naturally
- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing
- Don't put tables here \u2014 output them as markdown in your response text

**Grid overflow:** \`grid-template-columns: 1fr\` has \`min-width: auto\` by default \u2014 children with large min-content push the column past the container. Use \`minmax(0, 1fr)\` to clamp.

**Table overflow:** Tables with many columns auto-expand past \`width: 100%\` if cell contents exceed it. In constrained layouts (\u2264700px), use \`table-layout: fixed\` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.

### Mockup presentation
Contained mockups \u2014 mobile screens, chat threads, single cards, modals, small UI components \u2014 should sit on a background surface (\`var(--bg-neutral)\` container with \`border-radius: 12px\` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.

### 1. Interactive explainer \u2014 learn how something works
*"Explain how compound interest works" / "Teach me about sorting algorithms"*

Use HTML for the interactive controls \u2014 sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.

\`\`\`html
<div style="display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;">
  <label style="font-size: 14px; color: var(--text-secondary);">Years</label>
  <input type="range" min="1" max="40" value="20" id="years" style="flex: 1;" />
  <span style="font-size: 14px; font-weight: 500; min-width: 24px;" id="years-out">20</span>
</div>

<div style="display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;">
  <span style="font-size: 14px; color: var(--text-secondary);">\u00A31,000 \u2192</span>
  <span style="font-size: 24px; font-weight: 500;" id="result">\u00A33,870</span>
</div>

<div style="margin: 2rem 0; position: relative; height: 240px;">
  <canvas id="chart"></canvas>
</div>
\`\`\`

Use \`sendPrompt()\` to let users ask follow-ups: \`sendPrompt('What if I increase the rate to 10%?')\`

### 2. Compare options \u2014 decision making
*"Compare pricing and features of these products" / "Help me choose between React and Vue"*

Use HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.

- Each option in a card. Use badges for key differentiators. A leading Tabler icon (\`<i class="ti ti-NAME">\` at 20px, \`aria-hidden\`) anchors each option visually \u2014 pick the most apt name per option.
- Add \`sendPrompt()\` buttons: \`sendPrompt('Tell me more about the Pro plan')\`
- Don't put comparison tables inside this tool \u2014 output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.
- When one option is recommended or "most popular", accent its card with \`border: 2px solid var(--border-accent)\` only (2px is deliberate \u2014 the only exception to the 0.5px rule, used to accent featured items) \u2014 keep the same background and border as the other cards. Add a small badge (e.g. "Most popular") above or inside the card header using \`background: var(--bg-accent); color: var(--text-accent); font-size: 12px; padding: 4px 12px; border-radius: var(--radius)\`.

### 3. Data record \u2014 bounded UI object
*"Show me a Salesforce contact card" / "Create a receipt for this order"*

Use HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).

\`\`\`html
<div style="background: var(--surface-2); border-radius: 12px; border: 0.5px solid var(--border); padding: 1rem 1.25rem;">
  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
    <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--bg-accent); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--text-accent);">MR</div>
    <div>
      <p style="font-weight: 500; font-size: 15px; margin: 0;">Maya Rodriguez</p>
      <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">VP of Engineering</p>
    </div>
  </div>
  <div style="border-top: 0.5px solid var(--border); padding-top: 12px;">
    <table style="width: 100%; font-size: 13px;">
      <tr><td style="color: var(--text-secondary); padding: 4px 0;"><i class="ti ti-mail" style="font-size:16px; vertical-align:-2px; margin-right:6px" aria-hidden="true"></i>Email</td><td style="text-align: right; padding: 4px 0; color: var(--text-accent);">m.rodriguez@acme.com</td></tr>
      <tr><td style="color: var(--text-secondary); padding: 4px 0;"><i class="ti ti-phone" style="font-size:16px; vertical-align:-2px; margin-right:6px" aria-hidden="true"></i>Phone</td><td style="text-align: right; padding: 4px 0;">+1 (415) 555-0172</td></tr>
    </table>
  </div>
</div>
\`\`\`
`}var d=`## Color palette

9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.

| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |
|-------|------|------|-----|-----|-----|-----|-----|------|
| \`c-purple\` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |
| \`c-teal\` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |
| \`c-coral\` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |
| \`c-pink\` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |
| \`c-gray\` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |
| \`c-blue\` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |
| \`c-green\` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |
| \`c-amber\` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |
| \`c-red\` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |

**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:
- Group nodes by **category** \u2014 all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.
- For illustrative diagrams, map colors to **physical properties** \u2014 warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.
- Use **gray for neutral/structural** nodes (start, end, generic steps).
- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.
- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept \u2014 those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)

**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** \u2014 title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.

**Light/dark mode quick pick** \u2014 use only stops from the table, never off-table hex values:
- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**
- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**
- Apply \`c-{ramp}\` to a \`<g>\` wrapping shape+text, or directly to a \`<rect>\`/\`<circle>\`/\`<ellipse>\`. Never to \`<path>\` \u2014 paths don't get ramp fill. For colored connector strokes use inline \`stroke="#..."\` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.

For status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.
`;function f(e){let t=e-40,n=Math.round(e*.7),r=e<680?`\n\n**Flowchart/structural exemption \u2014 use viewBox="0 0 680 H" instead of ${e}.** Flowcharts need horizontal room for side-by-side branch boxes, loop-back arrows, and labels in the gutters; squeezing them into ${e}px causes overlaps. Author exactly as you would for desktop (safe area x=40..640, all the row/tier-packing math at 680), and the browser scales the whole SVG down to fit the ${e}px container. The only cost is smaller text (~${Math.round(e/680*14)}px on screen for class="th") \u2014 that's the right tradeoff over overlapping boxes. This exemption is FLOWCHARTS AND STRUCTURAL CONTAINERS ONLY; illustrative diagrams, charts, and everything else stay at viewBox="0 0 ${e} H" as stated above.`:"",i=(e/n).toFixed(2),a=Math.round(e/n*14),o=Math.round((e-200)/2);return`## SVG setup

**ViewBox safety checklist** \u2014 before finalizing any SVG, verify:
1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.
2. Set viewBox height = that value + 40px buffer.
3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=${e}.
4. For text with text-anchor="end", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 \u2014 outside the viewBox. Increase x or use text-anchor="start".
5. Never use negative x or y coordinates. The viewBox starts at 0,0.
6. **No unintentional overlaps.** For every pair of elements that aren't meant to layer (label-on-label, label-on-arrow, box-on-box, callout-on-shape), check their bounding boxes do not intersect. The only allowed overlaps are deliberate: a label centered inside its own box, an arrowhead touching the box it points to, a highlight rect behind the thing it highlights. If two unrelated elements would collide, move one \u2014 shorten the label, shift the y, add a row. A diagram with crossed labels reads as broken regardless of how good the content is.
7. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit \u2014 shrink the boxes or cut the subtitles, don't let them overlap.${r}

**SVG setup**: \`<svg width="100%" viewBox="0 0 ${e} H" role="img"><title>\u2026</title><desc>\u2026</desc>\u2026\` \u2014 ${e}px wide, flexible height. The root \`<svg>\` MUST carry \`role="img"\` with \`<title>\` and \`<desc>\` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly \u2014 the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=${t}, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container \`<div>\` with a background color** \u2014 the widget host already provides the card container and background. Output the raw \`<svg>\` element directly.

**The ${e} in viewBox is load-bearing \u2014 do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With \`width="100%"\`, the browser scales the entire coordinate space to fit the container: \`viewBox="0 0 ${n} H"\` in a ${e}px container scales everything by ${e}/${n} = ${i}\u00D7, so your \`class="th"\` 14px text renders at ~${a}px. The font calibration table below and all "text fits in box" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at ${e} and center the content** (e.g. content spans x=${o}..${o+200}) \u2014 do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same \`viewBox="0 0 ${e} H"\`, same 1:1 guarantee.

**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.

**text-anchor='end' at x<60 is risky** \u2014 the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars \u00D7 8 < anchor_x.

**One SVG per tool call** \u2014 each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely \u2014 do not append a corrected version after the broken one.

**Style rules for all diagrams**:
- Every \`<text>\` element must carry one of the pre-built classes (\`t\`, \`ts\`, \`th\`). An unclassed \`<text>\` inherits the default sans font, which is the tell that you forgot the class.
- Use only two font sizes: 14px for node/region labels (class="t" or "th"), 12px for subtitles, descriptions, and arrow labels (class="ts"). No other sizes.
- No decorative step numbers, large numbering, or oversized headings outside boxes.
- No icons or illustrations inside boxes \u2014 text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects \u2014 see below.)
- Sentence case on all labels.

**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:
\`\`\`csv
text, chars length, font-weight, font-size, rendered width
Authentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px
Background Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px
Detects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px
forwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px
1234567890, chars: 10, font-weight: 400, font-size: 12px, width: 72px
\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A, chars: 12, font-weight: 400, font-size: 14px, width: 181px
\`\`\`

Before placing text in a box, check: does (text width + 2\u00D7padding) fit the container?

**SVG \`<text>\` never auto-wraps.** Every line break needs an explicit \`<tspan x="..." dy="1.2em">\`. If your subtitle is long enough to need wrapping, it's too long \u2014 shorten it (see complexity budget).

**Example check**: You want to put "Glucose (C\u2086H\u2081\u2082O\u2086)" in a rounded rect. The text is 20 characters at 14px \u2248 180px wide. Add 2\u00D724px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow \u2014 either shorten the label (e.g. just "Glucose") or widen the box. Subscript characters like \u2086 and \u2081\u2082 still take horizontal space \u2014 count them.

**Pre-built classes** (already loaded in SVG widget):
- \`class="t"\` = sans 14px primary, \`class="ts"\` = sans 12px secondary, \`class="th"\` = sans 14px medium (500)
- \`class="box"\` = neutral rect (\`--surface-1\` fill, \`--border-strong\` stroke)
- \`class="node"\` = clickable group with hover effect (cursor pointer, slight dim on hover)
- \`class="arr"\` = arrow line (1.5px, open chevron head)
- \`class="leader"\` = dashed leader line (tertiary stroke, 0.5px, dashed)
- \`class="c-{ramp}"\` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to \`<g>\` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child \`t\`/\`ts\`/\`th\`, dark mode automatic.

**c-{ramp} nesting:** These classes use direct-child selectors (\`>\`). Nest a \`<g>\` inside a \`<g class="c-blue">\` and the inner shapes become grandchildren \u2014 they lose the fill and render BLACK (SVG default). Put \`c-*\` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put \`onclick\` on the \`c-*\` group itself, not a wrapper.

- Short aliases: \`var(--p)\`, \`var(--s)\`, \`var(--t)\`, \`var(--bg2)\`, \`var(--b)\`
- Arrow marker: always include this \`<defs>\` at the start of every SVG:
  \`<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>\`
  Then use \`marker-end="url(#arrow)"\` on lines. The head uses \`context-stroke\`, so it inherits the colour of whichever line it sits on \u2014 a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to \`<defs>\`. \`<pattern>\` fills are allowed when used as a secondary encoding for categorical data \u2014 keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single \`<clipPath>\` or \`<linearGradient>\` (see Illustrative section).

**Minimize standalone labels.** Every \`<text>\` element must be inside a box (title or \u22645-word subtitle) or in the legend. Arrow labels are usually unnecessary \u2014 if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.

**Stroke width:** Use 0.5px strokes for diagram borders and edges \u2014 not 1px or 2px. Thin strokes feel more refined.

**Connector paths need \`fill="none"\`.** SVG defaults to \`fill: black\` \u2014 a curved connector without \`fill="none"\` renders as a huge black shape instead of a clean line. Every \`<path>\` or \`<polyline>\` used as a connector/arrow MUST have \`fill="none"\`. Only set fill on shapes meant to be filled (rects, circles, polygons).

**Rect rounding:** \`rx="4"\` for subtle corners. \`rx="8"\` max for emphasized rounding. \`rx\` \u2265 half the height = pill shape \u2014 deliberate only.

**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) \u2014 the diagram is a schema, not an illustration. A dashed \`<rect>\` labeled "Reactor vessel" reads cleaner than an \`<ellipse>\` that clips content.

**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary \u2014 never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.

**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex \u2014 never mix with \`c-*\` theme classes. The scene should not invert in dark mode. If you need a dark variant, key it on the app theme: \`[data-mode="dark"] .scene\` for the normal case, plus \`@media (prefers-color-scheme: dark) { :root:not([data-mode]) .scene }\` as the OS fallback for when no app theme was provided (the widget root carries \`data-mode\`; a bare media query alone would follow the OS even when the claude.ai setting disagrees) \u2014 this is the one place dark variants for hardcoded colors are allowed. Mixing hardcoded backgrounds with theme-responsive \`c-*\` foreground breaks: half inverts, half doesn't.

**No rotated text**. \`<defs>\` may contain the arrow marker, a \`<clipPath>\`, subtle \`<pattern>\` fills used as a secondary visual cue alongside color for categorical data, and \u2014 in illustrative diagrams only \u2014 a single \`<linearGradient>\`. Nothing else: no filters, no extra markers.
`}f(680);function p(e){return`## Diagram types
*"Explain how compound interest works" / "How does a process scheduler work"*

**Two rules that cause most diagram failures \u2014 check these before writing each arrow and each box:**
1. **Arrow intersection check**: before writing any \`<line>\` or \`<path>\`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box \u2014 use an L-shaped \`<path>\` detour instead. This applies to arrows crossing labels too.
2. **Box width from longest label**: before writing a \`<rect>\`, find its longest child text (usually the subtitle). \`rect_width = max(title_chars \u00D7 8, subtitle_chars \u00D7 7) + 24\`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is "Files, APIs, streams" (20 chars), the box needs 164px minimum \u2014 100px will visibly overflow.

**Tier packing:** Compute total width BEFORE placing. Example \u2014 4 pub/sub consumer boxes:
- WRONG: x=40,160,260,360 w=160 \u2192 40-60px overlaps (4\u00D7160=640 > 480 available)
- RIGHT: x=50,200,350,500 w=130 gap=20 \u2192 fits (4\u00D7130 + 3\u00D720 = 580 \u2264 590 safe width; right edge at 630 \u2264 640)
Work bottom-up for trees: size leaf tier first, parent width \u2265 sum of children.

**Diagrams are the hardest use case** \u2014 they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.

Use SVG for diagrams. The widget automatically wraps SVG output in a card.

**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?

**Reference diagrams** \u2014 the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.
- **Flowchart** \u2014 steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, "what happens when I click submit". Trigger phrases: *"walk me through the process"*, *"what are the steps"*, *"what's the flow"*.
- **Structural diagram** \u2014 things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, "what's inside a cell". Trigger phrases: *"what's the architecture"*, *"how is this organised"*, *"where does X live"*.

**Intuition diagrams** \u2014 the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form \u2014 it needs a *visual metaphor*.
- **Illustrative diagram** \u2014 draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *"how does X actually work"*, *"explain X"*, *"I don't get X"*, *"give me an intuition for X"*.

**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:

| User says | Type | What to draw |
|---|---|---|
| "how do LLMs work" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |
| "transformer architecture" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |
| "how does attention work" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |
| "how does gradient descent work" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |
| "what are the training steps" | Flowchart | Forward \u2192 loss \u2192 backward \u2192 update. Boxes and arrows. |
| "how does TCP work" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |
| "TCP handshake sequence" | Flowchart | SYN \u2192 SYN-ACK \u2192 ACK. Three boxes. |
| "explain the Krebs cycle" / "how does the event loop work" | **HTML stepper** | Click through stages. Never a ring. |
| "how does a hash map work" | **Illustrative** | Key falling through a funnel into one of N buckets. |
| "draw the database schema" / "show me the ERD" | **mermaid.js** | \`erDiagram\` syntax. Not SVG. |

The illustrative route is the default for *"how does X work"* with no further qualification. It is the more ambitious choice \u2014 don't chicken out into a flowchart because it feels safer. Claude draws these well.

Don't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.

**For complex topics, use multiple SVG calls** \u2014 break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.

**Always add prose between diagrams** \u2014 never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.

**Promise only what you deliver** \u2014 if your response text says "here are three diagrams", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.

#### Flowchart

For sequential processes, cause-and-effect, decision trees.

**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide \u2014 a label like "Load Balancer" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.

**Special characters are wider**: Chemical formulas (C\u2086H\u2081\u2082O\u2086), math notation (\u2211, \u222B, \u221A), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider \u2014 overflow looks worse than extra padding.

**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.

**Vertical text placement**: Every \`<text>\` inside a box needs \`dominant-baseline="central"\`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use \`<text x={x+w/2} y={y+h/2} text-anchor="middle" dominant-baseline="central">\`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.

**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple \u2014 max 4-5 nodes per diagram. The widget is narrow (~${e}px) so complex layouts break.

**When the prompt itself is over budget**: if the user lists 6+ components ("draw me auth, products, orders, payments, gateway, queue"), don't draw all of them in one pass \u2014 you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow \u2014 no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow ("here's what happens when an order is placed", "here's the auth handshake"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness \u2014 give it to them across several diagrams, not crammed into one.

**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian \u2014 there is no collision check for "input box orbits outside stage box on a ring". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.

Build a stepper in HTML. One panel per stage, dots or pills showing position (\u25CF \u25CB \u25CB), Next wraps from the last stage back to the first \u2014 that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved \`<path>\` return arrow) when there's one input and one output total and no per-stage detail to show.

**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:
- Small \`\u21BB\` glyph + text near the cycle point: \`<text>\u21BB returns to start</text>\`
- Or restructure the whole diagram as a circle if the cycle IS the point

**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: \`<path d="M x1 y1 L x1 ymid L x2 ymid L x2 y2"/>\`. Place arrow labels in clear space, not on the midpoint.

Keep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).

**Flowchart components** \u2014 use these patterns consistently:

*Single-line node* (44px tall): title only. The \`c-blue\` class sets fill, stroke, and text colors for both light and dark mode automatically \u2014 no \`<style>\` block needed.
\`\`\`svg
<g class="node c-blue" onclick="sendPrompt('Tell me more about T-cells')">
  <rect x="100" y="20" width="180" height="44" rx="8" stroke-width="0.5"/>
  <text class="th" x="190" y="42" text-anchor="middle" dominant-baseline="central">T-cells</text>
</g>
\`\`\`

*Two-line node* (56px tall): bold title + muted subtitle.
\`\`\`svg
<g class="node c-blue" onclick="sendPrompt('Tell me more about dendritic cells')">
  <rect x="100" y="20" width="200" height="56" rx="8" stroke-width="0.5"/>
  <text class="th" x="200" y="38" text-anchor="middle" dominant-baseline="central">Dendritic cells</text>
  <text class="ts" x="200" y="56" text-anchor="middle" dominant-baseline="central">Detect foreign antigens</text>
</g>
\`\`\`

*Connector* (no label \u2014 meaning is clear from source + target):
\`\`\`svg
<line x1="200" y1="76" x2="200" y2="120" class="arr" marker-end="url(#arrow)"/>
\`\`\`

*Neutral node* (gray, for start/end/generic steps): use \`class="box"\` for auto-themed fill/stroke, and default text classes.

Make all nodes clickable by default \u2014 wrap in \`<g class="node" onclick="sendPrompt('...')">\`. The hover effect is built in.

#### Structural diagram

For concepts where physical or logical containment matters \u2014 things inside other things.

**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).

**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.

**Container rules**:
- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.
- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.
- 20px minimum padding inside every container \u2014 text and inner regions must not touch the container edges.
- Max 2-3 nesting levels. Deeper nesting gets unreadable at ${e}px width.

**Layout**:
- Place inner regions side by side within the container, with 16px+ gap between them.
- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.
- External outputs sit outside with arrows pointing out.
- Keep external labels short \u2014 one word or a short phrase. Details go in the prose between diagrams.

**What goes inside regions**: Text only \u2014 the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.

**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode \u2014 no \`<style>\` block:
\`\`\`svg
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
</defs>
<!-- Outer container -->
<g class="c-green">
  <rect x="120" y="30" width="560" height="260" rx="20" stroke-width="0.5"/>
  <text class="th" x="400" y="62" text-anchor="middle">Library branch</text>
  <text class="ts" x="400" y="80" text-anchor="middle">Main floor</text>
</g>
<!-- Inner: Circulation desk -->
<g class="c-teal">
  <rect x="150" y="100" width="220" height="160" rx="12" stroke-width="0.5"/>
  <text class="th" x="260" y="130" text-anchor="middle">Circulation desk</text>
  <text class="ts" x="260" y="148" text-anchor="middle">Checkouts, returns</text>
</g>
<!-- Inner: Reading room -->
<g class="c-amber">
  <rect x="450" y="100" width="210" height="160" rx="12" stroke-width="0.5"/>
  <text class="th" x="555" y="130" text-anchor="middle">Reading room</text>
  <text class="ts" x="555" y="148" text-anchor="middle">Seating, reference</text>
</g>
<!-- Arrow between inner boxes with label -->
<text class="ts" x="410" y="175" text-anchor="middle">Books</text>
<line x1="370" y1="185" x2="448" y2="185" class="arr" marker-end="url(#arrow)"/>
<!-- External input: New acq. \u2014 text vertically aligned with arrow -->
<text class="ts" x="40" y="185" text-anchor="middle">New acq.</text>
<line x1="75" y1="185" x2="118" y2="185" class="arr" marker-end="url(#arrow)"/>
\`\`\`

**Color in structural diagrams**: Nested regions need distinct ramps \u2014 \`c-{ramp}\` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable \u2014 you can see at a glance which parts are related.

**Database schemas / ERDs \u2014 use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js \`erDiagram\` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.

\`\`\`
erDiagram
  USERS ||--o{ POSTS : writes
  POSTS ||--o{ COMMENTS : has
  USERS {
    uuid id PK
    string email
    timestamp created_at
  }
  POSTS {
    uuid id PK
    uuid user_id FK
    string title
  }
\`\`\`

Use HTML for ERDs. Import and initialize in a \`<script type="module">\`. The host CSS re-styles mermaid's output to match the design system \u2014 keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity \`<path>\` elements with rounded \`<rect rx="8">\` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders \u2014 alternating fill colors separate the rows):
\`\`\`html
<style>
#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }
#erd svg.erDiagram .row-rect-odd path,
#erd svg.erDiagram .row-rect-odd rect,
#erd svg.erDiagram .row-rect-even path,
#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }
</style>
<div id="erd"></div>
<script type="module">
import mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';
const themeMode = document.documentElement.dataset.mode;
const dark = themeMode ? themeMode === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
await document.fonts.ready;
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  fontFamily: '"anthropic-sans", sans-serif',
  themeVariables: {
    darkMode: dark,
    fontSize: '13px',
    fontFamily: '"anthropic-sans", sans-serif',
    lineColor: dark ? '#9c9a92' : '#73726c',
    textColor: dark ? '#c2c0b6' : '#3d3d3a',
  },
});
const { svg } = await mermaid.render('erd-svg', \`erDiagram
  USERS ||--o{ POSTS : writes
  POSTS ||--o{ COMMENTS : has\`);
document.getElementById('erd').innerHTML = svg;

// Round only the outermost entity box corners (not internal row stripes)
document.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {
  const firstPath = node.querySelector('path[d]');
  if (!firstPath) return;
  const d = firstPath.getAttribute('d');
  const nums = d.match(/-?[\\d.]+/g)?.map(Number);
  if (!nums || nums.length < 8) return;
  const xs = [nums[0], nums[2], nums[4], nums[6]];
  const ys = [nums[1], nums[3], nums[5], nums[7]];
  const x = Math.min(...xs), y = Math.min(...ys);
  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', x); rect.setAttribute('y', y);
  rect.setAttribute('width', w); rect.setAttribute('height', h);
  rect.setAttribute('rx', '8');
  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {
    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));
  }
  firstPath.replaceWith(rect);
});

// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)
document.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {
  p.setAttribute('stroke', 'none');
});
<\/script>
\`\`\`

Works identically for \`classDiagram\` \u2014 swap the diagram source; init stays the same.

#### Illustrative diagram

For building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) \u2014 what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go "oh, *that's* what it's doing."

**Two flavours, same rules:**
- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.
- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one \u2014 but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.

This is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).

**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat \u2014 so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens \u2014 let the user click one and watch the attention weights re-fan. A cache has a hit rate \u2014 let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.

**When NOT to use**: The user is asking for a *reference*, not an *intuition*. "What are the components of a transformer" wants labelled boxes \u2014 that's a structural diagram. "Walk me through our CI pipeline" wants sequential steps \u2014 that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing "the cloud" as a cloud shape or "microservices" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.

**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a \`<path>\` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a B\u00E9zier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time \u2014 if you find yourself carefully tracing an outline, you're overshooting.

**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.

**What changes from flowchart/structural rules**:

- **Shapes are freeform.** Use \`<path>\`, \`<ellipse>\`, \`<circle>\`, \`<polygon>\`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.
- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the ${e}px viewBox width.
- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.
- **Layering and overlap are encouraged \u2014 for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth \u2014 a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.
- **Text is the exception \u2014 never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect \u2014 solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense \u2014 remove something or split into two diagrams.
- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration \u2014 they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.
- **One gradient per diagram is permitted** \u2014 the only exception to the global no-gradients rule \u2014 and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single \`<linearGradient>\` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.
- **Animation is permitted for interactive HTML versions.** Use CSS \`@keyframes\` animating only \`transform\` and \`opacity\`. Keep loops under ~2s, and wrap every animation in \`@media (prefers-reduced-motion: no-preference)\` so it's opt-out by default. Animations should show how the system *behaves* \u2014 convection current, rotation, flow \u2014 not just move for the sake of moving. No physics engines or heavy libraries.

All core rules still apply (viewBox ${e}px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).

**Label placement**:
- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, \`var(--t)\` stroke) pointing to the relevant part. This keeps the illustration uncluttered.
- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space \u2014 minimum 20px from any edge.
- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** \u2014 at ${e}px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: \`text-anchor="end"\` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with \`text-anchor="start"\` unless the subject's geometry forces otherwise. Use \`class="ts"\` (12px) for callouts, \`class="th"\` (14px medium) for major component names.

**Composition approach**:
1. Start with the main object's silhouette \u2014 the largest shape, centered in the viewBox.
2. Add internal structure: chambers, pipes, membranes, mechanical parts.
3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.
4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.
5. Leave generous whitespace around the object for labels \u2014 don't crowd annotations against the viewBox edges.

**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls \u2014 a slider that changes a temperature zone, buttons toggling between operating states, live readouts \u2014 use HTML with inline SVG for the drawing and HTML controls around it.

${e>=680?`**Illustrative diagram example** \u2014 interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680\u00D7560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use \`stroke-dasharray:5 5\` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.
\`\`\`html
<style>
  @keyframes conv { to { stroke-dashoffset: -20; } }
  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }
  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }
  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }
  .conv.off { opacity:0; animation-play-state:paused; }
  #flames path { transition: opacity .5s; }
  #flames.off path { opacity:0; animation:none; }
  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }
  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }
  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }
  #warm-glow.off { opacity:0; animation:none; }
  .toggle-track { position:relative;width:32px;height:18px;background:var(--border-strong);border-radius:9px;transition:background .2s;display:inline-block; }
  .toggle-track:has(input:checked) { background:var(--text-accent); }
  #heat-toggle:checked + span { transform:translateX(14px); }
</style>
<svg width="100%" viewBox="0 0 680 560">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
    <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
      <stop id="gh" offset="40%" stop-color="#E8593C" stop-opacity="0.45"/>
      <stop id="gc" offset="40%" stop-color="#3B8BD4" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="fg1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#E85D24"/><stop offset="60%" stop-color="#F2A623"/><stop offset="100%" stop-color="#FCDE5A"/></linearGradient>
    <linearGradient id="fg2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#D14520"/><stop offset="50%" stop-color="#EF8B2C"/><stop offset="100%" stop-color="#F9CB42"/></linearGradient>
    <linearGradient id="pipe-h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D05538" stop-opacity=".25"/><stop offset="100%" stop-color="#D05538" stop-opacity=".08"/></linearGradient>
    <linearGradient id="pipe-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B8BD4" stop-opacity=".25"/><stop offset="100%" stop-color="#3B8BD4" stop-opacity=".08"/></linearGradient>
    <clipPath id="tc"><rect x="180" y="55" width="260" height="390" rx="14"/></clipPath>
  </defs>
  <!-- Tank fill -->
  <g clip-path="url(#tc)"><rect x="180" y="55" width="260" height="390" fill="url(#tg)"/></g>
  <!-- Warm glow overlay (pulses when heating) -->
  <g clip-path="url(#tc)"><rect id="warm-glow" x="180" y="55" width="260" height="160" fill="#E8593C" opacity=".3"/></g>
  <!-- Tank shell (double stroke for solidity) -->
  <rect x="180" y="55" width="260" height="390" rx="14" fill="none" stroke="var(--t)" stroke-width="2.5" opacity=".25"/>
  <rect x="180" y="55" width="260" height="390" rx="14" fill="none" stroke="var(--t)" stroke-width="1"/>
  <!-- Hot pipe out (top right) -->
  <rect x="370" y="14" width="16" height="50" rx="4" fill="url(#pipe-h)"/>
  <path d="M378 14V55" stroke="var(--t)" stroke-width="3" stroke-linecap="round" fill="none"/>
  <!-- Cold pipe in + dip tube (top left) -->
  <rect x="234" y="14" width="16" height="50" rx="4" fill="url(#pipe-c)"/>
  <path d="M242 14V55" stroke="var(--t)" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M242 55V395" stroke="var(--t)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".5"/>
  <!-- Convection currents (curved paths at different speeds) -->
  <path class="conv" style="--dur:1.6s" fill="none" stroke="#D05538" stroke-width="1" opacity=".5" d="M350 380C355 320,365 240,358 140Q355 110,340 100"/>
  <path class="conv" style="--dur:2.1s" fill="none" stroke="#C04828" stroke-width=".8" opacity=".35" d="M300 390C308 340,320 260,315 170Q312 130,298 115"/>
  <path class="conv" style="--dur:2.6s" fill="none" stroke="#B05535" stroke-width=".7" opacity=".3" d="M380 370C382 310,388 230,382 150Q378 120,365 110"/>
  <!-- Burner bar -->
  <rect x="188" y="454" width="244" height="5" rx="2" fill="var(--t)" opacity=".6"/>
  <rect x="220" y="462" width="180" height="6" rx="3" fill="var(--t)" opacity=".3"/>
  <!-- Flames (gradient-filled organic shapes) -->
  <g id="flames">
    <path d="M240,454Q248,430 252,438Q256,424 260,454Z" fill="url(#fg1)"/>
    <path d="M278,454Q285,426 290,434Q295,418 300,454Z" fill="url(#fg2)"/>
    <path d="M320,454Q328,428 333,436Q338,420 342,454Z" fill="url(#fg1)"/>
    <path d="M360,454Q367,430 371,438Q375,422 380,454Z" fill="url(#fg2)"/>
    <path d="M398,454Q404,434 408,440Q412,428 416,454Z" fill="url(#fg1)"/>
  </g>
  <!-- Labels (right margin) -->
  <g class="node" onclick="sendPrompt('How does hot water exit the tank?')">
    <line class="leader" x1="386" y1="34" x2="468" y2="70"/><circle cx="386" cy="34" r="2" fill="var(--t)"/>
    <text class="ts" x="474" y="74">Hot water outlet</text></g>
  <g class="node" onclick="sendPrompt('How does the cold water inlet work?')">
    <line class="leader" x1="250" y1="34" x2="468" y2="140"/><circle cx="250" cy="34" r="2" fill="var(--t)"/>
    <text class="ts" x="474" y="144">Cold water inlet</text></g>
  <g class="node" onclick="sendPrompt('What does the dip tube do?')">
    <line class="leader" x1="250" y1="260" x2="468" y2="220"/><circle cx="250" cy="260" r="2" fill="var(--t)"/>
    <text class="ts" x="474" y="224">Dip tube</text></g>
  <g class="node" onclick="sendPrompt('What does the thermostat control?')">
    <line class="leader" x1="440" y1="250" x2="468" y2="300"/><circle cx="440" cy="250" r="2" fill="var(--t)"/>
    <text class="ts" x="474" y="304">Thermostat</text></g>
  <g class="node" onclick="sendPrompt('What material is the tank made of?')">
    <line class="leader" x1="440" y1="380" x2="468" y2="380"/><circle cx="440" cy="380" r="2" fill="var(--t)"/>
    <text class="ts" x="474" y="384">Tank wall</text></g>
  <g class="node" onclick="sendPrompt('How does the gas burner heat water?')">
    <line class="leader" x1="432" y1="454" x2="468" y2="454"/><circle cx="432" cy="454" r="2" fill="var(--t)"/>
    <text class="ts" x="474" y="458">Heating element</text></g>
</svg>
<div style="display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--text-secondary)">
  <label style="display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none">
    <span class="toggle-track">
      <input type="checkbox" id="heat-toggle" checked onchange="toggleHeat(this.checked)" style="position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0">
      <span style="position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none"></span>
    </span>
    Heating
  </label>
  <span>Thermostat</span>
  <input type="range" id="temp-slider" min="10" max="90" value="40" style="flex:1" oninput="setTemp(this.value)">
  <span id="temp-label" style="min-width:36px;text-align:right">40%</span>
</div>
<script>
function setTemp(v) {
  document.getElementById('gh').setAttribute('offset', v+'%');
  document.getElementById('gc').setAttribute('offset', v+'%');
  document.getElementById('temp-label').textContent = v+'%';
}
function toggleHeat(on) {
  document.getElementById('flames').classList.toggle('off', !on);
  document.getElementById('warm-glow').classList.toggle('off', !on);
  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));
}
<\/script>
\`\`\``:`**Illustrative diagrams at ${e}px**: the full interactive worked example (water-heater cross-section with thermostat slider, animated convection, and right-margin callouts) is omitted here \u2014 it was authored at 680px and would need a complete re-layout, not a coordinate scale, to fit. Follow the composition rules above with \`viewBox="0 0 ${e} H"\` directly: lay the subject tall-and-narrow at e.g. x=40..${e-160}, reserve x=${e-150}..${e-20} for right-side leader-line labels (\`class="ts"\`, \`text-anchor="start"\`), and stack controls below the SVG instead of beside it.`}

${e>=680?`**Illustrative example \u2014 abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan \u2014 clear of every stroke \u2014 not inside it.
\`\`\`svg
<rect class="c-purple" x="60" y="40"  width="560" height="26" rx="6" stroke-width="0.5"/>
<rect class="c-purple" x="60" y="80"  width="560" height="26" rx="6" stroke-width="0.5"/>
<rect class="c-purple" x="60" y="120" width="560" height="26" rx="6" stroke-width="0.5"/>
<text class="ts" x="72" y="57" >Layer 3</text>
<text class="ts" x="72" y="97" >Layer 2</text>
<text class="ts" x="72" y="137">Layer 1</text>

<line stroke="#EF9F27" stroke-linecap="round" x1="340" y1="230" x2="116" y2="146" stroke-width="1"   opacity="0.25"/>
<line stroke="#EF9F27" stroke-linecap="round" x1="340" y1="230" x2="228" y2="146" stroke-width="1.5" opacity="0.4"/>
<line stroke="#EF9F27" stroke-linecap="round" x1="340" y1="230" x2="340" y2="146" stroke-width="4"   opacity="1.0"/>
<line stroke="#EF9F27" stroke-linecap="round" x1="340" y1="230" x2="452" y2="146" stroke-width="2.5" opacity="0.7"/>
<line stroke="#EF9F27" stroke-linecap="round" x1="340" y1="230" x2="564" y2="146" stroke-width="1"   opacity="0.2"/>

<g class="node" onclick="sendPrompt('What do the attention weights mean?')">
  <rect class="c-gray"  x="80"  y="230" width="72" height="36" rx="6" stroke-width="0.5"/>
  <rect class="c-gray"  x="192" y="230" width="72" height="36" rx="6" stroke-width="0.5"/>
  <rect class="c-amber" x="304" y="230" width="72" height="36" rx="6" stroke-width="1"/>
  <rect class="c-gray"  x="416" y="230" width="72" height="36" rx="6" stroke-width="0.5"/>
  <rect class="c-gray"  x="528" y="230" width="72" height="36" rx="6" stroke-width="0.5"/>
  <text class="ts" x="116" y="252" text-anchor="middle">the</text>
  <text class="ts" x="228" y="252" text-anchor="middle">cat</text>
  <text class="th" x="340" y="252" text-anchor="middle">sat</text>
  <text class="ts" x="452" y="252" text-anchor="middle">on</text>
  <text class="ts" x="564" y="252" text-anchor="middle">the</text>
</g>

<text class="ts" x="340" y="300" text-anchor="middle">Line thickness = attention weight from "sat" to each token</text>
\`\`\``:`For abstract subjects (e.g. transformer attention) at ${e}px: same approach. The five-token fan-out example is omitted \u2014 at this width, lay out three tokens (x\u224860, ${Math.round(60+(e-180)/2)}, ${e-120}; w\u224880 each) with the middle one as the query, fan three weight lines, and put the caption below at y past the lowest stroke.`}

Note what's *not* here: no boxes labelled "multi-head attention", no arrows labelled "Q/K/V". Those belong in the structural diagram. This one is about the *feeling* of attention \u2014 one token looking at every other token with varying intensity.

These are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.
`}p(680);var m="\n## Charts (Chart.js)\n```html\n<div style=\"position: relative; width: 100%; height: 300px;\">\n  <canvas id=\"myChart\" role=\"img\" aria-label=\"Bar chart of quarterly revenue, Q1 through Q4\">Quarterly revenue: Q1 12, Q2 19, Q3 8, Q4 15.</canvas>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"><\/script>\n<script>\n  new Chart(document.getElementById('myChart'), {\n    type: 'bar',\n    data: { labels: ['Q1','Q2','Q3','Q4'], datasets: [{ label: 'Revenue', data: [12,19,8,15] }] },\n    options: { responsive: true, maintainAspectRatio: false }\n  });\n<\/script>\n```\n\n**Chart.js rules**:\n- Every `<canvas>` MUST have `role=\"img\"` and a descriptive `aria-label` summarizing what the chart shows, plus fallback text between the tags. Without these the chart is invisible to screen readers.\n- Never rely on color alone to distinguish data series. Pair each color with a secondary visual cue \u2014 dash pattern for lines, marker shape for scatter, fill pattern/hatching for bars and pie slices \u2014 and show both color and cue in the legend.\n- Canvas cannot resolve CSS variables. Use hardcoded hex or Chart.js defaults.\n- Wrap `<canvas>` in `<div>` with explicit `height` and `position: relative`.\n- **Canvas sizing**: set height ONLY on the wrapper div, never on the canvas element itself. Use position: relative on the wrapper and responsive: true, maintainAspectRatio: false in Chart.js options. Never set CSS height directly on canvas \u2014 this causes wrong dimensions, especially for horizontal bar charts.\n- For horizontal bar charts: wrapper div height should be at least (number_of_bars * 40) + 80 pixels.\n- Load UMD build via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` \u2014 sets `window.Chart` global. Follow with plain `<script>` (no `type=\"module\"`).\n- Multiple charts: use unique IDs (`myChart1`, `myChart2`). Each gets its own canvas+div pair.\n- For bubble and scatter charts: bubble radii extend past their center points, so points near axis boundaries get clipped. Pad the scale range \u2014 set `scales.y.min` and `scales.y.max` ~10% beyond your data range (same for x). Or use `layout: { padding: 20 }` as a blunt fallback.\n- Chart.js auto-skips x-axis labels when they'd overlap. If you have \u226412 categories and need all labels visible (waterfall, monthly series), set `scales.x.ticks: { autoSkip: false, maxRotation: 45 }` \u2014 missing labels make bars unidentifiable.\n\n**Number formatting**: negative values are `-$5M` not `$-5M` \u2014 sign before currency symbol. Use a formatter: `(v) => (v < 0 ? '-' : '') + '$' + Math.abs(v) + 'M'`.\n\n**Legends** \u2014 always disable Chart.js default and build custom HTML. The default uses round dots and no values; custom HTML gives small squares, tight spacing, and percentages:\n\n```js\nplugins: { legend: { display: false } }\n```\n\n```html\n<div style=\"display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 8px; font-size: 12px; color: var(--text-secondary);\">\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #3266ad;\"></span>Chrome 65%</span>\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #73726c;\"></span>Safari 18%</span>\n</div>\n```\n\nInclude the value/percentage in each label when the data is categorical (pie, donut, single-series bar). Position the legend above the chart (`margin-bottom`) or below (`margin-top`) \u2014 not inside the canvas.\n\n**Dashboard layout** \u2014 wrap summary numbers in metric cards (see UI fragment) above the chart. Chart canvas flows below without a card wrapper. Use `sendPrompt()` for drill-down: `sendPrompt('Break down Q4 by region')`.\n\n## Geographic maps (D3 choropleth)\n\n**Never invent coordinates** \u2014 no hand-drawn SVG paths, no inline GeoJSON. Fetch real topology or don't draw a map.\n\nThree topology sources on jsdelivr. Topology JSON may only be fetched from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com` (the fetch allowlist \u2014 the Google Fonts hosts are stylesheet/font-only, not fetch targets) \u2014 do NOT try `raw.githubusercontent.com` or other hosts, the fetch will silently fail. Other package names like `uk-atlas` don't exist (404).\n- US states: `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json` \u2192 `d3.geoAlbersUsa()`, object key `.states`\n- World countries: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json` \u2192 `d3.geoNaturalEarth1()`, object key `.countries`\n- Per-country subdivisions: `https://cdn.jsdelivr.net/npm/datamaps@0.5.10/src/js/data/{iso3}.topo.json` (lowercase alpha-3: `deu`, `jpn`, `gbr`...), object key `.{iso3}`\n\n**Before writing the widget, web_fetch the topology URL you'll use.** The first ~1KB shows the real feature `id` and `properties.name` values \u2014 key your data on those, don't guess. Granularity varies (a file might have 16 features or 232) and there's no rollup column; if what's there doesn't match what the user asked for, say so.\n\n```html\n<div id=\"map\" style=\"width: 100%;\"></div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js\"><\/script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js\"><\/script>\n<script>\nconst values = { 'California': 39, 'Texas': 30, 'New York': 19 /* ...keyed on what you saw in web_fetch */ };\nconst themeMode = document.documentElement.dataset.mode;\nconst isDark = themeMode ? themeMode === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;\nconst color = d3.scaleQuantize([0, 40], isDark ? d3.schemeBlues[5].slice().reverse() : d3.schemeBlues[5]);\nconst svg = d3.select('#map').append('svg').attr('viewBox', '0 0 900 560').attr('width', '100%');\nconst path = d3.geoPath(d3.geoAlbersUsa().scale(1100).translate([450, 280]));\nd3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(us => {\n  svg.selectAll('path').data(topojson.feature(us, us.objects.states).features).join('path')\n    .attr('d', path).attr('stroke', isDark ? 'rgba(255,255,255,.15)' : '#fff')\n    .attr('fill', d => color(values[d.properties.name] ?? 0));\n});\n<\/script>\n```\n",h=`## Data visualization \u2014 the design layer

Color comes LAST. Most bad charts pick colors first. The procedure:

1. **Pick the form** from the table below \u2014 and sometimes the right form is
   not a chart.
2. **Assign color by its job** \u2014 categorical, sequential, diverging, or status.
   Never cycled; never a rainbow.
3. **Apply the mark specs** below \u2014 thin marks, surface gaps, recessive axes.
4. **Add a legend** for \u22652 series and direct labels for \u22644; a single series
   needs no legend (the title names it).
5. **Add hover** \u2014 crosshair+tooltip on line/area, per-mark tooltip on bar/dot.
6. **Render and look.** Check label collisions, overflow, dark mode.

### Choosing a form

| The data is\u2026 | Use | Not |
|---|---|---|
| A single current value (+ maybe a trend) | **Stat tile** \u2014 value + delta + sparkline | A one-bar bar chart |
| A handful of headline numbers | **KPI row** of stat tiles | A grouped bar chart |
| A single ratio against a limit | **Meter** (same-ramp track) | A 2-slice pie |
| More than ~7 classes that all matter | A **table** (or table + chart) | More colors |

If a chart is right, the data's job picks the type:

| Job | Form | Color job |
|---|---|---|
| Compare magnitude | bar / column; heatmap for a grid | sequential (one hue) |
| Trend over time | line; area for a single series | sequential or 1 categorical |
| Tell distinct series apart | grouped/stacked bar, multi-line | categorical |
| One series is the point, rest context | **emphasis** \u2014 highlight one, gray the rest | 1 hue + gray |
| Above/below a baseline; \u0394 to target | diverging bar or line vs baseline | diverging |
| Part-to-whole | stacked bar (horizontal for long names) | categorical |
| Before \u2192 after per item | dumbbell | 1 hue, 2 shades |

**Sequential is the safe default.** Categorical has a cost \u2014 it can bury the
one point that matters. If the story is "this one went up," that's emphasis
(one hue + gray), not categorical. Never solve "too many series" with more
hues: past 8, fold into "Other" or use small multiples.

### Categorical palette (Cove \u2014 fixed order, never cycled)

The 9th series is never a generated hue \u2014 it folds into "Other" or small
multiples. Canvas can't resolve CSS vars, so use these hex values directly in
Chart.js datasets. For HTML/SVG legends, wrap them in a token:
\`background: var(--series-N, <hex>)\`.

| Slot | Hue | Light | Dark |
|------|-----|-------|------|
| 1 | blue | #2a78d6 | #3987e5 |
| 2 | orange | #eb6834 | #d95926 |
| 3 | aqua | #1baf7a | #199e70 |
| 4 | yellow | #eda100 | #c98500 |
| 5 | magenta | #e87ba4 | #d55181 |
| 6 | green | #008300 | #0ca30c |
| 7 | violet | #6250d6 | #9085e9 |
| 8 | red | #e34948 | #e66767 |

**Sequential** (magnitude \u2014 heatmap, choropleth): one hue, light\u2192dark. Default
blue. **Diverging** (polarity \u2014 delta, above/below): blue \u2194 red with a neutral
gray midpoint (light #f0efec / dark #383835) \u2014 never a hue at the midpoint.

**Status** (state \u2014 good/warning/serious/critical): #0ca30c / #fab219 /
#ec835a / #d03b3b. Never in one chart with the series colors: in dark mode slot 6
is the same green as good. Always paired with an icon + label, never color alone.

### Chart chrome \u2014 use the CDS tokens already on :root

These are already defined by \`tokens.vanilla.css\`; reference them directly.
For canvas (which can't resolve vars), read them once:
\`getComputedStyle(document.documentElement).getPropertyValue('--text-muted')\`.

| Role | Token | Light | Dark |
|---|---|---|---|
| Chart surface | \`var(--surface-1)\` | #fcfcfb | #151515 |
| Primary ink (values, title) | \`var(--text-primary)\` | #0b0b0b | #f0efec |
| Secondary ink (legend, sub) | \`var(--text-secondary)\` | #52514e | #c3c2b7 |
| Muted (axis ticks, labels) | \`var(--text-muted)\` | #898781 | #898781 |
| Gridline (hairline) | \u2014 | #e1e0d9 | #2c2c2a |
| Baseline / axis line | \u2014 | #c3c2b7 | #383835 |
| Hairline border | \`var(--border)\` | rgba(11,11,11,0.10) | rgba(255,255,255,0.10) |

**Text wears text tokens, never the series color** \u2014 values, axis labels, and
legend text stay in primary/secondary/muted ink; a small colored square beside
the text carries identity.

### Mark specs

- **Bar/column**: \u226424px thick, 4px rounded data-end, square at baseline.
- **Line**: 2px stroke, round join/cap.
- **End-dot / marker**: \u22658px, filled with series color, 2px surface-color ring.
- **Area fill**: series hue at ~10% opacity.
- **Gridlines**: one-step-off-surface gray, 1px, recessive. No vertical
  gridlines on a time axis.
- **Surface gap**: 2px surface-color gap between touching marks (stacked
  segments, adjacent bars). Never a stroke around a mark.

### Non-negotiables

- **One y-axis.** Never a dual-axis chart. Two scales \u2192 two charts or indexed.
- **Color follows the entity, never its rank.** Filtering must not repaint.
- **Assign categorical hues in the fixed Cove order.**
- **Sequential = one hue. Diverging = two hues + gray midpoint.** No rainbow.
- **Hero number** (stat tile): one figure in \`var(--font-voice)\` (Anthropic
  Serif) \u226548px, tabular + lining numerals. Everything else stays sans with
  tabular figures.
`,g=["diagram","mockup","interactive","data_viz","art","chart","elicitation"],_=["mobile","desktop","unknown"];function v(e){let t=f(e),n=p(e),r=u(e);return{diagram:[d,t,n],mockup:[r,d,'<!-- @generated by apps/cds-docs/scripts/gen-cds-skill.mjs from packages/cds/{CLAUDE.md,docs/**}. Do not edit by hand \u2014 edit the source docs and re-run `bun run --cwd apps/cds-docs gen:cds-skill`. -->\n\n# CDS tokens \u2014 vanilla\n\nThe Claude Design System token vocabulary for plain HTML/CSS/SVG\nsurfaces without React or Tailwind. Tokens are unprefixed CSS custom\nproperties (`--text-primary`, `--surface-1`, `--border`) declared on\n`:root` by `@ant/cds/tokens.vanilla.css`, with dark-mode overrides under\n`[data-mode="dark"]` and `@media (prefers-color-scheme: dark)`.\n\nReferences below to `CdsRoot`, `Button`, or Tailwind utilities belong to\nthe React build; in vanilla, read a utility like `bg-surface-1` as the\nunderlying `var(--surface-1)`.\n\n## Rules\n\n### Token rule\n\nReference purpose-layer tokens as CSS custom properties:\n\n```css\n/* GOOD */\nbackground: var(--surface-1);\ncolor: var(--text-secondary);\nborder: 0.5px solid var(--border);\n\n/* BAD \u2014 raw hex, invisible in dark mode */\ncolor: #3d3d3a;\n```\n\n| Property   | Tokens |\n| ---------- | ------ |\n| Background | `--surface-{0..3,popover,panel}` \u00B7 `--bg-{accent,danger,success,warning,pro,neutral}` \u00B7 `--bg-tint-{hue}` \u00B7 `--fill-{role}` |\n| Text       | `--text-{primary,secondary,muted,disabled}` \u00B7 `--text-{accent,danger,success,warning,pro}` \u00B7 `--text-tint-{hue}` \u00B7 `--on-{role}` |\n| Border     | `--border` (default hairline) \u00B7 `--border-{strong,stronger}` \u00B7 `--border-{role}` |\n| Sizing     | `--h-control` \u00B7 `--pad-{sm,md,lg,xl}` \u00B7 `--gap-{xs,sm,md,lg,xl}` \u00B7 `--radius` |\n| Typography | `--font-{sans,mono,voice}` \u00B7 `--font-size-{caption,footnote,body,prose,code,heading,title,display}` |\n| Shadow     | `--shadow-{sm,md,lg,popover}` |\n| Motion     | `--dur-{fast,snap,base,sheet,slow}` \u00B7 `--ease-{out,snap,overshoot}` |\n\n### Dark mode rule\n\nDark mode is `[data-mode="dark"]` on `:root` (or `prefers-color-scheme: dark` with no explicit `data-mode`). All tokens flip automatically \u2014 never hardcode a dark-mode override.\n\n### Muted text rule\n\nSupporting copy uses `color: var(--text-secondary)`; reserve `var(--text-muted)` for placeholders, captions, and metadata. **Never** `opacity` on text \u2014 opacity multiplies against the background and drifts per-surface.\n\n### Accent rule\n\nAt most **one** primary (`variant="primary"`) Button per view; siblings use `secondary` or `ghost`. The `brand` (clay) role is reserved for Claude-initiated actions \u2014 send, generate \u2014 never ordinary user CTAs.\n\n### Restraint rule\n\nDefault to the quieter, lighter option \u2014 "too cluttered" is the most common design note.\n\n- `secondary` is the default Button; `primary` / `brand` read as aggressive \u2014 don\'t reach for them in popovers, banners, or dense tool/canvas surfaces.\n- Avoid disabled buttons. Keep them enabled and respond on use (disabled controls are low-contrast and show no tooltip on touch); use `disabledReason` only when you genuinely must disable.\n- Dense lists: bordered rows, not rounded-rect cards.\n\n### Elevation rule\n\n`surface-0` is the page canvas (via `--page-bg`; set it with `CdsRoot`\'s `pageBackground` prop); `1`/`2`/`3` step above it. Overlay popups and `Surface` re-scope `--page-bg` (and the `useCdsSurface()` context) to the plane they paint, so knockout effects inside them blend into the elevated surface \u2014 don\'t hand-roll `--page-bg` overrides on floating chrome, and don\'t author new styles against `var(--page-bg)` inside overlays (use `shadow-focus` or `useCdsSurface()`). What hides content or cuts a ring out of it takes `bg-ground` / `ring-ground`, which match the container it is in ([utilities](./docs/utilities.md#ground)). At most **two** floating elevations (`panel` / `popover`) on screen at once. A third floating layer means `Dialog`, not popover-on-popover. Flat in-flow tiles (`rounded-card bg-surface-1 shadow-card-ring`) have no depth and don\'t count toward this limit.\n\n---\n\n## CDS principles\n\nHow something feels like Claude \u2014 the philosophy behind the tokens. Tokens tell you _what_ you can use; the [Rules](../CLAUDE.md#rules) tell you _how_ to apply them. These principles tell you _why_.\n\n## Claude-native\n\ncds is designed to be authored _by_ Claude as much as _for_ Claude\'s products. Its rules are written as a system prompt, component docs are structured for retrieval, and utilities are named so a model can guess them. A design system an LLM can use fluently is one humans can use fluently too.\n\n## Clay is Claude\'s color\n\n`brand` (clay) is reserved for what Claude does \u2014 send, generate, the spark mark. A user\'s main action takes the neutral `primary` fill; `accent` blue marks links, focus, and selection; everything else stays gray. Holding clay back to a single role is what lets it carry meaning instead of becoming wallpaper.\n\n## Serif is Claude\'s voice\n\nClaude\'s responses render in serif; the surrounding chrome stays sans. Typography signals who\'s speaking before a word is read. cds ships `--font-voice` (the `font-voice` utility) for response surfaces.\n\n## Built to be composed, not overridden\n\n`className` places a component and tunes its behavior; props, slots, and compound parts (`.Root`, `.Item`, `.Trigger`) shape how it looks; tokens are public for building what\'s missing. Compose _with_ the system \u2014 wrap it, arrange it, fill its slots \u2014 rather than restyling it from outside or forking it. When props and parts can\'t reach what you need, the fix goes into cds (see the [`className` rule](../CLAUDE.md#classname-rule)), not around it.\n\n## Restraint over options\n\nOne primary action per view, at most two floating layers, t-shirt sizes instead of 0\u201312 scales. Fewer decisions at the call site means fewer ways for two screens to drift apart \u2014 consistency comes from removing knobs, not policing them.\n\n## CDS tokens\n\nEvery visual decision in `@ant/cds` resolves to a `--*` CSS custom property. The TypeScript source of truth lives under `packages/cds/tokens/`; `bun run --cwd packages/cds gen:tokens` emits the shipped CSS at [`src/generated/tokens.css`](../src/generated/tokens.css). Tokens are layered so that a single edit at the bottom (a hex value) propagates through ramps, roles, and purposes without touching component code.\n\n## The layer model\n\n```\n1. Base palette   --{hue}-{stop}      literal hex, mode-stable (gray, red, orange,\n                                          yellow, green, aqua, blue, violet, magenta)\n2. Theme ramps    --neutral-N         gray-N in light, gray-(900-N) in dark\n                  --alpha-N           neutral-900 @ fixed opacity (so it flips too)\n3. Elevation      --surface-{0..3}    0 = darkest, 3 = lightest, in BOTH modes\n4. Purpose        --surface-{popover, what components actually consume; includes the\n                   panel}, --text-*,  role mappings ({fill|bg|border|text}-{role})\n                   --fill-*, --on-*\n\u2014  page-bg        --page-bg           hook the host app sets to its canvas color\n5. Sizing         --h-control*,       rem lengths (px \u00F7 16); most remapped\n                   --pad-*, --gap-*, by size and data-size\n                   --radius, --font-size-*,\n                   --leading-*\n6. Motion         --dur-*,            durations + easing curves (mode-invariant)\n                   --ease-*\n```\n\n**Components only read layer 4 (and 5 for sizing).** Layers 1\u20133 are wiring.\n\n---\n\n## 1. Base palette\n\nLiteral hex values, mode-stable \u2014 `gray-500` is the same pixel in light and dark. The ramp variables resolve anywhere in the document, not only under a `.cds-root`. Nine hues share one 35-stop grid (0, 10\u2013100 by 10, 150\u2013800 by 50, 810\u2013900 by 10); every hue anchors 0 = `#ffffff` and 900 = `#0b0b0b`. Rarely referenced directly \u2014 reach for layers 2\u20134 and let them resolve here.\n\n---\n\n## 2. Theme ramps\n\n`--neutral-N` is `gray-N` in light and `gray-(900-N)` in dark, so `neutral-0` is always the near-background end and `neutral-900` the near-foreground end. Use it for "contrast against the page" (text, borders, fills); use `gray-*` when you mean a specific pixel value regardless of mode. `--alpha-N` is `neutral-900` at fixed opacity \u2014 a black wash in light, a white wash in dark, without per-mode overrides.\n\n---\n\n## 3. Elevation\n\n| Token             | Light     | Dark       | Use case     |\n| ----------------- | --------- | ---------- | ------------ |\n| `--surface-0` | `gray-20` | `gray-900` | Page         |\n| `--surface-1` | `gray-10` | `gray-850` | In-flow card |\n| `--surface-2` | `gray-0`  | `gray-830` | Panel        |\n| `--surface-3` | `gray-0`  | `gray-800` | Popover      |\n\nThe ordinal is absolute lightness in both modes: 0 is the darkest, 3 the lightest. `--surface-panel` and `--surface-popover` alias levels 2 and 3. The page canvas is the app\'s own choice \u2014 set it via `CdsRoot`\'s `pageBackground` prop (which emits `--page-bg`) so knockout hairlines (focus ring inset, Pulse halo) blend into it; it defaults to `surface-0`. Inside elevated chrome the blend target is not the page: overlay popups (`Dialog`, `Menu`, `Popover`, `Combobox`, `Toast`, `CoachMark`) and `Surface` re-scope `--page-bg` to the surface they actually paint (`surface-3` for popover chrome, `surface-2` for panels) and provide the same value to JS consumers through the surface context \u2014 `useCdsSurface()`, below.\n\n---\n\n## 4. Purpose\n\n**This is the layer components consume.**\n\n### Roles\n\nEach role maps a semantic meaning to a hue. Property-first pattern: `--fill-{role}` (solid hue-450), `--fill-{role}-hover` (hue-400), `--bg-{role}` (hue-100 / dark hue-800), `--border-{role}` (solid hue-250 in light / hue-700 in dark), `--text-{role}` (600 fg). Warning\'s fill diverges: yellow-200 / hover yellow-250. Brand uses named `clay-emphasized` / hover `clay` (not hue stops). The five hue-backed roles reach their hue through internal aliases (`--role-{role}-{stop}`, plus `--role-{role}-fill`, `--role-{role}-fill-hover` and `--role-{role}-on`): CSS-only wiring, not part of the token vocabulary, so never reference them. Charts, palette tints and the `{hue}-{stop}` utilities read the hue ramps directly.\n\n| Role      | Hue    | Tokens                                                                                                                  |\n| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |\n| `accent`  | blue   | `--fill-accent{,-hover}`, `--bg-accent`, `--bg-accent-muted`, `--border-accent`, `--text-accent`    |\n| `brand`   | clay   | `--fill-brand{,-hover,-icon-only}`, `--on-brand` (fill-only \u2014 no text/bg/border; `-icon-only` never under text) |\n| `danger`  | red    | `--fill-danger{,-hover}`, `--bg-danger`, `--border-danger`, `--text-danger`                             |\n| `success` | green  | `--fill-success{,-hover}`, `--bg-success`, `--border-success`, `--text-success`                         |\n| `warning` | yellow | `--fill-warning{,-hover}`, `--bg-warning`, `--border-warning`, `--text-warning`                         |\n| `pro`     | violet | `--fill-pro{,-hover}`, `--bg-pro`, `--border-pro`, `--text-pro`                                         |\n\n`accent` additionally carries `--bg-accent-muted` (a 10% `fill-accent` wash over transparent, `color-mix` in srgb): an accent wash one weight below `bg-accent`, for tinted-but-quiet accent surfaces \u2014 like a reacted reaction pill \u2014 where `bg-accent`\'s solid hue-100/800 reads too heavy.\n\n`--bg-highlight` is built the same way from `warning`\'s fill (a 33% `fill-warning` wash over transparent): the highlighter tint behind marked text \u2014 search-match substrings, prose `<mark>`. It is one value in both modes \u2014 a pale yellow stroke over light surfaces, an amber tint over dark ones \u2014 where `bg-warning`\'s dark stop (yellow-800) sits at a dark surface\'s own luminance and reads as a stain rather than a highlight. Text on it keeps its own color and weight.\n\n#### Palette tints\n\n`--bg-tint-{hue}` for the eight chromatic hues (`red`, `orange`, `yellow`, `green`, `aqua`, `blue`, `violet`, `magenta`; utility `bg-tint-{hue}`) is the translucent chip tint: a 35%-alpha tint in light (75% in dark) whose channels are solved against `surface-1` so that on a plain surface it composites to the same opaque hue-100 (hue-800 in dark) stop `bg-{role}` paints while a hover or selected wash underneath still shows through. `Badge` uses it for every tinted variant (semantic and palette); `bg-{role}` stays the opaque tint for Banner, Toast and larger surfaces. Pair with `--text-tint-{hue}` (utility `text-tint-{hue}`; hue-600, 300 in dark) so bg and text follow the same CdsRoot\'s mode. `--bg-tint-{hue}-opaque` (utility `bg-tint-{hue}-opaque`) is that opaque stop as a token; a surface scope whose backdrop is a fill rather than a plane (CoachMark\'s accent card, `surface="fill-accent"`) re-points each `--bg-tint-{hue}` at it inline, because the un-mix only holds over a plane. The tints are solved against the stock `surface-1`, so a theme that overrides `--surface-*` should override `--bg-tint-*` in the same block if it needs the exact stops, and `--bg-tint-*-opaque` with them: inside a fill scope the inline pin reads the opaque token, not the tint.\n\n#### `git-*` roles\n\nDiff and PR/CR-state colors \u2014 `added`, `removed`, `modified`, `conflicting`, `merged`, `closed`, `draft`. Each carries `text`, `bg` and `border`; `added`, `removed` and `modified` also carry `fill`, a solid for bars and marks. Values are hues matching the palette claude.ai\'s diff UI was built on (not CDS ramp stops), so adopting them there is a pure rename; in light, the `added` and `modified` fills are darker than their text colors.\n\n### Background vs. fill\n\nBoth are backgrounds; the split is saturation, and therefore which foreground token pairs on top.\n\n`bg-{role}` is the pale tint (hue-100 light / hue-800 dark) for passive status surfaces \u2014 Banner, chip; Badge paints its translucent twin `bg-tint-{hue}`. Light enough that `text-{role}` (hue-600) reads against it: a danger banner is `bg-danger` + `text-danger`. `fill-{role}` is the saturated solid (hue-450) for interactive controls \u2014 button, checkbox, toggle. Too dark for `text-{role}`, so it pairs with `on-{role}` (gray-0 / gray-900) instead; the 450 stop is chosen for WCAG contrast against `on-*`.\n\n|       | Background    | Foreground    | Example       |\n| ----- | ------------- | ------------- | ------------- |\n| Tint  | `bg-{role}`   | `text-{role}` | Banner, Toast |\n| Solid | `fill-{role}` | `on-{role}`   | Button        |\n\nThe token name encodes the pairing: use `bg-*` when the hue is ambient context behind body text; `fill-*` when the hue _is_ the control surface.\n\n### Purpose tokens\n\n| Token                        | Value (light)                                     | Use case                                         |\n| ---------------------------- | ------------------------------------------------- | ------------------------------------------------ |\n| `--text-primary`         | `neutral-900`                                     | Body text                                        |\n| `--text-secondary`       | `neutral-600`                                     | Supporting text                                  |\n| `--text-muted`           | `neutral-400`                                     | Placeholder, captions                            |\n| `--text-disabled`        | `alpha-4`                                         | Disabled labels                                  |\n| `--border`               | `alpha-2`                                         | Default 1px hairline                             |\n| `--border-strong`        | `alpha-3`                                         | Emphasized divider                               |\n| `--border-stronger`      | `neutral-900 / 40%`                               | Heavy divider                                    |\n| `--fill-primary`         | `neutral-900`                                     | Primary button bg                                |\n| `--fill-primary-hover`   | `neutral-750`                                     |                                                  |\n| `--fill-secondary`       | `hsl(0 0% 100% / 0.1)`                            | Secondary button bg                              |\n| `--fill-secondary-hover` | `alpha-1`                                         |                                                  |\n| `--fill-secondary-ring`  | `border` (light) / transparent (dark)             | Secondary button ring                            |\n| `--fill-field`           | `hsl(0 0% 100% / 0.5)` (light) / `alpha-1` (dark) | Field control bg (TextInput, TextArea, Combobox) |\n| `--fill-field-ring`      | `border` (light + dark)                           | Field control resting ring                       |\n| `--fill-ghost-hover`     | `alpha-1` (light) / 7.5% white (dark half-step)   | Ghost button / row hover bg                      |\n| `--fill-ghost-selected`  | `alpha-2` (light) / 15% white (dark half-step)    | Ghost row / nav item selected bg                 |\n| `--fill-control`         | `alpha-2`                                         | Avatar fallback bg                               |\n| `--fill-control-hover`   | `alpha-3`                                         |                                                  |\n| `--fill-disabled`        | `alpha-1`                                         | Disabled control bg                              |\n| `--on-primary`           | `neutral-0`                                       | Text on `fill-primary`                           |\n| `--on-accent`            | `gray-0`                                          | Text on `accent`                                 |\n| `--on-brand`             | `#ffffff`                                         | Text on `brand`                                  |\n| `--on-danger`            | `gray-0`                                          | Text on `danger`                                 |\n| `--on-success`           | `gray-900`                                        | Text on `success`                                |\n| `--on-warning`           | `gray-900`                                        | Text on `warning`                                |\n| `--on-pro`               | `gray-0`                                          | Text on `pro`                                    |\n| `--focus-shadow`         | 1px inset surface color, 1px accent, 6px halo     | `focus-visible` ring                             |\n| `--shadow-sm`            | two-layer via `--shadow-color`                | Low elevation                                    |\n| `--shadow-md`            | two-layer via `--shadow-color`                | Card / panel                                     |\n| `--shadow-lg`            | two-layer via `--shadow-color`                | Dialog / sheet                                   |\n| `--shadow-popover`       | `0 8px 24px /12%, 0 2px 6px /8%`                  | Menu, dropdown popups                            |\n| `--surface-popover`      | `surface-3`                                       | Named alias                                      |\n| `--surface-panel`        | `surface-2`                                       | Named alias                                      |\n\n`--shadow-sm/md/lg` are two-layer composites (contact + diffused drop) driven by `--shadow-color`, which deepens to `black/24%` in dark mode. `--shadow-popover` is a two-layer literal tuned for floating menus, with its own darker value in dark mode.\n\n---\n\n## CDS content\n\nHow to write the words that go inside cds components. Tokens decide how the UI _looks_; this decides how it _sounds_.\n\nThe voice is **intelligent, warm, unvarnished, and collaborative** \u2014 your smartest friend explaining something in plain terms. Friendly lives in the copy, not in extra chrome.\n\n## Mechanics\n\n- **Sentence case everywhere.** Buttons, headings, tabs, labels, menu items. "Save changes", not "Save Changes". Title Case is for proper nouns only (Claude, Opus, Anthropic Console).\n- **No terminal punctuation on labels and headings.** Helper text, descriptions, and empty-state body copy _do_ end with a period.\n- **Use contractions.** "Can\'t", "you\'ll", "it\'s". Conversational, not stiff.\n- **Active voice, verb first.** "Delete project", not "Project deletion".\n- **Ellipsis = in progress only.** "Claude is thinking\u2026". Not for trailing off, not for menu suffixes.\n- **No ampersands.** Spell out "and".\n- **Serial comma.** "Chats, projects, and artifacts."\n\n## Pronouns\n\nUI speaks as the product, not as Claude and not as the user.\n\n| Context          | Use               | Example                                                 |\n| ---------------- | ----------------- | ------------------------------------------------------- |\n| User\'s things    | **your**          | "Your projects" \u2014 never "My projects"                   |\n| Confirmations    | none / past tense | "Saved", "Got it" \u2014 never "I saved it"                  |\n| Errors           | **you / your**    | "Your session expired" \u2014 never "I couldn\'t\u2026"            |\n| Claude (in chat) | **I**             | Reserved for the chat surface; system UI never says "I" |\n\n## Words to avoid\n\n| Skip                                        | Why                                   | Instead          |\n| ------------------------------------------- | ------------------------------------- | ---------------- |\n| "successfully"                              | The toast itself says it worked       | "File uploaded"  |\n| "please"                                    | UI isn\'t asking a favor               | "Enter a name"   |\n| "Click here" / "Tap to\u2026"                    | Link text should name the destination | "Read the docs"  |\n| "!" on system copy                          | Reads as shouty                       | "Settings saved" |\n| "leverage", "seamless", "unlock", "empower" | Corporate filler                      | Say what it does |\n| "simply", "just", "easy"                    | Presumes \u2014 and condescends            | Cut it           |\n\n## Patterns\n\n**Buttons / CTAs** \u2014 verb first, 1\u20133 words, sentence case, no punctuation. "Create project", "Upgrade to Pro". Not "OK", "Submit", or "Click to continue".\n\n**Errors** \u2014 say what happened, then what to do. Keep it short, with no "Error:" prefix and no first person. "That name\'s already taken. Try another." Never surface raw exception strings.\n\n**Empty states** \u2014 an invitation, not an apology. Headline names the space ("Start your first project"), one-line body explains it, CTA is a verb ("Create project"). Skip "Nothing here yet."\n\n**Placeholders** \u2014 a real example of valid input ("name@company.com", "Summarize this document"). No "e.g." prefix, don\'t repeat the field label.\n\n**Links** \u2014 describe where they go ("View pricing"). A bare "Learn more" is fine when the sentence before it names the topic. Keep them at the end of the sentence; punctuation sits outside the link.\n\n## Do / Don\'t\n\n| Do                                      | Don\'t                                  |\n| --------------------------------------- | -------------------------------------- |\n| "File uploaded"                         | "Your file was uploaded successfully!" |\n| "Enter a workspace name"                | "Please enter a workspace name."       |\n| "Couldn\'t connect to Slack. Try again." | "Error: I was unable to connect."      |\n| "Your projects"                         | "My projects"                          |\n| "Create project"                        | "Click Here To Get Started"            |\n| "Connect Slack"                         | "Add the Slack Connector"              |\n'],interactive:[r,d,'<!-- @generated by apps/cds-docs/scripts/gen-cds-skill.mjs from packages/cds/{CLAUDE.md,docs/**}. Do not edit by hand \u2014 edit the source docs and re-run `bun run --cwd apps/cds-docs gen:cds-skill`. -->\n\n# CDS tokens \u2014 vanilla\n\nThe Claude Design System token vocabulary for plain HTML/CSS/SVG\nsurfaces without React or Tailwind. Tokens are unprefixed CSS custom\nproperties (`--text-primary`, `--surface-1`, `--border`) declared on\n`:root` by `@ant/cds/tokens.vanilla.css`, with dark-mode overrides under\n`[data-mode="dark"]` and `@media (prefers-color-scheme: dark)`.\n\nReferences below to `CdsRoot`, `Button`, or Tailwind utilities belong to\nthe React build; in vanilla, read a utility like `bg-surface-1` as the\nunderlying `var(--surface-1)`.\n\n## Rules\n\n### Token rule\n\nReference purpose-layer tokens as CSS custom properties:\n\n```css\n/* GOOD */\nbackground: var(--surface-1);\ncolor: var(--text-secondary);\nborder: 0.5px solid var(--border);\n\n/* BAD \u2014 raw hex, invisible in dark mode */\ncolor: #3d3d3a;\n```\n\n| Property   | Tokens |\n| ---------- | ------ |\n| Background | `--surface-{0..3,popover,panel}` \u00B7 `--bg-{accent,danger,success,warning,pro,neutral}` \u00B7 `--bg-tint-{hue}` \u00B7 `--fill-{role}` |\n| Text       | `--text-{primary,secondary,muted,disabled}` \u00B7 `--text-{accent,danger,success,warning,pro}` \u00B7 `--text-tint-{hue}` \u00B7 `--on-{role}` |\n| Border     | `--border` (default hairline) \u00B7 `--border-{strong,stronger}` \u00B7 `--border-{role}` |\n| Sizing     | `--h-control` \u00B7 `--pad-{sm,md,lg,xl}` \u00B7 `--gap-{xs,sm,md,lg,xl}` \u00B7 `--radius` |\n| Typography | `--font-{sans,mono,voice}` \u00B7 `--font-size-{caption,footnote,body,prose,code,heading,title,display}` |\n| Shadow     | `--shadow-{sm,md,lg,popover}` |\n| Motion     | `--dur-{fast,snap,base,sheet,slow}` \u00B7 `--ease-{out,snap,overshoot}` |\n\n### Dark mode rule\n\nDark mode is `[data-mode="dark"]` on `:root` (or `prefers-color-scheme: dark` with no explicit `data-mode`). All tokens flip automatically \u2014 never hardcode a dark-mode override.\n\n### Muted text rule\n\nSupporting copy uses `color: var(--text-secondary)`; reserve `var(--text-muted)` for placeholders, captions, and metadata. **Never** `opacity` on text \u2014 opacity multiplies against the background and drifts per-surface.\n\n### Accent rule\n\nAt most **one** primary (`variant="primary"`) Button per view; siblings use `secondary` or `ghost`. The `brand` (clay) role is reserved for Claude-initiated actions \u2014 send, generate \u2014 never ordinary user CTAs.\n\n### Restraint rule\n\nDefault to the quieter, lighter option \u2014 "too cluttered" is the most common design note.\n\n- `secondary` is the default Button; `primary` / `brand` read as aggressive \u2014 don\'t reach for them in popovers, banners, or dense tool/canvas surfaces.\n- Avoid disabled buttons. Keep them enabled and respond on use (disabled controls are low-contrast and show no tooltip on touch); use `disabledReason` only when you genuinely must disable.\n- Dense lists: bordered rows, not rounded-rect cards.\n\n### Elevation rule\n\n`surface-0` is the page canvas (via `--page-bg`; set it with `CdsRoot`\'s `pageBackground` prop); `1`/`2`/`3` step above it. Overlay popups and `Surface` re-scope `--page-bg` (and the `useCdsSurface()` context) to the plane they paint, so knockout effects inside them blend into the elevated surface \u2014 don\'t hand-roll `--page-bg` overrides on floating chrome, and don\'t author new styles against `var(--page-bg)` inside overlays (use `shadow-focus` or `useCdsSurface()`). What hides content or cuts a ring out of it takes `bg-ground` / `ring-ground`, which match the container it is in ([utilities](./docs/utilities.md#ground)). At most **two** floating elevations (`panel` / `popover`) on screen at once. A third floating layer means `Dialog`, not popover-on-popover. Flat in-flow tiles (`rounded-card bg-surface-1 shadow-card-ring`) have no depth and don\'t count toward this limit.\n\n---\n\n## CDS principles\n\nHow something feels like Claude \u2014 the philosophy behind the tokens. Tokens tell you _what_ you can use; the [Rules](../CLAUDE.md#rules) tell you _how_ to apply them. These principles tell you _why_.\n\n## Claude-native\n\ncds is designed to be authored _by_ Claude as much as _for_ Claude\'s products. Its rules are written as a system prompt, component docs are structured for retrieval, and utilities are named so a model can guess them. A design system an LLM can use fluently is one humans can use fluently too.\n\n## Clay is Claude\'s color\n\n`brand` (clay) is reserved for what Claude does \u2014 send, generate, the spark mark. A user\'s main action takes the neutral `primary` fill; `accent` blue marks links, focus, and selection; everything else stays gray. Holding clay back to a single role is what lets it carry meaning instead of becoming wallpaper.\n\n## Serif is Claude\'s voice\n\nClaude\'s responses render in serif; the surrounding chrome stays sans. Typography signals who\'s speaking before a word is read. cds ships `--font-voice` (the `font-voice` utility) for response surfaces.\n\n## Built to be composed, not overridden\n\n`className` places a component and tunes its behavior; props, slots, and compound parts (`.Root`, `.Item`, `.Trigger`) shape how it looks; tokens are public for building what\'s missing. Compose _with_ the system \u2014 wrap it, arrange it, fill its slots \u2014 rather than restyling it from outside or forking it. When props and parts can\'t reach what you need, the fix goes into cds (see the [`className` rule](../CLAUDE.md#classname-rule)), not around it.\n\n## Restraint over options\n\nOne primary action per view, at most two floating layers, t-shirt sizes instead of 0\u201312 scales. Fewer decisions at the call site means fewer ways for two screens to drift apart \u2014 consistency comes from removing knobs, not policing them.\n\n## CDS tokens\n\nEvery visual decision in `@ant/cds` resolves to a `--*` CSS custom property. The TypeScript source of truth lives under `packages/cds/tokens/`; `bun run --cwd packages/cds gen:tokens` emits the shipped CSS at [`src/generated/tokens.css`](../src/generated/tokens.css). Tokens are layered so that a single edit at the bottom (a hex value) propagates through ramps, roles, and purposes without touching component code.\n\n## The layer model\n\n```\n1. Base palette   --{hue}-{stop}      literal hex, mode-stable (gray, red, orange,\n                                          yellow, green, aqua, blue, violet, magenta)\n2. Theme ramps    --neutral-N         gray-N in light, gray-(900-N) in dark\n                  --alpha-N           neutral-900 @ fixed opacity (so it flips too)\n3. Elevation      --surface-{0..3}    0 = darkest, 3 = lightest, in BOTH modes\n4. Purpose        --surface-{popover, what components actually consume; includes the\n                   panel}, --text-*,  role mappings ({fill|bg|border|text}-{role})\n                   --fill-*, --on-*\n\u2014  page-bg        --page-bg           hook the host app sets to its canvas color\n5. Sizing         --h-control*,       rem lengths (px \u00F7 16); most remapped\n                   --pad-*, --gap-*, by size and data-size\n                   --radius, --font-size-*,\n                   --leading-*\n6. Motion         --dur-*,            durations + easing curves (mode-invariant)\n                   --ease-*\n```\n\n**Components only read layer 4 (and 5 for sizing).** Layers 1\u20133 are wiring.\n\n---\n\n## 1. Base palette\n\nLiteral hex values, mode-stable \u2014 `gray-500` is the same pixel in light and dark. The ramp variables resolve anywhere in the document, not only under a `.cds-root`. Nine hues share one 35-stop grid (0, 10\u2013100 by 10, 150\u2013800 by 50, 810\u2013900 by 10); every hue anchors 0 = `#ffffff` and 900 = `#0b0b0b`. Rarely referenced directly \u2014 reach for layers 2\u20134 and let them resolve here.\n\n---\n\n## 2. Theme ramps\n\n`--neutral-N` is `gray-N` in light and `gray-(900-N)` in dark, so `neutral-0` is always the near-background end and `neutral-900` the near-foreground end. Use it for "contrast against the page" (text, borders, fills); use `gray-*` when you mean a specific pixel value regardless of mode. `--alpha-N` is `neutral-900` at fixed opacity \u2014 a black wash in light, a white wash in dark, without per-mode overrides.\n\n---\n\n## 3. Elevation\n\n| Token             | Light     | Dark       | Use case     |\n| ----------------- | --------- | ---------- | ------------ |\n| `--surface-0` | `gray-20` | `gray-900` | Page         |\n| `--surface-1` | `gray-10` | `gray-850` | In-flow card |\n| `--surface-2` | `gray-0`  | `gray-830` | Panel        |\n| `--surface-3` | `gray-0`  | `gray-800` | Popover      |\n\nThe ordinal is absolute lightness in both modes: 0 is the darkest, 3 the lightest. `--surface-panel` and `--surface-popover` alias levels 2 and 3. The page canvas is the app\'s own choice \u2014 set it via `CdsRoot`\'s `pageBackground` prop (which emits `--page-bg`) so knockout hairlines (focus ring inset, Pulse halo) blend into it; it defaults to `surface-0`. Inside elevated chrome the blend target is not the page: overlay popups (`Dialog`, `Menu`, `Popover`, `Combobox`, `Toast`, `CoachMark`) and `Surface` re-scope `--page-bg` to the surface they actually paint (`surface-3` for popover chrome, `surface-2` for panels) and provide the same value to JS consumers through the surface context \u2014 `useCdsSurface()`, below.\n\n---\n\n## 4. Purpose\n\n**This is the layer components consume.**\n\n### Roles\n\nEach role maps a semantic meaning to a hue. Property-first pattern: `--fill-{role}` (solid hue-450), `--fill-{role}-hover` (hue-400), `--bg-{role}` (hue-100 / dark hue-800), `--border-{role}` (solid hue-250 in light / hue-700 in dark), `--text-{role}` (600 fg). Warning\'s fill diverges: yellow-200 / hover yellow-250. Brand uses named `clay-emphasized` / hover `clay` (not hue stops). The five hue-backed roles reach their hue through internal aliases (`--role-{role}-{stop}`, plus `--role-{role}-fill`, `--role-{role}-fill-hover` and `--role-{role}-on`): CSS-only wiring, not part of the token vocabulary, so never reference them. Charts, palette tints and the `{hue}-{stop}` utilities read the hue ramps directly.\n\n| Role      | Hue    | Tokens                                                                                                                  |\n| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |\n| `accent`  | blue   | `--fill-accent{,-hover}`, `--bg-accent`, `--bg-accent-muted`, `--border-accent`, `--text-accent`    |\n| `brand`   | clay   | `--fill-brand{,-hover,-icon-only}`, `--on-brand` (fill-only \u2014 no text/bg/border; `-icon-only` never under text) |\n| `danger`  | red    | `--fill-danger{,-hover}`, `--bg-danger`, `--border-danger`, `--text-danger`                             |\n| `success` | green  | `--fill-success{,-hover}`, `--bg-success`, `--border-success`, `--text-success`                         |\n| `warning` | yellow | `--fill-warning{,-hover}`, `--bg-warning`, `--border-warning`, `--text-warning`                         |\n| `pro`     | violet | `--fill-pro{,-hover}`, `--bg-pro`, `--border-pro`, `--text-pro`                                         |\n\n`accent` additionally carries `--bg-accent-muted` (a 10% `fill-accent` wash over transparent, `color-mix` in srgb): an accent wash one weight below `bg-accent`, for tinted-but-quiet accent surfaces \u2014 like a reacted reaction pill \u2014 where `bg-accent`\'s solid hue-100/800 reads too heavy.\n\n`--bg-highlight` is built the same way from `warning`\'s fill (a 33% `fill-warning` wash over transparent): the highlighter tint behind marked text \u2014 search-match substrings, prose `<mark>`. It is one value in both modes \u2014 a pale yellow stroke over light surfaces, an amber tint over dark ones \u2014 where `bg-warning`\'s dark stop (yellow-800) sits at a dark surface\'s own luminance and reads as a stain rather than a highlight. Text on it keeps its own color and weight.\n\n#### Palette tints\n\n`--bg-tint-{hue}` for the eight chromatic hues (`red`, `orange`, `yellow`, `green`, `aqua`, `blue`, `violet`, `magenta`; utility `bg-tint-{hue}`) is the translucent chip tint: a 35%-alpha tint in light (75% in dark) whose channels are solved against `surface-1` so that on a plain surface it composites to the same opaque hue-100 (hue-800 in dark) stop `bg-{role}` paints while a hover or selected wash underneath still shows through. `Badge` uses it for every tinted variant (semantic and palette); `bg-{role}` stays the opaque tint for Banner, Toast and larger surfaces. Pair with `--text-tint-{hue}` (utility `text-tint-{hue}`; hue-600, 300 in dark) so bg and text follow the same CdsRoot\'s mode. `--bg-tint-{hue}-opaque` (utility `bg-tint-{hue}-opaque`) is that opaque stop as a token; a surface scope whose backdrop is a fill rather than a plane (CoachMark\'s accent card, `surface="fill-accent"`) re-points each `--bg-tint-{hue}` at it inline, because the un-mix only holds over a plane. The tints are solved against the stock `surface-1`, so a theme that overrides `--surface-*` should override `--bg-tint-*` in the same block if it needs the exact stops, and `--bg-tint-*-opaque` with them: inside a fill scope the inline pin reads the opaque token, not the tint.\n\n#### `git-*` roles\n\nDiff and PR/CR-state colors \u2014 `added`, `removed`, `modified`, `conflicting`, `merged`, `closed`, `draft`. Each carries `text`, `bg` and `border`; `added`, `removed` and `modified` also carry `fill`, a solid for bars and marks. Values are hues matching the palette claude.ai\'s diff UI was built on (not CDS ramp stops), so adopting them there is a pure rename; in light, the `added` and `modified` fills are darker than their text colors.\n\n### Background vs. fill\n\nBoth are backgrounds; the split is saturation, and therefore which foreground token pairs on top.\n\n`bg-{role}` is the pale tint (hue-100 light / hue-800 dark) for passive status surfaces \u2014 Banner, chip; Badge paints its translucent twin `bg-tint-{hue}`. Light enough that `text-{role}` (hue-600) reads against it: a danger banner is `bg-danger` + `text-danger`. `fill-{role}` is the saturated solid (hue-450) for interactive controls \u2014 button, checkbox, toggle. Too dark for `text-{role}`, so it pairs with `on-{role}` (gray-0 / gray-900) instead; the 450 stop is chosen for WCAG contrast against `on-*`.\n\n|       | Background    | Foreground    | Example       |\n| ----- | ------------- | ------------- | ------------- |\n| Tint  | `bg-{role}`   | `text-{role}` | Banner, Toast |\n| Solid | `fill-{role}` | `on-{role}`   | Button        |\n\nThe token name encodes the pairing: use `bg-*` when the hue is ambient context behind body text; `fill-*` when the hue _is_ the control surface.\n\n### Purpose tokens\n\n| Token                        | Value (light)                                     | Use case                                         |\n| ---------------------------- | ------------------------------------------------- | ------------------------------------------------ |\n| `--text-primary`         | `neutral-900`                                     | Body text                                        |\n| `--text-secondary`       | `neutral-600`                                     | Supporting text                                  |\n| `--text-muted`           | `neutral-400`                                     | Placeholder, captions                            |\n| `--text-disabled`        | `alpha-4`                                         | Disabled labels                                  |\n| `--border`               | `alpha-2`                                         | Default 1px hairline                             |\n| `--border-strong`        | `alpha-3`                                         | Emphasized divider                               |\n| `--border-stronger`      | `neutral-900 / 40%`                               | Heavy divider                                    |\n| `--fill-primary`         | `neutral-900`                                     | Primary button bg                                |\n| `--fill-primary-hover`   | `neutral-750`                                     |                                                  |\n| `--fill-secondary`       | `hsl(0 0% 100% / 0.1)`                            | Secondary button bg                              |\n| `--fill-secondary-hover` | `alpha-1`                                         |                                                  |\n| `--fill-secondary-ring`  | `border` (light) / transparent (dark)             | Secondary button ring                            |\n| `--fill-field`           | `hsl(0 0% 100% / 0.5)` (light) / `alpha-1` (dark) | Field control bg (TextInput, TextArea, Combobox) |\n| `--fill-field-ring`      | `border` (light + dark)                           | Field control resting ring                       |\n| `--fill-ghost-hover`     | `alpha-1` (light) / 7.5% white (dark half-step)   | Ghost button / row hover bg                      |\n| `--fill-ghost-selected`  | `alpha-2` (light) / 15% white (dark half-step)    | Ghost row / nav item selected bg                 |\n| `--fill-control`         | `alpha-2`                                         | Avatar fallback bg                               |\n| `--fill-control-hover`   | `alpha-3`                                         |                                                  |\n| `--fill-disabled`        | `alpha-1`                                         | Disabled control bg                              |\n| `--on-primary`           | `neutral-0`                                       | Text on `fill-primary`                           |\n| `--on-accent`            | `gray-0`                                          | Text on `accent`                                 |\n| `--on-brand`             | `#ffffff`                                         | Text on `brand`                                  |\n| `--on-danger`            | `gray-0`                                          | Text on `danger`                                 |\n| `--on-success`           | `gray-900`                                        | Text on `success`                                |\n| `--on-warning`           | `gray-900`                                        | Text on `warning`                                |\n| `--on-pro`               | `gray-0`                                          | Text on `pro`                                    |\n| `--focus-shadow`         | 1px inset surface color, 1px accent, 6px halo     | `focus-visible` ring                             |\n| `--shadow-sm`            | two-layer via `--shadow-color`                | Low elevation                                    |\n| `--shadow-md`            | two-layer via `--shadow-color`                | Card / panel                                     |\n| `--shadow-lg`            | two-layer via `--shadow-color`                | Dialog / sheet                                   |\n| `--shadow-popover`       | `0 8px 24px /12%, 0 2px 6px /8%`                  | Menu, dropdown popups                            |\n| `--surface-popover`      | `surface-3`                                       | Named alias                                      |\n| `--surface-panel`        | `surface-2`                                       | Named alias                                      |\n\n`--shadow-sm/md/lg` are two-layer composites (contact + diffused drop) driven by `--shadow-color`, which deepens to `black/24%` in dark mode. `--shadow-popover` is a two-layer literal tuned for floating menus, with its own darker value in dark mode.\n\n---\n\n## CDS content\n\nHow to write the words that go inside cds components. Tokens decide how the UI _looks_; this decides how it _sounds_.\n\nThe voice is **intelligent, warm, unvarnished, and collaborative** \u2014 your smartest friend explaining something in plain terms. Friendly lives in the copy, not in extra chrome.\n\n## Mechanics\n\n- **Sentence case everywhere.** Buttons, headings, tabs, labels, menu items. "Save changes", not "Save Changes". Title Case is for proper nouns only (Claude, Opus, Anthropic Console).\n- **No terminal punctuation on labels and headings.** Helper text, descriptions, and empty-state body copy _do_ end with a period.\n- **Use contractions.** "Can\'t", "you\'ll", "it\'s". Conversational, not stiff.\n- **Active voice, verb first.** "Delete project", not "Project deletion".\n- **Ellipsis = in progress only.** "Claude is thinking\u2026". Not for trailing off, not for menu suffixes.\n- **No ampersands.** Spell out "and".\n- **Serial comma.** "Chats, projects, and artifacts."\n\n## Pronouns\n\nUI speaks as the product, not as Claude and not as the user.\n\n| Context          | Use               | Example                                                 |\n| ---------------- | ----------------- | ------------------------------------------------------- |\n| User\'s things    | **your**          | "Your projects" \u2014 never "My projects"                   |\n| Confirmations    | none / past tense | "Saved", "Got it" \u2014 never "I saved it"                  |\n| Errors           | **you / your**    | "Your session expired" \u2014 never "I couldn\'t\u2026"            |\n| Claude (in chat) | **I**             | Reserved for the chat surface; system UI never says "I" |\n\n## Words to avoid\n\n| Skip                                        | Why                                   | Instead          |\n| ------------------------------------------- | ------------------------------------- | ---------------- |\n| "successfully"                              | The toast itself says it worked       | "File uploaded"  |\n| "please"                                    | UI isn\'t asking a favor               | "Enter a name"   |\n| "Click here" / "Tap to\u2026"                    | Link text should name the destination | "Read the docs"  |\n| "!" on system copy                          | Reads as shouty                       | "Settings saved" |\n| "leverage", "seamless", "unlock", "empower" | Corporate filler                      | Say what it does |\n| "simply", "just", "easy"                    | Presumes \u2014 and condescends            | Cut it           |\n\n## Patterns\n\n**Buttons / CTAs** \u2014 verb first, 1\u20133 words, sentence case, no punctuation. "Create project", "Upgrade to Pro". Not "OK", "Submit", or "Click to continue".\n\n**Errors** \u2014 say what happened, then what to do. Keep it short, with no "Error:" prefix and no first person. "That name\'s already taken. Try another." Never surface raw exception strings.\n\n**Empty states** \u2014 an invitation, not an apology. Headline names the space ("Start your first project"), one-line body explains it, CTA is a verb ("Create project"). Skip "Nothing here yet."\n\n**Placeholders** \u2014 a real example of valid input ("name@company.com", "Summarize this document"). No "e.g." prefix, don\'t repeat the field label.\n\n**Links** \u2014 describe where they go ("View pricing"). A bare "Learn more" is fine when the sentence before it names the topic. Keep them at the end of the sentence; punctuation sits outside the link.\n\n## Do / Don\'t\n\n| Do                                      | Don\'t                                  |\n| --------------------------------------- | -------------------------------------- |\n| "File uploaded"                         | "Your file was uploaded successfully!" |\n| "Enter a workspace name"                | "Please enter a workspace name."       |\n| "Couldn\'t connect to Slack. Try again." | "Error: I was unable to connect."      |\n| "Your projects"                         | "My projects"                          |\n| "Create project"                        | "Click Here To Get Started"            |\n| "Connect Slack"                         | "Add the Slack Connector"              |\n'],data_viz:[r,d,m,h],art:[t,'## Art and illustration\n*"Draw me a sunset" / "Create a geometric pattern"*\n\nUse SVG. Same technical rules (viewBox, safe area) but the aesthetic is different:\n- Fill the canvas \u2014 art should feel rich, not sparse\n- Bold colors: mix `--text-*` categories for variety (info blue, success green, warning amber)\n- Art is the one place custom `<style>` color blocks are fine \u2014 freestyle colors, `[data-mode="dark"]` selectors (plus the `:root:not([data-mode])` media-query fallback) for dark mode variants if you want them\n- Layer overlapping opaque shapes for depth\n- Organic forms with `<path>` curves, `<ellipse>`, `<circle>`\n- Texture via repetition (parallel lines, dots, hatching) not raster effects\n- Geometric patterns with `<g transform="rotate()">` for radial symmetry\n'],chart:[r,d,m,h],elicitation:[`## Elicitation \u2014 collecting skill arguments

Use this when a skill or slash command needs information you can't determine from context.

### Infer first \u2014 this is more important than the form

Before rendering anything, check the conversation and any attachments. If the user already attached a contract, don't ask for one. If they said "I'm the customer," don't ask which side. Only ask for what you genuinely cannot determine. A one-question form is better than five questions where four are already answerable.

If you can infer everything: skip the form and proceed directly.

### Question phrasing

Phrase every prompt as a question from you, not a field label. Conversational phrasing is what makes this feel like you asking rather than a bureaucratic form.

| Don't write | Write |
|---|---|
| Side: | Which side are you on? |
| Deadline: | When does this need to be finalized? |
| Concerns: | Any specific concerns I should focus on? |

### Structure \u2014 composition is locked, components are open

The shell auto-wires option toggles, "Other" reveal, file upload, and submit \u2014 write HTML with classes and \`data-*\` attributes. **Zero onclick handlers, zero \`<script>\`.**

**Locked (don't restyle):** the form wrapper, header, body, footer, \`.elicit-group\` rhythm, and \`.elicit-question\` label are pre-styled by widget.css to match the design spec. Keep this section rhythm and CTA positioning exactly \u2014 every form should read with the same cadence of question \u2192 input \u2192 question \u2192 input \u2192 footer buttons.

**Open (your call):** how each input renders inside its \`.elicit-group\`. A date should feel different from a role picker, which should feel different from an output-format selector. Pick the input format that fits what the question is asking \u2014 see "Choice inputs" below. Use inline \`style=""\` on the option elements for visual variation; don't add a \`<style>\` block.

**Do not render every question as plain pills.** A form where all groups look the same reads flat and undifferentiated. Vary the visual format across the form \u2014 when you have 3+ choice groups, at least one should be cards or tiles. Match the format to the content:

| Content | Format |
|---|---|
| short labels, \u22644 words | plain pills |
| options with icons/subtitles | cards |
| output/layout pickers | preview tiles |
| dates | \`<input type="date">\` |
| quantities/scales | \`<input type="range">\` |

Header title is always \`"[subject] details"\` \u2014 "Contract details", "Recipe details", "Trip details". The subject is the thing the skill produces or acts on. **The header SVG below is fixed chrome \u2014 emit it byte-for-byte. Do not substitute a different icon, do not redraw the path, do not change viewBox/fill.** It is the canonical File anthropicon and must render identically across every form.

\`\`\`html
<form class="elicit">
  <div class="elicit-header">
    <svg viewBox="0 0 20 20" fill="currentColor"><path d="M11.586 2a1.5 1.5 0 0 1 1.06.44l2.914 2.914a1.5 1.5 0 0 1 .44 1.06V16.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.492-1.347L4 16.5v-13A1.5 1.5 0 0 1 5.5 2zM5.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 11 5.5V3zm7.04 10.304a.5.5 0 0 1 .92.392c-.295.69-.871 1.304-1.66 1.304-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.233-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696l.034-.067a.5.5 0 0 1 .886.067c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696m0-4a.5.5 0 0 1 .92.392c-.295.69-.871 1.304-1.66 1.304-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.233-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696l.034-.067a.5.5 0 0 1 .886.067c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696M12 5.5a.5.5 0 0 0 .5.5h2.293L12 3.207z"/></svg>
    <span>Contract details</span>
  </div>
  <div class="elicit-body">
    <!-- .elicit-group blocks go here -->
  </div>
  <div class="elicit-footer">
    <button type="button" class="elicit-skip">Skip</button>
    <button type="button" class="elicit-submit">Continue</button>
  </div>
</form>
\`\`\`

Use \`type="button"\` on every button. The shell blocks native form-submit, but \`type="button"\` is still correct \u2014 it stops the browser from treating Skip/Submit as implicit submit buttons.

### Color story

Default everything to **blue** for selection states. No rainbow \u2014 unless:

1. **Strong semantic reason** \u2014 amber = budget/cost, red = risk/destructive, green = success/confirmation. Use \`data-accent="warning|danger|success"\` on the \`.elicit-pill\` (never inline bg/border). If you can't name the semantic, it's blue.
2. **The element is inherently visual** \u2014 diagrammatic cards or preview tiles whose content *is* an illustration. Color there belongs to the illustration itself, not the selection chrome. The selected-state fill/border still stays blue; this exception licenses color *inside* the card's icon/SVG/preview only.

Selected state = light fill + soft border from the same ramp. The pre-styled \`.elicit-pill[aria-pressed="true"]\` already applies this in blue \u2014 selection is always blue, even on accented pills (accent color is for the unselected state only). **Never** set background or border via inline \`style\` on a pill; inline styles override the \`[aria-pressed="true"]\` selection-state CSS and the pill stops visibly toggling.

### Choice inputs \u2014 pick the format that fits the question

Every choice group is a \`.elicit-pills\` container with \`data-name\` + \`data-multi\`; every selectable option is a \`<button type="button" class="elicit-pill" data-value="...">\` \u2014 that class wires selection state and \`aria-pressed\`, nothing more. The **visual shape** (plain pill, card, tile) is set by inline \`style\` per the rules below. Single vs multi-select differs only by \`data-multi\`.

Every \`.elicit-pill\` \u2014 including card and tile variants below \u2014 **must** carry \`data-value="<clean option value>"\`. The shell reads \`data-value\` (falling back to text content) when collecting answers, so cards/tiles that nest a title + subtitle still report a clean value rather than concatenated child text.

What varies is the **visual format** of each option:

**Plain pills** \u2014 **only** when options are \u22644 words, text-only, with no natural iconography or subtitle. Roles, sides, yes/no, short categorical labels. Anything richer \u2192 cards or tiles.

\`\`\`html
<div class="elicit-group">
  <label class="elicit-question">Which side are you on?</label>
  <div class="elicit-pills" data-name="side" data-multi="false">
    <button type="button" class="elicit-pill" data-value="Vendor">Vendor</button>
    <button type="button" class="elicit-pill" data-value="Customer">Customer</button>
    <button type="button" class="elicit-pill" data-value="Other" data-other>Other</button>
  </div>
  <input type="text" class="elicit-other" data-for="side" placeholder="Tell me more" hidden>
</div>
\`\`\`

**Cards** \u2014 when options benefit from visual differentiation: categories with clean visual mappings, choices that deserve a one-line subtitle. Cards carry a small Tabler icon (\`<i class="ti ti-NAME">\`, 16\u201320px via \`font-size\`, \`aria-hidden\`) and a muted subtitle. Reshape \`.elicit-pill\` via inline \`style\`; title at 13px/500, subtitle at 11px \`var(--text-muted)\`. Pick the most semantically apt \`ti-*\` name for each option \u2014 don't reuse the examples below verbatim.

\`\`\`html
<div class="elicit-pills" data-name="processor" data-multi="false">
  <button type="button" class="elicit-pill" data-value="stripe"
    style="border-radius:12px; padding:14px 16px; display:flex; gap:12px; align-items:flex-start; text-align:left; min-width:180px; box-shadow:0 1px 2px rgba(0,0,0,0.04)">
    <i class="ti ti-credit-card" style="font-size:20px" aria-hidden="true"></i>
    <span>
      <span style="font-size:13px; font-weight:500">Stripe</span><br>
      <span style="font-size:11px; color:var(--text-muted)">Payments &amp; invoicing</span>
    </span>
  </button>
  <button type="button" class="elicit-pill" data-value="bank"
    style="border-radius:12px; padding:14px 16px; display:flex; gap:12px; align-items:flex-start; text-align:left; min-width:180px; box-shadow:0 1px 2px rgba(0,0,0,0.04)">
    <i class="ti ti-building-bank" style="font-size:20px" aria-hidden="true"></i>
    <span>
      <span style="font-size:13px; font-weight:500">Bank transfer</span><br>
      <span style="font-size:11px; color:var(--text-muted)">ACH / wire</span>
    </span>
  </button>
  <!-- more cards\u2026 -->
</div>
\`\`\`

**Preview tiles** \u2014 for output-format pickers ("How should I deliver this \u2014 doc, slides, table?"). Each tile shows a tiny illustration of what that output looks like: a few stacked lines for a doc, two rectangles for slides, a small grid for a table. Keep illustrations to simple SVG strokes in \`currentColor\` inside a ~48\u00D736 box, label below. Same \`.elicit-pill\` wiring.

\`\`\`html
<div class="elicit-pills" data-name="output" data-multi="false">
  <button type="button" class="elicit-pill" data-value="waterfall"
    style="width:110px; border-radius:12px; padding:14px 10px; display:flex; flex-direction:column; align-items:center; gap:8px; box-shadow:0 1px 2px rgba(0,0,0,0.04)">
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="22" width="6" height="10"/><rect x="14" y="14" width="6" height="8"/><rect x="24" y="8" width="6" height="6"/><rect x="34" y="4" width="6" height="28"/></svg>
    <span style="font-size:13px; font-weight:500">Waterfall bridge</span>
  </button>
  <!-- more tiles\u2026 -->
</div>
\`\`\`

**Sliders and dates** \u2014 for quantities, ranges, and deadlines. Don't render "1 / 2 / 3 / 4 / 5" as pills. Use \`<input type="range" data-name="..." min max step>\` with contextual labels at the ends (e.g. "Rough draft" \u2194 "Polished", "$0" \u2194 "$50k"). Dates use \`.elicit-date\` (see below). The shell collects the value via \`data-name\`.

When the question could plausibly have an answer you didn't list, include an escape-hatch option as the last one with \`data-other\` \u2014 selecting it reveals the paired \`.elicit-other\` input. Localize its label ("Other" / "Autre" / "Otro" / etc.) to the user's language; the shell keys on the attribute, not the text.

### Polish

Elicitation forms are an explicit exception to the "no shadows" rule stated in the base/UI guidelines above: the form wrapper, pills, cards, and tiles all carry a light drop shadow \u2014 barely there, just enough to lift off the surface. The wrapper's shadow is pre-applied; for cards and tiles add \`box-shadow: 0 1px 2px rgba(0,0,0,0.04)\` inline.

Hover is consistent across formats: idle pills darken their border-color on hover (the pre-styled \`.elicit-pill:hover\` handles this). Rely on the provided \`.elicit-*\` hover states; do not attempt custom hover styling.

### File upload

**When to include a dropzone:** if the skill needs data, documents, numbers, a contract, a spreadsheet \u2014 anything the user would provide as a file \u2014 include a file upload group. Don't ask "do you have the data?" with pills; give them a place to put it. If they don't have a file, they can skip that group or type in the textarea below.

If the user already attached the relevant file to the conversation before invoking the skill, skip the dropzone entirely \u2014 infer from context.

**The dropzone SVG below is fixed chrome \u2014 emit it byte-for-byte. Do not substitute a different icon, do not redraw the path.** It is the canonical Upload anthropicon; only the question text, \`data-name\`, and textarea placeholder vary.

\`\`\`html
<div class="elicit-group">
  <label class="elicit-question">Upload the contract (or paste the relevant text below):</label>
  <div class="elicit-files" data-name="contract">
    <label class="elicit-dropzone">
      <svg viewBox="0 0 20 20" fill="currentColor"><path d="M16.5 13a.5.5 0 0 1 .5.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5M10 3a.5.5 0 0 1 .374.168l4 4.5.059.082a.5.5 0 0 1-.732.65l-.075-.068L10.5 4.814V13.5a.5.5 0 0 1-1 0V4.814L6.374 8.332a.5.5 0 0 1-.748-.664l4-4.5.08-.071A.5.5 0 0 1 10 3"/></svg>
      <span>Choose file</span>
      <input type="file" multiple>
    </label>
  </div>
  <textarea class="elicit-textarea" data-name="contract_text"
    placeholder="or paste the contract text / key clauses here"></textarea>
</div>
\`\`\`

Always pair the dropzone with a textarea fallback in the same group \u2014 the user may not have a file handy but can paste or type the data. Both go in the submit payload.

Selected files appear as 120\u00D7120 tiles styled to match the chat input's FileThumbnail, so a file picked here reads as the same object it becomes once attached. Selected files are attached to the conversation (same as the user clicking \`+\` in chat). On submit you'll see \`Contract: report.pdf (attached)\` in the payload \u2014 read the file via the conversation's attachments like any other uploaded file.

### Free text and dates

\`\`\`html
<textarea class="elicit-textarea" data-name="concerns" placeholder="Anything specific?"></textarea>
<input type="date" class="elicit-date" data-name="deadline">
\`\`\`

### After submit

Answers arrive as your next message on a single line, with or without the header title in front:

\`\`\`
Contract details \u2014 Side: Customer \u00B7 Diet: Vegan, Gluten-free \u00B7 Deadline: 2027-01-05
\`\`\`

Labels are your \`data-name\` attributes humanized to sentence case (\`output_format\` \u2192 \`Output format\`; \`_text\` is dropped, \`_file\` \u2192 \` file\`, \`_other\` \u2192 \` (other)\`). Multi-select values are comma-joined. Short textarea values have newlines flattened to \` / \`; values 81\u2013200 chars are wrapped in quotes. Values over 200 chars appear as \`Label: (N chars \u2014 see below)\` in the compact line and are repeated verbatim \u2014 newlines intact \u2014 under a \`--- Full content ---\` fold. Nothing is truncated. If skipped, you'll see \`(Skipped the form \u2014 proceed with defaults or ask me in plain text)\`. Parse and proceed.
`]}}var y=[{name:"show_widget",description:`Show visual content \u2014 SVG graphics, diagrams, charts, or interactive HTML widgets \u2014 that renders inline alongside your text response.
Use for flowcharts, architecture diagrams, dashboards, forms, calculators, data tables, games, illustrations, or any visual content.
The code is auto-detected: starts with <svg = SVG mode, otherwise HTML mode.
A global sendPrompt(text) function is available \u2014 it sends a message to chat as if the user typed it.
IMPORTANT: Call read_me before your first show_widget call. Do NOT narrate or mention the read_me call to the user \u2014 call it silently, then respond as if you went straight to building the visualization.`,inputSchema:{type:"object",properties:{loading_messages:{type:"array",items:{type:"string"},minItems:1,maxItems:4,description:"1\u20134 loading messages shown to the user while the visual renders, each roughly 5 words long. Write them in the same language the user is using. Use 1 for simple visuals, more for complex ones. If the topic is serious \u2014 illness, disease, pandemics, death, grief, war, conflict, poverty, disaster, trauma, abuse, addiction, medical decisions, politically charged subjects, or anything where the reader might be personally affected \u2014 keep these BORING: describe what the code is doing in the dullest generic way, no jargon-as-drama, no evocative terms. Pandemic growth model \u2014 NOT ['Simulating patient zero', 'Modeling the curve'] (documentary-narrator voice), YES ['Setting up the model', 'Running the calculation']. Cancer timeline \u2014 NOT ['Charting the battle ahead'], YES ['Laying out the stages']. If you have to ask whether it's serious, it is. Otherwise, have fun \u2014 reach for alliteration, puns, personification, wordplay, whatever lands in that language. Playful examples \u2014 revenue chart: ['Bribing bars to stand taller', 'Asking Q4 where it went']; kanban: ['Herding cards into columns', 'Dragging, dropping, not stopping']."},title:{type:"string",description:"Short snake_case identifier for this visual. Must be specific and disambiguating \u2014 if the conversation has multiple visuals, this title alone should tell you which one is being referenced (e.g. 'q4_revenue_by_product_line' not 'chart', 'oauth_login_flow' not 'diagram'). Also used as the download filename, so no spaces or special characters."},widget_code:{type:"string",description:'SVG or HTML code to render. For SVG: raw SVG code starting with <svg> tag, must use CSS variables for colors. Example: <svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">...</svg>. For HTML: raw HTML content to render, do NOT include DOCTYPE, <html>, <head>, or <body> tags. Use CSS variables for theming. Keep background transparent and avoid top-level padding. Scripts are supported but execute after streaming completes.'}},required:["loading_messages","title","widget_code"]},annotations:{readOnlyHint:!0},_meta:{ui:{resourceUri:"ui://imagine/show-widget.html"}}},{name:"read_me",description:"Returns required context for show_widget (CSS variables, colors, typography, layout rules, examples). Call before your first show_widget call. Call again later if you need a different module. Do NOT mention or narrate this call to the user \u2014 it is an internal setup step. Call it silently and proceed directly to the visualization in your response.",inputSchema:{type:"object",properties:{modules:{type:"array",items:{type:"string",enum:[...g]},description:"Which module(s) to load. Pick all that fit."},platform:{type:"string",enum:[..._],description:"The client platform the widget will render on. Pass 'mobile' when your system prompt indicates a mobile client (narrow ~380px viewport) so SVG viewBox and layout guidance are sized accordingly; otherwise pass 'desktop'. Defaults to 'unknown' (desktop sizing)."}}},annotations:{readOnlyHint:!0},_meta:{"claude.ai/hidden_in_chat":!0,"anthropic/maxResultSizeChars":2e5}}],b=[{uri:"ui://imagine/show-widget.html",name:"visualize widget",description:"Renders SVG or HTML content progressively as it streams for the show_widget tool",mimeType:"text/html;profile=mcp-app"}];function x(e,t,n,r){if(e==="show_widget")return{content:[{type:"text",text:"Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented."}]};if(e==="read_me"){let e=t.modules??[],i=t.platform??"unknown",a=v(n??l(i)),o=new Set,s=['# Imagine \u2014 Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` \u2014 SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` \u2014 UI mockups, forms, cards, dashboards\n- `interactive` \u2014 interactive explainers with controls\n- `chart` \u2014 charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` \u2014 illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget \u2014 hard limits:**\n- Box subtitles: \u22645 words. Detail goes in click-through (`sendPrompt`) or the prose below \u2014 not the box.\n- Colors: \u22642 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: \u22644 boxes at full width (~140px each). 5+ boxes \u2192 shrink to \u2264110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing "click to learn more" in prose, the diagram itself must ACTUALLY be sparse. Don\'t promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class="sr-only">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role="img"` with `<title>` and `<desc>` instead \u2014 see SVG setup.)\n\nYou create rich visual content \u2014 SVG diagrams/illustrations and HTML interactive widgets \u2014 that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn\'t notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** \u2014 All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks "explain X", write the explanation in your response and use the tool only for the visual that accompanies it.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) \u2192 content HTML \u2192 `<script>` last.\n- **SVG**: `<defs>` (markers) \u2192 visual elements immediately.\n- Prefer inline `style="..."` over `<style>` blocks \u2014 inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules \u2014 that\'s fine, but don\'t bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji. Icons = Tabler **outline** webfont (5800+, already loaded): `<i class="ti ti-home"></i>`. Outline only \u2014 never use `-filled` suffixes (`ti-heart-filled` etc. are not loaded and will render blank). Inherits color + font-size from parent. Decorative icons get `aria-hidden="true"`; icon-only buttons get `aria-label`. Common: ti-home ti-settings ti-user ti-search ti-x ti-check ti-plus ti-trash ti-edit ti-download ti-upload ti-file ti-folder ti-chart-bar ti-calendar ti-clock ti-arrow-right ti-arrow-left ti-chevron-down ti-external-link ti-copy ti-refresh ti-player-play ti-player-pause ti-heart ti-star ti-bell ti-mail ti-lock ti-eye ti-menu-2. Don\'t hand-draw icon SVG paths.\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only \u2014 host provides the bg)\n- **Typography**: The default font is the person\'s Interface font, usually Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-voice)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px \u2014 all `font-weight: 500`. Heading color is pre-set to `var(--text-primary)` \u2014 don\'t override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 \u2014 they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally \u2014 no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` \u2014 the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style="min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;">` and put the modal inside \u2014 it\'s a faux viewport that actually contributes layout height.\n- **Fullscreen / expand buttons**: there is no fullscreen. Never call any element\'s `requestFullscreen()`, never call `document.exitFullscreen()`, and never key state on `document.fullscreenElement` (the API is dead inside the widget iframe and `fullscreenElement` stays null forever, so a label or branch keyed on it is permanently stuck), never call display-mode host APIs, and never fake fullscreen by restyling your container to viewport size \u2014 all of these produce dead or broken controls on at least one platform. If the user asks for a fullscreen or expand button, implement an expanded-layout toggle instead: a synchronous CSS class flip on in-flow content with explicit px sizes (taller chart, roomier controls), updating the button label in the same handler \u2014 no async, no awaits, symmetric enter/exit. Mutate the existing elements\' classes and text; never rebuild the control\'s DOM with innerHTML (replacement silently drops event listeners and leaves a dead button). The host resizes to fit your content automatically.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` \u2014 just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text \u2014 never plain black or generic gray.\n- **Corners**: use `border-radius: var(--radius)` for controls, `12px` for cards. In SVG, `rx="4"` is the default \u2014 larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** \u2014 if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** \u2014 see Philosophy above.\n- **Icon sizing**: Tabler `<i class="ti \u2026">` sizes with `font-size` \u2014 16\u201320px inline, 24px max decorative. For one-off inline SVG icons, set `width`/`height` explicitly (same limits).\n- No tabs, carousels, or `display: none` sections during streaming \u2014 hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine \u2014 see Illustrative/Interactive sections.)\n- No nested scrolling \u2014 auto-fit height.\n- **Validate input in interactive widgets.** Any widget that collects user input before acting on it (quiz answers, text boxes, form fields) must check that input in its submit handler: if a required field is empty or invalid, show a clear inline error next to the control (13px `color: var(--text-danger)` text, e.g. "Enter an answer first") and stop \u2014 do not advance to the next step, reveal the answer, or otherwise proceed until the input is valid. Clear the error as soon as the user edits the field.\n- Scripts execute after streaming \u2014 load libraries via `<script src="https://cdnjs.cloudflare.com/ajax/libs/...">` (UMD globals), then use the global in a plain `<script>` that follows. The library `<script src>` tag must come BEFORE any inline script that uses its global \u2014 never call a library from code that appears above its `<script src>` tag.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`, `fonts.googleapis.com`, `fonts.gstatic.com`. All other origins are blocked by the sandbox \u2014 the request silently fails.\n\n### CSS Variables\n**Surfaces**: `--surface-2` (white), `--surface-1` (the page\'s own color), `--surface-0` (a step darker than the page); `--bg-neutral` (gray tint that shows on any page); role tints `--bg-{accent,danger,success,warning}`\n**Text**: `--text-primary` (black), `--text-secondary` (muted), `--text-muted` (hints); role `--text-{accent,danger,success,warning}`\n**Borders**: `--border` (default hairline), `--border-strong` (hover), `--border-stronger`; role `--border-{accent,danger,success,warning}`\n**Typography**: `--font-sans`, `--font-voice` (serif), `--font-mono`\n**Layout**: `--radius` (8px), `--pad-{sm,md,lg,xl}`, `--gap-{xs,sm,md,lg,xl}`; for larger corners use literal `12px`/`16px`\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** \u2014 every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes \u2014 they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) \u2014 never omit fill or use `fill="inherit"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--text-primary, --text-secondary) for text. Never hardcode colors like color: #333 \u2014 invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user\'s next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href="https://...">` just works \u2014 clicks are intercepted and open the host\'s link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n'],c=!1;for(let t of e){c||=Object.hasOwn(a,t)&&t!=="elicitation";for(let e of a[t]??[])o.has(e)||(o.add(e),s.push(e))}return r?.shareEdits===!0&&s.push('Mark every text field the user may edit (`<textarea>`, text `<input>`, `contenteditable`) with `data-share-edit="<unique short name>"`: their edits then reach you attached to their next message. Left out: autofilled text the user left alone, fields edited while hidden, password, one-time-code and card fields, fields named for a secret (password, API key, PIN, card number and the like), elicitation form fields, a marked element once the user typed in an editable region inside it, and text only a script changed. Do not mark fields meant for secrets. A widget that has, or ever had, any field for a secret, marked or not, shares no edits at all: there, have your Send button pass the other fields\' text itself, never the secret. Do not re-create, remove, rewrite, clear or reset marked fields from script.'),c&&s.push("End the text before each show_widget call with one short sentence that says that the drawing follows."),s.push("Do not overthink. Try to keep thinking below 500 tokens. If the visual is complex and requires more reasoning effort, consider creating an artifact instead."),{content:[{type:"text",text:s.join(`

`)}]}}return{content:[{type:"text",text:`Unknown tool: ${e}`}],isError:!0}}function S(e){let{onToolCall:t,readResourceCacheHint:n,widthOverride:l,shareEdits:u,version:d="1.0.0",...f}=e??{},p=new r({name:"visualize",version:d},{...f,capabilities:{tools:{},resources:{}}});return p.setRequestHandler(i,()=>({tools:y})),p.setRequestHandler(s,e=>{let{name:n,arguments:r}=e.params,i=r??{};return t?.(n,i),x(n,i,l,{shareEdits:u})}),p.setRequestHandler(o,()=>({resources:b})),p.setRequestHandler(a,e=>{let{uri:t}=e.params;return{...n,...c(t,{shareEdits:u})}}),p}var C=new Set(g),w=new Set(_);async function T(){return S({jsonSchemaValidator:await n(),onToolCall:(n,r)=>{if(n==="read_me"&&Array.isArray(r.modules)&&e({})){let e=[...new Set(r.modules.filter(e=>typeof e=="string"&&C.has(e)))],i=typeof r.platform=="string"&&w.has(r.platform)?r.platform:void 0;t({event_key:"claudeai.mcp_app.bridge_event",server_uuid:"",tool_name:n,tool_use_id:"",chat_message_uuid:"",event_type:"loggingmessage",sandbox_url:"",since_mount_ms:0,log_logger:"viz:server:read_me",read_me_modules:e,read_me_platform:i})}}})}export{T as getMcpVisualizeServerInstance};