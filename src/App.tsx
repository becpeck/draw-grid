import "./App.css";
import Grid from "./components/Grid";
import { useState } from "react";
import ArrayOutput from "./components/ArrayOutput";

const defaultGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export default function App() {
  const [grid, setGrid] = useState(defaultGrid);
  const clearGrid = () => setGrid(defaultGrid);
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
      <div className="flex flex-col gap-10">
        <Grid grid={grid} toggleCellValue={toggleCellValue}/>
      </div>
      <ArrayOutput grid={grid} clearGrid={clearGrid}/>
    </main>
  )
}
