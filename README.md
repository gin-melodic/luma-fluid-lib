# luma-fluid-lib

A library for creating fluid animations like [Luma](https://lumalabs.ai/) website.

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]

![demonstration effect](https://s2.loli.net/2024/01/29/ABDft7cOkd5C48M.webp)

## Integrate

```shell
$ npm install luma-fluid-lib
```

## Usage

```tsx
<XFluid
    logoSrc='https://s2.loli.net/2024/01/29/mRrH5IQYucl4GCp.png'
    textureSrc='https://s2.loli.net/2024/01/29/rg3meSMxcUsRCao.jpg'
    width={1300} height={800}
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
