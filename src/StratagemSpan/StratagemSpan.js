function StratagemSpan(props) {
  return (
    <p>
      {props.name}{" "}
      <i>
        ({props.dynasty} - {props.source})
      </i>
    </p>
  );
}

export default StratagemSpan;
