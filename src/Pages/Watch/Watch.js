import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react';
import './Watch.scss';

const Watch = () => {
    return (
        <div className='watch'>
            <div className='back'>
                <ArrowBackOutlined />
                Home
            </div>
            <video className='video' autoPlay progress controls
                src='https://vod-progressive.akamaized.net/exp=1643723348~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=85bf820afd0a2d27886d09d2decf9eb312e21fec4723565d41b5bbfb9b630dd0/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4' />
        </div>
    )
};

export default Watch;
