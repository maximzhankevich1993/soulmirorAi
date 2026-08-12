export interface CameraTarget {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export const cameraTargets: {
  hero: CameraTarget;
  scan: CameraTarget;
  dreams: CameraTarget;
  journey: CameraTarget;
  premium: CameraTarget;
} = {
  hero: {
    position: [0, 0, 8],
    lookAt: [0, 0, 0],
  },

  scan: {
    position: [1.5, 0.5, 6.5],
    lookAt: [0, 0, 0],
  },

  dreams: {
    position: [-1.5, 0.8, 6],
    lookAt: [0, 0, 0],
  },

  journey: {
    position: [1, -0.5, 6.5],
    lookAt: [0, 0, 0],
  },

  premium: {
    position: [-1, 0, 7],
    lookAt: [0, 0, 0],
  },
};