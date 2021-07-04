import StratagemSpan from "../../StratagemSpan/StratagemSpan";

function PhaseBox(props) {
  let bgColor;

  switch (props.type) {
    case "gray":
      bgColor = "bg-secondary";
      break;

    case "red":
      bgColor = "bg-danger";
      break;

    default:
      bgColor = "bg-success";
  }

  return (
    <div className={`mx-3 my-2 p-1 ${bgColor} border border-2 border-dark text-white`}>
      <h3 className="mb-0">{props.phase}</h3>
      <hr className="mt-0 mb-1" />
      {props.stratagems.map((stratagem) => {
        return (
          <StratagemSpan
            key={stratagem.id}
            name={stratagem.name}
            dynasty={stratagem.dynasty}
            source={stratagem.source}
          />
        );
      })}
    </div>
  );
}
export default PhaseBox;
