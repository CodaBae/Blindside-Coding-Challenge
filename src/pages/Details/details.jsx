import React, { useEffect, useState } from "react";
import DesktopDetails from "./DestopDetails";
import MobileDetails from "./MobileDetails";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Details = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const checkAuth = await AsyncStorage.getItem('userDetails')
      const parsed = JSON.parse(checkAuth)

      if(parsed){
        setIsAuth(true)
      } else { 
        setIsAuth(false)
        navigate('/')
      }
    })()
  }, [])
 
  if(isAuth){
    return isLargerThan768 ? <DesktopDetails /> : <MobileDetails />;
  }
};

export default Details;
