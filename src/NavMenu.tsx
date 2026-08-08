import { Link } from "react-router-dom"
import { APP_ROUTES } from './routes'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip"


export function NavMenu(_asChild: any) {
  
  return (

    <>
    <div id="main-nav">
        <TooltipProvider>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to={APP_ROUTES.home}><span className="inline-block w-fit">About</span></Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Series</NavigationMenuTrigger>
                <NavigationMenuContent asChild>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavigationMenuLink className="text-gray-500">
                        <span className="inline-block w-fit">Nature x Spirit</span>
                      </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#100b1c] text-[#fcfbf6] border-none shadow-lg" side="left" sideOffset={0}>
                      <p>Under construction</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavigationMenuLink className="text-gray-500">
                        <span className="inline-block w-fit">Science x Art</span>
                      </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#100b1c] text-[#fcfbf6] border-none shadow-lg" side="left" sideOffset={0}>
                      <p>Under construction</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavigationMenuLink className="text-gray-500">
                        <span className="inline-block w-fit">Travel Gems</span>
                      </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#100b1c] text-[#fcfbf6] border-none shadow-lg" side="left" sideOffset={0}>
                      <p>Under construction</p>
                    </TooltipContent>
                  </Tooltip>
                </NavigationMenuContent>

              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to={APP_ROUTES.contact}><span className="inline-block w-fit">Contact</span></Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </TooltipProvider>
      </div>
    </>

  )
};


export default NavMenu