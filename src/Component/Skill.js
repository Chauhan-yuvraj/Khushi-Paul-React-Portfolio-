import React from 'react'
import NavBar from './NavBar'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Skill = () => {
    return (
        <>
            <NavBar />
            <div className="text-white mt-20">
                <div className="flex justify-center text-5xl font-bold">SKills</div>
                <div className="flex justify-center text-2xl mt-4 font-IBM">Things that I'm good at</div>
            </div>

            <div className="flex justify-center space-x-32">
                <div className="flex-col">
                    <div className=" pt-44" style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={70} text=''
                            styles={buildStyles({
                                rotation: 0.00,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#70FF00',
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7'
                            })}
                        />
                    </div>
                    <div className="text-white mt-52 flex justify-center text-3xl">HTML</div>
                </div>

                <div className="flex-col">
                    <div className=" pt-44" style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={30} text=''
                            styles={buildStyles({
                                rotation: 0.00,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#70FF00',
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7'
                            })}
                        />
                    </div>
                    <div className="text-white mt-52 flex justify-center text-3xl">CSS</div>
                </div>

                <div className="flex-col">
                    <div className=" pt-44" style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={2} text=''
                            styles={buildStyles({
                                rotation: 0.00,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#70FF00',
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7'
                            })}
                        />
                    </div>
                    <div className="text-white mt-52 flex justify-center text-3xl">JS</div>
                </div>
            </div>
        </>
    )
}

export default Skill