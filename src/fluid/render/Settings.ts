import {XUniformDataType} from "../models/XUniform.ts";

export interface IFluidSettings {
  powerOf2Fluid: boolean
  simulationScale: number
  fluidScale: number
  fluidIterations: number
  gamma: number
  gradientBackground: number
  bevelCurveRadius: number
  innerDarkening: number
  chromaticAberration: number
  refraction: number
  backgroundMultiplier: number
  periodicBoundary: boolean
  dragSpeed: number
  dragCoefficient: number
  motionDecayFactor: number
  surfaceDecayFactor: number
  timestepMultiplier: number
  fluidPhysicsScale: number
  paused: boolean
  version: number
}

export class FluidSetting implements IFluidSettings {
  private _powerOf2Fluid = true;
  private _simulationScale = 0.25;
  private _fluidScale = 1.5;
  private _fluidIterations = 8;
  private _gamma = 2.1;
  private _gradientBackground = 0.1;
  private _bevelCurveRadius = 5;
  private _innerDarkening = 0.7;
  private _chromaticAberration = 0.15;
  private _refraction = 0.21;
  private _backgroundMultiplier = 1;
  private _periodicBoundary = true;
  private _dragSpeed = 3;
  private _dragCoefficient = 0.8;
  private _motionDecayFactor = 0;
  private _surfaceDecayFactor = 2;
  private _timestepMultiplier = 1;
  private _fluidPhysicsScale = 20;
  private _paused = false;
  private _version = 1;
  get version(): number {
    return this._version;
  }

  set version(value: number) {
    if (value !== this._version) {
      this.onChangeVersion?.();
    }
    this._version = value;
  }
  get paused(): boolean {
    return this._paused;
  }

  set paused(value: boolean) {
    if (value !== this._paused) {
      this.onChangePaused?.();
    }
    this._paused = value;
  }
  get fluidPhysicsScale(): number {
    return this._fluidPhysicsScale;
  }

  set fluidPhysicsScale(value: number) {
    if (value !== this._fluidPhysicsScale) {
      this.onChangeFluidPhysicsScale?.(value);
    }
    this._fluidPhysicsScale = value;
  }
  get timestepMultiplier(): number {
    return this._timestepMultiplier;
  }

  set timestepMultiplier(value: number) {
    if (value !== this._timestepMultiplier) {
      this.onChangeTimestepMultiplier?.();
    }
    this._timestepMultiplier = value;
  }
  get surfaceDecayFactor(): number {
    return this._surfaceDecayFactor;
  }

  set surfaceDecayFactor(value: number) {
    if (value !== this._surfaceDecayFactor) {
      this.onChangeSurfaceDecayFactor?.(value);
    }
    this._surfaceDecayFactor = value;
  }
  get motionDecayFactor(): number {
    return this._motionDecayFactor;
  }

  set motionDecayFactor(value: number) {
    if (value !== this._motionDecayFactor) {
      this.onChangeMotionDecayFactor?.(value);
    }
    this._motionDecayFactor = value;
  }
  get dragCoefficient(): number {
    return this._dragCoefficient;
  }

  set dragCoefficient(value: number) {
    if (value !== this._dragCoefficient) {
      this.onChangeDragCoefficient?.(value);
    }
    this._dragCoefficient = value;
  }
  get dragSpeed(): number {
    return this._dragSpeed;
  }

  set dragSpeed(value: number) {
    if (value !== this._dragSpeed) {
      this.onChangeDragSpeed?.(value);
    }
    this._dragSpeed = value;
  }
  get periodicBoundary(): boolean {
    return this._periodicBoundary;
  }

  set periodicBoundary(value: boolean) {
    if (value !== this._periodicBoundary) {
      this.onChangePeriodicBoundary?.(value);
    }
    this._periodicBoundary = value;
  }
  get backgroundMultiplier(): number {
    return this._backgroundMultiplier;
  }

  set backgroundMultiplier(value: number) {
    if (value !== this._backgroundMultiplier) {
      this.onChangeBackgroundMultiplier?.(value);
    }
    this._backgroundMultiplier = value;
  }

  get refraction(): number {
    return this._refraction;
  }

  set refraction(value: number) {
    if (value !== this._refraction) {
      this.onChangeRefraction?.(value);
    }
    this._refraction = value;
  }
  get chromaticAberration(): number {
    return this._chromaticAberration;
  }

  set chromaticAberration(value: number) {
    if (value !== this._chromaticAberration) {
      this.onChangeChromaticAberration?.(value);
    }
    this._chromaticAberration = value;
  }
  get innerDarkening(): number {
    return this._innerDarkening;
  }

  set innerDarkening(value: number) {
    if (value !== this._innerDarkening) {
      this.onChangeInnerDarkening?.(value);
    }
    this._innerDarkening = value;
  }
  get bevelCurveRadius(): number {
    return this._bevelCurveRadius;
  }

  set bevelCurveRadius(value: number) {
    if (value !== this._bevelCurveRadius) {
      this.onChangeBevelCurveRadius?.();
    }
    this._bevelCurveRadius = value;
  }
  get gradientBackground(): number {
    return this._gradientBackground;
  }

  set gradientBackground(value: number) {
    if (value !== this._gradientBackground) {
      this.onChangeGradientBackground?.(value);
    }
    this._gradientBackground = value;
  }
  get gamma(): number {
    return this._gamma;
  }

  set gamma(value: number) {
    if (value !== this._gamma) {
      this.onChangeGamma?.(value);
    }
    this._gamma = value;
  }
  get fluidIterations(): number {
    return this._fluidIterations;
  }

  set fluidIterations(value: number) {
    if (value !== this._fluidIterations) {
      this.onChangeFluidIterations?.(value);
    }
    this._fluidIterations = value;
  }
  get fluidScale(): number {
    return this._fluidScale;
  }

  set fluidScale(value: number) {
    if (value !== this._fluidScale) {
      this.onChangeFluidScale?.(value);
    }
    this._fluidScale = value;
  }
  get simulationScale(): number {
    return this._simulationScale;
  }

  set simulationScale(value: number) {
    if (value !== this._simulationScale) {
      this.onChangeSimulationScale?.(value);
    }
    this._simulationScale = value;
  }
  get powerOf2Fluid(): boolean {
    return this._powerOf2Fluid;
  }

  set powerOf2Fluid(value: boolean) {
    if (value !== this._powerOf2Fluid) {
      this.onChangePowerOf2Fluid?.(value);
    }
    this._powerOf2Fluid = value;
  }

  onChangeVersion?: () => void
  onChangePaused?: () => void;
  onChangeTimestepMultiplier?: () => void;
  onChangeFluidPhysicsScale?: (a: number) => void;
  onChangeSurfaceDecayFactor?: (a: XUniformDataType) => void;
  onChangeMotionDecayFactor?: (a: XUniformDataType) => void;
  onChangeDragCoefficient?: (a: XUniformDataType) => void;
  onChangeDragSpeed?: (a: XUniformDataType) => void;
  onChangePeriodicBoundary?: (a: boolean) => void;
  onChangeBackgroundMultiplier?: (a: XUniformDataType) => void;
  onChangeFluidIterations?: (a: number) => void;
  onChangeGamma?: (a: number) => void;
  onChangeRefraction?: (a: number) => void;
  onChangeChromaticAberration?: (a: number) => void;
  onChangeInnerDarkening?: (a: number) => void;
  onChangeBevelCurveRadius?: () => void;
  onChangeGradientBackground?: (a: number) => void;
  onChangeFluidScale?: (_a: number) => void;
  onChangeSimulationScale?: (_a: number) => void;
  onChangePowerOf2Fluid?: (_a: boolean) => void;

  static parse(settings: IFluidSettings) {
    const s = new FluidSetting()
    s._powerOf2Fluid = settings.powerOf2Fluid;
    s._simulationScale = settings.simulationScale;
    s._fluidScale = settings.fluidScale;
    s._fluidIterations = settings.fluidIterations;
    s._gamma = settings.gamma;
    s._gradientBackground = settings.gradientBackground;
    s._bevelCurveRadius = settings.bevelCurveRadius;
    s._innerDarkening = settings.innerDarkening;
    s._chromaticAberration = settings.chromaticAberration;
    s._refraction = settings.refraction;
    s._backgroundMultiplier = settings.backgroundMultiplier;
    s._periodicBoundary = settings.periodicBoundary;
    s._dragSpeed = settings.dragSpeed;
    s._dragCoefficient = settings.dragCoefficient;
    s._motionDecayFactor = settings.motionDecayFactor;
    s._surfaceDecayFactor = settings.surfaceDecayFactor;
    s._timestepMultiplier = settings.timestepMultiplier;
    s._fluidPhysicsScale = settings.fluidPhysicsScale;
    s._paused = settings.paused;
    return s;
  }
}
