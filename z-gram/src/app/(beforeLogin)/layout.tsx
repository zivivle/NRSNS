import { ReactNode } from "react";
import style from "../(beforeLogin)/_components/main.module.css";

interface IBeforeLoginLayout {
  children: ReactNode;
  modal: ReactNode;
}

export default function BeforeLoginLayout({
  children,
  modal,
}: IBeforeLoginLayout) {
  return (
    <div>
      <div className={style.container}>
        {children}
        {modal}
      </div>
    </div>
  );
}
