# VR Air Museum Experiment

This app is an experiment with AltspaceVR's A-Frame SDK and A-Frame in general.

Some notes:
- The aircraft are unpainted.
- The Wright Flyer is just basic shapes for scale
- The ground texture was intentionally left untiled. Tightly tiled textures on a flat plane seem to filter to a solid color towards the horizon and loose a sense of depth.

## Running the app

AltspaceVR utilizes standard Web technologies in their SDK for developers, so this can run from a standard Web server.

This app can be run from either the *src/* files or the *dist/* files. The *dist/* version is optimized for download.

### In AltspaceVR

[https://kevinfrutiger.github.io/vr-air-museum-experiment/dist/](https://kevinfrutiger.github.io/vr-air-museum-experiment/dist/)

This app is real-world scale and is intended to be displayed in Altspace's fullspace enclosures. It does not re-scale itself for the smaller enclosures and likely just won't show there.

Sounds are played using the experimental native sound component that only works in an experimental SDK space. They fall back to standard A-Frame `<sound>` components on the Web, but that component doesn't play back in Altspace.

### In a Browser

[http://www.frutigergroup.com/altspace/vr-air-museum/0.4.0/web-browser/dist/]
(http://www.frutigergroup.com/altspace/vr-air-museum/0.4.0/web-browser/dist/)

The *web-browser* branch can be run in a standard web browser. This version simply has the following Altspace script element commented out in *index.html*:

`<script src="https://sdk.altvr.com/libs/altspace.js/2.8.2/altspace.min.js"></script>`

With this script absent, the Altspace component attributes are simply ignored.

The available movement controls in-browser are A-Frame's default movement mechanics and cursor click. In Firefox, you can enable VR mode to view through your headset, but there are currently no lateral movement controls.

## Performance

In its current state the animations in this app are not silky smooth, and have not been tested on mobile VR devices that are supported in Altspace.

© 2017–2018 Kevin Frutiger