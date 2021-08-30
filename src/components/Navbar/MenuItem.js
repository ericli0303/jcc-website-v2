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
export const link = ["/", "/photo", "/mail", "/events", "/donate"]


export const MenuItem = ({ i }) => {
  const style = { 
    // border: `2px solid ${colors[i]}`,
    color: isDay() ? 'black' : 'seashell'
  };

  function handleClick(i) {
    history.push(link[i]);
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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
    </motion.li>
  );
};
