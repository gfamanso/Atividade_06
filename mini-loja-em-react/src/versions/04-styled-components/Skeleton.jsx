import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const StyledSkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.cardShadow};
`;

const AnimatedBackground = styled.div`
  background: linear-gradient(90deg, 
    ${props => props.theme.skeletonLight} 25%, 
    ${props => props.theme.skeletonMedium} 50%, 
    ${props => props.theme.skeletonLight} 75%
  );
  background-size: 200px 100%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

const SkeletonImage = styled(AnimatedBackground)`
  aspect-ratio: 1 / 1;
  width: 100%;
`;

const SkeletonDetails = styled.div`
  padding: 1rem;
`;

const SkeletonLine = styled(AnimatedBackground)`
  height: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
`;

const SkeletonTitle = styled(SkeletonLine)`
  height: 2rem;
  margin-bottom: 0.5rem;
`;

const SkeletonPrice = styled(SkeletonLine)`
  width: 60%;
  height: 1.5rem;
`;

const Skeleton = () => {
  return (
    <StyledSkeletonCard>
      <SkeletonImage />
      <SkeletonDetails>
        <SkeletonTitle />
        <SkeletonLine />
        <SkeletonPrice />
      </SkeletonDetails>
    </StyledSkeletonCard>
  );
};

export default Skeleton;