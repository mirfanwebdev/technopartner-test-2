import { useState } from "react";
import logo from "../../assets/logo-technopartner.png";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: form.email,
      password: form.password,
      grant_type: "password",
      client_id: "e78869f77986684a",
      client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
    };

    dispatch(authLogin(payload)).then(() => navigate("/home"));
  };
  const formItems = [
    {
      label: "Email",
      name: "email",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];
  return (
    <div className="flex h-screen items-center">
      <div className="flex flex-col justify-between px-8 items-center">
        <img className="mb-8" src={logo} width={300} />
        <form className="flex flex-col gap-6 items-center">
          {formItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-2 items-center">
              <label htmlFor={item.name}>{item.label}</label>
              <input
                className="border border-slate-300 rounded-md px-2 py-1"
                type={item.type}
                name={item.name}
                id={item.name}
                onChange={handleChange}
              />
            </div>
          ))}
          <div>
            <button
              className="px-8 py-2 rounded-md border border-slate-300 font-bold"
              type="submit"
              onClick={handleSubmit}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
