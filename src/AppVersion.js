import React from 'react';
import packagejson from '../../../package.json';

const AppVersion=({style})=> {  
  return (
    <div style={style}>
      <p>v{packagejson.version}</p>
    </div>
  );
}
export default AppVersion;