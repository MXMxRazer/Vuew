import '../../sass/SassComponents/snackBar.css'

const SnackBarDesign = ({ htmlCode, message, status }) => {
    const snackBarDesign = (
        <div className="snackbar_design"
            onAnimationEnd={e => {
                const parent = document.querySelector(`.snackbar_design`);
                setTimeout(() => {
                    parent.classList.remove('snackbar_design');
                    parent.classList.add('active');
                }, 1000);
            }}
        >
            <p
                id="snackbar_text"
                style={{
                    "color": status == "green" ? "rgba(0, 255, 0, 0.9)" : "rgba(255, 0, 0, 0.9)"
                }}
            ><span id="snackbar_logo">{htmlCode}</span>{message}</p>
        </div>
    )

    return (
        <div>
            {
                snackBarDesign
            }
        </div>
    );
}

export default SnackBarDesign; 