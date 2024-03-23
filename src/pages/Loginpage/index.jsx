import logo from "../../assets/logo-technopartner.png";
export default function LoginPage() {
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
              />
            </div>
          ))}
          <div>
            <button
              className="px-8 py-2 rounded-md border border-slate-300 font-bold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
