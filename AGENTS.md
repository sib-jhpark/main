# Repository Guidelines for AI Agents

## Image Handling Policy

Whenever adding or rendering images anywhere in this repository, **always** follow these rules:

1. **Use `ProtectedImage` instead of raw `<img>` tags**
   - Import and use `ProtectedImage` from `src/components/ProtectedImage.tsx`.
   - Do not render raw `<img>` elements directly in page/section components.
   - `ProtectedImage` automatically applies right-click blocking (`contextmenu`), drag blocking (`draggable={false}`, `dragstart`), mobile long-press save blocking (`-webkit-touch-callout: none`), a transparent shield overlay, and a watermark (`© Jaehyun Park`).

2. **Choose the appropriate `watermarkVariant`**
   - `watermarkVariant="tiled"` (default): Use for screenshots, diagrams, charts, and project figures.
   - `watermarkVariant="corner"`: Use for small portrait/avatar/profile photos so the watermark does not obscure the subject's face.
   - Keep `watermarkText` at its default (`© Jaehyun Park`) unless the user explicitly asks to change it.

3. **Asset Preparation (`public/`)**
   - Before adding new photos or screenshots under `public/`, strip EXIF metadata and optimize resolution/file size for web delivery when possible.
