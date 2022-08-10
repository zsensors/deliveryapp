import { View, Text, SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from 'react-native-progress'
import SafeViewAndroid from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center" style={SafeViewAndroid.AndroidSafeArea}>
      <Animatable.Image
       source={require("../images/cart.gif")}
       animation="slideInUp"
       iterationCount={1}
       className="h-96 w-96"

      />

    <Animatable.Text
    animation="slideInUp"
    iterationCount={1}
    className="text-lg my-10 font-bold text-center text-[#00CCBB]"
    >
        Waiting for Restaurant to accept your order!
    </Animatable.Text>

    <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
 
    </SafeAreaView>
  )
}

export default PreparingOrderScreen