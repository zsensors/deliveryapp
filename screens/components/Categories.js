import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard';
import sanityClient, { urlFor } from '../../sanity';
import {DotsCircleHorizontal} from 'react-native-heroicons/solid'
import AllCategoriesCard from './AllCategoriesCard';
const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      sanityClient.fetch(`
      *[_type == "category" ]
      
      `
      
      ).then(data => {
          setCategories(data);
      })
  }, [])


  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:15, paddingTop: 10, }} horizontal showsHorizontalScrollIndicator={false}>
        
        {categories.map((category)=> (
            <CategoryCard 
            key={category._id}
            imgURL={urlFor(category.image).width(200).url()} 
            title={category.name}
            />
        ))}
        
        <AllCategoriesCard 
        title="All"
        
        />
     
    </ScrollView>
  )
}

export default Categories