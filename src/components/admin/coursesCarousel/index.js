import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router';

import { fakeDataCourse, fakeDataStudent, fakeDataTeacher } from '../../../utils/constants';
import CoursesCard from '../coursesCard';
import './coursesCarousel.css';

const CoursesCarousel = ({ routeName, name, course, teacher, student }) => {
  const history = useHistory();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleCourseCardClick = (id) => {
    if (routeName && id) history.push(`/admin/${routeName}/${id}`);
  };

  return (
    <>
      {course && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all 0.5s linear'
          transitionDuration={500}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {fakeDataCourse &&
            fakeDataCourse.length > 0 &&
            fakeDataCourse.map((item) => (
              <CoursesCard
                key={item.id}
                onCourseCardClick={() => handleCourseCardClick(item.id)}
                name={item.name}
                image={item.image}
                course={item.course}
              />
            ))}
        </Carousel>
      )}
      {teacher && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all 0.5s linear'
          transitionDuration={500}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {fakeDataTeacher &&
            fakeDataTeacher.length > 0 &&
            fakeDataTeacher.map((item) => (
              <CoursesCard
                key={item.id}
                onCourseCardClick={() => handleCourseCardClick(item.id)}
                name={item.name}
                image={item.image}
                course={item.course}
              />
            ))}
        </Carousel>
      )}
      {student && (
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all 0.5s linear'
          transitionDuration={500}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {fakeDataStudent &&
            fakeDataStudent.length > 0 &&
            fakeDataStudent.map((item) => (
              <CoursesCard
                key={item.id}
                onCourseCardClick={() => handleCourseCardClick(item.id)}
                name={item.name}
                image={item.image}
                course={item.course}
              />
            ))}
        </Carousel>
      )}

      <div className='coursesCarousel__status'>
        <p className='courses__status'>8 {name} mới</p>
        <p className='courses__status'>{name} mới</p>
      </div>
    </>
  );
};

export default CoursesCarousel;
