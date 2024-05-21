type ArrayOutputProps = {
  grid: number[][];
};

export default function ArrayOutput({ grid }: ArrayOutputProps) {

  const outputContents = `[${grid.map(row => `[${row.join(", ")}]`).join(",\n ")}]`;

  const onClickCopy = async () => {
    await navigator.clipboard.writeText(outputContents)
  };
  
  return (
    <div className="flex flex-col w-[200px] gap-1">
      <div className="border-gray-300">
        <div className="flex justify-between align-center">
          <label className="my-auto ps-1 font-semibold" htmlFor="output">
            Output
          </label>
          <button
            className="bg-gray-400 py-1 px-2 rounded hover:bg-gray-400/90 active:brightness-90"
            onClick={onClickCopy}
          >
            Copy
          </button>
        </div>
      </div>
      <textarea
        className={`border border-gray-300 bg-gray-100 p-2`}
        value={outputContents}
        rows={grid.length}
        id="output"
        readOnly
      >
      </textarea>
    </div>
  );    
}
