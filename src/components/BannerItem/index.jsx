import logo from "../../assets/logo-technopartner.png";
export default function BannerItem() {
  return (
    <div className="flex justify-center items-center bg-slate-100 py-8">
      <img src={logo} width={250} alt="logo" />
    </div>
  );
}
