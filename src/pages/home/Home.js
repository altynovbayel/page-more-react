import React from 'react'

import './Home.scss'


export default function Home() {
  return (
    <>
      <div className="home_banner">
        <h1>Home</h1>
      </div>
      <div className="home_container">
        <div className="home_inner">
          <div className="home_img">
            <img src="https://blog.klekt.com/wp-content/uploads/2020/05/Off-White-Air-Jordan-1-Chicago.jpg" alt="img" />
          </div>
          <div className="home_text">
            <p>
              Nike, Inc., formerly (1964–78) Blue Ribbon Sports, American sportswear company headquartered in Beaverton, Oregon. It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later. By the early 21st century, 
            </p>
            
          </div>
        </div>
        
        <p className='block_text'>
          Nike had retail outlets and distributors in more than 170 countries, and its logo—a curved check mark called the “swoosh”—was recognized throughout the world.
          From the late 1980s Nike steadily expanded its business and diversified its product line through numerous acquisitions, including the shoe companies Cole Haan (1988; sold in 2012) and Converse, Inc. (2003), the sports-equipment producer Canstar Sports, Inc. (1994; later called Bauer and sold in 2008), and the athletic apparel and equipment company Umbro (2008; sold in 2012). In 1996 the company created Nike ACG (“all-conditions gear”), which markets products for extreme sports such as snowboarding and mountain biking. In the early 21st century Nike began selling sports-technology accessories, including portable heart-rate monitors and high-altitude wrist compasses.
        </p>
      </div>
    </>
  )
}
