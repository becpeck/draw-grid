type GridCellProps = {
  cellValue: number;
  toggleValue: () => void;
};

export default function GridCell(props: GridCellProps) {
  const { cellValue, toggleValue } = props;

  return (
    <div
      className={`w-12 h-12 border-gray-900 border ${cellValue ? "bg-gray-800 hover:bg-gray-700" : "hover:bg-gray-200"}`}
      onClick={toggleValue}
    >
    </div>
  );
}
 