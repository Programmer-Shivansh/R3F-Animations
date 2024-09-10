/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 models/bhoot.gltf 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useCharacterAnimations } from '../context/CharAnimation'
const Bhootiya = (props)=> {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/bhoot.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const {setAnimations,animationsIndex} = useCharacterAnimations();
  const { nodes, materials } = useGraph(clone)
  const { actions,names } = useAnimations(animations, group)
  // console.log(names)
  React.useEffect(()=>{
    setAnimations(names)
  },[names ])


  // React.useEffect(() => {
  //   actions['ArmatureAction'].play()
  //   return () => void actions['ArmatureAction'].stop()
  // }, [actions])
  React.useEffect(()=>{
    actions[names[animationsIndex]].reset().fadeIn(0.5).play();
    return () => {actions[names[animationsIndex]].fadeOut(0.5).stop()};
  },[animationsIndex])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig_Hips} />
          <skinnedMesh castShadow name="Group1" geometry={nodes.Group1.geometry} material={nodes.Group1.material} skeleton={nodes.Group1.skeleton} />
        </group>
      </group>
    </group>
  )
}
export default Bhootiya
useGLTF.preload('/bhoot.gltf')
