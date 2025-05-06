let navigate;

export const setNavigate = (nav) => {
  navigate = nav;
};

export const goTo = (path) => {
  if (navigate) {
    navigate(path);
  } else {
    console.error("Navigate function not initialized yet");
  }
};