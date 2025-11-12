import React from 'react'
import Heading from '../Heading/heading'
import fruitsCat from '../../assets/images/fruits-and-veggies.png' 
import seaFoodCat from '../../assets/images/meat-and-seafood.png' 
import dairyCat from '../../assets/images/dairy-and-eggs.png' 
import Button from '../Button/button'

const category = [
    {
        id: 1,
        title: 'fruits & veggies',
        description: 'fresh, organic produce sourced daily from local farms Explore a wide range or seasonal fruits and crisp vegetables',
        image: fruitsCat,
    } ,
    {
        id: 2,
        title: 'dairy & eggs',
        description: 'fresh, organic produce sourced daily from local farms Explore a wide range or seasonal fruits and crisp vegetables',
        image: dairyCat,
    } ,
    {
        id: 3,
        title: 'meat &  seafood',
        description: 'fresh, organic produce sourced daily from local farms Explore a wide range or seasonal fruits and crisp vegetables',
        image: seaFoodCat,
    } ,
]

const Category = () => {

    const renderCards = category.map((card) =>{
        return(
            <div key={card.id} className='flex-1 basis-[300px]'>
                <div className='w-full min-h-[30vh] relative -mb-4'>
                    <img src={card.image} alt="" className='absolute bottom-0'/>
                </div>

                <div className='bg-zinc-100 pt-17 p-8 rounded-xl '>
                    <h3 className='text-zinc-800 text-3xl font-bold '>{card.title}</h3>
                    <p className='text-zinc-500 mt-3 mb-9'>{card.description}</p>
                    <Button title="See All" />
                </div>
            </div>

        )
    })
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>

          <Heading highlight="Shop" heading="by Category"/>

          {/* category card data */}
            <div className='flex flex-wrap gap-10 md:mt-15'>
                {renderCards}
            </div>
        </div>
    
    </section>
  )
}

export default Category



