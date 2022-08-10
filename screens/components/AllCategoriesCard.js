import { View, Text, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { DotsCircleHorizontalIcon } from 'react-native-heroicons/solid'
const AllCategoriesCard = ({title}) => {
  return (
    <TouchableOpacity className="relative mr-2 bg-white shadow-lg rounded">
      
     
      <View className="px-2 rounded-full">
        <View className="h-20 w-13 rounded pt-1 justify-center" >
        <DotsCircleHorizontalIcon size={60} color="#00CCBB" />
        </View>
        <Text className="font-bold text-center text-sm ">{title}</Text>
        
       

        </View>
        
    </TouchableOpacity>
  )
}

export default AllCategoriesCard