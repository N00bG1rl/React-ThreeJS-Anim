import React, { Fragment, Suspense, useRef, useEffect } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import { useInView } from 'react-intersection-observer'

import Header from './components/Header'
import { Section } from './components/Section'
import state from './components/State'
import './App.css'

const Model = ({ modelPath }) => {
  const gltf = useGLTF(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Lights = () => {
  return (
    <Fragment>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight position={[1000, 0, 0]} intensity={1} castShadow />
    </Fragment>
  )
}

const HTMLContent = ({
  bgColor,
  domContent,
  children,
  modelPath,
  positionY,
}) => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))

  const [refItem, inView] = useInView({
    threshold: 0,
  })
  useEffect(() => {
    inView && (document.body.style.background = bgColor)
  }, [inView, bgColor])

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[0, -35, 0]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html portal={domContent} fullscreen>
          <div className='container' ref={refItem}>
            {children}
          </div>
        </Html>
      </group>
    </Section>
  )
}

function App() {
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = elem => (state.top.current = elem.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <Fragment>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath='armchairYellow.gltf'
            positionY={250}
            bgColor='#f15946'
          >
            <h1 className='title'>Yellow</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath='/armchairGreen.gltf'
            positionY={0}
            bgColor='#571ec1'
          >
            <h1 className='title'>Green</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath='/armchairGray.gltf'
            positionY={-250}
            bgColor='#636567'
          >
            <h1 className='title'>Gray</h1>
          </HTMLContent>
        </Suspense>
      </Canvas>
      <div className='scrollArea' ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </Fragment>
  )
}

export default App
