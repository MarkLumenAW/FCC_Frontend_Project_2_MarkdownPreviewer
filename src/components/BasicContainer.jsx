export default function Container(props) {
  return (
    <div style={{
      width: '70vw',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '2rem',
      boxShadow: '0 0 20px 0 rgba(0,0,0,0.2)',
    }}>
       {props.children}
    </div>
  );
};
