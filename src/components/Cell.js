function Cell({ cell, onClick }) {
  let colorClassName = "bg-white";

  switch (cell.value) {
    case "R":
      colorClassName = "bg-red-500";
      break;
    case "B":
      colorClassName = "bg-black";
      break;
    case "":
      colorClassName = "bg-white";
      break;
    default:
      colorClassName = "bg-pink-500";
  }

  return (
    <div
      className={`w-full h-32 bg-yellow-500 flex justify-center items-center ${
        cell.clickable ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <div className={`w-24 h-24 rounded-full  ${colorClassName}`}></div>
    </div>
  );
}

export default Cell;
