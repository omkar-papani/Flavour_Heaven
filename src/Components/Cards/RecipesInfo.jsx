import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from '../Loader/Loader'

function RecipesInfo() {
    const location = useLocation()
    const [recipe, setRecipe] = useState(null)

    const { idMeal } = location.state || {}


    useEffect(() => {
        setTimeout(() => {
            if (!idMeal) return
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                .then(res => res.json())
                .then(data => {
                    setRecipe(data.meals[0])
                })
        }, 1000)
    }, [idMeal])

    const renderIngredients = () => {
        const ingredients = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`]
            const measure = recipe[`strMeasure${i}`]
            if (ingredient && ingredient.trim() !== '') {
                ingredients.push(
                    <div className='w-[45%] '>
                        <p className='p-3 mx-4 font-semibold text-gray-500 place-self-center'
                            key={i}>
                            {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} - &nbsp;
                            {measure ? (measure) : ('') }
                        </p>
                    </div>
                    )
            }
        }
        return ingredients
    }


    return (
        <div className='bg-bgColor p-5'>
            {recipe ? (

                <div className='bg-white md:place-self-center md:w-[90%] w-full p-7 rounded-xl'>
                    <h1 className='text-3xl text-customBrown font-bold place-self-center'>{recipe.strMeal}</h1>
                        <img className='mt-10 w-72 h-72 rounded-xl place-self-center' src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <div className='flex flex-wrap sm:flex-nowrap justify-evenly p-2 w-full mt-5'>
                            <div className='flex'>
                                 <p className='font-semibold text-customBrown'>Category:&nbsp;&nbsp;</p>
                                 <p className='font-semibold text-gray-500'>{recipe.strCategory && recipe.strCategory.length > 0 ? (recipe.strCategory.charAt(0).toUpperCase() + recipe.strCategory.slice(1)) : ''}</p>
                            </div>
                            <div className='flex'>
                                <p className='font-semibold text-customBrown'>Area:&nbsp;&nbsp;</p>
                                <p className='font-semibold text-gray-500'>{recipe.strArea && recipe.strArea.length > 0 ? (recipe.strArea.charAt(0).toUpperCase() + recipe.strArea.slice(1)) : ''}</p>
                            </div>
                            <div className='flex'>
                                <p className='font-semibold text-customBrown'>Tags:&nbsp;&nbsp;</p>
                                <p className='font-semibold text-gray-500'>{recipe.strTags && recipe.strTags.length > 0 ? (recipe.strTags.charAt(0).toUpperCase() + recipe.strTags.slice(1)) : ''}</p>
                            </div>
                        </div>
                        <h1 className='text-xl text-customBrown font-bold m-3'>Ingredients & Measure:</h1>
                        <div className='flex flex-wrap '>
                            {renderIngredients()}
                        </div>
                        <div className='w-full'>
                            <h1 className='text-xl text-customBrown font-bold m-3'>Want to learn the recipe by watching??</h1>
                            <button className='w-full'>
                                <a href={recipe.strYoutube} >
                                    <svg className='place-self-center' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill='#646340'>
                                        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                                    </svg>
                                </a>
                            </button>
                            <p className='text-gray-500 place-self-center'>Click to watch the video</p>
                        </div>

                        <div >
                            <h1 className='text-xl text-customBrown font-bold m-3'>Read the Instructions:</h1>
                            <p className='m-4 text-gray-500'>{recipe.strInstructions}</p>
                        </div>      
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}



{/* <div> */}
{/* { recipe.strIngredient1 = null || '' ? (''):(<p>{recipe.strIngredient1}</p>)   }
{ recipe.strIngredient2 = null || '' ? (''):(<p>{recipe.strIngredient2}</p>)   }
{ recipe.strIngredient3 = null || '' ? (''):(<p>{recipe.strIngredient3}</p>)   }
{ recipe.strIngredient4 = null || '' ? (''):(<p>{recipe.strIngredient4}</p>)   }
{ recipe.strIngredient5 = null || '' ? (''):(<p>{recipe.strIngredient5}</p>)   }
{ recipe.strIngredient6 = null || '' ? (''):(<p>{recipe.strIngredient6}</p>)   }
{ recipe.strIngredient7 = null || '' ? (''):(<p>{recipe.strIngredient7}</p>)   }
{ recipe.strIngredient8 = null || '' ? (''):(<p>{recipe.strIngredient8}</p>)   }
{ recipe.strIngredient9 = null || '' ? (''):(<p>{recipe.strIngredient9}</p>)   }
{ recipe.strIngredient10 = null || '' ? (''):(<p>{recipe.strIngredient10}</p>)   }
{ recipe.strIngredient11 = null || '' ? (''):(<p>{recipe.strIngredient11}</p>)   }
{ recipe.strIngredient12 = null || '' ? (''):(<p>{recipe.strIngredient12}</p>)   }
{ recipe.strIngredient13 = null || '' ? (''):(<p>{recipe.strIngredient13}</p>)   }
{ recipe.strIngredient14 = null || '' ? (''):(<p>{recipe.strIngredient14}</p>)   }
{ recipe.strIngredient15 = null || '' ? (''):(<p>{recipe.strIngredient15}</p>)   }
{ recipe.strIngredient16 = null || '' ? (''):(<p>{recipe.strIngredient16}</p>)   }
{ recipe.strIngredient17 = null || '' ? (''):(<p>{recipe.strIngredient17}</p>)   }
{ recipe.strIngredient18 = null || '' ? (''):(<p>{recipe.strIngredient18}</p>)   }
{ recipe.strIngredient19 = null || '' ? (''):(<p>{recipe.strIngredient19}</p>)   }
{ recipe.strIngredient20 = null || '' ? (''):(<p>{recipe.strIngredient20}</p>)   } */}
// </div>

export default RecipesInfo