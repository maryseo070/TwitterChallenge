export const searchHandles = handle => {
  return $.ajax({
    method: "GET",
    url: "/api/clients",
    data: { handle }
  });
};
