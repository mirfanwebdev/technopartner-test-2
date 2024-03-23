export default function Navbar({ children }) {
  return (
    <div className="fixed bg-white bottom-0 w-screen shadow-md">
      <div className=" flex justify-between gap-6 px-16 py-2">{children}</div>
    </div>
  );
}
