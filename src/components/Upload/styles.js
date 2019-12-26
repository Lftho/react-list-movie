import styled, { css } from 'styled-components';

/**  Variaveis criadas para fazer condições 
 * e quando for criar uma lista filme, é só colocar a imagem
 * */
const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const msgColor = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5',
};

export const UploadMsg = styled.p`
  display: flex;
  color: ${props => msgColor[props.type || 'default' ]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;