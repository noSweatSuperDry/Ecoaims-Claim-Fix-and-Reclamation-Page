export default function Modal(props) {
  const handleConfirm = () => {
    props.onConfirm();
    props.onClose();
  };

  return (
    <div>
      <div className="loginForm">
        <h1>{props.title}</h1>
        <h2>{props.message}</h2>
        <div>
          <button className="idPassCard" onClick={props.onClose}>
            Cancel
          </button>
          <button className="idPassCard" onClick={handleConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
