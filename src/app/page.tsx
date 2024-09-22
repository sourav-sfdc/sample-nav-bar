import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { CompanyLogo  } from "./CompanyLogo";


export default function HomePage() {
  return (
    <Navbar>
      <NavbarBrand className="text-2xl">
          <CompanyLogo/>
          <p className="font-bold text-inherit p-2">Hello World</p>
      </NavbarBrand>
    </Navbar>
    
  );
}
