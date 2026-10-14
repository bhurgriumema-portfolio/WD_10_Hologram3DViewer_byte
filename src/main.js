
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const MODEL_CREDIT_URL = 'https://skfb.ly/6XTHG'

document.querySelector('#app').innerHTML = `
  <main class="experience">
    <nav class="navbar">
      <a class="brand" href="#home" aria-label="Royal Estate home">
        <span class="brand-mark">R</span>
        ROYAL ESTATE<span class="dot">.</span>
      </a>
      <span class="nav-label">EXCLUSIVE PROPERTY EXPERIENCE</span>
      <span class="live"><span></span> LIVE 3D EXPERIENCE</span>
    </nav>

    <section class="hero" id="home">
      <div class="intro">
        <p class="eyebrow"><span></span> A NEW STANDARD OF LUXURY</p>
        <h1>Find Your<br><span>Forever Home.</span></h1>
        <p class="description">
          Discover exceptional architecture. Explore every angle.
          Experience luxury living in a new dimension.
        </p>
        <div class="product-tag">
          <span class="tag-line"></span>
          <div>
            <small>FEATURED RESIDENCE</small>
            <strong>The Royal Villa</strong>
          </div>
        </div>
        <button class="craft-button hero-explore" id="hero-explore" type="button">
          EXPLORE THE RESIDENCE ↗
        </button>
      </div>

      <div class="viewer" id="viewer" tabindex="-1">
        <div class="viewer-top">
          <span>INTERACTIVE 3D VIEWPORT</span>
          <span>FULLY FURNISHED RESIDENCE</span>
        </div>

        <div id="canvas-container" aria-label="Interactive 3D mansion viewer">
          <div class="model-loading" id="model-loading">
            <span class="loading-spinner"></span>
            <strong id="loading-title">Preparing your experience</strong>
            <span id="loading-detail">Loading 3D mansion...</span>
          </div>
        </div>

        <div class="crosshair crosshair-one"></div>
        <div class="crosshair crosshair-two"></div>

        <div class="viewer-bottom">
          <span><i></i> REAL-TIME 3D</span>
          <span id="rotation-status" role="status" aria-live="polite">
            LOADING MANSION...
          </span>
        </div>

        <div class="orbit-label">360°<br><small>EXPLORE</small></div>

        <button
          class="fullscreen-btn"
          id="fullscreen-btn"
          type="button"
          aria-label="Enter fullscreen"
          title="Fullscreen"
        >⛶</button>
      </div>

      <aside class="side-info">
        <div class="index">360° <span>EXPLORATION</span></div>
        <div class="side-rule"></div>
        <p class="side-caption">CRAFTED FOR<br>EXTRAORDINARY LIVING.</p>
        <p class="side-small">
          Explore the architecture, discover furnished spaces,
          and view the residence from different perspectives.
        </p>
      </aside>
    </section>

    <section class="controls" aria-label="3D viewer controls">
      <div class="control-copy">
        <span class="control-icon">✳</span>
        <div>
          <strong>YOUR HOME. YOUR PERSPECTIVE.</strong>
          <small>Drag to rotate, scroll to zoom, or choose a camera view.</small>
        </div>
      </div>

      <div class="control-actions">
        <button id="rotate-btn" class="control-btn active" type="button" aria-pressed="true">
          ↻ <span>Auto rotate on</span>
        </button>
        <button id="reset-btn" class="control-btn" type="button">
          ⟳ <span>Reset view</span>
        </button>
      </div>

      <div class="zoom-actions">
        <button id="zoom-out" type="button" aria-label="Zoom out" title="Zoom out">−</button>
        <span>ZOOM</span>
        <button id="zoom-in" type="button" aria-label="Zoom in" title="Zoom in">+</button>
      </div>
    </section>

    <section class="camera-section" id="camera-views">
      <div class="camera-heading">
        <p class="eyebrow">CHOOSE YOUR PERSPECTIVE</p>
        <h2>Explore Every <span>Angle.</span></h2>
        <p>
          Choose a viewpoint to reposition the camera. Then drag the model
          to rotate it and use your scroll wheel or zoom controls to move closer.
        </p>
      </div>

      <div class="camera-buttons" role="group" aria-label="Choose a 3D camera view">
        <button class="camera-btn active" type="button" data-view="exterior" aria-pressed="true">
          <span>01</span>
          <strong>Exterior View</strong>
          <small>See the residence from outside</small>
        </button>
        <button class="camera-btn" type="button" data-view="interior" aria-pressed="false">
          <span>02</span>
          <strong>Interior View</strong>
          <small>Move toward the model's central area</small>
        </button>
        <button class="camera-btn" type="button" data-view="top" aria-pressed="false">
          <span>03</span>
          <strong>Top View</strong>
          <small>Look down from above the residence</small>
        </button>
      </div>
      <p class="camera-note">
        Note: camera presets change the viewing position. Seeing rooms through
        walls depends on the original 3D model geometry.
      </p>
    </section>

    <section class="architecture-section" id="architecture">
      <div class="section-heading">
        <p class="eyebrow">THE RESIDENCE</p>
        <h2>Designed to Be <span>Discovered.</span></h2>
        <p>
          Discover three ways to inspect the residence. Choose a feature below
          to jump straight into its matching 3D viewpoint.
        </p>
      </div>

      <div class="feature-grid">
        <button class="feature-card" type="button" data-feature-view="exterior">
          <span class="feature-number">01</span>
          <span class="feature-symbol" aria-hidden="true">⌂</span>
          <span class="feature-card-title">Distinctive Architecture</span>
          <span class="feature-card-copy">
            Study the mansion's overall form, exterior structure and architectural character.
          </span>
          <span class="feature-link">OPEN EXTERIOR VIEW ↗</span>
        </button>

        <button class="feature-card" type="button" data-feature-view="interior">
          <span class="feature-number">02</span>
          <span class="feature-symbol" aria-hidden="true">◇</span>
          <span class="feature-card-title">Furnished Interiors</span>
          <span class="feature-card-copy">
            Move the camera toward the central area to inspect whatever interior details are visible.
          </span>
          <span class="feature-link">OPEN INTERIOR VIEW ↗</span>
        </button>

        <button class="feature-card" type="button" data-feature-view="top">
          <span class="feature-number">03</span>
          <span class="feature-symbol" aria-hidden="true">✳</span>
          <span class="feature-card-title">A Different Perspective</span>
          <span class="feature-card-copy">
            Get a higher viewpoint to understand the residence's overall layout.
          </span>
          <span class="feature-link">OPEN TOP VIEW ↗</span>
        </button>
      </div>
    </section>

    <section class="craft-section" id="experience">
      <div class="craft-copy">
        <p class="eyebrow">THE EXPERIENCE</p>
        <h2>Luxury in Every <span>Detail.</span></h2>
        <p>
          Go beyond a static photograph. Interact with the 3D residence,
          move around its structure and explore it from different perspectives.
        </p>
        <button class="craft-button" id="explore-btn" type="button">
          RETURN TO 3D VIEW ↗
        </button>
      </div>

      <div class="craft-details">
        <div>
          <span>01</span>
          <strong>Real-time rendering</strong>
          <small>Powered by Three.js and WebGL</small>
        </div>
        <div>
          <span>02</span>
          <strong>Interactive controls</strong>
          <small>Rotate, zoom and change camera views</small>
        </div>
        <div>
          <span>03</span>
          <strong>Responsive experience</strong>
          <small>Canvas adapts to the available screen space</small>
        </div>
      </div>
    </section>

    <section class="closing-section" id="contact">
      <p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h2>See Luxury From a <span>New Perspective.</span></h2>
      <p>Explore the residence in an interactive 3D experience.</p>
      <button id="closing-explore" type="button">EXPLORE THE RESIDENCE ↗</button>

      <div class="model-credit">
        <small>3D MODEL CREDIT</small>
        <p>
          “Luxury Mansion” by
          <a href="${MODEL_CREDIT_URL}" target="_blank" rel="noopener noreferrer">
            Home Design 3D
          </a>
          on Sketchfab.
        </p>
        <p>
          Licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >CC Attribution-NonCommercial-ShareAlike</a>.
        </p>
        <p class="credit-note">
          Original model and creator retain their respective rights.
          This project is an interactive viewer, not a claim of original model authorship.
        </p>
      </div>
    </section>

    <footer>
      <span>ROYAL ESTATE STUDIO © 2026</span>
      <span>POWERED BY THREE.JS</span>
      <a href="${MODEL_CREDIT_URL}" target="_blank" rel="noopener noreferrer">
        3D MODEL BY HOME DESIGN 3D ↗
      </a>
    </footer>
  </main>
`

const $ = (selector) => document.querySelector(selector)

const container = $('#canvas-container')
const status = $('#rotation-status')
const rotateBtn = $('#rotate-btn')
const resetBtn = $('#reset-btn')
const viewer = $('#viewer')
const loadingOverlay = $('#model-loading')
const loadingTitle = $('#loading-title')
const loadingDetail = $('#loading-detail')
const fullscreenBtn = $('#fullscreen-btn')

const scene = new THREE.Scene()
scene.background = new THREE.Color('#252323')

const camera = new THREE.PerspectiveCamera(
  40,
  Math.max(container.clientWidth, 1) / Math.max(container.clientHeight, 1),
  0.01,
  1000
)
camera.position.set(0, 2.2, 8)

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
renderer.setSize(
  Math.max(container.clientWidth, 1),
  Math.max(container.clientHeight, 1)
)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.35
container.appendChild(renderer.domElement)

renderer.domElement.setAttribute(
  'aria-label',
  '3D mansion. Drag to rotate and scroll to zoom.'
)

scene.add(new THREE.HemisphereLight(0xf4ebdd, 0x4a3434, 2.2))

const keyLight = new THREE.DirectionalLight(0xffedcf, 4)
keyLight.position.set(4, 8, 5)
scene.add(keyLight)

const fillLight = new THREE.DirectionalLight(0xd8dff4, 2)
fillLight.position.set(-5, 4, -4)
scene.add(fillLight)

const goldLight = new THREE.PointLight(0xd4b477, 30, 20)
goldLight.position.set(-3, 3, 4)
scene.add(goldLight)

const warmLight = new THREE.PointLight(0x713347, 18, 20)
warmLight.position.set(3, 2, -3)
scene.add(warmLight)

const product = new THREE.Group()
scene.add(product)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.055
controls.enablePan = true
controls.enableZoom = true
controls.zoomSpeed = 1.5
controls.minDistance = 0.15
controls.maxDistance = 50
controls.zoomToCursor = true
controls.target.set(0, 1.2, 0)
controls.autoRotate = true
controls.autoRotateSpeed = 0.8
controls.update()

let modelLoaded = false
let modelFailed = false
let modelSize = new THREE.Vector3(4, 3, 4)
let modelCenter = new THREE.Vector3(0, 1, 0)
let defaultCameraPosition = new THREE.Vector3(0, 2.2, 8)
let defaultTarget = new THREE.Vector3(0, 1.2, 0)
let cameraTransition = null
let activeView = 'exterior'
let focusTimer = null

const loader = new GLTFLoader()

loader.load(
  '/luxury_mansion.glb',
  (gltf) => {
    const mansion = gltf.scene
    const bounds = new THREE.Box3().setFromObject(mansion)
    const originalSize = bounds.getSize(new THREE.Vector3())
    const center = bounds.getCenter(new THREE.Vector3())
    const maxDimension = Math.max(
      originalSize.x,
      originalSize.y,
      originalSize.z
    )

    if (!Number.isFinite(maxDimension) || maxDimension <= 0) {
      modelFailed = true
      loadingTitle.textContent = 'Unable to display this model'
      loadingDetail.textContent = 'The 3D model has invalid dimensions.'
      status.textContent = 'INVALID MODEL SIZE'
      console.error('The mansion model has invalid dimensions.')
      return
    }

    // Normalize model size and center it horizontally on the ground.
    const scale = 4.5 / maxDimension
    mansion.scale.setScalar(scale)
    mansion.position.set(
      -center.x * scale,
      -bounds.min.y * scale,
      -center.z * scale
    )
    product.add(mansion)

    modelSize.copy(originalSize).multiplyScalar(scale)
    modelCenter.set(0, modelSize.y * 0.42, 0)

    const distance = Math.max(maxDimension * scale * 1.65, 6)

    defaultTarget.copy(modelCenter)
    defaultCameraPosition.set(
      distance * 0.12,
      modelCenter.y + Math.max(modelSize.y * 0.18, 0.5),
      distance
    )

    camera.position.copy(defaultCameraPosition)
    camera.near = 0.01
    camera.far = Math.max(1000, maxDimension * scale * 10)
    camera.updateProjectionMatrix()

    controls.target.copy(defaultTarget)
    controls.minDistance = Math.max(
      0.08,
      Math.min(modelSize.x, modelSize.y, modelSize.z) * 0.04
    )
    controls.maxDistance = Math.max(50, distance * 4)
    controls.update()

    modelLoaded = true
    loadingOverlay.classList.add('is-hidden')
    status.textContent = 'DRAG TO EXPLORE'
    setActiveCameraButton('exterior')
    setRotationButtonState()

    console.info('Luxury Mansion loaded successfully.')
  },
  (progress) => {
    if (progress.total > 0) {
      const percent = Math.round((progress.loaded / progress.total) * 100)
      loadingTitle.textContent = 'Preparing your experience'
      loadingDetail.textContent = `Loading 3D mansion... ${percent}%`
      status.textContent = `LOADING MANSION ${percent}%`
    }
  },
  (error) => {
    modelFailed = true
    loadingTitle.textContent = 'Mansion could not be loaded'
    loadingDetail.textContent =
      'Check that public/luxury_mansion.glb exists, then refresh the page.'
    status.textContent = 'MODEL FAILED TO LOAD'
    console.error('Could not load /luxury_mansion.glb:', error)
  }
)

// Ambient gold particles.
const particleCount = 180
const positions = new Float32Array(particleCount * 3)

for (let i = 0; i < particleCount; i++) {
  const radius = 3 + Math.random() * 3
  const angle = Math.random() * Math.PI * 2

  positions[i * 3] = Math.cos(angle) * radius
  positions[i * 3 + 1] = Math.random() * 4
  positions[i * 3 + 2] = Math.sin(angle) * radius
}

const particleGeometry = new THREE.BufferGeometry()
particleGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
)

const particles = new THREE.Points(
  particleGeometry,
  new THREE.PointsMaterial({
    color: 0xd4b477,
    size: 0.025,
    transparent: true,
    opacity: 0.72,
    sizeAttenuation: true,
    depthWrite: false
  })
)
scene.add(particles)

// Subtle ground grid.
const grid = new THREE.GridHelper(20, 40, 0x8e7042, 0x514238)
grid.position.y = -0.015
grid.material.transparent = true
grid.material.opacity = 0.22
scene.add(grid)

function setRotationButtonState() {
  const isRotating = controls.autoRotate
  rotateBtn.classList.toggle('active', isRotating)
  rotateBtn.setAttribute('aria-pressed', String(isRotating))
  rotateBtn.querySelector('span').textContent = isRotating
    ? 'Auto rotate on'
    : 'Auto rotate off'
}

function setActiveCameraButton(viewName) {
  document.querySelectorAll('[data-view]').forEach((button) => {
    const isActive = button.dataset.view === viewName
    button.classList.toggle('active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })

  activeView = viewName
}

function stopCameraTransition() {
  cameraTransition = null
}

// Let a first-time visitor clearly see that the viewer button worked.
function focusViewer(message = 'VIEWER READY — DRAG TO ROTATE') {
  viewer.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'center'
  })

  viewer.style.outline = '2px solid #D4B477'
  viewer.style.outlineOffset = '4px'
  viewer.style.boxShadow = '0 0 28px #D4B47725'

  if (focusTimer) clearTimeout(focusTimer)

  focusTimer = setTimeout(() => {
    viewer.style.outline = ''
    viewer.style.outlineOffset = ''
    viewer.style.boxShadow = ''
    focusTimer = null
  }, 1500)

  if (modelLoaded) {
    status.textContent = message
  } else if (modelFailed) {
    status.textContent = 'MODEL FAILED TO LOAD'
  } else {
    status.textContent = 'LOADING MANSION...'
  }
}

function moveCameraTo(position, target, viewName = null) {
  if (!modelLoaded) {
    status.textContent = modelFailed
      ? 'MODEL FAILED TO LOAD'
      : 'LOADING MANSION...'
    return false
  }

  stopCameraTransition()

  cameraTransition = {
    startPosition: camera.position.clone(),
    endPosition: position.clone(),
    startTarget: controls.target.clone(),
    endTarget: target.clone(),
    startTime: performance.now(),
    duration: 850
  }

  controls.autoRotate = false
  setRotationButtonState()

  if (viewName) {
    setActiveCameraButton(viewName)
    status.textContent = `${viewName.toUpperCase()} VIEW`
  } else {
    status.textContent = 'VIEW RESET'
  }

  return true
}

function getCameraPreset(viewName) {
  const height = Math.max(modelSize.y, 1)
  const width = Math.max(modelSize.x, 1)
  const depth = Math.max(modelSize.z, 1)
  const radius = Math.max(width, height, depth) * 1.65

  if (viewName === 'top') {
    return {
      position: new THREE.Vector3(
        modelCenter.x + 0.04,
        modelCenter.y + radius * 1.25,
        modelCenter.z + 0.04
      ),
      target: new THREE.Vector3(
        modelCenter.x,
        height * 0.25,
        modelCenter.z
      )
    }
  }

  if (viewName === 'interior') {
    // Aim toward the model's central area.
    // Solid walls can still obstruct the view; this preset does not remove them.
    const insideDistance = Math.max(
      Math.min(width, depth) * 0.28,
      0.35
    )

    return {
      position: new THREE.Vector3(
        modelCenter.x + insideDistance,
        Math.max(height * 0.48, 0.35),
        modelCenter.z + insideDistance * 0.2
      ),
      target: new THREE.Vector3(
        modelCenter.x,
        Math.max(height * 0.4, 0.35),
        modelCenter.z
      )
    }
  }

  return {
    position: new THREE.Vector3(
      modelCenter.x + radius * 0.12,
      modelCenter.y + Math.max(height * 0.18, 0.5),
      modelCenter.z + radius
    ),
    target: modelCenter.clone()
  }
}

function selectCameraView(viewName, shouldFocus = true) {
  if (!['exterior', 'interior', 'top'].includes(viewName)) return

  const preset = getCameraPreset(viewName)
  const moved = moveCameraTo(preset.position, preset.target, viewName)

  if (shouldFocus) {
    focusViewer(
      moved
        ? `${viewName.toUpperCase()} VIEW`
        : 'LOADING MANSION...'
    )
  }
}

function resetCamera() {
  const moved = moveCameraTo(
    defaultCameraPosition,
    defaultTarget,
    'exterior'
  )

  if (moved) {
    setActiveCameraButton('exterior')
    focusViewer('DEFAULT VIEW RESTORED')
  }
}

// User interaction interrupts camera animations so controls remain responsive.
controls.addEventListener('start', () => {
  if (cameraTransition) {
    stopCameraTransition()
    status.textContent = 'DRAG TO EXPLORE'
  }
})

rotateBtn.addEventListener('click', () => {
  stopCameraTransition()
  controls.autoRotate = !controls.autoRotate
  setRotationButtonState()

  status.textContent = controls.autoRotate
    ? 'AUTO ROTATION ON'
    : 'DRAG TO EXPLORE'
})

resetBtn.addEventListener('click', resetCamera)

$('#zoom-in').addEventListener('click', () => {
  if (!modelLoaded) {
    status.textContent = 'LOADING MANSION...'
    return
  }

  stopCameraTransition()

  const direction = new THREE.Vector3().subVectors(
    camera.position,
    controls.target
  )
  const distance = direction.length()

  if (distance === 0) return

  direction.setLength(Math.max(distance * 0.8, controls.minDistance))
  camera.position.copy(controls.target).add(direction)
  controls.update()
  status.textContent = 'ZOOMED IN'
})

$('#zoom-out').addEventListener('click', () => {
  if (!modelLoaded) {
    status.textContent = 'LOADING MANSION...'
    return
  }

  stopCameraTransition()

  const direction = new THREE.Vector3().subVectors(
    camera.position,
    controls.target
  )
  const distance = direction.length()

  if (distance === 0) return

  direction.setLength(Math.min(distance * 1.2, controls.maxDistance))
  camera.position.copy(controls.target).add(direction)
  controls.update()
  status.textContent = 'ZOOMED OUT'
})

// Preset buttons: choose a view and return to the viewer.
document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    selectCameraView(button.dataset.view)
  })
})

// Feature cards have a distinct role: jump straight to a matching viewpoint.
document.querySelectorAll('[data-feature-view]').forEach((card) => {
  card.addEventListener('click', () => {
    selectCameraView(card.dataset.featureView)
  })
})

// Main call-to-action buttons return users to the interactive model.
function returnToViewer() {
  focusViewer('READY TO EXPLORE — DRAG TO ROTATE')
}

$('#hero-explore').addEventListener('click', returnToViewer)
$('#explore-btn').addEventListener('click', returnToViewer)
$('#closing-explore').addEventListener('click', returnToViewer)

// Fullscreen with graceful error handling.
fullscreenBtn.addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) {
      await viewer.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  } catch (error) {
    console.warn('Fullscreen is not available in this browser:', error)
    status.textContent = 'FULLSCREEN NOT AVAILABLE'
  }
})

document.addEventListener('fullscreenchange', () => {
  const isFullscreen = document.fullscreenElement === viewer

  fullscreenBtn.textContent = isFullscreen ? '⤢' : '⛶'
  fullscreenBtn.setAttribute(
    'aria-label',
    isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'
  )

  requestAnimationFrame(resizeRenderer)
})

// Responsive renderer.
function resizeRenderer() {
  const width = container.clientWidth
  const height = container.clientHeight

  if (!width || !height) return

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(width, height)
}

const resizeObserver = new ResizeObserver(resizeRenderer)
resizeObserver.observe(container)
window.addEventListener('resize', resizeRenderer)

// Smooth interpolation between camera presets.
function updateCameraTransition(now) {
  if (!cameraTransition) return

  const transition = cameraTransition
  const rawProgress = Math.min(
    (now - transition.startTime) / transition.duration,
    1
  )
  const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress)

  camera.position.lerpVectors(
    transition.startPosition,
    transition.endPosition,
    easedProgress
  )

  controls.target.lerpVectors(
    transition.startTarget,
    transition.endTarget,
    easedProgress
  )

  if (rawProgress >= 1) {
    camera.position.copy(transition.endPosition)
    controls.target.copy(transition.endTarget)
    cameraTransition = null
  }
}

// Animation loop.
const clock = new THREE.Clock()

function animate(now) {
  requestAnimationFrame(animate)

  const elapsed = clock.getElapsedTime()
  particles.rotation.y = elapsed * 0.012

  updateCameraTransition(now || performance.now())
  controls.update()
  renderer.render(scene, camera)
}

setRotationButtonState()
animate()
