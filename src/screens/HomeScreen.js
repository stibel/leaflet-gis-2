import { useStyle } from "../contexts/StyleContext";


const HomeScreen = props => {
    const { curStyle } = useStyle();

    return (        
            <div style ={{
                height: '90vh',
                width: '100vw',
                alignSelf: 'right',
                backgroundColor: curStyle.colours.black
            }}>
                home
            </div>
    )
}

export default HomeScreen;