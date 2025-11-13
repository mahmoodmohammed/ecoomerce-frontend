import { Button } from '@mui/material'
import React from 'react'

import { CiMenuFries } from "react-icons/ci";

import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

const Navigationbar = () => {
  return (
  <>
  

    <nav className='py-2'>

                      <div className="container md:flex items-center justify-end gap-8 hidden">

                                 <div className="col1 w-[20%]">

                                      <Button className='!text-black gap-2'>


                                    <CiMenuFries  className='text-[18px]'/>  Shop By Category <LiaAngleDownSolid className='text-[18px] ml-auto' />
                        </Button>
                                 </div>

                                 <div className="col2 w-[80%] flex items-center ">

                                    <ul className='flex items-center gap-5'>

                                        <li>


                                                <Link to="/">
                                                  <Button className='!text-black'>
                                                Home
                                                </Button>
                                                </Link>
                                        </li>

                                          <li>


                                                <Link to="/fasion">
                                                  <Button className='!text-black'>
                                                Fashion
                                                </Button>
                                                </Link>
                                        </li>

                                           <li>


                                                <Link to="/electonics">
                                                  <Button className='!text-black'>
                                                Electronics
                                                </Button>
                                                </Link>
                                        </li>

                                          <li>


                                                <Link to="/bags">
                                                  <Button className='!text-black'>
                                                Bags
                                                </Button>
                                                </Link>
                                        </li>

                                          <li>


                                                <Link to="/footwear">
                                                  <Button className='!text-black'>
                                                FootWear
                                                </Button>
                                                </Link>
                                        </li>

                                                <li>
                                                <Link to="/Groceries">
                                                  <Button className='!text-black'>
                                                Groceries
                                                </Button>
                                                </Link>
                                        </li>

                                        
                                                <li>
                                                <Link to="/beauty">
                                                  <Button className='!text-black'>
                                                Beauty
                                                </Button>
                                                </Link>
                                        </li>

                                        
                                                <li>
                                                <Link to="/wellness">
                                                  <Button className='!text-black'>
                                                Wellness
                                                </Button>
                                                </Link>
                                        </li>

                                        
                                                <li>
                                                <Link to="/jewellery">
                                                  <Button className='!text-black'>
                                              Jewellery
                                                </Button>
                                                </Link>
                                        </li>



                                    </ul>

                            



                                 </div>



                     
                      </div>

                     
    </nav>

         {/* <CategoryPanel/> */}
  </>


  )
}

export default Navigationbar