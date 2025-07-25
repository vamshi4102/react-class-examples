// Button.js
function Button({ title, onClick,isActive=false }) {
  return (
    <button onClick={onClick} style={{ padding: 10, backgroundColor: isActive?"green":'blue', color: 'white' }}>
      {title}
    </button>
  );
}

export default Button;