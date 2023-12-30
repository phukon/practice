type FuncProps = [string, boolean, number];

function func(yo: string, go: boolean, ewfewf: number): number | string {
  let fuckerrrrr = 323;
  return go ? ewfewf + fuckerrrrr : yo;
}

const props: FuncProps = ['yoooo', true, 34];

console.log(func(...props));
