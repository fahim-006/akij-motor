import classes from './PlayerSection.module.css';

const PlayerSection = () => {
  return (
    <div className="container mx-auto">
      <div className={classes.wrapper}>
        <div className={classes.player}>
          <video
            autoPlay={true}
            controls
            muted
            controlsList="nodownload"
            poster="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          >
            <source
              src="https://akijmotors.com/download/akijmotors-tvc-2021.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <p>
          AKIJ MOTORS, one of the biggest auto mobile companies in Bangladesh.
          It has been working since 2016 with trust & reputation. Akij Motors
          solely believe in total customer satisfaction with `Trust & Mutual
          Benefit`. The mission is to
        </p>
      </div>
    </div>
  );
};

export default PlayerSection;
