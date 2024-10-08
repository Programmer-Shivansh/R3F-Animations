import { Affix,Button,Stack } from "@mantine/core";
import {useCharacterAnimations} from "../context/CharAnimation";
const Interfaces = ()=>{
    const {animations,animationsIndex,setAnimationsIndex} = useCharacterAnimations();
    return (
        <>
        <div style={{position: 'absolute', top: 0, right: 10, zIndex: 1000}}>
            <h1>Bhoot in person</h1>
            </div>
        <Affix style={{ position: 'absolute', top: 0, left: 10, zIndex: 1000 }}>
            
            <Stack>
            {
                animations.map((animation, index) => (
                    <Button key={animation}  variant={
                        index === animationsIndex ? 'filled' : 'light'
                    } onClick={() => setAnimationsIndex(index)
                    }>
                        {animation}
                    </Button>
                ))
            }
            </Stack>
        </Affix>
            </>
    )
}

export default Interfaces;