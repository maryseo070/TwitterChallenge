export const searchHandles = handle => {
  debugger
  return $.ajax({
    method: "GET",
    url: "/api/clients",
    data: { handle }
  });
};
