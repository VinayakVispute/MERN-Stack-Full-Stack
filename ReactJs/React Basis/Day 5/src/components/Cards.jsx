/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card'

const Cards = ({ setCategory, courses, category }) => {


    function getCourses() {
        if (category === 'All') {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            console.log(allCourses);
            return allCourses;
        } else {
            return courses[category];
        }

    }

    const allCourses = getCourses();

    function filterData() {
        return allCourses.map((course) => {
            return <Card key={course.id} course={course} />;
        });
    }
    return (
        allCourses?.length > 0 ? (
            < div className='flex flex-wrap justify-center gap-4 mb-4' >
                {filterData()}
            </div >) : (
            <div className="flex items-center justify-center w-screen h-screen">
                <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                        <div className="flex flex-col items-center justify-center md:pb-24 lg:pb-32">
                            <h1 className="font-bold text-blue-600 text-9xl">401</h1>
                            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                <span className="text-red-500">Oops!</span> No Data Found
                            </p>
                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                No Data found for this Category.
                            </p>


                        </div>

                    </div>
                </div>
            </div>
        )
    )
}



export default Cards