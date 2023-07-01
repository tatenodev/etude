import { Menu } from "./Menu/menu";

type Props = {
  showMenu?: boolean;
};

export function Header({ showMenu = true }: Props) {
  return (
    <>
      <h1>TechEtude</h1>
      {showMenu ? <Menu /> : <></>}
    </>
  );
}
