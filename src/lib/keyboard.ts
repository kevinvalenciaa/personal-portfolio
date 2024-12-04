export const keyboardShortcuts = {
  ESCAPE: "Escape",
  ENTER: "Enter",
  SPACE: " ",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft", 
  ARROW_RIGHT: "ArrowRight",
  TAB: "Tab",
  HOME: "Home",
  END: "End",
};

export function isKey(event: KeyboardEvent, key: string): boolean {
  return event.key === key;
}
