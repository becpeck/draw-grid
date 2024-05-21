import "./App.css";
import Grid from "./components/Grid";
import { useState } from "react";
import ArrayOutput from "./components/ArrayOutput";
import GridControls from "./components/GridControls";

const defaultGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export default function App() {
  const [emptyGrid, setEmptyGrid] = useState(defaultGrid);
  const [grid, setGrid] = useState(emptyGrid);

  const clearGrid = () => setGrid(emptyGrid);

  const changeRowCount = (newRows: number) => {
    const newEmptyGrid = Array.from({ length: newRows }, (_) => emptyGrid[0]);
    setEmptyGrid(newEmptyGrid);
    const newGrid = [...grid].concat(newEmptyGrid).slice(0, newRows);
    setGrid(newGrid);
  }

  const changeColCount = (newCols: number) => {
    const emptyRow: number[] = Array(newCols).fill(0);
    setEmptyGrid(emptyGrid.map(() => [...emptyRow]))
    const newGrid = grid.map(row => row.concat(emptyRow).slice(0, newCols))
    setGrid(newGrid);
  }

  const toggleCellValue = (cellRow: number, cellCol: number) => {
    setGrid(
      grid.map((row, r) => (
        row.map((val, c) => {
          if (r === cellRow && c === cellCol) {
            return val == 0 ? 1 : 0;
          }
          return val;
        })
      ))
    )
  }
  
  return (
    <main className="flex justify-center mt-10 gap-10">
      <Grid grid={grid} toggleCellValue={toggleCellValue}/>
      <div className="flex flex-col gap-5">
        <GridControls
          rows={grid.length}
          cols={grid[0].length}
          clearGrid={clearGrid}
          changeRowCount={changeRowCount}
          changeColCount={changeColCount}
        />
        <ArrayOutput grid={grid}/>
      </div>
    </main>
  )
}
