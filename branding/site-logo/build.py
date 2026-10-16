"""Generate the smartrecipe.co site logo as font-independent SVGs.

Letters are drawn as monoline stroked paths on a 40-unit cap height, so the
logo renders identically everywhere (no web font needed).
"""
import os

H = 40      # cap height
SW = 4      # wordmark stroke width
HERE = os.path.dirname(os.path.abspath(__file__))

# glyph: (path data, advance width)
G = {
    "S": ("M23.5 8 A9 9 0 1 0 15 20 A9 9 0 1 1 6.5 32", 28),
    "M": ("M2 40 V2 L17 26 L32 2 V40", 34),
    "A": ("M0 40 L16 5 L32 40", 32),
    "R": ("M2 40 V2 H16 A9 9 0 0 1 16 20 H2 M15 20 L27 40", 28),
    "T": ("M0 2 H28 M14 2 V40", 28),
    "E": ("M28 2 H2 V38 H28 M2 20 H24", 29),
    "C": ("M32.7 7.3 A18 18 0 1 0 32.7 32.7", 35),
    "I": ("M2 0 V40", 4),
    "P": ("M2 40 V2 H16 A9 9 0 0 1 16 20 H2", 27),
    "O": ("M20 2 A18 18 0 1 0 20.01 2 Z", 40),
    "N": ("M2 40 V0 L30 40 V0", 32),
    "Y": ("M0 0 L15 21 L30 0 M15 21 V40", 30),
}


def word(text, tracking, space):
    """Return (list of (x, path)), total width."""
    x, out = 0.0, []
    for ch in text:
        if ch == " ":
            x += space
            continue
        d, w = G[ch]
        out.append((x, d))
        x += w + tracking
    return out, x - tracking


def mark(x, y, s, teal, light):
    """The 'E' made of three bars, 42 x 40 units, scaled by s."""
    return (
        f'<g transform="translate({x:.2f} {y:.2f}) scale({s:.4f})">'
        f'<rect x="0" y="0" width="42" height="9" rx="4.5" fill="{teal}"/>'
        f'<circle cx="6" cy="20" r="5.5" fill="{light}"/>'
        f'<rect x="16" y="16" width="26" height="8" rx="4" fill="{light}"/>'
        f'<rect x="0" y="31" width="42" height="9" rx="4.5" fill="{teal}"/>'
        f"</g>"
    )


def glyphs(items, ox, oy, scale, color, sw):
    paths = "".join(
        f'<path transform="translate({ox + x * scale:.2f} {oy:.2f}) scale({scale:.4f})" d="{d}"/>'
        for x, d in items
    )
    return (
        f'<g fill="none" stroke="{color}" stroke-width="{sw / scale:.3f}" '
        f'stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="3">{paths}</g>'
    )


def logo(fg, teal, bg=None, tagline=True):
    pad = 24
    main, mw = word("SMART RECIP", 13, 22)
    gap = 12
    total_w = mw + gap + 42
    sub_scale = 0.36
    sub, sw_ = word("IT COMPANY", 26, 30)
    sub_w = sw_ * sub_scale
    h = H + (30 + H * sub_scale if tagline else 0)
    W, Hh = total_w + 2 * pad, h + 2 * pad
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {Hh:.0f}" '
        f'width="{W:.0f}" height="{Hh:.0f}" role="img" aria-label="Smart Recipe — IT Company">'
    ]
    if bg:
        parts.append(f'<rect width="100%" height="100%" fill="{bg}"/>')
    parts.append(glyphs(main, pad, pad, 1, fg, SW))
    parts.append(mark(pad + mw + gap, pad, 1, teal, fg))
    if tagline:
        sx = pad + (total_w - sub_w) / 2
        parts.append(glyphs(sub, sx, pad + H + 30, sub_scale, teal, 2.2))
    parts.append("</svg>")
    return "".join(parts)


def icon(bg, teal, fg, size=512):
    s = size * 0.5 / 42
    x = (size - 42 * s) / 2
    y = (size - 40 * s) / 2
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}" '
        f'role="img" aria-label="Smart Recipe icon">'
        + (f'<rect width="{size}" height="{size}" rx="{size * 0.22:.0f}" fill="{bg}"/>' if bg else "")
        + mark(x, y, s, teal, fg)
        + "</svg>"
    )


TEAL, TEAL_DARK = "#5CC4A9", "#1F9E80"
WHITE, INK, NIGHT = "#F3F6F5", "#0E1513", "#0B1110"

files = {
    "smartrecipe-logo-dark.svg": logo(WHITE, TEAL),                  # for dark backgrounds (as on site)
    "smartrecipe-logo-dark-bg.svg": logo(WHITE, TEAL, bg=NIGHT),     # dark background baked in
    "smartrecipe-logo-light.svg": logo(INK, TEAL_DARK),             # for light backgrounds
    "smartrecipe-logo-dark-notagline.svg": logo(WHITE, TEAL, tagline=False),
    "smartrecipe-logo-light-notagline.svg": logo(INK, TEAL_DARK, tagline=False),
    "smartrecipe-icon.svg": icon(NIGHT, TEAL, WHITE),
    "smartrecipe-icon-light.svg": icon("#FFFFFF", TEAL_DARK, INK),
    "smartrecipe-mark-transparent.svg": icon(None, TEAL, WHITE),
}
for name, svg in files.items():
    with open(os.path.join(HERE, name), "w") as f:
        f.write(svg + "\n")
    print(name)
