import React, { useState } from 'react';

// Importa os componentes de cada versão
import AppVersion1 from './versions/01-css-global/index.jsx';
import AppVersion2 from './versions/02-css-modules/index.jsx';
import AppVersion3 from './versions/03-tailwind/index.jsx';
import AppVersion4 from './versions/04-styled-components/index.jsx';

// Mapeia cada versão a um componente
const versions = {
  'CSS Global': AppVersion1,
  'CSS Modules': AppVersion2,
  'Tailwind CSS': AppVersion3,
  'Styled-Components': AppVersion4,
};

const AppSwitcher = () => {
  const [activeVersion, setActiveVersion] = useState('Tailwind CSS'); // Define a versão padrão

  const ActiveComponent = versions[activeVersion];

  return (
    <div>
      {/* Seletor de Versão */}
      <div style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Alternar Versão de Estilo</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {Object.keys(versions).map((versionName) => (
            <button
              key={versionName}
              onClick={() => setActiveVersion(versionName)}
              style={{
                padding: '8px 16px',
                border: '1px solid #000',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: activeVersion === versionName ? '#000' : '#fff',
                color: activeVersion === versionName ? '#fff' : '#000',
              }}
            >
              {versionName}
            </button>
          ))}
        </div>
      </div>
      
      {/* Renderiza o componente ativo */}
      <ActiveComponent />
    </div>
  );
};

export default AppSwitcher;