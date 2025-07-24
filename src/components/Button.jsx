// Button.js
function Button({ title, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: 10, backgroundColor: 'blue', color: 'white' }}>
      {title}
    </button>
  );
}

export default Button;