// A Text Header Component that attempts to current screen width
const TextHeader = ({ label, width }) => {
    const getHeaderFontSize = () => {
        if (width < 600) {
            return 30
        }
        else if (width < 769) {
            // Mobile
            return 35
        } else if (width < 1025) {
            return 40
        } else if (width < 1440) {
            return 50
        }

        return 60
    }
    return (
        <div style={{flexDirection: 'row', display: 'flex', paddingTop: 50, marginBottom: 25}}>
            <div style={{flex: 1}}/>
            <h2
                style={{
                    fontSize: getHeaderFontSize(),
                    textAlign: 'center',
                    marginLeft: 20,
                    marginRight: 20
                }}
            >
                {label ?? ""}
            </h2>
            <div style={{flex: 1}}/>
        </div>
    )
}

export default TextHeader