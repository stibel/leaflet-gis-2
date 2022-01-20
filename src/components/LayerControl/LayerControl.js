import LayerControlButton from "./LayerControlButton"

const LayerControl = (props) => {

    return (
        <div
            style={{
                position: 'fixed',
                top: '10vh',
                right: 0,
                height: '90vh',
                width: '10vw',
                backgroundColor: 'pink',
                display: "flex",
                flexFlow: "column",
                zIndex: 5
            }}
        >
            <LayerControlButton />
            <LayerControlButton />
        </div>
    )
}

export default LayerControl