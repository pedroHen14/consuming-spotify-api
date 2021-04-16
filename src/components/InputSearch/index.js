import { Container, IconSearch } from "./styles";
import { useRef } from "react";

function InputSearch({ id, value, handler, ...rest }) {
  const inputRef = useRef();

  return (
    <Container>
      <input
        id={id}
        type="search"
        {...rest}
        placeholder="Procurar"
        value={value}
        onChange={handler}
        ref={inputRef}
      />
      <IconSearch onClick={() => inputRef.current.focus()} />
    </Container>
  );
}

export default InputSearch;
