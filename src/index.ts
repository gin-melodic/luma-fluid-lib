export { XFluid } from './fluid/XFluid'
export type { IFluidSettings } from './fluid/render/Settings.ts'

if (import.meta.env.DEV) {
  window.onload = () => {
    const root = import('./demo/main.tsx')
    root.then((module) => {module.Root()})
  }
}
