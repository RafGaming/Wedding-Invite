window.addEventListener("mousemove", handler);

return () => window.removeEventListener("mousemove", handler);
