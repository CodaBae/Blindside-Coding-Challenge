import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";
import { useMediaQuery } from "@chakra-ui/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    return <Layout>{isLargerThan768 ? <DesktopHome /> : <MobileHome />}</Layout>;
  }

};

export default Home;
