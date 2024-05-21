import GridCell from "./GridCell";
import { twMerge } from "tailwind-merge";

type GridProps = {
  grid: number[][];
  toggleCellValue: (row: number, col: number) => void;
};

export default function Grid({grid, toggleCellValue}: GridProps) {
  return (
    <section className="flex h-fit">
      <div className={twMerge(`grid grid-rows-${grid.length} grid-cols-${grid[0].length} border border-gray-900`)}>
        {grid.map((row, r) => (
          row.map((value, c) => (
            <GridCell
              key={`${r},${c}`}
              cellValue={value}
              toggleValue={() => toggleCellValue(r, c)}
            />
          ))
        ))}
      </div>
    </section>
  );
}