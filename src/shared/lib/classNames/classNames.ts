type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods) //Mods нужны для динамических наименований класса true/false
      .filter(([className, value]) => value)
      .map(([className, value]) => className),
  ].join(" ");
}
