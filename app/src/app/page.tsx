export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] px-6 py-16 text-white">
      <div className="video-shell">
        <div className="video-header">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="scene">
          <div className="ambient-glow" />
          <div className="carpet" />
          <div className="plant">
            <div className="plant__leaf plant__leaf--one" />
            <div className="plant__leaf plant__leaf--two" />
            <div className="plant__leaf plant__leaf--three" />
            <div className="plant__pot" />
          </div>
          <div className="lamp">
            <div className="lamp__shade" />
            <div className="lamp__stand" />
          </div>
          <div className="sofa">
            <div className="sofa__inner" />
            <div className="sofa__arm sofa__arm--left" />
            <div className="sofa__arm sofa__arm--right" />
            <div className="sofa__shadow" />
          </div>
          <div className="table">
            <div className="table__top" />
            <div className="table__leg table__leg--left" />
            <div className="table__leg table__leg--right" />
          </div>
          <div className="man">
            <div className="man__shadow" />
            <div className="man__torso" />
            <div className="man__leg man__leg--left" />
            <div className="man__leg man__leg--right" />
            <div className="man__foot man__foot--left" />
            <div className="man__foot man__foot--right" />
            <div className="man__head">
              <div className="man__hair" />
              <div className="man__beard" />
              <div className="man__face">
                <span className="man__eye man__eye--left" />
                <span className="man__eye man__eye--right" />
              </div>
            </div>
            <div className="man__arm man__arm--left">
              <div className="man__forearm man__forearm--left" />
            </div>
            <div className="man__arm man__arm--right">
              <div className="man__forearm man__forearm--right">
                <div className="cup">
                  <div className="cup__body" />
                  <div className="cup__handle" />
                  <div className="cup__steam cup__steam--one" />
                  <div className="cup__steam cup__steam--two" />
                  <div className="cup__steam cup__steam--three" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="caption">
          <h1>Morning Ritual</h1>
          <p>
            Um homem negro com dreads e barba relaxa no sofá de couro, saboreando
            uma xícara de café quente em um amanhecer tranquilo.
          </p>
        </div>
      </div>
    </div>
  );
}
