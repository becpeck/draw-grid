type GridControlsProps = {
  rows: number,
  cols: number,
  clearGrid: () => void;
  changeRowCount: (rowCount: number) => void;
  changeColCount: (colCount: number) => void;
};

export default function GridControls(props: GridControlsProps) {
  const { rows, cols, clearGrid, changeRowCount, changeColCount } = props;



  return (
    <div className="flex flex-col gap-1">
      <button
        className="bg-gray-400 py-1 px-2 rounded hover:bg-gray-400/90 active:brightness-90 font-semibold"
        onClick={clearGrid}
      >
        Clear Grid
      </button>
      <div className="flex gap-2">
        <label htmlFor="rows" className="font-semibold">Rows</label>
        <input
          id="rows"
          type="number"
          value={rows}
          onChange={(evt) => (changeRowCount(Math.min(15,parseInt(evt?.target.value) || 1)))}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="cols" className="font-semibold">Columns</label>
        <input
          id="cols"
          type="number"
          value={cols}
          onChange={(evt) => (changeColCount(Math.min(15,parseInt(evt?.target.value) || 1)))}
        />
      </div>
    </div>
  );
}
