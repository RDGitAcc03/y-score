import React, {useState, useEffect} from 'react';
import { Text, Heading } from '@chakra-ui/react';
import './ScoreBar.css';

function ScoreBar({mainScore}) {
    const [color, setColor] = useState('');

    const animationStyles = {
        transition: 'all 3s',
        transform: `rotate(${(mainScore * 0.32) - 50}deg)`,
        borderRightColor: color,
        borderBottomColor: color
    };

    const beginningEndBackground = {
        backgroundColor: color
    }

    const handleColor = (color) => {
        if (color > 669) {
            setColor('#40e9bb');
        } else if (color > 579) {
            setColor('#ff9802');
        } else {
            setColor('#ff4100');
        }
    }
    
    useEffect(() => {
        handleColor(mainScore);
    },[mainScore])

  return (
    <div>
        <div class="d-flex justify-content-center align-items-center mt-5">
            <div class="sales-target__progress-bar">
                <div class="left" style={beginningEndBackground}></div>
                <div class="right">
                <div class="back"></div>
                </div>
                <div class="barOverflow">
                <div class="bar" style={animationStyles}>
                    <div class="top-circle" style={beginningEndBackground}></div>
                </div>

                </div>
                <div class="total-count">
                <Text fontSize='6xl'>{mainScore}</Text>
                <Text class="total-count__text">
                    Your Credit Score
                </Text>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ScoreBar