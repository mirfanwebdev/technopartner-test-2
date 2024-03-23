import { useEffect, useState } from "react";
import logo from "../../assets/logo-technopartner.png";
import pattern from "../../assets/motif.png";
import CustomCarousel from "../../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { profileHome } from "../../redux/features/profile/profileSlice";
import Modal from "../../components/Modal";

export default function Homepage() {
  const { isLoading, data } = useSelector((state) => state.profile);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileHome());
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div>
        <img src={logo} width={150} />
      </div>
      <div style={{ backgroundImage: `url(${pattern})` }} className="p-6">
        <div className="px-6 py-4 bg-white flex flex-col gap-2 border rounded-lg shadow-lg">
          <h1>{data.greeting}</h1>
          <h2>{data.name}</h2>
          <div className="flex gap-8">
            <div className="w-2/12 rounded-full shadow-xl">
              <img
                onClick={handleShowModal}
                className="object-cover"
                src={data.qrcode}
                alt="qr"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p>Saldo</p>
                <p className="font-bold">Rp. {data.saldo}</p>
              </div>
              <div className="flex justify-between">
                <p>Points</p>
                <p className="text-green-500 font-bold">{data.point}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomCarousel />
      <Modal showModal={showModal} handleShowModal={handleShowModal}>
        <img src={data.qrcode} />
      </Modal>
    </>
  );
}
