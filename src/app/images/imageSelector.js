import Default from '../../assets/images/pic01.jpg'
import Stumpy from '../../assets/images/Stumpy.png'
import ARC from '../../assets/images/ARC.png'
import Grinch from '../../assets/images/Grinch.png'
import Defuse from '../../assets/images/Defuse.png'
import Oscilloscope from '../../assets/images/Oscilloscope Simulation.png'
import BadApple from '../../assets/images/BadApple.png'
import DES from '../../assets/images/cmos.png'
import Runner from '../../assets/images/Runner.png'
import Chisel from '../../assets/images/chisel.jpg'
import Billionaires from '../../assets/images/billionaires.png'
export const ImageSelector = (name) => {
    switch (name) {
        case "Stumpy":
            return Stumpy
        case "ARC":
            return ARC
        case "Grinch":
            return Grinch
        case "Oscilloscope Simulation":
            return Oscilloscope
        case "Defuse the Situation":
            return Defuse
        case "Bad Apple":
            return BadApple
        case "Simplified DES CMOS Chip":
            return DES
        case "Catch Me If You Can!":
            return Runner
        case "Chisel Ibex":
            return Chisel
        case "Billionaire Statistics":
            return Billionaires
        case "Gemini Proact":
            return Default
        default: 
            return Default
    }
}