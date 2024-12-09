export const notifications = {
  success: (message: string) => console.log("✅", message),
  error: (message: string) => console.error("❌", message),
  warning: (message: string) => console.warn("⚠️", message),
  info: (message: string) => console.info("ℹ️", message),
};

export function showNotification(type: keyof typeof notifications, message: string) {
  notifications[type](message);
}
