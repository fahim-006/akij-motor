import classes from './CardBeforeFooter.module.scss'
const CardBeforeFooter = () => {
    return (
        <>
            <p className={classes.benefit}>Benefit</p>
            <hr className={classes.hr}/>
            <div className={classes.row}> 
                <div className={classes.column}>
                    <div className={classes.card}>
                        <h1 className={classes.h1}>01</h1>
                        <p className={classes.pTitle}>Modern Design</p>
                        <p className={classes.pDetail}>I love Akij Group. If people have goals, they will win one day, like Sheikh Akij Uddin, The Founter of Akij Group.</p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.card}>
                        <h1 className={classes.h1}>02</h1>
                        <p className={classes.pTitle}>Best Price</p>
                        <p className={classes.pDetail}>I love Akij Group. If people have goals, they will win one day, like Sheikh Akij Uddin, The Founter of Akij Group.</p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.card}>
                        <h1 className={classes.h1}>03</h1>
                        <p className={classes.pTitle}>Talented Workers</p>
                        <p className={classes.pDetail}>I love Akij Group. If people have goals, they will win one day, like Sheikh Akij Uddin, The Founter of Akij Group.</p>
                    </div>
                </div>

                <div className={classes.column}>
                    <div className={classes.card}>
                        <h1 className={classes.h1}>04</h1>
                        <p className={classes.pTitle}>Quick Support</p>
                        <p className={classes.pDetail}>I love Akij Group. If people have goals, they will win one day, like Sheikh Akij Uddin, The Founter of Akij Group.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBeforeFooter;