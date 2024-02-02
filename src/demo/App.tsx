import {XFluid} from "../index.ts";
import {IFluidSettings} from "../fluid/render/Settings.ts";
import BgImg from './bg.jpg'
import WordsImg from './words.png'
import {useState} from "react";
import './App.css'

function App() {
  const initSetting = {
    version: 1,
    paused: false,
    fluidPhysicsScale: 20,
    timestepMultiplier: 1,
    // 表面衰减系数
    surfaceDecayFactor: 2,
    // 运动衰减系数
    motionDecayFactor: 0,
    // 阻力系数
    dragCoefficient: 0.8,
    // 阻力速度
    dragSpeed: 1,
    // 运动边界
    periodicBoundary: true,
    // 背景系数
    backgroundMultiplier: 1,
    // 折射率
    refraction: 0.21,
    // 色差
    chromaticAberration: 0.15,
    // 内暗化
    innerDarkening: 0.1,
    // 斜面曲线半径
    bevelCurveRadius: 5,
    // 背景渐变
    gradientBackground: 0.5,
    // gamma
    gamma: 5.1,
    fluidIterations: 8,
    fluidScale: 1.5,
    // 模拟比例
    simulationScale: 0.25,
    powerOf2Fluid: true,
  }
  const [settings, setSettings] = useState<IFluidSettings>(initSetting)

  const elements = [
    {name: 'fluidPhysicsScale', value: settings.fluidPhysicsScale, min: 0, max: 100, step: 1},
    {name: 'timestepMultiplier', value: settings.timestepMultiplier, min: 0, max: 10, step: 0.5},
    {name: 'surfaceDecayFactor', value: settings.surfaceDecayFactor, min: 0, max: 10, step: 0.5},
    {name: 'motionDecayFactor', value: settings.motionDecayFactor, min: 0, max: 10, step: 0.5},
    {name: 'dragCoefficient', value: settings.dragCoefficient, min: 0, max: 1, step: 0.01},
    {name: 'dragSpeed', value: settings.dragSpeed, min: 0, max: 10, step: 0.5},
    {name: 'refraction', value: settings.refraction, min: 0, max: 1, step: 0.01},
    {name: 'chromaticAberration', value: settings.chromaticAberration, min: 0, max: 1, step: 0.01},
    {name: 'innerDarkening', value: settings.innerDarkening, min: 0, max: 1, step: 0.01},
    {name: 'bevelCurveRadius', value: settings.bevelCurveRadius, min: 0, max: 10, step: 0.5},
    {name: 'gradientBackground', value: settings.gradientBackground, min: 0, max: 1, step: 0.01},
    {name: 'gamma', value: settings.gamma, min: 0, max: 10, step: 0.5},
    {name: 'fluidIterations', value: settings.fluidIterations, min: 0, max: 10, step: 0.5},
    {name: 'fluidScale', value: settings.fluidScale, min: 0, max: 10, step: 0.5},
    {name: 'simulationScale', value: settings.simulationScale, min: 0, max: 1, step: 0.01},
  ]

  const panel = elements.map((element, index) => {
    return (
      <ul className='param' key={index}>
        <li>{ element.name.charAt(0).toUpperCase() + element.name.slice(1) }</li>
        <li>
          <input type='range' min={element.min} max={element.max} step={element.step} className='slider' value={element.value} onChange={(e) => {
            setSettings({...settings, [element.name]: parseFloat(e.target.value)});
          }} />
        </li>
        <li>
          <input type='number' className='sliderShow' value={element.value} onChange={(e) => {setSettings({...settings, [element.name]: parseFloat(e.target.value)})}}/>
        </li>
      </ul>
    )
  })

  const [hidePanel, setHidePanel] = useState(false)

  return (
    <div>
      <XFluid
        logoSrc={WordsImg}
        textureSrc={BgImg}
        width={1300} height={800}
        settings={settings}
        onError={(error: Error) => console.error(error)}
      />
      <div className='debug-tools'>
        <div className='title' onClick={() => {setHidePanel(!hidePanel)}}>Settings {
          hidePanel ? '▼' : '▲'
        }</div>
        { !hidePanel && <div className='params'>
          { panel }
        </div> }
        <div className='restore-btn-container'>
          <input type='button' value='Restore' onClick={() => setSettings(initSetting)}/>
        </div>
      </div>
    </div>
  )
}

export default App
