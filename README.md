# luma-fluid-lib

A library for creating fluid animations like [Luma](https://lumalabs.ai/) website.

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]

![demonstration effect](https://s2.loli.net/2024/01/29/ABDft7cOkd5C48M.webp)

> Demo site: https://luma-fluid-demo.vercel.app/

## Integrate

```shell
$ npm install luma-fluid-lib
```

## Usage

```tsx
// A configuration dictionary for controlling shader parameters
const settings: IFluidSettings = {
  version: 1,
  paused: false,
  fluidPhysicsScale: 20,
  timestepMultiplier: 1,
  surfaceDecayFactor: 2,
  motionDecayFactor: 0,
  dragCoefficient: 0.8,
  dragSpeed: 1,
  periodicBoundary: true,
  backgroundMultiplier: 1,
  refraction: 0.21,
  chromaticAberration: 0.15,
  innerDarkening: 0.1,
  bevelCurveRadius: 5,
  gradientBackground: 0.5,
  gamma: 5.1,
  fluidIterations: 8,
  fluidScale: 1.5,
  simulationScale: 0.25,
  powerOf2Fluid: true,
}

<XFluid
    logoSrc='https://s2.loli.net/2024/01/29/mRrH5IQYucl4GCp.png'
    textureSrc='https://s2.loli.net/2024/01/29/rg3meSMxcUsRCao.jpg'
    width={1300} height={800}
    settings={settings}
    onError={(error: Error) => console.error(error)}
/>
```

Or use local image path.

```tsx
<XFluid
    logoSrc={LogoImage}
    textureSrc={TextureImage}
    width={1300} height={800}
    onError={(error: Error) => console.error(error)}
/>
```

[npm-install-size-image]: https://badgen.net/packagephobia/install/luma-fluid-lib
[npm-install-size-url]: https://packagephobia.com/result?p=luma-fluid-lib
[npm-url]: https://npmjs.org/package/luma-fluid-lib
[npm-version-image]: https://badgen.net/npm/v/luma-fluid-lib
