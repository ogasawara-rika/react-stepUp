/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 8px;
  `;
  const titleStyle = css({
    color: "red"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-Emotion-</p>
      <SButton>FIGHT</SButton>
    </div>
  );
};

const SButton = styled.button`
  border: none;
`;
