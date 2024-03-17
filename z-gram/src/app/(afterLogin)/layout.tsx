import { ReactNode } from "react";

interface IAfterLoginLayoutProps {
  children: ReactNode;
}

export default async function AfterLoginLayout({
  children,
}: IAfterLoginLayoutProps) {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
}
