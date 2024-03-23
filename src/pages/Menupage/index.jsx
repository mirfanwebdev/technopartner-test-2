import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../redux/features/menu/menuSlice";
export default function Menupage() {
  const { isLoading, categories } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      show_all: 1,
    };
    dispatch(fetchMenu(payload));
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="flex justify-center py-4">
        <h1 className="text-lg font-semibold">MENU</h1>
      </div>
      <div className="flex gap-4 py-2 px-2 text-nowrap overflow-x-auto">
        {categories?.map((item) => (
          <a
            href={`#${item.category_name}`}
            key={item.category_name}
            className="text-sm"
          >
            {item.category_name}
          </a>
        ))}
      </div>
      <div>
        {categories?.map((item) => (
          <div key={item.category_name} className="scroll-smooth">
            <h2
              id={item.category_name}
              className="font-semibold text-sm p-2 bg-slate-100"
            >
              {item.category_name}
            </h2>
            {item.menu?.map((item) => (
              <div key={item.name} className="p-2 flex gap-2">
                <img width={80} src={item.photo} />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
                <p className="text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
