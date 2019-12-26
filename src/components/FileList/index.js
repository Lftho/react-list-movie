import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map(uploadedFile => (
    <li key={uploadedFile.id}>
      <FileInfo>
        <Preview src={uploadedFile.preview} />
        <div>
          <strong>{uploadedFile.name}</strong>
          <span>
            {uploadedFile.readableSize}
            {!!uploadedFile.url && (
              <button onClick={() => onDelete(uploadedFile.id)}>Remover</button>
            )}
          </span>
        </div>
      </FileInfo>

      <div>
        {!uploadedFile.uploaded 
          && !uploadedFile.error && (
            <CircularProgressbar
            styles={{
              root: { width: 24, marginBottom: 15, marginRight: 5 },
              path: { stroke: '#00cc00'  }
            }}
            strokeWidth={10}
            porcentage={uploadedFile.progress}
          />       
        )}

        {uploadedFile.url && (
        <a 
          href={uploadedFile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8}} size={24} color="#222" />
        </a>
        )}

        {uploadedFile.uploaded && <MdCheckCircle size={24} color="#00cc00" />}
        {uploadedFile.error && <MdError size={24} color="#e57878" />}
      </div>
    </li>
  ))}
  </Container>
);

export default FileList;
