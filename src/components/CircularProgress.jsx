import styled from "styled-components";

const getProgess = ({completed}) => completed

const CircularProgress = styled.div`
  background-color: #fefefe;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  transition: 1s;

  clip-path: circle(${getProgess}% at 50% 100%);
`;

export default CircularProgress