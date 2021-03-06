import styled from "styled-components";
import { dateConverter } from "../../utils/dateConverter";
import CreatedIcon from "../../public/svg/created.svg";
import SpecieIcon from "../../public/svg/specie.svg";

export default function Card({ data }) {
  return (
    <Wrapper>
      <CardBox>
        <Title>{data.name}</Title>
        <Box>
          <CreatedIcon />
          <Text>{dateConverter(data.created)}</Text>
        </Box>
        <Box>
          <SpecieIcon />
          <Text>{data.species}</Text>
        </Box>
      </CardBox>
    </Wrapper>
  );
}

const CardBox = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  div + div {
    margin-top: 0.5rem;
  }
`;
const Wrapper = styled.div`
  width: 33.3333%;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  border-radius: 0.75rem;
  padding: 0.15rem;
  &:nth-of-type(odd) {
    background: linear-gradient(var(--white), var(--white)) padding-box,
      linear-gradient(90deg, #117c3c, #15bb58) border-box;
  }
  &:nth-of-type(even) {
    background: linear-gradient(var(--white), var(--white)) padding-box,
      linear-gradient(90deg, #5a1988, #8415d4) border-box;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Box = styled.div`
  display: flex;
  font-size: 1.7rem;
  font-weight: 400;
  gap: 0.6rem;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 1.2rem;
`;
const Text = styled.p`
  color: var(--grey);
`;
