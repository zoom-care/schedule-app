import styled from "styled-components";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 1px;
  &.plr-10 {
    padding-left: 10px;
    padding-right: 10px;
  }
  &.mr-15 {
    margin-right: 35px;
  }
`;

export const ComponentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.w-500 {
    width: 50vw;
  }
  &.pointer {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--zc-grey);
  padding: 0.7rem;
  margin-top: 0.2rem;
  cursor: pointer;
`;

export const BreadcrumbLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--zc-grey-2);
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-right: 10px;
  color: var(--zc-grey-2);
`;

export const BreadcrumbItemSeparator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 1rem;
`;

export const AppointmentLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 0.5rem;
`;

export const AppointmentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  &.bg-white {
    background-color: white;
  }
  &.bg-green {
    background-color: greenyellow;
  }
  &.bg-yellow {
    background-color: yellow;
  }
`;

export const AppointmentItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AppointmentItemRow = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  &.bg-white {
    background-color: white;
  }
  &.bg-green {
    background-color: greenyellow;
  }
  &.bg-yellow {
    background-color: yellow;
  }
  &.pd-0 {
    padding: 0rem;
  }
  &.pd-1 {
    padding: 1rem;
  }
  &.pr-1 {
    padding-right: 1rem;
  }
`;

export const AppointmentItemColumn = styled.div`
  display: flex;
  flex-direction: column;

  &.w-start {
    justify-content: flex-start;
  }

  &.bg-white {
    background-color: white;
  }
  &.bg-green {
    background-color: greenyellow;
  }
  &.bg-yellow {
    background-color: yellow;
  }
  &.w-50 {
    width: 50%;
  }
  &.w-25 {
    width: 25%;
  }
  &.w-75 {
    width: 75%;
  }
  &.w-30 {
    width: 30%;
  }
  &.w-70 {
    width: 70%;
  }
  &.p-1 {
    padding: 1rem;
  }
  &.pr-1 {
    padding-right: 1rem;
  }
`;

export const AppointmentItemColumnContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.w-start {
    justify-content: flex-start;
  }
  &.fd-column {
    flex-direction: column;
  }
  &.bg-blue {
    background-color: blue;
  }
`;

export const AppointmentItemColumnContent2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZCButton = styled.button`
  // eventually remove this margin and handle it within containers
  margin: 1.2rem 0;
  background: var(--zc-darkblue);
  color: white;
  font-family: inherit;
  position: relative;
  text-align: center;
  cursor: pointer;
  /* white-space: nowrap; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  width: 100%;
  max-width: 31.5rem;
  min-height: 2.6rem;
  padding: 0.2em;
  font-size: 1.2rem;
  //font-weight: 700;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background: var(--zc-blue);
  }
`;
