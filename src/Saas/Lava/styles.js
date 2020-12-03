import styled, { keyframes } from 'styled-components';
// https://codepen.io/mylesz123/pen/ExgVGOd
const blob1 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-700%);
  }
}`;

const blob2 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-420%);
  }
}`;

const blob3 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-305%);
  }
}`;

const blob4 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-605%);
  }
}`;

const blob5 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-700%);
  }
}`;

const blob6 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-700%);
  }
}`;

const blob7 = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-300%);
  }
}`;

const wobble = keyframes`
  50% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }
  100% {
    border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
  }
}`;

const LavaLamp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 100vh;
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  z-index: -1;

  .lava {
    filter: url('#goo');
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const Blob = styled.div`
  border-radius: 50%;
  background: #090a0f;
  /* Other sample colors:
    Orange: #e8630a
    Pink: #EA3281
    Fuscia: #E71669
    Purple: #661BAC
    Yellow: #FDC600
    Kermit green: #75AC25
    Light blue: #3283B5
    Dark blue: #0A5D9A
    Gunmetal: #232F37
    BGLight: #1B2735
    BGDark: #090a0f
    Want more colors? check out https://coolors.co/ for inspiration.
    */
  position: absolute;

  &.fade {
    opacity: 0.5;
  }

  &:nth-child(1) {
    width: 200px;
    height: 200px;
    left: 35%;
    bottom: -15%;

    animation: ${wobble} 4s ease-in-out alternate infinite,
      ${blob1} ease-in-out 13s infinite;
  }

  &:nth-child(2) {
    width: 330px;
    height: 330px;
    right: 24%;
    bottom: -65%;

    @media only screen and (max-width: 45em) {
      display: none;
    }

    animation: ${wobble} 5s ease-in-out alternate infinite,
      ${blob2} ease-in-out 22s infinite;
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    bottom: -15%;
    left: 34%;

    animation: ${wobble} 6s ease-in-out alternate infinite,
      ${blob3} ease-in-out 16s infinite;
  }

  &:nth-child(4) {
    width: 235px;
    height: 235px;
    bottom: -19%;
    left: 30%;

    animation: ${wobble} 7s ease-in-out alternate infinite,
      ${blob4} ease-in-out 12s infinite;
  }

  &:nth-child(4) {
    width: 235px;
    height: 235px;
    bottom: -19%;
    left: 30%;
    animation: ${wobble} 8s ease-in-out alternate infinite,
      ${blob4} ease-in-out 12s infinite;
  }

  &:nth-child(5) {
    width: 55px;
    height: 55px;
    bottom: -25%;
    left: 34%;

    animation: ${wobble} 9s ease-in-out alternate infinite,
      ${blob5} ease-in-out 32s infinite;
  }

  &:nth-child(6) {
    width: 35px;
    height: 35px;
    bottom: -25%;
    right: 34%;

    animation: ${wobble} 10s ease-in-out alternate infinite,
      ${blob6} ease-in-out 12s infinite;
  }

  &:nth-child(7) {
    width: 435px;
    height: 435px;
    bottom: -85%;
    right: 40%;

    @media only screen and (max-width: 45em) {
      display: none;
    }

    animation: ${wobble} 11s ease-in-out alternate infinite,
      ${blob7} ease-in-out 32s infinite;
  }
`;

export { LavaLamp as default, Blob };
