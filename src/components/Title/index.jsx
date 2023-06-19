const Title = ({ descrizione, children }) => {
  const elementoRef = useRef(null);

  const showDescription = () => {
    const descrizioneElemento = elementoRef.current.getAttribute('title');
    descrizioneContainer.textContent = descrizioneElemento;
  };

  const hideDescription = () => {
    const descrizioneContainer = document.getElementById('descrizione-container');
    descrizioneContainer.textContent = '';
  };

  return (
    <div
      ref={elementoRef}
      title={description}
      onMouseOver={showDescription}
      onMouseLeave={hideDescription}
    >
      {children}
    </div>
  );
};

export default Title;
