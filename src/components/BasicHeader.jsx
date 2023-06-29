import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function BasicHeader(props) {

  const dispatch = useDispatch();

  const [iconColor, setIconColor] = useState('white');
  const handleMouseEnter = () => {
    setIconColor('#e2e8f0'); 
  };

  const handleMouseLeave = () => {
    setIconColor('white'); 
  };

  return (
    <div className="container-header" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '3rem',
      backgroundColor: '#0369a1',
      fontWeight: 'bold',
      color: 'white',
    }}>
      <div className="header" style={{ padding: '0 1rem', fontWeight:'400' }}>{props.name}</div>
      <div className="close-icon" style={{ padding: '0 1rem' }} >
        <span
          style={{ color: iconColor, cursor: 'pointer',  transition: '0.3s'  }}
          onClick={() => dispatch(props.switchHandler())}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.switch ?
            <Icon icon="material-symbols:close" /> :
            <Icon icon="clarity:shrink-line" />}
        </span>
      </div>
    </div>
  );
};
