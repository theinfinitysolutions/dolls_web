"use client";
import { useEffect, memo } from "react";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { easing } from "maath";
import "./util";
import useStore from "@/utils/store";
import { useRouter } from "next/navigation";

let imagesArray = [
  "dolls1.jpeg",
  "dolls2.jpeg",
  "dolls3.jpeg",
  "dolls5.jpeg",
  "dolls40.jpeg",
  "dolls41.jpeg",
  "dolls42.jpeg",
  "dolls43.jpeg",
];

const CarouselComponent = ({ eventsDisabled }) => {
  const router = useRouter();
  const { currentPointer, setCurrentPointer } = useStore();

  const [isHeightGreaterThanWidth, setIsHeightGreaterThanWidth] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsHeightGreaterThanWidth(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onClick={() => {
        router.push("/media");
      }}
      className="flex flex-col items-start lg:max-h-[80vh] h-[45vh] lg:h-[80vh] w-[100vw] lg:w-[50vw] "
    >
      <Canvas
        // onMouseEnter={() => {
        //   setCurrentPointer("i");
        // }}
        // onMouseLeave={() => {
        //   setCurrentPointer("");
        // }}
        camera={{
          position: [0, 0, 100],
          fov: isHeightGreaterThanWidth ? 17 : 15,
        }}
        className="w-10/12 lg:w-[50vw] h-[50vh] lg:h-[80vh] bg-transparent items-start cursor-pointer "
      >
        <fog attach="fog" args={["#a79", 8.5, 12]} />

        <ScrollControls enabled={!eventsDisabled} pages={4} infinite>
          <Rig rotation={[0, 0, 0.25]}>
            <Carousel />
          </Rig>
          <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
        {/* <Environment preset="dawn" background blur={0.5} /> */}
      </Canvas>
    </div>
  );
};

export default memo(CarouselComponent);

function Rig(props) {
  const ref = useRef();
  const { hoverCarousel } = useStore();
  const scroll = useScroll();
  useFrame((state, delta) => {
    // Add rotation based on time
    // ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    ref.current.rotation.y += hoverCarousel ? 0 : delta * 0.5;
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 11],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return (
    <group
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        console.log("Pointer out of group element");
      }}
      ref={ref}
      {...props}
    />
  );
}

function Carousel({ radius = 1.3, count = 8 }) {
  let array = imagesArray.map((url, i) => {
    return (
      <Card
        key={i}
        url={`/${url}`}
        position={[
          Math.sin((i / count) * Math.PI * 2) * radius,
          0,
          Math.cos((i / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      />
    );
  });

  return array;
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  const pointerOver = (e) => (
    e.stopPropagation(), hover(true), useStore.setState({ hoverCarousel: true })
  );
  const pointerOut = () => (
    hover(false), useStore.setState({ hoverCarousel: false })
  );
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.25 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.05 : 0.01,
      0.22,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture("/dollstxt.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.13, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}
