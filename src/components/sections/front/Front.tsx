import React,{useState} from 'react'
import { FirstBg, FirstContainer, VideoBg ,PageContent,PageH1,PageP,BtnWrapper,ArrowForward,ArrowRight,ButtonF} from './FrontElements'


export const Front:React.FC = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(prev => { return !prev })
    }
    return (
        <FirstContainer id="home">
        
            <PageContent>
                <PageH1>Find the degrees of separation</PageH1>
                <PageP>
               </PageP>
                {/* <PageP>Let's Find Out !!</PageP> */}
                <BtnWrapper>
                    <ButtonF
                        to="people"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        Get Started {hover?<ArrowForward/>:<ArrowRight/>}
                    </ButtonF>
                </BtnWrapper>
            </PageContent>
        </FirstContainer>
    )
}