# Butterfly model slot

Place a photographed or photogrammetry butterfly at `public/models/butterfly.glb`.

The hero checks this path on load (it reads the GLB magic bytes, so a dev server's
HTML fallback is not mistaken for a model). When present, `src/three/ButterflyModel.jsx`
loads it with drei's `useGLTF`, stands it upright with the dorsal side facing the
camera, normalises the wingspan to the specimen frame, enables shadows, and plays any
embedded clips at `VITE_BUTTERFLY_ANIM_SPEED` (default 0.35×).

Until then, `src/three/StudySpecimen.jsx` renders a painted study specimen.

What to look for in a model:
- PBR textures from photography (base colour with alpha for the wing silhouette)
- separate wing meshes or a skinned rig with a slow wing clip
- under ~5 MB; Draco / Meshopt compression is supported
- a licence that permits use on a portfolio (CC0 / CC-BY with attribution)

See `.env.example` for rotation / scale / animation-speed overrides.
