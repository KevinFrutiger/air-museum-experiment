# VR Air Museum Experiment

This app is an experiment with AltspaceVR's A-Frame SDK and A-Frame in general.

Some notes:
- The aircraft are unpainted.
- The Wright Flyer is just basic shapes for scale
- The ground texture was intentionally left untiled. Tightly tiled textures on a flat plane seem to filter to a solid color towars the horizon and loose a sense of depth.

## Running the app

AltspaceVR utilizes standard Web technologies in their SDK for developers, so this can run from a standard Web server.

This app can be run from either the src/ files or the dist/ files. The dist/ files are an optimized version.

### Running in AltspaceVR

[TODO: add CDN link]

This app is real-world scale and is intended to be displayed in Altspace's fullspace enclosures. It does not re-scale itself for the smaller enclosures and likely just won't show there.

Sounds are played using the experimental native sound component that only works in an experimental SDK space. They fall back to standard A-Frame `<sound>` components on the Web, but that component doesn't play back in Altspace.

### Running in a browser

This app can run in a standard browser, but first you would need to remove the `sync` and `sync-system` on the `<a-scene>` element since they'll cause the app to break outside of Altspace (you'll still receive console warnings regarding the various children that use the 'sync' component). These components simply allow the sync of the flying aircraft for everyone in the space and aren't required for single-user viewing.

The only movement controls are Altspace and A-Frame's default mechanics.

## Performance

In its current state the animations in this app are not silky smooth, and have not been tested on mobile VR devices that are supported in Altspace.

© 2017 Kevin Frutiger