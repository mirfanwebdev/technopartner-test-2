import logo from "../../assets/logo-technopartner.png";
import pattern from "../../assets/motif.png";
import CustomCarousel from "../../components/Carousel";

export default function Homepage() {
  return (
    <>
      <div>
        <img src={logo} width={150} />
      </div>
      <div style={{ backgroundImage: `url(${pattern})` }} className="p-6">
        <div className="px-6 py-4 bg-white flex flex-col gap-2 border rounded-lg shadow-lg">
          <h1>Good Afternoon</h1>
          <h2>Guntur Saputro</h2>
          <div className="flex justify-between">
            <p>QR</p>
            <div>
              <p>Saldo: Rp. 0</p>
              <p>Points: 0</p>
            </div>
          </div>
        </div>
      </div>
      <CustomCarousel />
    </>
  );
}
