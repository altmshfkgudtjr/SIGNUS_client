// debounce(<함수>, <시간 : ms>)
export function debounce(func, wait=200) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// throttle(<함수>, <시간 : ms>)
export const throttle = (func, limit=200) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit)
    }
  }
}