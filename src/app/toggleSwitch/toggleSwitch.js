import { useState } from 'react';
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa6';
const ToggleSwitch = ({ onToggle, initState }) => {
    const [switchState, setSwitchState] = useState(initState ?? false)
    const toggleState = () => {
        const newState = !switchState
        setSwitchState(newState)
        if (onToggle) {
            onToggle(newState)
        }
    }
    const buttonVariants = {
        light: { backgroundColor: '#ffff00'},
        dark: { backgroundColor: '#404140'}
    }
    const knobVariants = {
        light: { backgroundColor: '#ffffff', marginLeft: 4 },
        dark: { backgroundColor: '#000000', marginLeft: 58 },
    }
    const knobStyle = {
        width: 25,
        height: 25,
        marginTop: 5
    }
    return (
        <motion.button
            className='OutlineButton'
            onClick={toggleState}
            style={{
                width: 100,
                height: 45,
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: 15,
                padding: 0,
                borderRadius: 40,
            }}
            animate={switchState ? "dark" : "light"}
            variants={buttonVariants}
        >
            <motion.div
                animate={switchState ? "dark" : "light"}
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 30, 
                }}
                variants={knobVariants}
            >
                {switchState ?
                    <FaMoon
                        color='gold'
                        style={knobStyle}
                    />
                    :
                    <FaSun
                        color='orange'
                        style={knobStyle}
                    />
                }
            </motion.div>
        </motion.button>
    )
}

export default ToggleSwitch