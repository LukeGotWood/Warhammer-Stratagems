function StratagemSpan(props) {
  return (
    <p>
      {props.name}{" "}
      <i>
        ({props.source} - {props.type})
      </i>
    </p>
  );
}

export default StratagemSpan;
