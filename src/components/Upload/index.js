import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMsg } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMsg>Vamos criar a sua lista de filme aqui</UploadMsg>
    }

    if(isDragReject) {
      return <UploadMsg type="error">Eii,arquivo para sua lista de filme não suportado</UploadMsg>
    }

    return <UploadMsg type="success">Solte sua imagem para iniciar sua a lista de filmes</UploadMsg>
  };

  render() {
    const { onUpload } = this.props;
    
    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload }>
        {({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()}/>
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
