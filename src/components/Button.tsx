// src/components/Button.tsx
import styled from "styled-components";

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.variant === "secondary"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  color: white;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
