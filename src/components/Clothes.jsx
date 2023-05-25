/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 clothes.gltf --transform
Author: The Latest Shit (https://sketchfab.com/thelatestshit)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/clothes-donation-box-dd49d7eb69b244f3912c4534d8848cba
Title: clothes donation box
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/clothes-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Kleider_Spende} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/clothes-transformed.glb')