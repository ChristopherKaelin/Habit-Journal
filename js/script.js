window.addEventListener("DOMContentLoaded", () => {
  const hasData =
    localStorage.getItem("habitDefinitions") &&
    localStorage.getItem("habitLogs");

  if (!hasData) {
    seedDemoData();
  }
});


