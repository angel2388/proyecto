import config from "./config";

export const Util = (setDisabled, navigate) => {
  const tokenOBJ = localStorage.token;
  if (!tokenOBJ) {
    navigate("/login");
  }
  const tokenData = JSON.parse(tokenOBJ);

  fetch(`${config.HOSTNAME}/api/private`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokenData.token}`,
    },
  })
    .then((res) => {
      console.log({ res });
      return res.json();
    })
    .then((data) => {
      console.log({ data });
      setDisabled(false);
    });
};
