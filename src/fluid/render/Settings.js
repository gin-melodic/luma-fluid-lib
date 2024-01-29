export class FluidSetting {
  powerOf2Fluid = true;
  simulationScale = 0.25;
  fluidScale = 1.5;
  fluidIterations = 8;
  gamma = 2.1;
  gradientBackground = 0.1;
  bevelCurveRadius = 5;
  innerDarkening = 0.7;
  chromaticAberration = 0.15;
  refraction = 0.21;
  backgroundMultiplier = 1;
  periodicBoundary = true;
  dragSpeed = 3;
  dragCoefficient = 0.8;
  motionDecayFactor = 0;
  surfaceDecayFactor = 2;
  timestepMultiplier = 1;
  fluidPhysicsScale = 20;
  paused = false;
  version = 1;

  setChangeCallbacks(callbacks) {
    const keys = [
      'onChangeVersion', 'onChangePaused', 'onChangeFluidPhysicsScale',
      'onChangeTimestepMultiplier', 'onChangeSurfaceDecayFactor', 'onChangeMotionDecayFactor',
      'onChangeDragCoefficient', 'onChangeDragSpeed', 'onChangePeriodicBoundary',
      'onChangeBackgroundMultiplier', 'onChangeRefraction', 'onChangeChromaticAberration',
      'onChangeInnerDarkening', 'onChangeBevelCurveRadius', 'onChangeGradientBackground',
      'onChangeGamma', 'onChangeFluidIterations', 'onChangeFluidScale',
      'onChangeSimulationScale', 'onChangePowerOf2Fluid'
    ];

    keys.forEach(key => {
      if (callbacks[key]) {
        this[key] = callbacks[key];
      }
    });
  }

  setFromDynamic(data) {
    for (let key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && Object.prototype.hasOwnProperty.call(this, key)) {
        const oldValue = this[key];
        this[key] = data[key];
        const callback = `onChange${key.charAt(0).toUpperCase() + key.slice(1)}`;
        if (typeof this[callback] === 'function') {
          this[callback](this[key], oldValue);
        }
      }
    }
  }
}
