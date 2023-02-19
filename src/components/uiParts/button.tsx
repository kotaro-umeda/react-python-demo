import { ReactNode } from "react";

type Props = {
  clickFunc?: () => void;
  children: ReactNode;
};

export const Button = (props: Props) => {
  const { children, clickFunc } = props;
  return (
    <>
      <button
        onClick={clickFunc}
        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {children}
      </button>
    </>
  );
};
