import styled from 'styled-components';

interface ImageProps {
  layout?: string;
  margin?: string;
  width?: string;
  height?: string;
  radius?: string;
  objectFit?: React.CSSProperties['objectFit'];
  cursor?: React.CSSProperties['cursor'];
}

const Image = styled.img<ImageProps>`
  display: inline-block;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.layout};
  border-radius: ${(props) => props.radius};
  object-fit: ${(props) => props.objectFit};
  cursor: ${({ cursor }) => cursor};
`;

export default Image;
