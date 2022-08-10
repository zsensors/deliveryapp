import { View, Text, Image,TouchableOpacity} from 'react-native'
import React from 'react'


const CategoryCard = ({title, imgURL}) => {
  return (
    <TouchableOpacity className="relative mr-2 bg-white shadow-lg rounded">
      
     <Image 
        source={{uri: imgURL}} className="h-20 w-20 rounded"
      />
      <View className="px-3  rounded-full">

        <Text className="font-bold text-center text-sm ">{title}</Text>
        
       

        </View>
        
    </TouchableOpacity>
  )
}

export default CategoryCard