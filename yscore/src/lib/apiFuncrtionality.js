import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
});

const loginAxios = async (value) => {
  try {
    const res = await instance.post("/users/login", value);
    if (res) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const logoutAxios = async () => {
  try {
    const res = await instance.get("/users/logout");
    if (res) return res.data.ok;
  } catch (err) {
    console.log(err);
  }
};

const signupAxios = async (value) => {
  try {
    const res = await instance.post("/users/signup", value);
    if (res) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const updateUserInfoAxios = async (value) => {
  console.log('dirk')
  try {
    const res = await instance.put("/users/updateUserInfo", value);
    console.log("res", res.data);
    // if (res) return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserInfoAxios = async (value) => {
  try {
    const res = await instance.get("/users/getUser", value);
    if (res) return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { loginAxios, logoutAxios, signupAxios, updateUserInfoAxios, getUserInfoAxios };
