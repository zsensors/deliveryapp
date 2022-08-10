import { View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import {ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon} from "react-native-heroicons/outline";
import SafeViewAndroid from '../GlobalStyles';

import deliver from "../images/deliver.jpg";
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';
import sanityClient from '../sanity';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "featured"]{
            ...,
              restaurants[]->{
                ...,
                dishes[]->,
                
                }
              }
`).then ((data) =>{
    setFeaturedCategories(data);
});
    }, []);

    


  return (
    <SafeAreaView className="pt-5" style={SafeViewAndroid.AndroidSafeArea}  >
  

        {/* header */}

        <View className="flex flex-row pb-3 pt-2 items-center mx-2 space-x-2 px-1 ">
            <Image source= {deliver} className="h-10 w-10 bg-gray-300 p-4 rounded-full" />

        <View className="flex-1" >
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            
            <Text className="font-bold text-xl">
            Current Location 
            <View className="absolute ml-1 mt-1 " >
            <ChevronDownIcon size={20} color= "#00CCBB" />
            </View>
            </Text>
            
        
        </View>
        
        <UserIcon  size={35} color= "#00CCBB" />
        
        </View>    
        
        

        {/* header end  */}

        {/* search */}
            <View className="flex flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-sm">
                  <View className="flex items-center justify-center">
                  <SearchIcon color='gray' size={20}/>
                  </View>
                  <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
                </View>
            
            <View >
                <AdjustmentsIcon size= {20} color='#00CCBB'  />
            </View>
          
            </View>

        {/* search end    */}
        

        {/* body */}

        <ScrollView>

        {/* Categories */}

        <Categories />

      {/* Featured */}

      {featuredCategories?.map(category => (
            <FeaturedRow 
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            />
      ))}

      

      

      

      
      </ScrollView> 
    </SafeAreaView>
  );
};

export default HomeScreen;