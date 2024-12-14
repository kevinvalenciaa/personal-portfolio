export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = React.useState(initialValue);
  
  const toggle = React.useCallback(() => setValue(v => !v), []);
  const setTrue = React.useCallback(() => setValue(true), []);
  const setFalse = React.useCallback(() => setValue(false), []);
  
  return { value, toggle, setTrue, setFalse, setValue };
}
