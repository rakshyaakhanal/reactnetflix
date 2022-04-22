import React, { useState } from 'react';
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@mui/icons-material';
import './ListItem.scss';

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = 'https://vod-progressive.akamaized.net/exp=1643723348~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=85bf820afd0a2d27886d09d2decf9eb312e21fec4723565d41b5bbfb9b630dd0/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4';

    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <img src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee'
                alt='' />

            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className='itemInfo'>
                        <div className='icons'>
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownOutlined className='icon' />
                        </div>

                        <div className='itemInfoTop'>
                            <span>1 hour 14 mins</span>
                            <span className='limit'>+16</span>
                            <span>1999</span>
                        </div>

                        <div className='description'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium hic rem eveniet error possimus, neque ex doloribus.
                        </div>
                        <div className='genre'>Action</div>
                    </div>
                </>
            )}
        </div>
    )
};

export default ListItem;
