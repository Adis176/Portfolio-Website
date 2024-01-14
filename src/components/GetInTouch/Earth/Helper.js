import "./Helper.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
// import { TopSection } from "./components/topSection";

const CanvasContainer = styled.div`
  width: 110%;
  height: 100%;
`;

function Helper() {
  return (
    <CanvasContainer style={{  position: 'relative', }}>
      <Canvas style={{position: 'relative'}}>
        <Suspense fallback={null} style={{position: 'relative'}}>
          <Earth style={{position: 'relative'}}/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default Helper;