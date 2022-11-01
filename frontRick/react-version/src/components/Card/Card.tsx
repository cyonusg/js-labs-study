
import styles from "./Card.module.scss";

function components ({ results }:any) {
    let display;
    if(!results) display = "No Characters Found :/";

    display = results.map((item:any) => { 
        let { id, image, name, status, location } = item;
        return (
            <div
              key={id}
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
            >
                <div
                    className={`${styles.card} d-flex flex-column justify-content-center`}
                >
                <img className={`${styles.img} img-fluid`} src={image} alt="" />
                <div className={`${styles.content}`}>
                    <div className="fs-5 fw-bold mb-4">{name}</div>
                    <div className="">
                    <div className="fs-6 fw-normal">Last Location</div>
                    <div className="fs-5">{location.name}</div>
                    </div>
                </div>
                </div>
            </div>
          )
    })

    return (
        <div>
            <div className="row">
            {   display }
            </div>
        </div>
    )
}

export default components