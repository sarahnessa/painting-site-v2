import { Link } from "react-router-dom";
import { APP_ROUTES } from "./routes.tsx";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip, {
  type TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Zoom from "@mui/material/Zoom";

export default function NavMenu() {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip describeChild {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#100b1c",
      color: "#fcfbf6",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "none",
    },
  }));

  return (
    <div id="main-nav">
      <Button>
        <Link to={APP_ROUTES.home}>
          <span className="inline-block w-fit">About</span>
        </Link>
      </Button>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
      >
        Series
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": buttonId,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="column" sx={{ alignItems: "flex-start" }}>
            <HtmlTooltip
              describeChild
              title="Work in progress"
              placement="left"
              slots={{
                transition: Zoom,
              }}
            >
              <span>
                <MenuItem disabled onClick={handleClose}>
                  Nature x Spirit
                </MenuItem>
              </span>
            </HtmlTooltip>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="column" sx={{ alignItems: "flex-start" }}>
            <HtmlTooltip
              describeChild
              title="Work in progress"
              placement="left"
              slots={{
                transition: Zoom,
              }}
            >
              <span>
                <MenuItem disabled onClick={handleClose}>
                  Science x Art
                </MenuItem>
              </span>
            </HtmlTooltip>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="column" sx={{ alignItems: "flex-start" }}>
            <HtmlTooltip
              describeChild
              title="Work in progress"
              placement="left"
              slots={{
                transition: Zoom,
              }}
            >
              <span>
                <MenuItem disabled onClick={handleClose}>
                  Travel Gems
                </MenuItem>
              </span>
            </HtmlTooltip>
          </Stack>
        </Box>
      </Menu>
      <Button>
        <Link to={APP_ROUTES.contact}>
          <span className="inline-block w-fit">Contact</span>
        </Link>
      </Button>
    </div>
  );
}
