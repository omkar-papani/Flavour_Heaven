import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Card from '../Cards/Card'
import Loader from '../Loader/Loader'

function SearchResults() {
    const location = useLocation()
    const { search } = location.state || {}
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    console.log(search)

    async function fetchApi(search) {
        const baseUrl = 'https://www.themealdb.com/api/json/v1/1'
        let allData = []

        try {
            let response = await fetch(`${baseUrl}/search.php?s=${search}`)
            let data = await response.json()
            console.log('API 1 response:', data)
            if (data.meals && data.meals.length > 0) {
                allData = allData.concat(data.meals)
            }

            response = await fetch(`${baseUrl}/search.php?f=${search}`)
            data = await response.json()
            console.log('API 2 response:', data)
            if (data.meals && data.meals.length > 0) {
                allData = allData.concat(data.meals)
            }

            response = await fetch(`${baseUrl}/filter.php?i=${search}`)
            data = await response.json()
            console.log('API 3 response:', data)
            if (data.meals && data.meals.length > 0) {
                allData = allData.concat(data.meals)
            }

            response = await fetch(`${baseUrl}/filter.php?c=${search}`)
            data = await response.json()
            console.log('API 4 response:', data)
            if (data.meals && data.meals.length > 0) {
                allData = allData.concat(data.meals)
            }

            response = await fetch(`${baseUrl}/filter.php?a=${search}`)
            data = await response.json()
            console.log('API 5 response:', data)
            if (data.meals && data.meals.length > 0) {
                allData = allData.concat(data.meals)
            }

            console.log('All data combined:', allData)
            return allData
        } catch (error) {
            console.error('Error fetching data:', error)
            return null
        }
    }

    useEffect(() => {
        setLoading(true)
        if (search) {
            fetchApi(search).then(data => {
                if (data && data.length > 0) {
                    setData(data.filter(item => item !== "no data found"))
                } else {
                    console.log('No data available')
                }
                setLoading(false)
            })
        }
    }, [search])

    

    console.log(data)


    return (
        <div className='bg-bgColor p-2'>
            <h1 className='text-customBrown text-2xl font-semibold'>Recipe Results for "{search}"</h1>
            {loading ? (
                <Loader />
            ) : (data && data.length > 0  ? (
                    <Card data={data}/>
            ) : (
                <div className='place-self-center h-screen flex items-center'>
                    <p className='text-2xl font-bold text-gray-500'>No data found :(</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults