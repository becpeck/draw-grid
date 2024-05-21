import GridCell from "./GridCell";
import { twMerge } from "tailwind-merge";

type GridProps = {
  grid: number[][];
  toggleCellValue: (row: number, col: number) => void;
};

export default function Grid({grid, toggleCellValue}: GridProps) {
  return (
    <section className="flex h-fit">
      <div
        className={twMerge(`grid border border-gray-900`)}
        style={{
          gridTemplateRows: `repeat(${grid.length}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${grid[0].length}, minmax(0, 1fr))`,
        }}
      >
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