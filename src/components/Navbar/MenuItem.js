import * as React from "react";
import { motion } from "framer-motion";
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import history from '../history';
import {isDay} from './../Utils/time-helper';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const icons = [<HomeIcon/>, <PhotoLibraryIcon/>, <EmailIcon/>, <EventIcon/>, <PaymentIcon/>]
const titles = ['Home', 'Photo Gallery', 'Mailing List', 'Events Calendar', 'Donations']

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const enabled = [true, false, true, false, true]
export const link = ["/", "/photo", "/mail", "/events", "/donate"]


export const MenuItem = ({ i }) => {
  const style = { 
    // border: `2px solid ${colors[i]}`,
    color: enabled[i] ? isDay() ? 'black' : 'seashell' : 'grey'
  };

  function handleClick(i) {
    if (enabled[i]){
      history.push(link[i]);
    }
  }

  function whileHover() {
    if (enabled[i]){
      return {scale: 1.1}
    }
  }

  function whileTap() {
    if (enabled[i]){
      return {scale: 0.95}
    }
  }

  return (
    <motion.li
      variants={variants}
      whileHover={() => whileHover(i)}
      whileTap={() => whileTap(i)}
      onClick={() => handleClick(i)} 
    >
        <div className="icon-placeholder" style={style} >
              <div className="icon-location">
                  {icons[i]}
              </div>
          </div>
          <div className="text-placeholder" style={style} >
              {titles[i]}
          </div>
          <div className="enabled" >
            {enabled[i]}
          </div>

        
    </motion.li>
  );
};
