import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Search';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { BsCart3 } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";

import { IoMdHeartEmpty } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip !py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 md:w-[50%] w-[100%]">
              <p className="text-[14px] font-[500]">
                Get Up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="md:flex items-center gap-x-3 list-none hidden">
                <li>
                  <Link
                    to="/help-center"
                    className="tracking-wider text-zinc-800 hover:text-orange-500 transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="tracking-wider text-zinc-800 hover:text-orange-500 transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header !py-3">
        <div className="container flex items-center justify-between">
          {/* website logo */}
          <div className="col1 w-[25%] ">
            <Link to="/" className="md:text-2xl font-bold text-[10px]">
              <span className="text-orange-500 uppercase">s</span>hop
              <span className="text-orange-500 uppercase">K</span>now
            </Link>
          </div>

          <div className="col2 w-[45%] ">
            <Search />
          </div>

          <div className="col3 w-[30%] md:flex items-center justify-end hidden">
            <ul className="flex items-center justify-end  gap-3  w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="text-zinc-800 tracking-wider hover:text-orange-500 transition"
                >
                  Login
                </Link>
                &nbsp; | &nbsp;
                <Link
                  to="/register"
                  className="text-zinc-800 tracking-wider hover:text-orange-500 transition"
                >
                  Register
                </Link>
              </li>


 <li>
    <Tooltip title="compare">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoIosGitCompare className="text-[22px]" />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>


 <li>
  <Tooltip title="wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoMdHeartEmpty  className="text-[22px]" />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <BsCart3 className="text-[22px]" />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
